'use strict';

const Path = require('path');

module.exports = class FrontEnd {
  constructor(router) {
    this.router = router;
  }

  async registerRoutes() {
    this.router.get(this.router.paths.baseStatic, this.staticDirectory);
    this.router.get(this.router.paths.catchAll, this.indexPage);
    this.router.all(this.router.paths.catchAll, this.missingPage);
  }

  indexPage(request, h) {
    return h.file('index.html')
  }

  missingPage(request, h) {
    return h.response('The page was not found').code(404);
  }

  get staticDirectory() {
    return {
      directory: {
        path: '.',
        redirectToSlash: false,
        index: false
      }
    }
  }
}
