'use strict';

const Path = require('path');
const Router = require('../shared/BaseRouter');
const Inert = require('inert');

module.exports = class FrontEnd {
  constructor(server) {
    this.server = server;
  }

  async registerRoutes() {
    await this.server.register(Inert);
    this.server.route(
      Router.get(Router.paths.baseStatic, this.staticDirectory)
    );
  }

  get staticDirectory() {
    return {
      directory: {
        path: '.',
        redirectToSlash: true,
        index: true
      }
    }
  }
}
