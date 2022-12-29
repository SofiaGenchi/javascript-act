// Act. 1 Homero
// Crear 3 variables para asignar el nombre, apellido y edad de Homero, respectivamente.

let nombre = "Homero";
let apellido = "Simpson";
let edad = 34;

// Act. 2 Ciudades
// Crear 5 variables constantes, asignando a cada una de ellas diferentes nombres de ciudades.

const springfield = "Springfield";
const shelbyville = "Shelbville";
const capitalCity = "Capital City"
const brockway = "Brockway";
const terrorLake = "Terror Lake";

// Act 3. Carnet
// Declarar variables para representar la informacionde un carnet de conducir. Luego, concatenarlas y asignar el resultado de la operacion a una variable denominada carnet.

let numeroDeCarnet = "B47U89RE243"
let nombreCarnet = "Bart"
let apellidoCarnet = "Simpson"
let domicilio = "742 Evergreen Terr. Springfield, USA"
let birthate = "02-11-70"
let sex = "M"
let ht = 4.0
let eyes = "BL"
let wt = 85

let carnet = "Numero de carnet: " + numeroDeCarnet + ". Nombre y Apellido: " + nombreCarnet + " " + apellidoCarnet + ". Domicilio: " + domicilio + ". Fecha de Nacimiento: " + birthate + ". Sex: " + sex + " HT: " + ht + " Eyes: " + eyes + " WT: " + wt + ".";

// Act 4 Registro de Personas:
// Solicitar al usiario 5 nombres pertenecientes a untegrantes de una familia. Luego, concatenar dichas entradas y efectuar una salida por alerta.

// let integrante_uno = prompt("Nombre del Integrante 1:")
// let integrante_dos = prompt("Nombre del Integrante 2:")
// let integrante_tres = prompt("Nombre del Integrante 3:")
// let integrante_cuatro = prompt("Nombre del Integrante 4:")
// let integrante_cinco = prompt("Nombre del Integrante 5:")

// let integrantes = alert("Los integrantes de la familia son: " + integrante_uno + integrante_dos + integrante_tres + integrante_cuatro + integrante_cinco);


// Act 5. Descuentos
// Solicitar al usiario uno o mas precios. Luego, efectuar un descuento en porcentaje (20%, 30%, etc) sobre los valores ingresados, y realizar una salida.

let precio_uno = prompt("Ingresas precio uno:")
let precio_dos = prompt("Ingresar precio dos:")

let descuentoUno = (precio_uno * 20) / 100;
let unoFinal = alert("El precio final es de: " + descuentoUno + "$");
let descuentoDos = (precio_dos * 30) / 100;
let dosFinal = alert("El precio final es de: " + descuentoDos + "$");