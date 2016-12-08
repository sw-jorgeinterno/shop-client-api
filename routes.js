'use strict';

const getBannerSalesProxy = require('./impl/getBannerSalesProxy.js');
const getBannerSalesNonProxy = require('./impl/getBannerSalesNonProxy.js');

const routes = {
  init: function(server, proxy) {
    getBannerSalesProxy.setup(server, proxy);
    getBannerSalesNonProxy.setup(server, proxy);
  }
}


module.exports = routes;
