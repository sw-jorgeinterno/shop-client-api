'use strict';

const assert = require('assert');

module.exports.setup = function(server, proxy) {

  /**
   * @swagger
   * /mobile/ApacHandlers.ashx/GetSalesBanners:
   *  get:
   *   description: Custom endpoint for querying banner sales
   *   produces:
   *    - application/json
   *   parameters:
   *    - name: saleCategoryID
   *      description: saleCategoryID
   *      required: true
   *      type: string
   *      in: query
   *   
   *    - name: topSalesCount
   *      description: topSalesCount
   *      required: true
   *      type: number
   *      in: query
   *   
   *    - name: getBigImages
   *      description: getBigImages
   *      required: true
   *      type: boolean
   *      in: query
   *   
   *    - name: getPromotion
   *      description: getPromotion
   *      required: true
   *      type: boolean
   *      in: query
   *   
   *    - name: getPriorityStartDate
   *      description: getPriorityStartDate
   *      required: true
   *      type: boolean
   *      in: query
   *   
   *    - name: useOzsaleSize
   *      description: useOzsaleSize
   *      required: true
   *      type: boolean
   *      in: query
   *   
   *    - name: groupNo
   *      description: groupNo
   *      required: true
   *      type: string
   *      in: query
   *   
   *    - name: languageID
   *      description: languageID
   *      required: true
   *      type: string
   *      in: query
   *   
   *    - name: countryID
   *      description: countryID
   *      required: true
   *      type: string
   *      in: query
   *   
   *    - name: userGroup
   *      description: userGroup
   *      required: true
   *      type: string
   *      in: query
   *   
   *   
   *   responses:
   *       200: OK
   *   
   */
  server.get('/mobile/ApacHandlers.ashx/GetSalesBanners', (req, res, next) => {
    assert(false, 'Implement this');
    return next();
  });

}
