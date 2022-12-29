// Act. 1 Yo no Fui
// Solicitar al usiario un nombre. Si el mismo es igual a otro nombre almacenado en una variable, realizar una salida por alerta con el mensaje "Fui yo". Caso contrario, la salida sera "Yo no fui".

// let nombre = "sofia";
// let solicitarNombre = prompt("Decime tu nombre")

// if (solicitarNombre === nombre){
//     alert("Fui yo");
// }else{
//     alert("Yo no fui")
// }


// Act 2 Presionar Y
// let tecla = prompt("Precione una tecla")

// if (tecla === "y" || tecla === "Y"){
//     alert("Correcto")
// }else{
//     alert("Error")
// }


//Act. 3 Escoger personaje
// let numero = Number(prompt("Elegir un numero entre 1 y 4"))

// if (numero >= 0 && numero < 5){
//     if (numero === 1){
//         alert("Elegiste a Homero")
//     } else if (numero === 2){
//         alert("Elegiste a Marge")
//     } else if (numero === 3){
//         alert("Elegiste a Bart")
//     } else {
//         alert("Elegiste a Lisa")
//     }
// } else{
//     alert("El numero no corresponde")
// }


// Act 4 Presupuesto
// let numero = Number(prompt("Se solicita un numero"))

// if (numero >= 0 && numero <= 3000){
//     if (numero >= 0 && numero <= 1000){
//         alert("Presupuesto bajo")
//     } else if (numero >= 1001 && numero < 3000){
//         alert("Presupuesto medio")
//     } else {
//         alert("Presupusto alto")
//     }
// }

// Act. 5 Vacio
// let productoUno = prompt("Primer producto de almacen:")
// let productoDos = prompt("Segundo producto de almacen:")
// let productoTres = prompt("Tercer producto de almacen:")
// let productoCuatro = prompt("Cuarto producto de almacen:")

// if (productoUno != "" && productoDos != "" && productoTres != "" && productoCuatro != ""){
//     alert("Tus productos son: " + productoUno + ", " + productoDos + ", " + productoTres + " y " + productoCuatro)
// }else {
//     alert("Error: Es necesario cargar todos los productos.")
// }


// Js. 3 ----------------------
// Act. 3 El pizarron
// let numero = Number(prompt("Numero:"))
// let texto = String(prompt("Texto"))

// for (let stop = 0; stop < numero; stop++){
//     alert(texto)
// }


// Act. 2 El cuadrado ordinario
// let lados = prompt("Ingresar cantidad de lados")
// emplear este valor para determinar la cantidad de repeticiones, y efectuar una salida por alerta con el mensaje "lado" en cada repeticion. Pero si se alcanza un numero de iteraciones mayor que 4, cancelar el ciclo.

// for (let i = 0; i < lados; i++){
//     if (i > 3) {
//         break
//     }
//     alert("lado")
// }

// Act. 3 Registro de alumnos
// let alumnos = ""

// for (let i = 0; i < 10; i++){
//     alumnos += prompt("Ingresar nombre de alumno") + "\n";
// }
// alert(alumnos)

// Act 4. El innombrable
// let nombre = "";
// let entrada = prompt("Ingresar un nombre")

// while (entrada != "Voldemort") {
//     nombre += entrada + "\n"
//     entrada = prompt("Ingresar un nombre")
// }

// alert(nombre)

// Act. 5 Comprando productos
// let entrada = prompt("Seleccionar producto del 1 al 4")

// while (entrada != "ESC") {
//     switch (entrada) {
//         case "1":
//             alert("TOMATE")
//             break;
//         case "2":
//             alert("PAPA")
//             break;
//         case "3":
//             alert("CARNE")
//             break;
//         case "4":
//             alert("POLLO")
//             break;
//         default:
//             alert("Error")
//             break;
//     }
//     entrada = prompt("Seleccionar producto del 1 al 4")
// }