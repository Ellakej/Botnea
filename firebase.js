// Nucleo de firestore obligatorio
var firebase = require('firebase/app');

// Listado de productos de firestore
require('firebase/firestore');

//const admin = require('firebase-admin');

//const functions = require('firebase-functions');

// Objeto propio de firebase (credenciales)
var firebaseConfig = {

    apiKey: "AIzaSyAQLUSoqVkQUrWx94RjWnSj1WhhXZ0Pwns",
    authDomain: "bottest-d566c.firebaseapp.com",
    databaseURL: "https://bottest-d566c.firebaseio.com",
    projectId: "bottest-d566c",
    storageBucket: "bottest-d566c.appspot.com",
    messagingSenderId: "373379345918",
    appId: "1:373379345918:web:3c0b0fba78aeee7a4a64af",
    measurementId: "G-8C8QGDFGH9"

};

// Inicializar la app
let app = firebase.initializeApp(firebaseConfig);
return app;


//admin.initializeApp(functions.config().firebase);
//let db = admin.firestore();




// Extension de analiticas de datos [Servicio premium de botnea]
//firebase.analytics();