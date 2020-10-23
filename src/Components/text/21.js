import React, { useEffect } from 'react'
import { CHAPIMAGE, TITLE2, UL, SUBTITLE } from '../css/css'
import { data } from '../../chapters'
import { urlbase, isLocalhost } from '../../index'


export const V21 = () => {

    const url = urlbase + data[21].url
    useEffect(() => {window.scrollTo(0, 0); if(!isLocalhost)fetch(url)}, [url])

    return (
    <div>

        <CHAPIMAGE src="/frontend-src/24/24.jpg" />

        <TITLE2> {data[21].number}. {data[21].title} </TITLE2>

        <UL> 1. Se podría decir que, en definitiva, hay dos grandes escuelas de pensamiento económico: los que creen que la economía humana es, esencialmente, un sistema caótico y, por tanto, gobernado por las leyes estadísticas del universo, y los que creen que es, esencialmente, un sistema determinístico. </UL>

        <UL> 2. Esta división analítica bien podría ser una buena aproximación para explicar el misterio: por qué los operadores de mercados bursátiles se hacen ricos pero los profesores universitarios de economía no llegan a fin de mes, están endeudados y jamás atinan en sus predicciones económicas. </UL>


        <SUBTITLE> SISTEMAS CAÓTICOS </SUBTITLE>

        <UL> 3. Se habla de sistema caótico cuando las variables a ser determinadas dependen de incontables variables, donde unas empujan hacia arriba y otras hacia abajo y no es posible saber si prevalecerán estas o aquellas. Y es más: surgen o pueden surgir nuevas fuerzas de manera impredecible y de intensidad impredecible. Y las que están ahora podrían esfumarse de un momento a otro. </UL>

        <UL> 4. Así, en un sistema caótico es absurdo pensar que se puede acertar el futuro cercano o lejano de las variables determinadas mediante la observación y el procesamiento de las variables determinísticas en juego. No es posible procesar tantas variables, ni es posible conmensurarlas ni ponderarlas correctamente. Y es completamente imposible prever con certeza la aparición de las variables estocásticas o medirlas. </UL>

        <UL> 5. La determinación de precios del capítulo 2 sirve para un entendimiento analítico de los precios y para explicar el valor agregado y la generación de rentas en una economía de mercado. No sirve para predecir precios. </UL>

        <UL> 6. Pero no es voluntad de plantear una contradicción. La física (que influenció muchísimo a la economía desde 1870) no plantea una contradicción entre el determinismo y el caos. </UL>

        <UL> 7. Otra analogía: todo meteorólogo estudia climatología o geofísica. Necesita hacerlo. Pero sabe perfectamente que no podrá predecir el tiempo atmosférico observando y procesando las variables determinísticas (humedad, vientos, presión, nubosidad, etc.) sino que deberá contentarse con hacer estimaciones de carácter probabilístico y cortoplacistas basándose (en parte) en la estructura probabilística de la región. </UL>


        <SUBTITLE> ECONOMÍA </SUBTITLE>

        <UL> 8. Hay, entonces, dos tipos de estructuras mentales en el mundo de la economía: la que considera una naturaleza caótica-estocástica y la determinista. Los socialistas son siempre deterministas sin excepción, pero los libertales usualmente también lo son. </UL>

        <UL> 9. Ser determinista en economía implica creer que la economía es el resultado de los planes económicos de los gobiernos. Hay una adhesión a la dirección estatal de la economía (de acuerdo al Manifiesto Comunista de 1848 y a la Teoría General de 1936) o, a veces, a la planificación estatal de la economía. La causalidad es más confusa: ¿Una persona quiere dirigir la economía porque cree que es determinística, o cree que la economía es determinística porque quiere dirigirla? </UL>

        <UL> 10. En cambio, el que considera a la economía un sistema caótico jamás intentaría dirigirla. El estocástico es necesariamente liberal. Cree que los históricos de precios contienen toda la información relevante. Y, por eso, no mira los balances de las compañías ni se sobreinforma. </UL>


        <SUBTITLE> PRORRATEO Y GRÁFICOS </SUBTITLE>

        <UL> 11. Hay, aparte, otra clasificación, que puede ser un poco más confusa. Los deterministas acostumbran incursionar en el terreno de las estadísticas. Y, cuando lo hacen, usan la técnica del prorrateo, que significa inferir el futuro bajo la premisa de que todo continuará pasando tal cual está pasando. </UL>

        <UL> 12. Así, si un precio o PIB creció 8% promedio durante los últimos cinco años, los prorrateadores dan por hecho que seguirá creciendo 8% promedio, salvo que hayan motivos de actualidad para ponerlo en duda. La técnica de estos deterministas es combinar el prorrateo con el "análisis de fundamentos" (información de actualidad). </UL>

        <UL> 13. Sin embargo, los que tienen instrucción en los sistemas caóticos saben que las variables estocásticas dibujan gráficos de acuerdo a patrones. Es lo opuesto al prorrateo. Lo que viene subiendo, eventualmente baja, corrige, porque sí, porque llegó la hora de hacerlo. Y el mismo gráfico puede revelar si el actual crecimiento tiene futuro o si es solo una subida que precede a la fundición, etcétera. </UL>

        <UL> 14. La teoría Elliot Waves es la explicación más aceptada acerca de las dinámicas de los precios. Basada enteramente en la observación, apenas da lugar al debate sobre las razones de esos movimientos característicos. </UL>

        <UL> 15. En cambio, los deterministas (que son socialistas o, también, liberales sin formación) son siempre prorrateadores. Desconocen y descreen de los patrones estadísticos y, por eso, la realidad siempre los deja mal parados en sus predicciones. </UL>


        <SUBTITLE> LO PROBABLE IMPROBABLE</SUBTITLE>

        <UL> 16. Quizás la idea más difícil de aceptar en todo esto sea que las leyes de funcionamiento del universo puedan predecir el desenlace de una dinámica que se está desplegando... cuando su propio desenlace será de naturaleza aleatoria. La idea es esta: Lo que va a ocurrir para que se cumpla la dinámica típica es improbable que ocurra, pero es altamente probable que ocurra algo improbable que lo haga. </UL>

        <UL> 17. En una analogía, es altamente improbable ganar una lotería pero es altamente probable que alguien la gane. De esa manera, si el gráfico predice la caída de un precio, se entiende que es altamente probable que suceda algo que lo haga bajar. Pero todas las posibilidades particulares que lo hagan caer tienen, en sí, bajas probabilidades de ocurrir y son, en sí, impredecibles. El sobreinformado no lo verá; porque no está en las noticias, está en el gráfico. </UL>

        <UL> 18. Por eso decimos que "los fundamentos llegan después". No se puede predecir el futuro analizando los fundamentos porque los fundamentos son resultado de la necesidad probabilística. Es la necesidad probabilística lo que puede predecir el futuro en un sistema caótico, estocástico. </UL>


        <SUBTITLE> LA GLORIA DEL MUNDO </SUBTITLE>

        <UL> 19. ¿Cuál es el origen psicológico del determinista prorrateador? Usualmente, hay un motivante en la expectativa de recibir la gloria y el reconocimiento académico y general. Está siempre presente en estas personas el sueño de ser el gran intelectual que logra predecir el futuro económico por ser el dueño de la mente más informada y que mejor procesa la información. </UL>

        <UL> 20. Por otra parte y en el opuesto, está el sujeto que solo quiere entender la economía. Eventualmente, quiere hacer dinero comprando barato y vendiendo caro. No le importa ser reconocido. No quiere dar conferencias ni ser entrevistado para el público masivo, ni quiere vender muchos libros. No busca un premio Nobel o ser invitado por universidades para dar charlas y recibir diplomas simbólicos. </UL>

        <UL> 21. Para destacar como determinista-prorrateador, se necesita de largos estudios académicos y hacer muchísimas horas de presencia en medios, tal vez escribir libros, siempre escribir artículos; se tiene que dar a conocer. El estocástico, por el contrario, tiene que aprender los patrones básicos que los precios suelen dibujar en los gráficos y hacerles seguimiendo constante. </UL>

        <UL> 22. Es la simpleza de la formación del estocástico lo que causa el rechazo de los deterministas. El determinista busca la gloria académica y el reconocimiento general. Por eso se adhiere a lo que es falso y milita para convencer a los demás de que es verdadero lo que es falso. </UL>


        <SUBTITLE> DETERMINISTA Y POLÍTICO </SUBTITLE>

        <UL> 23. Llega el determinista, así, a ser un perfecto aliado de los políticos socialistas. El determinista (que es, principalmente, un economista salido de una universidad) convence al público masivo de que la economía es un sistema determinístico (o sea, que responde a los planes económicos de los gobiernos), y el político socialista vende dirección o planificación de la economía a ese público masivo (o sea, socialismo) para la grandeza del Estado y el sometimiento de sus súbditos. </UL>

        <UL> 24. La arrogancia de los buscadores de gloria no les permite admitir este principio básico <i>sine qua non</i>, los pone a arriesgar todo tipo de predicciones que serán contundentemente refutadas por la realidad, y los hace aliados excelentes de la diregencia política socialista, codiciosa de convertir a los ciudadanos en insectos bajo su control, con los economistas a la cabeza y los periodistas económicos por detrás. </UL>

    </div>
    )
}