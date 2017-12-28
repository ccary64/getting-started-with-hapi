module.exports = class Api {
  constructor(server) {
    this.server = server;
    this.server.route(this.routes());
  }

  routes() {
    return [{
      method: 'GET',
      path: '/',
      options: {
        handler: (request, h) => {
          const response = h.response({state: 'success'});
          response.type('application/json');
          response.header('X-Custom', 'some-value');
          return response;
        }
      }
    }];
  }
}