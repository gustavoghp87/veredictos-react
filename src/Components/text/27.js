import React, { useEffect } from 'react'
import { CHAPIMAGE, TITLE2, UL } from '../css/css'
import { data } from '../../chapters'
import { urlbase, isLocalhost } from '../../index'


export const V27 = () => {

    const url = urlbase + data[1].url
    useEffect(() => {window.scrollTo(0, 0); if(!isLocalhost)fetch(url)}, [])

    return (
    <div>

        <CHAPIMAGE src="/frontend-src/27/27.jpg" />

        <TITLE2> XXVII. NUEVA GENERACIÓN DE CRIPTOMONEDAS </TITLE2>

        <UL> 1. Difícilmente alguien vivo recuerde los tiempos anteriores al dinero estatal, cuando las monedas valían por el valor de sus metales: plata y oro. Y tal vez sea por eso que las ideas que tienen las personas acerca del dinero son siempre de naturaleza coercitiva. Es una realidad que se deja entrever en la definición más aceptada de dinero. </UL>

        <UL> 2. Se acepta comúnmente que dinero es un bien que cumple 3 requisitos: </UL>

        <SPECIALRIGHT>
            <UL> (i) es un medio de pago generalmente aceptado, o ampliamente aceptado; </UL>
            <UL> (ii) es unidad de medida para hacer cálculo económico, es decir, mantiene su valor en el tiempo; </UL>
            <UL> (iii) es reserva de valor, en el sentido de que permite ahorrar. </UL>
        </SPECIALRIGHT>

        <UL> 3. Si estamos ante un problema o no, que lo juzgue el lector. Pero la única manera de lograr las 3 metas a la vez es mediante la coerción estatal, que significa un Estado que no se limite a su función racional de garantizar la libertad económica, la propiedad privada y el cumplimiento de los contratos sino que también tiene que regular la cantidad de crédito, los impuestos, el gasto y hasta, tal vez, intervenir el mercado cambiario. Y es que si la economía crece y demanda más dinero, el Estado debe crearlo para evitar una deflación, causando una redistribución de valor a su favor y en contra de los que ya tienen dinero. Y cuando la economía se contrae y demanda menos dinero, el Estado debe retirar el excedente para evitar una inflación contrayendo el crédito, aumentando los impuestos o bajando las prestaciones, etcétera. Es decir que los Estados les quitan  </UL>

        <UL> 4. El principio es más abarcador: La gente trabaja e invierte para conseguir dinero pero, mientras el trabajo y las inversiones y los riesgos son privados, el dinero que se obtiene no es privado, es del Estado. </UL>

        <UL> 5. Mas bien, <b>el dinero es un medio de pago ampliamente aceptado que tiene la particularidad de ajustar solo por cantidad</b>. Los bienes económicos están sujetos a constantes cambios en la oferta y la demanda, y como resultado tienen dos variables de ajuste: la cantidad que se comercia y el precio. Hay bienes que solo ajustan por precio porque no se pueden producir más, son únicos e irrepetibles, pero lo común es que todos los bienes ajusten por precio y cantidad a la vez. Ahora bien, lo que se espera del dinero es que solo ajuste por cantidad, manteniendo su valor en el tiempo. </UL>

        <UL> 6. No es función del dinero ser "reserva de valor". Para que una forma de dinero sea reserva de valor, se necesita un Estado interviniendo y causando daño en la economía, socializando pérdidas, apoderándose de ganancias, y, en definitiva, la estabilidad de la moneda se paga cara por otro lado. </UL>

        <UL> 7. Se desprende que la única forma de dinero que cumpla satisfactoriamente sus funciones elementales de ser un bien privado y al mismo tiempo solo ajustar por cantidad es una donde a la hora de hacerse expansión monetaria (para evitar una deflación) se distribuya la emisión proporcionalmente a la tenencia de cada uno, y a la hora de hacerse contracción monetaria (para evitar una inflación) se quite dinero a los que ya tienen, a cada uno en proporción a lo que tiene... algo que solo se puede lograr por software. </UL>

        <UL> 7. Esta manera de ajustar por cantidad es idéntica —a efectos prácticos— a la que ajusta solo por precio, que es la de bitcoin. Cuando la moneda es más valorada por el mercado, no aumenta de valor sino que se expande en cantidad, y cuando pierde demanda su cantidad también se retrae; el propietario de dinero resulta indiferente al mecanismo de ajuste, siempre que se respete su propiedad. En otras palabras, le da lo mismo perder un 9% de valor por caída de precio de 9% (a cantidad constante, como en bitcoin) que por caída en la tenencia de 9% (a precio constante). </UL>

        <UL> 8. La idea de que el dinero debe ser "reserva de valor" es contraria a la libertad, en el sentido de que nadie escogería esta forma de dinero en un mercado libre, simplemente porque implica una socialización de costos que sale cara. En cambio, en un mercado libre, una moneda tiene valor y lo conserva de acuerdo a la valoración que haga de ella el mercado y, por tanto, de acuerdo a la prestación que pueda hacer. Una moneda es útil y valorada por el mercado de acuerdo a parámetros como cuán aceptada es como medio de pago, a cuánto ascienden sus costos de almacenamiento, cómo son sus riesgos de robo, cuánto cuestan las transferencias, cuán útil es para evadir al Estado socialista, y demás, pero pierde valor cuando se innova una nueva moneda con mejores características de este tipo. En un mercado libre, no hay un Estado pendiente de sostener el valor de la moneda por medios coercitivos. </UL>

        <UL> 9. Para poder ajustar por cantidad de la manera correcta —donde "manera correcta" significa lograr un precio constante en el tiempo—, el software necesita incorporar dos datos del mundo exterior a cada momento: su paridad con alguna moneda estatal preestablecida de acuerdo a casas de cambio y la tasa de desvalorización de esa moneda, o "inflación". La criptomoneda tiene que ganar valor gradualmente en proporción inversa a la desvalorización de la moneda con la que se compara, por ejemplo: Si la paridad es con el euro y el euro se deprecia 2% al año, partiendo de una paridad 1 a 1 luego de un año la criptomoneda deberá valer 1,02 euros. De esa manera se mantiene constante el poder de compra general de la criptomoneda mientras el euro se deprecia para servir a los intereses de los Estados. </UL>

        <UL> 10. Pero la tasa de depreciación de una moneda estatal no es su inflación porque inflación es el aumento del costo de cierto combo de productos y servicios que los funcionarios del Estado consideran representativo. En cambio, la depreciación general de una moneda se mide así: Se toma el producto interior nominal de la región donde la moneda estatal se usa y se lo divide por el producto interior a precios del año anterior. </UL>

        <UL> 11. Cuando una moneda digital regula su cantidad a cada momento para que su precio de mercado sea gradualmente creciente en una paridad con una moneda estatal —en proporción a la desvalorización que esta moneda estatal sufre—, logra su meta de ser un bien que solo ajusta por cantidad. A simple vista, que una moneda sea unidad de medida porque mantiene su valor en el tiempo y que sea reserva de valor parecen ser la misma cosa, o dos maneras distintas de decir lo mismo. Pero si no es reserva de valor porque el software puede arrebatar cantidades a cualquiera en cualquier momento para salvar el valor, ya no son la misma cosa; no es reserva de valor, es propiedad privada, y por eso recibe demanda y gana mercado. Es una forma de dinero donde hay dos elementos que permanecen estáticos: la proporción que cada uno tiene de la base monetaria total y el poder de compra de cada unidad absoluta. </UL>

        <UL> 12. Pero, resuelto el problema de la emisión, pierde sentido el mecanismo bitcoin de asociar la emisión al pago de recompensas para los colaboradores del sistema. Bitcoin encarece a propósito el mantenimiento de su sistema para poder hacer expansión monetaria, causando el sinsentido de pagar grandes sumas por algo que la tecnología puede hacer en un instante de tiempo, en milisegundos, usando un ordenador de hace 10 años o más. </UL>

        <UL> 13. ¿Y quién paga los costos de mantenimiento y transacción de una criptomoneda que hace emisión monetaria "depositando" nuevas monedas a los propietarios en proporción a la cantidad que cada uno tiene cuando aumenta la demanda? Costos de mantenimiento no tiene, y costos de transferencia los paga quien hace transferencias, un importe por cada transferencia. Y, siendo tan despreciable el costo de montar una REST API, calcular un hash y emitirlo al resto de la red, se entiende que para ser colaborador del sistema y tener rentabilidad hay que colaborar con miles de transacciones por minuto. </UL>

        <UL> 14. Un sistema que no socializa los costos de las transacciones sino que cada uno paga por las transacciones que hace y que limita los costos al estado de la tecnología y las telecomunicaciones en vez de encarecerlos tiene que ganar mercado y hacer retroceder a las monedas estatales. </UL>

        <UL> 15. La inteligencia artificial tiene que hacer pronto su aparición en el mercado de dinero, y todo el mundo se dará por enterado. </UL>

    </div>
    )
}