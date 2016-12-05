
const shop = require('./routes/shop');

const routes = {
  init: function(server, proxy) {
    shop.setup(server, proxy);
  }
}


module.exports = routes;
