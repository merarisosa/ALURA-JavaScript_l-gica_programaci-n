//adaptacion linguistica para umero de intentos
let palabraIntentos = 'intento';

let numeroSecreto = 6;
let numeroUsuario;
let intentos = 1;
//condicional para que siga el proceso
while (numeroSecreto != numeroUsuario) {
  numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor: ");
  console.log(numeroUsuario);
  /* Este codigo realiza la comparación de numeros */
  if (numeroUsuario == numeroSecreto) {
    //alert("¡Adivinaste!, el número correcto es: "+numeroUsuario);

    //hacemos uso de string templates
    alert(`¡Adivinaste!, el número correcto es: ${numeroUsuario}, lo hiciste en ${intentos} ${palabraIntentos}`);
  } else {
    //condicionales anidados
    if (numeroUsuario < numeroSecreto) {
      alert("El número secreto es mayor");
    } else {
      alert("El número secreto es menor");
    }
    //incremento del contador al no acertar
    intentos =intentos+1;
    palabraIntentos = 'intentos';
  }
}
