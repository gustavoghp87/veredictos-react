import React from 'react'
import { Link } from 'react-router-dom'


export const Buttons = () => {

    return (
    
        <div className="btnContainer row">

            <div className="col-md-4">
                <a href="/" style={{textDecoration:'none', display:'block'}} id="button{{json.vers}}">
                <button className="btn btn-dark buttons"> 
                    <b>ANTERIOR</b> 
                </button>
                </a>
            </div>

            <div className="col-md-4">
                <Link to="/" style={{textDecoration:'none'}} id="buttonBeginning">
                    <button className="btn btn-dark buttons">
                        <b>PRINCIPIO</b> 
                    </button>
                </Link>
            </div>

            <div className="col-md-4">
                <a href="/" style={{textDecoration:'none'}}>
                <button className="btn btn-dark buttons"> 
                    <b>SIGUIENTE</b> 
                </button>
                </a>
            </div>

            <hr style={{border:'1px solid white', marginBottom:'35px', width:'100%', borderRadius:'5px'}} />

        </div>
    
    )
}