
var socket = io.connect('http://192.168.1.72:6677', {'forceNew': true}) //se establece conexion del socket de la IP IPv4 
                        //192.168.1.72 : CONECTION AL SERVER (6677),  fuerza la conection

//Escucha el mensaje del servido
socket.on('messages', function(data){      //funcion de callback que recibe los parametros del servidor y recoge el mensaje
    console.log(data)
    render(data)                          //manda a llamar la función render con los valores de data

    
})

function render(data){        //recibe los valores de data
    var html = data.map(function(message){       //Itera entre todos los mensajes
        return (`         
            <div class="message">
                <strong>${message.nickname}</strong>:
                <p>${message.text}</p>
            </div>
        `)           //Plantilla para los mensajes
    }).join('')          //Mete un espacio en cada mensaje

    document.getElementById("messages").innerHTML = html
}