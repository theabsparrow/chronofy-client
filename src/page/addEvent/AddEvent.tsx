import { useForm } from "react-hook-form";
import type { TCreateEvent } from "../../types/events.types";
import InputType from "../../component/formInput/InputType";
import { getTomorrowDate } from "../../service/DateConverter";
import InputTextArea from "../../component/formInput/InputTextArea";
import { categorizeEvent } from "../../service/categorizeEVents";
import { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";
import { toast } from "sonner";
import LoadingModal from "../../component/loader/LoadingModal";
import { useCreateEvent } from "../../hook/useCreateEvent";
import { useNavigate } from "react-router-dom";

const AddEvent = () => {
  const [showModal, setShowModal] = useState(false);
  const [overlyVisible, setOverleyVisible] = useState(false);
  const [modalContent, setModalContent] = useState(false);
  const [isLodaing, setIsloading] = useState(false);
  const [formData, setFormData] = useState<TCreateEvent>({
    title: "",
    notes: "",
    date: "",
    time: "",
  });
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isValid },
    reset,
    trigger,
  } = useForm<TCreateEvent>({
    mode: "onChange",
    criteriaMode: "all",
  });

  const { mutateAsync } = useCreateEvent();

  const onSubmit = async (data: TCreateEvent) => {
    const eventCategory = categorizeEvent(
      `${data?.title} ${data?.notes || ""}`
    );
    setFormData({
      title: data.title,
      notes: data.notes,
      date: data.date,
      time: data.time,
      category: eventCategory,
    });
    setShowModal(true);
    setOverleyVisible(true);
    setIsloading(true);
    setTimeout(() => {
      setIsloading(false);
      setModalContent(true);
    }, 5000);
  };

  const handleConfirm = async (): Promise<void> => {
    const templateParams: TCreateEvent = {
      title: formData.title,
      date: formData.date,
      time: formData.time,
    };
    if (formData.notes) {
      templateParams.notes = formData.notes;
    }
    if (!templateParams) {
      toast.error("faild to send message");
      return;
    }
    const toastId = "event";
    toast.loading("Creating event...", { id: toastId });

    try {
      await mutateAsync(templateParams);
      toast.success("Event created successfully!", { id: toastId });
      reset();
      navigate("/");
      setShowModal(false);
      setOverleyVisible(false);
      setModalContent(false);
    } catch (error) {
      toast.error("Failed to create event. Please try again.", { id: toastId });
      console.error("Event creation error:", error);
    }
  };

  const handleEdit = () => {
    setShowModal(false);
    setOverleyVisible(false);
    setModalContent(false);
  };

  const handleClose = () => {
    reset();
    setShowModal(false);
    setShowModal(false);
    setOverleyVisible(false);
    setModalContent(false);
  };

  return (
    <section className="flex flex-col items-center justify-center space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-gray-800 ">
          Schedule a New Event
        </h2>
        <p className="text-gray-600 dark:text-gray-400 w-[40vw]">
          Easily organize and track your important tasks, meetings, or personal
          goals by adding a new event below. Fill in the details and make sure
          nothing slips through the cracks.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 w-[30vw] bg-gray-200 p-10 rounded-xl"
      >
        <InputType
          label="Title"
          name="title"
          placeholder="event title"
          register={register}
          required={true}
          error={errors.title}
          type="text"
          trigger={trigger}
        />
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-20">
          <div>
            <label className="block text-sm font-medium text-gray-700 ">
              Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              {...register("date", { required: "Date is required" })}
              min={getTomorrowDate()}
              className="mt-1 w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-[#99a1af80] text-gray-900 focus:ring-purple-500 focus:outline-none"
            />
            {errors.date && (
              <p className="text-sm text-red-500 mt-1">{errors.date.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 ">
              Time <span className="text-red-500">*</span>
            </label>
            <input
              type="time"
              {...register("time", { required: "Time is required" })}
              className="mt-1 w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-[#99a1af80] text-gray-900 focus:ring-purple-500 focus:outline-none"
            />
            {errors.time && (
              <p className="text-sm text-red-500 mt-1">{errors.time.message}</p>
            )}
          </div>
        </div>
        <InputTextArea
          label="Notes"
          name="notes"
          placeholder="write your notes"
          register={register}
          error={errors.notes}
          required={false}
          validateWatch={watch("notes") ?? ""}
          trigger={trigger}
        />
        <div className="flex justify-end items-center">
          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className=" text-gray-800  bg-[rgba(255,255,255,0.7)]   px-2 py-1 rounded-lg text-lg font-medium cursor-pointer flex items-center gap-2 disabled:bg-[rgba(255,255,255,0.5)] disabled:text-gray-800/50  duration-500 hover:bg-gray-800 hover:text-white/70"
          >
            {isSubmitting ? "Creating Event" : "Create Event"}
          </button>
        </div>
      </form>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {overlyVisible && (
            <div className="absolute inset-0 bg-black/60 dark:bg-white/20 backdrop-blur-sm z-10" />
          )}
          {isLodaing && <LoadingModal />}
          {modalContent && (
            <div className="relative z-20">
              <ConfirmationModal
                data={formData}
                onEdit={handleEdit}
                onConfirm={handleConfirm}
                onClose={handleClose}
              />
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default AddEvent;
