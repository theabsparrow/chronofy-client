"use client";
import { FaEdit } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import type { TCreateEvent } from "../../types/events.types";

interface confirmModalProps {
  data: TCreateEvent;
  onEdit: () => void;
  onConfirm: () => Promise<void>;
  onClose: () => void;
}

const ConfirmationModal = ({
  data,
  onEdit,
  onConfirm,
  onClose,
}: confirmModalProps) => {
  return (
    <div className=" relative flex items-center justify-center ">
      <button
        onClick={onClose}
        className="absolute top-2 right-6 text-lg cursor-pointer"
      >
        {" "}
        <RxCross1 />
      </button>

      <div className="bg-[#c9c9ff]  p-6 md:p-8 rounded-lg shadow-xl w-full max-w-lg mx-4 space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold">
          Confirm Your Submission
        </h2>
        <div className="space-y-2 text-gray-700 ">
          <div>
            <strong>Title:</strong> {data.title}
          </div>
          {data?.notes && (
            <div>
              <strong>Notes:</strong> {data?.notes}
            </div>
          )}

          <div className="flex items-start gap-1">
            <strong>Date:</strong>
            <p>{data.date}</p>
          </div>
          <div className="flex items-start gap-1">
            <strong>Time:</strong>
            <p>{data.time}</p>
          </div>
        </div>

        <div className=" flex justify-between gap-4">
          <button
            onClick={onEdit}
            className="border border-gray-800  text-lg text-gray-900  hover:text-white duration-500 flex items-center gap-2 py-2 px-2 hover:bg-gray-600 rounded-xl cursor-pointer"
          >
            Edit
            <FaEdit />
          </button>
          <button
            onClick={onConfirm}
            className="border border-gray-800 text-lg text-gray-900 hover:text-white duration-500 flex items-center gap-2 py-2 px-2 hover:bg-gray-600 rounded-xl cursor-pointer"
          >
            Confirm
            <GiConfirmed className="text-green-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
