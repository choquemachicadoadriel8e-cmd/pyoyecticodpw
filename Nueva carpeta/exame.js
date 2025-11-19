function simuladorBanco(){
    let saldo = parseInt(prompt("Introduce tu saldo inicial: "))
    while (true) {
        let opcion = promt("Menu:\n1. Depositar\n2. Retirar\n3. Salir\nSeleccione una opcion:");
        if (opcion === "1") {
            let deposito = parseFloat(prompt("Ingrese el monto a depositar: "));
            saldo += deposito ;
document.getElementById("resultado").innerHTML = "deposito realizado. Saldo actual: Bs " +saldo.toFixed(2);
        }
        else if (opcion === "2"){
            let retiro = parseFloat(promt("Ingrese el monto a retirar: "));
            if (saldo <=retiro){
                saldo-=retiro;
            }
document.getElementById("resultado").innerHTML = "retiro realizado saldo actual: Bs " +saldo.toFixed(2);            
        }else if (opcion === 3);
    document.getElementById("resultado").innerHTML = "Gracias por usar el simulador. Saldo final: Bs " + saldo.toFixed(2);
    break ;}
    {alert ("opcion invalida intente nuevamente.");
    }
}