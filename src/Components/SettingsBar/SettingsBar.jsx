import React, { useEffect, useState } from "react";
import style from "./Settings.module.css";
import RangeSlider from "../RangeSlider/RangeSlider";
import MySelect from "../MySelect/MySelect";
import Toggle from "../Toggle/Toggle";

export default function SettingsBar({DOMElement}) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [opasity, setOpasity] = useState(0);
  const [scale, setScale] = useState(1);
  const [blur, setBlur] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [delay, setDelay] = useState(0);

  const [functionValue, setFunctionValue] = useState("linear");
  const [reply, setReply] = useState(false);

  const functions = [
    { name: "linear" },
    { name: "ease" },
    { name: "ease-in" },
    { name: "ease-out" },
    { name: "ease-in-out" },
  ];

  useEffect(() => {
    if(DOMElement.current === undefined) {
      return
    }
    console.log(y, x, opasity, scale)
    DOMElement.current.presumptivePositionTop = y
    DOMElement.current.presumptivePositionLeft = x
    DOMElement.current.presumptiveOpasity = opasity
    DOMElement.current.presumptiveScale = scale
    DOMElement.current.presumptiveBlur = blur
    DOMElement.current.presumptiveSpeed = speed
    DOMElement.current.presumptiveDelay = delay
    DOMElement.current.presumptiveFunctionValue = functionValue
    DOMElement.current.presumptiveReply = reply

    document.cookie = `${DOMElement.current.className.split(" ")[0]}={"x":${x}, "y":${y}}`
  }, [y, x, opasity, scale, blur, speed, delay, functionValue, reply])

  return (
    <div className={style.main}>
      <div className={style.rangeSliders}>
        <RangeSlider
          name={"X"}
          min={-100}
          max={100}
          value={x}
          setValue={setX}
          nameAction={"correctX"}
        />
        <RangeSlider
          name={"Y"}
          min={-100}
          max={100}
          value={y}
          setValue={setY}
          nameAction={"correctY"}
        />
        <RangeSlider
          name={"Opasity"}
          min={0}
          max={100}
          value={opasity}
          setValue={setOpasity}
          unit={"%"}
          nameAction={"correctOpasity"}
        />
        <RangeSlider
          name={"Scale"}
          min={0}
          max={2}
          step={"0.1"}
          value={scale}
          setValue={setScale}
          nameAction={"correctScale"}
        />
        <RangeSlider
          name={"Blur"}
          min={-10}
          max={10}
          value={blur}
          setValue={setBlur}
          nameAction={"correctBlur"}
        />
        <RangeSlider
          name={"Speed"}
          min={0}
          max={5}
          step={"0.1"}
          value={speed}
          setValue={setSpeed}
          unit="s"
          nameAction={"correctSpeed"}
        />
        <RangeSlider
          name={"Delay"}
          min={0}
          max={5}
          step={"0.1"}
          value={delay}
          setValue={setDelay}
          unit="s"
          nameAction={"correctDelay"}
        />
      </div>
      <div className={style.function}>
        <p>Easing</p>
        <MySelect
          options={functions}
          value={functionValue}
          setValue={setFunctionValue}
        />
      </div>
      <div className={style.replay}>
        <p>Replay</p>
        <Toggle value={reply} setValue={setReply} />
      </div>
    </div>
  );
}
