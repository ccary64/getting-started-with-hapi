const controllers = require('./controllers');

module.exports = class Api {
  constructor(router) {
    this.router = router;
  }

  registerRoutes() {
    this.router.get(this.router.paths.baseApi, controllers.Dog.create);
    this.router.post(this.router.paths.baseApi, controllers.Dog.update);
  }
}