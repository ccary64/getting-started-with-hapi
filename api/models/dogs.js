'use strict';

const dogModel = {
  name: { type: String, required: true, index: { unique: true } },
  breed: { type: String, required: true },
  age: { type: Number, required: true },
  image: { type: String, required: true }
};

module.exports = dogModel;