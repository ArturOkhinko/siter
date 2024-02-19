import React from "react";
import style from "./TopBar.module.css";

export default function TopBar({previewFunction, resetValue}) {
  
  return (
    <div className={style.main}>
      <div className={style.logo}>
        <img src="https://storage.yandexcloud.net/siter.io/logo.jpeg" />
      </div>
      <div className={style.buttons}>
        <button className={style.preview} onClick={(e) => previewFunction()}>Preview</button>
        <button className={style.preview} onClick={(e) => resetValue()}>Reset value</button>
      </div>
    </div>
  );
}
