'use strict';

const getProductsBySearchQueryModelProxy = require('./impl/getProductsBySearchQueryModelProxy.js');
const getProductsBySearchQueryModelNonProxy = require('./impl/getProductsBySearchQueryModelNonProxy.js');

const routes = {
  init: function(server, proxy) {
    getProductsBySearchQueryModelProxy.setup(server, proxy);
    getProductsBySearchQueryModelNonProxy.setup(server, proxy);
  }
}


module.exports = routes;
