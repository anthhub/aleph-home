import React, { useEffect, useState, useRef } from "react"
import "./index.css"

export default function Tips() {
  const timer = useRef()
  const [color, setColor] = useState(randomHexColor)
  useEffect(() => {
    timer.current = setInterval(() => {
      setColor(randomHexColor())
    }, 1000)
    return () => clearInterval(timer.current)
  }, [])

  return (
    <div className="tips" >
      <small style={{ color }}>更多项目源码, 请移步 GitHub, 或者面基[奸笑]...</small>
    </div>
  )
}

function randomHexColor() {
  return (
    "#" +
    ("00000" + ((Math.random() * 0x1000000) << 0).toString(16)).substr(-6)
  )
}