import React from 'react'
import { withRouter } from 'react-router-dom'
import { HR, ROWBUTTONS, BUTTON } from './css/css'
import { Col, Row } from 'react-bootstrap'


export default withRouter(function Buttons(props) {

    const act = props.location.pathname
    let ant, pos
    if (act==='/') {ant = '/'; pos = '/01'}
    else if (act==='/01') {ant = '/'; pos = '/02'}
    else if (act==='/10') {ant = '/09'; pos = '/11'}
    else {
        let aux = act.split('/')[1]
        if (aux[0]==='0') {
            aux = aux[1]
            aux = parseInt(aux)
            ant = `/0${aux-1}`
            pos = aux === 9 ? '/10' : `/0${aux+1}`
        } else {
            aux = parseInt(aux)
            ant = `/${aux-1}`
            pos = `/${aux+1}`
        }
    }


    return (
    <>
        <Row style={ROWBUTTONS}>

            <Col lg={4}>
                <BUTTON className="btn btn-dark" onClick={()=>props.history.push(ant)}
                    style={{display: ant==='/' ? 'none' : 'block'}}>
                    <b style={{color:'#007bff'}}>ANTERIOR</b>
                </BUTTON>
            </Col>

            <Col lg={4}>
                <BUTTON className="btn btn-dark" onClick={()=>props.history.push('/')}
                    style={{display: act==='/' ? 'none' : 'block'}}>
                    <b style={{color:'#007bff'}}>PRINCIPIO</b>
                </BUTTON>
            </Col>

            <Col lg={4}>
                <BUTTON className="btn btn-dark" onClick={()=>props.history.push(pos)}
                    style={{display: act==='/25' ? 'none' : 'block'}}>
                    <b style={{color:'#007bff'}}>SIGUIENTE</b>
                </BUTTON>
            </Col>

        </Row>

        <HR />
        
    </>
    )
})
