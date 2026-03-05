const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');
const mapsRoutes = require('./routes/maps.routes');
const rideRoutes = require('./routes/ride.routes');

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



const fs = require('fs');

// Serve static files from the frontend/dist directory if it exists
const frontendPath = path.join(__dirname, '../frontend/dist');
if (fs.existsSync(frontendPath)) {
    app.use(express.static(frontendPath));
}

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/users', userRoutes);
app.use('/captains', captainRoutes);
app.use('/maps', mapsRoutes);
app.use('/rides', rideRoutes);

// For any other route, serve the index.html from the frontend/dist (for SPA routing)
app.get('*', (req, res) => {
    if (fs.existsSync(path.join(frontendPath, 'index.html'))) {
        res.sendFile(path.join(frontendPath, 'index.html'));
    } else {
        // If the file doesn't exist (backend-only deployment), send "Hello World" or API info
        res.status(200).send('API is running. Backend-only deployment.');
    }
});

module.exports = app;

