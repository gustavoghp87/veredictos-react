import React from 'react'



export const Navbar = (props) => {
    console.log(props)
    return (
        <div>

            <div id="headlogo{{vers}}">
                <img src="/frontend-src/index/hammer5.png" id="hammer" />
                <div className="title1"> VEREDICTOS DE ECONOMÍA  </div>
            </div>
        
            <hr style={{border:'1px solid white', marginBottom:'35px', width:'100%', borderRadius:'5px'}} />

        </div>
    )
}