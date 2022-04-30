const salariosCol = colombia.map(per=>per.salary);

const salariosColSorted = salariosCol.sort((a,b)=> a - b)

const isPar = (num)=>num%2===0;

const prom = (arr)=> arr.reduce((a,b)=>a+b,0)/arr.length

const medianaSalarios = (lista)=>{
    const mitad = parseInt(lista.length/2)
    if(isPar(lista.length))     return prom([lista[mitad],lista[mitad-1]])
    else                        return lista[mitad]  
}