const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/animals', { target: 'https://api.petfinder.com/v2/animals'}));
};