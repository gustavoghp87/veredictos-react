import React, { useEffect } from 'react'
import { CHAPIMAGE, TITLE2, UL, SUBTITLE, SPECIALRIGHT } from '../css/css'
import { data } from '../../chapters'
import { urlbase, isLocalhost } from '../../index'


export const V22 = () => {

    const url = urlbase + data[22].url
    useEffect(() => {window.scrollTo(0, 0); if(!isLocalhost)fetch(url)}, [])

    return (
    <div>

        <CHAPIMAGE src="/frontend-src/25/25.jpg" />

        <TITLE2> {data[22].number}. {data[22].title} </TITLE2>

        <UL> 1. Tenemos ya los nueve postulados de la teoría económica socialista. Dicen que bajo libertad económica y propiedad privada: </UL>

        <SPECIALRIGHT>
            <UL> I - hay explotación económica entre clases sociales porque el valor agregado es producido solamente por los trabajadores pero otros grupos participan a causa de medios institucionales coercitivos (la propiedad privada); </UL>
            <UL> II - hay competición entre trabajadores y capitalistas por el ingreso y el capitalista se vuelve cada vez más fuerte con el tiempo; </UL>
            <UL> III - se generan naturalmente exclusión y desigualdad crecientes que tienen que ser paliadas con empleo público, inversión pública, subsidios y asistencialismo; </UL>
            <UL> IV - se forman ahorro y grandes fortunas que causan desempleo y pobreza y estrangulan la economía; </UL>
            <UL> V - todas las ramas de la economía se van concentrando en unas pocas compañías que abusan de su poder; </UL>
            <UL> VI - los precios son mecanismos de distribución del ingreso que despojan a los más débiles; </UL>
            <UL> VII - se generan rentas no competitivas, que causan clases sociales parasitarias; </UL>
            <UL> VIII - las variables macroeconómicas (o cuentas nacionales) son el resultado de la dirección estatal; </UL>
            <UL> IX - se cae periódicamente en crisis financieras: inflación, pánicos bancarios y cambiarios, ciclos económicos, recesiones, quiebras en cadena; </UL>
        </SPECIALRIGHT>

        <UL> 2. Todo socialista lleva el sello de estas nueve creencias, que siempre aparecen todas juntas. Porque las nueves son resultado de un pensamiento de base: Existe una contradicción insalvable entre el bien común y la libertad económica y el respeto a la propiedad privada. Para alcanzar el bien común, es necesario renunciar a la libertad (de los demás) y a la propiedad privada (de los demás) y ponerlas en manos del Estado socialista como acumulación de poder. Y quien rechace la acumulación de poder y la violación de la propiedad se está oponiendo al bien común y es un egoísta y un opresor. </UL>

        <UL> 3. Los nueve puntos están más o menos presentes en el Manifiesto Comunista de 1848, y encuentran su actualización doctrinaria en la Teoría General de 1936. Por eso, quien cree en alguna de las nueve creencias es marxista, aun cuando prefiera llamarse keynesiano, progresista o socialdemócrata, o solo diga que tiene sentido común y pretenda tener una altísima sensibilidad social. Se reconocen por estas creencias. </UL>

        <UL> 4. Todo es terraplanismo. Los nueve puntos son pura ilusión, pero están en la mente de las personas y, por supuesto, son predicadas por casi todos los economistas. Todo es terraplanismo. Pero el verdadero terraplanismo no lastima a nadie; el socialismo, en cambio, conduce a concentración de poder, pobreza, inequidad, lucha de clases por el ingreso y privilegios estatales, corrupción, dictaduras totalitarias, abolición del ascenso social. </UL>

        <UL> 5. No obstante: </UL>
        <SPECIALRIGHT>
            <UL> I - La teoría de la explotación fue refutada en 1871 mediante la teoría de los precios; la ganancia del capital es un valor generado por él mismo en su relación con el mercado, no por el trabajador despojado; salarios y ganancias suben juntos y bajan juntos, no compiten (capítulos 3 y 5). </UL>
            <UL> II - Trabajadores compiten con trabajadores, y capitalistas compiten con capitalistas; la exclusión social la causan los mismos trabajadores mediante la legislación que impusieron como grupo de presión para ser privilegiados por el Estado, y la concentración empresarial la causan las mismas empresas mediante la legislación que impusieron como grupo de presión para ser privilegiados por el Estado (capítulos 4, 12 y 13). </UL>
            <UL> III - La economía genera cada vez más oportunidades de progreso, reduciendo la desigualdad, excepto cuando el Estado distorsiona los precios y reparte privilegios a los que llegaron primero, a cada uno en función de su poder de presión e influencias (capítulos 6 y 11). </UL>
            <UL> IV - Los ahorros y las grandes fortunas limitan el poder del Estado y son sumamente beneficiosos para la economía y para los salarios en particular (capítulo 8). </UL>
            <UL> V - La tendencia natural de la economía libre es hacia la concentración de la producción en pocas compañías para la optimización del uso de los recursos y la aplicación de tecnología para mejorar el nivel de vida, y estas compañías no pueden abusar de sus posiciones de mercado si no hay leyes que las privilegien (capítulo 9). </UL>
            <UL> VI - Los precios son señales que indican dónde hay que invertir y trabajar más, y dónde menos, y liberados a su suerte van siempre a la baja (excepto los salarios) y hacen que la economía responda a las necesidades y las preferencias de consumo, empleo y progreso. (capítulos 2 y 10). </UL>
            <UL> VII - La renta en sentido clásico no existe, fue un error de teoría económica, y no hay clases parasitarias, excepto funcionarios y políticos que viven de la intervención coercitiva de los mercados (capítulo 13). </UL>
            <UL> VIII - La realidad del humano sobre la tierra es de naturaleza estocástica y sus actividades económicas no son la excepción, de modo que las grandes variables económicas no responden a los planes económicos de la dirección ni a la planificación del Estado sino a la eventualidad de las leyes de la estadística, que condiciona a la política (capítulos 23 y 24). </UL>
            <UL> IX - Las crisis las causa el Estado haciendo macroeconomía y regulando actividades, siempre, en todo lugar (capítulos 7 y 15 a 22). </UL>
        </SPECIALRIGHT>


        <SUBTITLE> CIENCIA ECONÓMICA </SUBTITLE>

        <UL> 6. La gente que odia la libertad de los demás es totalmente permeable a las creencias falsas contrarias a la libertad, especialmente si se disfrazan de ciencia, en esta era donde prevalece la cultura de llevar la camiseta de AMO LA CIENCIA pero al mismo tiempo no hacer ningún esfuerzo por aprender ciencia sino entregarse al argumento que más cómodo resulte. </UL>

        <UL> 7. Porque la ciencia en la actual generación está servida en una mesa accesible a todos como un gran banquete. Pero a muchos les resulta más tentadora la mesa de la comida chatarra de la ignorancia, donde se come en la compañía de los resentidos, de los envidiosos, de los que ambicionan imponerse sobre los demás, despojarlos y someterlos y, además, ser adorados como dioses por los mismos sometidos. </UL>

        <UL> 8. El socialista cree que sabe economía. Es más: está convencido de que sabe economía, que nadie le gana. En su imaginación se cree un organismo superior, alguien pensante en grado supremo, que debería estar al frente de una gran planificación de la sociedad, porque sin él estaríamos perdidos y desprotegidos de la dañina libertad de los demás. </UL>

        <UL> 9. Él quiere ser el guardián de la libertad, quitándonos la libertad, y quiere que le estemos agradecidos y lo aclamemos como salvador. Cualquier teoría económica que vaya en esta dirección, es aceptada sin más. </UL>


        <SUBTITLE> PROGRESO </SUBTITLE>

        <UL> 10. En los países socialistas, la gente trabaja todo el día pero nunca progresa; sus esfuerzos son robados o echados a perder, mientras viajan como ganado en los transportes del Estado y escuchan las estadísticas falsas sobre progreso económico y bienestar social. </UL>

        <UL> 11. Los gobernantes se hacen obscenamente ricos y los escándalos de corrupción estallan como el pan de cada día, mientras adoctrinan a los gritos y culpan de todo alguna minoría malvada pero poderosa como los capitalistas, los judíos, los inmigrantes, los especuladores, la oligarquía, el imperialismo, la prensa, o incluso los comunistas. Muchos vuelcan sus anhelos de progreso hacia la industria del juicio, el grupo de presión, el soborno o el simple robo y la estafa; se crea una sociedad de saqueadores. </UL>

        <UL> 12. Cuando, en cambio, el Estado es el garante de la libertad económica y la propiedad privada ─capitalismo─ en lugar de ponerse al frente del saqueo y la opresión ─socialismo─, la gente trabaja y progresa. Cada uno se lleva lo que produce y por eso cada uno se concentra en su propio progreso en vez de estar mirando con envidia y resentimiento los ingresos de los demás. </UL>

        <UL> 13. Los gobiernos piensan en crecimiento económico, no en distribuir la pobreza equitativamente entre sus siervos de la gleba. La riqueza y la propiedad del capital (que es ahorro puesto a producir) son distribuidas y descentralizadas, de modo que nadie oprime a nadie, y el poder de los gobiernos se ve limitado. </UL>

        <UL> 14. De esta manera, Karl Marx introdujo en la clase de los trabajores la doctrina de los opresores: la intervención del Estado en la economía, que solo puede generar privilegios dañinos a la prosperidad y la libertad de los trabajadores y la gente en general. </UL>

        <UL> 15. El socialismo vendió una cura para una enfermedad que no existía, y llegó a ser el veneno que pretendía curar. </UL>


        <SUBTITLE> CONCENTRACIÓN DE LA RIQUEZA </SUBTITLE>

        <UL> 16. Los socialistas claman contra la concentración de riqueza ─aunque no entienden en qué consiste─ pero la cura que se les ocurre para ese mal que ven es concentrar la riqueza muchísimo más: en las manos de los jerarcas del partido. </UL>

        <UL> 17. También señalan contra una "acumulación originaria" por la cual unas pocas familias se apoderaron injusta e ilegalmente de los principales medios de producción en otros tiempos y que hoy heredan unos pocos. Pero la solución que se les ocurre para ese mal que ven no es rematar esas propiedades "mal habidas" mediante procedimientos legales, para que siga funcionando la economía privada pero en manos "bien habidas", sino confiscar todo el capital para quedárselo ellos y poder esclavizar a la población. </UL>

        <UL> 18. Es que nunca hay una conexión lógica entre las injusticias que señala el socialista y las soluciones que propone. El señalamiento de injusticias (verdaderas o falsas) cumple la única finalidad de presentar al socialista como un sujeto especialmente sensible a las injusticias sociales y especialmente sabio, y convertirlo en caudillo de todos los que sí tienen sensibilidad social. Pero, especialmente, caudillo de todos los resentidos y envidiosos de la sociedad que odian la libertad de los demás. </UL>


        <SUBTITLE> LOS DERECHOS NATURALES </SUBTITLE>

        <UL> 19. Los fundamentos filosóficos del socialismo también están bastante flojos de papeles. La verdadera teoría económica (nacida de Adam Smith) proviene de la filosofía política y se sustenta en ella. </UL>

        <UL> 20. Los filósofos políticos británicos habían estado buscando la verdad acerca de lo que ellos llamaban "derecho natural" en razonamientos abstractos y en análisis minuciosos de la biblia, especialmente en el libro Génesis. En los relatos sobre los patriarcas, pensadores como Hobbes, Locke y Hume decían encontrar los "derechos naturales" a la vida, la libertad y la propiedad privada. </UL>

        <UL> 21. De hecho, las naciones anglosajonas no se hicieron ricas por entender muy bien los principios de la economía sino por respetar la vida, la libertad y la propiedad privada, según principios morales, religiosos y filosóficos. No por exaltar las consecuencias económicas de hacerlo. </UL>

        <UL> 22. Pero los socialistas también dicen basar sus reclamos en "derechos naturales" aunque ampliados: el derecho a la educación, a la vivienda, al ingreso, a la salud, al trabajo... que significa que unos tienen "derecho natural" a que el Estado le quite ingresos y bienes a otros para dárselos a ellos. </UL>

        <UL> 23. Lo curioso es que los socialistas sostienen esta teoría de los "derechos naturales ampliados", al tiempo que son ateos evolucionistas y desprecian a los patriarcas de Génesis. ¿En qué fundamentan sus creencias si no tienen dios alguno, para decir que el humano tiene "derechos" inherentes, por el solo hecho de ser humano, si el humano ha bajado de un árbol del África y se ha creado y perfeccionado a sí mismo? </UL>


        <SUBTITLE> SOCIALISMO Y CIENCIAS POLÍTICAS </SUBTITLE>

        <UL> 24. Eterno problema del socialismo es que promete prosperidad y libertad pero solo causa esclavitud y atraso, hasta el punto de obligar a la gente a bajar hasta la edad del hierro, mientras llenan al Estado de funcionarios y dirigentes cobrando cantidades de dinero que jamás podrían lograr compitiendo en un mercado libre. Mucho menos en un mercado arrasado por el socialismo. </UL>

        <UL> 25. Estos funcionarios y políticos nunca se bajarán del poder por las buenas. Por los privilegios, por la gloria, y por los delitos cometidos durante los años dorados, cuando eran aclamados como salvadores. Así, el socialismo siempre termina en autoritarismo político; es el camino a la servidumbre. </UL>

        <UL> 26. Hay una enorme literatura de ciencias políticas y filosofía política acerca de la importancia del equilibrio de poderes en toda sociedad y dentro del Estado en particular, para evitar que el gobierno se vuelva autoritario y garantizar la vida, la libertad y la propiedad privada de los ciudadanos. </UL>

        <UL> 27. Pero los socialistas pretenden que nada de eso sirve. Si los socialistas son solamente buenos, santos, salvadores del pueblo, representantes perfectos de los oprimidos, sabios y justos, mientras los no socialistas son solamente malos, egoístas, opresores, parásitos, ignorantes sin consciencia de clase, ¿para qué compartir con ellos el poder? </UL>

        <UL> 28. Por eso, los socialistas siempre moralizan el debate político. Para ellos, el debate político es una ametralladora de acusaciones acerca de la maldad de los no socialistas. Lo que se vende de contrabando: nosotros —los socialistas— somos moralmente superiores, por eso debemos ser los gobernantes sin compartir el poder. </UL>
        
        <UL> 29. Pretende reemplazar el equilibrio social de poderes y el equilibrio de poderes dentro del Estado por un equilibrio de poderes dentro del partido único. Pero la lógica del poder es una sola. Léase el discurso de Kruschev de 1956. </UL>

        <UL> 30. Toda empresa privada tiene una única lógica: la ganancia, pero el Estado tiene una lógica de poder. Poner las compañías en las manos del Estado es una garantía de que serán usadas para propósitos políticos, en una palabra, para la supremacía del partido gobernante. La entera economía perseguirá esa meta. </UL>

        <UL> 31. Eric Arthur Blair (George Orwell) llamó al sistema socialista "colectivismo oligárquico", tal como lo expuso en la novela <i>1984</i>. La creencia en una economía colectivista (o sea, estatal) amistosa con el estado de derecho y las libertades políticas y sociales es contraria a toda la ciencia política. </UL>


        <SUBTITLE> LUCHA DE CLASES </SUBTITLE>

        <UL> 32. No hay un enfrentamiento natural de intereses entre las clases que tienen medios de producción y las que no tienen (cuando el Estado no interviene en economía). La única lucha de intereses es la que existe entre los que quieren vivir en libertad y los que quieren oprimir a los demás. Y los socialistas son los que quieren oprimir, como demostramos en todos los capítulos de este sitio. </UL>

        <UL> 33. Pero la propiedad privada no es un privilegio estatal. La propiedad privada existe desde antes de los Estados, y los Estados solo pueden decidir si respetarla, para el progreso de la sociedad, o violarla, para su destrucción. </UL>

        <UL> 34. La lucha de clases es, entonces, un enfrentamiento entre humanos por el control del Estado para hacer al Estado intervenir en economía para conseguir privilegios que perjudiquen al resto. No hay un enfrentamiento natural de intereses entre clases sociales cuando hay libertad. </UL>

    </div>
    )
}