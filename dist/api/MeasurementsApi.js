"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CommonResponse = _interopRequireDefault(require("../model/CommonResponse"));

var _Measurement = _interopRequireDefault(require("../model/Measurement"));

var _MeasurementSet = _interopRequireDefault(require("../model/MeasurementSet"));

var _MeasurementUpdate = _interopRequireDefault(require("../model/MeasurementUpdate"));

var _Pair = _interopRequireDefault(require("../model/Pair"));

var _PostMeasurementsResponse = _interopRequireDefault(require("../model/PostMeasurementsResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Measurements service.
* @module api/MeasurementsApi
* @version 0.0.1
*/
var MeasurementsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new MeasurementsApi. 
  * @alias module:api/MeasurementsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function MeasurementsApi(apiClient) {
    _classCallCheck(this, MeasurementsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the deleteMeasurement operation.
   * @callback module:api/MeasurementsApi~deleteMeasurementCallback
   * @param {String} error Error message, if any.
   * @param {module:model/CommonResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete a measurement
   * Delete a previously submitted measurement
   * @param {module:api/MeasurementsApi~deleteMeasurementCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/CommonResponse}
   */


  _createClass(MeasurementsApi, [{
    key: "deleteMeasurement",
    value: function deleteMeasurement(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CommonResponse["default"];
      return this.apiClient.callApi('/v3/measurements/delete', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getMeasurements operation.
     * @callback module:api/MeasurementsApi~getMeasurementsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Measurement>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get measurements for this user
     * Measurements are any value that can be recorded like daily steps, a mood rating, or apples eaten.
     * @param {Object} opts Optional parameters
     * @param {String} opts.variableName Name of the variable you want measurements for
     * @param {String} opts.sort Sort by one of the listed field names. If the field name is prefixed with `-`, it will sort in descending order.
     * @param {Number} opts.limit The LIMIT is used to limit the number of results returned. So if youhave 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records. (default to 100)
     * @param {Number} opts.offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause.If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
     * @param {module:model/String} opts.variableCategoryName Ex: Emotions, Treatments, Symptoms...
     * @param {String} opts.updatedAt When the record was last updated. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local.
     * @param {Number} opts.userId User's id
     * @param {String} opts.sourceName ID of the source you want measurements for (supports exact name match only)
     * @param {String} opts.connectorName Ex: facebook
     * @param {String} opts.value Value of measurement
     * @param {module:model/String} opts.unitName Ex: Milligrams
     * @param {String} opts.earliestMeasurementTime Excluded records with measurement times earlier than this value. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss  datetime format. Time zone should be UTC and not local.
     * @param {String} opts.latestMeasurementTime Excluded records with measurement times later than this value. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss  datetime format. Time zone should be UTC and not local.
     * @param {String} opts.createdAt When the record was first created. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local.
     * @param {Number} opts.id Measurement id
     * @param {Number} opts.groupingWidth The time (in seconds) over which measurements are grouped together
     * @param {String} opts.groupingTimezone The time (in seconds) over which measurements are grouped together
     * @param {Boolean} opts.doNotProcess Ex: true
     * @param {String} opts.clientId Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org
     * @param {Boolean} opts.doNotConvert Ex: 1
     * @param {Boolean} opts.minMaxFilter Ex: 1
     * @param {module:api/MeasurementsApi~getMeasurementsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Measurement>}
     */

  }, {
    key: "getMeasurements",
    value: function getMeasurements(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'variableName': opts['variableName'],
        'sort': opts['sort'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'variableCategoryName': opts['variableCategoryName'],
        'updatedAt': opts['updatedAt'],
        'userId': opts['userId'],
        'sourceName': opts['sourceName'],
        'connectorName': opts['connectorName'],
        'value': opts['value'],
        'unitName': opts['unitName'],
        'earliestMeasurementTime': opts['earliestMeasurementTime'],
        'latestMeasurementTime': opts['latestMeasurementTime'],
        'createdAt': opts['createdAt'],
        'id': opts['id'],
        'groupingWidth': opts['groupingWidth'],
        'groupingTimezone': opts['groupingTimezone'],
        'doNotProcess': opts['doNotProcess'],
        'clientId': opts['clientId'],
        'doNotConvert': opts['doNotConvert'],
        'minMaxFilter': opts['minMaxFilter']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Measurement["default"]];
      return this.apiClient.callApi('/v3/measurements', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getPairs operation.
     * @callback module:api/MeasurementsApi~getPairsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Pair>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get pairs of measurements for correlational analysis
     * Pairs cause measurements with effect measurements grouped over the duration of action after the onset delay.
     * @param {Object} opts Optional parameters
     * @param {String} opts.causeVariableName Deprecated: Name of the hypothetical predictor variable.  Ex: Sleep Duration
     * @param {String} opts.effectVariableName Deprecated: Name of the outcome variable of interest.  Ex: Overall Mood
     * @param {Number} opts.causeVariableId Variable id of the hypothetical predictor variable.  Ex: 1398
     * @param {Number} opts.effectVariableId Variable id of the outcome variable of interest.  Ex: 1398
     * @param {String} opts.predictorVariableName Name of the hypothetical predictor variable.  Ex: Sleep Duration
     * @param {String} opts.outcomeVariableName Name of the outcome variable of interest.  Ex: Overall Mood
     * @param {String} opts.effectUnitName Name for the unit effect measurements to be returned in
     * @param {Number} opts.userId User's id
     * @param {String} opts.causeUnitName Name for the unit cause measurements to be returned in
     * @param {String} opts.onsetDelay The amount of time in seconds that elapses after the predictor/stimulus event before the outcome as perceived by a self-tracker is known as the onset delay. For example, the onset delay between the time a person takes an aspirin (predictor/stimulus event) and the time a person perceives a change in their headache severity (outcome) is approximately 30 minutes.
     * @param {String} opts.durationOfAction The amount of time over which a predictor/stimulus event can exert an observable influence on an outcome variable value. For instance, aspirin (stimulus/predictor) typically decreases headache severity for approximately four hours (duration of action) following the onset delay. Unit: Seconds
     * @param {String} opts.earliestMeasurementTime Excluded records with measurement times earlier than this value. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss  datetime format. Time zone should be UTC and not local.
     * @param {String} opts.latestMeasurementTime Excluded records with measurement times later than this value. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss  datetime format. Time zone should be UTC and not local.
     * @param {Number} opts.limit The LIMIT is used to limit the number of results returned. So if youhave 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records. (default to 100)
     * @param {Number} opts.offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause.If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
     * @param {String} opts.sort Sort by one of the listed field names. If the field name is prefixed with `-`, it will sort in descending order.
     * @param {module:api/MeasurementsApi~getPairsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Pair>}
     */

  }, {
    key: "getPairs",
    value: function getPairs(opts, callback) {
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
        'effectUnitName': opts['effectUnitName'],
        'userId': opts['userId'],
        'causeUnitName': opts['causeUnitName'],
        'onsetDelay': opts['onsetDelay'],
        'durationOfAction': opts['durationOfAction'],
        'earliestMeasurementTime': opts['earliestMeasurementTime'],
        'latestMeasurementTime': opts['latestMeasurementTime'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'sort': opts['sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Pair["default"]];
      return this.apiClient.callApi('/v3/pairs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the measurementExportRequest operation.
     * @callback module:api/MeasurementsApi~measurementExportRequestCallback
     * @param {String} error Error message, if any.
     * @param {Number} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post Request for Measurements CSV
     * Use this endpoint to schedule a CSV export containing all user measurements to be emailed to the user within 24 hours.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId User's id
     * @param {module:api/MeasurementsApi~measurementExportRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Number}
     */

  }, {
    key: "measurementExportRequest",
    value: function measurementExportRequest(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'userId': opts['userId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = 'Number';
      return this.apiClient.callApi('/v2/measurements/exportRequest', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postMeasurements operation.
     * @callback module:api/MeasurementsApi~postMeasurementsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostMeasurementsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post a new set or update existing measurements to the database
     * You can submit or update multiple measurements in a \"measurements\" sub-array.  If the variable these measurements correspond to does not already exist in the database, it will be automatically added.
     * @param {Array.<module:model/MeasurementSet>} body An array of measurement sets containing measurement items you want to insert.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId User's id
     * @param {module:api/MeasurementsApi~postMeasurementsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostMeasurementsResponse}
     */

  }, {
    key: "postMeasurements",
    value: function postMeasurements(body, opts, callback) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postMeasurements");
      }

      var pathParams = {};
      var queryParams = {
        'userId': opts['userId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PostMeasurementsResponse["default"];
      return this.apiClient.callApi('/v3/measurements/post', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateMeasurement operation.
     * @callback module:api/MeasurementsApi~updateMeasurementCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommonResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a measurement
     * Update a previously submitted measurement
     * @param {module:model/MeasurementUpdate} body The id as well as the new startTime, note, and/or value of the measurement to be updated
     * @param {module:api/MeasurementsApi~updateMeasurementCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CommonResponse}
     */

  }, {
    key: "updateMeasurement",
    value: function updateMeasurement(body, callback) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateMeasurement");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CommonResponse["default"];
      return this.apiClient.callApi('/v3/measurements/update', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return MeasurementsApi;
}();

exports["default"] = MeasurementsApi;
