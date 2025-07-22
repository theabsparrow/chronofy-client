/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { TCreateEvent } from "../types/events.types";
import api from "../service/api";

export const useCreateEvent = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, TCreateEvent>({
    mutationFn: async (eventdata) => {
      const { data } = await api.post("/create-event", eventdata);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
    },
  });
};
