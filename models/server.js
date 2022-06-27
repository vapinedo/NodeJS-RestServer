const express = require('express');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // Middlewares
        this.middlewares();

        // App Routes
        this.routes();
    }

    middlewares() {
        // public folder
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.get('/api', (req, res) => {
            res.send('Hello World');
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Listening on port:', this.port);
        });
    }
}
module.exports = Server;