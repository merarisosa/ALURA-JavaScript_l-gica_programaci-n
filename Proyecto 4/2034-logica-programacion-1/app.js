//adaptacion linguistica para umero de intentos
//let palabraIntentos = 'intento';

let maximoIntentos = 3;
let numeroUsuario;
let intentos = 1;

//creacion de intentos con random con uso de librerias de 
/* floor redondea hacia abajo y lo hacemos entre el numero que tenemos que son 10 
y con el +1 evitams el 0 y agregamos que se cuente el 10*/
let numeroSecreto = Math.floor(Math.random()*10+1);
//let numeroSecreto = 6;

console.log(numeroSecreto);

//condicional para que siga el proceso
while (numeroSecreto != numeroUsuario) {
    //parse para convertir la resp del usuario de string a numero
  numeroUsuario = parseInt(prompt("Me indicas un número entre 1 y 10 por favor: "));
  console.log(numeroUsuario);
  /* Este codigo realiza la comparación de numeros */
  if (numeroUsuario == numeroSecreto) {
    //alert("¡Adivinaste!, el número correcto es: "+numeroUsuario);

    //hacemos uso de string templates
    alert(`¡Adivinaste!, el número correcto es: ${numeroSecreto}, lo hiciste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
  } else {
    //condicionales anidados
    if (numeroUsuario < numeroSecreto) {
      alert("El número secreto es mayor");
    } else {
      alert("El número secreto es menor");
    }
    //incremento del contador al no acertar
    intentos ++;
    // intentos =intentos+1;
    // intentos +=1;
    
    //palabraIntentos = 'intentos';

    //interrupcion por exceder el numero de intentos
    if(intentos>maximoIntentos){
        alert(`Llegaste al numero máximo de ${maximoIntentos} intentos`);
        break;
    }
  }
}
