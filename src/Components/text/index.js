import React, { useEffect } from 'react'
import { CHAPIMAGE, PRESENTATION, TITLE2, PRESENTATIONP, FIRM } from '../css/css'
import { data } from '../../chapters'
import { urlbase, isLocalhost } from '../../index'


export const Index = () => {

    const url = urlbase + data[0].url
    useEffect(() => {window.scrollTo(0, 0); if(!isLocalhost)fetch(url)}, [url])

    return (
    <div>

        <CHAPIMAGE src="/veredictos-react/frontend-src/index/index.png" />

        <PRESENTATION>

            <TITLE2> PRESENTACIÓN </TITLE2>

            <PRESENTATIONP> Hace 20 años, Argentina estaba en crisis otra vez y todos querían saber por qué los economistas eran incapaces de explicar qué estaba pasando y sacar el país adelante. Lo que no hubiera podido entender entonces era que las respuestas estaban y siempre habían estado sobre la mesa pero esas mismas personas no querían aceptarlas y que, de hecho, enloquecen cuando las escuchan. </PRESENTATIONP>

            <PRESENTATIONP> Algunos años después, hice la carrera de economía en una casa de estudios marxista-keynesiana: la Universidad de Buenos Aires, perteneciente al Estado federal argentino. Mientras sufría mucho cada clase y cada profesor a lo largo de los años, solía pensar que todos estaban locos por los razonamientos que hacían para argumentar, como una gran pesadilla de ideologías de izquierda y posicionamientos políticos. </PRESENTATIONP>

            <PRESENTATIONP> Fui capaz —con el tiempo— de pensar en todas las cosas, de recordar con sentimientos cruzados cada clase y cada estudio, tratando de escapar de la confusión. Lo que descubrí es que hoy día es imposible explicar economía sin meterse en un enfrentamiento directo contra los socialistas porque ellos han corrompido completamente la enseñanza de la ciencia. </PRESENTATIONP>

            <PRESENTATIONP> El resultado es una suerte de "decodificación" del genoma socialista en economía, de la manera de la "decodificación" que George Orwell hizo en un sentido político y social. En realidad, la economía es una ciencia bastante sencilla de por sí una vez que se le ha removido la contaminación socialista, como cualquiera puede comprobar por sí mismo. </PRESENTATIONP>

            <PRESENTATIONP> Defino desde el comienzo que llamo socialismo a la dirección estatal de la economía, que, como tal y necesariamente, convierte a una nación en un campo de explotación económica exclusiva para sus dirigentes políticos y empresarios asociados, es decir, una colonia clasista de los más ricos, que tiene sus directrices en el <i>Manifiesto del Partido Comunista</i> de 1848, donde los privilegios coercitivos son asignados a cada grupo humano en proporción al aporte que haga o pueda hacer a la concentración de poder, con independencia de la ideología que el Partido gobernante profese de la boca para afuera y del origen jurídico de su autoridad. </PRESENTATIONP>

            <PRESENTATIONP> Bajo el compromiso de ser lo más breve que cada tema lo permita, este sitio, que fue pensado para el público en general y escrito en un lenguaje que cualquiera puede entender, pretende ser un <i>tour</i> por los tópicos más importantes de la ciencia, donde cada artículo fue diseñado para poder ser entendido sin necesitar de los anteriores. Pero el orden en el que están no es caprichoso y es el que se recomienda. </PRESENTATIONP>

            <PRESENTATIONP> Estoy convencido de que toda persona debería interesarse seriamente en estas cosas, pero eso es problema de cada uno. Este sitio es 100% objetivo, pro ciencia, y va directo al grano con crudeza. </PRESENTATIONP>

            <PRESENTATIONP> Dedicación especial a Carlos Gustavo Maslaton. </PRESENTATIONP>

            <br/>

            <FIRM> Veredictos de Economía </FIRM>

            <FIRM> Marzo/Septiembre de 2020 </FIRM>

        </PRESENTATION>
    </div>
    )
}