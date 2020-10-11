import React, { useEffect } from 'react'
import { CHAPIMAGE, TITLE2, UL } from '../css/css'
import { data } from '../../chapters'


export const V01 = () => {

    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
    <div>

        <CHAPIMAGE src="/frontend-src/01/01.jpg" />

        <TITLE2> I. {data[1].title} </TITLE2>

        <UL> 1. ¿De qué trata la economía como ciencia? Es acerca de gente trabajando, intercambiando, ahorrando, invirtiendo, haciendo contratos, tomando riesgos... y sus resultados. Es acerca de los humanos y la riqueza. </UL>

        <UL> 2. La riqueza se trata de cosas materiales, físicas, que tienen dueños. La propiedad privada de la riqueza permite a su propietario ganar el favor de otras personas. Pero la riqueza social -o la riqueza en un sentido social- es la cantidad de favor de otros que el propietario está habilitado a recibir. </UL>

        <UL> 3. El valor de la riqueza -su valor de cambio- es la cantidad de favor que su propietario puede recibir. Es su precio. </UL>

        <UL> 4. Cuando la gente trabaja, vende, invierte, hace contratos económicos y toma riesgos, están buscando el favor de otras personas. Son las formas en las que hacen dinero, etc. </UL>

        <UL> 5. La economía estudia el comportamiento humano y las relaciones humanas cuando están generando valor y/o riqueza; cuando crean cosas físicas... o trabajan, intercambian, invierten, hacen contratos o toman riesgos para obtener la riqueza o el favor de otros. </UL>

        <UL> 6. Pero en la mayoría de los casos, la economía estudia a la gente generando valor, valor agregado. Durante el proceso, la riqueza material es creada, como un efecto colateral. La riqueza de las naciones tiene principalmente este origen. </UL>

        <UL> 7. Entonces, la estructura económica de la sociedad es una red de relaciones humanas donde cada uno está buscando y se está esforzando por lograr el favor de los otros, liderados por el interés particular y privado. </UL>

        <UL> 8. Los humanos quieren y buscan cosas materiales que pudieran ser útiles para ellos, y quieren y buscan el favor de otras personas. La economía estudia el comportamiento humano -individual y social- cuando están buscando alguno de ambos. </UL>

        <UL> 9. Los economistas acostumbran decir que la economía estudia el comportamiento humano cuando se asignan recursos escasos para alcanzar metas. Es una excelente definición porque los humanos trabajan, intercambian, invierten, hacen contratos económicos y toman riesgos solamente cuando tienen recursos escasos para sus metas. Pero es una definición indirecta, y una definición que enfatiza la naturaleza de las metas resulta mejor (comportamiento cuando buscan riqueza, sea en sentido social como en sentido material). </UL>

    </div>
    )
}