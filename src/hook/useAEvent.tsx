import { useQuery } from "@tanstack/react-query";
import api from "../service/api";
import type { TEvent } from "../types/events.types";

const fetchSingleEvent = async (id: string): Promise<TEvent> => {
  const { data } = await api.get(`/get-event/${id}`);
  return data?.data;
};

export const useSingleEvent = (id: string | undefined) => {
  return useQuery({
    queryKey: ["event", id],
    queryFn: () => fetchSingleEvent(id!),
    enabled: !!id,
  });
};
