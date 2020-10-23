import React, { useEffect } from 'react'
import { CHAPIMAGE, TITLE2, UL, SUBTITLE } from '../css/css'
import { data } from '../../chapters'
import { urlbase, isLocalhost } from '../../index'


export const V07 = () => {

    const url = urlbase + data[7].url
    useEffect(() => {window.scrollTo(0, 0); if(!isLocalhost)fetch(url)}, [url])

    return (
    <div>

        <CHAPIMAGE src="/frontend-src/10/10.jpg" />

        <TITLE2> {data[7].number}. {data[7].title} </TITLE2>

        <UL> 1. Probablemente ningún concepto teórico tiene tanta burla y desprecio de los socialistas como la mano invisible de Adam Smith, que es solo una metáfora para hablar del sistema de precios y sus resultados. </UL>

        <UL> 2. En mercados libres, los precios son señales que le dicen a la gente cómo conviene proceder para hacer valor agregado: a quién comprar, a quién vender, dónde, cuánto, cómo producir, con qué materiales, a quiénes contratar, dónde ahorrar, dónde invertir... Toda decisión económica es tomada a través del sistema de precios de acuerdo a las preferencias y las necesidades de cada uno. </UL>

        <UL> 3. Cuando los precios son libres, millones de personas trabajan coordinadamente como si existiese un gran planificador sobre ellos, asegurándose de que todo funcione de la mejor manera para todos; que cada uno logre sus objetivos y, al mismo tiempo, colabore con el resto de la sociedad. </UL>

        <UL> 4. Y esta especie de mano invisible trabaja todo el día, todos los días, sin importarle la burla y el desprecio de los socialistas, gente resentida con una disonancia enorme entre la posición económica que tienen y la que están convencidos que deberían tener. </UL>


        <SUBTITLE> PRECIOS INTERVENIDOS </SUBTITLE>

        <UL> 5. Los socialistas, en cambio, creen que los precios son mecanismos de distribución del ingreso que reflejan relaciones de poder, de modo que intentan intervenirlos para cambiar la distribución del ingreso ─que ellos juzgan injusta e incluso mala para la economía─. </UL>

        <UL> 6. ¿Con qué resultados? Si los precios son señales que indican qué producir, la reducción coercitiva de un precio debe conducir a una caída en la producción y un crecimiento en las cantidades demandadas: escasez, desabastecimiento. Y el crecimiento coercitivo de un precio (como el salario) causa disminución en las cantidades demandadas y, por eso, achica el mercado. </UL>

        <UL> 7. Así, intervenir los precios no es una buena idea; hace más escaso y caro lo que pretenten que se haga más abundante y barato. </UL>

        <UL> 8. La forma de bajar los precios y subir los salarios es dejarlos en libartad. Primero, porque el precio de mercado libre es el de máxima producción. Y, segundo, porque si hay libertad y respeto a la propiedad privada, llegarán mejoras en la productividad que bajarán los precios y saturarán de productos el mercado. </UL>

        <UL> 9. Pero cuando hablamos de los salarios, en cambio, conviene dejarlos libres porque, primero, a salarios libres se da el máximo de contrataciones. Y, segundo, porque aumentarán con el crecimiento de la economía, porque ninguna población crece tan rápidamente como un mercado libre. No falla. </UL>


        <SUBTITLE> PRECIOS Y SOCIALISMO</SUBTITLE>

        <UL> 10. El socialismo cree que un precio es alto (de acuerdo a lo que juzga que es un precio alto) porque el vendedor tiene poder de mercado y lo usa para explotar a los consumidores. Pero la realidad es exactamente la inversa: No es el poder lo que da precio alto sino el precio alto lo que da poder, y atentar contra los precios daña los intereses de tanto vendedores como compradores. </UL>

        <UL> 11. Sin embargo, poner precios máximos o mínimos tiene mucho sentido sectorial cuando es posible separar, por un lado, a quienes venderán en el nuevo mercado reducido y, por el otro, a los que operarán en el mercado paralelo desregulado. Así se atenta contra el bien común. </UL>

        <UL> 12. Es para esto que sindicatos y cámaras empresariales operan porque el socialismo es la doctrina de privilegiar a quienes tienen poder de negociación extraeconómico mediante la intervención del Estado. El Estado asume, así, un rol de dirección o planificación de la economía para poder privileriar a los grupos de presión con los roles destacados del esquema planificado. </UL>


        <SUBTITLE> TEORÍA DEL DERRAME </SUBTITLE>

        <UL> 13. ¿Hay una teoría del "derrame" en Adam Smith y en el liberalismo? Ciertamente, pero no en el sentido de quienes se burlan. La expresión "derrame" no significa que una redistribución del ingreso a favor de grandes compañías ejecutada por el Estado vaya a lograr el bien común. Parece estúpido aclararlo pero es lo que hay detrás de algunos discursos. </UL>

        <UL> 14. "Derrame" significa que la libertad económica y el respeto a la propiedad privada conducen al bien común, de manera que el progreso que hace una persona o una empresa resulta en beneficios para toda la sociedad. </UL>

        <UL> 15. Y no es una idea alocada, ya que, en una economía libre, la riqueza se logra generando valor agregado, y valor agregado significa lograr el favor voluntario de los otros. </UL>


        <SUBTITLE> INVERSIÓN Y PROPIEDAD PRIVADA </SUBTITLE>

        <UL> 16. ¿Cuál es la diferencia entre vender en un mercado libre y vender en un mercado solamente porque el Estado fuerza a los ciudadanos a comprar en él, o los fuerza a comprarle particularmente a una empresa? Que tu ingreso depende de la voluntad de muchas personas, que son más estables, en vez de depender de la voluntad de los políticos, que son usualmente más inestables. </UL>

        <UL> 17. Entonces, la diferencia es la inversión. Las inversiones no dependen de las ventas actuales sino de las expectativas de ventas futuras y, por eso, las economías libres tienen el máximo de inversión concebible. </UL>

        <UL> 18. Una economía tiene una buena parte dedicada a la producción de bienes consumo, otra a la producción de bienes de exportación y otra de producción de bienes de inversión. Cuanto más grande sea la industria de bienes de capital, más altos los salarios en el presente y la productividad futura. </UL>

        <UL> 19. Una economía coercitiva dirigida por el Estado, en cambio, no tiene estas ventajas; nunca crece y su pueblo nunca progresa. </UL>

        <UL> 20. De esta manera, la gran conclusión de la teoría económica del siglo XVIII ─el liberalismo clásico─ fue que la libertad económica y los bajos impuestos son la clave. En una palabra, el Estado como garante de la propiedad privada y el cumplimiento de los contratos, de acuerdo a una constitución escrita y consensuada, a diferencia de las actuales constituciones que ponen al Estado como el primer violador de la propiedad de sus súbditos. </UL>

        <UL> 21. Más allá de Adam Smith, las grandes reformas promovidas en la Europa de las monarquías absolutistas y en las revoluciones del continente americano pasaban por esto. La gran dicotomía que existía es la misma que existe ahora: usar al Estado como el garante de la propiedad privada y la libertad económica para el progreso continuo de la sociedad toda, o usar al Estado como un saqueador que reparte privilegios en función del poder del grupo de presión para el atraso y el enfrentamiento social, bajo un discurso "progresista" del socialismo. </UL>

        <UL> 22. El socialismo no es una doctrina que provenga del pueblo, de los trabajadores o de los pobres sino de intelectuales arrogantes que creían y creen que pueden dirigir y planificar la vida de los demás mejor que ellos mismos. Pero es ejecutado por políticos, empresarios y sindicalistas que han encontrado su negocio en la economía coercitiva a través del poder público, en una simbiosis con el Estado. </UL>


        <SUBTITLE> CIERRE </SUBTITLE>

        <UL> 23. Los mercados libres son conducidos por el sistema de precios, que funciona como una mano invisible que asigna los recursos de la mejor manera posible; es decir, mejor de lo que lo haría cualquier Estado dirigista o planificador. Cualquier alternativa significa la violación de la propiedad y la libertad de los demás, que ataca de dos maneras: mala asignación de recursos en el presente que causa menos producción e ingresos, y menos inversión en el futuro, mientras se beneficia a unos pocos. </UL>

        <UL> 24. Los únicos países que se hicieron ricos lo hicieron mediante la libertad económica y el respeto a la propiedad privada. Antes de la Primera Guerra Mundial: EE.UU., Reino Unido, Francia, Alemania, Argentina, Canadá, Australia, Nueva Zelanda, Suiza, todo el norte de Europa. Después de la Segunda Guerra Mundial: Japón, Hong Kong, Singapur, Israel, Taiwán, Malasia, Corea (sur). </UL>

        <UL> 25. Los países del socialismo planificador que se fundieron pero giraron a economías de mercado y ahora les va mucho mejor: China, Chile, Vietnam, todos los ex URSS y su bloque. </UL>

        <UL> 26. Argentina fue el único país rico que cayó en el socialismo, no por una guerrilla o una invasión extranjera, sino por la vocación de sus ciudadanos de todas las clases sociales, y se estancó en la miseria. </UL>

        <UL> 27. En realidad, es posible explicar la riqueza de las naciones con solo dos variables: la posición en el <i>ranking</i> de libertades económicas de cada país y cuánto tiempo lleva en esa posición. </UL>

    </div>
    )
}