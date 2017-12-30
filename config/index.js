const Router = require('../shared/BaseRouter');
const Path = require('path');

const all = {
  routes: {
    files: {
      relativeTo: Path.join(__dirname, '..', Router.paths.public)
    }
  }
};

const development = {
  host: '0.0.0.0',
  port: 3000,
};

exports.development = Object.assign(all, development);
