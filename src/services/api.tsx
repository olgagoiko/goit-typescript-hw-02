import axios from "axios";
import { IFetchResponse } from "../services/api.types.js";

const API_KEY = "kw6FqSclC4GTRHJucmuY0x5WbRsxvKGvElRM2Lc-OQY";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
  orientation: "landscape",
  per_page: 15,
};

export const getPhotos = async (
  query: string,
  page: number = 1
): Promise<IFetchResponse> => {
  const { data } = await axios.get(`search/photos?query=${query}&page=${page}`);

  return data;
};
