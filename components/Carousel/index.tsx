import React, { useEffect } from "react"
import "./index.css"

let cur = 0

const images = [
  "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3197842941,3401708652&fm=26&gp=0.jpg",
  "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2293187164,2343563219&fm=26&gp=0.jpg",
  "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2306668059,3517955897&fm=26&gp=0.jpg",
  "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2184180192,397828861&fm=26&gp=0.jpg",
  "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3385281827,865785968&fm=26&gp=0.jpg",
]

function move(cur: number) {
  const parent = document.querySelector(".container")

  const childs = document.querySelectorAll(".inner")
  setTimeout(() => {
    childs.forEach((item: any) => {
      parent.removeChild(item)
    })
  }, 1000)

  let now = cur % images.length
  if (now < 0) {
    now += images.length
  }

  const dom = document.createElement("img")
  dom.setAttribute("style", `margin-left:${cur * 300}px`)
  dom.setAttribute("src", images[now])
  dom.classList = "inner"

  parent.insertBefore(dom, childs[0])
  parent.setAttribute("style", `transform: translateX(${cur * -300}px);`)
}

function left() {
  cur++
  move(cur)
}

function right() {
  cur--
  move(cur)
}

let timer: undefined | number

export default function sdd() {
  useEffect(() => {
    timer = setInterval(() => {
      if (document["webkitHidden"]) {
        return
      }
      left()
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="block">
      <div className="btn" onClick={left}>
        <svg
          viewBox="64 64 896 896"
          focusable="false"
          data-icon="left"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
        </svg>
      </div>
      <div className="outer">
        <div className="wrapper">
          <div className="container">
            {images.slice(0, 1).map((image, index) => (
              <img
                className="inner"
                src={image}
                style={{ marginLeft: 300 * index + "px" }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="btn" onClick={right}>
        <svg
          viewBox="64 64 896 896"
          focusable="false"
          data-icon="right"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
        </svg>
      </div>
    </div>
  )
}
