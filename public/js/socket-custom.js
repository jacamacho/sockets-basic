var socket = io();

//Escuchar Información
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

socket.on('enviarMensaje', (mensaje) => {
    console.log('NodeJS te dice: ', mensaje);
});

//Enviar Información
socket.emit('enviarMensaje', {
    usuario: 'John Andrés',
    mensaje: 'Hola mundo'
}, function(data) {
    console.log('Se lanzo el callback', data);
});