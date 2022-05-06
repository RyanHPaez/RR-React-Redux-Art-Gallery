import React from 'react'
import NavLink from './NavLink'
import { useSelector } from 'react-redux'

const Nav = () => {

    const mode = useSelector((state) => state.mode)

    return (
        <div className="Nav" style={{ 'backgroundColor': mode.color1 }}>
            <NavLink content="Blog" />
            <NavLink content="About Me" />
            <NavLink content="Projects" />
            <NavLink content="Other" />
        </div>
    )
}

export default Nav