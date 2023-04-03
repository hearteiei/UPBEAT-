import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// css import
import style from '../CSS/gameplay.module.css'

function Gameplay() {

  let navigate = useNavigate()
  const myElement = useRef(null);
  const myMap = useRef(null);
  const [Xsize, setXsize] = useState(15)
  const [Ysize, setYsize] = useState(9)

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

  let create_table = () => {
    // let grid = document.createElement('span')
    // grid.classList.add(style.hexagon)
    let map = myMap.current
    map.classList.add(style.map)
    let gridSizeX = map.clientWidth / Xsize;
    let gridSizeY = map.clientHeight / Ysize;
    let useSize = gridSizeX
    if (gridSizeY < gridSizeX) useSize = gridSizeY
    else useSize = gridSizeX
    // useSize += useSize * 2.5 / 3
    // map.style.padding = `${(map.clientHeight - useSize * 2.5 / 3) / 2}px 0 0 0`

    for (let i=0;i<Ysize;i++) {
      let row = document.createElement('div')
      row.classList.add(style.row_map)
      row.style.top = `${i * useSize * 2.5 / 3}px`
      row.style.left = `${(map.clientWidth - (Xsize * (useSize * 2 / 3))) / 2}px`
      row.style.height = `${useSize}px`
      if (i % 2 == 0) {
        row.style.backgroundColor = 'rgba(38, 86, 128, .0)'
      }else {
        row.style.backgroundColor = 'rgba(38, 86, 128, .0)'
      }
      // row.style.margin = `${i*gridSizeX}px 0 0 0`
      for (let j=0;j<Xsize;j++) {
        let grid = document.createElement('span')
        grid.addEventListener('click', () => {
          console.log(grid.className)
          console.log(style.active)
          if (grid.className.includes(style.active)) {
            grid.classList.remove(style.active)
          }else {
            grid.classList.add(style.active)
          }
        })
        grid.classList.add(style.hexagon)
        grid.style.width = `${useSize * 2 / 3}px`
        grid.style.height = `${useSize * 2 / 3}px`
        if (j % 2 == 0) {
          grid.style.margin = `${useSize * 1.2 / 3}px 0 0 ${j*useSize * 2 / 3}px`
          // grid.style.margin = ` 0 0 0`
        }else {
          grid.style.margin = `0 0 0 ${j*useSize * 2 / 3}px`
        }
        row.appendChild(grid)
      }
      map.appendChild(row)
    }
  }

    return (
      <div ref={myElement} className={ style.ctn_gameplay }>
        <h1 className={ style.title }>Gameplays</h1>

        <div className={ style.btn_back }>
          <div className={ style.btn_back_before }></div>
          <div className={ style.btn_back_after }></div>
          <div className={ style.btn_back_content } onClick={() => navigate('/')}>BACK</div>
        </div>

        <div ref={myMap} className={ style.table_box }>
          {/* <div className={ style.hexagon }></div> */}
        </div>
        
        <div className={ style.box_setting }>
          {/* <div>X</div>
          <input type="number" onChange={ (e) => setXsize(e) }></input>
          <div>Y</div>
          <input type="number"></input> */}
          <div className={ style.btn_createMap } onClick={ () => create_table() }>Create map</div>
        </div>  
      </div>
    );
  }
  
  export default Gameplay;