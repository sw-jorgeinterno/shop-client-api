'use strict';

var swaggerJSDoc = require('swagger-jsdoc');

var options = {
  swaggerDefinition: {
    info: {
      title: "shop-client-api", // Title (required)
      version: "1.0.0", // Version (required)
    },
  },
  apis: ['./impl/getProductsBySearchQueryModelProxy.js','./impl/getProductsBySearchQueryModelNonProxy.js'], // Path to the API docs
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
var swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
