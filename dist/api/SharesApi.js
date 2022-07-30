"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetSharesResponse = _interopRequireDefault(require("../model/GetSharesResponse"));

var _ShareInvitationBody = _interopRequireDefault(require("../model/ShareInvitationBody"));

var _User = _interopRequireDefault(require("../model/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Shares service.
* @module api/SharesApi
* @version 0.0.1
*/
var SharesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SharesApi. 
  * @alias module:api/SharesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SharesApi(apiClient) {
    _classCallCheck(this, SharesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the deleteShare operation.
   * @callback module:api/SharesApi~deleteShareCallback
   * @param {String} error Error message, if any.
   * @param {module:model/User} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete share
   * Remove access to user data for a given client_id associated with a given individual, app, or study
   * @param {String} clientIdToRevoke Client id of the individual, study, or app that the user wishes to no longer have access to their data
   * @param {Object} opts Optional parameters
   * @param {String} opts.reason Ex: I hate you!
   * @param {module:api/SharesApi~deleteShareCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/User}
   */


  _createClass(SharesApi, [{
    key: "deleteShare",
    value: function deleteShare(clientIdToRevoke, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'clientIdToRevoke' is set

      if (clientIdToRevoke === undefined || clientIdToRevoke === null) {
        throw new Error("Missing the required parameter 'clientIdToRevoke' when calling deleteShare");
      }

      var pathParams = {};
      var queryParams = {
        'clientIdToRevoke': clientIdToRevoke,
        'reason': opts['reason']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _User["default"];
      return this.apiClient.callApi('/v3/shares/delete', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getShares operation.
     * @callback module:api/SharesApi~getSharesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSharesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Authorized Apps, Studies, and Individuals
     * This is a list of individuals, apps, or studies with access to your measurements.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId User's id
     * @param {String} opts.createdAt When the record was first created. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local.
     * @param {String} opts.updatedAt When the record was last updated. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local.
     * @param {String} opts.clientId Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org
     * @param {String} opts.appVersion Ex: 2.1.1.0
     * @param {String} opts.log Username or email
     * @param {String} opts.pwd User password
     * @param {module:api/SharesApi~getSharesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSharesResponse}
     */

  }, {
    key: "getShares",
    value: function getShares(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'userId': opts['userId'],
        'createdAt': opts['createdAt'],
        'updatedAt': opts['updatedAt'],
        'clientId': opts['clientId'],
        'appVersion': opts['appVersion'],
        'log': opts['log'],
        'pwd': opts['pwd']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetSharesResponse["default"];
      return this.apiClient.callApi('/v3/shares', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the inviteShare operation.
     * @callback module:api/SharesApi~inviteShareCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete share
     * Invite someone to view your measurements
     * @param {module:model/ShareInvitationBody} body Details about person to share with
     * @param {Object} opts Optional parameters
     * @param {String} opts.clientId Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org
     * @param {module:api/SharesApi~inviteShareCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */

  }, {
    key: "inviteShare",
    value: function inviteShare(body, opts, callback) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling inviteShare");
      }

      var pathParams = {};
      var queryParams = {
        'clientId': opts['clientId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _User["default"];
      return this.apiClient.callApi('/v3/shares/invite', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return SharesApi;
}();

exports["default"] = SharesApi;
