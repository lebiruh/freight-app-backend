import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL
// const baseURL = 'http://localhost:5000'

export const registerTruck = async (rowData) => {

  // const userData = JSON.parse(localStorage.getItem('familyShareAuthData'))

  // const token = userData?.token
  // console.log("order on order helper is: ", rowData);

  try {

    const response = await axios.post(`${baseURL}/api/register/truck`, rowData);

    const posts = response.data;

    return posts;

  } catch (error) {
    console.log(error);
    const errorData = error.response.data;
    throw new Error(errorData.message || 'Freight submission failed.');
  }

};

export const getAllTrucks = async () => {

  // const userData = JSON.parse(localStorage.getItem('familyShareAuthData'))

  // const token = userData?.token

  try {
    const response = await axios.get(`${baseURL}/api/trucks/all`);

    const posts = response.data;
    // console.log("All pending order on helper is: ");
    return posts;

  } catch (error) {
    console.log(error);
    const errorData = error.response.data;
    throw new Error(errorData.message || 'Fetching trucks failed.');
  }

};