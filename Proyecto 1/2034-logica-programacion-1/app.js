let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor: ");

console.log(numeroUsuario);

if(numeroUsuario == numeroSecreto){
    alert("¡Adivinaste el número correcto!");
}else{
    if (numeroUsuario < numeroSecreto) {
        alert("El número secreto es mayor");  
    }else{
        alert("El número secreto es menor");
    }
}

alert('Hola Mundo');
