import React, { useRef } from "react";
import style from "./Main.module.css";
import TopBar from "../../Components/TopBar/TopBar";
import Content from "../../Components/Content/Content";
import SettingsBar from "../../Components/SettingsBar/SettingsBar";
import {useSelector} from "react-redux"
export default function Main() {

  const DOMElement = useRef()
  const interactiveElements = useSelector(state => state.interactiveElements.elements)
  const handleClick = useSelector(state => state.indicatorFunction.indicatorFunction)

  const addParametrs = (interactiveElement) => {
    interactiveElement.style.transition = `all ${interactiveElement.presumptiveSpeed}s ${interactiveElement.presumptiveFunctionValue} ${interactiveElement.presumptiveDelay}s`
    interactiveElement.style.left =  interactiveElement.presumptivePositionLeft + "px"
    interactiveElement.style.top = interactiveElement.presumptivePositionTop + "px"
    interactiveElement.style.scale = interactiveElement.presumptiveScale
    interactiveElement.style.filter = `blur(${interactiveElement.presumptiveBlur}px) `
    interactiveElement.onclick = (e) => e
  }

  const resetValue = () => {
    interactiveElements.forEach(interactiveElement => {
      interactiveElement.style.transition = `all 1s`
      interactiveElement.style.left =  "0px"
      interactiveElement.style.top = "0px"
      interactiveElement.style.scale = 1
      interactiveElement.style.filter = "blur(0px)"
      interactiveElement.onclick = (e) => handleClick(e)
      document.cookie = `${interactiveElement.className.split(" ")[0]}={"x":${0}, "y":${0}}`
    })
  }

  const addAnimations = () => {
    const indicateElement = document.querySelector(".Content_indicateChoice__D1OAU")

    indicateElement.style.backgroundColor = "rgba(0,0,0,0)"
    indicateElement.style.border = "1px solid rgba(0,0,0,0)"

    interactiveElements.forEach(interactiveElement => {
      if(interactiveElement.presumptiveReply) {
        addParametrs(interactiveElement)
        return
      }
      addParametrs(interactiveElement)
    })
  }


  return (
    <div className={style.main}>
      <div className={style.topBar}>
        <TopBar previewFunction={addAnimations} resetValue={resetValue}/>
      </div>
      <div className={style.content}>
        <Content DOMElement={DOMElement}/>
      </div>
      <div className={style.settingsBar}>
        <SettingsBar DOMElement={DOMElement}/>
      </div>
    </div>
  );
}
