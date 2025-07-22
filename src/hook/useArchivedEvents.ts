import { useQuery } from "@tanstack/react-query";
import api from "../service/api";
import type { TEvent } from "../types/events.types";

const fetchEvents = async (
  search: string,
  category: string
): Promise<TEvent[]> => {
  const response = await api.get("/get-archived", {
    params: {
      searchTerm: search || undefined,
      category: category || undefined,
    },
  });
  return response.data?.data;
};

export const useArchivedEvents = (search: string, category: string) => {
  return useQuery({
    queryKey: ["events", search, category],
    queryFn: () => fetchEvents(search, category),
  });
};
