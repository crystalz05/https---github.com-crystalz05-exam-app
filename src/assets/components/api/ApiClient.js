import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:8080",
});

export const executeJwtAuthentication = (username, password) =>
  apiClient.post("/authenticate", { username, password });

export const executeSignUp = (name, username, password) =>
  apiClient.post("/api/create-user", { name, username, password });

export const createExam = (examType) => {
  const token = sessionStorage.getItem("token");

  return apiClient.post(
    "/exam/create",
    { examType },
    {
      headers: {
        Authorization: token,
      },
    }
  );
};

export const retriveExamById = (id) => apiClient.get(`/exam/id/${id}`);

export const retriveUserId = (username) =>
  apiClient.get(`/api/retrive-userid/${username}`);

export const createSubmission = (userId, examId, answers) =>
  apiClient.post(`/submissions/create`, { userId, examId, answers });

export const deleteExamById = (id) => apiClient.delete(`/exam/delete/${id}`);
