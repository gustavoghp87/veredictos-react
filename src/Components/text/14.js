import React, { useEffect } from 'react'
import { CHAPIMAGE, TITLE2, UL, SUBTITLE, IMAGECENTER } from '../css/css'
import { data } from '../../chapters'
import { urlbase, isLocalhost } from '../../index'


export const V14 = () => {

    const url = urlbase + data[14].url
    useEffect(() => {window.scrollTo(0, 0); if(!isLocalhost)fetch(url)}, [url])

    return (
    <div>

        <CHAPIMAGE src="/frontend-src/17/17.jpg" />

        <TITLE2> {data[14].number}. {data[14].title} </TITLE2>

        <UL> 1. Se han dicho y se leen toneladas de estupideces sobre la FED, su origen y sus prácticas. Pero a nosotros nos interesa un análisis económico. </UL>


        <SUBTITLE> PRIVADO O PÚBLICO </SUBTITLE>

        <UL> 2. Hasta entonces, todo banco central era enteramente privado pero regulado. Era un monopolio obligado a seguir ciertas leyes. Solo había en Europa. </UL>
        
        <UL> 3. La enorme dificultad que hubo a lo largo de más de 100 años para lograr un banco central en EE.UU. (por la resistencia de la dirigencia política norteamericana y de la opinión pública en general) obligó al <i>lobby</i> bancario a engendrar una innovación: el banco central estatal. </UL>

        <UL> 4. La FED fue el primer banco central estatal... en algún sentido. El presidente escoge y el senado aprueba a los siete directores de la junta de la Reserva Federal, que, luego, no pueden ser removidos. </UL>

        <UL> 5. Por otra parte, el entero territorio estadounidense fue dividido en 12 jurisdicciones monetarias, con un banco central en cada uno. La totalidad de los directores de estos bancos centrales regionales son elegidos por los bancos privados más grandes de cada lugar. </UL>

        <UL> 6. Por lo tanto, la FED no es pública ni privada. Es una corporación monopólica donde el gobierno federal es accionista minoritario pero que, a su vez, no tiene control sobre los representantes que elige. </UL>

        <UL> 7. No obstante, se debe detener la tentación de declarar que la FED es un banco privado porque no sigue la lógica de la empresa privada. Aunque la correspondencia entre los bancos centrales regionales y los directores de la FED era y sigue siendo ultrasecreta, y aunque la junta no responda al poder político, el sistema cumple una función que el Estado le ha delegado: monopoliza el negocio del dinero. </UL>

        <UL> 8. La FED no es pública ni privada. Es más correcto entenderla como el hijo socialista que el país más capitalista del mundo tuvo con el <i>lobby</i> bancario. Es el gerenciamiento privado de una parte del Estado, para la riqueza rentística del Estado y de los empresarios asociados. </UL>

        <IMAGECENTER src="/frontend-src/17/jackson4.jpg" />

        <UL> 9. Antes de emitir juicio, se recomienda recordar que EE.UU. fue el único país del mundo cuya dirigencia política se resistió a este engendro comunista con tenasidad, luchando con todas sus fuerzas a lo largo de 140 años. Los demás países se rindieron sin luchar. </UL>


        <SUBTITLE> INCUBACIÓN DEL CRASH </SUBTITLE>

        <UL> 10. La FED comenzó a funcionar en 1914 y nació la inflación: de nada a 10%. Financió al gobierno federal por su breve participación en la Primera Guerra Mundial, y enseguida causó su primer descalabro: 18% de inflación en 1918, y la mantuvo en torno a 15% los años siguientes, hasta que sobrevinieron una fuerte recesión y una deflación de 18% entre 1921 y 1922. </UL>

        <UL> 11. En 1924, el país comenzó un impulso expansivo muy fuerte, que fue acompañado por la FED con expansión monetaria. El patrón oro era así. Si la gente quería más dinero nacional (dólares) para hacer negocios y menos oro, era obligación del sistema emitir, hacer los cambios y acumular oro de reserva como garantía del valor del dinero circulante. </UL>

        <UL> 12. Pero encontramos en este punto la anomalía clave: las reservas de oro no aumentaron durante toda la década de 1920. ¿Dónde se vio que las reservas no aumentaran durante un auge económico, en un sistema de tipo de cambio fijo? </UL>

        <UL> 13. El Reino Unido había salido debilitado de la Primera Guerra Mundial, con pocas reservas de oro y endeudado. Hay investigaciones en el sentido de que hubo un plan para que la FED hiciese "política monetaria expansiva" para que el oro migrara desde EE.UU. hacia Londres (la capital mundial del sistema financiero). </UL>

        <UL> 14. Caso contrario, la mejor explicación es que los bancos bajaron mucho los coeficientes de encaje para dar mucho crédito, de acuerdo al espíritu ultra optimista que se vivía. Y, en un sistema monetario de reserva fraccionaria bancaria y reserva fraccionaria de oro, toda reducción de encajes causa expansión monetaria y exportación de oro. </UL>

        <UL> 15. La expansión emisionista del crédito causó la prosperidad cortoplacista de los negocios, y la compra masiva de acciones provocaron una euforia en la bolsa de valores. Una población ignorante sobre los procesos de mercado se apuró a endeudarse para comprar acciones de compañías que no paraban de subir. </UL>

        <UL> 16. Hacia octubre de 1929, los grandes inversores decidieron (con razón) liquidar inversiones bursátiles y pasarse a oro. Le siguió una estampida vendedora que derribó los valores y causó la quiebra de los endeudados. </UL>


        <SUBTITLE> DINERO Y PATRÓN ORO </SUBTITLE>

        <UL> 17. ¿Qué pasó después? La política del gobierno de EE.UU. fue que el mercado debía corregir a los que habían invertido mal. Una postura muy noble si no hubiese sido cierto que el Estado causó la crisis. </UL>

        <UL> 18. Como gobernaba el patrón oro, la FED se limitó a retirar dinero de la circulación de acuerdo a los retiros de oro. Y los bancos subieron sus coeficientes de encaje ante la masividad de los retiros de efectivo. Una bruta contracción monetaria. </UL>

        <UL> 19. Entiéndase bien: la cantidad de circulante se redujo, y la oferta privada de dinero se contrajo también por el temor. Se necesitaba una caída de precios de 33% para volver a crecer, pero la economía se demoró 4 años en lograr tamaña deflación, mientras el "prestamista de última instancia" se sentaba a mirar cómo quebraban los bancos, la producción caía 25% y el desempleo subía a 25%. </UL>

        <UL> 20. Se entiende, el patrón oro era un sistema por el cual el banco central sacaba dinero de la circulación cuando el mercado más lo demandaba y más lo necesitaba, yendo a contramano de la realidad, todo para salvar al tipo de cambio entre moneda nacional estatal y moneda de oro. (Que se lo expliquen a los economistas de la escuela autríaca que claman por el regreso del patrón oro para matar la inflación.) </UL>

        <UL> 21. Si el mercado estaba demandando mucho oro, lo natural hubiera sido que el oro se encareciera. Por esta vía (devaluación), la economía hubiera sido abastecida de dinero (de acuerdo al aumento de la demanda y la reducción de su oferta privada). Se hubieran evitado la deflación de precios del 33%, los cuatro años de recesión y la expansión mundial del socialismo que le siguió. </UL>

        <UL> 22. Recapitulando, el Estado tenía secuestrado el mercado de dinero para su propio rédito y el de sus socios en los bancos, constituyéndose en el administrador del sistema, y ejecutó la peor administración del mercado de dinero de toda la historia del país. </UL>


        <SUBTITLE> CONFISCACIÓN DE TODO EL ORO </SUBTITLE>

        <UL> 23. ¿Llegó la dirigencia política norteamericana a la conclusión correcta? No. La conclusión fue que el Estado federal no tenía suficiente oro para hacer funcionar bien al sistema. La culpa era de la gente por ahorrar en oro. La solución, confiscarlo. </UL>

        <UL> 24. En enero de 1934, el gobierno y el Congreso aprobaron la <i>Gold Reserve Act</i> que ponía un plazo a todos los habitantes del país para "venderle" al gobierno todas las monedas de oro que tuviesen, bajo penas de multas y cárcel, y le daba al gobierno federal el poder de determinar unilateralmente el tipo de cambio. La FED también tuvo que "venderle" sus reservas. E inmediatamente devaluó 70%. </UL>

        <UL> 25. Como la prohibición de usar monedas de plata, por su parte, había sido ejecutada en 1873 (<i>Coinage Act</i>), la entera sociedad de EE.UU. quedó presa del billete de papel no convertible y de la inflación. </UL>

        <UL> 26. Entiéndase: EE.UU. sufrió una recesión brutal entre 1929 y 1933 para causar una deflación de 33% que salvara al tipo de cambio. Pero cuando se lo logró y la economía se reactivó, el gobierno tomó la posta de la política cambiaria y devaluó 70%. Mataron la reactivación. </UL>


        <SUBTITLE> NEW DEAL </SUBTITLE>

        <UL> 27. Entiéndase: Una cosa es la Gran Depresión 1929-1933 y otra "la crisis de los años 1930". Porque si la recesión se extendió por toda la década, fue por el desastre socialista que hizo el gobierno de Roosevelt. </UL>

        <UL> 28. En 1933 comenzó una batería de leyes para construir muchísimas obras públicas, castigar la producción agropecuaria (para combatir la deflación), darle poder a los sindicatos, redistribuir el ingreso, dar asistencia social y regular la banca. Fue el llamado <i>new deal</i>. </UL>

        <UL> 29. Después de un rebote transitorio entre 1934 y 1936, la recesión volvió. Una economía volcada al consumo, sin inversión privada, no podía ir muy lejos. Finalmente, el producto estaba en 1939 en los valores de 1929, y el desempleo seguía en 17%. Las leyes <i>new deal</i> se detuvieron en 1938 y se le dio marcha atrás parcialmente. </UL>

        <UL> 30. Pero el país ya no era esclavo del patrón oro y podía volver a usar su genio y laboriosidad para lograr la prosperidad y salir a defender la libertad por todos los campos de batalla de la tierra. </UL>


        <SUBTITLE> SOCIALISMO BELICISTA </SUBTITLE>

        <UL> 33. Finalmente, y después de todas las interpretaciones marxistas sobre los desastres que el marxismo causó, uno se encuentra con la interpretación marxista más alocada de todas: que la economía estadounidense dejó atrás finalmente la década de recesión gracias al esfuerzo bélico que significó la Segunda Guerra Mundial. Cuesta encontrar un texto de historia que no diga que la economía fue reactivada en 1939 por el gasto militar masivo que comenzó en diciembre de 1941. </UL>

        <UL> 34. Vive en esta imposición de historiadores marxistas la teoría del Manifiesto Comunista de que las crisis económicas son causadas por una supuesta contradicción entre la producción capitalista y sus mecanismos de distribución de la riqueza generada, que causaría el estrangulamiento de la producción (capítulo 6). </UL>

        <UL> 35. Entendemos que en economía no hay que explicar las reactivaciones sino las crisis. Las reactivaciones las causa, simplemente, el fin de sus causas (en este caso, el tipo de cambio fijo y el <i>new deal</i>), y son explicadas por las fuerzas de la sociedad que empujan hacia el progreso, no los programas de gobierno. </UL>

        <UL> 36. Y creemos que quedan bastante bien explicados los macrodesastres estatales que causaron la Gran Depresión de los años '30 y la avanzada comunista que engendró por todo el mundo. </UL>

    </div>
    )
}