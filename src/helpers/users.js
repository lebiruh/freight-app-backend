import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL
// const baseURL = 'http://localhost:5000'

export const getUsersByRole = async (role) => {

  // const userData = JSON.parse(localStorage.getItem('familyShareAuthData'))

  // const token = userData?.token

  try {
    const response = await axios.get(`${baseURL}/api/admin/users/${role}`);

    const users = response.data;

    return users;

  } catch (error) {
    console.log(error);
    const errorData = error.response.data;
    throw new Error(errorData.message || 'Fetching users failed.');
  }

};