var socket = io();
// .on = escuchar informacion
socket.on('connect', function(){
    console.log('conectado al servidor')
});
socket.on('disconnect', function(){
    console.log('Perdimos conexión con el servidor');
});
// .emit =  enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Juan Fco',
    mensaje: 'Amalia Josefa'
}, function(resp){
    console.log('Respuesta server:', resp);
});
// Escuchar informacion desde servidor
socket.on('enviarMensaje', function(mensaje){
    console.log('Servidor:', mensaje);
});