'use strict';

const Hapi = require('hapi');
const Api = require('./api');
const FrontEnd = require('./frontEnd');

const server = Hapi.server({ host: '0.0.0.0', port: 3000 });

const api = new Api(server);
const frontEnd = new FrontEnd(server);

server.start();