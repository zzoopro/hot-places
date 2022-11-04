import { HIDE_POPUP, SHOW_POPUP } from "../../utils/constants";
import { INIT_POPUP, PopupInterface } from "../../utils/types";


const popReducer = (state: PopupInterface = INIT_POPUP, action: any) => {
  switch (action.type) {
    case SHOW_POPUP:
      return {...state, ...action.payload};
    case HIDE_POPUP:
      return INIT_POPUP
    default:
      return state;
  }
};
export default popReducer;
