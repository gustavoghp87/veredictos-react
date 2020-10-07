import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { HR, ROWBUTTONS, BUTTON } from './css/css'
import { Col, Row } from 'react-bootstrap'


export default withRouter(function Buttons(props) {

    
    const act = props.location.pathname
    let ant, pos
    if (act==='/') {console.log("estoy en index"); ant = '/'; pos = '/01'}
    else if (act==='/01') {console.log("estoy en 01"); ant = '/'; pos = '/02'}
    else if (act==='/10') {ant = '/09'; pos = '/11'}
    else {
        let aux = act.split('/')[1]
        if (aux[0]==='0') {
            aux = aux.split('0')[1]
            aux = parseInt(aux)
            ant = `/0${aux-1}`
            pos = `/0${aux+1}`
        } else {
            aux = parseInt(aux)
            ant = `/${aux-1}`
            pos = `/${aux+1}`
        }
    }


    return (
    
        <div>
            <Row style={ROWBUTTONS}>

                <Col lg={4}>
                    <Link to={ant} style={{textDecoration:'none', display: ant==='/' ? 'none' : 'block'}}>
                        <BUTTON className="btn btn-dark"> 
                            <b>ANTERIOR</b> 
                        </BUTTON>
                    </Link>
                </Col>

                <Col lg={4}>
                    <Link to={'/'} style={{textDecoration:'none', display: act==='/' ? 'none' : 'block'}}>
                        <BUTTON className="btn btn-dark">
                            <b>PRINCIPIO</b> 
                        </BUTTON>
                    </Link>
                </Col>

                <Col lg={4}>
                    <Link to={pos} style={{textDecoration:'none', display: act==='/25' ? 'none' : 'block'}}>
                        <BUTTON className="btn btn-dark" style={{textDecoration:'none'}}> 
                            <b>SIGUIENTE</b> 
                        </BUTTON>
                    </Link>
                </Col>

            </Row>

            <HR />

        </div>
    )
})
