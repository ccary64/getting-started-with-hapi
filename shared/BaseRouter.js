class BaseRouter {
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

  get(path, handler) {
    return { method: this.verbs.GET, path, handler }
  }

  post(path, handler) {
    return { method: this.verbs.POST, path, handler }
  }

  put(path, handler) {
    return { method: this.verbs.PUT, path, handler }
  }

  delete(path, handler) {
    return { method: this.verbs.DELETE, path, handler }
  }
}

module.exports = new BaseRouter();