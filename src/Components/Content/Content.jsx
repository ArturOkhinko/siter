import React, { useEffect, useState } from "react";
import style from "./Content.module.css";
import {useDispatch, useSelector } from "react-redux";
import {interactiveElementsActions} from "../../Store/reducers/interactiveElementsReducer";
import { indicatorFunctionActions } from "../../Store/reducers/indicatorFunctionReducer";

export default function Content({DOMElement}) {
  const parametrs = useSelector(state => state.animationParametrsReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    const interactiveElements = document.querySelectorAll(`.${style.interactiveElement}`)
    interactiveElements.forEach((interactiveElement) => {
      interactiveElement.onclick = (e) => handleClick(e)
    })
    
    dispatch(interactiveElementsActions.addInteractiveElements(interactiveElements))
    dispatch(indicatorFunctionActions.addIndicatorFunction(handleClick))

    document.cookie.split("; ").forEach(cookie => {
      const cookieArray = cookie.split("=")
      try {
        const elementForCookie = document.querySelector(`.${cookieArray[0]}`)
        if(elementForCookie) {
          const parametrs = JSON.parse(cookie.split("=")[1])
          elementForCookie.style.top = parametrs.y + "px"
          elementForCookie.style.left = parametrs.x + "px"
          elementForCookie.style.opasity = parametrs.opasity + "%"
          elementForCookie.style.scale = parametrs.scale
          elementForCookie.style.blur = parametrs.blur + "px"
          elementForCookie.style.transition = `all ${parametrs.speed}s ${parametrs.functionValue} ${parametrs.delay}s`
        }
      } catch(e) {
        return
      }
    })
  }, [])

  useEffect(() => {
    const indicateChoice = document.querySelector(`.${style.indicateChoice}`)
    if(indicateChoice && DOMElement.current) {
      indicateChoice.style.top = DOMElement.current.getBoundingClientRect().y + parametrs.y + "px"
      indicateChoice.style.left = DOMElement.current.getBoundingClientRect().x + parametrs.x + "px"
    }
  }, [parametrs]) 

  function handleClick (e) {
    if(DOMElement.current) {
      const prevIndicateChoice = document.querySelector(`.${style.indicateChoice}`)
      prevIndicateChoice.remove()
    }
    DOMElement.current = e.target
    const indicateChoice = document.createElement("div")
    indicateChoice.className = style.indicateChoice
    indicateChoice.onclick = (e) => e.stopPropagation()

    const coordinates = DOMElement.current.getBoundingClientRect()
    indicateChoice.style.width = DOMElement.current.offsetWidth + "px"
    indicateChoice.style.height = DOMElement.current.offsetHeight + "px"
    indicateChoice.style.top = coordinates.y + "px"
    indicateChoice.style.left = coordinates.x + "px"

    DOMElement.current.after(indicateChoice)
  }

  return (
    <div className={style.main}>
      <div className={style.filling}>
        <div className={style.column_one}>
          <b className={style.title + " " + style.interactiveElement}>Animation Settings</b>
          <p className={style.description  + " " + style.interactiveElement}>
            The user should have the option to select any element on the page
            and set up its animation using the controls in the right panel. A
            dotted line will show the element's position and state before the
            animation begins, giving the user a clear idea of how the animation
            will appear. The preview button on the top panel will open the
            result in a new tab.
          </p>
          <button className={style.interactiveElement}>Button</button>
        </div>
        <div className={style.column_two} >
          <img  className={style.interactiveElement} src="https://storage.yandexcloud.net/siter.io/city.jpeg"/>
        </div>
      </div>
    </div>
  );
}
