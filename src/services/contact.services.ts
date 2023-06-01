import axios from "axios";
import { IQuestion } from "../models/question.model";
import { useMutation } from "@tanstack/react-query";

const sendQuestion = async (data: IQuestion) => {
  return axios
    .post("http://localhost:5000/api/submit", data)
    .then((res) => res.data);
};

export const useSendQuestion = (
  onSuccess?: (success: any) => void,
  onError?: (error: any) => void
) => {
  return useMutation(
    (data: IQuestion) => {
      return sendQuestion(data);
    },
    {
      onSuccess: (success) => {
        if (onSuccess) onSuccess(success);
      },
      onError: (error) => {
        if (onError) onError(error);
      },
    }
  );
};
