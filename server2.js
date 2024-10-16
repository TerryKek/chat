const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static('public'));

let uzenetek = [];

io.on('connection', (socket) => {
    console.log('Új kliens csatlakozott');

    // Küldjük el az összes meglévő üzenetet az új kliensnek
    socket.emit('uzenetek', uzenetek);

    // Kezeljük az új üzeneteket a kliensről
    socket.on('uj-uzenet', (uzenet) => {
        uzenetek.push(uzenet);
        io.emit('uj-uzenet', uzenet);
    });

    // Kezeljük a kliens leválását
    socket.on('disconnect', () => {
        console.log('Kliens levált');
    });
});

server.listen(3000, () => {
    console.log('Szerver figyel a 3000-es porton');
});