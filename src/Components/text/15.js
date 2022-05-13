import React, { useEffect } from 'react'
import { CHAPIMAGE, TITLE2, UL, SUBTITLE } from '../css/css'
import { data } from '../../chapters'

import { isLocalhost, rootPath, urlbase } from '../App'

export const V15 = () => {

    const url = urlbase + data[15].url
    useEffect(() => {window.scrollTo(0, 0); if(!isLocalhost)fetch(url)}, [url])

    return (
    <div>

        <CHAPIMAGE src={`${rootPath}frontend-src/18/18.jpg`} />

        <TITLE2> {data[15].number}. {data[15].title} </TITLE2>

        <UL> 1. No hay observador inteligente y justo en el mundo que no haya notado que el Fondo Monetario Internacional arruina todo país en el que interviene, causando grandes crisis, pánicos cambiarios, endeudamiento masivo de los Estados, quiebras, pobreza, inequidad, ajustes de salarios y poder de consumo popular, lucha de clases y corrupción. ¿Qué está pasando? </UL>


        <SUBTITLE> ORIGEN: 1944 </SUBTITLE>

        <UL> 2. Mucha gente cree que el FMI es una institución del capitalismo, a la vanguardia del liberalismo económico, un ícono del neoliberalismo anti socialista, una cúpula de economistas ultra ortodoxos. El FMI, sin embargo, es el hijo de John Keynes y el norteamericano Harry Dexter White. </UL>

        <UL> 3. John Keynes fue un firme y confeso admirador del nazismo, del fascismo y de la Unión Soviética, como consta en sus escritos, y Harry White, por su parte, fue descubierto como espía de la Unión Soviética y apareció muerto unas horas después de declarar ante el Comité de Actividades Anti Estadounidenses (<i>House Un-American Activities Committee</i>) del Congreso de Estado Unidos en 1948. </UL>

        <UL> 4. En el hotel de Bretton Woods, cuando EE.UU. y el Reino Unido discutían las instituciones de posguerra a mediados de 1944, Keynes fue el representante del gobierno británico, y White el representante de los americanos. </UL>


        <SUBTITLE> INTERPRETACIÓN SOCIALISTA DE<br/>LA CRISIS DEL PATRÓN ORO </SUBTITLE>

        <UL> 5. ¿Por qué? Porque la severidad de la Gran Depresión (1929-1933) y las dificultades de los años siguientes causaron una avanzada cultural del socialismo en ambos países. Por eso, para explicar la naturaleza del FMI, es conveniente comentar la visión socialista de lo que había pasado en el mundo desde la Primera Guerra Mundial, y especialmente desde 1929. </UL>

        <UL> 6. La visión predominante en el mundo capitalista era que las monedas de los Estados tenían que guardar una relación fija de intercambio con el oro. En caso de desajustes y pérdidas de reservas en los bancos emisores de papel moneda, el sistema mismo llevaba al equilibrio: La pérdida de reservas tenía como contracara la salida de circulación del dinero moneda nacional que se usaba para comprar oro. El ajuste en la cantidad de dinero circulante subía las tasas de interés, deprimía la economía y causaba deflación de precios, hasta detener la pérdida de reservas. </UL>

        <UL> 7. Pero el sistema patrón oro entró en crisis cuando el Reino Unido perdió sus reservas a causa del esfuerzo bélico, hacia 1918. Cuando hay pocas reservas, el mercado se apresura a comprar el poco oro que queda antes de que lo hagan los otros. Por esto, el período de entreguerras fue de crisis, devaluaciones y endeudamiento. </UL>

        <UL> 8. La interpretación socialista no fue que había que dejar de fijar el precio de las monedas estatales para que, en cambio, el mercado decidiera sus valores, de acuerdo a las cantidades de dinero emitido. La interpretación socialista fue que había que diseñar un esquema de intervención estatal, desde un organismo supranacional, para lograr que el patrón oro volviera a funcionar como antes de la guerra. Los Estados tenían que dirigir la economía, ahora a nivel internacional. </UL>


        <SUBTITLE> BORRADOR DE FMI Y NACIMIENTO (1944) </SUBTITLE>

        <UL> 9. El plan original de ellos Keynes y White en Bretton Woods para dirigir coercitivamente el mercado internacional de dinero era diferente al que finalmente fue aceptado por el Congreso norteamericano y el Parlamento británico. Hubo un artículo importantísimo que fue rechazado. </UL>

        <UL> 10. El plan original era: Los Estados miembros debían aportar de sus propias monedas para formar un fondo de monedas internacionales (de ahí el nombre). Luego, cuando un país tenía déficit de balanza de pagos (o sea que perdía reservas de oro, principalmente por importar más de lo exportado), ese país podía recibir monedas de los países con superávit de balanza de pagos. De esa manera, el préstamo resultaría en una expansión monetaria en los países superavitarios, que reduciría sus saldos exportables y aumentaría las importaciones, etcétera. </UL>
        
        <UL> 11. Así (razonaron), se lograría un mecanismo automático de equilibrio, buscando que cada país tuviese cantidades más o menos estables de reservas de oro, y, entonces, evitando devaluaciones en cadena por "contagio" de desequilibrios de balanza de pagos. Se buscaba darle vida a un engendro que diese respaldo a un sistema aberrante de intervención de los Estados en economía (el patrón oro); repetir la fórmula que había funcionado a políticos y banqueros en las décadas previas a 1914. </UL>

        <UL> 12. No obstante, el artículo que obligaba a los acreedores del FMI a hacer política monetaria expansiva (en contra de sus propios intereses) para ayudar a los países con déficits, obvio, no fue aprobado. EE.UU. y Reino Unido tenían superávit en aquellos años, y la idea de poner la soberanía monetaria en manos de un órgano supranacional les pareció terrible a congresistas y parlamentarios. Para ellos, el FMI era un remedio que los demás países podían probar, pero ellos no. </UL>

        <UL> 13. Lo que quedó es un organismo que presta dinero sacado del presupuesto regular y no de emisión, a discreción de cada gobierno. </UL>


        <SUBTITLE> AJUSTE Y PREGUNTA </SUBTITLE>

        <UL> 14. Piénsese ahora en la dinámica en la que entra un país con patrón oro que asume una deuda para hacer frente a una pérdida de reservas, sin que los países superavitarios hagan "macroeconomía" para ayudarlo. El "fortalecimiento de las reservas" hecho con monedas prestadas solo sirve para ganar tiempo, porque el préstamo luego tendrá que ser devuelto y con intereses. </UL>

        <UL> 15. El país gana tiempo, tiempo para tomar medidas que restablezcan el equilibrio (y, además, permitan generar un sobrante para devolver el crédito). ¿Cuáles son esas medidas? Todas las que signifiquen austeridad monetaria y fiscal. En definitiva, se busca una deflación que haga más competitiva a la economía (que exporte más y que importe menos). </UL>

        <UL> 16. Y aquí la pregunta clave: ¿Por que causar una fuerte recesión buscando que bajen los precios de toda la economía, provocando desempleo, endeudamiento, quiebras y conflictividad social, cuando lo único que se necesita es que se encarezcan los productos importados y los productos exportables? </UL>

        <UL> 17. Porque lo que causa una devaluación es encarecer los productos exportables y los importados, restableciendo el equilibrio externo sin necesidad de ningún otro ajuste. Fijar el tipo de cambio durante una salida de reservas, contrariamente, significa subsidiar a los productos extranjeros y atentar contra las exportaciones. </UL>


        <SUBTITLE> RESISTENCIA DE LOS PRECIOS A<br/>LA BAJA Y DEVALUACIONES </SUBTITLE>

        <UL> 18. El tipo de cambio es el valor que traduce todos los precios internacionales a precios nacionales. Es, por tanto, el precio más importante de toda la economía. Cuando cambia la tasa de cambio, cambian todos los precios. El tipo de cambio es el precio que puede lograr que todos los precios de una economía cambien súbitamente de un momento a otro, desde el punto de vista internacional. </UL>

        <UL> 19. Hay, como se sabe, una fuerte resistencia de los precios a la baja. Cuando se emite, los precios se apuran a aumentar, pero lo opuesto no es cierto. Una fuerte disciplina monetaria no logra una deflación fácilmente sino que se necesitan años de depresión, con desempleo alto y fundición general para que los precios bajen. </UL>

        <UL> 20. En cambio, devaluando se consigue que los precios bajen instantáneamente, desde el punto de vista extranjero. Y es lo que importa, porque el desequilibrio que se quiere corregir es de balanza de pagos internacionales. </UL>

        <UL> 21. Pero el concepto de devaluación es inadecuado porque se llama devaluación al aumento del precio fijado por el Estado para la divisa internacional. Cuando, en cambio, el Estado se sale del mercado cambiario y la moneda nacional estatal flota libremente en el mercado (de acuerdo a oferta y demanda), no hay por qué hablar de devaluación. El tipo de cambio deja de ser considerado una herramienta de política económica para ser simplemente una consecuencia de otros factores, para ser el precio que ajusta automáticamente para que nunca haya pérdidas de reservas y siempre se logre el máximo crecimiento del comercio exterior. </UL>

        <UL> 22. Por poner números, si una economía necesita que los precios caigan 10% para que se termine el déficit de balanza de pagos, se puede lograr con una recesión de un año y medio. Pero, también, se puede lograr con una devaluación de 10% que cause una recesión de tres meses. O, mejor aun, si el Estado no secuestra al mercado cambiario, la moneda ajusta instantáneamente, logrando la recesión más corta posible. </UL>


        <SUBTITLE> NATURALEZA SOCIALISTA DEL FMI </SUBTITLE>

        <UL> 23. Así se puede entender al Fondo Monetario Internacional como el engendro socialista que tiene como premisa que los Estados tienen que secuestrar al mercado cambiario para dirigir las economías desde los bancos centrales, porque los precios libres son malos y el tipo de cambio fijo es el mejor sistema posible, contra toda evidencia. </UL>

        <UL> 24. La flotación del tipo de cambio era el enemigo a abatir porque atentaban contra los intereses de los peces más gordos del sistema. El patrón oro es un sistema que permite al sector privado controlar plenamente la economía de todo país simplemente coordinando compras y ventas de oro, y multiplica los efectos del control del cártel de bancos sobre la economía desde el coeficiente de encaje bancario (capítulo 17). </UL>

        <UL> 25. Así, el <i>crash</i> de 1929 duró cuatro años porque el Estado federal de EE.UU. decidió mantener el tipo de cambio fijo en USD 20 la onza y esperar cuatro años a que los precios de la economía cayeran el 33% que se necesitaba, con 25% de desempleo y la quiebra del 33% de todos los bancos. Pero esta dirigencia política no aprendió la lección y quiso que el FMI fuese el respaldo internacional del patrón oro y del tipo de cambio fijo en particular, pero del sistema de emisión bancaria de dinero, en definitiva. </UL>


        <SUBTITLE> DESAJUSTE DE BALANZA DE PAGOS </SUBTITLE>

        <UL> 26. La idea en sí de prestar dinero para que el país en crisis pueda tener tiempo para ajustar ordenadamente no parece mala de por sí. Pero lo es si lo que se entiende por "ajustar" es hacer pedazos a todo un país para salvar los intereses de la banca, mientras se mata al comercio exterior por obligar a la gente a subsidiar importaciones y compras de activos externos para ahorro, y se penalizan las exportaciones negándoles el acceso a los precios que en realidad corresponden. </UL>

        <UL> 27. El concepto de déficit-superávit corresponde necesariamente a un régimen de tipo de cambio fijo o semi-flotante, es decir que supone que el Estado está metido en el mercado cambiario y lo dirige. En cambio, cuando el Estado no interfiere, el precio de la moneda nacional (medido en monedas extranjeras) sube y baja para que la cantidad de dinero nacional que se quiere vender sea siempre igual (a cada momento) a la cantidad que se quiere comprar. </UL>

        <UL> 28. Se entiende que las crisis de balanza de pagos son hijos directos y legítimos del secuestro estatal del mercado de cambios, aunque no reconocidos. Sin secuestro estatal del mercado de cambios no existe ni puede existir crisis de balanza de pagos alguna, jamás, y los conceptos de superávit y déficit no tienen razón de ser. </UL>

        <UL> 29. Una crisis de balanza de pagos es, entonces, una situación a la que se llega cuando el Estado lleva tiempo impidiendo al mercado llegar naturalmente al equilibrio, haciendo uso de sus reservas en el banco central (que, por cierto, obtuvo a pura coerción) y tomando deuda. </UL>

        <UL> 30. En cambio, lo natural es que una moneda estatal pierda valor internacional cuando pasan cosas malas (como una sequía, un auge importador o una perturbación política), estimulando nuevas exportaciones y reprimiendo las compras de activos externos, pero gane valor cuando pasen cosas buenas (inversiones extranjeras, nuevas exportaciones, etcétera). </UL>

        <UL> 31. Para ser extremadamente claros: un país con déficit de balanza de pagos no puede estar endeudando al Estado para que los productos importados sigan valiendo lo mismo (pero que se importe menos por empobrecimiento del país); necesita que se vendan más caros. Y tampoco se puede estar endeudando al Estado para que los productos de exportación se sigan vendiendo en el mercado interno al mismo precio (pero que se exporte más por empobrecimiento del propio país); necesita que se vendan más caros. Y tampoco se puede estar endeudando al Estado para que las companías financieras y la gente en general sigan comprando divisas extranjeras al mismo precio (pero que compren menos porque se empobrecen); necesita que se vendan más caras. </UL>

        <UL> 32. Júzguese cuál puede ser la utilidad de la zona euro cuando los países periféricos siempre están perdiendo productividad por orientar sus economías al consumo y al gasto público y tomando deuda. El ataque europeo al sistema de precios terminará mal. </UL>

        <UL> 33. En la práctica, el FMI termina haciendo préstamos a gobiernos socialistas que terminarán en grandes crisis, durante las cuales las grandes propiedades del tercer mundo serán vendidas a precio vil a grupos económicos extranjeros. Y los Estados, por su parte, terminarán endeudados hasta el cuello, para el saqueo impositivo ulterior. </UL>


        <SUBTITLE> RESERVAS </SUBTITLE>

        <UL> 34. Todo Estado genera una demanda para su propia moneda cuando obliga a sus ciudadanos a usarla en las transacciones locales. Luego, el Estado regula la cantidad de dinero para que no haya inflación. ¿Necesita el Estado una reserva de divisas extranjeras u oro para que el sistema funcione? No la necesita. </UL>

        <UL> 35. Para lo único que sirve una reserva de divisas extranjeras u oro es para luchar contra el sistema de precios. Pero el tipo de cambio libre no es un enemigo sino lo que hace que se multiplique el comercio exterior de los países, erradicando la pobreza. Porque el tipo de cambio es el precio más importante de la economía, y atentar contra él es la peor de todas las formas cuantitativas de intervención estatal en la economía. </UL>


        <SUBTITLE> NÉMESIS DEL FMI </SUBTITLE>

        <UL> 36. Se teme, por su parte, que la pérdida de valor internacional de la moneda nacional cause inflación. Pero la inflación no es un fenómeno cambiario sino monetario, y una devaluación no causa inflación excepto que el banco central local se niegue a reducir la cantidad de dinero circulante cuando se devalúa (capítulo 15). </UL>

        <UL> 37. Un aumento del tipo de cambio, entonces, no causa un proceso inflacionario sino un cambio de precios relativos a favor de exportadores y contrario a importadores; a favor de inversiones extranjeras y contrario a la compra de divisas extranjeras. Una ajuste en tasa de cambio es exactamente lo que necesita un país con "déficit de balanza de pagos" porque logra un ajuste del problema de manera instantánea, sin tener que secar la plaza y empobrecer a toda la nación. </UL>

        <UL> 38. Y una "devaluación" no puede ser contagiada en sentido amplificado, como si de una epidemia se tratara. Cada ajuste de moneda conlleva otros ajustes de moneda menores, de la misma forma que una persona en crisis trabajando muchas horas por día no causa una crisis en el mercado laboral, y una empresa al borde de la quiebra aumentando la producción y vendiendo más barato para salvarse no destruye al mercado donde vende. Las finanzas internacionales no necesitan un administrador o un director. </UL>

        <UL> 39. A diferencia de lo que dicen los socialistas, una liberación del tipo de cambio que cause un aumento de tipo de cambio no es una redistribución de recursos a favor de los exportadores ni en contra de los importadores, ni en contra de los ciudadanos que compran y venden en el mercado local. No hay redistribución del ingreso. </UL>

        <UL> 40. Redistribución del ingreso hay cuando el Estado financia el desequilibrio de balanza de pagos vendiendo reservas, que es una redistribución del ingreso a favor de los importadores y en contra de los exportadores, a favor de los compradores de divisas extranjeras y en contra de las inversiones en el país. Liberar al mercado pone fin a la redistribución del ingreso. </UL>


        <SUBTITLE> FIN DEL PATRÓN ORO </SUBTITLE>

        <UL> 41. En agosto de 1971, EE.UU. decidió que el dólar ya no iba a ser convertible a oro sino que iba a flotar libremente, de acuerdo a oferta y demanda. Más tarde, logró darle a la moneda una fuerte demanda transaccional por los acuerdos petroleros con Arabia Saudí. Y, después, mató la inflación (alta) con las reformas neoliberales de Reagan. Desde entonces, el dólar es la divisa internacional, en vez del oro. </UL>

        <UL> 42. ¿Cuál es la función del FMI, ahora que las potencias económicas dejan flotar sus monedas? El FMI insiste en que los países subdesarrollados mantengan la administración estatal de los mercados cambiarios, ahora de acuerdo a una paridad con el dólar. </UL>

        <UL> 43. ¿Qué sentido tiene mantener una paridad con una moneda que flota, o sea que cambia de valor todos los días de acuerdo a las necesidades económicas y financieras de los países que las emiten? Ninguno, realmente. Ahora el FMI es más dañino que antes. Es enemigo del más que beneficioso tipo de cambio libre para países pequeños, como antes, pero ahora multiplica su nocividad. </UL>

        <UL> 44. Hijos del Fondo Monetario fueron los gravísimos incidentes financieros de México (1994), tigres asiáticos (1997), Rusia (1998), Brasil (1998) y Argentina (1998-2002), por nombrar algunos. Todos países pequeños (comparados con las potencias) que eligieron tipo de cambio fijo cuando EE.UU. estaba haciendo "política monetaria expansiva". Y les fue muy bien, pero estallaron por el aire cuando EE.UU. empezó a hacer "política monetaria contractiva", de acuerdo a su propio ciclo económico. Países que se endeudaron con el FMI para intentar detener los pánicos cambiarios, sin éxito, obvio. </UL>

    </div>
    )
}