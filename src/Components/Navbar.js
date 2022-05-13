import React from 'react'
import { HAMMER, TITLE1, HR } from './css/css'
import { Link } from 'react-router-dom'


export const Navbar = () => {

    return (
        <>
            <Link to={'/'}>
                <HAMMER src="/veredictos-react/frontend-src/index/hammer7.png" />
            </Link>

            <TITLE1> VEREDICTOS DE ECONOMÍA  </TITLE1>
        
            <HR />
        </>
    )
}
