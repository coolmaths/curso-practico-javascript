//Códido del cuadrado
console.group("Cuadrados")

function perimetroCuadrado(lado){
    return lado*4;
}


function areaCuadrado(lado){
    return lado*lado;
}


console.groupEnd();


//Códido del triángulo
console.group("triángulos")

function perimetroTriangulo(lado1,lado2,base){
    return lado1+lado2+base;
}
function areaTriangulo(base,altura){
    return (base*altura)/2;
}

console.groupEnd();

//Código del circulos
console.group("círculos")
const PI=Math.PI;

function diametroCirculo(radio){
    return radio*2;
}

//Circunferencia
function perimetroCirculo(radio){
    const diametro=diametroCirculo(radio);
    return diametro*PI;
}

//Area
function areaCirculo(radio){
    return (radio*radio)*PI;
}

console.groupEnd();