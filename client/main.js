
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
            <div class="messages">
                <strong class="nick1">${message.nickname}</strong>:
                <p class="msg1">${message.text}</p>
            </div>
        `)           //Plantilla para los mensajes
    }).join('')          //Mete un espacio en cada mensaje

    var div = document.getElementById("container")          //Guarda el div
    div.innerHTML = html                    //Escribe el valor del html en el div en cada iteracion
    div.scrollTop = div.scrollHeight      //Permite siempre estar abajo en el scroll
}

function addMessage(form){             //Recibe el form creado
    var message = {
        nickname: document.querySelector('.nick2').value,      //Obtiene el valor de nickname del form
        text: document.querySelector('.msg2').value            //Obtiene el valor de text del form
    }

    document.querySelector('.nick2').style.display = 'none'    //Quita el nickname para no ser modificado

    socket.emit('add-message', message)        //Le envia al servidor el mensaje capturado
    return false   //Corta la ejecución del codigo
}