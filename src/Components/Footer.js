import React from 'react'
import { FOOT, LOGOFOOTER, UL, CENTER, VERE } from './css/css'


export const Footer = () => {
    return (
        <FOOT>
    
            <LOGOFOOTER src="/frontend-src/logo-negro.jpg" />
            
            <UL>
                Los pensamientos expuestos no son míos, salvo algunos puntos que no podría diferenciar bien. Mi trabajo es de compilación y organización. No me detengo a hacer culto a cada economista que dijo cada cosa porque no me interesa ni podría hacerlo bien porque no lo recuerdo, pero están las imágenes como orientación. Si alguien quiere corregir, el contacto es veredictosdeeconomia@gmail.com
            </UL>
            
            
            <CENTER>
                <UL style={{textIndent:'0'}}> Donaciones en bitcoins: <small>1AtHe23t5zHWPS5wSYtDXz2fFjZqB9FgHN</small> </UL>
            </CENTER>
            
            <a href="https://www.veredictosdeeconomia.com" style={{textDecoration:'none'}}>
                <CENTER style={VERE}> VeredictosDeEconomia.com </CENTER>
            </a>

            <br/>

        </FOOT>
    )
}