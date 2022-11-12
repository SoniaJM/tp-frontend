const borrar = document.querySelector('#borrar');
const resumen = document.querySelector('#resumen');

//resumen.onclick = 
function totalCuenta(){
    let total = document.querySelector('#total');
    let cantidad = document.querySelector('#cantidadTicket').value;
    let descuento = document.querySelector('.form-select').value;

    if (descuento == "estudiante"){
        total.innerHTML = 200*cantidad*0.2;
    } else if(descuento == "trainee"){
        total.innerHTML = 200*cantidad*0.5;
    } else {
        total.innerHTML = 200*cantidad*0.85;
    }
}

borrar.onclick = function(){
    
    total.innerHTML = " ";
    cantidadTicket.value= this.ariaPlaceholder;
    document.getElementById("categorias").value  = "estudiante";
}