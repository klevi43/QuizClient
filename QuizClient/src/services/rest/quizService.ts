import axios from "axios";
import { axiosInstance } from "./axiosClient";
import type { QuizDto } from "../../models/QuizDto";
class QuizService {
  constructor() {}
  async getQuizById(quizId: number): Promise<QuizDto | undefined> {
    try {
      const res = await axiosInstance.get("/quiz/get", {
        params: { id: quizId },
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
}

export const quizService = new QuizService();
