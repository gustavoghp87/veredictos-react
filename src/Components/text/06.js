import React, { useEffect } from 'react'
import { CHAPIMAGE, TITLE2, UL, SUBTITLE, SPECIALRIGHT } from '../css/css'
import { data } from '../../chapters'
import { urlbase, isLocalhost } from '../../index'


export const V06 = () => {

    const url = urlbase + data[6].url
    useEffect(() => {window.scrollTo(0, 0); if(!isLocalhost)fetch(url)}, [])

    return (
    <div>

        <CHAPIMAGE src="/frontend-src/09/09.jpg" />

        <TITLE2> {data[6].number}. {data[6].title} </TITLE2>

        <UL> 1. Adam Smith señaló la importancia de la libertad económica para alcanzar la prosperidad gracias a la competencia de empresas. Pero el Manifiesto Comunista de 1848 (sin negar esta importancia) dijo que la competencia entre empresas es solamente una etapa en el desarrollo del capitalismo, destinada a desaparecer. </UL>

        <UL> 2. Para Marx y Engels, el curso de la economía hace que unas empresas tomen la delantera mientras sus competidores quiebran. Avanzadas las cosas, se vuelve imposible empezar una nueva compañía que entre en el mercado y compita. Con los años, quedará solo un puñado de grandes corporaciones o una sola por actividad. </UL>

        <UL> 3. Así, los beneficios de la competencia tendrían que retroceder gradualmente hasta desaparecer. Y prepararían la economía para la expropiación y alcanzar su destino final, que sería la administración estatal de toda la economía. </UL>

        <UL> 4. Los socialistas, entonces, suelen apuntar contra las grandes compañías y clamar que la intervención del Estado los proteja de lo que, juzgan, es un poder de mercado abusivo. Quieren expropiarlas. </UL>

        <UL> 5. Nuevamente, no es importante el Manifiesto Comunista de 1848, que ya nadie lee. Pero sí que mucha gente en la actualidad ha llegado a las mismas conclusiones sin haberlo leído. Y los economistas no han hecho el trabajo de ayudar a resolver estas dudas, que son muy válidas. </UL>


        <SUBTITLE> ORIGEN DE LA CONCENTRACIÓN </SUBTITLE>

        <UL> 6. Cuando en un mercado hay un único vendedor, es esencial determinar el motivo. Así, hay 2 tipos de situaciones bien diferentes: la causada por el Estado y la causada por las preferencias de los compradores. </UL>

        <UL> 7. En la mayoría de los casos hay poco qué decir. La concentración es un fenómeno causado por el Estado. Son las leyes del Estado las que dan a una compañía el poder de monopolio, porque previenen o limitan la competencia o la posibilidad de entrar a competir. </UL>

        <UL> 8. Pero la concentración no siempre es lo que parece. Una compañía muy grande con una gran cuota de mercado no es necesariamente un monopolio, solo por esto. Si la mayoría en el mercado prefiere comprar a una única empresa, tendremos una única empresa vendiendo, elegida por la gente. No es un monopolio. </UL>

        <UL> 9. ¿Cómo podría una compañía convencer al mercado de que solo le compren a ella? Diferenciando sus productos, con innovación y secreto de fórmulas y tecnologías y el prestigio de las marcas. No es monopolio si no hay intervención del Estado, como leyes de la propiedad intelectual. Algunos ejemplos: </UL>

        <SPECIALRIGHT>
            <UL> -los carteles de la droga son oligopolios a causa de la prohibición de la droga; </UL>

            <UL> -Facebook tiene una enorme cuota de mercado a causa de la cantidad de usuarios activos, tal que haciendo una red social idéntica no se lograría nada; </UL>

            <UL> -el <i>trust</i> del petróleo (OPEP) existe porque los Estados miembros han secuestrado el petróleo en sus respectivos países; </UL>

            <UL> -el cártel de bancos de todo país existe a causa de las leyes de banco central y de bancos y entidades financieras; </UL>

            <UL> -Coca-Cola y Pepsi suman una enorme cuota de mercado gracias al secreto empresarial de sus fórmulas; </UL>

            <UL> -Windows tuvo su gigantesca cuota de mercado debito a la ley de propiedad intelectual, que convirtió a los Estados en policías de recaudación para la empresa. </UL>
        </SPECIALRIGHT>


        <SUBTITLE> LOS PELIGROS DE LA CONCENTRACIÓN </SUBTITLE>

        <UL> 10. Para el caso de las infraestructuras: Cuando el Estado llama a concesión, puede firmar contrato con la compañía que ofrezca la combinación óptima de servicios y tarifas. Son "monopolios" que operan a precio de mercado competitivo, obligados a dar resultados para conseguir la renovación. </UL>

        <UL> 11. ¿Son las compañías concentradas peligrosas en un mercado libre? Se dice que podrían cobrar los precios que quisiesen. Pero en caso de precios altos, surgirán nuevos competidores porque no hay barreras para entrar. Por tanto, el precio de concentración no es mucho más alto al precio de competencia abundante. Y lo mismo cuenta para las condiciones de los productos, etcétera. </UL>

        <UL> 12. Si no surge ningún emprendimiento para entrar al mercado a competir para aprovechar el precio "abusivo", entonces ese precio está bien. Es el mínimo posible. </UL>

        <UL> 13. Por lo tanto, salvo intervención del Estado en la economía, lo que los socialistas entienden como "precio abusivo de monopolio" es solo el precio que la gente decide pagar. Y es el mejor precio posible. No hay monopolio, ni hay "formadores de precios". </UL>


        <SUBTITLE> CÁRTELES </SUBTITLE>

        <UL> 14. Pero hay un asunto más: el acuerdo entre las pocas compañías que concentran casi todo el mercado para subir los precios e imponer condiciones. </UL>

        <UL> 15. Es cuando el Estado interviene como defensor de la propiedad privada. El acuerdo entre empresas con alta cuota de mercado para coordinar acciones que perjudiquen al resto del mercado es un atentado contra los intereses de los demás. </UL>

        <UL> 16. Y la represión del cártel es doctrina propia del liberalismo y opuesta al socialismo, como es doctrina del liberalismo reprimir a las empresas que hagan un uso de la tecnología que atente contra la libertad y la intimidad. </UL>


        <SUBTITLE> MONOPOLIOS Y SOCIALISMO </SUBTITLE>

        <UL> 17. Hipocrecía mediante, los socialistas en el poder limitan la competencia y favorecen o promocionan la concentración para poder controlar la economía a través de los monopolios y oligopolios que ellos mismos forman. Cuando una gran compañía se rehusa a colaborar con el gobierno socialista, es acusada de oprimir al pueblo con sus precios y de financiar a la oposición. </UL>

        <UL> 18. Los socialistas culpan a las compañías por la inflación y por el alto costo de la vida. Pero la inflación la causan el banco central (monopolio) y el cártel bancario (oligopolio, tentáculos del banco central). Detrás de estas acusaciones se esconden las intenciones de expropiarlas para convertirlas en armas de sometimiento. </UL>


        <SUBTITLE> COTIZACIÓN Y REDISTRIBUCIÓN </SUBTITLE>

        <UL> 19. Cuando los socialistas escuchan a cuánto cotizan las compañías en los mercados bursátiles o a cuánto ascienden las fortunas de los millonarios, se imaginan que hay una desigualdad enorme en el mundo y hacen cálculos estúpidos sobre cómo sería el mundo si ellos tuviesen el poder totalitario para repartir en partes iguales esa supuesta riqueza. </UL>

        <UL> 20. Pero medir la riqueza en cantidad de dinero es una mala idea. Las empresas cotizan de acuerdo a las expectativas de ganancias que tienen los inversores. Y, por eso, los impuestos en los mercados bursátiles y financieros y las expropiaciones siempre causan el desplome de esos valores. Son capitales que se destruyen cuando el socialista extiende la mano para robárselos. </UL>

    </div>
    )
}