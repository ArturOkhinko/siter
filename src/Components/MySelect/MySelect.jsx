import React from "react";
import style from "./MySelect.module.css";

export default function MySelect({ options, value, setValue }) {
  return (
    <select
      className={style.select}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      {options.map((option) => (
        <option value={option.name}>{option.name}</option>
      ))}
    </select>
  );
}
