
import axios from "axios";

const API_KEY = "bb8f92e636164c9ca1fce24056dd05b4";
const BASE_URL = "https://newsapi.org/v2/top-headlines";

const NewsApi = async (category = "general", country = "in") => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        country,
        category,
        apiKey: API_KEY,
      },
    });
    return response.data.articles;
  } catch (error) {
    throw new Error(error.message);
  }
};

export  { NewsApi };
