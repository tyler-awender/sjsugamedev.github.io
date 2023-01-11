import styles from './Tab.module.css'

import { NavLink } from 'react-router-dom'

function scrollToTop () {
  window.scrollTo(0, 0)
}

export default function Tab (props) {
  if (props.isExternal) {
    return (
      // External link / non-internal link
      <a
        href={props.link}
        onClick={props.onClick}
        className={
          [
            styles.tab,
            props.isVertical ? styles.vertical : null
          ]
            .filter(Boolean)
            .join(' ')
}
      >
        {props.label}
        {props.children}
      </a>
    )
  } else {
    return (
      // Internal link: use <Link>
      <NavLink
        onClick={() => { props.onClick?.(); scrollToTop() }}
        to={props.link}
        className={({ isActive }) =>
          [
            styles.tab,
            props.isVertical ? styles.vertical : null,
            isActive ? styles.active : null
          ]
            .filter(Boolean)
            .join(' ')}
      >
        {props.label}
        {props.children}
      </NavLink>
    )
  }
}
