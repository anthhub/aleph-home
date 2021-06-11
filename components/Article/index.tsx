import React, { useEffect } from "react"
import useMetadata from "../../lib/useMetadata.ts"
import "./index.css"

export default function Article() {
  const [repo] = useMetadata()

  return (
    <div className="article">
        {Object.keys(repo).map((key) => {
          const arr = repo[key]
          return (
            <div className="list">
              <h1>{key}</h1>
              <ul >
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
                      <span className="tag green" key={tag}>{tag}</span>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
    </div>
  )
}
