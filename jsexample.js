/* Note: no estoy usando tildes, para no agregar caracteres diferentes a los admitidos por JS. 

---------------------------------------------------------------------

JavaScript: se usa para hacer mas interactivo un sitio web. Le da funcionalidad y los transforma en aplicaciones web. 

-Operadores
-Estructuras de control: dicen que scripts seguir si se satisface una prueba.
-Funciones: son como bloques de codigo. 
-Operadores(completar)

El signo de = es de asignacion, le asigna valor a la variable. 
var+ nombre de la variable +signo de asignacion + tipo de dato
var apellido = "Perez"

Tipos de datos:
-String (cadena): va entre "" o con '' 
-Number:sirve para neteros y decimales 
-Boolean o buleanos: son 0 y 1 pero lo traducimos como true y false
-Array o areglo: es una matriz/lista. Los elementos tienen como "posiciones" almacenan multiples valores en una sola variable.
Este tipo de datos es llamado "primitivos" solo pueden contener una cosa.

Objetos:almacenan colecciones de datos. Se escriben como pares de nombre:valor. Es una variable que tiene propiedades y que esas propiedades tienen un valor */

var persona = {
    nickName: 'CasandraM',
    apellido: "Perez",
    edad: 31
};
/**/ 

console.log(persona);

var friends = [/*Variable de tipo array que contiene objetos y dentro valores(strings y numbers)*/
    { friendName: 'Ana', edad:20 },
    {friendName:'jose', edad:22},
];

console.log(friends);

/*
Variables: son nombres que le damos a ciertos tipos de datos para almacenarlos en la memoria para luego reutilizarlos.
Se usa la palabra reservada var/let/const   <--Formas de declarar variables--

Let y const tienen un ambito de bloque y var un ambito global.
 Const siempre debe ser inicializada(darle el valor) durante la declaracion (reservar el espacio en memoria), var y let la podemos declarar(undefined) y luego  inicializar 

JS tiene REGLAS:
-Las variables no pueden comenzar con un número o con caracteres cualquiera, los unicos que soporta son $ o _ 
-Tratar de ser lo mas descriptivo con las variables 
CamelCase: cada palabra comienza con mayuscula, es lo mas usual, pero tambien se puedeencontrar con _
-No repetir nombre de las variables
let usuario="Cass";
usuario= "Cassy"; /* Si quiero cambiar nombre a la variable NO coloco let de vuelta */
// let usuario="Cass"  ----Acá estoy declarando la variable----
// usuario="Cassy" aca le estoy dando un valor.  La puedo declarar y luego asignarle un valor(Cassy) en lineas diferentes o puedo hacerlo en una sola linea(let usuario = "Cassy")
let usuario = "Cassy";
let apellido = "perez";
let nombrecompleto = usuario + " " + apellido; /*let nombrecompleto = usuario  "+apellido, asi tambien puedo concatenar y es más facil*/
/*Otro ejemplo con strings + number*/
var numeroUno = "10";
var numeroDos = 10;
var suma = numeroUno + numeroDos;
console.log(suma); /* esto se llama CONCATENAR, no es una suma en si, porque estamos uniendo 2 cadenas
Si quiero separar con un espacio, coloco " " (poner un espacio entre comillas) entre cada variable, mas +, es como si sumara nombre + espacio en blanco + apellidos */
console.log(usuario)
console.log(nombrecompleto);
console.log(typeof (usuario)); /*Esto me muestra que tipo de dato es, en este caso un string */
/* Para llamar a la variable, en el consolelog va sin comillas  */

/* Para describir constantes,algun valor que no vaya a cambiar, ejemplo pi */
const pi = 3.14; /* va sin comillas porque es un number */
console.log(pi)
/* pi=100 como es constante, me da error en la consola si trato de cambiarlo. No la puedo re declarar */

let number1 = 30;
let number2 = 10;
let result = number1 + number2;
/* 
suma +
resta -
mutiplicar *
dividir /
 */
/* Aca al dividir entre cero, Js tira infinito */
console.log(result);

