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
    return (lado1+lado2+base);
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

//aqui interactuamos con html
function calculaPerimetroDelCuadrado(){
    const input=document.getElementById("InputCuadrado");
    const value=input.value;
    const perimetro=perimetroCuadrado(value);
    alert(perimetro);
}

function calculaAreaDelCuadrado(){
    const input=document.getElementById("InputCuadrado");
    const value=input.value;
    const area=areaCuadrado(value);
    alert(area);
}
function calculaPerimetroDelTriangulo(){
    const lado1=document.getElementById("InputLado1");
    const value1=parseFloat(lado1.value);
    const lado2=document.getElementById("InputLado2");
    const value2=parseFloat(lado2.value);
    const base=document.getElementById("InputBase");
    const value3=parseFloat(base.value);
    const perimetro=perimetroTriangulo(value1,value2,value3);
    alert(perimetro);
}
function calculaAreaDelTriangulo(){
    const base=document.getElementById("InputBase");
    const value1=base.value;
    const altura=document.getElementById("InputAltura");
    const value2=altura.value;
    const area=areaTriangulo(value1,value2);
    alert(area);
}
function calculaPerimetroDelCirculo(){
    const radio=document.getElementById("InputRadio");
    const value=radio.value;
    const perimetro=perimetroCirculo(value);
    alert(perimetro)
}
function calculaAreaDelCirculo(){
    const radio=document.getElementById("InputRadio");
    const value=radio.value;
    const area=areaCirculo(value);
    alert(area)
}