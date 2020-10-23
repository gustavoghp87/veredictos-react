import React, { useEffect } from 'react'
import { CHAPIMAGE, TITLE2, UL, SUBTITLE } from '../css/css'
import { data } from '../../chapters'
import { urlbase, isLocalhost } from '../../index'


export const V18 = () => {

    const url = urlbase + data[18].url
    useEffect(() => {window.scrollTo(0, 0); if(!isLocalhost)fetch(url)}, [url])

    return (
    <div>

        <CHAPIMAGE src="/frontend-src/21/21.jpg" />

        <TITLE2> {data[18].number}. {data[18].title} </TITLE2>

        <UL> 1. El avance de los intereses del <i>lobby</i> bancario puso a los Estados a engendrar la enorme crisis de 1929-1933. Por entonces, muchos pueblos acabaron odiando al capitalismo y cayeron en sistemas marxistas de sometimiento, con Alemania como el caso más notable. Pero occidente, en general, siguió siendo libre. </UL>

        <UL> 2. Luego de la Segunda Guerra Mundial, el capitalismo occidental comenzó un proceso de crecimiento espectacular, a pesar de la gran cantidad de instituciones marxistas que se habían fundado en los años '1930. ¿Explicación? Enormes avances tecnológicos, relativa paz, y pocos países compitiendo. </UL>

        <UL> 3. No obstante, la interpretación general de los hechos fue otra. El crecimiento de los años 1950 y 1960 no había sido a pesar de la intervención del Estado en la economía sino gracias a ella. Por eso, los historiadores socialistas le llaman "años dorados" y "años plateados" a esas dos décadas, respectivamente. </UL>

        <UL> 4. Pero la década de 1970 comenzó muy mal. Todo el mundo capitalista estaba exhausto y tenía poco crecimiento, alta inflación y conflictividad social severa. Ahora tenían que competir con el sudeste asiático, países que no tenían la carga de crecer y al mismo tiempo mantener Estados enormes. </UL>

        <UL> 5. El diagnóstico que se hizo, con Milton Friedman al frente: los Estados estaban impidiendo el progreso con sus regulaciones, distorciones de precios, redistribuciones, impuestos, inflación y crisis. Fue la revolución neoliberal: occidente concluyó que para seguir creciendo había que recortar los presupuestos de los Estados, desregular la economía y dejar de hacer política cambiaria. </UL>

        <UL> 6. Así, la invación marxista de los años '1930 llegó a su fin 50 años después. Desde entonces, el mundo capitalista ha mostrado un progreso imparable de 40 años. Los países que se negaron a hacer las reformas, en cambio, se hundieron. </UL>


        <SUBTITLE> NEOLIBERALISMO Y EL ESTADO EN<br/>EL MERCADO DE DINERO </SUBTITLE>

        <UL> 7. Sin embargo, la avanzada del liberalismo sobre el socialismo no lo derrotó por completo. Persiste la más grande institución marxista, la del quinto mandamiento del Manifiesto Comunista: el banco central. </UL>

        <UL> 8. No subsiste ya el banco central para financiar déficits públicos sistemáticos para "estimular el consumo y la inversión", como se hizo en las 5 décadas que siguieron al <i>crash</i> de 1929. Pero los Estados aun tienen secuestrado el mercado del dinero de cada país y hacen "política monetaria" a través del crédito bancario cuando quieren que baje el desempleo. (Ver capítulos 7 y 17.) </UL>

        <UL> 9. El sistema tiene detractores moderados, que son los monetaristas. Si el Estado no permite el uso de monedas extranjeras en su territorio y no permite o limita el uso de monedas privadas, no hay libertad económica plena. Pero, aun así, hay un principio de respeto a la propiedad privada cuando el banco central se limita a seguir un programa monetario preestablecido y publicado en vez de aplicar discrecionalidad. </UL>

        <UL> 10. Hay, entonces, 3 posturas: el monetarista que quiere que se deje de hacer "política monetaria expansiva" para "estimular" el crecimiento, el marxista que quiere hacerla, y el liberal clásico y el austríaco que no quieren saber nada con la monopolización estatal del mercado de dinero y las prohibiciones a las monedas privadas. </UL>

    </div>
    )
}