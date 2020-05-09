const { io } = require('../server');

io.on('connection', (cliente) => {
    console.log('Usuario conectado');

    //Escuchar Información
    cliente.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    cliente.on('enviarMensaje', (mensaje, callback) => {
        console.log('Escuchando mensaje', mensaje);

        cliente.broadcast.emit('enviarMensaje', mensaje);
        // if (mensaje.usuario) {
        //     callback({
        //         response: 'TODOS SALIO BIEN!',
        //     });
        // } else {
        //     callback({
        //         response: 'ERROR!',
        //     });
        // }
    });

    //Enviar Información
    cliente.emit('enviarMensaje', { nombre: 'NodeJS', mensaje: 'Te estamos esperando' });
});