import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Index } from './text/index'
import { V01 } from './text/01'
import { V02 } from './text/02'
import { V03 } from './text/03'
import { V04 } from './text/04'
import { V05 } from './text/05'
import { V06 } from './text/06'
import { V07 } from './text/07'
import { V08 } from './text/08'
import { V09 } from './text/09'
import { V10 } from './text/10'
import { V11 } from './text/11'
import { V12 } from './text/12'
import { V13 } from './text/13'
import { V14 } from './text/14'
import { V15 } from './text/15'
import { V16 } from './text/16'
import { V17 } from './text/17'
import { V18 } from './text/18'
import { V19 } from './text/19'
import { V20 } from './text/20'
import { V21 } from './text/21'
import { V22 } from './text/22'
import Buttons from './Buttons'
import { Indice } from './Indice'
import { Footer } from './Footer'

export const rootDomain = "/veredictos-react"

function App() {

  const appStyle = {
    maxWidth: '100%',
    backgroundColor: '#0d0c18',
    textAlign: 'justify',
    color: 'aliceblue',
    padding: '0 4%',
    display: 'block',
    margin: '0 auto',
    fontFamily: "'Times New Roman', Times, serif"
  }

  return (
    <Suspense fallback={(<div>Cargando...</div>)}>
      <div style={appStyle}>
        <Navbar />
        <Switch>
          <Route exact path={`${rootDomain}`} component={Index} />
          <Route exact path={`${rootDomain}01`} component={V01} />
          <Route exact path={`${rootDomain}02`} component={V02} />
          <Route exact path={`${rootDomain}03`} component={V03} />
          <Route exact path={`${rootDomain}04`} component={V04} />
          <Route exact path={`${rootDomain}05`} component={V05} />
          <Route exact path={`${rootDomain}06`} component={V06} />
          <Route exact path={`${rootDomain}07`} component={V07} />
          <Route exact path={`${rootDomain}08`} component={V08} />
          <Route exact path={`${rootDomain}09`} component={V09} />
          <Route exact path={`${rootDomain}10`} component={V10} />
          <Route exact path={`${rootDomain}11`} component={V11} />
          <Route exact path={`${rootDomain}12`} component={V12} />
          <Route exact path={`${rootDomain}13`} component={V13} />
          <Route exact path={`${rootDomain}14`} component={V14} />
          <Route exact path={`${rootDomain}15`} component={V15} />
          <Route exact path={`${rootDomain}16`} component={V16} />
          <Route exact path={`${rootDomain}17`} component={V17} />
          <Route exact path={`${rootDomain}18`} component={V18} />
          <Route exact path={`${rootDomain}19`} component={V19} />
          <Route exact path={`${rootDomain}20`} component={V20} />
          <Route exact path={`${rootDomain}21`} component={V21} />
          <Route exact path={`${rootDomain}22`} component={V22} />
          <Redirect exact strict from={`${rootDomain}1`} to="/01" />
          <Redirect exact strict from={`${rootDomain}2`} to="/02" />
          <Redirect exact strict from={`${rootDomain}3`} to="/03" />
          <Redirect exact strict from={`${rootDomain}4`} to="/04" />
          <Redirect exact strict from={`${rootDomain}5`} to="/05" />
          <Redirect exact strict from={`${rootDomain}6`} to="/06" />
          <Redirect exact strict from={`${rootDomain}7`} to="/07" />
          <Redirect exact strict from={`${rootDomain}8`} to="/08" />
          <Redirect exact strict from={`${rootDomain}9`} to="/09" />
          <Redirect from={rootDomain} to={rootDomain} />
        </Switch>
        <Buttons />
        <Indice />
        <Footer />
      </div>
    </Suspense>
  )
}

export default App
