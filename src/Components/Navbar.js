import React from 'react'
import { HAMMER, TITLE1, HR } from './css/css'
import { Link } from 'react-router-dom'
import { rootPath } from './App'

export const Navbar = () => {

    return (
        <>
            <Link to={rootPath}>
                <HAMMER src={`${rootPath}frontend-src/index/hammer7.png`} />
            </Link>

            <TITLE1> VEREDICTOS DE ECONOMÍA  </TITLE1>
        
            <HR />
        </>
    )
}
