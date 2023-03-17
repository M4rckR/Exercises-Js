
'use strict'
// function contar(palabra) {
//     return (typeof palabra === 'string')? palabra.length : 'Tipo de dato no valido';
// }


// // console.log(contar('3'));


// function recortar(palabra,limite) {
//     return (typeof palabra === 'string')? palabra.slice(0,limite) : 'Tipo de dato no valido';
// }

// // console.log(recortar('roberto', 4));

// function espacios(frase) {
//     return (typeof frase === 'string')? frase.split(" ") : 'Tipo de dato no valido';
// }

// // console.log(espacios("Roberto es hijo de maria"));

// function repetir(palabra, x) {
//     return (typeof palabra === 'string')? palabra.repeat(x): 'Tipo de dato no valido';
// }

// console.log(repetir("Marcos ",5));


//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
const revertir = (frase = undefined) => {
    return frase? (typeof frase === 'string'?  frase.split("").reverse().join("") : 
    "El tipo de varible debe ser string")
    : console.warn('La variable no puede estar vacia');
}

//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
    const seRepite = (frase = "", match= "") => {
        if(!frase || !match) return console.warn('Ninguna de las variables puede estar vacia');

        if(frase) {
            let veces = 0;
            let fragmentos = frase.split(' ');
            fragmentos.forEach( (palabra)=> {
                if(palabra === match) {
                    veces++;
                }
            })
            return console.log(`En la frase, la palabra ${match}\n se encontro un total de ${veces}`);
        }
    }

// console.log(seRepite("marcos tiene mala pero muy mala reputacion en casa, a pesar de ser bastante marcos","marcos"));


//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const palindormo = (frase = undefined) => {
    if(typeof frase != 'string') return console.warn("El valor debe ser string");
    if(!frase) return console.warn("Por favor, ingrese un valor");
    let volteada = frase.split("").reverse().join("").toLowerCase();
    return volteada === frase? `La palabra es polidroma ${frase}` : `No es poldroma ${frase}`;
}

// console.log(palindormo("seres"));


//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const eliminarCaracteres = (texto ="", patron= "") => {
    (!texto)
    ?console.warn("No ingresaste un texto")
        :(!patron)
        ?console.warn("No ingresaste un patron de caracteres")
        :console.info(texto.replace(new RegExp(patron,"ig"),""))
}

// eliminarCaracteres("xyz1 xyz2 xyz3 xyz4 xyz5 xyz6 xyz7", "xyz")


// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const aleatorio = () => Math.trunc(Math.random() * (600 - 501 + 1) + 501)
// console.log(aleatorio());

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const capicua = numero =>  {
    let revez = numero.toString().split("").reverse().join("");
    return (numero.toString()) === revez
    ? `El numero ${numero} es capicua`
    : `El numero ${numero} no es capicua`
}
// console.log(capicua(303));



// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factorial = numero => {
    let i = 1;
    let total = 1;
    while(i<=numero){
        total = total*i;
        i++;
    }
    return total;
}
// console.log(factorial(0));

const primo = (numero = "") => {

    if(!numero) console.error('El valor no puede ser nulo o vacio');
    if(typeof numero !== 'number') console.error('El valor tiene que ser uno numerico');


    let i = 1;
    let contador = 0;
    while(i<=numero) {
        if(numero%i===0){
            contador++;
        }
        i++;
    }

    return contador===2? `El numero ${numero} es primo` : `EL numero ${numero} no es primo`;
}

// console.log(primo(15));

const pareImpar = (numero = "") => {
    if(!numero) console.error('El valor no puede ser nulo o vacio');
    if(typeof numero !== 'number') console.error('El valor tiene que ser uno numerico');

    return numero%2===0? `Par`:`Impar`;
}

// console.log(pareImpar(5));

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const grados = (numero= "", cf= "") => {
    if(numero === "")               return console.error('El primer valor no puede ser nulo o vacio');
    if (typeof numero !== 'number') return console.error('El primer valor debe ser un valor numerico');
    if(!cf)                         return console.error('El segundo valor no puede ser nulo o vacio');
    if (typeof cf !== 'string')     return console.error('El segundo valor no puede ser numerico');

    let tipo = cf.toLowerCase();
    let valorConvertido;
    if (tipo === 'c' || tipo === 'f') {
        tipo==='c'
        ? valorConvertido = numero * 1.8 + 32
        : valorConvertido = (numero-32) / 1.8;
        return `${Math.trunc(valorConvertido)} ${tipo.toUpperCase()}°`;
    }
} 

// console.log(grados(0,"F"));
// 15) Programa una función para convertir números de base binaria a decimal 
//y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const binarioDecimal = (numero = undefined , base = undefined) => {
    if(!numero)                     return console.error(`El valor de numero no puede estar vacio`);
    if(numero<=0)                   return console.error(`El valor de numero no puede ser negativo o cero`);
    if(!base)                       return console.error(`El valor de base no puede estar vacio`);
    if(base !== 2 && base !== 10)   return console.error(`La base tiene que ser 2 o 10`);
    
    return base===2
    ? console.log(`${numero} base ${base} = ${parseInt(numero, base)}`)
    : console.log(`${numero} base ${base} = ${numero.toString(2)}`)
}
// console.log(binarioDecimal(1010111,2));


// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const descuento = (monto = undefined, descuento= undefined) => {
    if(!monto) return console.error(`El valor del monto no puede estar vacio`)
    if(monto <=0 ) return console.error(`El valor no puede ser `)
    if(!descuento) return console.error(`El valor del descuento no puede estar vacio`)
    if(descuento > 100) return console.error(`EL porcentaje de descuento no puede ser mayor a 100`)

    return monto * (descuento/100)
}
// console.log(descuento(100,10));

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const calcularAnios = (fecha= undefined) => {
    if(fecha===undefined) return console.error(`No ingresaste la fecha`);
    if(!(fecha instanceof Date)) return console.error(`El valor que ingresaste no es una fecha valida`);
    let hoyMenosFecha = new Date().getTime() - fecha.getTime()
    //Segundo, minuto, hora, dia, año
    let aniosEnMs = 1000* 60 * 60 * 24 *365
    let aniosHumanos = Math.floor(hoyMenosFecha/ aniosEnMs);


    return (Math.sign(aniosHumanos) === -1)
    ?   console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
    :   (Math.sign(aniosHumanos) === 1)
        ? console.info(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}.`)
        : console.log("No hay diferencia, no estamos en el año actual");
}

// calcularAnios(new Date(2050,2,2))

// let marcos = ("1984,4,22")

// marcos.getFullYear();


// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const contarLetras = (cadena = "") => {
    if(!cadena) return console.warn("No ingresaste una cadena de texto")
    if(typeof cadena !== 'string') console.warn(`EL valor ${cadena} ingresado no es una cadena de texto`)

    let vocales = 0, consonates =0;
    cadena = cadena.toLowerCase();

    for (let letra of cadena){
        if(/[aeiouáéíóúü]/.test(letra)) vocales++;
        if(/[bcdfghjklmnpqrstvwxyz]/.test(letra)) consonates++;  
    }
    return console.info({cadena,vocales,consonates})
}

// console.log(contarLetras("Hola marcos romero garcia"));


// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.


const validarNombre = (nombre ="") => {
    if(!nombre) return console.warn("No ingresaste una cadena de texto")
    if(typeof nombre !== 'string') console.warn(`EL valor ${nombre} ingresado no es una cadena de texto`)

    let expReg = /^[A-Za-zÑñÁáÉéÍíÓOóÚúü\s]+$/g.test(nombre)

    return (expReg)
    ? console.info(`${nombre}, es un nombre valido`)
    : console.info(`${nombre}, no es un nombre valido`)
}

// validarNombre("Marcos Daniel")
// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const validarEmail = (email ="") => {
    if(!email) return console.warn("No ingresaste una cadena de texto")
    if(typeof email !== 'string') console.warn(`EL valor ${email} ingresado no es una cadena de texto`)

    let expReg =  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email)

    return (expReg)
    ? console.info(`${email}, es un correo valido`)
    : console.info(`${email}, no es un correo valido`)
}

// validarNombre("Marcos Daniel")


//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const cuadrados = (arreglo) => {

    if(!arreglo) return console.error(`El arreglo o valor no puede estar vacio`)
    let nuevoArreglo = [];

    arreglo.forEach((valor) => {
        if(typeof valor !== 'number') return console.warn(`Algun valor del array no es numerico`);
        let cuadrado = Math.pow(valor,2)
        nuevoArreglo.push(cuadrado)
    })

    return nuevoArreglo;
}

// console.log(cuadrados([1,2,]));


//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const valorMinMan = (arreglo) => {
    if(!arreglo) return console.error(`El arreglo o valor no puede estar vacio`)
    arreglo.forEach((valor) => {
        if(typeof valor !== 'number') return console.warn(`Algun valor del array no es numerico`);
    })
    let valorMinimo = Math.min(...arreglo),
    valorMaximo = Math.max(...arreglo);

    return console.log(`Valor minimo: ${valorMinimo}\nValor Maximo: ${valorMaximo}`);
}

// console.log(valorMinMan([1,2,3,11,8,5,4]));


//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.


const parImpar = (arreglo) => {
    if(!arreglo) return console.error(`El arreglo o valor no puede estar vacio`)
    let arregloImpar = [], arregloPar = [];
    arreglo.forEach((valor) => {
        if(typeof valor !== 'number') return console.warn(`Algun valor del array no es numerico`);

        valor%2===0
        ? arregloPar.push(valor)
        : arregloImpar.push(valor);
    })

    return console.info(`Arreglo impar:\t${arregloImpar}\nArreglo par:\t${arregloPar}`);
}

// console.log(parImpar([1,2,5,63,1,4,5,8,9,5,1,4,87,12,23]));


//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.


const ascenDescen = (arreglo= "") => {
    if(!arreglo) return console.error(`El arreglo o valor no puede estar vacio`)

    arreglo.forEach((valor) => {
        if(typeof valor !== 'number') return console.warn(`Algun valor del array no es numerico`);
    })

    return console.info({
        arreglo,
        asc: arreglo.map(el => el).sort(function(a,b){return a-b}),
        desc:arreglo.map(el => el).sort(function(a,b){return b-a})
    })
}


// console.log(ascenDescen([50,4,3,2]));
//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

let eliminarDuplicados = (arreglo = "") => {
    if(!arreglo) return console.error(`No hay nada que ordenar (Esta vacio mongol)`)
    const noduplicados = new Set(arreglo);
    return [...noduplicados];
}
// console.log(eliminarDuplicados([4,5,6,3,699,21,5,85,1,1,1,1,1,1,1,2,2,2,"s","s"]));

//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const promedio = (arreglo="") => {
    if(!arreglo) return console.error(`El arreglo o valor no puede estar vacio`)
    if(!(arreglo instanceof Array)) console.error(`Elvalor recibido debe ser un array`)
    let total = 0;

    arreglo.forEach( (valor) => {
        if(typeof valor !== 'number') return console.warn(`Algun valor del array no es numerico`)
        total+= valor;
    })
    return total/arreglo.length;
}

// console.log(promedio([20,14,13,16,15,20,20,20,20,20]));


class Pelicula {
    
}