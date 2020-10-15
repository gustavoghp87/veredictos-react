import React from 'react'
import { INDEX, HR, ULANCHOR } from './css/css'
import { Link } from 'react-router-dom'
import { data } from '../chapters'


export const Indice = () => {

    const dec = {textDecoration:'none', display:'block', textIndent:'0'}

    return (
        
        <INDEX>

            <ULANCHOR>
                <Link to="/" style={dec}> {data[0].title} </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/01" style={dec}> {data[1].number}. {data[1].title} </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/02" style={dec}> {data[2].number}. {data[2].title} </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/03" style={dec}> {data[3].number}. {data[3].title} </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/04" style={dec}> {data[4].number}. {data[4].title} </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/05" style={dec}> {data[5].number}. {data[5].title} </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/06" style={dec}> {data[6].number}. {data[6].title} </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/07" style={dec}> {data[7].number}. {data[7].title} </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/08" style={dec}> {data[8].number}. {data[8].title} </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/09" style={dec}> {data[9].number}. {data[9].title} </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/10" style={dec}> {data[10].number}. {data[10].title} </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/11" style={dec}> {data[11].number}. {data[11].title} </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/12" style={dec}> {data[12].number}. {data[12].title} </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/13" style={dec}> {data[13].number}. {data[13].title} </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/14" style={dec}> {data[14].number}. {data[14].title} </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/15" style={dec}> {data[15].number}. {data[15].title} </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/16" style={dec}> {data[16].number}. {data[16].title} </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/17" style={dec}> {data[17].number}. {data[17].title} </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/18" style={dec}> {data[18].number}. {data[18].title} </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/19" style={dec}> {data[19].number}. {data[19].title} </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/20" style={dec}> {data[20].number}. {data[20].title} </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/21" style={dec}> {data[21].number}. {data[21].title} </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/22" style={dec}> {data[22].number}. {data[22].title} </Link>
            </ULANCHOR>
    
            {/* <ULANCHOR>
                <Link to="/23" style={dec}> {data[23].number}. {data[23].title} </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/24" style={dec}> {data[24].number}. {data[24].title} </Link>
            </ULANCHOR>
    
            <ULANCHOR>
                <Link to="/25" style={dec}> {data[25].number}. {data[25].title} </Link>
            </ULANCHOR> */}
    
            {/* {{!-- <ULANCHOR> <Link to="/26" style={dec}> XXVI. BITCOIN </Link> </ULANCHOR> --}}
    
            {{!-- <ULANCHOR> <Link to="/27" style={dec}> XXVII. NUEVA GENERACIÓN DE CRIPTOMONEDAS </Link> </ULANCHOR> --}} */}
    
            <br/>
    
            <HR /> 
        
        </INDEX>
    )
}
