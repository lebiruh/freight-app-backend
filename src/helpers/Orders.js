import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL
// const baseURL = 'http://localhost:5000'

export const addOrder = async (order) => {

  // const userData = JSON.parse(localStorage.getItem('familyShareAuthData'))

  // const token = userData?.token
  // console.log("order on order helper is: ", order);

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

export const getOrders = async (status) => {

  // const userData = JSON.parse(localStorage.getItem('familyShareAuthData'))

  // const token = userData?.token

  try {
    const response = await axios.get(`${baseURL}/api/orders/${status}`);

    const posts = response.data;
    // console.log("All pending order on helper is: ");
    return posts;

  } catch (error) {
    console.log(error);
    const errorData = error.response.data;
    throw new Error(errorData.message || 'Fetching pending orders failed.');
  }

};

export const getOrdersSalesData = async (status) => {

  // const userData = JSON.parse(localStorage.getItem('familyShareAuthData'))

  // const token = userData?.token

  try {
    const response = await axios.get(`${baseURL}/api/orders/sales/${status}`);

    const posts = response.data;
    // console.log("All pending order on helper is: ");
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

export const getPendingOrdersBySearch = async (searchQuery) => {

  // const userData = JSON.parse(localStorage.getItem('familyShareAuthData'))

  // const token = userData?.token

  console.log("searchQuery on helper is: ", searchQuery);

  if(searchQuery.startsWith(" ")) {
    return
  }

  try {
    const response = await axios.get(`${baseURL}/api/find-orders/pending/search?q=${searchQuery}`);
    
    const posts = response.data;
    console.log("result on helper is: ", posts);
    return posts;

  } catch (error) {
    console.log(error);
    const errorData = error.response.data;
    throw new Error(errorData.message || 'Fetching pending orders failed.');
  }

};

export const upDateOrderByStatus = async (status) => {

  // const userData = JSON.parse(localStorage.getItem('familyShareAuthData'))

  // const token = userData?.token

  console.log('Object on update order is: ', status);

  try {
    const response = await axios.patch(`${baseURL}/api/status/update-status`, status);

    const posts = response?.data;
    // console.log("All pending order on helper is: ");
    return posts;

  } catch (error) {
    console.log(error);
    const errorData = error?.response?.data;
    throw new Error(errorData?.message || 'Fetching trucks failed.');
  }

};

export const upDateBookingByStatus = async (status) => {

  // const userData = JSON.parse(localStorage.getItem('familyShareAuthData'))

  // const token = userData?.token

  console.log('Object on update order is: ', status);

  try {
    const response = await axios.patch(`${baseURL}/api/booking/update-booking/status`, status);

    const posts = response?.data;
    // console.log("All pending order on helper is: ");
    return posts;

  } catch (error) {
    console.log(error);
    const errorData = error?.response?.data;
    throw new Error(errorData?.message || 'Fetching trucks failed.');
  }

};