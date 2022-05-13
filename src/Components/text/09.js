import React, { useEffect } from 'react'
import { CHAPIMAGE, TITLE2, UL, SUBTITLE } from '../css/css'
import { data } from '../../chapters'

import { isLocalhost, rootPath, urlbase } from '../App'

export const V09 = () => {

    const url = urlbase + data[9].url
    useEffect(() => {window.scrollTo(0, 0); if(!isLocalhost)fetch(url)}, [url])

    return (
    <>

        <CHAPIMAGE src={`${rootPath}frontend-src/12/12.jpg`} />

        <TITLE2> {data[9].number}. {data[9].title} </TITLE2>

        <UL> 1. David Ricardo publicó su <i>Principles of Political Economy and Taxation</i> in 1817. En general, su trabajo significó un retroceso científico. Pero sus razonamientos acerca del comercio internacional hicieron una gran contribución a la teoría económica. </UL>

        <UL> 2. Antes de Adam Smith, la idea predominante era que la riqueza de las naciones estaba formada por dinero (oro y plata). Se creía que regular y secuestrar el mercado del dinero era el medio para lograr la riqueza de toda nación. Por eso, había limitaciones y prohibiciones para exportar oro y plata, incluso aunque se quisiera importar materias primas para producir objetos de exportación. </UL>

        <UL> 3. Buscando metales, los Españoles rastrillaron América y consiguieron mucho pero, a más largo plazo, no les fue bien: la inyección de dinero de metal perjudicó a la industria española porque causó inflación y el aumento de importaciones. En cambio, en el siglo XVIII estaban prosperando los países donde había crecido la industria. El pensamiento económico mercantilista debía ajustarse a la realidad económica. </UL>

        <UL> 4. Pero la riqueza de una nación —en un sentido internacional— consiste en ganar el favor de otras naciones, y para lograrlo no hay nada mejor que producir artículos y servicios de alta calidad y con alta productividad. No se trata de conseguir metales. </UL>

        <UL> 5. Por eso, Smith razonó que la mejor manera que tiene una nación de enriquecerse era dar de baja a toda la legislación existente que buscaba la acumulación de oro y plata dentro de las fronteras nacionales. La libertad de comercio haría que prosperaran las exportaciones y la sustitución de importaciones. Y la acumulación de oro y plata serían consecuencias necesarias de esa properidad, no sus medios. </UL>


        <SUBTITLE> RICARDO CONTRA SMITH </SUBTITLE>

        <UL> 6. Acerca de Ricardo, su mejora consistió en razonar que la libertad de comercio entre naciones era (como en Smith) la mejor forma de lograr la riqueza de las naciones pero que opera de una forma diferente: no porque cada país se ocuparía en producir y exportar lo que podía producir de forma más barata que los demás, y en importar lo que no, sino en producir y exportar lo que dejara más ganancias, que no es lo mismo. </UL>

        <UL> 7. En un ejemplo doméstico: Si yo tengo la posibilidad de ahorrarme $10 por cocinar mi propio alimento en vez de comprarlo cocinado, el tipo de razonamiento Smith me haría proceder. Pero el tipo de razonamiento Ricardo me haría, mas bien, usar el tiempo que costaría cocinar en hacer horas extra en mi profesión, donde ganaría $15 en vez de $10 por el mismo tiempo. Así me enriquecería más rápido y, además, me haría mejor en mi profesión. Y las tiendas de comida elaborada, por su parte, se harían mejores y más productivas. </UL>

        <UL> 8. De la misma manera, el sistema de precios hace que un país con abundancia de mano de obra termine exportando manufacturas a otro país que podría producirlas más baratas por estar más avanzado en tecnología, solo que este otro país tiene todos sus recursos destinados a la producción de servicios de tecnología y no le conviene ocuparse en manufacturas. </UL>

        <UL> 9. Concretamente, lo que el segundo país va a notar es que los productos importados resultan caros pero que para empezar a producirlos hay que reorientar capitales y empleados que están produciendo mucho más valor haciendo otras cosas. Es decir, los precios indican qué conviene producir y qué conviene importar, porque existe el costo de oportunidad de dejar de producir una cosa para producir otra. </UL>

        <UL> 10. Los ejemplos de Ricardo revelan un nulo entendimiento sobre precios (determinación por costos), así que lo explicamos nosotros: Cuando aumentan las importaciones, se da cierta depreciación de la moneda nacional (o caída de precios) que estimula nuevas exportaciones. De modo que las importaciones y las exportaciones crecen a la par, y el comercio exterior crece junto con el mercado interno. </UL>

        <UL> 11. Así, el sistema de precios hace que cada país se especialice en lograr el máximo favor de las otras naciones, por iniciativa de sus empresarios que persiguen la ganancia. Los recursos de cada nación son asignados a la economía de forma tal que el país se enriquece —en sentido internacional— al mejor ritmo posible. </UL>

        <UL> 12. No sucede por una decisión gubernamental. Es el sistema de precios el que da la señal y el incentivo para proceder así. Se entiende que la diferencia entre Smith y Ricardo no es acerca de "política económica" sino en el entendimiento sobre cómo funcionan los mercados libres. </UL>

        <UL> 13. Se entiende que a ningún país le conviene ahorrar divisas reprimiendo las importaciones sino que debe liberar todo el comercio exterior de trabas, aranceles y administración de los tipos de cambio. </UL>


        <SUBTITLE> DIVISIÓN DEL TRABAJO </SUBTITLE>

        <UL> 14. La especialización (también llamada "división del trabajo") siempre conduce a aumentos de la productividad y a mejoras en los productos y servicios porque cada uno se ocupa de un único asunto. </UL>

        <UL> 15. 2300 años antes de Ricardo, Platón señalaba las ventajas de la especialización social del trabajo, cuando, en cada país, cada uno se ocupa de un oficio diferente y compra todo lo demás. </UL>

        <UL> 16. Henri Pirenne explicó, también, que la sociedad europea se derrumbó hacia el siglo VII cuando los musulmanes los expulsaron del mar Mediterráneo, rompiendo todo su comercio internacional y obligándolos a vivir de la agricultura casi exclusivamente. </UL>

        <UL> 17. Adam Smith habló, por su parte, de las ventajas de la especialización de la producción dentro del mismo proceso productivo, permitida por la contratación laboral y la economía de escala, y del comercio exterior. Y Ricardo mejoró el entendimiento de esto último. </UL>


        <SUBTITLE> COMERCIO EXTERIOR SOCIALISTA </SUBTITLE>

        <UL> 18. El libre comercio hace que el comercio internacional crezca al mayor ritmo posible. Pero el gran crecimiento de las importaciones asusta a los cerebros socialistas, que aun no superan la etapa mercantilista del mundo, y se oponen. </UL>

        <UL> 19. Los socialistas del tercer mundo tienen una obsesión con lo que ellos llaman "industrialización". Si los mercantilistas y los fisiócratas antes de Adam Smith creían que el origen de la riqueza de las naciones estaba en los metales y en los productos primarios (respectivamente), los socialistas tardíos creen que está en la producción metalmecánica estandarizada. "Así fue como se hicieron ricos los países que se hicieron ricos antes de la Primera Guerra Mundial, así que (razonan los socialistas) esa tiene que ser la clave". </UL>

        <UL> 20. El socialismo ha caído en un neomercantilismo respecto a divisas y en un neofisiocracismo respecto a la producción industrial. Y para intentar lograr esta industrialización y acumulación de reservas de divisas, hechan mano de las riquezas generadas por los otros sectores productivos, que saquean, arruinando la economía. </UL>

        <UL> 21. Así, los socialistas pretenden enriquecer al tercer mundo mediante una "antiespecialización" de la economía, cerrando las fronteras total o parcialmente y haciendo una gran redistribución del ingreso a favor de las industrias metalmecánicas. </UL>

        <UL> 22. Proliferan expresiones como sustitución de importaciones, tipo de cambio competitivo, créditos subsidiados, diversificación de la economíal, proteccionismo. </UL>


        <SUBTITLE> PRIVILEGIOS E INTERESES </SUBTITLE>

        <UL> 23. "Proteccionismo" es una expresión incorrecta. No se protege, se privilegia a un grupo; se detiene o lentifica el progreso de todos para que una parte se beneficie. Más bien conviene hablar de "privilegismo". </UL>

        <UL> 24. Los intereses creados en torno a la intervención del Estado para la generación de privilegios (opuestos al crecimiento del comercio exterior) llegan a ser grupos de presión que atentan contra el bien común. Luego, la economía no puede ser liberada fácilmente por la oposición que ellos presentan. </UL>

        <UL> 25. Y, segundo, está el problema del orden a la hora de desmantelar los privilegios porque quitarle a unos sin quitarle a otros puede resultar en empeoramiento general (como suele pasar cuando gobiernos se presentan como liberales pero solo liberalizan el mercado laboral). </UL>

        <UL> 26. Como ejemplo: En 1846, el Parlamento del Reino Unido abolió las leyes que prohibían o limitaban la importación de granos de otros países para privilegiar a los productores nacionales. La comida se hizo más barata (que era lo que el país industrializado más necesitaba) pero fue un desastre económico y humanitario para Irlanda. Porque no es fácil liberar la economía luego de décadas de intervención nefasta del Estado. </UL>


        <SUBTITLE> COMERCIO EXTERIOR Y DESARROLLO </SUBTITLE>

        <UL> 27. Si la consigna fuese encontrar el denominador común de todo proceso de desarrollo económico, donde un país pobre y atrasado logró la prosperidad, la libertad de comercio exterior tiene que ser el defendido. La libertad económica interna y el respeto a la propiedad privada por el Estado son muy importantes pero no tanto como la libertad de comercio exterior en particular. </UL>

        <UL> 28. Países muy distintos lograron el desarrollo pasando unas tres décadas exportando y ahorrando. Gran Bretaña lo logró mientras financiaba guerras, Argentina exportando grano, Corea con acuerdos entre grupos económicos concentrados y el Estado, China bajo una dictadura comunista con mano de obra barata, Japón con un liberalismo total con trabajo calificado, y demás. </UL>

        <UL> 29. Se contempla que el comercio internacional es lo que "tracciona la demanda" (en términos keynesianos), no el mercado interno. La idea de generar demanda interna a través de "política económica" solo consiste en quitarle a unos para darle a otros y, como tal, mata la inversión. </UL>

        <UL> 30. La doctrina de apostar por el mercado interno es una postura socialista para armar una estructura de poder dictatorial donde el Estado se asocia con algunos grupos económicos locales para expoliar a la población y convertirla en una colonia económica de explotación exclusiva para sus dirigentes políticos y empresarios asociados. </UL>

    </>
    )
}