/* IF...ELSE */
let edad = 12;

if(edad>=18){
    console.log("VALIDO");
}else{
    console.log("NO VALIDO");
}

/* FOR */
let auto=[
    {modelo:'Chevrolet',anio:2023,color:'Azul'},
    {modelo:'MG',anio:2017,color:'Rojo'},
    {modelo:'Nissan',anio:2019,color:'Negro'},
    {modelo:'Sentra',anio:2020,color:'Gris'}
];

for(let i=0; i<auto.length; i++){
    console.log(`Los autos disponibles son: `+auto[i].modelo);
}

/* SWITCH */

let edad2=27;

switch (edad>=18 && edad<=100){
    case 1:
        alert("Eres menor de edad tu boleto es gratis");
        break;
    case 2:
        alert("Eres mayor de edad tienes 2X1 en boletos");
        break;
    case 3:
        alert("Eres de la tercera edad tienes palomitas gratis solo hoy");
        break;

    default:
        alert("Felicidades tienes un combo y tu boleto gratis...");
        break;
}


