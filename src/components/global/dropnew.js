import React from "react"
import { DropStyle } from "../styles/dropStyle"
import { Link } from "gatsby"
import DynamicLink from "./dynamicurl"

const Dropnew = ({ to, title, list }) => {
  return (
    <DropStyle>
      <Link to={to} className="title_main">
        {title}
      </Link>
      <div className="links">
        {list.map(item => (
          <div className="content">
            <DynamicLink
              classvalue="mainLink"
              url={item.url}
              data={item.data}
              title={item.title}
            />
            {item.sub ? (
              <div className="sub">
                {item.sub.map(val => (
                  <DynamicLink
                    url={val.url}
                    data={val.data}
                    title={val.title}
                    classvalue="subLink"
                  />
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </DropStyle>
  )
}

export default Dropnew