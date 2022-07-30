"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Unit = _interopRequireDefault(require("../model/Unit"));

var _UnitCategory = _interopRequireDefault(require("../model/UnitCategory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Units service.
* @module api/UnitsApi
* @version 0.0.1
*/
var UnitsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UnitsApi. 
  * @alias module:api/UnitsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UnitsApi(apiClient) {
    _classCallCheck(this, UnitsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the getUnitCategories operation.
   * @callback module:api/UnitsApi~getUnitCategoriesCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/UnitCategory>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get unit categories
   * Get a list of the categories of measurement units such as 'Distance', 'Duration', 'Energy', 'Frequency', 'Miscellany', 'Pressure', 'Proportion', 'Rating', 'Temperature', 'Volume', and 'Weight'.
   * @param {module:api/UnitsApi~getUnitCategoriesCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/UnitCategory>}
   */


  _createClass(UnitsApi, [{
    key: "getUnitCategories",
    value: function getUnitCategories(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_UnitCategory["default"]];
      return this.apiClient.callApi('/v3/unitCategories', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getUnits operation.
     * @callback module:api/UnitsApi~getUnitsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Unit>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get units
     * Get a list of the available measurement units
     * @param {module:api/UnitsApi~getUnitsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Unit>}
     */

  }, {
    key: "getUnits",
    value: function getUnits(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Unit["default"]];
      return this.apiClient.callApi('/v3/units', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return UnitsApi;
}();

exports["default"] = UnitsApi;