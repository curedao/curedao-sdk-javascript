"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DeviceToken = _interopRequireDefault(require("../model/DeviceToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Notifications service.
* @module api/NotificationsApi
* @version 0.0.1
*/
var NotificationsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new NotificationsApi. 
  * @alias module:api/NotificationsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function NotificationsApi(apiClient) {
    _classCallCheck(this, NotificationsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the getNotificationPreferences operation.
   * @callback module:api/NotificationsApi~getNotificationPreferencesCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get NotificationPreferences
   * Get NotificationPreferences
   * @param {module:api/NotificationsApi~getNotificationPreferencesCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(NotificationsApi, [{
    key: "getNotificationPreferences",
    value: function getNotificationPreferences(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/notificationPreferences', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postDeviceToken operation.
     * @callback module:api/NotificationsApi~postDeviceTokenCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post DeviceTokens
     * Post user token for Android, iOS, or web push notifications
     * @param {module:model/DeviceToken} body The platform and token
     * @param {module:api/NotificationsApi~postDeviceTokenCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "postDeviceToken",
    value: function postDeviceToken(body, callback) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postDeviceToken");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/deviceTokens', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return NotificationsApi;
}();

exports["default"] = NotificationsApi;