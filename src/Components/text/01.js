import React, { useEffect } from 'react'
import { CHAPIMAGE, TITLE2, SUBTITLE, UL, IMAGECENTER } from '../css/css'
import { data } from '../../chapters'


export const V01 = () => {

    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
    <div>

        <CHAPIMAGE src="/frontend-src/01/01.jpg" />

        <TITLE2> {data[1].number}. {data[1].title} </TITLE2>

        <UL> 1. Procedemos de esta manera en este primer capítulo: definimos economía, valor y riqueza para poder explicar la teoría de los precios y, así, tratar la teoría socialista de la explotación. </UL>


        <SUBTITLE> ECONOMÍA </SUBTITLE>

        <UL> 2. ¿De qué trata la economía como ciencia? Es acerca de gente trabajando, intercambiando, ahorrando, invirtiendo, haciendo contratos, tomando riesgos... y sus resultados. Es acerca de los humanos y la riqueza. </UL>

        <UL> 2. La riqueza se trata de cosas materiales, físicas, que tienen dueños. La propiedad privada de la riqueza permite a su propietario ganar el favor de otras personas. Pero la riqueza social (o la riqueza en un sentido social) es la cantidad de favor de otros que el propietario está habilitado a recibir. </UL>

        <UL> 3. El valor de la riqueza —su valor de cambio— es la cantidad de favor que su propietario puede recibir. Es su precio. </UL>

        <UL> 4. Cuando la gente trabaja, vende, invierte, hace contratos económicos y toma riesgos, están buscando el favor de otras personas. Son las formas en las que hacen dinero, etc. </UL>

        <UL> 5. La economía estudia el comportamiento humano y las relaciones humanas cuando están generando valor y/o riqueza; cuando crean cosas físicas... o trabajan, intercambian, invierten, hacen contratos o toman riesgos para obtener la riqueza o el favor de otros. </UL>

        <UL> 6. Pero en la mayoría de los casos, la economía estudia a la gente generando valor, valor agregado. Durante el proceso, la riqueza material es creada, como un efecto colateral. La riqueza de las naciones tiene principalmente este origen. </UL>

        <UL> 7. Entonces, la estructura económica de la sociedad es una red de relaciones humanas donde cada uno está buscando y se está esforzando por lograr el favor de los otros, liderados por el interés particular y privado. </UL>

        <UL> 8. Los humanos quieren y buscan cosas materiales que pudieran ser útiles para ellos, y quieren y buscan el favor de otras personas. La economía estudia el comportamiento humano -individual y social- cuando están buscando alguno de ambos. </UL>

        <UL> 9. Los economistas acostumbran decir que la economía estudia el comportamiento humano cuando se asignan recursos escasos para alcanzar metas. Es una excelente definición (microeconómica) porque los humanos trabajan, intercambian, invierten, hacen contratos económicos y toman riesgos solamente cuando tienen recursos escasos para sus metas. Pero es una definición indirecta, y una definición que enfatiza la naturaleza de las metas resulta mejor (comportamiento cuando buscan riqueza, sea en sentido social como en sentido material). </UL>


        <SUBTITLE> VALOR DE CAMBIO </SUBTITLE>

        <UL> 1. El valor de uso es la cantidad de apreciación de algo y es siempre subjetivo. </UL>

        <UL> 2. El valor de cambio es la cantidad de favor que su propietario puede lograr; pero, en mercados grandes, es la máxima cantidad de dinero. "La riqueza -como dice el sr. Hobbes- es poder" (<i>The Wealth of Nations</i>, capítulo 5). </UL>

        <UL> 3. El valor económico (valor de cambio) es determinado por las relaciones humanas: la oferta y la demanda porque compradores compiten entre ellos por los productos y vendedores compiten entre ellos por el dinero. </UL>

        <UL> 4. El ahorro es riqueza (material o social) que no es consumida. El capital es ahorro puesto a producir más valor pero, en un sentido social, es un valor de cambio puesto a producir más valor de cambio. El capitalismo es un sistema donde la propiedad del capital está descentralizada, y el socialismo es un sistema donde el Estado es el único propietario del capital o el principal propietario. El monopolio del capital conduce a tiranía. </UL>

        <UL> 5. En un estado primitivo de la sociedad, las cosas no eran producidas con capital (ahorro puesto a producir) sino solamente con trabajo. Por tanto, nadie aceptaba cambiar un objeto que había costado 4 horas de trabajo por algo que costase menos que 4 horas. La cantidad de trabajo socialmente necesario era el valor detrás de los precios relativos -tasas de intercambio-. Pero este es solo un caso muy especial que supone: que no haya capital ni escasez. </UL>

        <UL> 6. Respecto a la escasez: Si yo he trabajado solo 4 horas en algo pero nadie puede conseguir las materias primas para hacer la misma cosa, o solo yo puedo hacer ese oficio, las otras personas están dispuestas a pagarme con cosas que cuestan más de 4 horas, y el precio será mayor a eso. </UL>

        <UL> 7. Y respecto al capital: Si yo necesito 4 horas de trabajo para producir algo o solo 2 si uso alguna herramienta, necesito determinar cuánto es el mínimo que estoy dispuesto a aceptar en cambio por este producto. La herramienta es un ahorro puesto a producir. Si costó 100 horas de trabajo y puede ser usada 100 veces, puedo calcular que estoy dispuesto a aceptar un mínimo de 3 horas de trabajo o productos: 2 + 1, y que ese es el máximo que están dispuestos a pagar los demás. Pero esto —que es el método de David Ricardo y fue empleado por Marx— no es así, y es un asunto clave. Nadie pone un ahorro a producir gratis. El capital requiere una remuneración. Si yo trabajé 100 horas por una herramienta que ahorra trabajo, no voy a aceptar simplemente recuperar el valor de la herramienta; no solo por el riesgo asumido de no recuperarlo sino también —y principalmente— por negarme a consumir ese valor cuando pude. Y la misma postura asumen mis competidores. Por eso el precio será mayor a 3 horas. </UL>

        <UL> 8. Nuevamente, en un mercado muy sencillo donde no haya escasez de materias, conocimientos y destrezas y no se empleen herramientas, ganado o cualquier cosa que pudo haber sido consumida pero fue empleada en la producción, la cantidad de trabajo socialmente necesario es el valor detrás de los precios relativos; cuando no había escasez ni capital. </UL>

        <UL> 9. Solo por curiosidad: En Karl Marx, la cantidad de trabajo socialmente necesario no explica el valor de los bienes a causa de un fenómeno de mercado -como sí hizo Adam Smith de acuerdo a lo explicado en el punto 5- sino por alguna clase de fenómeno metafísico: el trabajo humano sería la única cosa en común entre los diferentes bienes, y por eso es el único factor que puede explicar las tasas de intercambio (precios relativos). Sin embargo, esto es simplemente falso. La única cosa en común entre diferentes bienes es que las personas están dispuestas a trabajar, obedecer y dar cosas a cambio de ellas. Y si has leído este punto 9, ya no necesitas leer y sufrir los primeros 4 capítulos de <i>Das Kapital</i> (1867). </UL>

        <UL> 10. La razón de ser de la teoría o ley del valor-trabajo fue que en el siglo XIX los economistas estaban tratando de explicar la industria capitalista y las relaciones laborales, no los mercados de valores ni mercados exóticos con oferta inelástica, o industrias intensivas en capital que aun no existían. Cuando los salarios son el costo principal de producción y se emplea poco capital, los precios de los productos masivos son bien explicados por las cantidades de trabajo, y por eso esta ley o teoría fue útil como aproximación en aquel tiempo. </UL>

        <UL> 11. La visión de la época podría resumirse así: la función de oferta se debe graficar como una horizontal y, por eso, la demanda y la subjetividad no cumplen ningún rol a la hora de explicar los precios. No es "cuánto ofrezco a este precio" sino "cuánto me demandan a este precio". </UL>

        <UL> 12. Explicar estas cosas no es de poca importancia para lo que viene. Tener en cuenta que los economistas austríacos cuando hablan de estas cosas dicen todo mal, porque rara vez se detienen a aprender bien la teoría que pretenden estar refutando con tanta pasión. </UL>


        <SUBTITLE> III. VALOR AGREGADO<br/>Y PRECIOS </SUBTITLE>

        <UL> 1. Pero, ¿los precios son determinados solamente por la oferta, como dicen los marxistas-keynesianos? ¿Son determinados solo por la demanda, como los economistas austríacos dicen? Hay casos extremos donde el precio de mercado es solamente explicado por la oferta (como el hilo y la tela a mediados del siglo XIX) y hay casos extremos donde es explicado solamente por la demanda (como en obras de arte, vino añejo y algunos espectáculos). Son singularidades. </UL>

        <UL> 2. ¿Qué significa que "los precios son determinados por la oferta y la demanda"? La gente quiere comprar más cuanto más bajo sea el precio -obviamente-, y las empresas quieren vender más cuanto mayor sea el precio, y, como resultado, los precios de los bienes y servicios son determinados -en mercados libres- por la oferta y la demanda en un juego de equilibrios. Pero ¿por qué las empresas requieren precios más altos para ofrecer más? Porque los costos unitarios de producción son siempre crecientes. Para aumentar la producción y vender más, las empresas necesitarán usar recursos que están siendo utilizados en otras actividades o funciones y pagar más por ellos que lo que están recibiendo ahora. </UL>

        <UL> 3. Lo que los economistas austríacos dicen sobre esto es, no obstante, cierto: El precio es lo que los consumidores están dispuestos a pagar. Pero esto es así porque cuando los consumidores determinan cuánto están dispuestos a pagar tienen en cuenta las otras opciones -las de la competencia-. Asi es como los precios no son subjetivos -como ellos dicen- sino de interacción entre costos y demanda. En otras palabras, si trazamos una función de oferta de pendiente positiva, la demanda conjunta escoge subjetivamente la combinación de precio y cantidad ofrecida entre todas las que las condiciones de oferta permiten. Los precios no son subjetivos y sí dependen de los costos. </UL>

        <UL> 4. Nuevamente, "los precios son lo que los consumidores están dispuestos a pagar" es cierto pero no significa que estén determinados solo por la demanda. </UL>

        <UL> 5. Cuando hablamos de activos en los mercados bursátiles secundarios como bonos, acciones, futuros y commodities, la oferta suele ser muy inelástica porque allí todos son compradores y vendedores pero ninguno productor; ciertamente, ninguno es productor de los valores que se están tranzando. Y, como resultado, esos valores están determinados según las expectativas de precios futuros y del nivel de endeudamiento de los actores, y así suelen fluctuar de acuerdo a leyes probabilísticas; los precios no prestan mucha atención a los costos, o nada. Cuando algunos economistas o analistas técnicos de mercado dicen que los precios solo dependen de la demanda y nunca de los costos están pensando en esta dinámica estadística pero no en las actividades productivas. No es que el esquema explicativo de la oferta y la demanda no funcione; es que los vendedores no tienen costos y eso le da mucha inestabilidad a las funciones de oferta, haciendo al esquema poco útil. </UL>


        <SUBTITLE> VALOR AGREGADO </SUBTITLE>

        <UL> 6. Si en un mercado libre un trabajo o una inversión consigue un pago, es porque la gente está dispuesta a pagar por eso y a pagar esa cantidad; no puede bajar porque no se consigue más barato. Es la ley de la oferta y la demanda aplicada al mercado laboral y al mercado de capitales. Luego, como cada vendedor tiene que bajar el precio hasta el mínimo que es aceptable para él, y pagarle a los trabajadores, proveedores e inversores el mínimo que es aceptable para ellos, se puede explicar el precio final como la sumatoria de todos estos "costos". De esta manera, la suma de remuneraciones de todos los factores determina un piso para el precio final del producto que fabrican. Y en un mercado libre, los precios bajarán hasta encontrar este piso. </UL>

        <UL> 7. Por lo tanto, a causa de esto, podemos decir que este trabajo o esta inversión <b>agrega valor</b> al producto final: gracias a este trabajo o gracias a esta inversión, el precio de venta no sigue bajando; están "agregando valor" en el sentido de que gracias a su participación en la producción, el precio final tiene un contenido extra. </UL>

        <UL> 8. Por lo tanto, una persona genera valor cuando aporta trabajo o capital por los cuales la sociedad está dispuesta a pagar, y la cantidad recibida en pago es igual al valor agregado que ese factor genera en el producto final (esto último es cierto por definición de valor de cambio). </UL>

        <UL> 9. Este principio aplicado a la remuneración de los factores dice que los trabajadores reciben como salarios lo que los consumidores están dispuestos a pagar por sus trabajos y que los capitalistas reciben como ganancias lo que los consumidores están dispuestos a pagar por sus inversiones. Cuando la gente escoge comprar la opción más económica, están escogiendo el proceso de producción que prefieren y las remuneraciones a los factores que prefieren. No hay explotación entre factores. </UL>

        <UL> 10. Como recapitulación de todo lo dicho: Los precios están determinados por la interacción de la oferta y la demanda y, como consecuencia, los precios son lo que los consumidores están dispuestos a pagar y, como consecuencia, los precios son las sumas de las remuneraciones de los factores que participan en la producción y, como consecuencia, los precios son las sumas de valor agregado por los factores y, como consecuencia, finalmente, cada factor se lleva la parte que produce. Cada cual gana de acuerdo a lo que le aporta a la sociedad libre y nadie se lleva el valor que produce otro, al menos durante el proceso productivo. Y todo esto es cierto con la única condición de que no se cambien las reglas de juego durante el proceso; no necesita que haya una "competencia perfecta". </UL>

        <UL> 11. Los precios no son "objetivos" ni "subjetivos". La demanda es subjetiva pero condicionada por factores objetivos, y la oferta es objetiva pero condicionada por factores subjetivos. </UL>


        <SUBTITLE> MARGINALISMO </SUBTITLE>

        <UL> 11. Los microeconomistas suelen decir que cuando unos pocos trabajadores son agregados al proceso productivo ellos son muy productivos y, entonces, se contratan más porque contratarlos deja ganancias extraordinarias. A medida que más trabajadores son contratados, la productividad promedio decrece, y cuando se ha alcanzado la situación donde contratar a un trabajador más significaría un desembolso de dinero más grande que los nuevos ingresos que causaría el correspondiente aumento de la producción ("producto marginal"), las contrataciones cesan. Así es como los salarios son iguales a la productividad marginal del trabajo (el valor de mercado de el incremento marginal de la producción). </UL>

        <UL> 12. Los economistas marginalistas (1870-1900) intentaron imponer las funciones de producción de retornos decrecientes para la totalidad de las industrias para lograr que sus esquemas matemáticos de sistemas de ecuaciones pudieran funcionar (esquemas con costos de los factores constantes) en vez de dar indeterminación matemática; es decir, impusieron los costos unitarios crecientes como una realidad física en vez de una realidad económica basada en el costo de oportunidad. Lo importante es: Lo que expresamos en el punto 10 es cierto en todos los tipos de procesos de producción porque los costos unitarios son siempre crecientes cuando aumenta la producción, sea porque los factores se hacen más caros o sea porque la productividad se reduce. </UL>


        <SUBTITLE> SMITH (1776) </SUBTITLE>

        <UL> 13. Finalmente, respecto al comentario generalizado acerca de que Adam Smith predicó la ley del valor-trabajo: </UL>

        <IMAGECENTER src="/frontend-src/03/sm1.png" />

        <IMAGECENTER src="/frontend-src/03/sm2.png" />

        <UL> 14. "Realmente creo que todo lo que los economistas descubrieron ya estaba en Adam Smith" dijo Alfred Marshall. </UL>

    </div>
    )
}