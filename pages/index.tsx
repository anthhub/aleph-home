import React from "react"
import Carousel from "../components/Carousel/index.tsx"
import Article from "../components/Article/index.tsx"

import "./index.css"

export default function Home() {

  return (
      <div className="page home">
        <Carousel />
        <Article/>
    </div>
  )
}
