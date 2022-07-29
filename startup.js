const http = require('http');
const cls = require('@eliabecardoso/cls-hooked');

const { authentication } = require('./middleware/authentication');
const { generator: identifierGenerator } = require('./middleware/identifier');

const { controller } = require('./app/factory/sampleFactory');

const namespace = cls.createNamespace('sample');

const PORT = 8000;

const server = http.createServer(async (req, res) => {
  namespace.bindEmitter(req);
  namespace.bindEmitter(res);
 
  namespace.runPromise(async () => { 
    try {
      authentication(req, res);
      identifierGenerator(req, res);
    } catch (error) {
      console.log(error)
    }
   
  
    await new Promise(resolve => {
      resolve(controller.samplePost(req, res));
    });
  
    res.statusCode = 200;
    res.end('OK');
  });
});

server.listen(PORT, (app) => {
  console.log('STARTED AT PORT', PORT, '\n');
});
