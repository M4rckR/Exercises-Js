
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
console.log(binarioDecimal(1010111,2));


// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const descuento = (monto = undefined, descuento= undefined) => {
    if(!monto) return console.error(`El valor del monto no puede estar vacio`)
    if(!descuento) return console.error(`El valor del descuento no puede estar vacio`)
}

descuento(1,2)