const cls = require('@eliabecardoso/cls-hooked');

module.exports = class SampleRepository {
  constructor() {}
  
  async save() {
    const namespace = cls.getNamespace('sample');
    const user = namespace.get('user');

    console.log('Repository:', { user });

    return new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * 8000) + 1000));
  }
}