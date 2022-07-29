const cls = require('@eliabecardoso/cls-hooked');


const expressjwt = (req) => {
  const id = Math.floor(Math.random() * 10) + 1;
  req.user = { id, user: `sample${id}` };
};

module.exports = {
  authentication: (req, res) => {
    
    expressjwt(req, res);
    
    console.log('user auth with success');
    
    const namespace = cls.getNamespace('sample');
    namespace.set('user', req.user);
  }
}