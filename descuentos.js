
function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento=100-descuento;
    const precioConDescuento=(precio*porcentajePrecioConDescuento/100);
    return precioConDescuento;
}
function onClickButtonPriceDiscount(){
    const inputPrice=document.getElementById("inputPrice");
    const priceValue=inputPrice.value;
    const inputDiscount=document.getElementById("inputDiscount");
    const discount=inputDiscount.value;
    const precioConDescuento=calcularPrecioConDescuento(priceValue,discount);
    const resultP=document.getElementById("resultP");
    resultP.innerText="El precio con descuento es de: $"+precioConDescuento;
}

function onClickCoupon(){
    const coupons=[
        "cupon1",
        "cupon2",
        "cupon3"
    ]
    const inputPrice=document.getElementById("inputPrice");
    const priceValue=inputPrice.value;
    const inputCoupon=document.getElementById("inputCoupon");
    const Coupon=inputCoupon.value;
    switch(Coupon){
        case coupons[0]:
            descuento=30;
        break;
        case coupons[1]:
            descuento=20;
        break;
        case coupons[2]:
            descuento=10;
        break;
    }
    const precioDescuentoCupon=calcularPrecioConDescuento(priceValue,descuento);
    const resultPC=document.getElementById("resultPC");
    resultPC.innerText="El precio con descuento por el cupon es de: $"+precioDescuentoCupon;
}