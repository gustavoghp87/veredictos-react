import React from 'react'



export const v26 = () => {


    return (
    <div>
        <div>
            <img src="/frontend-src/26/26.jpg" id="chapImage" />
        </div>

        <div className="title2"> XXVI. BITCOIN </div>

        <ul> 1. Bitcoin es la primera moneda privada que se ha creado desde las innovaciones bancarias del siglo XIX, no porque sí, sino porque cuando los Estados se lanzaron a crear sus propias monedas de papel y de banco y las impusieron, anularon la posibilidad de innovación privada por la sencilla razón de que no tiene sentido invertir en innovación si no se puede obtener rédito por ello. </ul>

        <ul> 2. Tuvo que sobrevenir una abrumadora evolución científica y tecnológica para que una mente brillante pudiese encontrar la manera de dar vida a una moneda privada con el poder de servir a algún mercado más que las monedas coercitivas, y así tener demanda. </ul>

        <ul> 3. Bitcoin es una entidad virtual que se levanta sobre algunas innovaciones que tienen que ser explicadas para comprenderlo. Ninguna de estas innovaciones es difícil de entender, pero hay que entenderlas todas. Para entender bitcoin a la perfección, hay que analizar Bitcoin Core, que es el software que le da vida. </ul>


        <div className="subtitle"> CRIPTOGRAFÍA ASIMÉTRICA </div>

        <ul> 4. La idea de encriptar un mensaje es simple: alcanza con transformar el texto original en otro siguiendo cierto patrón predefinido que sea conocido por la persona que tiene que decodificarlo. Si este patrón incluye una clave personalizada —que podría no incluirla— hablamos de <i>criptografía simétrica</i>, que es simétrica en el sentido de que el decodificador tendrá que usar la misma clave que usó el codificador, es decir, ambos saben lo mismo; hay información simétrica. Pero esta manera de hacer las cosas no se lleva bien con las telecomunicaciones porque hay que hacer viajar tanto el mensaje encriptado como la clave que lo desencripta; es poco seguro. La gran innovación al respecto fue hecha en la década de 1980: El que encripta usa una clave pero el que desencripta usa otra, que nunca sale de su intimidad. ¿Cómo es posible? El que va a recibir el mensaje primero genera un par clave pública - clave privada que están relacionadas matemáticamente de manera que teniendo la clave privada es posible calcular la clave pública, pero teniendo la clave pública no es posible calcular la privada. Si se encripta un mensaje usando cierta clave pública, solo se podrá desencriptar con la clave privada que le corresponde. Así, la clave pública es algo parecido a los CBU bancarios: se la publica porque solo sirve para recibir. Esta es la criptografía asimétrica, que es asimétrica en el sentido de que lo que sabe uno —el que va a decodificar, que sabe ambas claves— no es lo mismo que sabe el otro —el que envía el mensaje, que solo sabe la clave pública—. </ul>

        <ul> 5. Así, para recibir bitcoins deberás tener un juego de claves privada-pública obtenida con algoritmos, por ejemplo en el sitio bitaddress.org, sitio que puede ser completamente descargado para no tener que generar las claves online con riesgo de seguridad sino offline. </ul>


        <div className="subtitle"> HASH </div>

        <ul> 6. Es posible asignarle un código a todo texto imaginable con solo formular el patrón o algoritmo que hay que seguir, de tal modo que teniendo el mensaje siempre se puede calcular el código, pero teniendo el código no es posible reconstruir el mensaje que le dio origen... simplemente porque en el proceso de generación del código se perdió información esencial. Además, si el algoritmo diseñado es tal que los códigos resultantes siempre tendrán la misma cantidad de caracteres, estamos ante un hash. Es algo parecido a una huella dactilar: si se tiene a la persona, se puede saber la huella, pero teniendo solo la huella no se puede conocer a la persona. Tiene la particularidad —lograda intencionadamente por los diseñadores de algoritmos— que todo el hash cambia radicalmente sus caracteres al sufrir un mínimo cambio en el texto original. Dos textos similares, idénticos excepto por una única letra o número o signo, tendrán hashes completamente diferentes. </ul>


        <div className="subtitle"> BLOCKCHAIN </div>

        <ul> 7. Una cadena de bloques es un registro de eventos ordenados cronológicamente, donde a cada asiento se le incorpora el hash del asiento anterior y entonces se le calcula su hash, de tal forma que quedan encadenados . Por ejemplo, un bloque podría verse así: </ul>

        <div className="special-right">
            <ul> Asiento 501 - Tue Aug 04 2020 23:51:28 GMT-0300 (1596595888098) <br />
            Sender: 1GzE6GG3qecDUoGXNyn2zqkRwhhFCZMiqN <br />
            Recipient: 1B5hPUjVoqmjXEgdEuCWs8sbij1dSYeeVT <br />
            Quantity: 0.1 <br />
            Preceding Hash: <small>000000b3325a4bf1d347e21a574ec7277fa13455d049327a779eaafec66535c2</small> <br />
            Nonce: 6568256014056771 <br />
            Hash: <small>000004008b1ee106abd1402999420644ff3e059f3ae032cb0d0e398f6b07e27c</small> </ul>
        </div>


        <div className="subtitle"> PEER TO PEER </div>

        <ul> 8. Hay dos maneras de hacer internet: La tradicional consiste en tener un computador encendido todo el tiempo dedicado a responder las peticiones de los usuarios, devolviendo información y códigos usando la infraestructura de internet; son los servidores. Es la forma habitual de hacer internet, de manera que muchos dispositivos se conectan con uno solo, que centraliza el abastecimiento de la información. La otra —la que usa bitcoin— es la manera entre pares o <i>peer to peer</i> donde todos los usuarios se comparten información y códigos digitales entre ellos; nada se centraliza, de forma que no es posible anular el servicio atacando a un servidor o a algunos servidores. </ul>

        <ul> [Terminar...] </ul>

    </div>
    )
}