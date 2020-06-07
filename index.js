var express = require("express");
var bodyParser = require("body-parser");
var ngrok = require('ngrok');

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

    // Query de las actions, si la action es "suma" entonces...
    if (req.body.queryResult.action == "suma"){
        
        // Query de los numeros
        // Se necesita parsear a tipo flotante (talvez llega en tipo objeto)
        let num1 = parseFloat(req.body.queryResult.parameters.num1);
        let num2 = parseFloat(req.body.queryResult.parameters.num2);
        
        // Suma
        let sum = num1 + num2;

        // Output del bot
        response = num1 + " + " + num2 + " es " + sum;
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