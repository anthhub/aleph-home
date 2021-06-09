import React from "react"
import Carousel from "../components/Carousel/index.tsx"
import useMetadata from "../lib/useMetadata.ts"
import "./index.css"

export default function Home() {
  const [repo] = useMetadata()
  return (
    <div>
      <div className="page home">
        <Carousel />

        {Object.keys(repo).map((key) => {
          const arr = repo[key]
          return (
            <>
              <h1>{key}</h1>
              <ul className="list">
                {arr.map((item) => (
                  <li key={item.name}>
                    <a href={item.url} target="_blank">
                      {item.name}:{"  "}
                    </a>
                    {item?.github ? (
                      <a href={item.github} target="_blank">
                        {item.desc}
                      </a>
                    ) : (
                      item.desc
                    )}
                    {"  "}
                    {item?.tags?.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </li>
                ))}
              </ul>
            </>
          )
        })}
      </div>
    </div>
  )
}
