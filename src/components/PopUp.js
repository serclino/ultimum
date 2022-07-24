import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { resetAllLists } from "../features/listsSlice";

import style from "../styles/components/PopUp.module.css";

export const PopUp = ({ setIsPopupOpen }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleYes = () => {
    dispatch(resetAllLists());
    history.push("/setup");
  };
  const handleNo = () => setIsPopupOpen(false);

  return (
    <div className={style.blurredBg}>
      <div className={style.popUp}>
        <h1>Do you want to create a new list?</h1>
        <p>Creating a new list will overwrite the current data.</p>
        <section className={style.btns}>
          <button className={style.no} onClick={() => handleNo()}>Cancel</button>
          <button className={style.yes} onClick={() => handleYes()}>Create</button>
        </section>
      </div>
    </div>
  );
};
