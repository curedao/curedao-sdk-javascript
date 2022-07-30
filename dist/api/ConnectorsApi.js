"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetConnectorsResponse = _interopRequireDefault(require("../model/GetConnectorsResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Connectors service.
* @module api/ConnectorsApi
* @version 0.0.1
*/
var ConnectorsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ConnectorsApi. 
  * @alias module:api/ConnectorsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ConnectorsApi(apiClient) {
    _classCallCheck(this, ConnectorsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the connectConnector operation.
   * @callback module:api/ConnectorsApi~connectConnectorCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Obtain a token from 3rd party data source
   * Attempt to obtain a token from the data provider, store it in the database. With this, the connector to continue to obtain new user data until the token is revoked.
   * @param {module:model/String} connectorName Lowercase system name of the source application or device. Get a list of available connectors from the /v3/connectors/list endpoint.
   * @param {Object} opts Optional parameters
   * @param {Number} opts.userId User's id
   * @param {module:api/ConnectorsApi~connectConnectorCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(ConnectorsApi, [{
    key: "connectConnector",
    value: function connectConnector(connectorName, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'connectorName' is set

      if (connectorName === undefined || connectorName === null) {
        throw new Error("Missing the required parameter 'connectorName' when calling connectConnector");
      }

      var pathParams = {
        'connectorName': connectorName
      };
      var queryParams = {
        'userId': opts['userId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/connectors/{connectorName}/connect', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the disconnectConnector operation.
     * @callback module:api/ConnectorsApi~disconnectConnectorCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete stored connection info
     * The disconnect method deletes any stored tokens or connection information from the connectors database.
     * @param {module:model/String} connectorName Lowercase system name of the source application or device. Get a list of available connectors from the /v3/connectors/list endpoint.
     * @param {module:api/ConnectorsApi~disconnectConnectorCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "disconnectConnector",
    value: function disconnectConnector(connectorName, callback) {
      var postBody = null; // verify the required parameter 'connectorName' is set

      if (connectorName === undefined || connectorName === null) {
        throw new Error("Missing the required parameter 'connectorName' when calling disconnectConnector");
      }

      var pathParams = {
        'connectorName': connectorName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/connectors/{connectorName}/disconnect', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getConnectors operation.
     * @callback module:api/ConnectorsApi~getConnectorsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetConnectorsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List of Connectors
     * A connector pulls data from other data providers using their API or a screenscraper. Returns a list of all available connectors and information about them such as their id, name, whether the user has provided access, logo url, connection instructions, and the update history.
     * @param {Object} opts Optional parameters
     * @param {String} opts.clientId Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org
     * @param {module:api/ConnectorsApi~getConnectorsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetConnectorsResponse}
     */

  }, {
    key: "getConnectors",
    value: function getConnectors(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'clientId': opts['clientId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetConnectorsResponse["default"];
      return this.apiClient.callApi('/v3/connectors/list', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getIntegrationJs operation.
     * @callback module:api/ConnectorsApi~getIntegrationJsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get embeddable connect javascript
     * Get embeddable connect javascript. Usage:   - Embedding in applications with popups for 3rd-party authentication windows.     Use `qmSetupInPopup` function after connecting `connect.js`.   - Embedding in applications with popups for 3rd-party authentication windows.     Requires a selector to block. It will be embedded in this block.     Use `qmSetupOnPage` function after connecting `connect.js`.   - Embedding in mobile applications without popups for 3rd-party authentication.     Use `qmSetupOnMobile` function after connecting `connect.js`.     If using in a Cordova application call  `qmSetupOnIonic` function after connecting `connect.js`.
     * @param {Object} opts Optional parameters
     * @param {String} opts.clientId Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org
     * @param {module:api/ConnectorsApi~getIntegrationJsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "getIntegrationJs",
    value: function getIntegrationJs(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'clientId': opts['clientId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/integration.js', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getMobileConnectPage operation.
     * @callback module:api/ConnectorsApi~getMobileConnectPageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mobile connect page
     * This page is designed to be opened in a webview.  Instead of using popup authentication boxes, it uses redirection. You can include the user's access_token as a URL parameter like https://api.curedao.org/api/v3/connect/mobile?access_token=123
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId User's id
     * @param {module:api/ConnectorsApi~getMobileConnectPageCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "getMobileConnectPage",
    value: function getMobileConnectPage(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'userId': opts['userId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/connect/mobile', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateConnector operation.
     * @callback module:api/ConnectorsApi~updateConnectorCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sync with data source
     * The update method tells the QM Connector Framework to check with the data provider (such as Fitbit or MyFitnessPal) and retrieve any new measurements available.
     * @param {module:model/String} connectorName Lowercase system name of the source application or device. Get a list of available connectors from the /v3/connectors/list endpoint.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId User's id
     * @param {module:api/ConnectorsApi~updateConnectorCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateConnector",
    value: function updateConnector(connectorName, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'connectorName' is set

      if (connectorName === undefined || connectorName === null) {
        throw new Error("Missing the required parameter 'connectorName' when calling updateConnector");
      }

      var pathParams = {
        'connectorName': connectorName
      };
      var queryParams = {
        'userId': opts['userId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/connectors/{connectorName}/update', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ConnectorsApi;
}();

exports["default"] = ConnectorsApi;
