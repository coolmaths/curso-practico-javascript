const cantidadDatos=document.getElementById("cantidadDatos");

function calcularPromedio(lista){
  /*   let sumaLista=0;
    for (let i=0;i<lista.length;i++){
    sumaLista=sumaLista + lista[i];
} */
const sumaLista=lista.reduce(
  function (valorAcumulado = 0,nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  }

);
const promedioLista=sumaLista/(lista.length);
return promedioLista;
}

function esPar(numerito){
    if (numerito%2===0){
      return true;
    } else {
      return false;
    }
  }

function calcularMediana(lista){
  lista.sort((a,b)=>a-b);
  const mitadLista=lista.length/2;
  
  let mediana;
  if (esPar(lista.length)){
    const elem1=lista[mitadLista-1];
    const elem2=lista[mitadLista];
    mediana=calcularPromedio([elem1,elem2]);
  } else {
    mediana=lista[parseInt(mitadLista)];
  };
  return mediana
}
function calcularModa(lista){
  const listaCount={};
  lista.map(
    function(elemento){
      if(listaCount[elemento]){
        listaCount[elemento]+=1;
      } else {
        listaCount[elemento]=1;
      }
    }
  );
  const listaArray=Object.entries(listaCount).sort(
    function(elementoA,elementoB){
      return elementoA[1]-elementoB[1];
    }
  );
  const moda=listaArray[listaArray.length-1]
  return moda
}


function calcularPromedioPonderado(notes){
  const notesWitnCredit = notes.map(function (noteObject){
    return noteObject.note*noteObject.credit;
  });
  const sumOfNotesWithCredit=notesWitnCredit.reduce(function(sum=0,newVal){
    return sum+newVal;
  });
  const credits=notes.map(function(noteObject){
    return noteObject.credit;
  });
  const sumOfCredits=credits.reduce(function(sum=0,newVal){
    return sum+newVal;
  });
  const promedioPonderadoConCreditos=sumOfNotesWithCredit/sumOfCredits;
  return promedioPonderadoConCreditos;
}