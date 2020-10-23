import React, { useEffect } from 'react'
import { CHAPIMAGE, TITLE2, UL, SUBTITLE } from '../css/css'
import { data } from '../../chapters'
import { urlbase, isLocalhost } from '../../index'


export const V20 = () => {

    const url = urlbase + data[20].url
    useEffect(() => {window.scrollTo(0, 0); if(!isLocalhost)fetch(url)}, [url])

    return (
    <div>

        <CHAPIMAGE src="/frontend-src/23/23.jpg" />

        <TITLE2> {data[20].number}. {data[20].title} </TITLE2>

        <UL> 1. Marx llegó a ser amado en el ámbito de la filosofía. Y realmente es muy bueno lo que dijo respecto a los procesos humanos y las relaciones entre ideas y construcción de la realidad. No obstante, su interpretación materialista (económica) de la historia resulta insuficiente. Vamos por partes. </UL>


        <SUBTITLE> DETERMINISMO ECONÓMICO </SUBTITLE>

        <UL> 2. Motivado por su necesidad personal de humillar a la civilización europea —que se había alzado como una sociedad industrializada y científica—, Marx sostuvo que la realidad humana no es el resultado de las ideas de las personas, de sus acuerdos políticos, de sus leyes, de sus filosofías ni sus religiones, sino que la realidad humana es construída de acuerdo a procesos subterráneos inconscientes que operan en la economía. </UL>

        <UL> 3. Desde sus comienzos en la tierra, los humanos modifican los métodos de producción para tener más productividad. Dentro de ciertos límites, la estructura social y la superestructura de las ideas y las leyes permanecen más o menos estáticas —especialmente la propiedad privada—, absorbiendo los cambios económicos. La infraestructura económica avanza gradualmente. </UL>

        <UL> 4. Pero, llegado el punto, la acumulación de avances económicos entra en contradicción con la estructura social y con la superestructura legal, ideológica y gubernamental. La economía se estanca porque las relaciones de propiedad y la legislación no le permiten distribuir la producción. Empieza el período revolucionario. </UL>

        <UL> 5. Frente al conflicto desencadenado, las clases sociales cambian su visión de la realidad social y se enfrentan entre ellas para transformar las leyes y la propiedad privada, cada una de acuerdo a su interés económico. La lucha de clases será —tarde o temprano— ganada por las clases sociales en ascenso económico. </UL>

        <UL> 6. El resultado final de las sacudidas políticas e ideológicas es un nuevo mundo legal e ideológico compatible con la nueva realidad económica y con las nuevas relaciones sociales de producción (relaciones de propiedad) que se dan en lo más profundo de la realidad humana. </UL>

        <UL> 7. Esta es, más o menos, la interpretación materialista (económica) de la historia, también llamada dialéctica materialista. Los sistemas de producción (originados en las relaciones de propiedad de los medios de producción) contienen contradicciones en los intereses económicos. Esas contradicciones pasan de ser favorables al crecimiento económico a serle un freno, de acuerdo al avance natural de la productividad. Luego llega la revolución, y comienza un nuevo ciclo. Un eterno movimiento que terminará el día en que desaparezca la propiedad privada de los medios de producción. </UL>


        <SUBTITLE> LAS FASES DE LA HISTORIA HUMANA </SUBTITLE>

        <UL> 8. Pero le falta una parte. Marx catalogó 6 estadíos que la humanidad va atravesando al evolucionar dentro de esta secuencia, que son: el comunismo primitivo, la sociedad esclavista, el feudalismo, el capitalismo, el socialismo y el comunismo moderno. </UL>

        <UL> 9. El comunismo primitivo es un mito evolucionista. El origen del humano tiene que buscarse en la cría de ganado y la agricultura familiar, no en la caza y la recolección y en el reparto del producto en función de las necesidades. </UL>

        <UL> 10. Los humanos que vivían de la caza y la recolección fueron los que se alejaron mucho de la Mesopotamia y la cuenca del Nilo y quedaron aislados de la civilización, y su comunismo no pasó nunca a otra "fase" de desarrollo porque nunca hubo un sobrante para capitalizar. Son pueblos que llegaron al siglo XX de la era común siendo cazadores y recolectores. </UL>

        <UL> 11. La cría de ganado y la agricultura, en cambio, son necesariamente mediante propiedad privada de tipo patriarcal: masculina y por herencia masculina. Nada de comunismo. El marxismo hizo propio el evolucionismo de Darwin porque le era más funcional, no porque la historia o la antropología le marcaran el rumbo. </UL>

        <UL> 12. La sociedad esclavista era la realidad en Roma en los tiempos de su máxima corrupción pero no fue su origen y tampoco era la realidad de los pueblos antiguos. Pueblos como el romano, el babilonio y el asirio tomaban prisioneros de guerra para hacerlos trabajar en la agricultura y así poder dedicarse ellos a la guerra a tiempo completo y luchar mucho tiempo fuera de casa. </UL>

        <UL> 13. Pero eso no es un modo de producción superior que tenga que derrotar a otros modos de producción inferiores. De hecho, es un sistema inferior porque nadie hace mejoras en los campos de un amo esclavista de guerra. Por eso no existe más. </UL>

        <UL> 14. Por regla general, la gente de la antigüedad trabajaba sus propios campos y recibía apoyo de trabajadores asalariados libres durante la cosecha. La esclavitud, por su parte, estaba asociada principalmente a trabajos de administración de las casas de los terratenientes, la limpieza y la cocina. </UL>

        <UL> 15. La división social del trabajo, además, existe desde el nacimiento de la civilización, no desde el nacimiento de la esclavitud. Así, la sociedad esclavista —entendida como un método de producción que habría sacado a la humanidad del comunismo primitivo— es una idea marxista que no tiene correlato con la realidad. </UL>

        <UL> 16. El feudalismo no fue un modo de producción superior al que había en los tiempos de Roma sino todo lo contrario. </UL>

        <UL> 17. Cuando los musulmanes expulsaron a los europeos del mar Mediterráneo, los europeos quedaron confinados a la tierra profunda del continente. No solo sufrían incursiones mahometanas por el sur sino también vikingas por el norte y el oeste y mongolas por el este, etcétera. Tierra adentro, el transporte era caro y peligroso y había poca pesca. La fuerte contracción de la división internacional del trabajo significó, así, una bajísima productividad. Se calcula que el 90% de la población pasó a trabajar la tierra. </UL>

        <UL> 18. Con este gran salto atrás, las instituciones fueron las que conocemos: Los pocos productores industriales se vieron posibilitados a recibir el favor político para formar "sindicatos" o "consejos profesionales" que les permitían ser pocos, competir poco y obligar a la gente a comprar lo que ellos vendían. Los productores agrarios eran sirvientes de los terratenientes, y transportar mercancías significaba pagar impuestos a cada paso. </UL>

        <UL> 19. El feudalismo fue un accidente histórico, un retroceso, no una etapa superior lograda por contradicciones dialécticas, y no ayuda a explicar el surgimiento del capitalismo. </UL>

        <UL> 20. El capitalismo no fue un modo de producción surgido gracias al feudalismo sino un modo de producción similar al que había antes de la expansión musulmana, solo que potenciado por la introducción de máquinas con motor en los procesos productivos. Y que fue, luego pero temprano, intervenido por los banqueros que impusieron leyes para garantizarse para ellos la emisión de dinero y así parasitar la economía y dominarla. </UL>

        <UL> 21. El capitalismo no da lugar al socialismo porque haya de multiplicar y disciplinar a una clase obrera con intereses opuestos a los de los capitalistas, mientras acrecienta la producción y achica las posibilidades de progreso. Ambos grupos tienen los mismos intereses, y las mejores oportunidades de progreso las encuentran en asociación, excepto que hagan intervenir al Estado. </UL>

        <UL> 22. El socialismo (el regreso a la esclavitud al Estado) no es una fase superior sino un gran salto económico hacia atrás, la exaltación de la lucha de clases y el fin de las libertades políticas, expresivas y religiosas. </UL>

        <UL> 23. La abolición de la propiedad privada no trae libertad y fin de la lucha de clases... porque la propiedad privada no es lo opuesto a la ausencia de propiedad sino que es lo opuesto a la propiedad del Estado. Y la ausencia de propiedad privada implica que el Estado es propietario de todo y los ciudadanos no tienen manera de protegerse de él. La presencia de propiedad privada, en cambio, limita el poder y lo equilibra. La economía al servicio del poder político empobrece deliberadamente para la concentración de poder y la conservación de ese poder. </UL>

        <UL> 24. No fue el progreso económico capitalista lo que determinó la imposición del socialismo sino todo lo contrario. Y fue el estancamiento económico lo que hizo colapsar a los regímenes del bloque soviético y a la China maoísta y la Vietnam hochiminista, etcétera. </UL>

        <UL> 25. Finalmente, el comunismo moderno (que nunca salió de los libros) no puede ser la fase siguiente al socialismo porque el socialismo es el sometimiento a un Estado gigante devenido en dios que exije devoción exclusiva bajo la dirección de una cúpula totalitaria de jerarcas del partido único, mientras que el comunismo moderno vendría a ser eso mismo pero sin esa cúpula, según una redistribución del poder del Estado en partes iguales entre los ciudadanos. </UL>

        <UL> 26. Y no hay manera de que esos dioses renuncien al poder totalitario para ponerse a trabajar con humildad y sacrificio por los demás, mucho menos en un contexto de miseria causado por la abolición de la propiedad privada. O por lo menos no hay una dinámica sistémica "dialéctica materialista" que vaya a hacerlo, de acuerdo a un desarrollo natural e inevitable de la historia, como se lo presenta. </UL>

        <UL> 27. El comunismo moderno no es la etapa siguiente al socialismo, a la cual el socialismo del siglo XX no pudo acceder por culpa del egoísmo de los súbditos o por la mala administración de los partidos comunistas. Y el socialismo moderno no es una etapa superior, es un salto atrás, y no surgió por determinismo económico sino por procesos políticos y guerrilleros, anti económicos. Y nunca conduce al comunismo de <i>La República</i> de Platón y la <i>Utopía</i> de Thomas More. </UL>

        <UL> 28. El "progreso natural y dialéctico" de la historia humana hacia el comunismo es una farsa. </UL>


        <SUBTITLE> DETERMINISMO ECONÓMICO </SUBTITLE>    

        <UL> 29. Se rescata de Marx, no obstante, esa suerte de determinismo económico para el nacimiento del capitalismo porque el incipiente desarrollo industrial que se dio dentro del interior de la sociedad feudal produjo y le dio poder a una clase social que exigió al Estado que se saliera de la economía. Su teoría de las "fases" no se lleva nada bien con los libros de historia ni con la antropología ni con la lógica pero esa parte es interesante. </UL>

        <UL> 30. No se rescata del todo, no obstante. Por ejemplo, los países anglosajones y los nórdicos se hicieron ricos por una tradición de respeto a la propiedad privada y la libertad y, lo que es lo mismo, de mantener al Estado dentro de los límites razonables de seguridad, justicia, diplomacia. No hay determinismo económico que explique esto sino todo lo contrario. </UL>

        <UL> 31. A su vez, los países que se hicieron ricos después de la Segunda Guerra Mundial (como Japón, Singapur, Taiwán, Corea) tuvieron decisiones políticas de ir por la economía de mercado, mientras otros países (al mismo tiempo y en regiones cercanas y similares, como India, China, Norcorea y Vietnam) fueron por la vía del estatismo y fracasaron. No hay determinismo económico sino todo lo contrario. </UL>

        <UL> 32. Mas bien, la realidad humana no es la suma de su realidad económica, su realidad social, su realidad política y su realidad ideológica para que pueda formularse una teoría de la determinación causal entre estos conceptos. </UL>

        <UL> 33. Los procesos humanos son tan complejos que no existe determinismo de este tipo sino que la realidad humana en la tierra es más bien de naturaleza estocástica, donde los procesos económicos no determinan la política, la sociedad y la ideología, sino que solo se manifiestan primero. Por eso es que los eventos económicos traen solapados los procesos sociales, políticos e ideológicos que se avecinan, y, no obstante, no hay un determinismo económico. (Ver el capítulo 24.) </UL>


        <SUBTITLE> EL FIN DE LA HISTORIA </SUBTITLE>

        <UL> 34. Se entiende, entonces, que el capitalismo era exactamente lo que buscaba Marx: una sociedad donde se han resuelto las contradicciones de intereses y cesa la lucha de clases, donde el progreso económico no causa conflictos sociales sino, al contrario, beneficia a todos y es canalizado por la estructura legal e ideológica de la población. </UL>

        <UL> 35. Se requería, para ello, que el capitalismo fuese defendido de poderosos empresarios (principalmente, los banqueros), y también de sindicatos, consejos profesionales y políticos; en una palabra, de todos los que no quieren competir sino vivir de rentas coercitivas. Y los economistas tenían que defender la enseñanza sana de la economía y luchar contra la contaminación terraplanista. </UL>

        <UL> 36. En vez de eso, la humanidad ha caído en un bucle, retornando en este momento al sometimiento al Estado, solo que ahora el Estado se ha hecho enormemente poderoso por su simbiosis con grandes corporaciones y la tecnología. Es, ahora, difícil decir dónde termina el Estado y dónde empiezan las corporaciones. </UL>

        <UL> 37. La idea de que la historia humana se detiene porque resuelve todos sus conflictos mediante el comunismo moderno falla por todos lados. El humano está condenado a estar en movimiento. El fin de la historia por haber llegado al fin de las contradicciones no puede existir. </UL>

        <UL> 38. No es una realidad agradable para vagos que quieren que el tiempo se detenga y pasar la eternidad escribiendo lo que los demás deberían hacer. Y esta explicación es, curiosamente, más dialéctica hegeliana que la interpretación materialista de la historia de Marx y Engels. </UL>

        <UL> 39. Sin Estado no hay paz ni progreso, y con Estado está siempre el interés egoísta de usarlo para oprimir. La lucha para que el Estado sea una cosa o la otra nunca acaba. </UL>

    </div>
    )
}