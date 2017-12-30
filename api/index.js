const routesBuilder = require('../shared/RouteClass');
const controllers = require('./controllers');

module.exports = class Api {
  constructor(server) {
    this.server = server;
    this.server.route(this.routes);
  }

  get routes() {
    return [
      routesBuilder.create(routesBuilder.verbs.GET, routesBuilder.paths.baseApi, controllers.Dog.create),
      routesBuilder.create(routesBuilder.verbs.POST, routesBuilder.paths.baseApi, controllers.Dog.update),
    ];
  }
}