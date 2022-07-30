"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CommonResponse = _interopRequireDefault(require("../model/CommonResponse"));

var _GetTrackingReminderNotificationsResponse = _interopRequireDefault(require("../model/GetTrackingReminderNotificationsResponse"));

var _PostTrackingRemindersResponse = _interopRequireDefault(require("../model/PostTrackingRemindersResponse"));

var _TrackingReminder = _interopRequireDefault(require("../model/TrackingReminder"));

var _TrackingReminderNotificationPost = _interopRequireDefault(require("../model/TrackingReminderNotificationPost"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Reminders service.
* @module api/RemindersApi
* @version 0.0.1
*/
var RemindersApi = /*#__PURE__*/function () {
  /**
  * Constructs a new RemindersApi. 
  * @alias module:api/RemindersApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function RemindersApi(apiClient) {
    _classCallCheck(this, RemindersApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the deleteTrackingReminder operation.
   * @callback module:api/RemindersApi~deleteTrackingReminderCallback
   * @param {String} error Error message, if any.
   * @param {module:model/CommonResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete Tracking Reminder
   * Stop getting notifications to record data for a variable.  Previously recorded measurements will be preserved.
   * @param {Object} opts Optional parameters
   * @param {Number} opts.userId User's id
   * @param {module:api/RemindersApi~deleteTrackingReminderCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/CommonResponse}
   */


  _createClass(RemindersApi, [{
    key: "deleteTrackingReminder",
    value: function deleteTrackingReminder(opts, callback) {
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
      var returnType = _CommonResponse["default"];
      return this.apiClient.callApi('/v3/trackingReminders/delete', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getTrackingReminderNotifications operation.
     * @callback module:api/RemindersApi~getTrackingReminderNotificationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTrackingReminderNotificationsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get specific tracking reminder notifications
     * Specific tracking reminder notification instances that still need to be tracked.
     * @param {Object} opts Optional parameters
     * @param {String} opts.sort Sort by one of the listed field names. If the field name is prefixed with `-`, it will sort in descending order.
     * @param {Number} opts.userId User's id
     * @param {String} opts.createdAt When the record was first created. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local.
     * @param {String} opts.updatedAt When the record was last updated. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local.
     * @param {Number} opts.limit The LIMIT is used to limit the number of results returned. So if youhave 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records. (default to 100)
     * @param {Number} opts.offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause.If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
     * @param {module:model/String} opts.variableCategoryName Ex: Emotions, Treatments, Symptoms...
     * @param {String} opts.reminderTime Ex: (lt)2017-07-31 21:43:26
     * @param {String} opts.clientId Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org
     * @param {Boolean} opts.onlyPast Ex: 1
     * @param {Boolean} opts.includeDeleted Include deleted variables
     * @param {module:api/RemindersApi~getTrackingReminderNotificationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetTrackingReminderNotificationsResponse}
     */

  }, {
    key: "getTrackingReminderNotifications",
    value: function getTrackingReminderNotifications(opts, callback) {
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
        'variableCategoryName': opts['variableCategoryName'],
        'reminderTime': opts['reminderTime'],
        'clientId': opts['clientId'],
        'onlyPast': opts['onlyPast'],
        'includeDeleted': opts['includeDeleted']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetTrackingReminderNotificationsResponse["default"];
      return this.apiClient.callApi('/v3/trackingReminderNotifications', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getTrackingReminders operation.
     * @callback module:api/RemindersApi~getTrackingRemindersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TrackingReminder>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get repeating tracking reminder settings
     * Users can be reminded to track certain variables at a specified frequency with a default value.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId User's id
     * @param {module:model/String} opts.variableCategoryName Ex: Emotions, Treatments, Symptoms...
     * @param {String} opts.createdAt When the record was first created. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local.
     * @param {String} opts.updatedAt When the record was last updated. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local.
     * @param {Number} opts.limit The LIMIT is used to limit the number of results returned. So if youhave 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records. (default to 100)
     * @param {Number} opts.offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause.If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
     * @param {String} opts.sort Sort by one of the listed field names. If the field name is prefixed with `-`, it will sort in descending order.
     * @param {String} opts.clientId Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org
     * @param {String} opts.appVersion Ex: 2.1.1.0
     * @param {module:api/RemindersApi~getTrackingRemindersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/TrackingReminder>}
     */

  }, {
    key: "getTrackingReminders",
    value: function getTrackingReminders(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'userId': opts['userId'],
        'variableCategoryName': opts['variableCategoryName'],
        'createdAt': opts['createdAt'],
        'updatedAt': opts['updatedAt'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'sort': opts['sort'],
        'clientId': opts['clientId'],
        'appVersion': opts['appVersion']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_TrackingReminder["default"]];
      return this.apiClient.callApi('/v3/trackingReminders', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postTrackingReminderNotifications operation.
     * @callback module:api/RemindersApi~postTrackingReminderNotificationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommonResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Snooze, skip, or track a tracking reminder notification
     * Snooze, skip, or track a tracking reminder notification
     * @param {Array.<module:model/TrackingReminderNotificationPost>} body Id of the tracking reminder notification to be snoozed
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId User's id
     * @param {String} opts.clientId Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org
     * @param {module:api/RemindersApi~postTrackingReminderNotificationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CommonResponse}
     */

  }, {
    key: "postTrackingReminderNotifications",
    value: function postTrackingReminderNotifications(body, opts, callback) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postTrackingReminderNotifications");
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
      var returnType = _CommonResponse["default"];
      return this.apiClient.callApi('/v3/trackingReminderNotifications', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postTrackingReminders operation.
     * @callback module:api/RemindersApi~postTrackingRemindersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostTrackingRemindersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Store a Tracking Reminder
     * This is to enable users to create reminders to track a variable with a default value at a specified frequency
     * @param {Array.<module:model/TrackingReminder>} body TrackingReminder that should be stored
     * @param {module:api/RemindersApi~postTrackingRemindersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostTrackingRemindersResponse}
     */

  }, {
    key: "postTrackingReminders",
    value: function postTrackingReminders(body, callback) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postTrackingReminders");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PostTrackingRemindersResponse["default"];
      return this.apiClient.callApi('/v3/trackingReminders', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return RemindersApi;
}();

exports["default"] = RemindersApi;
