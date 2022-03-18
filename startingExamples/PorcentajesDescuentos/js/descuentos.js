
 const precioOriginal = 120;
 const descuento = 18;



function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;

    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const precio = parseFloat(document.getElementById("InputPrice").value);

    const descuento = parseFloat(document.getElementById("InputDiscount").value);



    if(descuento > 5 && descuento < 95){
        const resultadoPrecioConDescuento = calcularPrecioConDescuento(precio, descuento);

        document.getElementById("priceP").innerText = "El precio con descuento es " + resultadoPrecioConDescuento;

        
    } else {
        alert("No se puede calcular ese descuento, ingresa de nuevo el descuentyo")
    }

   
}
