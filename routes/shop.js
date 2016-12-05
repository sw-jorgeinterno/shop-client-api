'use strict';

module.exports.setup = function(server, proxy) {

  /**
 * @swagger
 * definitions:
 *   SearchQueryModel:
 *       - name: query
 *         description: query string.
 *         required: true
 *         type: string
 *       - name: pageNumber
 *         description: number of page to fetch.
 *         required: true
 *         type: string
 *       - name: pageSize
 *         description: number of products per page.
 *         required: true
 *         type: string
 *       - name: facetFilters
 *         description: facets.
 *         required: false
 *         type: array
 *       - name: categories
 *         description: product categories.
 *         required: false
 *         type: array
 */

  /**
   * @swagger
   * /v1/accounts/{accountId}/products/:
   *   post:
   *     description: Proxy endpoint for querying products by search model
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: searchQueryModel
   *         description: searchQueryModel object
   *         in:  body
   *         required: true
   *         type: string
   *         schema:
   *           $ref: '#/definitions/SearchQueryModel'
   *       - name: accountId
   *         description: account id
   *         type:  string
   *         required: true
   *         in: path
   *     responses:
   *       200:
   *         description: getProductBySearchQueryModel
   */
  server.post('/v1/accounts/:accountId/products/', (req, res, next) => {
    proxy.web(req, res);
    return next();
  });


  /**
   * @swagger
   * /mobile/v1/accounts/{accountId}/products/:
   *   post:
   *     description: Custom endpoint for querying products by search model
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: searchQueryModel
   *         description: searchQueryModel object
   *         in:  body
   *         required: true
   *         type: string
   *         schema:
   *           $ref: '#/definitions/SearchQueryModel'
   *       - name: accountId
   *         description: account id
   *         type:  string
   *         required: true
   *         in: path
   *     responses:
   *       200:
   *         description: getProductBySearchQueryModel
   */
  server.post('/mobile/v1/accounts/:accountId/products/', (req, res, next) => {

    const originalUrl = req.url.substr(7);
    console.log('CUSTOM ENDPOINT: ' + originalUrl);
    res.send(200, 'CUSTOM ENDPOINT');
    return next()
  });
}
