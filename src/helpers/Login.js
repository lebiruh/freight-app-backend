import axios from "axios"

const baseURL = import.meta.env.VITE_BASE_URL
// const baseURL = "http://localhost:5000"

export const Login = async (loginData) => {

  try {

    const response = await axios.post(`${baseURL}/api/auth/login`, loginData);

    console.log("login data on helpers login is: ", response.data);

    return response.data;

  } catch (error) {
    
    console.log("error data on helpers login is: ", error);

    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const errorData = error.response.data;
      throw new Error(errorData.message || 'Login failed');
    }
  }
  
}