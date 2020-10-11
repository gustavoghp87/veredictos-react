import React from 'react'
import { INDEX, HR, ULANCHOR } from './css/css'
import { Link } from 'react-router-dom'
import { data } from '../chapters'


export const Indice = () => {

    const dec = {textDecoration:'none', display:'block', textIndent:'0'}

    return (
        
        <INDEX>

            <ULANCHOR>
                <Link to="/" style={dec}> {data[0].number} </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/01" style={dec}> {data[1].number}. {data[1].title} </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/02" style={dec}> {data[2].number}. {data[2].title} </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/03" style={dec}> III. VALOR AGREGADO Y PRECIOS </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/04" style={dec}> IV. SALARIOS Y GANANCIAS </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/05" style={dec}> V. LA BANCARROTA DE MARX </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/06" style={dec}> VI. CRECIMIENTO Y DESIGUALDAD: LA TEORÍA DEL MANIFIESTO </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/07" style={dec}> VII. CONSUMO Y CRECIMIENTO </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/08" style={dec}> VIII. LA PARADOJA KEYNESIANA DEL AHORRO </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/09" style={dec}> IX. CONCENTRACIÓN Y OLIGOPOLIOS </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/10" style={dec}> X. SISTEMA DE PRECIOS, PROPIEDAD PRIVADA, MANO INVISIBLE </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/11" style={dec}> XI. MALTHUSIANISMO </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/12" style={dec}> XII. COMERCIO INTERNACIONAL </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/13" style={dec}> XIII. EL PROBLEMA DE LA RENTA </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/14" style={dec}> XIV. MARXISMO CONTRA LENINISMO </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/15" style={dec}> XV. INFLACIÓN </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/16" style={dec}> XVI. ¿QUÉ PASA CON LOS BANCOS CENTRALES? </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/17" style={dec}> XVII. ¿QUÉ PASÓ EN 1929? </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/18" style={dec}> XVIII. ¿QUÉ HAY PODRIDO EN EL FMI? </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/19" style={dec}> XIX. LA TEORÍA GENERAL DEL INTERÉS QUE NO LO ES </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/20" style={dec}> XX. LA TEORÍA DEL CAPITAL Y LOS CICLOS </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/21" style={dec}> XXI. HACER MACROECONOMÍA </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/22" style={dec}> XXII. NEOLIBERALISMO </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/23" style={dec}> XXIII. LA INTERPRETACIÓN MATERIALISTA DE LA HISTORIA </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/24" style={dec}> XXIV. DETERMINISMO CONTRA ESTOCASTICISMO </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/25" style={dec}> XXV. EL GENOMA SOCIALISTA </Link>
            </ULANCHOR>
    
            {/* {{!-- <ULANCHOR> <Link to="/26" style={dec}> XXVI. BITCOIN </Link> </ULANCHOR> --}}
    
            {{!-- <ULANCHOR> <Link to="/27" style={dec}> XXVII. NUEVA GENERACIÓN DE CRIPTOMONEDAS </Link> </ULANCHOR> --}} */}
    
            <br/>
    
            <HR /> 
        
        </INDEX>
    )
}
