import React from 'react'
import { useSelector } from 'react-redux'

const NavLink = (props) => {

    const mode = useSelector((state) => state.mode)

    return (
        <div className="NavLink" style={{ 'backgroundColor': mode.color3 }}>
            <p>{props.content}</p>
        </div>
    )
}

export default NavLink