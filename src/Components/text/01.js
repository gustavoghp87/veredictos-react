import React, { useEffect } from 'react'
import { CHAPIMAGE, TITLE2, SUBTITLE, UL, IMAGECENTER } from '../css/css'
import { data } from '../../chapters'
import { isLocalhost, rootPath, urlbase } from '../App'

export const V01 = () => {

    const url = urlbase + data[1].url
    useEffect(() => {window.scrollTo(0, 0); if(!isLocalhost)fetch(url)}, [url])

    return (
    <div>

        <CHAPIMAGE src={`${rootPath}frontend-src/03/03.jpg`} />

        <TITLE2> {data[1].number}. {data[1].title} </TITLE2>

        <UL> 1. El protagonista de la actividad económica humana es el valor agregado, que es un precio. Por eso, la <i>teoría de la explotación social</i>, que dice que la ganancia del que contrata es producida por los trabajadores contratados, tiene sus necesarias raíces en la teoría de los precios. </UL>

        <UL> 2. Muchos países han perdido el rumbo hacia la prosperidad material y causádose enfrentamientos internos duros y prolongados por creer en la <i>teoría de la explotación</i>. </UL>
        
        <UL> 3. Por eso, procedemos de esta manera en este primer capítulo: definimos economía, valor y riqueza, explicamos la teoría de los precios en una confrontación con la marxista, y, finalmente, exponemos la desnudez de la <i>teoría socialista de la explotación</i>. </UL>


        <SUBTITLE> ECONOMÍA </SUBTITLE>

        <UL> 4. Cuando los humanos trabajan, están buscando una de estas cosas: producir algo para ellos mismos o lograr el favor de los demás. Pero cuando intercambian, ahorran, invierten, hacen contratos y toman riesgos, y la mayoría de las veces cuando trabajan también, lo hacen para lograr el favor de los demás, dinero o bienes o servicios. Por eso la economía es el estudio de los comportamientos humanos que persiguen esta meta y sus resultados. </UL>

        <UL> 5. La cantidad de favor externo que uno puede lograr con su actividad, posesiones o prestaciones es el valor agregado o precio, que en otros tiempos se llamada valor de cambio. </UL>

        <UL> 6. En otras palabras, la economía estudia a la gente generando valor, valor agregado, dentro de un entorno social, o sea, mercados, de acuerdo al propio interés. Y, durante el proceso, la riqueza material es creada, como un efecto colateral. La riqueza material de las naciones tiene principalmente este origen. </UL>

        <UL> 7. Sin embargo, favor de los demás no significa necesariamente que no haya coerción o algún grado de imposición en el vínculo. De hecho, lo normal es que los mercados estén intervenidos. </UL>

        <UL> 8. Los economistas acostumbran decir que la economía estudia el comportamiento humano cuando se asignan recursos escasos para alcanzar metas. Pero, si bien es cierto que la asignación de recursos en un marco de escasez es requisito para que se haga economía, hay asignación de recursos escasos que no pertenecen a la economía. La sustancia del estudio es, en verdad, el valor agregado. </UL>


        <SUBTITLE> PRECIO, AHORRO Y CAPITAL </SUBTITLE>

        <UL> 9. El valor de uso es la cantidad de apreciación de algo y es siempre subjetivo. Pero el valor de cambio o precio es la cantidad de favor que su propietario puede lograr; en mercados grandes, es la máxima cantidad de dinero. "La riqueza —como dice el sr. Hobbes— es poder" (<i>The Wealth of Nations</i>, capítulo 5). </UL>

        <UL> 10. El precio es determinado por las relaciones humanas: la oferta y la demanda porque compradores compiten entre ellos por los productos y vendedores compiten entre ellos por el dinero. </UL>

        <IMAGECENTER src={`${rootPath}frontend-src/02/02.jpg`} />

        <UL> 11. El ahorro es riqueza (material o social) que no es consumida. El capital, en cambio, es ahorro puesto a producir más; pero, en un sentido social o de mercado, es un valor de cambio puesto a producir más valor de cambio. El capitalismo es un sistema donde la propiedad del capital está descentralizada, y el socialismo es un sistema donde el Estado es el principal propietario de capital. El monopolio del capital conduce a tiranía. </UL>


        <SUBTITLE> PRECIO Y CANTIDAD DE TRABAJO </SUBTITLE>

        <UL> 12. En un estado primitivo de la sociedad, las cosas no eran producidas con capital (ahorro puesto a producir) sino solamente con trabajo y "capitales" de la naturaleza. Por tanto, nadie aceptaba cambiar un objeto que había costado 4 horas de trabajo por algo que costase menos que 4 horas. La cantidad de trabajo socialmente necesaria para la producción de cada cosa era el determinante de su precio. </UL>
        
        <UL> 13. Esto lo dijo Adam Smith casi a la pasada al comienzo de <i>La Riqueza de las Naciones</i> pero muchos economistas que le siguieron lo convirtieron en una teoría universal de los precios. De aquí surge la <i>teoría socialista de la explotación social</i>: Si solamente los que trabajan físicamente agregan valor a los productos, los ingresos de las otras clases sociales tienen que ser coercitivos. No obstante, este es solo un caso muy especial que supone: que no haya capital ni escasez. </UL>

        <UL> 14. Respecto a la escasez: Si un hombre ha trabajado solamente 4 horas en algo pero nadie puede conseguir las materias primas para hacer la misma cosa, o solamente él domina la pericia de ese oficio, las otras personas estarán dispuestas a pagarle con cosas que cuestan más que 4 horas, y el precio será mayor a eso. </UL>

        <UL> 15. Y respecto al capital: Si un hombre necesita 4 horas de trabajo para producir algo, pero solamente 2 si usa alguna herramienta, necesita determinar cuánto es el mínimo que estará dispuesto a aceptar en cambio por este producto. </UL>
        
        <UL> 16. La herramienta es un ahorro puesto a producir. Si costó 100 horas de trabajo y puede ser usada 100 veces, el hombre puede calcular que estará dispuesto a aceptar un mínimo de 3 horas de trabajo o productos: 2 + 1, y puede razonar que ese es el máximo que están dispuestos a pagar los demás. </UL>
        
        <UL> 17. Pero esto —que es el método de David Ricardo y fue empleado por Marx— no es así, y es un asunto clave. Nadie pone un ahorro a producir gratis. El capital requiere una remuneración. Si el hombre trabajó 100 horas por una herramienta que ahorra trabajo, no va a aceptar simplemente recuperar el valor de la herramienta; no solo por el riesgo asumido de no recuperarlo sino también —y principalmente— por haber renunciado a consumir ese valor cuando pudo (o haber trabajado en otra cosa). </UL>
            
        <UL> 18. Y, como es la misma postura que asumen sus competidores, el precio será mayor a 3 horas. El precio será 3 horas más la remuneración del capital, y esta parte del precio no tiene nada que ver con la cantidad de trabajo que necesita la producción (2 horas) sino que es un cierto porcentaje sobre el valor del capital en el tiempo, que depende de la oferta y la demanda de capitales. </UL>
        
        <UL> 19. Como los compradores prefieren pagar un poco más de 3 horas que pagar 4, es el mismo mercado quien remunera al capital por su participación en el proceso productivo. Y esto es independiente de que las 2 horas sean trabajadas por el mismo propietario del capital o por un asalariado. </UL>

        <UL> 20. Nuevamente, en un mercado muy sencillo donde no haya escasez de materias, conocimientos y destrezas y no se empleen herramientas, ganado o cualquier cosa que pudo haber sido consumida pero fue empleada en la producción con riesgos, la cantidad de trabajo socialmente necesaria para la producción es el valor detrás de los precios relativos; cuando no había escasez ni capital. </UL>


        <SUBTITLE> CIRCUNSTANCIAS HISTÓRICAS DE LA LEY DEL VALOR-TRABAJO </SUBTITLE>

        <UL> 21. Solo por curiosidad: En Karl Marx, la cantidad de trabajo socialmente necesaria no explica el valor de los bienes a causa de un fenómeno de mercado (como sí en Adam Smith) sino por alguna clase de fenómeno metafísico: el trabajo humano sería la única cosa en común entre los diferentes bienes, y por eso es el único factor que puede explicar las tasas de intercambio (precios relativos). </UL>
        
        <UL> 22. Sin embargo, esto es simplemente falso. La única cosa en común entre diferentes bienes es que las personas están dispuestas a trabajar, obedecer y dar cosas a cambio de ellas. Y si has leído este punto 9, ya no necesitas leer y sufrir los primeros 4 capítulos de <i>Das Kapital</i> (1867). </UL>

        <UL> 23. La razón de ser de la teoría o ley del valor-trabajo fue que en el siglo XIX los economistas estaban tratando de explicar la industria capitalista y las relaciones laborales, no los mercados de valores ni mercados exóticos con oferta inelástica, o industrias intensivas en capital que aun no existían. </UL>
        
        <UL> 24. Cuando los salarios son el costo principal de producción y se emplea poco capital, los precios de los productos masivos son bien explicados por las cantidades de trabajo, y por eso esta ley o teoría fue útil como aproximación en aquel tiempo. </UL>

        <UL> 25. La visión de la época podría resumirse así: la función de oferta se debe graficar como una horizontal y, por eso, la demanda y la subjetividad no cumplen ningún rol a la hora de explicar los precios. No era "cuánto ofrezco a este precio" sino "cuánto me demandan a este precio". </UL>


        <SUBTITLE> OFERTA Y DEMANDA </SUBTITLE>

        <UL> 26. ¿Los precios son determinados solamente por la oferta, como dicen los marxistas-keynesianos? ¿Son determinados solo por la demanda, como los economistas austríacos dicen? </UL>
        
        <UL> 27. Hay casos extremos donde el precio de mercado es solamente explicado por la oferta (como el hilo y la tela a mediados del siglo XIX) y hay casos extremos donde es explicado solamente por la demanda (como en obras de arte, vino añejo y algunos espectáculos). Son singularidades. </UL>

        <UL> 28. ¿Qué significa que "los precios son determinados por la oferta y la demanda"? La gente quiere comprar más cuanto más bajo sea el precio (obviamente), y las empresas quieren vender más cuanto mayor sea el precio, y, como resultado, los precios de los bienes y servicios son determinados (en mercados libres) por la oferta y la demanda en un juego de equilibrios. </UL>
        
        <UL> 29. Pero ¿por qué las empresas requieren precios más altos para ofrecer más? Porque los costos unitarios de producción son siempre crecientes. Para aumentar la producción y vender más, las empresas necesitarán usar recursos que están siendo utilizados en otras actividades o funciones y pagar más por ellos que lo que están recibiendo ahora. </UL>


        <SUBTITLE> SUBJETIVIDAD DE LOS PRECIOS </SUBTITLE>

        <UL> 30. Lo que los economistas austríacos dicen sobre esto es, no obstante, cierto: El precio es lo que los consumidores están dispuestos a pagar. Pero esto es así porque, cuando los consumidores o compradores determinan cuánto están dispuestos a pagar, tienen en cuenta las otras opciones (las de la competencia). Igualmente es cierto que los precios son lo que los vendedores están dispuestos a cobrar. </UL>
        
        <UL> 31. Si trazamos una función de oferta de pendiente positiva, la demanda conjunta escoge subjetivamente la combinación de precio y cantidad ofrecida entre todas las que las condiciones de oferta permiten. Por eso, los precios no dependen solo de la demanda. </UL>

        <UL> 32. Pero los costos, a su vez, pueden cambiar y cambian a cada momento, según la capacidad cambiante que tiene cada participante de la producción para conseguir el favor de los demás en los mercados. Por eso, los precios no tienen ningún tipo de valor intrínseco universal y pueden valer cualquier cosa, si bien los costos les dan cierta estabilidad. </UL>

        <UL> 33. Es en este sentido que los precios son subjetivos. Dependen de las capacidades cambiantes de agregar valor de cada uno. </UL>


        <SUBTITLE> PRECIOS BURSÁTILES </SUBTITLE>

        <UL> 34. Cuando hablamos de activos en los mercados bursátiles secundarios como bonos, acciones, futuros y commodities, la oferta suele ser muy inelástica porque allí todos son compradores y vendedores pero ninguno productor; ciertamente, ninguno es productor de los valores que se están tranzando. </UL>
        
        <UL> 35. Y, como resultado, esos valores están determinados según las expectativas de precios futuros y del nivel de endeudamiento de los actores, y así suelen fluctuar de acuerdo a leyes probabilísticas; los precios no prestan mucha atención a los costos, o nada. </UL>
        
        <UL> 36. No es que el esquema explicativo de la oferta y la demanda no funcione; es que los vendedores no tienen costos y eso le da mucha inestabilidad a las funciones de oferta, haciendo al esquema poco o nada útil. </UL>


        <SUBTITLE> VALOR AGREGADO EN PROCESOS PRODUCTIVOS COMPLEJOS </SUBTITLE>

        <UL> 37. Si en un mercado libre un trabajo o una inversión consigue un pago, es porque la gente está dispuesta a pagar por eso y a pagar esa cantidad. El precio no puede bajar porque no se consigue más barato. Es la ley de la oferta y la demanda aplicada al mercado laboral y al mercado de capitales. </UL>
        
        <UL> 38. Luego, como cada empresa vendedora tiene que bajar el precio hasta el mínimo que es aceptable para ella, y pagarle a los trabajadores, proveedores e inversores el mínimo que es aceptable para ellos, se puede explicar el precio final como la sumatoria de todos estos "costos". De esta manera, la suma de remuneraciones de todos los factores determina un piso para el precio final del producto que fabrican. Y en un mercado libre, los precios bajarán hasta encontrar este piso. </UL>

        <UL> 39. Por lo tanto, a causa de esto, podemos decir que este trabajo o esta inversión <b>agrega valor</b> al producto final: gracias a este trabajo o gracias a esta inversión, el precio de venta no sigue bajando. Están "agregando valor" en el sentido de que gracias a su participación en la producción, el precio final tiene un contenido extra. </UL>

        <UL> 40. Por lo tanto, una persona genera valor cuando aporta trabajo o capital por los cuales la sociedad está dispuesta a pagar, y la cantidad recibida en pago es igual al valor agregado que ese factor genera en el producto final. </UL>

        <UL> 41. Este principio aplicado a la remuneración de los factores dice que los trabajadores reciben como salarios lo que los compradores finales están dispuestos a pagar por sus trabajos, y que los capitalistas reciben como ganancias lo que los compradores finales están dispuestos a pagar por sus inversiones. </UL>
        
        <UL> 42. Así, cuando la gente escoge comprar la opción más económica, están escogiendo el proceso de producción que prefieren y las remuneraciones a los factores que prefieren. Aunque haya una empresa intermediando entre el comprador final y los trabajadores, la empresa no se queda con una porción del valor agregado por ellos, ni tampoco los inversores. No hay explotación entre factores. </UL>


        <SUBTITLE> RECAPITULACIÓN </SUBTITLE>

        <UL> 43. Los precios son lo que los compradores están dispuestos a pagar, pero también lo que los vendedores están dispuestos a cobrar. Como consecuencia, los precios están determinados por la interacción de la oferta y la demanda y, como consecuencia, los precios son las sumas de las remuneraciones de los factores que participan en la producción y, como consecuencia, los precios son las sumas de valor agregado por los factores y, como consecuencia, finalmente, cada factor se lleva la parte que produce. </UL>
        
        <UL> 44. Cuando el Estado no interviene los mercados, cada persona gana de acuerdo a lo que le aporta a la sociedad libre y nadie se lleva el valor que produce otro, con la única condición de que se cumplan los contratos. </UL>


        <SUBTITLE> MARGINALISMO </SUBTITLE>

        <UL> 45. Los microeconomistas suelen decir que cuando unos pocos trabajadores son agregados al proceso productivo ellos son muy productivos y, entonces, se contratan más porque contratarlos deja ganancias extraordinarias. Pero, a medida que más trabajadores son contratados, la productividad promedio decrece por cuestiones físicas. </UL>
        
        <UL> 46. Y cuando se ha alcanzado la situación donde contratar a un trabajador más significaría un desembolso de dinero más grande que los nuevos ingresos que causaría el correspondiente aumento de la producción ("producto marginal"), las contrataciones cesan. Así es como los salarios son iguales a la "productividad marginal del trabajo" (el valor de mercado del incremento marginal de la producción). </UL>

        <UL> 47. Los economistas marginalistas (1870-1900) intentaron imponer las funciones de productividad decrecientes para la totalidad de las industrias para lograr que sus esquemas matemáticos de sistemas de ecuaciones pudieran funcionar (esquemas con costos de los factores constantes) en vez de dar indeterminación matemática; es decir, impusieron los costos unitarios crecientes como una realidad física universal en vez de una realidad económica basada en el costo de oportunidad. Y así siguen enseñando la microeconomía al día de hoy. </UL>
        
        <UL> 48. Pero lo importante es: Lo que expresamos hasta acá es cierto en todos los tipos de procesos de producción porque los costos unitarios son siempre crecientes cuando aumenta la producción (salvo ciertos momentos transitorios de economía de escala) porque los factores se hacen más caros. </UL>

        <UL> 49. Y toda remuneración es igual a su producto marginal, aunque esto no significa de por sí que cada factor se lleve el valor que produce (como lo presentan). Son teorías paralelas. </UL>


        <SUBTITLE> SMITH (1776) </SUBTITLE>

        <UL> 50. Finalmente, respecto al comentario generalizado acerca de que Adam Smith predicó la ley del valor-trabajo, copiamos un extracto del capítulo VII del primer libro que representa bien su pensamiento: </UL>

        <IMAGECENTER src={`${rootPath}frontend-src/03/sm1.png`} />

        <IMAGECENTER src={`${rootPath}frontend-src/03/sm2.png`} />

        <UL> 51. Se repite vez tras vez en su obra que el precio es resultante de los valores agregados que producen los factores de producción capital, trabajo y tierra en la relación particular que tiene cada uno con el mercado, que son más o menos estables, y no la cantidad de trabajo que requiere la producción. "Realmente creo que todo lo que los economistas descubrieron ya estaba en Adam Smith", dijo Alfred Marshall. </UL>

        <UL> 52. No está diciendo que los precios sean objetivos (basados en costos) sino que está tomando los elementos más o menos estables que explican una función de oferta más o menos horizontal, súper elástica. </UL>

        <UL> 53. La <i>teoría de la explotación social</i> mediante la contratación laboral pertenece enteramente a David Ricardo y los socialistas que llegaron después. Y se basó en una teoría de los precios errónea, como expusimos. </UL>

    </div>
    )
}