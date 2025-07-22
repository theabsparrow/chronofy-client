import { useParams } from "react-router-dom";
import { useSingleEvent } from "../../hook/useAEvent";
import ErrorPage from "../errorPage/ErrorPage";
import type { TCategory } from "../../types/events.types";
import { useUpdateEvent } from "../../hook/useUpdateEvent";
import { toast } from "sonner";
import DeleteButton from "../../component/events/DeleteButton";

const categoryColors: Record<TCategory, string> = {
  Work: "bg-blue-500",
  Personal: "bg-purple-500",
  Health: "bg-green-500",
  Finance: "bg-yellow-500",
  Social: "bg-pink-500",
  Study: "bg-indigo-500",
  Travel: "bg-teal-500",
  Other: "bg-gray-500",
};

const SingleEvent = () => {
  const params = useParams();
  const id = params.id;
  const { data, isLoading, isError, refetch } = useSingleEvent(id);

  const { mutateAsync } = useUpdateEvent();
  const handleArchive = async (eventData: boolean) => {
    const payload = {
      id: data?._id as string,
      updatedata: {
        archived: eventData,
      },
    };

    const toastId = toast.loading("Archive updating...");

    try {
      await mutateAsync(payload);
      toast.success("Archive updated successfully!", { id: toastId });
      await refetch();
    } catch (error) {
      console.error(error);
      toast.error("Failed to update archive", { id: toastId });
    }
  };
  if (isLoading) return <p>Loading event...</p>;
  if (isError || !data) return <ErrorPage />;
  return (
    <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 space-y-6">
      <header className="flex flex-col md:flex-row md:justify-between md:items-center">
        <h1
          className={`text-3xl font-bold ${
            data?.archived ? "line-through text-gray-400" : "text-gray-900"
          }`}
        >
          {data?.title}
        </h1>
        {data?.category && (
          <span
            className={`text-sm font-semibold text-white px-3 py-1 rounded-full mt-3 md:mt-0 flex items-center justify-center ${
              categoryColors[data?.category] ?? "bg-gray-400"
            }`}
          >
            {data?.category}
          </span>
        )}
      </header>

      <div className="text-gray-700 space-y-2">
        <p>
          <strong>Date:</strong> {data?.date}
        </p>
        <p>
          <strong>Time:</strong> {data?.time}
        </p>
        {data?.notes && (
          <p>
            <strong>Notes:</strong> {data?.notes}
          </p>
        )}
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => handleArchive(!data?.archived)}
          className={`px-3 py-1 rounded-md font-semibold transition cursor-pointer ${
            data?.archived
              ? "bg-green-600 hover:bg-green-700 text-white"
              : "bg-gray-300 hover:bg-gray-400 text-gray-900"
          }`}
          aria-pressed={data?.archived}
        >
          {data?.archived ? "Unarchive" : "Archive"}
        </button>

        <DeleteButton id={data?._id} />
      </div>
    </section>
  );
};

export default SingleEvent;
