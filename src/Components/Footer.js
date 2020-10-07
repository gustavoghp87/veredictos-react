import React from 'react'



export const Footer = () => {
    return (
        <div className="foot" style={{color:'gray', paddingTop:'50px'}}>
    
            <img src="/frontend-src/logo-negro.jpg" id="logoFooter" style={{width:'20%'}} />
            
            <br/>
            
            <ul id="foot">
                Los pensamientos expuestos no son míos, salvo algunos puntos que no podría diferenciar bien. Mi trabajo es de compilación y organización. No me detengo a hacer culto a cada economista que dijo cada cosa porque no me interesa ni podría hacerlo bien porque no lo recuerdo, pero están las imágenes como orientación. Si alguien quiere corregir, el contacto es veredictosdeeconomia@gmail.com
            </ul>
            
            
            <div className="center">
                <ul> Donaciones en bitcoins: <small>1AtHe23t5zHWPS5wSYtDXz2fFjZqB9FgHN</small> </ul>
            </div>
            
            <a href="https://www.veredictosdeeconomia.com">
                <ul className="center" id="footW"> VeredictosDeEconomia.com </ul>
            </a>

        </div>
    )
}