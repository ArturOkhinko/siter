import React from "react";
import style from "./Main.module.css";
import TopBar from "../../Components/TopBar/TopBar";
import Content from "../../Components/Content/Content";
import SettingsBar from "../../Components/SettingsBar/SettingsBar";

export default function Main() {
  return (
    <div className={style.main}>
      <div className={style.topBar}>
        <TopBar />
      </div>
      <div className={style.content}>
        <Content />
      </div>
      <div className={style.settingsBar}>
        <SettingsBar />
      </div>
    </div>
  );
}
