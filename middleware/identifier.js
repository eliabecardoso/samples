const cls = require('@eliabecardoso/cls-hooked');

module.exports = {
  generator: (req, res) => {
    const requestId = req.headers['x-request-id'] || Math.random().toString();
    
    console.log('requestId generated.');
    
    req.requestId = requestId;
    const namespace = cls.getNamespace('sample');
    namespace.set('reqId', req.requestId);
  }
}