var express = require("express");
var bodyParser = require("body-parser");
var ngrok = require('ngrok');
var json = require('./db.json');

var falsaBD = {
    productos: [
        {
            producto: "papas",
            precio: 5
        },
        {
            producto: "mazapanes",
            precio: 10
        },
        {
            producto: "cheetos",
            precio: 15
        },
        {
            producto: "queso",
            precio: 40
        },
        {
            producto: "frijoles",
            precio: 20
        },
        {
            producto: "chiles",
            precio: 15
        },
        {
            producto: "galletas",
            precio: 12
        }
    ],
}

/*var falsaBD = [
    {
        producto: "papas",
        precio: 10
    },
    {
        producto: "coca",
        precio: 16
    },
    {
        producto: "mazapan",
        precio: 10
    },
    {
        producto: "mantecadas",
        precio: 15
    },
    {
        producto: "Monster",
        precio: 30
    },
    {
        producto: ""
    }
]
*/

// Creacion del servidor
var app = express();

// Asignacion del puerto
var port = process.env.PORT || 3000;

// Talvez sea necesario tener un host
var ip = process.env.IP || "127.0.0.1";


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// post request usando webhook
app.post('/', function (req, res){
console.log(req.body)

// Manipulacion del intent suma
if (req.body.queryResult.intent.displayName == "suma"){
        
        // Query de los numeros
        // Se necesita parsear a tipo flotante (talvez llega en tipo objeto)
        let num1 = parseFloat(req.body.queryResult.parameters.num1);
        let num2 = parseFloat(req.body.queryResult.parameters.num2);
        
        // Suma
        let sum = num1 + num2;

        // Output del bot
        response = num1 + " + " + num2 + " es " + sum;
        console.log(response)
        res.json({
            "fulfillmentText": response
        });
    }

// Manipulacion del intent cantidad
if (req.body.queryResult.intent.displayName == "cantidad"){
        
        // Query de los numeros
        // Se necesita parsear a tipo flotante (talvez llega en tipo objeto)
        let num7 = parseFloat(req.body.queryResult.parameters.num7);
        let num90 = parseFloat(15);
        
        // Suma
        let suma1 = num7 * num90;

        // Output del bot
        response = "El total por tús productos es: " + suma1 + "\n¿Deseas agregar otro producto?";
        console.log(response)
        res.json({
            "fulfillmentText": response
        });
    }

// Manipulacion del intent consultaProducto

if (req.body.queryResult.intent.displayName == "consultaProducto"){

    let consultaproducto = String(req.body.queryResult.parameters.producto);
    let costo;
    
    for(var i = 0; i <= falsaBD.productos.length; i++){
        if (falsaBD.productos[i].producto == consultaproducto){
            console.log("FUNCIONAAAA, ten unas " + consultaproducto + " bro");
            costo = parseFloat(falsaBD.productos[i].precio);
            break;
        }
    }
    
    //let costo = parseFloat(falsaBD.producto.precio);
    

    // Output
    response = "El producto " + consultaproducto + " cuesta " + costo + "$";
    console.log(response);
    res.json({
        "fulfillmentText": response
    });
    
}

});

// Weas del servidor
app.listen(port, ip);

// Funcion asincrona con espera para conexion
(async function () {
    const url = await ngrok.connect(port);
    // Debug xd
    console.log(url);
})();