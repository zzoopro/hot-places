import axios from "axios";

const ADDRESS_API_KEY = process.env.REACT_APP_ADDRESS_API_KEY

export const getAddress = async (keyword: string) => {
  return await axios(
    `https://business.juso.go.kr/addrlink/addrLinkApi.do?confmKey=${ADDRESS_API_KEY}&keyword=${keyword}&countPerPage=${10}&currentPage=${1}&resultType=json`
  ).then((response) => response);
};
