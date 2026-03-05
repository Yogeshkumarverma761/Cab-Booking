const http = require('http');
const app = require('./app');
const { initializeSocket } = require('./socket');
const port = process.env.PORT || 3000;

const server = http.createServer(app);

initializeSocket(server);

console.log("PROBE-V3: [SYSTEM CHECK] Socket.io Fix Applied - 21:26...");
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});