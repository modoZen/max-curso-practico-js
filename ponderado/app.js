const notas = [
    {
        nota:20,
        peso:2
    },
    {
        nota:10,
        peso:1
    },
    {
        nota:15,
        peso:3
    }
];

function reducerTotal(acumulado, actual){
    return acumulado + (actual.peso * actual.nota)
}

function reducerPesos(acumulado, actual){
    return acumulado + actual.peso
}

function calcularPromedioPonderado(lista) {
    return lista.reduce(reducerTotal,0)/lista.reduce(reducerPesos,0)
}