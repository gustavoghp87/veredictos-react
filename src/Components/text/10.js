import React, { useEffect } from 'react'
import { CHAPIMAGE, TITLE2, UL, SUBTITLE } from '../css/css'
import { data } from '../../chapters'

import { isLocalhost, rootPath, urlbase } from '../App'

export const V10 = () => {

    const url = urlbase + data[10].url
    useEffect(() => {window.scrollTo(0, 0); if(!isLocalhost)fetch(url)}, [url])

    return (
    <>

        <CHAPIMAGE src={`${rootPath}frontend-src/13/13.jpg`} />

        <TITLE2> {data[10].number}. {data[10].title} </TITLE2>

        <UL> 1. Desde el comienzo de la teoría económica se vio el protagonismo de lo que antes se llamaba "renta". Todos los clásicos decían que hay una retribución por trabajar (proporcionada a la pericia del trabajo) y una retribución por invertir (cierto porcentaje anual sobre el capital arriesgado, proporcionado a los riesgos asumidos). </UL>

        <UL> 2. Pero, además, el mercado le da cierta retribución a algunos por ser propietarios de algo, algo que es necesario para la producción pero que no fue el resultado de la inversión y el trabajo: tierras y minas para la era clásica de la teoría económica; petróleo, gas, derechos de propiedad intelectual, derechos para emitir dinero, espacio construibles dentro de centros urbanos, etcétera. </UL>

        <UL> 3. Nótese que la escasez de algunos medios es natural pero la de otros es causada artificialmente por el Estado. </UL>

        <UL> 4. Es decir, no llamamos "renta" en sentido clásico a lo que se cobra de alquiler por un rodado ordinario (que sí es el resultado del capital y el trabajo) sino al ingreso por usar un capital que se originó en la naturaleza o en la coerción estatal. La renta de un inmueble, en cambio, se puede dividir en la parte que retribuye la inversión y el trabajo (ganancia capitalista), y la parte que paga los "metros cuadrados", escasos de acuerdo a la escasez que causa el ayuntamiento con sus limitaciones a la construcción ("renta", en sentido clásico). </UL>


        <SUBTITLE> RENTA CLÁSICA Y MARXISMO </SUBTITLE>

        <UL> 5. La visión clásica de las cosas ("los rentistas no aportan nada a la producción, sino que sus ingresos son un residuo no competitivo del precio de mercado") dejó todo servido al socialismo: Si todas estas "rentas" son remuneraciones por ser propietario sin aportar nada a la producción, solo sirven para mantener a una clase social de parásitos, que viven de la actividad económica de los demás. </UL>

        <UL> 6. El socialismo marxista anunció así su vocación de apoderarse de toda "renta" para el Estado y para el partido comunista dictatorial en ejercicio: "Expropiación de la propiedad de la tierra y empleo de la renta de la tierra para los gastos del Estado" (<i>Manifiesto Comunista</i>, 1848). </UL>

        <UL> 7. El conocimiento del contexto y el entendimiento del estado de la teoría económica para 1848 explican que la voluntad comunista de confiscar las tierras para apoderarse de las "rentas" agropecuarias no se limita a la cuestión de la tierra. Se hablaba solo de la tierra porque solo la tierra tenía un rol determinante en la producción en aquel tiempo (de los "capitales" listados en el punto 2). </UL>

        <UL> 8. Pero luego de 1848 llegaron los otros tipos, con especial importancia en el petróleo. No obstante, el privilegio de emitir dinero es mucho más importante que cualquiera de los otros. ¿Cuál fue la postura del socialismo respecto a todas estas problemáticas posteriores? Que todo tiene que ser confiscado para que el Estado socialista pueda tener esas "rentas". </UL>


        <SUBTITLE> RENTA Y COMPETENCIA </SUBTITLE>

        <UL> 9. Lo que define a estos factores de producción que causan "renta" es que son útiles a la producción sin ser el resultado del ahorro humano (tienen demanda), y que no pueden ser multiplicados mediante trabajo y capital (tienen escasez de oferta). Como dijimos, que no sean fruto del esfuerzo humano hace que muchos se cuestionen que las rentas que generan tengan que enriquecer a sus propietarios, que no aportarían nada. </UL>

        <UL> 10. Pero el fenómeno de mercado es este: Aunque un capital no sea el resultado de la inversión ni del trabajo, su precio de mercado es alrededor de 20 veces los ingresos netos que (se espera) cause en un año, para que pueda dar una tasa de ganancia cercana al 5% anual (por ponerle números). </UL>

        <UL> 11. Luego, ningún propietario aporta estos factores para actividades económicas si no les pagan ese 5%, ni aceptaría venderlos por menos de esas 20 veces. De modo que estos "capitales" llegan a participar en economía de forma idéntica a la de los capitales normales, y sus remuneraciones llegan a ser partes activas del valor agregado de las cosas (de acuerdo a la teoría general del valor agregado del capítulo 3). </UL>

        <UL> 12. Si aportan los factores, tienen que pagarles. El precio lo pagan los compradores últimos. Y si no los aportan, no hay producción. Así, la "renta" es valor agregado de mercado competitivo y causa el menor de los precios posibles. </UL>

        <UL> 13. Se preguntaba Ricardo cuáles eran las tierras que determinaban los precios de los productos agropecuarios: las de más fertilidad o las de menos. La respuesta es: todas, según un esquema de equilibrio general. </UL>
                                            

        <SUBTITLE> EXPROPIACIÓN, CONFISCACIÓN </SUBTITLE>

        <UL> 14. Si el Estado pagara el precio de mercado de uno de estos capitales naturales, tendría que pagar el precio completo, para solo obtener el mismo rendimiento que dejan los otros capitales (los que sí son ahorros surgidos del trabajo y la inversión). De forma que la "expropiación" del marxismo no es expropiación sino confiscación. El marxismo nunca va a pagar el precio de mercado de los capitales que dan "renta". </UL>

        <UL> 15. Este es el secreto de la "expropiación" del Manifiesto Comunista de 1848: La "expropiación" de las tierras y los medios de transporte no se limitaba a las tierras y los transportes sino a todo capital que no sea resultado del ahorro humano; y "expropiación" en realidad significa confiscación. </UL>

        <UL> 16. ¿Qué pasa cuando el Estado socialista confisca para apoderarse de la "renta" clásica y promete una baja de precios? </UL>


        <SUBTITLE> COLECTIVIZACIONES Y GENOCIDIOS </SUBTITLE>

        <UL> 17. Los dos genocidios más grandes de la historia de la humanidad los hicieron los regímenes comunistas de la Unión Soviética (en tiempos de Stalin) y la China (en tiempos de Mao Tse Tung), siguiendo las directivas del Manifiesto Comunista. </UL>

        <UL> 18. El razonamiento indicaba que grandes explotaciones agrícolas estatales iban a producir mucho más alimento y materias primas que muchos campesinos explotando las mismas tierras por separado, mientras el Estado socialista se apoderaba de la "renta" de la tierra. Por eso, procedieron a confiscar ("expropiar") las tierras (parcelas pequeñas) para obligar a la gente a trabajar para el Estado. </UL>

        <UL> 19. La producción cayó tanto que los campesinos murieron de hambre por millones. Es lo que en la literatura se conoce como "colectivizaciones forzosas", resultados de la ignorancia criminal y el odio del comunista contra los campesinos. </UL>

        <UL> 20. Nuevamente: Que un capital no haya llegado a existir mediante el trabajo humano y el capital humano no implica que no produzca valor. Sí produce valor y su confiscación solo arruina la producción. </UL>


        <SUBTITLE> PETRÓLEO Y MINERALES </SUBTITLE>

        <UL> 21. La lógica de que la "renta" era una fuente mágica de ingresos llevó a los marxistas del mundo a estatizar el petróleo y las minas de los países, y también a crear empresas estatales de extracción y refinamiento. </UL>

        <UL> 22. La "renta" petrolera causó que las economías de estos países reasignaran todos sus recursos para vender bienes y servicios a los Estados, el único cliente y gran manipulador del tipo de cambio. Cuando los precios internacionales caen, estos países son arrasados. Así, el Estado socialista usa la "renta" petrolera para sabotear todo desarrollo económico. </UL>

        <UL> 23. La gran ruina de Venezuela comenzó cuando estatizó la industria petrolera en 1973 como respuesta al gran aumento de ventas y de precio causado por el embargo de los países islámicos a occidente (motivado por la guerra de Yom Kipur). Toda la economía se hizo dependiente del gasto público, el consumo y las importaciones, se generalizó la corrupción para venderle algo al Estado, y todo se terminó de desmoronar en la década siguiente cuando bajó el precio del crudo. Repetirían los errores en las décadas siguientes. </UL>

        <UL> 24. Y a los Estados socialistas petroleros islámicos no les va mejor. Son el eterno subdesarrollo. </UL>


        <SUBTITLE> MEDIOS DE TRANSPORTE </SUBTITLE>

        <UL> 25. Nuevamente, la idea de que los medios de transporte generan "renta" por ser "monopólicos" llevó a los marxistas a confiscarlos, como manda el sexto mandamiento del Manifiesto Comunista. ¿Con qué resultado? Terminaron usando los ingresos para otros gastos, desinvirtiendo, y finalmente atrasando las tarifas para contener el aumento del costo de vida que causan con sus políticas desastrosas. </UL>

        <UL> 26. Como se dijo en el capítulo 9, los servicios únicos de transporte pueden tener tarifas y servicios de competencia perfecta si los gobiernos llaman a licitación pública. </UL>


        <SUBTITLE> CONCLUSIÓN </SUBTITLE>

        <UL> 27. Lo único que diferencia a un capital industrial de un capital agrícola o minero o de licencia es el origen de su existencia. No hay diferencias económicas en cuanto a determinación de precios o valor agregado de los productos o servicios en cuyos procesos productivos intervienen, ni hay diferencias en la determinación de sus propios precios de mercado. </UL>

        <UL> 28. Lo único que hace el origen del capital (si es resultado de la inversión y el trabajo o si, por el contrario, surgió de la naturaleza o de leyes del Estado o de coerción no estatal) es encender los debates y abrir el apetito socialista por quedarse con las cosas de los demás. </UL>

        <UL> 29. Estos "capitales" no son una fuente mágica de ingresos. Apoyan la producción y generan su propio valor agregado para beneficio del bien común. </UL>

        <UL> 30. Cuando el Estado socialista se apodera de estos "capitales", arruina la economía. </UL>

    </>
    )
}