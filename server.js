'use strict';

const Hapi = require('hapi');
const Api = require('./api');
const FrontEnd = require('./frontEnd');
const config = require('./config');
const Router = require('./shared/BaseRouter');

(async () => {
  try {
    const server = Hapi.server(config.development);

    const router = new Router(server);
    const api = new Api(router);
    const frontEnd = new FrontEnd(router);

    await router.plugins();
    
    api.registerRoutes();
    await frontEnd.registerRoutes();

    server.start();
  } catch (err) {
    console.log(err);
  }
})();