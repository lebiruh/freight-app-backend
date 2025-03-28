import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL
// const baseURL = 'http://localhost:5000'

export const addOrder = async (order) => {

  // const userData = JSON.parse(localStorage.getItem('familyShareAuthData'))

  // const token = userData?.token
  console.log("order on order helper is: ", order);

  try {

    const response = await axios.post(`${baseURL}/api/order/add-order`, order);

    const posts = response.data;

    return posts;

  } catch (error) {
    console.log(error);
    const errorData = error.response.data;
    throw new Error(errorData.message || 'Freight submission failed.');
  }

};

export const getPendingOrders = async () => {

  // const userData = JSON.parse(localStorage.getItem('familyShareAuthData'))

  // const token = userData?.token

  try {
    const response = await axios.get(`${baseURL}/api/orders/pending`);

    const posts = response.data;

    return posts;

  } catch (error) {
    console.log(error);
    const errorData = error.response.data;
    throw new Error(errorData.message || 'Fetching pending orders failed.');
  }

};

export const getPendingOrdersById = async (jobId) => {

  // const userData = JSON.parse(localStorage.getItem('familyShareAuthData'))

  // const token = userData?.token

  try {
    const response = await axios.get(`${baseURL}/api/find-order/pending/${jobId}`);

    const posts = response.data;

    return posts;

  } catch (error) {
    console.log(error);
    const errorData = error.response.data;
    throw new Error(errorData.message || 'Fetching pending orders failed.');
  }

};