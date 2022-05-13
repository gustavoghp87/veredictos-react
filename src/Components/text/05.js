import React, { useEffect } from 'react'
import { CHAPIMAGE, TITLE2, UL, SUBTITLE, CENTER } from '../css/css'
import { data } from '../../chapters'

import { isLocalhost, rootPath, urlbase } from '../App'

export const V05 = () => {

    const url = urlbase + data[5].url
    useEffect(() => {window.scrollTo(0, 0); if(!isLocalhost)fetch(url)}, [url])

    return (
    <div>

        <CHAPIMAGE src={`${rootPath}frontend-src/08/08.jpg`} />

        <TITLE2> {data[5].number}. {data[5].title} </TITLE2>

        <UL> 1. Toda persona tiene ingresos y debe elegir cuánto consumir y cuánto ahorrar. Y respecto al ahorro, también tiene que decidir cuánto invertir como capital y cuánto preservar sin poner a producir como ahorro atesorado. </UL>

        <UL> 2. Si una persona quiere hacerse rica, lo que tiene que hacer es consumir una porción menor de sus ingresos (aparte de buscar mayores ingresos). Elemental. </UL>

        <UL> 3. Pero para J. M. Keynes (buscando explicar la gran contracción de 1929-1933 y levantar nuevos argumentos socialistas), esto no es cierto a nivel macroeconómico: Cuando todos o muchos en un país empiezan a ahorrar una mayor proporción de sus ingresos, la producción se tiene que venir abajo. Y, consecuentemente, los ingresos tienen que caer, de forma que todos terminarán ahorrando menos que antes. Es la <i>paradoja keynesiana del ahorro</i>. </UL>

        <UL> 3. Esta "paradoja" es el argumento keynesiano para decir que la redistribución del ingreso es una "política fiscal expansiva": Los pobres ahorran poco o nada, mientras que los "ricos" ahorran una buena porción de sus ingresos. De modo que quitarles a unos para darles a otros tiene que disminuir el ahorro macroeconómico, causando un auge económico. </UL>

        <UL> 4. De esta manera, la "paradoja" es una especie de mutación de la <i>teoría del Manifiesto Comunista</i>: Ahora la libertad no solo causaría desigualdad sino también mucho ahorro nocivo. Si la gente ejerciera su libertad de decidir cuánto gastar y cuánto ahorrar, habría malos resultados para la sociedad, incluso para los ahorradores. </UL>

        <UL> 5. Habría una contradicción entre la libertad y el respeto a la propiedad privada, por un lado, y el bien común, por el otro. Y por eso se necesita concentrar poder en un enorme Estado socialista. </UL>


        <SUBTITLE> EL HACK </SUBTITLE>

        <UL> 6. ¿Por qué podríamos decir que la producción debe caer cuando aumente el ahorro? Porque, para Keynes, el producto de una economía es función directa del consumo, mientras que el ahorro sería el némesis del consumo: </UL>

        <CENTER> PIB = alguna constante . CONSUMO </CENTER>

        <UL> 7. Es el famoso multiplicador keynesiano. Cuando la gente consume un valor, genera más valor. Pero cuando ahorra, su valor cae en un agujero negro, desaparece. El legendario pensamiento comunista resumido en una sola ecuación. </UL>

        <UL> 8. "Ahorro" es un concepto general. Puede significar comprar un activo que conserva su valor en el tiempo, invertir en el país o sacar el dinero del país. Hay, entonces, un ahorro que es inversión y otro que no lo es. Keynes dio por hecho que ningún ahorro es inversión. </UL>

        <UL> 9. En Keynes, como se explicita en los manuales de macroeconomía, el ingreso de la población se divide entre lo que se consume y lo que se ahorra. Y el producto generado por las empresas (que explica esos ingresos) se divide entre lo que se produce para consumir y para invertir: </UL>

        <CENTER> INGRESO GLOBAL  =  CONSUMO + AHORRO </CENTER>

        <CENTER> PRODUCTO GLOBAL  =  CONSUMO + INVERSIÓN </CENTER>

        <UL> 10. Pero es falso. El ingreso se descompone en consumo, ahorro inversión y ahorro no inversión. Y el producto está formado por el valor de mercado de los bienes y servicios finales de consumo e inversión que se venden más lo que no se venden. </UL>

        <UL> 11. Hay dos trasfondos en el esquema keynesiano. Primeramente, que durante la Gran Depresión (1929-1933) la gente contrajo el consumo y la inversión para comprar oro (ahorro no inversión), desplomando el producto. </UL>

        <UL> 12. Segundo, se ve en Keynes el sueño comunista de convertir al Estado en el único capitalista. Es la división funcional de la economía del artículo anterior (7), donde el Estado produce e invierte y sus súbditos consumen y ahorran (ahorro no inversión). </UL>

        <UL> 13. ¿De qué depende la inversión en el esquema de Keynes? De factores psicológicos ajenos a todo esto, que llamó "animal spirits". Tiene su origen en su experiencia en la bolsa de valores de Londres, donde Keynes operaba usando información privilegiada que obtenía desde su cargo en el ministerio de economía. Como no entendía los movimientos de los precios, concluyó que dependen de las noticias y de las charlas de café. </UL>


        <SUBTITLE> AHORRO, SISTEMA DE PRECIOS<br/>Y SOCIALISMO </SUBTITLE>

        <UL> 14. En casos normales, cuando la gente ahorra más, el sistema de precios hace que esos ahorros se vuelvan inversión o consumo, usualmente mediante bancos y tasas de interés. Esos créditos nuevos hacen que los bienes de consumo y de capital que no fueron vendidos a los nuevos ahorristas sí sean vendidos a los tomadores de créditos. Por esta vía, el aumento del ahorro impulsa la capitalización, no atenta contra la producción. </UL>

        <UL> 15. Las excepciones están dadas cuando hay crisis de expectativas y cuando el Estado no deja funcionar al sistema de precios. En esos dos casos, el aumento en el radio de ahorro macroeconómico no hace aumentar la inversión ni el consumo sino que causa la contracción del producto y de la renta interior. </UL>
        
        <UL> 16. Y, usualmente, las crisis están causadas porque el Estado no ha dejado funcionar al sistema de precios, como pasó en 1929-1933 y se trata en el capítulo 17. Es el gobierno manipulando las tasas de interés y los tipos de cambio. </UL>

        <UL> 17. En una economía libre, en cambio, el mismo mercado se encarga de que el ahorro no solo no sea nocivo sino que sea la causa de la prosperidad. Genera los instrumentos y los incentivos para ahorrar y para que ese ahorro capitalice la economía, donde la función racional del Estado es garantizar el respeto a la propiedad privada y, por tanto, el funcionamiento del sistema de precios libres. </UL>

        <UL> 18. Quitarle dinero a unos para dárselo a los pobres (que conduce a convertir al Estado socialista en el único capitalista) no es, entonces, una receta válida para lograr la prosperidad de los pueblos. </UL>

        <UL> 19. Cuando una sociedad tiene mucho ahorro improductivo (compra viviendas y monedas extranjeras en vez de capitalizar a las empresas), ese no es el problema sino la consecuencia. Y el problema es el Estado socialista que, como tal, no respeta la propiedad privada. La gente esconde sus activos del Estado para no ser despojados. </UL>

        <UL> 20. El ahorro al socialista se le presenta como un enemigo a ser destruido porque es la base del capital privado. Las teorías socialistas del crecimiento basadas en el consumo han causado muchísimo sufrimiento en el mundo. Los gobiernos han destruido los patrimonios de la gente, descapitalizado las economías y puesto a los ciudadanos a odiarse unos a otros. </UL>

    </div>
    )
}