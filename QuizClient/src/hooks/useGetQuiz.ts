import React from "react";
import { quizService } from "../services/rest/quizService";
import { useQuery } from "@tanstack/react-query";
const useGetQuiz = (quizId: number) => {
  return useQuery({
    queryKey: ["quiz", quizId],
    queryFn: async ({ queryKey }) => {
      const [, id] = queryKey;
      return await quizService.getQuizById(id as number);
    },
  });
};

export default useGetQuiz;
