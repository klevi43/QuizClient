import axios from "axios";
import { axiosInstance } from "./axiosClient";
class QuizService {
  constructor() {}
  async getQuizById() {
    try {
      const res = await axiosInstance.get("/quiz/get", {
        params: { id: 1 },
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
}

export const quizService = new QuizService();
