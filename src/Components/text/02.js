import React, { useEffect } from 'react'
import { CHAPIMAGE, TITLE2, UL, SUBTITLE, IMAGECENTER, SPECIALRIGHT } from '../css/css'
import { data } from '../../chapters'

import { isLocalhost, rootPath, urlbase } from '../App'

export const V02 = () => {

    const url = urlbase + data[2].url
    useEffect(() => {window.scrollTo(0, 0); if(!isLocalhost)fetch(url)}, [url])

    return (
    <div>

        <CHAPIMAGE src={`${rootPath}frontend-src/05/05.jpg`} />

        <TITLE2> {data[2].number}. {data[2].title} </TITLE2>

        <UL> 1. En 1867, Karl Marx publicó <i>Das Kapital. Kritik der politischen Ökonomie.</i>, primer tomo. Pero el tercer tomo vio la luz en 1894... 27 años más tarde y 11 años después de la muerte de Marx. ¿Por qué nunca publicó el tercer tomo? Es la historia del fracaso intelectual de la <i>teoría de la explotación</i>. </UL>


        <SUBTITLE> SALARIOS Y GANANCIAS </SUBTITLE>

        <UL> 2. Los bienes y servicios son valuados en los mercados proporcionalmente a la valoración social que tienen y a su escasez. Cuando los sindicatos logran aumentos salariales que de otro modo no iban a darse, lo que parece suceder es que una parte de las ganancias se vuelve salarios. Pero es una ilusión. </UL>

        <UL> 3. En realidad, lo que sucede es que ahora los capitalistas demandan menos trabajadores que antes porque algunos negocios y algunas líneas de producción ya no son rentables y algunos trabajadores son expulsados de los mercados laborales o nunca son contratados. Desde el punto de vista de los capitalistas, los trabajadores ahora son más escasos y, como sabemos, la escasez aumenta los precios. </UL>

        <UL> 4. Las ganancias no se vuelven salarios sino que las ganancias decrecen por el aumento de los costos laborales. Y, al mismo tiempo, los salarios aumentan por el aumento coercitivo de la escasez de trabajadores. La única redistribución del ingreso es desde los desempleados hacia los empleados. </UL>

        <UL> 5. Sigue siendo cierto que el salario es igual al producto marginal del trabajo, solo que se hacen menos contrataciones de trabajadores para que el producto marginal sea más alto, para poder pagar el salario impuesto. </UL>


        <SUBTITLE> INTERESES DEL CAPITAL Y EL TRABAJO </SUBTITLE>

        <UL> 6. Trabajadores y capitalistas venden cosas distintas en mercados distintos: trabajo y capital. Las leyes que explican esos dos mercados son distintas también. Así como en la naturaleza los seres vivos compiten más duramente con los que son similares a ellos (en cuanto a alimentos, espacio, refugios y apariamiento), y no con los que son muy diferentes, capitalistas compiten con capitalistas, y trabajadores compiten con trabajadores. </UL>

        <UL> 7. Es fácil confundir esto porque las ganancias pueden crecer si los salarios caen por aumento de la población, y los salarios pueden crecer si los trabajadores consiguen aumentos por la fuerza. Pero la competencia entre capitalistas y trabajadores es solo una ilusión, como la razón revela. Y la evidencia empírica dice que ganancias y salarios crecen juntos y decrecen juntos. </UL>

        <IMAGECENTER src={`${rootPath}frontend-src/04/04.jpg`} />

        <UL> 8. Ya es siglo XXI. Cualquiera sabe que, en las naciones donde los Estados nunca intervinieron en economía para intentar beneficiar a los trabajadores buscando la "justicia social", el capital creció mucho más que en los otros países, y ese capital engrandecido compite consigo mismo por los trabajadores, que, por eso, ganan mucho más. </UL>

        <UL> 9. La "redistribución del ingreso" através de salarios y condiciones laborales fijados por el Estado conduce a crecimiento de capital más lento, a aumentos de salarios más lentos y a exclusión social. Cuando la "redistribución del ingreso" es grande, todo el progreso económico se detiene, la gente se ataca unos a otros y se destruye la estructura colaborativa que es el mercado. Se crea una sociedad de saqueadores. </UL>

        <UL> 10. A pesar de esto, los "socialistas científicos" dicen desde 1848 que trabajadores y capitalistas tienen "intereses irreconciliables": si los empleadores y los empleados negociaran salarios y condiciones laborales libremente, los resultados serían malos para la sociedad. Para ellos, la libertad es mala; la concentración de poder es buena. </UL>


        <SUBTITLE> EL CAPITAL DE MARX: PRIMER TOMO </SUBTITLE>

        <UL> 11. Decíamos, Marx publicó el primer tomo en 1867, pero el segundo y el tercero los publicaron bastante después de su muerte porque abandonó la obra. ¿Qué paso? </UL>

        <UL> 12. Esto es lo que dice el primer tomo (<i>Der Produktionsprocess des Kapitals</i>): Hay capitalistas que tienen fábricas, máquinas, herramientas, materias primas y dinero, y contratan trabajadores para producir. Si los precios de todas las cosas son determinados exclusivamente por la cantidad de trabajo socialmente necesario que requieren, el valor agregado del producto final es explicado exclusivamente por el trabajo obrero. </UL>
        
        <UL> 13. Por lo tanto, la ganancia del capital es "una parte de los salarios" que no es pagada. Por causa de que los capitalistas son los propietarios de los medios de producción, ellos se llevan una parte del valor producido por los asalariados (llamada <i>plusvalía</i>) por hacer absolutamente nada. Esta es la <i>teoría de la explotación social</i>. </UL>

        <UL> 14. Pero todo el planteo está mal. Lo que define al capitalista es poner ahorros a producir, y nadie hace eso gratis. Hay un mercado de capitales donde los ahorros son ofrecidos y demandados de acuerdo a una tasa de ganancias que sube y baja para hacer coincidir los planes de financiamiento. </UL>

        <IMAGECENTER src="frontend-src/05/saving.png" />

        <UL> 15. Y esta remuneración necesaria al capital aparece en el precio como valor agregado, que es independiente del valor agregado por los trabajadores. Así, es el mercado quien decide remunerar al capital con ganancias. La ganancia es un valor que produce el capital en su relación con el mercado, no un valor agregado por los empleados que sea apropiado por los propietarios después. </UL>


        <SUBTITLE> EL CAPITAL DE MARX: TERCER TOMO </SUBTITLE>

        <UL> 16. Pero los capitales van de una industria a otra y de una empresa a otra buscando tasa de ganancia. Cuando lo hacen, los precios son alterados: bajan donde los capitales desembarcan para aumentar la producción, y suben en las otras por la escasez de capital. Y es aquí mismo donde revienta la teoría de los precios basada en la cantidad de trabajo, que es la base de la <i>teoría de la explotación</i> del primer tomo. </UL>

        <UL> 17. Para poder desplegar la <i>teoría de la explotación</i>, Marx tuvo que tomar las fábricas de a una y no considerar la movilidad del capital: todo el capital de la empresa proviene de su dueño, a quien no le importan las tasas de ganancia de las otras actividades ni la suya propia. De alguna manera mágica, todo precio coincide con la cantidad de trabajo que se necesita en la producción, y los capitales no se mueven buscando tasa de ganancias. </UL>

        <UL> 18. Pero en el tercer tomo (<i>Der Gesamtprozess der Kapitalistischen Produktion</i>), Marx intentó responder a esta cuestión: Qué pasa cuando en alguna industria la relación entre ganancia anual y capital es más alta que en otra. </UL>

        <UL> 19. Su respuesta: Algunos capitalistas cambiarán sus actividades para producir y vender en la actividad más lucrativa, donde los precios bajarán por aumento de la producción, hasta que la tasa de ganancia se nivele con las otras. Y cuando hacen esto, los precios en las otras industrias aumentarán por la escasez de capital, a pesar de que las condiciones laborales en ellas no han cambiado. </UL>
        
        <UL> 20. Entonces, los precios no son explicados solamente por la cantidad de trabajo socialmente necesario para la producción sino por alguna ley de nivelación de las ganancias capitalistas también. Esta es la respuesta de Marx, publicada 11 años después de su muerte. </UL>
        
        <UL> 21. La movilidad del capital (que elige actividades y empresas de acuerdo a rendimientos esperados) derriba la teoría del valor-trabajo y la <i>teoría de la explotación</i>. Por eso el tercer tomo de <i>El Capital</i> es enemigo del primero. </UL>


        <SUBTITLE> PLUSVALÍA Y SUPUESTOS </SUBTITLE>

        <UL> 22. <i>Plusvalía</i> es un concepto inválido porque Marx, en el tomo 1, explica alguna clase de sistema capitalista donde los capitalistas no prestan atención a la tasa ganancias/capital en el tiempo. De hecho, no esperan ninguna remuneración para el capital; solamente "roban" usando el capital como arma. </UL>

        <UL> 23. ¿Bajo qué condiciones es "cierta" la teoría de la <i>plusvalía</i>? Necesitaríamos: </UL>

        <SPECIALRIGHT> PRIMERO: alguna autoridad superior (el Estado) que impusiera una equivalencia entre precios y cantidad de trabajo. </SPECIALRIGHT>

        <SPECIALRIGHT> SEGUNDO: la negación o imposibilidad de los capitalistas de invertir más en las ramas y empresas con tasas de ganancia mayores. </SPECIALRIGHT>

        <UL> 24. O, en su defecto, una única condición: que la movilidad del capital fuera tal que cada capital se acomodara en cada empresa y en cada negocio, no según las ganancias esperadas, sino según la necesidad de los precios de subir o bajar para acomodarse a la ley del valor-trabajo. </UL>
        
        <UL> 25. Si se cumplieran estas condiciones, habría una correlación cuantitativa exacta entre ganancias capitalistas y cantidad de trabajo usada en la producción. La ganancia capitalista seguiría sin ser un valor agregado por los trabajadores pero habría una coincidencia cuantitativa que permitiría meter la <i>teoría de la explotación</i> de contrabando. </UL>


        <SUBTITLE> PROPIEDAD PRIVADA </SUBTITLE>

        <UL> 26. El problema (como el siglo XX le respondió a los marxistas) es que una remuneración para el capital es necesaria para producir bienes y servicios porque nadie ahorra y arriesga sus ahorros gratis en una sociedad libre. Y ese crecimiento del capital es beneficioso para los que solo trabajan. </UL>
        
        <UL> 27. Pero si el Estado hiciese ese proceso de capitalización por la fuerza (planificando la economía), la gente pagaría más por causa de la baja productividad de los monopolios y por estar la economía entera al servicio de la acumulación de poder. La gran fantasía de ahorrar para la sociedad las ganancias del capital por medio de estatizar la propiedad del capital resulta solo en frustración. </UL>

        <UL> 28. Esto es lo que pasó en casi 40 países que cayeron bajo el socialismo y es caricaturizado en el cuento <i>Rebelión en la Granja / La Granja de los Animales</i> (George Orwell, 1945): Los animales confiscan el sistema productivo humano creyendo que así podrán trabajar menos y consumir más, gracias a ahorrarse la parte que los humanos se llevan. Pero el sistema productivo se viene abajo y los animales terminan trabajando más y consumiendo menos. Y, en su debilidad, acaban esclavizados a la dictadura de los cerdos. </UL>    


        <SUBTITLE> LEY DE LA TENDENCIA DECRECIENTE DE LA TASA DE GANANCIA </SUBTITLE>

        <UL> 29. Pero el protagonista del tercer tomo no es la colisión de la <i>teoría de la plusvalía</i> del primer tomo (que intenta disimular) sino la llamada ley de la tendencia decreciente de la tasa de ganancia. </UL>

        <UL> 30. Según el tercer tomo, las empresas tienen la obligación de capitalizarse más y más para no sucumbir ante la competencia. Pero, a su vez, las ganancias no pueden crecer tan rápidamente: Si el origen de las ganancias es la explotación de los trabajadores, las ganancias crecerán más lentamente que la capitalización a medida que las industrias se vayan haciendo más intensivas en capital (por el reemplazo del trabajo humano con máquinas). </UL>

        <UL> 31. Es decir, tanto las ganancias como el capital aumentan, pero el capital tiene que aumentar siempre más rápidamente como un fenómeno de mercado, desplomando las tasas de ganancia. Este problema se expresaría en los mercados como la imposibilidad de sostener los precios de venta, y no lograr precios que den ganancias aceptables, dada la enorme capitalización que tiene la empresa. </UL>
        
        <UL> 32. Así, las tasas de ganancia bajarán hasta cero y el crecimiento del capital se detendrá, desatando una revolución social por desempleo y bajos salarios. Por esta secuencia, el capitalismo se destruirá a sí mismo, abriendo camino al sistema socialista, pero dejándole como herencia una enorme capitalización. </UL>

        <UL> 33. Pero si la ganancia es un valor agregado por el capital, este problema no existe. La capacidad para hacer ganancias proporcionales aceptables depende de la capacidad de los capitales de servir a los mercados, no de la intensidad con la que usen trabajo. Entonces, los precios no tienen por qué caer cuando las empresas se hacen más intensivas en capital. Y, de hecho, suele pasar lo contrario. </UL>

        <UL> 34. Afortunadamente, el crecimiento del capital no necesita justificarse frente a nadie, y nunca se detuvo. </UL>


        <SUBTITLE> 1871-PRESENTE </SUBTITLE>

        <UL> 35. Carl Menger refutó el primer tomo de <i>Das Kapital</i> en 1871, y Marx por sí mismo descubrió en su tercer tomo los errores del primero, al llevar la <i>teoría de la explotación</i> hasta sus últimas consecuencias (si bien no sabemos qué ocurrió primero). En 1873 llegó la teoría del equilibrio general de Walras, y en los años siguientes se desplegó la microeconomía. </UL>
        
        <UL> 36. Estas son las razones del abandono de Marx de su obra, junto con el enorme <i>bull market</i> capitalista que comenzó en aquella década. Y ese fue su colapso y su bancarrota intelectual. También fue un fracaso para Engels, que era quien lo mantenía para que se dedicara solamente a escribir. Nunca lo reconocieron. </UL>

        <UL> 37. Todos los socialistas tienen la <i>teoría de la explotación</i> en la boca. No pueden admitir que ganan poco porque contribuyen poco a la sociedad o porque viven en países socialistas donde el Estado destruye todo. Pero quieren creer que, en realidad, ellos producen mucho, solo que alguien más les está robando, alguna minoría de la cual el Estado socialista podría protegerlos. El fracaso científico de la <i>teoría de la explotación</i> no les preocupa, y lo desconocen. </UL>

    </div>
    )
}