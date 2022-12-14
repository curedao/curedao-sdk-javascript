/**
 * CureDAO Unified Health API
 * A community-owned platform for crowdsourced clinical research
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Card from '../model/Card';
import FeedResponse from '../model/FeedResponse';

/**
* Feed service.
* @module api/FeedApi
* @version 0.0.1
*/
export default class FeedApi {

    /**
    * Constructs a new FeedApi. 
    * @alias module:api/FeedApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getFeed operation.
     * @callback module:api/FeedApi~getFeedCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FeedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Tracking reminder notifications, messages, and study results
     * Tracking reminder notifications, messages, and study results
     * @param {Object} opts Optional parameters
     * @param {String} opts.sort Sort by one of the listed field names. If the field name is prefixed with `-`, it will sort in descending order.
     * @param {Number} opts.userId User's id
     * @param {String} opts.createdAt When the record was first created. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local.
     * @param {String} opts.updatedAt When the record was last updated. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local.
     * @param {Number} opts.limit The LIMIT is used to limit the number of results returned. So if youhave 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records. (default to 100)
     * @param {Number} opts.offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause.If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
     * @param {String} opts.clientId Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org
     * @param {module:api/FeedApi~getFeedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FeedResponse}
     */
    getFeed(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'sort': opts['sort'],
        'userId': opts['userId'],
        'createdAt': opts['createdAt'],
        'updatedAt': opts['updatedAt'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'clientId': opts['clientId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth', 'curedao_oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = FeedResponse;
      return this.apiClient.callApi(
        '/v3/feed', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postFeed operation.
     * @callback module:api/FeedApi~postFeedCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FeedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post user interactions with feed
     * Post user actions on feed cards
     * @param {Array.<module:model/Card>} body Id of the tracking reminder notification to be snoozed
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId User's id
     * @param {String} opts.clientId Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org
     * @param {module:api/FeedApi~postFeedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FeedResponse}
     */
    postFeed(body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postFeed");
      }

      let pathParams = {
      };
      let queryParams = {
        'userId': opts['userId'],
        'clientId': opts['clientId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth', 'curedao_oauth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = FeedResponse;
      return this.apiClient.callApi(
        '/v3/feed', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
