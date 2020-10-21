const { io } = require('../server');

// Saber cuando un usuario se conecta al servidor
io.on('connection', (client) => {
    console.log('Usuario conectado');
    // Enviar mensaje de bienvenida
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    // Identificar cuando el usuario se desconecto del servidor.
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
    // Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data.usuario);
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        // callback();
        // if(mensaje.usuario){
        //     callback({
        //         resp: 'TODO SALIO BIEN!'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIO MAL!!!!'
        //     });
        // }
    });
});