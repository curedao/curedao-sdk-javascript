"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Card = _interopRequireDefault(require("./Card"));

var _Error = _interopRequireDefault(require("./Error"));

var _TrackingReminder = _interopRequireDefault(require("./TrackingReminder"));

var _TrackingReminderNotification = _interopRequireDefault(require("./TrackingReminderNotification"));

var _Variable = _interopRequireDefault(require("./Variable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The PostTrackingRemindersDataResponse model module.
 * @module model/PostTrackingRemindersDataResponse
 * @version 0.0.1
 */
var PostTrackingRemindersDataResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PostTrackingRemindersDataResponse</code>.
   * @alias module:model/PostTrackingRemindersDataResponse
   */
  function PostTrackingRemindersDataResponse() {
    _classCallCheck(this, PostTrackingRemindersDataResponse);

    PostTrackingRemindersDataResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PostTrackingRemindersDataResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PostTrackingRemindersDataResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostTrackingRemindersDataResponse} obj Optional instance to populate.
     * @return {module:model/PostTrackingRemindersDataResponse} The populated <code>PostTrackingRemindersDataResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PostTrackingRemindersDataResponse();

        if (data.hasOwnProperty('trackingReminderNotifications')) {
          obj['trackingReminderNotifications'] = _ApiClient["default"].convertToType(data['trackingReminderNotifications'], [_TrackingReminderNotification["default"]]);
        }

        if (data.hasOwnProperty('trackingReminders')) {
          obj['trackingReminders'] = _ApiClient["default"].convertToType(data['trackingReminders'], [_TrackingReminder["default"]]);
        }

        if (data.hasOwnProperty('userVariables')) {
          obj['userVariables'] = _ApiClient["default"].convertToType(data['userVariables'], [_Variable["default"]]);
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('summary')) {
          obj['summary'] = _ApiClient["default"].convertToType(data['summary'], 'String');
        }

        if (data.hasOwnProperty('errors')) {
          obj['errors'] = _ApiClient["default"].convertToType(data['errors'], [_Error["default"]]);
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('success')) {
          obj['success'] = _ApiClient["default"].convertToType(data['success'], 'Boolean');
        }

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'Number');
        }

        if (data.hasOwnProperty('link')) {
          obj['link'] = _ApiClient["default"].convertToType(data['link'], 'String');
        }

        if (data.hasOwnProperty('card')) {
          obj['card'] = _Card["default"].constructFromObject(data['card']);
        }
      }

      return obj;
    }
  }]);

  return PostTrackingRemindersDataResponse;
}();
/**
 * @member {Array.<module:model/TrackingReminderNotification>} trackingReminderNotifications
 */


PostTrackingRemindersDataResponse.prototype['trackingReminderNotifications'] = undefined;
/**
 * @member {Array.<module:model/TrackingReminder>} trackingReminders
 */

PostTrackingRemindersDataResponse.prototype['trackingReminders'] = undefined;
/**
 * @member {Array.<module:model/Variable>} userVariables
 */

PostTrackingRemindersDataResponse.prototype['userVariables'] = undefined;
/**
 * Can be used as body of help info popup
 * @member {String} description
 */

PostTrackingRemindersDataResponse.prototype['description'] = undefined;
/**
 * Can be used as title in help info popup
 * @member {String} summary
 */

PostTrackingRemindersDataResponse.prototype['summary'] = undefined;
/**
 * Array of error objects with message property
 * @member {Array.<module:model/Error>} errors
 */

PostTrackingRemindersDataResponse.prototype['errors'] = undefined;
/**
 * ex. OK or ERROR
 * @member {String} status
 */

PostTrackingRemindersDataResponse.prototype['status'] = undefined;
/**
 * true or false
 * @member {Boolean} success
 */

PostTrackingRemindersDataResponse.prototype['success'] = undefined;
/**
 * Response code such as 200
 * @member {Number} code
 */

PostTrackingRemindersDataResponse.prototype['code'] = undefined;
/**
 * A super neat url you might want to share with your users!
 * @member {String} link
 */

PostTrackingRemindersDataResponse.prototype['link'] = undefined;
/**
 * @member {module:model/Card} card
 */

PostTrackingRemindersDataResponse.prototype['card'] = undefined;
var _default = PostTrackingRemindersDataResponse;
exports["default"] = _default;