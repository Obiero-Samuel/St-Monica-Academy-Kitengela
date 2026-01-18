// Emit a test notification every 10 seconds
setInterval(() => {
    io.emit('notification', '🔔 This is a real-time notification!');
}, 10000);
// Real-time chart demo data
let chartData = [
    { name: 'A', value: 12 },
    { name: 'B', value: 19 },
    { name: 'C', value: 7 },
    { name: 'D', value: 15 }
];

setInterval(() => {
    // Randomly update chart data
    chartData = chartData.map(d => ({ ...d, value: Math.max(1, d.value + Math.floor(Math.random() * 5 - 2)) }));
    io.emit('chart:update', chartData);
}, 2000);
const express = require('express');
const http = require('http');
const cors = require('cors');
const dotenv = require('dotenv');
const { Server } = require('socket.io');

dotenv.config();
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});


app.use(cors());
app.use(express.json());
app.use('/api', require('./routes/api.routes'));


let onlineUsers = new Map(); // socket.id -> username
let sharedDoc = { text: '' };

io.on('connection', (socket) => {
    // Listen for user:online event to register username
    socket.on('user:online', (username) => {
        onlineUsers.set(socket.id, username);
        io.emit('presence:update', Array.from(onlineUsers.values()));
    });

    // Remove user on disconnect
    socket.on('disconnect', () => {
        onlineUsers.delete(socket.id);
        io.emit('presence:update', Array.from(onlineUsers.values()));
    });

    // Send current document state
    socket.emit('doc:update', sharedDoc);

    // Handle document edits
    socket.on('doc:edit', (newText) => {
        sharedDoc.text = newText;
        io.emit('doc:update', sharedDoc);
    });
});

app.get('/', (req, res) => {
    res.send('Interactive Website Backend Running');
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
