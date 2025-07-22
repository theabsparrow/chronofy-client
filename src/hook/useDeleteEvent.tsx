/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../service/api";

export const useDeleteEvent = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, string>({
    mutationFn: async (id: string) => {
      const { data } = await api.delete(`/delete-event/${id}`);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
    },
  });
};
