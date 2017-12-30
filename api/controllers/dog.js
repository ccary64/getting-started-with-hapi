const models =  require('../models');
const { Dog } = models;

/**
 * List Dogs
 */
exports.list = (req, h) => Dog;

/**
 * Get Dog by ID
 */
exports.get = (req, h) => Dog;


/**
 * POST a Dog
 */
exports.create = (req, h) => Dog;

/**
 * PUT | Update Dog by ID
 */
exports.update = (req, h) => Dog;


/**
 * Delete Dog by ID
 */
exports.remove = (req, h) => Dog;