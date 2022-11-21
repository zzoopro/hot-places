import axios from "axios";
import { getTokenInLocalStorage } from "./utils";

const ADDRESS_API_KEY = process.env.REACT_APP_ADDRESS_API_KEY;
const BASE_SERVER_URL = `http://localhost:${process.env.REACT_APP_BACKEND_PORT}`;



export const getAddress = async (keyword: string, index: number = 1) => {
  return await axios(
    `https://business.juso.go.kr/addrlink/addrLinkApi.do?confmKey=${ADDRESS_API_KEY}&keyword=${keyword}&countPerPage=${10}&currentPage=${index}&resultType=json`,
  ).then((response) => response);
};
export const getPlaces = async (offset?: number) => {
  return await axios(`${BASE_SERVER_URL}/api/places/all`).then(
    (response: any) => response
  );
};
export const getPlace = async(id: string) => {
  return await axios(`${BASE_SERVER_URL}/api/places/${id}`).then((response: any) => response);
}

export const postPlace = async (data: any) => {
  return await axios.post(`${BASE_SERVER_URL}/api/places/add`, data)
};
export const postSignUp = async (form: any) => {
  return await axios.post(`${BASE_SERVER_URL}/api/users/signup`, form)
};
export const postLogin = async (form: any) => {
  return await axios.post(`${BASE_SERVER_URL}/api/users/login`, form)
};