/* Hacer comparaciones*/
let numbreOne = 100;
let numberTwo = 300;
let resultado = numbreOne < numberTwo;
console.log(resultado);
/* al hacer esto, para este caso, me tira un boolean- true en consola, porque es verdadero 
Para comparar con = colocamos == porque es una palabra reservada por js*/
/* Hacer comparaciones
Para comparar con diferente !=
<=
>=*/
let numbreOne1 = 100;
let numberTwo2 = 300;
let resulta2 = numbreOne1 == numberTwo2;
console.log(resulta2);

/* Hacer comparaciones*/
let num1 = 100;
let num2 = 300;
let resu = numbreOne != numberTwo;
console.log(resu);

/* Control de flujo: permite al programa comportarse de una forma u otra según el resultado */
let password = "cass123";
let input = "cass1234";
let output = password == input;
if (output == true) { console.log("Login Correcto"); }
else { console.log("Login Incorrecto"); }
console.log(output); /* con estas llaves indico qe quiero que haga, y se lee si output, es true haz lo que diga entre {}, esto se le conoce como bloque
El if sirve para validar datos con multiples valores tambien*/
let typecard = 'Credit Card';
switch (typecard) {
    case 'Credit Card':
        console.log('this is a credit card');
        break;
    case 'Debit Card':
        console.log('this is a debit card');
        break;
    default:
        console.log('no valid');
}

/* Clase 8 
FUNCIONES:*/
function primeraFuncion(a,b) { 
  return a+b;

}
console.log(primeraFuncion(3,20));
/*-------*/
let bienvenida = 'Les damos la bienvenida';
console.log('bienvenida');
/*---Revisar esto con fazt youtube----*/








/* Para saber la cantidad de caracteres de un string, uso .lenght: Cuentan los espacios y caracteres especiales*/
let miNombre = 'Casandra';
let cantidadDeCaracteres = miNombre.length;
console.log(cantidadDeCaracteres);

let unArray = ["a", "b", "c"];/*Si tengo un array me cuenta la cantidad de elementos dentro de este, sino me cuenta los caracteres, como el ejemplo de arriba.Puedo usar comillas simples o dobles. */
let cantidadElementos = unArray.length;
console.log(cantidadElementos);

let miNombree = 'Casandra';
let cantidadDeCaracteress = miNombree.length;
miNombree.toUpperCase; /* ese punto que le ponemos al string significa que podemos aceder a herramintas (funciones)puntuales que trabajan con el string */
console.log("Mi nombre tiene" + " " + cantidadDeCaracteress + " " + "caracteres");


/* Funcion para encontrar un caracter:indexOf. Se detiene en la primera coincidencia. Tambien cuentan los espacios y empieza a contar de cero. */

/* Estructuras de control: vamos a trabajar con datos que varian y las herramientas de los lengajes me permiten evaluar que camino tomar y tener distintas vias posibles en nuestro codigo, a eso se le llama estructuras de control y permiten controlar el flujo de ejecuccion por donde se va ir ejecutando nuestro codigo. 
  Condicionales y Bucles (repetitivas)
  Comprobar una condición:
  Operadores de compración: < o >, <=,>=, ===,!== Nos devuelve un valor booleano, segun la comparacion sea verdadera (true) o falso (false). 
  Operadores lógicos : &&(and)  devuele true solo si ambos operadores son verdaderos, 
  ||(or) devuelve true si al menos uno de los operadores es verdadero

  ! (not) es la negación, invierte el valor booleano de la variable. Si era true devuelve false. Y si era false devuelve true.
  
  */
let variable1 = true;
let variable2 = true;
let variable3 = false;

console.log(variable1 && variable2);
console.log(variable1 && variable3);

/* Expresiones mas complejas */
console.log(variable1 && !variable3)


/* Condicionales: If*/
let nu = 9;
if (nu < 10) {
    console.log('nu menor que 10');
}
else if (nu <= 10) {
    console.log('nu =10');
}
else {
    console.log('nu mayor que 10');
}

/* Bucles: para ejecutar una instrucción o varias instruccciones varias veces
El bucle for es el más utilizado y lo usamos cuando sabemos la cantidad de veces que vamos a repetir la intruccion */

let nomUsers = ['Hola Bienvenido']
for (let i = 0; i < 10; i++) { /* Al asignar el ++ incrementamos el valor de la variable en 1 */
    console.log(nomUsers)
}
