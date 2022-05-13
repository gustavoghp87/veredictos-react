import React, { useEffect } from 'react'
import { CHAPIMAGE, TITLE2, UL, SUBTITLE, SPECIALRIGHT } from '../css/css'
import { data } from '../../chapters'
import { urlbase, isLocalhost } from '../../index'


export const V03 = () => {

    const url = urlbase + data[3].url
    useEffect(() => {window.scrollTo(0, 0); if(!isLocalhost)fetch(url)}, [url])

    return (
    <>

        <CHAPIMAGE src="/veredictos-react/frontend-src/06/06.jpg" />

        <TITLE2> {data[3].number}. {data[3].title} </TITLE2>

        <UL> 1. En febrero de 1848 vio la luz el <i>Manifest der Kommunistischen Partei</i>. En este libro-panfleto se encuentra el principal argumento de todo el socialismo ─el socialismo de izquierda, como el comunismo y la socialdemocracia, y el socialismo de derecha, como el <i>nationalsozialismus</i> y el fascismo─: que el capitalismo hace crecer la producción exponencialmente pero, al mismo tiempo, destruye los empleos y reduce los salarios. </UL>

        <UL> 2. De esto siguen dos posturas dentro del socialismo: la revolucionaria y la progresista. Pero hay, aparte, dos versiones sobre las consecuencias de esta supuesta desigualdad: que detiene o no detiene el crecimiento. </UL>
        
        
        <SUBTITLE> MANIFIESTO COMUNISTA </SUBTITLE>
            
        <UL> 3. Para Marx y Engels, el sistema natural de libertad económica contiene en sí mismo una contradicción insalvable entre producción y distribución: cuando las empresas automatizan procesos para reemplazar a los trabajadores, la producción crece mucho pero las ventas crecen poco. Entonces, las ganancias tienen que caer. </UL>

        <UL> 4. Como el capital se alimenta de ganancias para su propia preservación, tasas decrecientes de ganancia deberían conducir a estancamiento económico y llevar a la revolución social de obreros que imponen el socialismo. </UL>
        
        <UL> 5. De esta manera, el capitalismo debe ser entendido como una etapa en el desarrollo de la historia humana, destinada a cumplir una función (que es desplegar las fuerzas productivas e intensificar la lucha de clases) para, entonces, dar lugar a otra etapa superior (la dictadura del partido comunista). </UL>

        <UL> 6. Pero, como aclaración, esta teoría de la autodestrucción del capitalismo es diferente de la expuesta en el tercer tomo de <i>El Capital</i> (basada en la ley del valor-trabajo) y es 46 años más vieja, aunque llegue a la misma conclusión. </UL>


        <SUBTITLE> PROGRESISMO </SUBTITLE>

        <UL> 7. Muchos socialistas no creen en la violencia explícita sino en la violencia institucional. Para ellos, el Estado democrático debe intervenir la economía para apoderarse de parte de las ganancias del capital: </UL>

        <SPECIALRIGHT> + forzando incrementos salariales; </SPECIALRIGHT>

        <SPECIALRIGHT> + cobrando impuestos "progresivos"; </SPECIALRIGHT>

        <SPECIALRIGHT> + dándole dinero a quienes tienen poco; </SPECIALRIGHT>

        <SPECIALRIGHT> + generando empleo estatal directo o indirecto, sin nunca detenerse; </SPECIALRIGHT>

        <SPECIALRIGHT> + aumentando año a año el gasto del Estado en obras públicas. </SPECIALRIGHT>

        <UL> 8. Ellos piensan que sin una redistribución del ingreso como política de Estado, la inequidad se hará demasiado grande e injusta y la economía se estancará ─causando violencia y hambre─, de acuerdo a lo expresado en el Manifiesto del Partido Comunista de 1848. Solo que no quieren tomar el poder por la fuerza. </UL>

        <UL> 9. El sistema tendría un problema intrínseco con la distribución de la producción. En términos keynesianos: un problema de demanda agregada. Y, por eso, el Estado debería aumentar gradualmente sus empleados y su gasto redistributivo a medida que el capitalismo se estrangula a sí mismo, hasta que (posiblemente) se haya apoderado de la entera economía. </UL>

        <UL> 10. Por tanto y por esta vía, los socialistas creen que la redistribución del ingreso tiene que causar auges económicos ─salvando, incluso, a los adinerados a quienes se confisca─. </UL>

        <UL> 11. Esto (someramente) es el marxismo no revolucionario o socialdemocracia o progresismo, una forma de socialismo con cierto gradualismo en comparación con el revolucionario, y es el vector principal que guía a los socialistas. </UL>


        <SUBTITLE> VERSIÓN LIVIANA </SUBTITLE>

        <UL> 12. Pero muchos socialistas no adhieren a esta teoría tan sepultada por la realidad. Piensan, en cambio, que la inequidad creciente que causaría el desarrollo capitalista no va a traer más problemas macroeconómicos que desempleo y pobreza en una franja de la sociedad, mientras unos pocos se hacen cada vez más ricos. </UL>
        
        <UL> 13. Estos creen que es necesario sacrificar un poco de crecimiento económico para que no haya tanta desigualdad, porque el sistema podría seguir adelante sin los rezagados. </UL>

        <UL> 14. Es una versión liviana de la teoría del crecimiento y la desigualdad. Aunque puede sorprenderte oír a los mismos socialistas defender ambas versiones de la teoría al mismo tiempo: que hay que reducir la desigualdad sacrificando crecimiento, y que hay que reducir la desigualdad para impulsar el crecimiento. </UL>


        <SUBTITLE> RECAPITULACIÓN </SUBTITLE>

        <UL> 15. Hay, así, dos versiones sobre las consecuencias de la desigualdad, pero un único punto de partida: el crecimiento viene acompañado de desigualdad. Y, en todos los casos, se entiende al Estado como un árbitro que puede reducir los supuestos efectos negativos del crecimiento económico. </UL>

        <UL> 16. A pesar de la fuerte y enorme evidencia de que los países que no hicieron redistribución del ingreso y cuyos Estados no participan en más del 10% de la renta nacional son mucho más prósperos y equitativos y nunca tuvieron un estrangulamiento de la economía, los socialistas insisten. </UL>


        <SUBTITLE> CRECIMIENTO Y OPORTUNIDADES </SUBTITLE>

        <UL> 17. Dijimos en el capítulo 2 que capitalistas y trabajadores no compiten por el ingreso porque cada uno toma la parte de valor que produce. Pero ciertamente compiten en este otro sentido: cuando las empresas toman capitales para automatizar las tareas que hacen ellos. </UL>

        <UL> 18. Es necesario separar 2 procesos simultáneos: el crecimiento del capital y el reemplazo de trabajadores por máquinas. Se determinó que el crecimiento del capital (que es ahorro puesto a producir) crea empleos y aumenta salarios. Por tanto, hay dos procesos que conducen en direcciones opuestas. ¿Cuál gana? </UL>

        <UL> 19. Antes que nada, es necesario también separar los empleos entre los que pueden ─en cierta época─ ser reemplazados por máquinas y los que no. Los que no, reciben los beneficios del crecimiento del capital y reciben los beneficios de las caídas de precios que la maquinización causa. </UL>

        <UL> 20. Finalmente, está el caso de los empleos que pueden ser reemplazados. Mientras la introducción de tecnologías en los procesos productivos significa una contracción en la demanda de trabajo mecánico, el crecimiento del capital significa una expansión. Cuando la productividad de las máquinas es significativamente mayor, los empleos son destruídos y los trabajadores necesitan encontrar otros, unos que las máquinas no puedan reemplazar con eficiencia. Esos empleos más calificados ─digamos─ tienen mejores remuneraciones y permiten recibir los beneficios de la maquinización. Esto podría ser un gran problema si el mismo sistema que los dejó sin empleo no creara mejores oportunidades que las que destruyó, pero lo hace. </UL>


        <SUBTITLE> CAPITAL </SUBTITLE>

        <UL> 21. Cuando una empresa introduce máquinas en los procesos productivos para reducir los costos unitarios, los precios de los productos finales caen y deviene una gran abundancia de artículos. La sociedad como un todo se vuelve más rica a causa de esto, y una sociedad más ricas siempre tiene más oportunidades de progreso; no falla. La riqueza incrementada de los beneficiarios directos de esta maquinización significa mayores oportunidades para otros: mayor demanda de trabajo, abundancia de productos y precios bajos. </UL>

        <UL> 22. Para graficarlo: Si la entera economía se redujera a una única empresa que emplea a todos los empleados del país y que vende toda su producción a ellos mismos, se hace obvio que reemplazando a esos trabajadores con máquinas la empresa se quedará sin vender. Si bien esta forma de plantearlo representaría una forma extremadamente veloz de maquinización, es solo el comienzo de la historia. Los dueños son ahora más ricos en mercaderías y es cosa de tiempo para que encuentren la manera en que los desempleados les sean útiles o que ellos mismos lo hagan. Los precios subirán y bajarán hasta que todos estén plenamente trabajando, ganando más que antes. </UL>

        <UL> 23. El crecimiento natural del capital de una sociedad causa salarios altos en actividades que no pueden ser reemplazadas por máquinas. Además, hay motivación empresarial para la formación de los empleados y así incrementar la oferta de los recursos escasos. Y, por otra parte, las industrias más mecanizadas van expulsando a los trabajadores que ya no les sirven, cuyos intereses están en tomar empleos calificados. Si hay respeto a la propiedad privada, cada pieza encajará en su lugar. </UL>

        <UL> 24. Entonces, la libertad económica con descentralización de la propiedad de los capitales conduce a los trabajadores a trabajar en empleos que las máquinas no pueden hacer tan bien como ellos. El sistema está en constante movimiento; es dinámico, y la situación de la clase trabajadora mejora con el crecimiento de los capitales y la introducción de nueva tecnología en los procesos productivos. </UL>

        <UL> 25. Para que las oportunidades crezcan siempre, la demanda de capital siempre debe estar creciendo. Esto sucede cuando se forman nuevos negocios, se crean nuevos productos, hay nuevos clientes y se adquieren nuevas habilidades laborales. Y todo esto es ciertamente lo que ocurre cuando crece la población y cuando la gente se esfuerza por mejorar su situación. </UL>

        <UL> 26. La maquinización le da impulso a la formación de nuevos capitales ─creando empleo y aumentando salarios─, no la detiene; y multiplica las oportunidades de progreso, no las reduce. El capitalismo genera más oportunidades que las que destruye; esa es la dinámica que ha seguido el mundo desde 1848, excepto en los países donde el Estado todo lo destruye. </UL>


        <SUBTITLE> ORÍGENES </SUBTITLE>

        <UL> 27. Mucha gente no está de acuerdo o no sabe que puede mejorar sus condiciones de vida si eligiesen bien su empleo. Usualmente, ven el crecimiento económico de su país con recelo. No saben o no están de acuerdo con que trabajar significa ganarse el favor voluntario de otras personas y, mas bien, prefieren los empleos de coerción estatal donde los otros están obligados a pagarles. </UL>

        <UL> 28. Está en la estructura mental de muchos la necesidad de sentir que no se están ganando la vida sirviendo a los demás sino todo lo contrario: que los demás les dan dinero porque están obligados a hacerlo. Es un principio de sometimiento, que solo se logra en asociación con el Estado o desde dentro del Estado. Esos grupos constituyen la base socialista de toda nación, aunque hablen muy mal del socialismo de bandera roja y pretendan un estilo bien oligárquico de comportamiento. </UL>

        <UL> 29. La redistribución del ingreso por el Estado no es necesaria para evitar el estancamiento económico ni la exclusión; el estancamiento económico y la exclusión son causados por el Estado. De esta forma, el marxismo es la cura para una enfermedad que no existía, y llegó a ser la enfermedad que pretende curar. </UL>

    </>
    )
}