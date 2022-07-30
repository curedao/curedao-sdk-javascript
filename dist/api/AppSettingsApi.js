"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AppSettingsResponse = _interopRequireDefault(require("../model/AppSettingsResponse"));

var _JsonErrorResponse = _interopRequireDefault(require("../model/JsonErrorResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* AppSettings service.
* @module api/AppSettingsApi
* @version 0.0.1
*/
var AppSettingsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AppSettingsApi. 
  * @alias module:api/AppSettingsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AppSettingsApi(apiClient) {
    _classCallCheck(this, AppSettingsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the getAppSettings operation.
   * @callback module:api/AppSettingsApi~getAppSettingsCallback
   * @param {String} error Error message, if any.
   * @param {module:model/AppSettingsResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get client app settings
   * Get the settings for your application configurable at https://builder.curedao.org
   * @param {Object} opts Optional parameters
   * @param {String} opts.clientId Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org
   * @param {String} opts.clientSecret This is the secret for your obtained clientId. We use this to ensure that only your application uses the clientId.  Obtain this by creating a free application at [https://builder.curedao.org](https://builder.curedao.org).
   * @param {module:api/AppSettingsApi~getAppSettingsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/AppSettingsResponse}
   */


  _createClass(AppSettingsApi, [{
    key: "getAppSettings",
    value: function getAppSettings(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'clientId': opts['clientId'],
        'client_secret': opts['clientSecret']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _AppSettingsResponse["default"];
      return this.apiClient.callApi('/v3/appSettings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return AppSettingsApi;
}();

exports["default"] = AppSettingsApi;
