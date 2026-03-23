import api from "../utils/axiosClient";

export const createAsset = (data) => api.post("/assets", data);

export const getAssets = () => api.get("/assets");