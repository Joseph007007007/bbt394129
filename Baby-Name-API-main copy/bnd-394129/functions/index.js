const functions = require('firebase-functions');
const server = require('./server');
const bna394129 = functions.runWith({ memory: "2GB", timeoutSeconds: 60 })
                     .https
                     .onRequest(server);

module.exports = { bna394129 };
