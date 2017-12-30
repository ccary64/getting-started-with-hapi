class BaseRoute {
  get verbs() {
    return {
      GET: 'GET',
      PUT: 'PUT',
      POST: 'POST',
      DELETE: 'DELETE'
    }
  }

  get paths() {
    return {
      baseApi: '/api',
      baseStatic: '/{param*}',
      public: '/public',
      base: '/'
    }
  }

  create(method, path, controller) {
    return { method, path, handler: controller}
  }
}

module.exports = new BaseRoute();