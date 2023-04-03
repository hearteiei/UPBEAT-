import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// import React, { useRef } from 'react';

// css import
import style from '../CSS/home.module.css'

// image
import joystrick from '../picture/joystrick.png'

function Home() {

  let navigate = useNavigate()
  const myElement = useRef(null);

  useEffect(() => {
    stars()
  }, [])


  let stars = () => {
    let count = 350
    let scene = myElement.current
    
    for (let i=0;i < count;i++) {
      let star = document.createElement('i')
      let x = Math.floor(Math.random() * window.innerWidth)
      let y = Math.floor(Math.random() * window.innerHeight)
      let duration = Math.random() * 10
      let size = Math.random() * 2

      star.style.left = `${x}px`
      star.style.top = `${y}px`
      star.style.width = ` ${1 + size}px`
      star.style.height = `${1 + size}px`

      star.style.animationDuration = `${5 + duration}s`
      star.style.animationDelay = `${duration}s`

      scene.appendChild(star)
    }
  }

    return (
      <div ref={myElement} className={ style.ctn_home }>
        <div className={ style.bg_home }></div>
        <div className={ style.boxhome }>
          <div className={ style.logo }>
            <img src={ joystrick }/>
          </div>
          <div className={ style.ctn_webname }>
            <span className={ style.webname1 }>UPBEAT GAME</span> 
            <span className={ style.webname2 }>UPBEAT GAME</span> 
            <span className={ style.webname3 }>UPBEAT GAME</span> 
          </div>
          <div className={ style.btn_start }>
            <div className={ style.btn_start_before }></div>
            <div className={ style.btn_start_after }></div>
            <div className={ style.btn_start_content } onClick={() => navigate('/gameplay')}>START</div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;