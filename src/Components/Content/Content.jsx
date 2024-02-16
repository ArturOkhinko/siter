import React from "react";
import style from "./Content.module.css";

export default function Content() {
  return (
    <div className={style.main}>
      <div className={style.filling}>
        <div className={style.column_one}>
          <b className={style.title}>Animation Settings</b>
          <p className={style.description}>
            The user should have the option to select any element on the page
            and set up its animation using the controls in the right panel. A
            dotted line will show the element's position and state before the
            animation begins, giving the user a clear idea of how the animation
            will appear. The preview button on the top panel will open the
            result in a new tab.
          </p>
          <button>Button</button>
        </div>

        <div className={style.column_two}>
          <img src="https://storage.yandexcloud.net/siter.io/city.jpeg" />
        </div>
      </div>
    </div>
  );
}
