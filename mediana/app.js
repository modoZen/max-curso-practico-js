var reducer = (acumulado,actual)=> acumulado + actual;
var promedio = (arr)=> arr.reduce(reducer,0)/arr.length;

const lista1 = [
    100,
    200,
    400000000,
    800,
    500,
]

let compare = (a,b)=> a - b 

let mediana = (arr) =>{
    let lista = arr.sort(compare)
    if(lista.length % 2 ===0 )     return promedio([lista[parseInt(lista.length/2)],lista[parseInt((lista.length/2)-1)]])
    else                           return lista[parseInt(lista.length/2)]
}