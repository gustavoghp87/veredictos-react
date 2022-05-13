import React, { useEffect } from 'react'
import { CHAPIMAGE, TITLE2, UL, SUBTITLE, IMAGECENTER, SPECIALRIGHT, CENTER } from '../css/css'
import { data } from '../../chapters'

import { isLocalhost, rootPath, urlbase } from '../App'

export const V12 = () => {

    const url = urlbase + data[12].url
    useEffect(() => {window.scrollTo(0, 0); if(!isLocalhost)fetch(url)}, [url])

    return (
    <div>

        <CHAPIMAGE src={`${rootPath}frontend-src/15/15.jpg`} />

        <TITLE2> {data[12].number}. {data[12].title} </TITLE2>

        <UL> 1. La inflación es el fenómeno más consultado de toda la economía. Es el origen de debates, controversias, posiciones ideológicas y experimentos gubernamentales de todo tipo. Y no porque sí esta será el capítulo más largo del sitio. Pero la realidad científica es una sola. </UL>


        <SUBTITLE> CONTEXTO </SUBTITLE>

        <UL> 2. Antes del siglo XIX, los Estados solo acuñaban monedas. Así, el valor de toda moneda (de oro o plata) estaba determinado por el valor de mercado de su metal y por su peso, no por algo que hiciese el Estado. El servicio de acuñación evitaba a los ciudadanos tener que pesar las monedas antes de cada transacción: si el dibujo de la moneda estaba bien, el peso era el correcto. Y solo eso. </UL>

        <UL> 3. Pero en la modernidad se crearon el billete de papel bancario y el dinero bancario como depósito en cuenta a la vista (depósito donde se supone que hay dinero pero que el banco en realidad no tiene, no obstante se puede usar como medio de pago usando cheque o, más recientemente, tarjeta de débito, transferencias y aplicaciones). No fueron dos introducciones por parte de las dirigencias políticas sino por los bancos, como innovación privada. </UL>

        <UL> 4. Gradualmente, durante los siglos XIX y XX, los banqueros fueron "convenciendo" a los gobiernos de imponer el uso de dinero bancario de ambos tipos en detrimento de las monedas de oro y plata. Y, finalmente, los "convencieron" también de que prohibieran la circulación de todo tipo de dinero excepto las dos formas de dinero bancarias, que se convirtieron en bancario-estatales. </UL>

        <UL> 5. Ya en el siglo XX, los Estados tenían prohibida toda forma de dinero excepto la propia, bajo un monopolio estatal de la emisión —compartido con sus socios, los bancos—. La historia de cómo se llegó a esta situación es acerca de sobornos, engaños, compra de periodistas, amenazas, asesinatos. </UL>

        <UL> 6. Cuando el Estado impone el uso obligatorio de una única moneda, prohibiendo las monedas privadas y las extranjeras, una moneda que tiene costos de producción inapreciables y un monopolio en su emisión, hay un gran negocio socialista que tiene que ser analizado. </UL>


        <SUBTITLE> MERCADO DE DINERO </SUBTITLE>

        <UL> 7. Para entender el dinero, se necesita pensarlo como un bien económico más del montón. Tiene una función de oferta y una función de demanda. Y tiene una cantidad de equilibrio y un valor de equilibrio para los cuales se encuentran los planes de quienes quieren recibir dinero y quienes quieren entregarlo. </UL>

        <UL> 8. El mercado de dinero es la otra cara de los mercados de todos los otros bienes y servicios juntos: La oferta de dinero es la demanda de bienes, servicios y monedas extranjeras en general —lo que uno está dispuesto a recibir en cambio por el dinero que ya tiene—. Y la demanda de dinero es la oferta de bienes, servicios y monedas extranjeras en general —lo que uno está dispuesto a dar para recibir dinero—. </UL>

        {/* La única dificultad que tiene este mercado es que el mismo demandante de dinero se convierte en ofertante luego de haberlo recibido y otra vez en demandante cuando ya lo ha entregado. En realidad, toda persona es ofertante y demandante de dinero a la vez, todo el tiempo. Pero el esquema analítico sigue siendo válido y el desafío intelectual no es gran cosa. */}

        <IMAGECENTER src={`${rootPath}frontend-src/15/money.jpg`} />

        <UL> 9. El mercado de dinero -como cualquier otro- ajusta precio y cantidad buscando el equilibrio: </UL>

            <SPECIALRIGHT> (i) Cuando el poder adquisitivo de una moneda es muy bajo, la cantidad de dinero ofrecida en el mercado es muy baja ya que la gente no quiere desprenderse de él fácilmente. Para ellos, los precios están altos. En otras palabras, los dueños de dinero quieren hacer pocas transacciones a causa de la poca contraprestación que les ofrecen por cada unidad monetaria. Y, al contrario, la cantidad de dinero demandada es muy alta. La gente quiere vender muchas cosas al estado actual de precios; quieren mucho dinero. Los planes no se encuentran; la deflación sobreviene. </SPECIALRIGHT>

            <SPECIALRIGHT> (ii) Cuando el poder adquisitivo de una moneda es muy alto, la cantidad de dinero ofrecida en el mercado es muy alta ya que la gente quiere desprenderse de él para conseguir las muchas cosas que se están ofreciendo a cambio. Los precios están bajos. Pero, al mismo tiempo, la cantidad demandada de dinero es muy baja. La gente quiere vender poco porque los precios están bajos y no es negocio. Los planes no se encuentran; la inflación sobreviene. </SPECIALRIGHT>

            <SPECIALRIGHT> (iii) Finalmente, hay un poder adquisitivo de equilibrio que hace que los planes se encuentren. Y también hay una cantidad de dinero de equilibrio, que no es la cantidad de dinero circulante M99 sino la cantidad de dinero que cambia de manos en el período cierto de tiempo que se está considerando en el gráfico. </SPECIALRIGHT>

        <UL> 10. En principio, poco más que esto. Todos los mercados están en constante movimiento. Pero cuando todos se mueven en la misma dirección, probablemente sea el mercado de dinero el que está siendo perturbado (en sus variables exógenas). </UL>


        <SUBTITLE> VELOCIDAD DE CIRCULACIÓN DEL DINERO </SUBTITLE>

        <UL> 11. La cantidad de dinero de equilibrio en el mercado de dinero es percibida desde el siglo XVIII (Hume) como velocidad de circulación del dinero, lo cual es muy cierto. Pero no es una variable autónoma sino una variable endógena. </UL>

        <UL> 12. No deberíamos decir que "hay inflación porque se aceleró la velocidad de circulación del dinero" sino que "hay inflación y se aceleró la velocidad de circulación del dinero porque aumentó la oferta de dinero". En el gráfico, la curva de oferta de dinero se desplaza a la derecha. </UL>

        <UL> 13. Por supuesto que se puede expresar esta cantidad de dinero de equilibrio M* (cantidad de dinero que cambia de manos en un cierto período) como el producto de la cantidad de circulante M99 y un cierto coeficiente que pretenda medir la velocidad promedio de circulación del dinero. Se puede hacer. </UL>

        <UL> 14. Pero parece un artilugio matemático de poca utilidad. Así, el producto de la cantidad de dinero intercambiada y el poder adquisitivo de la moneda da el total de transacciones, siendo, como es, la <i>Teoría Cuantitativa del Dinero</i> una visión superficial del mercado de dinero. </UL>


        <SUBTITLE> OFERTA DE DINERO </SUBTITLE>

        <UL> 15. El problema que nos hace hablar de velocidad de circulación como si fuese una variable exógena para explicar la inflación es la dificultad para refundar el concepto de oferta de dinero. Para cualquiera, oferta de dinero es la cantidad de circulante y solo depende de la voluntad del directorio del banco central. En cambio, aquí definimos oferta de dinero como la contracara de la demanda de bienes, servicios y monedas extranjeras. </UL>

        <UL> 16. En las economías modernas, hay en cada país un monopolio del abastecimiento de dinero nuevo pero <b>no</b> un monopolio de la oferta de dinero, porque la oferta de dinero depende principalmente de los poseedores de dinero preexistente. Cada persona con dinero con intensiones de gastarlo es un ofertante. </UL>

        <UL> 17. En realidad, la oferta de dinero tiene dos componentes: una oferta privada y una oferta pública, que sumadas dan el total. El Estado tiene a su favor la posibilidad de aumentar su oferta de dinero emitiendo dinero nuevo (y no solamente por disponerse a desprenderse más prontamente del dinero que ya tenía, aceptando menos cosas en cambio). </UL>


        <SUBTITLE> CASOS DE INFLACIÓN </SUBTITLE>

        <UL> 18. Una cantidad de dinero de nueva emisión largada al mercado de dinero cuando la demanda no había crecido o no está creciendo tanto, y cuando la oferta privada de dinero no se retrajo o no se está retrayendo tanto, tiene que causar un aumento en la cantidad de dinero que se transa y una pérdida de poder adquisitivo de la moneda: inflación. </UL>

        <UL> 19. Una expansión de la oferta privada de dinero causada por expectativas negativas acerca de las finanzas públicas (a igual oferta pública de dinero y a igual demanda de dinero) causa inflación. Es decir, cuando el sector privado se adelanta a la emisión, huyendo de una inflación esperada. </UL>

        <UL> 20. Particularmente, cuando el Estado tiene déficit y se aproximan vencimientos de deuda que no podrán ser refinanciados, la oferta privada de dinero crece mucho: Los privados quieren desprenderse del dinero que tienen antes de que comience la gran emisión y están dispuestos a aceptar menos cosas por él, con tal de que sea rápido. Así se da la inflación sin emisión en las vísperas de una crisis pública de deuda. </UL>

        <UL> 21. Una contracción de la demanda de dinero porque se reducen los bienes y servicios en el mercado (a igual oferta de dinero) causa inflación. Estos son los 3 motivos puros y generales de la inflación. </UL>

        <UL> 22. Con este esquema básico ya se comprende por qué la emisión causa inflación: porque aumenta la oferta (pública) de dinero, mientras la función de demanda de dinero es decreciente con el poder adquisitivo del dinero. </UL>

        <UL> 23. ¿Y por qué es la demanda de dinero decreciente con el PAD? Por la misma razón por la que la oferta de bienes, servicios y monedas extranjeras es creciente con los precios: porque los costos de todo negocio son marginalmente crecientes. Se ha hablado mucho sobre esta condición de las funciones de oferta y su relación con el desempleo. </UL>

        <UL> 24. Es sencillo razonar que para que una expansión monetaria sea la solución al desempleo, la escasez de dinero tiene que ser la causa del desempleo. Pero rara vez es el caso sino que solo ocurre cuando hay una dirección estatal del mercado cambiario (como se estudia en las secciones sobre 1929 y sobre el FMI). </UL>

        <UL> 25. Respecto al efecto expansivo sobre la actividad que pueda tener una expansión monetaria, ver las secciones "Consumo y Crecimiento" y "Teoría de los Ciclos". </UL>

        <UL> 26. En los países socialistas la estructura productiva se halla secuestrada por clases sociales dominantes que usan al Estado para no tener que competir con los pobres y así poder obligar a los demás a servirles. En esos países, la cantidad de billetes no es la causa del desempleo ni del bajo crecimiento o la baja inversión, y así el emisionismo nunca soluciona nada sino que confisca más valor para el gobierno. </UL>


        <SUBTITLE> EMISIÓN Y REDISTRIBUCIÓN DE VALOR </SUBTITLE>

        <UL> 27. Los argumentos —socialistas— en torno a la necesidad de expandir circulante meten de contrabando un asunto esencial: Ofertante de dinero compite con ofertante de dinero, y cuando el Estado emite se lleva valor para sí mismo. </UL>

        <UL> 28. Si la emisión no causa inflación, está evitando una deflación. La deflación significa aumento de poder de compra a favor de los que tienen dinero. Por eso, en este caso, la redistribución a favor del Estado no se mide por inflación sino por los puntos de deflación que evita. </UL>

        <UL> 29. Si al expandir circulante el Estado de alguna manera repartiera ese nuevo circulante entre los poseedores de dinero, a cada uno en proporción a lo que ya tiene, en principio no habría redistribución del valor alguna. Sería una "política monetaria" que no fuera a su vez "política fiscal". </UL>

        <UL> 30. Vas a oír al socialista infinitas veces defender la "necesidad monetaria" de emitir. Pero nunca lo vas a ver defendiendo una emisión monetaria que no atente contra la propiedad privada. Porque, en principio, el problema no es la emisión (ni la inflación) sino quién será el primer dueño del dinero nuevo. </UL>

        <UL> 31. Lo que suele ocurrir es que la nueva emisión llega a ser una extracción de valor (una confiscación o un impuesto no declarado) donde a cada uno se le quita en proporción a la cantidad de dinero que tiene. En números, si una persona tuviera el 0.00001% del circulante de un país, pero otra el 0.00002%, a la segunda la emisión le impactaría el doble. </UL>

        <UL> 32. Pero a cada uno la emisión le dolerá más en proporción al peso que tenga esa tenencia de dinero en su propio patrimonio: Al pobre, cuyo único patrimonio es el dinero que cobró a principio de mes y tiene que durarle hasta principios del mes que viene, es a quien más le afecta en su patrimonio y poder de consumo. </UL>

        <UL> 33. Igualmente, el otro lugar favorito de confiscación emisionista está en los contratos previamente cerrados: el propietario de un inmueble rentado, el acreedor de una deuda y el empleado pierden valor porque es como si el dinero ya lo tuviesen pero lo tuvieran inutilizable hasta las fechas pactadas. </UL>

        <UL> 34. La emisión causa una redistribución del valor del dinero a favor del Estado, independientemente de que cause inflación o no. </UL>

        <UL> 35. La única excepción sería un caso donde los precios no pueden subir porque hay recesión pero, al mismo tiempo, se resisten a bajar, por el motivo que fuese (como el estado de endeudamiento de los vendedores o por contratos cerrados o por expetativas de crecimiento de los precios). Parece haber sido el caso en el <i>crash</i> de 1929-1933, como veremos. </UL>


        <SUBTITLE> INFLACIÓN Y CRÉDITO </SUBTITLE>

        <UL> 36. Cuando la inflación crece, es más probable que se acelere todavía más. Por eso es que los créditos se vuelven sumamente caros en los países inflacionarios, porque el riesgo que asume el acreedor es muy alto y se cubre exigiendo una tasa alta. </UL>

        <UL> 37. En los países inflacionarios, hay pocas inversiones y poco crédito hipotecario, poca construcción, mucho alquiler pero caro... El progreso económico de la sociedad se detiene para poder asistir al presupuesto del Estado. </UL>


        <SUBTITLE> CRISIS Y EMISIÓN </SUBTITLE>

        <UL> 38. Cuando sobreviene una crisis, hay dos reacciones opuestas en diferentes países donde los Estados han secuestrado el mercado del dinero. En los países con larga tradición de mantener baja la inflación, los ciudadanos se resisten mucho más que antes a desprenderse del dinero: cancelan compras, viajes, postergan inversiones y exigen precios más bajos para comprar algo. A su vez, los que no tienen dinero están dispuestos a aceptar menos con tal de tener algún ahorro líquido para hacer frente a lo que pueda ocurrir. </UL>

        <UL> 39. Lo primero significa una contracción de la oferta privada de dinero, y lo segundo, una expansión de la demanda de dinero. Mirar el gráfico donde la curva de oferta se va a la izquierda pero la de demanda a la derecha. </UL>

        <UL> 40. Sobrevendría una gran deflación si el Estado no hiciera una fuerte expansión de la oferta pública de dinero (cuyo financiamiento se haría con emisión), sea vía gasto público deficitario o vía créditos bancarios (o devaluación). Esto suele ser un problema porque hace quebrar a los endeudados, pero es un tema para los posteos sobre la teoría del capital y los ciclos y la Gran Depresión. </UL>

        <UL> 41. Muy por el contrario, hay países con tradición inflacionista e hiperinflacionista, donde los privados huyen de la moneda nacional cada vez que sobreviene una crisis. Lo que se espera del Estado en estos países es lo opuesto: que reduzca la oferta de dinero al ritmo en que los privados la aumentan. </UL>

        <IMAGECENTER src={`${rootPath}frontend-src/15/15b.jpg`} />

        <UL> 42. Pero no es la tradición inflacionista e hiperinflacionista lo que estimula este comportamiento (porque la memoria financiera de los pueblos se resetea cada 10 años) sino la realidad presente de que el gobierno tercermundista se halla: incapacitado de aumentar los impuestos porque ya ha saturado de impuestos a su población como si de un ejército de ocupación se tratase; tan endeudado que no conseguirá nuevos créditos durante la recesión; totalmente imposibilitado de reducir el gasto porque grupos grandes y poderosos se alimentan de cada centavo que sale del Estado. </UL>


        <SUBTITLE> HIPERINFLACIÓN </SUBTITLE>

        <UL> 43. Una emisión alta en curso para financiar a un Estado fuertemente deficitario dispara también la oferta privada de dinero. Con ambos componentes de la oferta de dinero muy aumentados (uno por la emisión y otro por la huída), el resultado lleva a hiperinflación. </UL>

        <UL> 44. La hiperinflación surge siempre de una crisis de financiamiento del Estado socialista. Su trasfondo es que la tasa de inflación es siempre más alta que la tasa de emisión porque el mercado se desprende del dinero que emite el Estado. El Estado emite desesperadamente porque el dinero nunca le alcanza; los precios siempre le ganan. </UL>

        <UL> 45. Si cantidad de dinero en circulación dividido producto interno midiera la monetización de la economía, ese es el índice que se desploma durante una hiperinflación. La economía se queda sin dinero, en sentido relativo; o, lo que es lo mismo, muere el signo monetario y la sociedad busca otras formas de intercambiar. </UL>

        <UL> 46. La moneda nacional —instrumento opresor del Estado socialista— es despreciada por la sociedad. Porque en política el invento siempre revienta al inventor. </UL>


        <SUBTITLE> EL ROL DE LA DEMANDA DE DINERO </SUBTITLE>

        <UL> 47. Contradecimos a todas las escuelas de pensamiento económico en la manera de usar (también) el concepto de "demanda de dinero". La definimos como la voluntad de desprenderse de bienes y activos y de dar servicios para conseguir dinero. </UL>

        <UL> 48. Esta demanda de dinero es un factor secundario a la hora de explicar la inflación porque tiene una naturaleza coercitiva. El comerciante, el empresario, el trabajador y el autónomo están obligados a vender a cambio de la moneda del Estado local. </UL>

        <UL> 49. Demandar dinero significa querer vender cosas y en tiempos de crisis todos quieren vender más aunque el dinero se esté desvalorizando. En todo caso, la misma persona será un gran demandante de dinero y, cuando reciba dinero, será un ofertante de dinero aun más decidido. </UL>

        <UL> 50. El gobierno socialista intenta aumentar coercitivamente la demanda de dinero para que la moneda no pierda valor al ritmo de la emisión. Establece precios máximos y controles policíacos de precios. Quiere que el mercado acepte dinero por las malas. Intenta correr la curva de demanda de dinero hacia la derecha. </UL>

        <UL> 51. Lo que se percibe como contracción de la demanda de dinero ("la gente no quiere el dinero y por eso se deshace de él ni bien lo recibe") en verdad es (en nuestro esquema explicativo) una expansión de la oferta privada de dinero. </UL>

        <UL> 52. El mercado, en realidad, demanda más dinero cuanto más se deprecia... lo cual es otra forma de decir que los precios suben. Los vendedores de bienes y servicios demandan más dinero por cada bien o servicio a la venta. La función de demanda de dinero no debería, en principio, modificarse durante los procesos inflacionarios. </UL>

        <UL> 53. Luego ocurre que el efecto redistribución de valor a favor del gobierno arruina al sector privado y se produce menos. Ahí es cuando la demanda de dinero verdaderamente se contrae y agrava la inflación. </UL>

        <UL> 54. Contrariamente a lo que dicen economistas de todos los tipos, los ahorros bancarios no neutralizan la demanda de dinero (en el sentido que le dan ellos) ni la oferta de dinero (en el sentido que le damos nosotros). Ese dinero cambia de manos; es oferta de dinero que se suma a la cantidad tranzada. </UL>

        <UL> 55. Lo que suele ocurrir en el tercer mundo es que personas decidan bancarizar sus ahorros en vez de comprar moneda extranjera y ese dinero termina en consumo o inversión en vez de alimentar una devaluación. Pero la inflación no es un fenómeno cambiario; es un fenómeno monetario, se determina en el mercado de dinero de la moneda nacional. </UL>


        <SUBTITLE> EFECTOS EXPANSIVOS </SUBTITLE> 

        <UL> 56. ¿Puede la emisión reactivar o estimular la economía? Nótese que el producto matemático de la cantidad de dinero que circula en un período (M* en el gráfico) y su poder adquisitivo es un índice de producción, por la simple razón de que el índice de poder adquisitivo es la inversa del nivel de precios: </UL>

        <CENTER>
            <UL> M* = Q . P </UL>
            <UL> M* . P<sup>-1</sup> = Q </UL>
        </CENTER>

        <UL> 57. Por tanto, la posibilidad de que el aumento de M* por un aumento de la oferta pública de dinero -causada por una emisión- haga crecer el índice de producción depende de la reacción de la demanda de dinero y de la oferta privada de dinero. </UL>

        <UL> 58. Aunque este índice de producción incluye bienes y servicios intermedios, sigue siendo cierto que si, por ejemplo, una fuerte emisión duplica la circulación de dinero pero reduce a la mitad su poder adquisitivo, el resultado final sobre la actividad es nulo y solo sirve para el saqueo estatal. Pero si no reduce tanto el poder adquisivo, su resultado es expansivo. </UL>

        <UL> 59. Hay muchos estudios que demuestran que la emisión fuerte (la que reduce las tasas de interés) sí tiene un efecto expansivo de corto plazo, que se va diluyendo con el tiempo y da paso a la inflación después. Ver las secciones dedicadas a Consumo y Crecimiento y a la Teoría del Capital. </UL>


        <SUBTITLE> CONCLUSIÓN </SUBTITLE>

        <UL> 60. Se entiende de todo esto que la cantidad de dinero —determinada unilateralmente por el directorio del Banco Central— participa de la determinación de la inflación de una manera indirecta. </UL>

        <UL> 61. La inflación es determinada por la interacción de la oferta y la demanda de dinero; a su vez, la oferta de dinero tiene dos componentes: oferta privada y oferta pública; y, finalmente, la cantidad de dinero es un componente que explica —en parte— la oferta pública de dinero. Y es a través de todo este rodeo que la emisión monetaria influye en la inflación. </UL>

        <UL> 62. La inflación es un fenómeno monetario siempre y en todo lugar, en el sentido de que es determinada en el mercado de dinero. </UL>

        <UL> 63. Se ve con toda claridad lo que concluyera Milton Friedman y es una verdad incuestionable: la inflación es siempre y en todo lugar un fenómeno monetario, es decir, que surge en el mercado de dinero a causa de una mala administración del monopolio estatal de la moneda estatal. </UL>

        <UL> 64. No es un fenómeno redistributivo: no se debe a que los trabajadores hayan forzado aumentos salariales mediante leyes o gracias a leyes, ni a que haya concentración en los rubros de la canasta básica, ni es debida a alta presión impositiva, ni mucho menos se debe a codiciosos especuladores que intenten causar una escasez artificial para después vender muy caro. </UL>

        <UL> 65. No es un fenómeno cambiario: no se debe a que se haya devaluado la moneda frente a las extranjeras o a que hayan cambiado los términos del intercambio entre commodities y productos industrializados. </UL>

        <UL> 66. Tampoco es un fenómeno contractual: no se debe a que la expectativa de inflación se refleje en contratos de precios futuros. </UL>

        <UL> 67. La inflación la causa un excedente relativo de dinero que desequilibra a muchos mercados de bienes, servicios y monedas extranjeras a la vez. La causa la emisión excesiva del banco central, o la causa la negativa del banco central de retirar circulante cuando es necesario. </UL>

        <UL> 68. La inflación sí es multicausal en el sentido de que muchos factores alteran el mercado de dinero; pero si el Banco Central hiciese siempre lo que tiene que hacer, la inflación no existiría, sin importar ninguno de esos muchos factores. </UL>

        <UL> 69. Para decirlo de una vez: Hay muchas causas de inflación... pero hay una única causa para que no haya inflación, y es la intervención del banco central. </UL>

        <UL> 70. Cualquiera de esos factores puede aumentar el costo de la vida. Sin embargo, la inflación es otra cosa. Si oligopolios aumentan ciertos precios, podemos leerlo como una contracción de la demanda de dinero que causaría inflación. Pero para eso tenemos un banco central, para que contraiga la oferta pública de dinero y así salvar el valor de la moneda. </UL>

        <UL> 71. Mismo para la presión impositiva y para las devaluaciones: tienen que causar retroceso económico, no inflación. Habrá inflación si y solo si el banco central se niega a retirar circulante cuando pasen esas cosas. </UL>


        <SUBTITLE> LA INFLACIÓN Y EL SOCIALISTA </SUBTITLE>

        <UL> 72. El socialista jamás se detiene a estudiar economía y se deja llevar fácilmente por argumentos incorrectos si —de acuerdo a la técnica del <i>doble pensar</i>, tal como se describe en el libro <i>1984</i>— esos argumentos incorrectos le son funcionales a la victoria del socialismo sobre la sociedad libre. </UL>

        <UL> 73. Así es como, solo después de la mano invisible, el concepto de la inflación como un fenómeno de naturaleza estrictamente monetaria le resulta ridículo y se burla de él. Él entendió mal; cree que la inflación como un fenómeno monetario significa que debería existir una causalidad total y proporcional entre inflación y emisión, del tipo: </UL>

        <CENTER>
            <UL> INFLACIÓN &nbsp;=&nbsp; EMISIÓN &nbsp;-&nbsp; CRECIMIENTO ECONÓMICO </UL>
        </CENTER>

        <UL>, tal que, si una economía crece 3% pero emite 8% tendrá 5% de inflación. Eso es lo que entiende por teoría monetaria. Cuando ve que esta fórmula no se cumple en la práctica, se mofa del monetarismo y se hace más socialistas que antes. En esta sección le dejamos una explicación que cualquiera puede entender. </UL>

        <UL> 74. La inflación sucede siempre y en todo lugar por una sola causa: el Estado crea su propia moneda de papel y banco, monopoliza su emisión, obliga a usarla como único medio para las transacciones locales y luego administra mal la cantidad de circulante para lograr que el Estado avance sobre la gente, sea porque emite de más o sea porque se niega a retirar circulante cuando se dispara la oferta privada de dinero o se achica la economía. </UL>

        <UL> 75. Antes de los bancos centrales, el crecimiento económico se daba con caída de precios. Ahora, cada vez que hay un impulso económico, los gobiernos abren la boca para llevarse una porción más grande. Por eso se crece a pesar del Estado (con inflación), no gracias al Estado. </UL>

        <UL> 76. Y no olvidar esta cuestión central: cuando el Estado emite, no reparte el dinero nuevo entre la gente en proporción a lo que cada uno ya tiene sino que lo gasta o lo presta él mismo. Logra una redistribución del valor a su favor, y se ha demostrado que a quienes más les quita en proporción al ingreso es a los pobres que el gobierno dice defender. La inflación es un fenómeno socialista. </UL>

    </div>
    )
}