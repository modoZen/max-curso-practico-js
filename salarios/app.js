//Helpers

const isPar = (num)=>num%2===0;

const prom = (arr)=> arr.reduce((a,b)=>a+b,0)/arr.length

// Calculadora  de medianas


const medianaSalarios = (lista)=>{
    const mitad = parseInt(lista.length/2)
    if(isPar(lista.length))     return prom([lista[mitad],lista[mitad-1]])
    else                        return lista[mitad]  
}

// Mediana general
const salariosCol = colombia.map(per=>per.salary);
const salariosColSorted = salariosCol.sort((a,b)=> a - b)

const medianaGeneral = medianaSalarios(salariosColSorted)

// Mediana del top 10%

const spliceStart = (salariosColSorted.length * 90) / 100;

const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart,spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log(medianaGeneral,medianaTop10Col)