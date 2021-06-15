import React from "react"
import useMetadata from "../../lib/useMetadata.ts"
import Tips from "../Tips/index.tsx"

import "./index.css"


const colors = ['#f50', '#2db7f5', '#87d068', '#108ee9', "#fcaf17", "#f36c21", '#b2d235', '#ef5b9c', '#c77eb5']


function getColor() {
  const i = Math.round(Math.random() * (colors.length - 1))
  return colors[i]
}

export default function Article() {

  const [repo] = useMetadata()



  return (
    <div className="article">
      {Object.keys(repo).map((key) => {
        const arr = repo[key]
        return (
          <div className="paragraph">
            <h1>{key}</h1>
            <ol className="list">
              {arr?.map((item) => (
                <li key={item.name} className="item">
                  <p>
                    <a href={item.github} title="go to github" target="_blank">
                      <h2>{item.name}</h2>
                    </a>
                  </p>
                  <p>
                    {item?.tags?.map((tag) => (
                      <span className="tag" style={{ background: getColor() }} key={tag}>{tag}</span>
                    ))}
                  </p>
                  <p>
                    <a href={item.url} title="go to website" target="_blank">
                      <ul className="desc-ul">
                        {item?.desc?.map((desc) =>
                          <li key={desc} >
                            <p className="desc" >{desc}</p>
                          </li>
                        )}
                      </ul>
                    </a>
                  </p>
                </li>
              ))}
            </ol>
          </div>
        )
      })}

      <Tips />
    </div>
  )
}
