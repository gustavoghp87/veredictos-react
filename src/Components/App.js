import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
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
import { Buttons } from './Buttons'
import { Indice } from './Indice'
import { Footer } from './Footer'

export const isLocalhost = false
// Boolean(
//   window.location.hostname === 'localhost' ||
//   window.location.hostname === '[::1]' ||
//   window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
// )
export const rootPath = isLocalhost ? "/" : "/veredictos-react/"
export const urlbase = "https://veredictos.herokuapp.com/count"    // localhost:  "http://localhost:8005/count"

export const App = () => {

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

        <Routes>
          <Route element={ <Index /> } path={`${rootPath}`} />
          <Route element={ <V01 /> } path={`${rootPath}01`} />
          <Route element={ <V02 /> } path={`${rootPath}02`} />
          <Route element={ <V03 /> } path={`${rootPath}03`} />
          <Route element={ <V04 /> } path={`${rootPath}04`} />
          <Route element={ <V05 /> } path={`${rootPath}05`} />
          <Route element={ <V06 /> } path={`${rootPath}06`} />
          <Route element={ <V07 /> } path={`${rootPath}07`} />
          <Route element={ <V08 /> } path={`${rootPath}08`} />
          <Route element={ <V09 /> } path={`${rootPath}09`} />
          <Route element={ <V10 /> } path={`${rootPath}10`} />
          <Route element={ <V11 /> } path={`${rootPath}11`} />
          <Route element={ <V12 /> } path={`${rootPath}12`} />
          <Route element={ <V13 /> } path={`${rootPath}13`} />
          <Route element={ <V14 /> } path={`${rootPath}14`} />
          <Route element={ <V15 /> } path={`${rootPath}15`} />
          <Route element={ <V16 /> } path={`${rootPath}16`} />
          <Route element={ <V17 /> } path={`${rootPath}17`} />
          <Route element={ <V18 /> } path={`${rootPath}18`} />
          <Route element={ <V19 /> } path={`${rootPath}19`} />
          <Route element={ <V20 /> } path={`${rootPath}20`} />
          <Route element={ <V21 /> } path={`${rootPath}21`} />
          <Route element={ <V22 /> } path={`${rootPath}22`} />
          <Route path={`${rootPath}1`} element={<Navigate to={`${rootPath}01`} replace />} />
          <Route path={`${rootPath}2`} element={<Navigate to={`${rootPath}02`} replace />} />
          <Route path={`${rootPath}3`} element={<Navigate to={`${rootPath}03`} replace />} />
          <Route path={`${rootPath}4`} element={<Navigate to={`${rootPath}04`} replace />} />
          <Route path={`${rootPath}5`} element={<Navigate to={`${rootPath}05`} replace />} />
          <Route path={`${rootPath}6`} element={<Navigate to={`${rootPath}06`} replace />} />
          <Route path={`${rootPath}7`} element={<Navigate to={`${rootPath}07`} replace />} />
          <Route path={`${rootPath}8`} element={<Navigate to={`${rootPath}08`} replace />} />
          <Route path={`${rootPath}9`} element={<Navigate to={`${rootPath}09`} replace />} />
          <Route path="*" element={<Navigate to={rootPath} replace />} />
        </Routes>

        <Buttons />

        <Indice />

        <Footer />
        
      </div>
    </Suspense>
  )
}
