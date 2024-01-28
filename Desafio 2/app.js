/*
Pregunta al usuario qué día de la semana es. 
Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". 
De lo contrario, muestra "¡Buena semana!".
*/

let dia = prompt("Dime que dia es: ");
if(dia == "Sábado" || dia == "Domingo"){
    alert("¡Buen fin de semana!");
}else{
    alert("¡Buena semana!");
}

/*
Verifica si un número ingresado por el usuario es positivo o negativo. 
Muestra una alerta informativa.
*/

let numero = prompt("Introduce un numero: ");
if(numero >=0){
    alert(`El numero ${numero} es positivo`);
}else{
    alert("El numero "+numero+" es negativo");
}

/*
Crea un sistema de puntuación para un juego. 
Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!".
En caso contrario, muestra "Intenta nuevamente para ganar.".
*/

let puntuacion =  prompt("Anota el score: ");
if (puntuacion>=100) {
    alert ("¡Felicidades, has ganado!");
}else{
    alert ("Intenta nuevamente para ganar.");
}

/*
Crea un mensaje que informe al usuario sobre el saldo de su cuenta, 
 un template string para incluir el valor del saldo.
*/

let saldo = 0;
saldo = prompt("¿Cuál es tu saldo?");
alert (`Tu saldo actual es de ${saldo}.`);

/*
Pide al usuario que ingrese su nombre mediante un prompt. 
Luego, muestra una alerta de bienvenida usando ese nombre.
*/

let nombre = prompt("Ingresa tu nombre: ");
alert(`Bienvenido/a ${nombre}`);