//DEFAUL CONFIGURATION CREATE SERVER ********************************************************
var express = require('express')   //Cargamos el modulo de express, llamar la libreria
var app = express()   //Mandamos a llamar a express en una app
var server = require('http').Server(app) //llamamos http y le damos el express
var io = require('socket.io')(server)  //Se le pasa el server con express para entender que se usará como socket


//CARGAR VISTA ESTATICA DE HTML Y ESTILIZADOS DE CLIENT  ************************************
app.use(express.static('client'))  //Nombre de la carpeta que cargará la vista estatica para interactuar


//ABRIR CONEXCIÓN AL SOCKET *****************************************************************
io.on('connection', function(socket){     //Se encarga de ver si alguien se conecto al cliente / socket
    console.log("El nodo con IP: " + socket.handshacke.address + " se ha conectado...") //Recupera ip de la persona y confirma conexion
})


//ASSIGNING THE SERVER TO RUNNING IT  ******************************************************
server.listen(6677, function(){    //Puerto donde se escucharan los datos http://localhost:6677
    console.log("Servidor corriendo correctamente en http://localhost:6677")
})      