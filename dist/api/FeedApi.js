"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Card = _interopRequireDefault(require("../model/Card"));

var _FeedResponse = _interopRequireDefault(require("../model/FeedResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Feed service.
* @module api/FeedApi
* @version 0.0.1
*/
var FeedApi = /*#__PURE__*/function () {
  /**
  * Constructs a new FeedApi. 
  * @alias module:api/FeedApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function FeedApi(apiClient) {
    _classCallCheck(this, FeedApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
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


  _createClass(FeedApi, [{
    key: "getFeed",
    value: function getFeed(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'sort': opts['sort'],
        'userId': opts['userId'],
        'createdAt': opts['createdAt'],
        'updatedAt': opts['updatedAt'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'clientId': opts['clientId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _FeedResponse["default"];
      return this.apiClient.callApi('/v3/feed', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "postFeed",
    value: function postFeed(body, opts, callback) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postFeed");
      }

      var pathParams = {};
      var queryParams = {
        'userId': opts['userId'],
        'clientId': opts['clientId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _FeedResponse["default"];
      return this.apiClient.callApi('/v3/feed', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return FeedApi;
}();

exports["default"] = FeedApi;
