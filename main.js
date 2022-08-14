// venta de productos: elegir stock skincare.

let producto = "";
let cantidad = 0;
let precio = 0;
let precioTotal = 0;
let seguirComprando = true;

function calcularItem (a, b) {
    return a * b
}

do { 
    producto = prompt('Seleccionar qué producto de skincare deseas comprar: \n1-limpiador \n2-crema \n3-protector').toUpperCase();
    cantidad = Number(prompt("Ingresar cantidad del producto elegido."));
    console.log("precioTotal", precioTotal)

    switch (producto) {
            case "1":  
                precio = 1100;     
                alert(`Elegiste el producto: limpiador \nEl total es:${calcularItem(precio, cantidad)}`);
                break;
            case "2":
                precio = 1800;
                alert(`Elegiste el producto: crema \nEl total es:${calcularItem(precio, cantidad)}`);
                break; 
            case "3":
                precio = 2000;
                alert(`Elegiste el producto: protector \nEl total es:${calcularItem(precio, cantidad)}`);
                break;               
            default:
                alert("No hay stock de ese producto");
                cantidad = 0;
                precio = 0;
                break;    
    }
    precioTotal = precioTotal + calcularItem(precio, cantidad);

    seguirComprando = confirm("¿Deseas seguir comprando?");

} while (seguirComprando); 
 alert("El valor total de la compra es: "+ (precioTotal));

const mail = [""];

let nuevoMail = "";
    
do {
 
    if (nuevoMail = "" ) {
         alert("El nombre de usuario no existe, ingrese otro");
    }
 
    nuevoUsuario = prompt("Ingrese su dirección de mail para finalizar la compra:");
} while ( mail.indexOf(nuevoMail) = "" ); 
 
 alert("El nombre de usuario "+nuevoMail+"se creó con éxito");
 

 
