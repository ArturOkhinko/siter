import React from "react";
import style from "./TopBar.module.css";

export default function TopBar() {
  return (
    <div className={style.main}>
      <div className={style.logo}>
        <img src="https://storage.yandexcloud.net/siter.io/logo.jpeg" />
      </div>
      <button className={style.preview}>Preview</button>
    </div>
  );
}
