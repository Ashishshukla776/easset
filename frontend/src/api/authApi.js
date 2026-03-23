import api from "../utils/axiosClient";

export const register = (data) => api.post("/auth/register", data);

export const login = (data) => api.post("/auth/login", data);