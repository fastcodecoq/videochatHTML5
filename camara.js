var servidor = require('socket.io').listen(4356);
servidor.sockets.on('connection', init);

function init (socket){
	socket.on('getCam', postCam);
}
function postCam (data){
	console.log('Objeto recivido: ' + data);
	console.log(data);
	servidor.sockets.emit('postCam', data);
	console.log('Objeto enviado: ' + data);
	console.log(data);
}
