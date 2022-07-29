const Controller = require('../controller/SampleController');
const Service = require('../service/SampleService');
const Repository = require('../repository/SampleRepository');

const repository = new Repository();
const service = new Service({ repository })
const controller = new Controller({ service });

module.exports = {
  controller,
};