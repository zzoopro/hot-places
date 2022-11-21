import { INIT_USER, RESET_USER, SET_USER } from "../../utils/constants";


const userReducer = (state: any = INIT_USER, action: any) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action };
    case RESET_USER:
      return INIT_USER;
    default:
      return state;
  }
};
export default userReducer;
