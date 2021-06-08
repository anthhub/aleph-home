import React from "react"
import Carousel from "../components/Carousel/index.tsx"
import useMetadata from "../lib/useMetadata.ts"
import "./index.css"

export default function Home() {
  const [repo] = useMetadata()
  return (
    <div>
      <div className="page">
        <Carousel />

        <ul className="list">
          {repo?.map((item) => (
            <li key={item.url}>
              <a href={item.url} target="_blank">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
