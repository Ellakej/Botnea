var app = require('./firebase');
var firebase = require('firebase/app');
//var db = firebase.firebase;
var n = 0;                                          // Contador
var opcTienda = null;                               // Variable para seleccion de tienda
// EXPERIMENTAL, creo necesario eliminarlo para reducir el consumo de memoria (optimizacion)
var idtiendas = [];

console.log("\nBotnea Test js\n\n Selecciona una tienda para mostrar opciones\n\n Tiendas:\n");


// Instancia de la base de datos
const db = firebase.firestore();

// Pasos a seguir...
    // Mostrar las tiendas (ciclo)
    // Seleccionar la ID
    // Obtener la ID 
    // Hacer una consulta de los datos con esa ID

    // v2
    // Mostrar las tiendas (ciclo)
    // Destruccion del objeto (por seguridad)
    // Seleccionar la tienda por nombre (se relaciona la ID)
    // Guardar el objeto de la tienda seleccionada
    // 



// 1
// Mostrar las tiendas (ciclo) OUTPUT
function cicloBD() {
    // Consulta a la base de datos
    db.collection('tiendas').get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
            n += 1;
            var ID = doc.id;                        // Variable que almacena la ID
            idtiendas[n] = ID;
            var datos = doc.data();                 // Variable que guarda el objeto de la ID actual

            // Debug
            console.log("\t" + n + " " +  datos.nombreTienda + "\tID: " + ID);

            var datos = null;                      // Eliminado el objeto por seguridad
        });
    })
    .catch((err) => {
        console.log('Error obteniendo documentos', err);
    });
}


function conexionBD() { 
    return new Promise(resolve => {
        setTimeout(() => {
            cicloBD();
            resolve("Sincronizacion");
      }, 15000);                                                 // Tiempo de espera
    });
  }
  


// 2
// Seleccionar la tienda por nombre (seleccionado 1) INPUT
async function consultaTienda() {

    console.log("\n Conectando a la base de datos...");

    // Await a modo de sleep, realmente no espero ningun dato de la funcion conexionBD
    var respuesta = await conexionBD();

    // Consulta de datos dentro del paso 2
    console.log(respuesta);

    console.log("Finalizando...");
  }

// Llamada a la funcion de consulta de tienda para primero consultar la base de datos y luego enviar la tienda
consultaTienda();






//var ID = db.collection('tiendas').doc();

// Debug
//var nombre = db.collection('tiendas').doc('ORpi7ezc53vFZiyPi4YR').nombreTienda.get()
//console.log(nombre);

// Consulta a la base de datos con todo el objeto "tiendas"
/*db.collection('tiendas').get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
            console.log(doc.id, '=>', doc.data());
        });
    })
    .catch((err) => {
        console.log('Error obteniendo documentos', err);
    });
*/