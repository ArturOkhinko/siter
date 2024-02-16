import React from "react";
import style from "./Toggle.module.css";

export default function Toggle({ value, setValue }) {
  return (
    <label className={style.switch}>
      <input type="checkbox" onClick={() => setValue(!value)} />
      <span className={style.slider}></span>
    </label>
  );
}
