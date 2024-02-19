import React, { useEffect, useRef } from "react";
import style from "./RangeSlider.module.css";
import { useDispatch } from "react-redux";
import { animationParametrsAction } from "../../Store/reducers/animationParametrsReducer";

export default function RangeSlider({
  name,
  min,
  max,
  value,
  setValue,
  step = "1",
  unit,
  nameAction,
}) {
  const rangeRef = useRef(null);
  const dispatch = useDispatch()

  const handleChange = (e) => {
    if (step === "1") {
      const floorValue = Math.floor(e.target.value)
      dispatch(animationParametrsAction[nameAction](floorValue))
      return setValue(floorValue);
    }
    dispatch(animationParametrsAction[nameAction](e.target.value))
    setValue(e.target.value);
  };

  useEffect(() => {
    const rangeElement = rangeRef.current;
    let numberStep = min + max;
    let newValue = value;
    if (min < 0) {
      numberStep = min * -1 + max;
      newValue = value + min * -1;
    }
    const rangeWidth = (newValue / numberStep) * rangeElement.offsetWidth;
    rangeElement.style.setProperty("--range-width", `${rangeWidth}px`);
  }, [value, max]);

  return (
    <div className={style.main}>
      <p className={style.name}>{name}</p>
      <input
        type="range"
        min={String(min)}
        max={String(max)}
        step={step}
        value={value}
        onChange={(e) => handleChange(e)}
        ref={rangeRef}
      />
      {unit ? (
        <p className={style.value}>{value + unit}</p>
      ) : (
        <p className={style.value}>{value}</p>
      )}
    </div>
  );
}
