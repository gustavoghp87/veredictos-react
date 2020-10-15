import React, { useEffect } from 'react'
import { CHAPIMAGE, TITLE2, UL, SUBTITLE } from '../css/css'
import { data } from '../../chapters'
import { urlbase, isLocalhost } from '../../index'


export const V17 = () => {

    const url = urlbase + data[17].url
    useEffect(() => {window.scrollTo(0, 0); if(!isLocalhost)fetch(url)}, [])

    return (
    <div>

        <CHAPIMAGE src="/frontend-src/20/20.jpg" />

        <TITLE2> {data[17].number}. {data[17].title} </TITLE2>

        <UL> 1. En el artículo 7 se indagó acerca del origen de la prosperidad: si proviene del consumo o de la inversión, y si la promoción del consumo mediante "política monetaria expansiva" es una buena idea. Ahora hay que determinar si es buena idea promover la inversión mediante este mecanismo. </UL>

        <UL> 2. Como dijimos, la "política monetaria expansiva" consiste en una creación de dinero de parte de la banca comercial, que anota dinero nuevo en las cuentas de sus clientes por la orden/permiso del banco central. La nueva abundancia de créditos reduce las tasas de interés del sistema pero también impacta en el mercado de dinero a causa de la emisión. </UL>

        <UL> 3. Porque si, por ejemplo, el gobierno tuviese superávit fiscal y usara su excedente de dinero para ahorrarlo en la banca local, habría expansión crediticia sin expansión monetaria (una sociedad que ahorra más por imposición del gobierno). Pero jamás es el caso. </UL>

        <UL> 4. Hoy día, todo país tiene un banco central, y todos los Estados grandes hacen "política monetaria expansiva" cuando caen en recesión. ¿Cómo eran las cosas antes? </UL>


        <SUBTITLE> CICLO NATURAL </SUBTITLE>

        <UL> 5. Este es el ciclo natural: Los empresarios invertían para aumentar la producción y la gente trabajaba más. Como consecuencia, los precios caían porque las monedas eran hechas de plata u oro, y, por tanto, la cantidad de dinero era más o menos estática. Más tarde, los bajos precios detenían el impulso económico y suspendían los proyectos de inversión. </UL>

        <UL> 6. Las bajas ganancias hacían (en este momento del ciclo) que aumentara el interés por inversiones que aumentaran la productividad: compra de más bienes de capital e innovación. Pero también inversiones para el desarrollo de nuevos productos y para llegar a nuevos mercados. </UL>

        <UL> 7. Aparte, las industrias de bienes de consumo en crisis despedían empleados, que eran tomados por las industrias de bienes de capital e innovación. </UL>

        <UL> 8. Cuando las nuevas inversiones daban fruto en reducir costos, crear nuevos productos y llegar a nuevos mercados, comenzaba una nueva fase expansiva para la economía. </UL>

        <UL> 9. Este ciclo natural, repetido vez tras vez, causaba un incremento en la proporción de la población empleada en la producción de bienes de capital y en la investigación y el desarrollo, y una reducción en la proporción de la población empleada en la producción de bienes de consumo; como también una mayor capitalización relativa en las industrias dedicadas a la inversión, y una menor en las dedicadas al consumo. </UL>

        <UL> 10. La productividad de la economía crecía al mayor de los ritmos posibles, arrastrando al alza a los salarios pero enriqueciendo a la nación en general. </UL>
        
        <UL> 11. Esto (aproximadamente) es lo que la escuela austríaca de economistas llama "teoría del capital". </UL>

        <UL> 12. Resáltese la importancia que tenía la caída de rentabilidad (por saturación de los mercados) para el ulterior aumento de la inversión. Y cómo la deflación de precios no es vista como un enemigo sino como parte necesaria del ciclo del progreso. </UL>


        <SUBTITLE> CICLO KEYNESIANO:<br/>INICIO </SUBTITLE>

        <UL> 13. Pero en nuestros días los ciclos económicos son intervenidos por los gobiernos. Cuando el crecimiento se detiene o palidece, los bancos centrales aumentan el crédito barato mediante emisión monetaria. Es decir, le envían una circular a los bancos comerciales para informarles que tienen permiso para dar más crédito bancario sin respaldo a sus clientes. </UL>

        <UL> 14. Como parte de la actual cultura socialista mundial, dicen que el mercado necesita ayuda para evitar una recesión. No lo ven como el ciclo natural del capital, ni ven que los problemas de rentabilidad vayan a causar aumentos ulteriores y necesarios en la inversión en productividad, innovación, desarrollo y expansión de mercados. </UL>

        <UL> 15. Cuando este nuevo dinero entra al mercado como créditos, bajan las tasas de interés que los bancos pagan a los ahorristas, y muchos de estos ahorristas (despreciados por la banca) buscan otro lugar para llevar sus ahorros. Aparte, los beneficiarios de los nuevos créditos subsidiados tienen nuevo dinero para usar. ¿A dónde va todo este dinero, de unos y de otros? </UL>


        <SUBTITLE> CICLO KEYNESIANO:<br/>IMPULSO </SUBTITLE>

        <UL> 16. Hay, básicamente, tres destinos: llevar los ahorros a otro país, invertirlos en el mercado bursátil local y "consumirlos" en el país, por ejemplo comprando propiedades y vehículos. En el capítulo 7 se trataron el impulso al consumo y la "fuga" de capitales. </UL>

        <UL> 17. Como uno de los destinos es la capitalización de empresas en los mercados bursátiles (y por crédito directo), las compañías aumentan de valor hasta dar tasas de rendimiento más bajas, similares a las tasas de interés de los bancos (que bajaron). </UL>

        <UL> 18. Así sucede que la "política monetaria expansiva" causa aumentos tanto en el consumo como en la inversión, baja el desempleo, se disparan los activos bursátiles, aumenta la recaudación y mejora la aceptación del gobierno, mientras que la inflación no sube. Este auge evita que los ahorros se vayan del país, y hasta atrae inversiones extranjeras. ¿Qué tiene de malo todo esto? </UL>


        <SUBTITLE> CICLO KEYNESIANO:<br/>TIPOS DE INVERSIÓN </SUBTITLE>

        <UL> 19. Esta capitalización, a su vez, será usada por las empresas para invertir. ¿Pero invertir en qué? Si hubiese llegado la recesión por baja rentabilidad por precios de venta bajos, el nuevo capital se usaría principalmente para bajar costos, desarrollar nuevos productos y servicios y ganar nuevos mercados. Pero no es el caso porque la "política monetaria expansiva" ha causado un crecimiento del consumo. </UL>

        <UL> 20. Las empresas que están vendiendo mucho y necesitan más capital son las dedicadas a bienes y servicios de consumo. Pero no demandan capital para aumentar la productividad sino para aumentar la producción, que no es lo mismo. Compran más bienes de capital del mismo tipo que ya existe y contratan más empleados con la misma formación que antes. </UL>

        <UL> 21. Además, considerar lo que sucede en caso de que los inversores tengan "expectativas racionales". Sabrían que la bonanza que trae el crédito emisionista es temporal y solamente harían inversiones de corto plazo. </UL>


        <SUBTITLE> CICLO KEYNESIANO:<br/>MERCADO LABORAL</SUBTITLE>

        <UL> 22. Por su parte, la "política monetaria expansiva" hace que aumente la demanda laboral en el momento en que estaba destinada a disminuir. Cuando no se intervenían los ciclos, la recesión abastecía de trabajadores a las industrias que buscaban productividad. </UL>
        
        <UL> 23. Ahora, las industrias que busquen productividad y desarrollo tendrán que competir por los empleados con las industrias de bienes y servicios de consumo, pagando más. Natural, porque los recursos son limitados, no infinitos, y el Estado ha intervenido buscando un efecto cortoplacista reasignando recursos, creyéndose benefactor social. </UL>

        <UL> 24. Y también se diluyen los incentivos para capacitar a los empleados para que sean más productivos. Están muy ocupados atendiendo el impulso crediticio. </UL>


        <SUBTITLE> RECAPITULACIÓN </SUBTITLE>

        <UL> 25. La emisión genera aumento en el producto de este año, porque vuelca capitales al consumo. Es lo que los keynesianos llaman "estimulación de la demanda". Pero su otro efecto principal es redistribuir y reasignar los recursos hacia las industrias del consumo, en detrimento de las industrias de la productividad, porque es lo que la sociedad está demandando. </UL>
        
        <UL> 26. Con la demanda estimulada y la oferta bien financiada, se le da un nuevo impulso a la actividad económica. Pero nada de estas nuevas inversiones se ocupa en aumentos de productividad, innovación y desarrollo, reduciendo el crecimiento futuro por falta de productividad. En realidad, se sobreutilizan los bienes de capital que ya existen. La nación catabiliza su estructura productiva y su futuro económico. </UL>

        <UL> 27. La decisión política socialista de evitar una recesión emitiendo dinero para que haya más crédito da sus frutos iniciales. El sistema de precios ha sido perturbado, haciendo que los recursos de la sociedad se asignen de manera subóptima en sentido de Pareto. El gobierno evita el ciclo natural que orienta los recursos hacia las actividades que la harían más rica: productividad, innovación, desarrollo, nuevos mercados. </UL>

        <UL> 28. Así, el estímulo a la inversión que causa la "política monetaria expansiva" de esta era keynesiana solamente estimula la sobreutilización de lo que ya existe y castiga la búsqueda de productividad. Y hay, por su parte, presión sobre los trabajadores calificados. Todo esto sostenido con endeudamiento de la sociedad entera con los bancos. </UL>


        <SUBTITLE> CICLO KEYNESIANO:<br/>AGRAVANTE </SUBTITLE>

        <UL> 29. Con la economía en auge y la abundancia de crédito, reciben un inusual financiamiento emprendimientos muy novedosos y de dudosa rentabilidad futura. Además, se genera la creencia de que hay que comprar activos financieros porque van a seguir aumentando de valor, de forma que los bajos retornos proporcionales dejan de ser un impedimento al crecimiento de los activos bursátiles: burbuja financiera. </UL>

        <UL> 30. Más técnicamente y en palabras de la escuela austríaca, la creación de dinero bancario para evitar una recesión (o salir de una recesión) le da al mercado señales equivocadas y provoca errores masivos de inversión. Muchos de los nuevos créditos (subsidiados, financiados con la inflación de los demás) financia muchos proyectos destinados a fracasar, que ponen presión sobre los recursos productivos que ya existen. </UL>


        <SUBTITLE> CICLO KEYNESIANO:<br/>PERSISTENCIA </SUBTITLE>

        <UL> 31. Con las tasas reducidas por emisión, con el tiempo es cada vez menor la proporción de créditos que va a inversión y mayor la que va a consumo y al exterior. La economía corre detrás del aumento de la demanda agregada, aumentando los costos, mientras cosecha el problema de crecimiento. </UL>

        <UL> 32. La moneda se deprecia al ritmo de la huida de los ahorros que ya no quieren permanecer en un país donde se persigue a los que no consumen todo lo que tienen, más el ritmo de la emisión. </UL>

        <UL> 33. Las tasas de interés están bajas pero quieren volver a subir. Bajaron porque parte del poder adquisitivo de la moneda circulante fue extraído de sus propietarios y obligado a usarse como préstamos bancarios. Pero el efecto es transitorio porque aumentan la inflación y el riesgo de quiebra del sistema. </UL>
 
        <UL> 34. El banco central aumenta la tasa de emisión para evitar que las tasas vuelvan a subir. Pero si las tasas suben, llegará la recesión que se está queriendo evitar, agravada por la mala reasignación macroeconómica de recursos que causó la "política monetaria expansiva". Así, el precio de seguir postergando la crisis es alimentar exclusivamente la demanda (el consumo y los bienes de capital que ya existen), financiar más proyectos en burbuja y agrandar el problema de inflación y la "fuga" de capitales. La recesión postergada se convertirá en <i>crash</i> postergado. </UL>


        <SUBTITLE> CICLO KEYNESIANO:<br/>DESENLACE </SUBTITLE>

        <UL> 35. Hay un momento en que el banco central decide "aumentar" la tasa de interés de referencia. En realidad no la aumenta sino que la deja subir cuando deja de emitir. Cuando la inflación cede, se vende menos y baja el financiamiento a las empresas, se revela que muchos proyectos estaban destinados al fracaso. </UL>

        <UL> 36. Hay una primera oleada de quiebras. Muchos descubren que sus inversiones no darán los frutos que esperaban. Las empresas pierden valor súbitamente por expectativas de pérdidas. Venden menos y ya no reciben capitalización barata, mientras los costos crecen más rápido que los precios de venta. Hay desempleo y conflictividad, al tiempo que la inflación baja los salarios. </UL>

        <UL> 37. Pero si el banco central se obstina con su política, las tasas subirán de todos modos por aumento del riesgo y la incertidumbre, no importa cuánto se emita. Las burbujas estallan tarde o temprano, y termina siendo como cuando baja la marea y se ve lo que el agua ocultaba. </UL>

        <UL> 38. Comenzado este período de austeridad monetaria (real o relativa), no finalizará hasta que se haya destruído una gran porción del capital del país y así se restablezcan las tasas de ganancia y los planes de inversión y de ahorro. Cerrado el ciclo y comenzado uno nuevo, las inversiones en producción de bienes de capital que aumetan la productividad no ocurrieron. Los bancos y los políticos hicieron sus ganancias pero la sociedad perdió. </UL>


        <SUBTITLE> DICOTOMÍA EMPLEO O INFLACIÓN </SUBTITLE>

        <UL> 39. La conocida dicotomía entre empleo contra inflación no es natural sino que nace de aquí. La inflación tiene origen en la práctica sistemática de postergar recesiones, y para frenar la inflación hay que dejar llegar la recesión que se estaba postergando, pero también cosechar las quiebras y la destrucción de capital causadas por la práctica de la postergación en sí. </UL>

        <UL> 40. La inflación que causa la emisión es el precio que se paga para evitar que suba el desempleo en el corto plazo, y el desempleo es el precio que se paga por bajar la inflación. </UL>

        <UL> 41. Así, la inflación no es natural, como tampoco es natural el desempleo, como ni siquiera es natural la dicotomía empleo o inflación. No son fenómenos capitalistas sino fenómenos socialistas que responden a intereses creados y canalizados mediante la intervención coercitiva del Estado en la economía, para el perjuicio del bien común. </UL>

        <UL> 42. Por otra parte, hay todavía países que sabotean su propio comercio exterior para beneficiar a algunos grupos económicos locales y que, además, tienen problemas de inflación por la emisión y la constante devaluación de la moneda estatal nacional. Son países que ven tentador "abrir" la economía para que los productos importados baratos reduzcan un poco la inflación, pero al precio de hacer fundir a las empresas locales y dejar de producir. </UL>
        
        <UL> 43. Mucho más grave es cuando el Estado consigue dólares para subsidiar el tipo de cambio, por ejemplo dólares del FMI, que para eso está. Estos países tienen una dicotomía empleo contra inflación más grave que los otros. Otra vez: son problemas socialistas. </UL>


        <SUBTITLE> IMPOSIBILIDAD DE DEFLACIÓN </SUBTITLE>

        <UL> 44. Cada vez que hay un impulso económico, la tendencia natural de toda economía es a la deflación de precios. Pero, en ese contexto, los bancos centrales aprovechan y emiten dinero, porque se puede emitir sin causar inflación, solo evitando la deflación. Es el negocio de los políticos y de los bancos. Abren la boca para comer más que antes de lo que producen los demás. </UL>

        <UL> 45. Esto es tan universalmente cierto que el mensaje a los mercados termina siendo: nunca jamás volverá a haber una deflación de precios. Con esta expectativa de hierro como premisa, todos los créditos y contratos son hechos sobre la base de que jamás habrá devuelta una deflación. Si, luego, hubiese una deflación, todos los endeudados quebrarían, a causa de que los contratos se hicieron bajo esta premisa. </UL>

        <UL> 46. Considerar también que toda la sociedad está endeudada con la banca a causa del sistema monetario (capítulo 17). </UL>

        <UL> 47. Así, por culpa de la intervención de los Estados en economía por medio de los bancos centrales, la deflación de precios llega a ser enemigo de la estabilidad económica. La deflación ya no es el gran incentivador para mejorar los procesos que enriquecen a las naciones. Es, de hecho, el enemigo público número uno. No es natural, es socialista. </UL>


        <SUBTITLE> SALVATAJES </SUBTITLE>

        <UL> 48. No es lo mismo recesión que <i>crash</i> (seguidilla de quiebras en un contexto de contracción de la actividad), y no es lo mismo postergar una recesión que lidiar con un <i>crash</i> en marcha. En la era del patrón oro, la cantidad de dinero se desplomaba durante todo pánico bancario cambiario, de acuerdo a los mecanismos explicados en los capítulos 17 y 18, haciendo quebrar a todos los endeudados. </UL>

        <UL> 49. Pero ahora, en la era keynesiana (1934-1984) y en la era pos keynesiana actual, los bancos centrales responden emitiendo mucho (más que antes) para auxiliar a los endeudados y así evitar la quiebra de las unidades productivas. </UL>


        <SUBTITLE> REGALADOS SON CAROS </SUBTITLE>

        <UL> 50. La idea original de estimular siempre el auge por intervención del Estado mediante créditos de emisión corresponde a Keynes (1936, <i>Teoría General de la Ocupación, el interés y el dinero</i>, cap. 22). No es cierto que Keynes haya sido un moderado que llamaba a emitir solo para "reactivar" la economía. </UL>

        <UL> 51. Pero el espíritu de sus palabras ya estaba en el quinto mandamiento del <i>Manifiesto Comunista</i> de 1848: "Centralización del crédito en las manos del Estado, por medio de un banco nacional con capital del Estado y un monopolio exclusivo [del crédito]". </UL>

        <UL> 52. La intervención del ciclo económico es un engendro socialista —no capitalista— de los políticos, de los banqueros, de los <i>traders</i> con llegada al poder y de los economistas. Y apoyado por la generalidad incontable de economistas, políticos, historiadores y periodistas. </UL>

        <UL> 53. Mucho sufrimiento y atraso ha traído la obsesión arrogante de los directores de los bancos centrales por querer dirigir la economía a pesar de estar sobre la mesa todo el conocimiento y toda la evidencia de que solo están causando sufrimiento y atraso. Los países ricos llegaron a esta situación siendo ya ricos y pueden seguir adelante a pesar de esto pero el tercer mundo no. </UL>

        <UL> 54. La realidad humana es muy compleja y se mueve a altas velocidades. Nada que se planifique o dirija centralmente puede dar mejores resultados que el orden espontáneo. La postura pro planificación de la economía surge de arrogantes intelectuales de universidad que jamás operaron un mercado ni montaron un negocio. </UL>

        <UL> 55. Los ciclos son inevitables. Lo que sí es evitable es la distorsión de precios y el castigo estatal contra los que ahorran e invierten. </UL>

        <UL> 56. Pero no vamos a decir que los ciclos naturales de la economía sean buenos o malos; solo decimos que la intervención de los bancos centrales da siempre peores resultados, subóptimos en sentido de Pareto. </UL>

    </div>
    )
}
