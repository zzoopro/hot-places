import { HIDE_POPUP, INIT_POPUP, SHOW_POPUP } from "../../utils/constants";
import { PopupInterface } from "../../utils/types";

const popupReducer = (state: PopupInterface = INIT_POPUP, action: any) => {
  switch (action.type) {
    case SHOW_POPUP:
      return { ...state, ...action };
    case HIDE_POPUP:
      return INIT_POPUP;
    default:
      return state;
  }
};
export default popupReducer;
