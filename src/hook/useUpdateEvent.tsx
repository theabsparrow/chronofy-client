/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../service/api";

type TUpdatedata = {
  id: string;
  updatedata: {
    archived: boolean;
  };
};

export const useUpdateEvent = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, TUpdatedata>({
    mutationFn: async (eventData: TUpdatedata) => {
      const { data } = await api.put(
        `/update-event/${eventData.id}`,
        eventData.updatedata
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
    },
  });
};
