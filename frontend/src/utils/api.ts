import axios from "axios";

const API_KEY = "devU01TX0FVVEgyMDIyMTAyODAyMzU0MTExMzE1MzY=";

export const getAddress = async (keyword: string) => {
  return await axios(
    `https://business.juso.go.kr/addrlink/addrLinkApi.do?confmKey=${API_KEY}&keyword=${keyword}&countPerPage=${10}&currentPage=${1}&resultType=json`
  ).then((response) => response);
};
