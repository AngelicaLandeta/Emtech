function suma(n1,n2,n3){
    return n1*n2*n3;
}
console.log(suma(2,4,5));

function comparacion(v1,v2){
    return v1!=v2;
}
console.log(comparacion(35,78));

/* Arrow Function */
const suma2=(num1,num2,num3)=>num1*num2*num3;
console.log(suma2(2,4,6));

const comparacion2=(valor1,valor2)=>valor1!=valor2;
console.log(comparacion2(35,78));

/* Objetos y destructuracion */

let Alumno={
    matricula:201938886,
    nombre:"Alejandro",
    apellido:"Garcia",
    edad:"15",
    calificacion:8
}

const {edad}=Alumno;
console.log(edad);

const {matricula,nombre,apellido,calificacion}=Alumno;
console.log(matricula,nombre,apellido,calificacion);

const retornarAlumno=({matricula,calificacion})=>{
    console.log(matricula,calificacion)
}
retornarAlumno(Alumno);

/* Arreglos y destructuracion */

const array=["Hola",13,43,["Mexico",2023]];

console.log(array[2]);

const [saludo,numero]=array;
console.log(saludo,numero);

const functionArray=()=>{return array;}
const [saludo2,numero2]=functionArray();
console.log(saludo2,numero2);





