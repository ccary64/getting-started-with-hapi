'use strict';

const Hapi = require('hapi');
const Api = require('./api');
const FrontEnd = require('./frontEnd');
const config = require('./config');

(async () => {
  try {
    const server = Hapi.server(config.development);
    const api = new Api(server);
    const frontEnd = new FrontEnd(server);
    await frontEnd.registerRoutes();
    server.start();
  } catch (err) {
    console.log(err);
  }
})();