"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Correlation = _interopRequireDefault(require("../model/Correlation"));

var _GetCorrelationsResponse = _interopRequireDefault(require("../model/GetCorrelationsResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Analytics service.
* @module api/AnalyticsApi
* @version 0.0.1
*/
var AnalyticsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AnalyticsApi. 
  * @alias module:api/AnalyticsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AnalyticsApi(apiClient) {
    _classCallCheck(this, AnalyticsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the getCorrelationExplanations operation.
   * @callback module:api/AnalyticsApi~getCorrelationExplanationsCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/Correlation>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get correlation explanations
   * Get explanations of  correlations based on data from a single user.
   * @param {Object} opts Optional parameters
   * @param {String} opts.causeVariableName Deprecated: Name of the hypothetical predictor variable.  Ex: Sleep Duration
   * @param {String} opts.effectVariableName Deprecated: Name of the outcome variable of interest.  Ex: Overall Mood
   * @param {Number} opts.causeVariableId Variable id of the hypothetical predictor variable.  Ex: 1398
   * @param {Number} opts.effectVariableId Variable id of the outcome variable of interest.  Ex: 1398
   * @param {String} opts.predictorVariableName Name of the hypothetical predictor variable.  Ex: Sleep Duration
   * @param {String} opts.outcomeVariableName Name of the outcome variable of interest.  Ex: Overall Mood
   * @param {module:api/AnalyticsApi~getCorrelationExplanationsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/Correlation>}
   */


  _createClass(AnalyticsApi, [{
    key: "getCorrelationExplanations",
    value: function getCorrelationExplanations(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'causeVariableName': opts['causeVariableName'],
        'effectVariableName': opts['effectVariableName'],
        'causeVariableId': opts['causeVariableId'],
        'effectVariableId': opts['effectVariableId'],
        'predictorVariableName': opts['predictorVariableName'],
        'outcomeVariableName': opts['outcomeVariableName']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Correlation["default"]];
      return this.apiClient.callApi('/v3/correlations/explanations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getCorrelations operation.
     * @callback module:api/AnalyticsApi~getCorrelationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetCorrelationsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get correlations
     * Get a list of correlations that can be used to display top predictors of a given outcome like mood, for instance.
     * @param {Object} opts Optional parameters
     * @param {String} opts.causeVariableName Deprecated: Name of the hypothetical predictor variable.  Ex: Sleep Duration
     * @param {String} opts.effectVariableName Deprecated: Name of the outcome variable of interest.  Ex: Overall Mood
     * @param {Number} opts.causeVariableId Variable id of the hypothetical predictor variable.  Ex: 1398
     * @param {Number} opts.effectVariableId Variable id of the outcome variable of interest.  Ex: 1398
     * @param {String} opts.predictorVariableName Name of the hypothetical predictor variable.  Ex: Sleep Duration
     * @param {String} opts.outcomeVariableName Name of the outcome variable of interest.  Ex: Overall Mood
     * @param {String} opts.sort Sort by one of the listed field names. If the field name is prefixed with `-`, it will sort in descending order.
     * @param {Number} opts.limit The LIMIT is used to limit the number of results returned. So if youhave 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records. (default to 100)
     * @param {Number} opts.offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause.If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
     * @param {Number} opts.userId User's id
     * @param {String} opts.correlationCoefficient Pearson correlation coefficient between cause and effect after lagging by onset delay and grouping by duration of action
     * @param {String} opts.updatedAt When the record was last updated. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local.
     * @param {Boolean} opts.outcomesOfInterest Only include correlations for which the effect is an outcome of interest for the user
     * @param {String} opts.clientId Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org
     * @param {Boolean} opts.commonOnly Return only public, anonymized and aggregated population data instead of user-specific variables
     * @param {module:api/AnalyticsApi~getCorrelationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetCorrelationsResponse}
     */

  }, {
    key: "getCorrelations",
    value: function getCorrelations(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'causeVariableName': opts['causeVariableName'],
        'effectVariableName': opts['effectVariableName'],
        'causeVariableId': opts['causeVariableId'],
        'effectVariableId': opts['effectVariableId'],
        'predictorVariableName': opts['predictorVariableName'],
        'outcomeVariableName': opts['outcomeVariableName'],
        'sort': opts['sort'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'userId': opts['userId'],
        'correlationCoefficient': opts['correlationCoefficient'],
        'updatedAt': opts['updatedAt'],
        'outcomesOfInterest': opts['outcomesOfInterest'],
        'clientId': opts['clientId'],
        'commonOnly': opts['commonOnly']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetCorrelationsResponse["default"];
      return this.apiClient.callApi('/v3/correlations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return AnalyticsApi;
}();

exports["default"] = AnalyticsApi;
