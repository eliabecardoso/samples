module.exports = class SampleController {
  #service;

  constructor({ service }) {
    this.#service = service;
  }

  async samplePost(req, res) {
    return this.#service.samplePost(req.params);
  }
}