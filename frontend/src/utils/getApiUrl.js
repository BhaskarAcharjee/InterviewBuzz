import axios from "axios";

const LOCAL_API_URL = "http://localhost:5000/api";
const PROD_API_URL = "https://interviewgenius.onrender.com/api";

let API_URL = LOCAL_API_URL;

export const checkLocalhost = async () => {
  try {
    await axios.get(LOCAL_API_URL);
    console.log("Localhost API is accessible");
  } catch (error) {
    console.log("Localhost API is not accessible, using production URL");
    API_URL = PROD_API_URL;
  }
};

export const getApiUrl = () => API_URL;

// Initialize API_URL based on environment
if (process.env.NODE_ENV === "development") {
  checkLocalhost();
} else {
  API_URL = PROD_API_URL;
}
