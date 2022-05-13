import React from 'react'
import { withRouter } from 'react-router-dom'
import { HR, ROWBUTTONS, BUTTON } from './css/css'
import { Col, Row } from 'react-bootstrap'
import { rootPath } from './App'


export default withRouter(function Buttons(props) {

    const act = props.location.pathname
    let ant, pos
    if (act===rootPath) {ant = rootPath; pos = `${rootPath}01`}
    else if (act===`${rootPath}01`) {ant = `${rootPath}`; pos = `${rootPath}02`}
    else if (act===`${rootPath}10`) {ant = `${rootPath}09`; pos = `${rootPath}11`}
    else {
        let aux = act.split(rootPath)[1]
        if (aux[0]==='0') {
            aux = aux[1]
            aux = parseInt(aux)
            ant = `${rootPath}0${aux-1}`
            pos = aux === 9 ? `${rootPath}10` : `${rootPath}0${aux+1}`
        } else {
            aux = parseInt(aux)
            ant = `${rootPath}${aux-1}`
            pos = `${rootPath}${aux+1}`
        }
    }


    return (
    <>
        <Row style={ROWBUTTONS}>

            <Col lg={4}>
                <BUTTON className="btn btn-dark" onClick={()=>props.history.push(ant)}
                    style={{display: ant===rootPath ? 'none' : 'block'}}>
                    <b style={{color:'#007bff'}}>ANTERIOR</b>
                </BUTTON>
            </Col>

            <Col lg={4}>
                <BUTTON className="btn btn-dark" onClick={()=>props.history.push('/')}
                    style={{display: act===rootPath ? 'none' : 'block'}}>
                    <b style={{color:'#007bff'}}>PRINCIPIO</b>
                </BUTTON>
            </Col>

            <Col lg={4}>
                <BUTTON className="btn btn-dark" onClick={()=>props.history.push(pos)}
                    style={{display: act===`${rootPath}22` ? 'none' : 'block'}}>
                    <b style={{color:'#007bff'}}>SIGUIENTE</b>
                </BUTTON>
            </Col>

        </Row>

        <HR />
        
    </>
    )
})
