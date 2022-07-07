//Helpers
function esPar(numero){
    return (numero%2===0);
}
function calcularPromedio(lista){

  const sumaLista=lista.reduce(
    function (valorAcumulado = 0,nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  
  );
  const promedioLista=sumaLista/(lista.length);
  return promedioLista;
  }

//Calculadora de mediana

function medianaSalarios(lista){
    const mitad=parseInt(lista.length/2);

    if (esPar(lista.length)){
        const personitaMItad1=lista[mitad-1];
        const personitaMItad2=lista[mitad];
        const mediana=calcularPromedio([personitaMItad1,personitaMItad2]);
        return mediana;

    } else {
        const personitaMitad=lista[mitad];
        return personitaMitad
    }
}

//Mediana general

const salariosCol=colombia.map(
    function(persona){
        return persona.salary;
    }
);
const salariosCol1=salariosCol;
const salariosColSorted=salariosCol.sort((a,b)=>a-b);

const medianageneralCol=medianaSalarios(salariosColSorted)

//Mediana del top 10%
const spliceStart=parseInt((salariosColSorted.length*90)/100);
const spliceCount=salariosColSorted.length-spliceStart;

const salariosColTop10=salariosColSorted.splice(
    spliceStart,
    spliceCount,
);
const medianaTop10Col=medianaSalarios(salariosColTop10);

console.log(
    //colombia,
    salariosCol1,
    //salariosCol,
    //salariosColSorted,
    //salariosColTop10,
    //medianageneralCol,
    //medianaTop10Col,
)