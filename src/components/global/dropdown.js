import { Link } from "gatsby"
import { DropdownStyle } from "../styles/dropdown"

export const Dropdown = ({ title, list }) => {
  return (
    <>
      <DropdownStyle className="dropdown nav-link-div">
        <button className="dropbtn nav-link-div nav-link-item">{title}</button>
        <div className="dropdown-content">
          {list.map(item => (
            <Link className="nav-link-item" to={item.url}>
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      </DropdownStyle>
    </>
  )
}