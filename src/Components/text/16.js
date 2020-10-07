import React, { useEffect } from 'react'
import { CHAPIMAGE, TITLE2, UL, SUBTITLE, SPECIALRIGHT } from '../css/css'


export const V16 = () => {

    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
    <div>
        
        <CHAPIMAGE src="/frontend-src/16/16.jpg" />

        <TITLE2> XVI. ¿QUÉ PASA CON LOS BANCOS CENTRALES? </TITLE2>

        <UL> 1. ¿Por qué el dinero es un billete de banco o un depósito nominal figurativo en un banco? ¿Por qué todo el mundo está endeudado con los bancos? ¿Por qué tenemos una crisis cada 10 años desde mediados del siglo XIX? ¿Por qué existen los bancos centrales? ¿Por qué se prohibieron las monedas de plata y oro? ¿Por qué parece que los bancos centrales lo arruinan todo? </UL>

        <UL> 2. Se procede en este orden: primero se estudia la naturaleza del dinero moderno, luego la razón de ser del banco central y, por último, el viejo patrón oro. </UL>


        <SUBTITLE> DINERO, CRÉDITO Y BANCOS </SUBTITLE>

        <UL> 3. En la sociedad moderna, hay 2 formas de dinero que coexisten: el dinero material y el dinero de banco. El primero está hecho de papel o monedas, y el dinero de banco está hecho de depósitos en cuentas a la vista, que son valores que aparecen en cuentas de los clientes y están listos para ser usados como medios de pago (depósitos en cuenta corriente, caja de ahorro, cuenta sueldo, etc.). Ambas formas son, usualmente, intercambiables. </UL>

        <UL> 4. ¿Por qué el dinero de banco es realmente dinero? Porque puede ser usado por medio de transferencias, cheques al día, tarjetas de débito y medios electrónicos. Y no hay nada que lo diferencie del dinero físico en cuento a funcionalidad. </UL>

        <UL> 5. ¿Cómo se crea el dinero de banco? Hay dos métodos: Cuando la gente deposita dinero material en una cuenta a la vista y entonces el banco presta ese dinero físico a otro cliente, duplicando la cantidad de dinero inicial. Y cuando el banco simplemente presta dinero a sus clientes anotando en sus cuentas que tienen dinero nuevo, aunque no cuenten con dinero físico para respaldarlo. </UL>

        <UL> 6. Por estas dos vías, los bancos son capaces de prestar dinero a interés pero sin tener que pagar intereses por ese dinero, despreciando a los ahorristas, a quienes sí tienen que pagarles. Pero (en sentido funcional) ese dinero que crean en realidad es del Estado (y sí tienen que compartir la renta con él). </UL>

        <UL> 7. Muchos creen que un banco es una institución financiera, o sea que su negocio principal es tomar dinero de los ahorristas y prestarlo a inversores, cobrando un diferencial de tasas. Pero el principal negocio de la banca es prestar dinero que crean de la nada, mediante mecanismos institucionales tecnológicos. </UL>


        <SUBTITLE> LA RESERVA FRACCIONARIA </SUBTITLE>

        <UL> 8. Pero todo banco necesita conservar alguna cantidad de dinero material para hacer funcionar al sistema (para hacer que ambas formas de dinero sea intercambiables). Esa cantidad suele ser de entre 10% y 20% del total de depósitos a la vista, un porcentaje que se conoce como coeficiente de encaje o radio de reserva. </UL>

        <UL> 9. Hay, luego, un cálculo muy sencillo: La cantidad de dinero bancario en la economía es de 5 a 10 veces la cantidad de dinero físico que los bancos tienen en reserva (dependiendo del coeficiente de encaje). Así, la cantidad de dinero material en los bancos (que depende, sobre todo, de la confianza en los bancos) limita la creación de dinero de banco. </UL>

        <UL> 10. ¿Qué sucede si muchos clientes de un banco retiran mucho dinero físico, es decir, cambian dinero bancario por dinero material? La reserva de dinero físico en un banco es bastante limitada en comparación con el dinero en depósitos a la vista. El banco tiene que salir a pedir prestado, o a vender activos. </UL>


        <SUBTITLE> PÁNICO BANCARIO </SUBTITLE>

        <UL> 11. Pero ¿qué pasa si muchos bancos sufren retiros de efectivo de muchos clientes al mismo tiempo? Los costos de los préstamos suben abruptamente y los valores de los activos que los bancos salen a vender caen. Los patrimonios netos de los bancos se hacen negativos y no pueden cumplir las obligaciones. El problema de iliquidez se convierte en problema de solvencia. Se llama a la bancarrota, y los ahorros de los clientes se pierden (o se devuelven parcialmente). </UL>

        <UL> 12. El temor de que esto pase amontona a los clientes en los bancos para transformar el dinero virtual en dinero físico antes de que sea tarde. Es una corrida bancaria, o pánico bancario, un hábito del sistema que ocurría cada 8 o 10 años. </UL>

        <UL> 13. ¿Por qué la gente acepta depositar dinero en bancos inestables? Los bancos que conservaban el dinero físico de sus clientes en vez de prestarlo fueron incapaces de competir con los bancos creadores de dinero a causa de la inflación que causaban ellos, así que cerraron o se refundaron como bancos emisores. </UL>


        <SUBTITLE> CANTIDAD DE CIRCULANTE </SUBTITLE>

        <UL> 14. Así como la cantidad de dinero circulante se expande fuertemente cuando los bancos reducen el coeficiente de encaje, también se contrae fuertemente cuando lo suben. Por ejemplo, si las reservas son del 20% y bajan al 10%, la cantidad de dinero de banco se expande 100%. Pero si vuelve a subir a 20%, la cantidad de circulante bancario se contrae 50%. Una economía que sufre esos cambios extremos nunca puede ser estable. </UL>

        <UL> 15. El impacto que estos cambios en la cantidad de dinero bancario puede tener sobre la actividad económica, los precios, el empleo y la inversión depende de cuán importante sea el dinero de banco en la economía. Tenía poca importancia cuando la economía se movía esencialmente con monedas de plata y oro, y tiene una importancia superlativa desde que esas monedas fueron prohibidas. </UL>

        <UL> 16. Este es el motivo por el cual los banqueros privados tuvieron en sus manos la "política monetaria" de los países antes de que los Estados tomaran el control. Y es también el motivo por el que los pánicos bancarios se fueron haciendo cada vez más fuertes hasta que el mundo estalló por el aire en 1930. </UL>


        <SUBTITLE> CÁRTELES DE LA BANCA </SUBTITLE>

        <UL> 17. La generalización del dinero bancario daba a los grandes banqueros la posibilidad de acordar entre ellos para cambiar la cantidad de dinero en el país de manera abrupta, coordinando subidas y bajadas en los radios de reservas de efectivo (o sea, negándose a renovar préstamos a sus clientes). </UL>

        <UL> 18. Pero también esparciendo rumores desde la prensa acerca de supuestos problemas de insolvencia de algunos bancos competidores, causándoles retiros y obligándolos a participar de la coordinación de "política monetaria", pero sin encontrarse preparados con mucho efectivo de reserva. </UL>

        <UL> 19. Durante las crisis desatadas por estas fuertes perturbaciones, los miembros del cártel podían comprar compañías y tierras a precios de remate, y prestar dinero a tasas muy altas (al gobierno en particular). Pero también lograr la quiebra de los bancos competidores, no informados de la fecha de la corrida, al tiempo de ganar para ellos la reputación de ser bancos especialmente solventes, que se preocupan por los ahorros de sus clientes. </UL>

        <UL> 20. Como el juego de la silla pero conociendo de antemano el momento en que la música se detendrá, porque ellos mismos manejaban la música. </UL>

        <UL> 21. Si la creación de dinero bancario es el negocio perfecto, ¿por qué no crece desmedidamente el número de bancos? La cantidad de bancos en cada país era, de hecho, enorme en otros tiempos. Pero fueron arrasados por incontables crisis periódicas entre los siglos XIX y XX. (La cantidad de bancos que cerraron en el <i>crack</i> de 1929-1933 en EE.UU., por ejemplo, fue de un tercio del total.) Y hoy ya no es fácil iniciar un nuevo banco desde cero y entrar a competir con bancos en simbiosis con el Estado. </UL>

        <UL> 22. Los pocos bancos que han sobrevivido a esta "preservación de bancos favorecidos en la lucha por la vida" han formado un cártel pacífico bajo la bendición de la gente en general y de los bancos centrales en particular. </UL>


        <SUBTITLE> RECAPITULACIÓN SOBRE RESERVA<br/>FRACCIONARIA </SUBTITLE>

        <UL> 23. Para recapitular, la "creación secundaria de dinero" (como se le llama) tiene 4 implicaciones: </UL>

        <SPECIALRIGHT>
            <UL> (1°) da beneficios estratosféricos a los bancos comerciales; </UL>
            <UL> (2°) pone la "política monetaria" de los países en manos de los bancos comerciales; </UL>
            <UL> (3°) causa elevada inestabilidad; </UL>
            <UL> (4°) deja servida la posibilidad de acciones coordinadas de los grandes bancos contra los menores y contra la sociedad en general. </UL>
        </SPECIALRIGHT>

        <UL> 24. Crisis recurrentes, control sobre la sociedad y rentas condujeron a oligopolios bancarios que devoraron las riquezas de las naciones mediante el privilegio de abastecer a la economía de dinero a interés a perpetuidad. </UL>


        <SUBTITLE> EL BANCO CENTRAL DE<br/>PRIMERA GENERACIÓN </SUBTITLE>

        <UL> 25. El banco central originalmente fue promocionado como el prestamista de última instancia que podría prevenir los pánicos bancarios, por esta idea sencilla: si lo que causa los pánicos es el faltante de efectivo, un órgano emisor podría emitirlo y prestárselo a los bancos con problemas de liquidez. La sola existencia de un prestamista de última instancia tendría que eliminar toda posibilidad de corrida bancaria. Así fue promocionado por el cártel de banqueros. </UL>

        <UL> 26. Sin embargo, los bancos centrales de primera generación fueron bancos privados dirigidos por los bancos más grandes de cada país, y su papel no era evitar el pánico sino en los pánicos salvar a los bancos que quisiera y dejar quebrar a los demás. </UL>

        <UL> 27. El banco central fue una creación de los grandes bancos, que recurrieron al engaño, el soborno, la compra de periodistas, el financiamiento de campañas políticas y golpes de Estado, amenazas, asesinatos, para lograr las leyes que se necesitaban. El acuerdo entre banqueros y políticos significó, en cada país, darles lo que pedían a cambio de que este superbanco prestara a los gobiernos todo el dinero que quisieran. </UL>


        <SUBTITLE> PATRÓN ORO | STANDARD GOLD </SUBTITLE>

        <UL> 28. Los bancos centrales nacieron con la hipotética doble meta de lograr la estabilidad bancaria (cumpliendo función de prestamista de última instancia) y, al mismo tiempo, lograr cierta tasa constante de intercambio entre el oro y la "moneda nacional" (billetes y depósitos). </UL>

        <UL> 29. El patrón oro era un régimen cambiario bajo el cual el dinero en papel moneda podía ser cambiado por oro a una tasa fija garantizada por el banco emisor, siendo la cantidad de dinero en papel moneda circulante de 5 a 10 veces la cantidad de oro en las reservas del banco emisor, de acuerdo a la tasa de cambio. </UL>

        <UL> 30. La cantidad de dinero bancario era también de 5 a 10 veces la cantidad de dinero físico en reserva. Por tanto, la cantidad de dinero bancario podía llegar a ser de hasta 100 veces la cantidad de oro de respaldo (en su equivalencia). </UL>

        <UL> 31. Se repiten y multiplican los problemas: más inestabilidad, más ganancias espectaculares para el cártel de bancos, más poder sobre la economía y más capacidad de acciones coordinadas. La problemática del sistema monetario de reserva fraccionaria multiplicado por 5 o por 10. </UL>


        <SUBTITLE> DOBLE META IMPOSIBLE </SUBTITLE>

        <UL> 32. Bajo el patrón oro, el tipo de cambio se protegía de perturbaciones de manera automática: el dinero usado para comprar reservas salía de circulación, y que, a su vez, causaba reducción de la cantidad de dinero bancario por menor renovación de créditos. Con menos circulante (papel moneda y "depósitos" en cuentas a la vista), la economía entraba en recesión hasta que la deflación de precios aumentara la productividad internacional de la economía. </UL>

        <UL> 33. Sucede que bajo este sistema una corrida bancaria termina causando una corrida cambiaria porque el retiro de fondos de los bancos puede provocar una devaluación, si el pánico se generaliza y el banco emisor decide salvar a los bancos. </UL>

        <UL> 34. Pero también sucede que toda corrida cambiaria puede terminar causando una corrida bancaria porque los clientes de los bancos quieren retirar dinero para comprar oro antes de que se devalúe, poniendo a la banca en crisis de solvencia. </UL>

        <UL> 35. Y ante un pánico que sea tanto bancario como cambiario, el banco central "prestamista de última instancia" se ve obligado a decidir si emitir para salvar a los bancos o no emitir para salvar al tipo de cambio. Es una dicotomía. La doble meta para el banco emisor de ser prestamista de última instancias que erradicara los pánicos bancarios y, a su vez, guardián del <i>standard gold</i> era una doble meta imposible. Había un problema sin solución porque el dinero extranjero y el oro no se pueden imprimir. </UL>

        <UL> 36. Así, los directorios de los bancos centrales tuvieron los desafíos de elegir entre salvar a los bancos y a sus ahorristas, o salvar al tipo de cambio, en la era de los tipos de cambio fijo (1694-1971). En la práctica, los bancos centrales defendían el tipo de cambio y se limitaban a salvar a algunos bancos a discreción. </UL>

        <UL> 37. La idea de terminar con los pánicos bancarios mediante un banco central prestamista de última instancia parecía buena. Pero no lo fue porque el patrón oro gobernaba el mundo. </UL>


        <SUBTITLE> IMPORTANCIA DEL PATRÓN ORO </SUBTITLE>

        <UL> 38. El tipo de cambio fijo era muy importante para el cártel bancario, mientras que la quiebra de los bancos (competidores) le era muy beneficiosa. Por eso es que los pánicos bancarios-cambiarios continuaron ocurriendo cada 8 o 10 años a pesar de la existencia del "prestamista de última instancia", que había sido establecido por la influencia indetenible del <i>lobby</i> bancario. </UL>

        <UL> 39. Cuando el sistema monetario obliga a la deflación a una economía para salvar al tipo de cambio, lo que hace es socializar las pérdidas que causa la inestabilidad inherente al doble sistema de reserva fraccionaria (oro papel moneda y papel moneda dinero bancario). La sociedad entera tiene que sufrir a pérdida de ingresos, desempleo, quiebras, endeudamiento del Estado, ajuste del Estado y encarecimiento del crédito para que el sistema monetario sobreviva a la crisis. Los bancos comerciales se llevan las ganancias (cuando hay ganancias) pero reparten las pérdidas (cuando hay pérdidas) con el resto de la sociedad. </UL>

        <UL> 40. Finalmente pero no menos importante, el patrón oro permitía al cártel bancario controlar enteramente la economía coordinando las compras y ventas de oro, o causando oleadas compradoras y vendedoras desde los encajes bancarios, generando ciclos, poniendo a los gobiernos a su merced. </UL>

        <UL> 41. El Estado da "estabilidad al sistema financiero" (como reza el primer artículo de toda ley carta orgánida de banco central), donde estabilidad significa dejar todo como está, como fue impuesto. Y pide a cambio una participación en el botín, por supuesto. </UL>


        <SUBTITLE> EL BANCO CENTRAL MODERNO </SUBTITLE>

        <UL> 42. El plan de erradicar los pánicos bancarios mediante la creación de bancos centrales privados no funcionó. El proyecto nació muerto. Era mentira del cártel de bancos. Entonces y luego de 1934, los políticos decidieron, no quitarles a los bancos comerciales este poder tiránico que habían conseguido, sino aumentar el control estatal sobre los bancos centrales respecto a la "política monetaria" y respecto a la asistencia a bancos en crisis. </UL>

        <UL> 43. Desde entonces, la cantidad de dinero circulante es determinada por las juntas de banco central de cada país (compartidas por el poder político y los grandes bancos) para lograr metas como bajar la inflación o aumentar el empleo o el crecimiento. (El estudio de este tema es para el capítulo 20.) Pero la verdadera razón de ser de estos bancos centrales es dar estabilidad a este aberrante sistema de creación bancaria de dinero. </UL>

        <UL> 44. Un banco central es, podríamos decir, el sindicato de los grandes banqueros. Pero es más que eso. Mas bien, es un órgano del Estado dedicado a la intervención de la economía para garantizar la funcionalidad del negocio de la emisión de dinero de banco y evitar que la cantidad de bancos se desborde. </UL>


        <SUBTITLE> RESPUESTAS </SUBTITLE>

        <UL> 45. ¿Por qué el dinero es un billete de banco o un depósito nominal figurativo en un banco? La distancia entre el ridículo costo de producción de estas formas de dinero y su valor de mercado es una renta monopólica que comparten los Estados con los cárteles de bancos. Por esto se prohibió el uso de monedas de oro y plata, que les eran competencia. </UL>

        <UL> 46. ¿Por qué todo el mundo está endeudado con los bancos? Porque la mayor parte del dinero nace del crédito bancario. Y cuando los créditos son devueltos (con interés), se ejecuta una contracción monetaria en la sociedad que empuja a tomar nuevos créditos. La banca está, así, en el eje gravitatorio de la economía, y tiene parasitada a la entera sociedad, pagando regalías por el uso del dinero. </UL>

        <UL> 47. ¿Por qué tenemos una crisis cada 10 años desde mediados del siglo XIX? Porque el sistema monetario es inestable. En otros tiempos, esa inestabilidad era muy funcional para garantizar los privilegios del Estado y de la oligarquía bancaria. Ahora la inestabilidad es solo la cosecha de las ideas socialistas que aplican los políticos (capítulo 20). </UL>

        <UL> 48. ¿Por qué existen los bancos centrales? Nacieron para que los grandes bancos pudieran imponerle sus condiciones a los más pequeños y para garantizar el funcionamiento del sistema bancario de reserva fraccionaria y el patrón oro. Y ahora se usan para generar ciclos económicos. </UL>

        <UL> 49. ¿Por qué parece que los bancos centrales lo arruinan todo? Porque no existen para el bien común sino para los intereses del Estado socialista y las empresas asociadas. Ni la banca ni el resto del mercado financiero, ni el mercado monetario, necesitan regulación estatal, sino un Estado que garantice el cumplimiento de los contratos entre privados. </UL>


        <SUBTITLE> COINCIDENCIA DE INTERESES </SUBTITLE>

        <UL> 50. El <i>lobby</i> de grandes bancos logró que los Estados crearan bancos centrales para su propio provecho y en contra de los intereses del bien común. Los socialistas, por su parte, dictaminaron que se necesita un banco central para dirigir o planificar la economía, para lograr el bien común. Por eso, ambos bandos están de acuerdo con dirigir la economía desde un banco central. </UL>

        <UL> 51. No están de acuerdo sobre quiénes tienen que ser los beneficiarios ni en cómo se tiene que usar el engendro. No obstante, la lógica del poder es una sola, y poner la economía al servicio del poder solo sirve para la concentración de poder y la ruina de los gobernados. El cártel internacional de bancos siempre fue más sabio que los intelectuales comunistas. </UL>

    </div>
    )
}