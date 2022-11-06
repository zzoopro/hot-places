import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import styled from "styled-components";

import { hidePopup } from "../../redux/actions/popupAction";
import { PopupInterface } from "../../utils/types";
import Backdrawer from "./Backdrawer";

const BasicPopup = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div onClick={() => dispatch(hidePopup())}>X</div>
      <button>확인</button>
    </div>
  );
};

const Popup = () => {
  const dispatch = useDispatch();
  const popup: PopupInterface = useSelector((state: any) => state.popup);

  const PopupWrap = motion.div;

  return (
    <>
      {popup.isShow ? (
        <>
          <Backdrawer onClick={popup.resultFn}></Backdrawer>

          <PopupWrap
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="w-max h-max fixed left-0 right-0 top-0 bottom-0 m-auto z-50"
          >
            {<popup.element />}
          </PopupWrap>
        </>
      ) : null}
    </>
  );
};

export default Popup;
