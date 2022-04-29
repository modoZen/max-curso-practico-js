// VARIABLES Y OPERADORES
// Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
let nombre = "Max";
let apellido = "Diaz"
let nombre_de_usuario = "Maxter";
let edad = 30;
let email = "maxDN.06@gmail.com";
let mayor_de_edad = true;
let dinero_ahorrado = 500;
let deudas = 200;

// Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
let nombre_completo = nombre +' '+apellido;
console.log(nombre_completo);
let dinero_real = dinero_ahorrado - deudas;
console.log(dinero_real);

// FUNCION
// Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

// const name = "Juan David";
// const lastname = "Castro Gallego";
// const completeName = name + lastname;
// const nickname = "juandc";

// console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function prefieroNick(name, lastname,nick){
    let completeName = `${name} ${lastname}`
    console.log(`Mi nombre es ${completeName}, pero prefiero que me digas ${nick}`)
}

prefieroNick("Max", "Diaz", "Maxter")

// CONDICIONALES
// Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

// const tipoDeSuscripcion = "Basic";
// switch (tipoDeSuscripcion) {
//    case "Free":
//        console.log("Solo puedes tomar los cursos gratis");
//        break;
//    case "Basic":
//        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
//        break;
//    case "Expert":
//        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
//        break;
//    case "ExpertPlus":
//        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
//        break;
// }

const tipoDeSuscripcion = "Basic";
if(tipoDeSuscripcion == "Free")             console.log("Solo puedes tomar los cursos gratis");
else if (tipoDeSuscripcion == "Basic")      console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
else if (tipoDeSuscripcion == "Expert")     console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
else if (tipoDeSuscripcion == "ExpertPlus") console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");

// Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

if  (tipoDeSuscripcion == "Free")      console.log("Solo puedes tomar los cursos gratis");
if (tipoDeSuscripcion == "Basic")      console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
if (tipoDeSuscripcion == "Expert")     console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
if (tipoDeSuscripcion == "ExpertPlus") console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");

// Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 

const typeUsers = [
    "Free",
    "Basic",
    "Expert",
    "ExpertPlus"
]
const messages = [
    "Solo puedes tomar los cursos gratis",
    "Puedes tomar casi todos los cursos de Platzi durante un mes",
    "Puedes tomar casi todos los cursos de Platzi durante un año",
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
]

const index = typeUsers.findIndex(typeUser => typeUser === tipoDeSuscripcion)
if(index != -1) console.log(messages[index]);
else console.log("tipo de usuario equivocado")

// CICLOS
// Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
// for (let i = 0; i < 5; i++) {
//     console.log("El valor de i es: " + i);
// }
// for (let i = 10; i >= 2; i--) {
//     console.log("El valor de i es: " + i);
// }

let i = 0
while(i<5){
    console.log("El valor de i es: " + i);
    i++;
}

i = 10;
while(i>=2){
    console.log("El valor de i es: " + i);
    i--;
}

//Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
let correctResponse = false;
while(!correctResponse){
let response = prompt('Ingrese la respuesta a  2 + 2')
if(response == '4') correctResponse = true
}

//ARREGLOS Y OBJETOS
// Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
var primerElemento = (arreglo) =>{
    return arreglo[0]
}
var array = ['Hola', 'Adios']
console.log(primerElemento(array))

// Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
var imprimirElementos = (arreglo)=>{
    for (elemento of arreglo) console.log(elemento)
}
var array = ['Hola', 'Adios']
imprimirElementos(array)

// Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
var imprimirProps = (obj)=>{
    for(prop in obj) console.log(obj[prop])
}
var objeto = {
    hola: "hola a todos",
    adios: "adios a todos"
}
imprimirProps(objeto)