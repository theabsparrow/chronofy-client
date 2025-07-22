import { useState } from "react";
import { useEvents } from "../../hook/useEvents";
import ErrorPage from "../../page/errorPage/ErrorPage";
import EventCardLoader from "../loader/EventCardLoader";
import EventCard from "./EventCard";
import { categoryOptions } from "../../const/event.const";
import { useDebounce } from "../../service/debounce";

const Events = () => {
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const debouncedSearch = useDebounce(search, 300);
  const { data, isLoading, isError } = useEvents(
    debouncedSearch,
    filterCategory
  );
  if (isLoading) return <EventCardLoader />;
  if (isError) return <ErrorPage />;

  return (
    <section className="my-4 md:my-8 space-y-4">
      <div className="flex flex-col md:flex-row items-center justify-between md:justify-center gap-4 mb-6 px-4">
        <input
          type="text"
          placeholder="Search by title or notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className=" px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 transition text-sm"
        />
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className=" px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 transition text-sm bg-white"
        >
          <option value="">Select Category</option>
          {categoryOptions.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="text-center flex flex-col justify-center items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700">
          Your Scheduled Events
        </h2>
        <p className=" text-gray-600 w-[90vw] md:w-[35vw]">
          Stay organized and never miss a task! Here’s a list of all your
          upcoming events. You can manage, archive, or delete them easily.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 justify-center">
        {data?.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </section>
  );
};

export default Events;
