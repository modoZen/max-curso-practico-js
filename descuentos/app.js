function calcularPrecioConDescuento(precio, descuento) {
    console.log(descuento)
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const cupons = [
        {
            name: 'maxter',
            discount: 25
        },
        {
            name: 'mux',
            discount:35
        }
    ]
    const inputPrice = document.getElementById('InputPrice');
    const priceValue = inputPrice.value;
    // const inputDiscount = document.getElementById('InputDiscount');
    // const discountValue = inputDiscount.value;
    const inputCupon = document.getElementById('InputCupon');
    const cuponValue = inputCupon.value;
    const cupon = cupons.find(cupon=> cupon.name === cuponValue)
    const avisoP = document.getElementById('AvisoP');
    const resultP = document.getElementById('ResultP');
    if(!cupon){
        avisoP.innerText = cuponValue!=''?`Cupon invalido`:'';
        const precioConDescuento = calcularPrecioConDescuento(priceValue,0 );
        resultP.innerText = `El precio con descuento es: $${precioConDescuento}`;
    } else {
        avisoP.innerText = ``;
        const precioConDescuento = calcularPrecioConDescuento(priceValue,cupon.discount);
        resultP.innerText = `El precio con descuento es: $${precioConDescuento}`;
    }
}


// inputPrice.addEventListener('keyup',onClickButtonPriceDiscount)

// inputDiscount.addEventListener('keyup',onClickButtonPriceDiscount)