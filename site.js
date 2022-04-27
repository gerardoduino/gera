
const campo = {
    nombre: "Campo",
    valor : "$2500",
    disponibles: 59, 
    
}
const pulmanLateral = {
    nombre: "Pullman Lateral",
    valor : "$500",
    disponibles : 10, 
    
}

const platea = {
    nombre: "Platea",
    valor: "$7500",
    disponibles: 30, 
    
}

const superPullman = {
    nombre: "Super Pullman",
    valor: "$5500",
    disponibles: 10, 
    
}

const vip = {
    nombre: "Vip",
    valor: "$9000",
    disponibles: 5, 
    
}

console.log (campo.nombre);
console.log (pulmanLateral.nombre);
console.log (superPullman.nombre);
console.log (platea.nombre);
console.log (vip.nombre);

const entrada = ["Costo de servicio: $300", "Costo de envio $500",];
console.log(entrada[0]);
console.log(entrada[1]);

let ingreseEntrada = prompt("Escriba el nombre de la/s entradas que desea comprar. \n Recuerde que a ese valor se re sumara el costo del servicio ($300) mas el envio ($500). \n Escriba OK para finalizar \n Campo $2500 \n Pullman Lateral $3500 \n Super Pullman $5000 \n Platea $7500 \n Vip $9000")
let total = 800

function agregarAlCarrito(){
    while(ingreseEntrada!="ok"){
        switch (ingreseEntrada){
        case "campo":
            console.log("entrada "+ ingreseEntrada)
            total = total + 2500;
        break;
        case "pulman lateral":
            console.log("entrada "+ ingreseEntrada)
            total = total + 3500;
        break;
        case "super pullman":
            console.log("entrada "+ ingreseEntrada)
            total = total + 5000;
        break;
        case "platea":
            console.log("entrada "+ ingreseEntrada)
            total = total + 7500;
        break;
        case "vip":
            console.log("entrada "+ ingreseEntrada)
            total = total + 9000;
        break;    
        default:
            console.log("entrada no encontrado");
        break;           
        
    }
    ingreseEntrada = prompt("Escriba el nombre de la/s entradas que desea comprar. \n Recuerde que a ese valor se re sumara el costo del servicio ($300) mas el envio ($500). \n Escriba OK para finalizar \n Campo $2500 \n Pullman Lateral $3500 \n Super Pullman $5000 \n Platea $7500 \n Vip $9000")
}
console.log("total a pagar: $ " + total)

}

agregarAlCarrito()
