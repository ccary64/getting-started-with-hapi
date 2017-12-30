const Router = require('../shared/BaseRouter');
const controllers = require('./controllers');

module.exports = class Api {
  constructor(server) {
    this.server = server;
    this.server.route(this.routes);
  }

  get routes() {
    return [
      Router.get(Router.paths.baseApi, controllers.Dog.create),
      Router.post(Router.paths.baseApi, controllers.Dog.update),
    ];
  }
}