import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Navbar } from './Navbar'
import { index } from './text/index'
import { v01 } from './text/01'
import { v02 } from './text/02'
import { v03 } from './text/03'
import { v04 } from './text/04'
import { v05 } from './text/05'
import { v06 } from './text/06'
import { v07 } from './text/07'
import { v08 } from './text/08'
import { v09 } from './text/09'
import { v10 } from './text/10'
import { v11 } from './text/11'
import { v12 } from './text/12'
import { v13 } from './text/13'
import { v14 } from './text/14'
import { v15 } from './text/15'
import { v16 } from './text/16'
import { v17 } from './text/17'
import { v18 } from './text/18'
import { v19 } from './text/19'
import { v20 } from './text/20'
import { v21 } from './text/21'
import { v22 } from './text/22'
import { v23 } from './text/23'
import { v24 } from './text/24'
import { v25 } from './text/25'

import { Buttons } from './Buttons'
import { Indice } from './Indice'
import { Footer } from './Footer'


function App() {

  let mobile = window.screen.width > 899 ? false : true
  setTimeout(() => {mobile = window.screen.width > 899 ? false : true}, 1000);

  const appStyle = {
    backgroundColor: 'lightgray'
  }

  return (
    <Suspense fallback={(<div>Cargando...</div>)}>
      <div style={appStyle}>
        <Navbar mobile={mobile} />
        <Switch>
          <Route exact path="/" component={index} />
          <Route exact path="/01" component={v01} />
          <Route exact path="/02" component={v02} />
          <Route exact path="/03" component={v03} />
          <Route exact path="/04" component={v04} />
          <Route exact path="/05" component={v05} />
          <Route exact path="/06" component={v06} />
          <Route exact path="/07" component={v07} />
          <Route exact path="/08" component={v08} />
          <Route exact path="/09" component={v09} />
          <Route exact path="/10" component={v10} />
          <Route exact path="/11" component={v11} />
          <Route exact path="/12" component={v12} />
          <Route exact path="/13" component={v13} />
          <Route exact path="/14" component={v14} />
          <Route exact path="/15" component={v15} />
          <Route exact path="/16" component={v16} />
          <Route exact path="/17" component={v17} />
          <Route exact path="/18" component={v18} />
          <Route exact path="/19" component={v19} />
          <Route exact path="/20" component={v20} />
          <Route exact path="/21" component={v21} />
          <Route exact path="/22" component={v22} />
          <Route exact path="/23" component={v23} />
          <Route exact path="/24" component={v24} />
          <Route exact path="/25" component={v25} />
        </Switch>
        <Buttons />
        <Indice />
        <Footer />
      </div>
    </Suspense>
  )
}

export default App
