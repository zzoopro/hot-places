import React from "react";
import { HIDE_POPUP, SHOW_POPUP } from "../../utils/constants";

interface ShowPopupInterface {
  element: () => JSX.Element;
  resultFn: () => void;
  key?: string;
}

export const showPopup = (payload: ShowPopupInterface) => {
  return {
    type: SHOW_POPUP,
    isShow: true,
    ...payload,
  };
};

export const hidePopup = () => {
  return {
    type: HIDE_POPUP,
    isShow: false,
  };
};
