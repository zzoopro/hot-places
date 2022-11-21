import { RESET_USER, SET_USER } from "../../utils/constants";


export const setUserAction = (payload?: any) => {
  return {
    type: SET_USER,
    isLogin: true,
    ...payload,
  };
};

export const resetUserAction = () => {
  return {
    type: RESET_USER,
  };
};
