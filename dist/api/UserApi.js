"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CommonResponse = _interopRequireDefault(require("../model/CommonResponse"));

var _PostUserSettingsResponse = _interopRequireDefault(require("../model/PostUserSettingsResponse"));

var _User = _interopRequireDefault(require("../model/User"));

var _UsersResponse = _interopRequireDefault(require("../model/UsersResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* User service.
* @module api/UserApi
* @version 0.0.1
*/
var UserApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UserApi. 
  * @alias module:api/UserApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UserApi(apiClient) {
    _classCallCheck(this, UserApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the deleteUser operation.
   * @callback module:api/UserApi~deleteUserCallback
   * @param {String} error Error message, if any.
   * @param {module:model/CommonResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete user
   * Delete user account. Only the client app that created a user can delete that user.
   * @param {String} reason Ex: I hate you!
   * @param {Object} opts Optional parameters
   * @param {String} opts.clientId Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org
   * @param {module:api/UserApi~deleteUserCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/CommonResponse}
   */


  _createClass(UserApi, [{
    key: "deleteUser",
    value: function deleteUser(reason, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'reason' is set

      if (reason === undefined || reason === null) {
        throw new Error("Missing the required parameter 'reason' when calling deleteUser");
      }

      var pathParams = {};
      var queryParams = {
        'clientId': opts['clientId'],
        'reason': reason
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CommonResponse["default"];
      return this.apiClient.callApi('/v3/user/delete', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getUser operation.
     * @callback module:api/UserApi~getUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get user info
     * Returns user info.  If no userId is specified, returns info for currently authenticated user
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId User's id
     * @param {String} opts.createdAt When the record was first created. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local.
     * @param {String} opts.updatedAt When the record was last updated. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local.
     * @param {Number} opts.limit The LIMIT is used to limit the number of results returned. So if youhave 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records. (default to 100)
     * @param {Number} opts.offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause.If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
     * @param {String} opts.sort Sort by one of the listed field names. If the field name is prefixed with `-`, it will sort in descending order.
     * @param {String} opts.clientId Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org
     * @param {String} opts.appVersion Ex: 2.1.1.0
     * @param {Number} opts.clientUserId Ex: 74802
     * @param {String} opts.log Username or email
     * @param {String} opts.pwd User password
     * @param {Boolean} opts.includeAuthorizedClients Return list of apps, studies, and individuals with access to user data
     * @param {module:api/UserApi~getUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */

  }, {
    key: "getUser",
    value: function getUser(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'userId': opts['userId'],
        'createdAt': opts['createdAt'],
        'updatedAt': opts['updatedAt'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'sort': opts['sort'],
        'clientId': opts['clientId'],
        'appVersion': opts['appVersion'],
        'clientUserId': opts['clientUserId'],
        'log': opts['log'],
        'pwd': opts['pwd'],
        'includeAuthorizedClients': opts['includeAuthorizedClients']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _User["default"];
      return this.apiClient.callApi('/v3/user', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getUsers operation.
     * @callback module:api/UserApi~getUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UsersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get users who shared data
     * Returns users who have granted access to their data
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId User's id
     * @param {String} opts.createdAt When the record was first created. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local.
     * @param {String} opts.updatedAt When the record was last updated. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local.
     * @param {Number} opts.limit The LIMIT is used to limit the number of results returned. So if youhave 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records. (default to 100)
     * @param {Number} opts.offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause.If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
     * @param {String} opts.sort Sort by one of the listed field names. If the field name is prefixed with `-`, it will sort in descending order.
     * @param {String} opts.clientId Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org
     * @param {String} opts.appVersion Ex: 2.1.1.0
     * @param {Number} opts.clientUserId Ex: 74802
     * @param {String} opts.log Username or email
     * @param {String} opts.pwd User password
     * @param {module:api/UserApi~getUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UsersResponse}
     */

  }, {
    key: "getUsers",
    value: function getUsers(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'userId': opts['userId'],
        'createdAt': opts['createdAt'],
        'updatedAt': opts['updatedAt'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'sort': opts['sort'],
        'clientId': opts['clientId'],
        'appVersion': opts['appVersion'],
        'clientUserId': opts['clientUserId'],
        'log': opts['log'],
        'pwd': opts['pwd']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _UsersResponse["default"];
      return this.apiClient.callApi('/v3/users', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postUserSettings operation.
     * @callback module:api/UserApi~postUserSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostUserSettingsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post UserSettings
     * Post UserSettings
     * @param {module:model/User} body User settings to update
     * @param {Object} opts Optional parameters
     * @param {String} opts.clientId Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org
     * @param {module:api/UserApi~postUserSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostUserSettingsResponse}
     */

  }, {
    key: "postUserSettings",
    value: function postUserSettings(body, opts, callback) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postUserSettings");
      }

      var pathParams = {};
      var queryParams = {
        'clientId': opts['clientId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PostUserSettingsResponse["default"];
      return this.apiClient.callApi('/v3/userSettings', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return UserApi;
}();

exports["default"] = UserApi;
