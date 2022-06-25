//Códido del cuadrado
console.group("Cuadrados")
const ladoCuadrado=5;
console.log("los lados del cuadrado miden: "+ladoCuadrado+" cm");

const perimetroCuadrado=ladoCuadrado*4;
console.log("el perímetro del cuadrado es: "+perimetroCuadrado+" cm");

const areaCuadrado=ladoCuadrado*ladoCuadrado;
console.log("el área del cuadrado es: "+areaCuadrado+" cm2");

console.groupEnd();


//Códido del triángulo
console.group("triángulos")
const ladoTriangulo1=6;
const ladoTriangulo2=6;
const baseTriangulo=4;
const alturaTriangulo=5.5;
console.log("los lados del triángulo miden: "
    +ladoTriangulo1
    +" cm, "
    +ladoTriangulo2
    +" cm, "
    +baseTriangulo
    +"cm");
console.log("la altura del triángulo es "+alturaTriangulo+"cm");
const perimetroTriangulo=ladoTriangulo1+ladoTriangulo2+baseTriangulo;
const areaTriangulo=(baseTriangulo*alturaTriangulo)/2;
console.log("el perímetro del triángulo es: "+perimetroTriangulo+" cm");
console.log("el área del triángulo es: "+areaTriangulo+" cm^2");
console.groupEnd();

//Códido del circulos
console.group("círculos")
//RADIO
const radioCirculo=4;
console.log("el radio del circulo es: "+radioCirculo+" cm");
//DIÁMETRO
const diametroCirculo=radioCirculo*2;
console.log("el diamtero del circulo es: "+diametroCirculo+" cm");
//PI
const PI=Math.PI;
console.log("PI es: "+PI);
//Circunferencia
const perimetroCirculo=diametroCirculo*PI;
console.log("el perímetro del circulo es: "+perimetroCirculo+" cm");
//Area
const areaCirculo=(radioCirculo*radioCirculo)*PI;
console.log("el area del circulo es: "+areaCirculo+" cm2");

console.groupEnd();