'use strict';

const Path = require('path');
const routesBuilder = require('../shared/RouteClass');
const Inert = require('inert');

module.exports = class FrontEnd {
  constructor(server) {
    this.server = server;
  }

  async registerRoutes() {
    await this.server.register(Inert);
    this.server.route(
      routesBuilder.create(
        routesBuilder.verbs.GET,
        routesBuilder.paths.baseStatic,
        this.staticDirectory
      )
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
