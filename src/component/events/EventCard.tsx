import { Link } from "react-router-dom";
import type { TEvent } from "../../types/events.types";

const categoryColorMap: Record<string, string> = {
  Work: "bg-green-600",
  Personal: "bg-yellow-500",
  Health: "bg-rose-500",
  Finance: "bg-blue-600",
  Social: "bg-pink-500",
  Study: "bg-indigo-500",
  Travel: "bg-teal-500",
  Other: "bg-gray-500",
};

const EventCard = ({ event }: { event: TEvent }) => {
  const categoryBg = categoryColorMap[event.category] || "bg-gray-500";
  return (
    <section className="w-[90vw] md:w-[25vw] bg-white rounded-md p-4 shadow-sm border mb-4 flex flex-col ">
      <div className="flex-grow">
        <div className="flex flex-col">
          <div className="flex-grow">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
              <h3
                className={`text-lg font-medium ${
                  event.archived
                    ? "line-through text-gray-400"
                    : "text-gray-800"
                }`}
              >
                {event.title}
              </h3>
              <span
                className={`text-xs text-white px-2 py-1 rounded mt-2 md:mt-0 ${categoryBg}`}
              >
                {event.category}
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-1">
              📅 {event.date} ⏰ {event.time}
            </p>

            {event.notes && (
              <p className="text-sm text-gray-500 italic mb-2">
                📝 {event.notes}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between mt-2">
            <button
              className={`text-sm px-3 py-1 rounded border ${
                event.archived
                  ? "bg-gray-200 text-gray-600"
                  : "bg-green-100 text-green-700 hover:bg-green-200"
              } transition`}
            >
              {event.archived ? "Unarchive" : "Archive"}
            </button>
            <button className="text-sm px-3 py-1 rounded border bg-red-100 text-red-700 hover:bg-red-200 transition">
              Delete
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 ">
        <Link
          to={`event/${event._id}`}
          className="bg-green-700 px-2 py-1 rounded-lg text-white text-base"
        >
          View Details
        </Link>
      </div>
    </section>
  );
};

export default EventCard;
