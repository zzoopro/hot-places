import { SET_LOADING, STOP_LOADING } from "../../utils/constants";
import { INIT_LOADING, LoadingInterface } from "../../utils/types";

const loadingReducer = (state: LoadingInterface = INIT_LOADING, action: any) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, ...action.payload};    
    default:
      return state;
  }
};
export default loadingReducer;
