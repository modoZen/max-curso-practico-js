const valores = [100,200,300,500];

var reducer = (acumulado,actual)=> acumulado + actual;

var promedio = (arr)=> arr.reduce(reducer,0)/arr.length;