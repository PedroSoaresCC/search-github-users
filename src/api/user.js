
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 1000000
});

export const getUser = async ( userName ) => {
  try {
    return api
      .get(`/users/${userName}`)
      .then(res => res.data);
  } catch (error) {
    console.error(error);
  }
}


export const getRepositories = async ( userName ) => {
  try {
    return api
      .get(`/users/${userName}/repos`)
      .then(res => res.data);
  } catch (error) {
    console.error(error);
  }
}

export const getStarredRepositories = async ( userName ) => {
  try {
    return api
      .get(`/users/${userName}/starred`)
      .then(res => res.data);
  } catch (error) {
    console.error(error);
  }
}