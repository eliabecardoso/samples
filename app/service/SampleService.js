const cls = require('@eliabecardoso/cls-hooked');

module.exports = class SampleService {
  #repository;
  
  constructor({ repository }) {
    this.#repository = repository;
  }
  
  async samplePost() {
    const namespace = cls.getNamespace('sample');
    const reqId = namespace.get('reqId');

    console.log('Service:', { reqId });

    await this.#repository.save();
  }
}