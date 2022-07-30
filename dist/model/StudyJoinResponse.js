"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Card = _interopRequireDefault(require("./Card"));

var _Error = _interopRequireDefault(require("./Error"));

var _Study = _interopRequireDefault(require("./Study"));

var _TrackingReminder = _interopRequireDefault(require("./TrackingReminder"));

var _TrackingReminderNotification = _interopRequireDefault(require("./TrackingReminderNotification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The StudyJoinResponse model module.
 * @module model/StudyJoinResponse
 * @version 0.0.1
 */
var StudyJoinResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StudyJoinResponse</code>.
   * @alias module:model/StudyJoinResponse
   */
  function StudyJoinResponse() {
    _classCallCheck(this, StudyJoinResponse);

    StudyJoinResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StudyJoinResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>StudyJoinResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StudyJoinResponse} obj Optional instance to populate.
     * @return {module:model/StudyJoinResponse} The populated <code>StudyJoinResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StudyJoinResponse();

        if (data.hasOwnProperty('study')) {
          obj['study'] = _Study["default"].constructFromObject(data['study']);
        }

        if (data.hasOwnProperty('trackingReminders')) {
          obj['trackingReminders'] = _ApiClient["default"].convertToType(data['trackingReminders'], [_TrackingReminder["default"]]);
        }

        if (data.hasOwnProperty('trackingReminderNotifications')) {
          obj['trackingReminderNotifications'] = _ApiClient["default"].convertToType(data['trackingReminderNotifications'], [_TrackingReminderNotification["default"]]);
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

  return StudyJoinResponse;
}();
/**
 * @member {module:model/Study} study
 */


StudyJoinResponse.prototype['study'] = undefined;
/**
 * @member {Array.<module:model/TrackingReminder>} trackingReminders
 */

StudyJoinResponse.prototype['trackingReminders'] = undefined;
/**
 * @member {Array.<module:model/TrackingReminderNotification>} trackingReminderNotifications
 */

StudyJoinResponse.prototype['trackingReminderNotifications'] = undefined;
/**
 * Can be used as body of help info popup
 * @member {String} description
 */

StudyJoinResponse.prototype['description'] = undefined;
/**
 * Can be used as title in help info popup
 * @member {String} summary
 */

StudyJoinResponse.prototype['summary'] = undefined;
/**
 * Array of error objects with message property
 * @member {Array.<module:model/Error>} errors
 */

StudyJoinResponse.prototype['errors'] = undefined;
/**
 * ex. OK or ERROR
 * @member {String} status
 */

StudyJoinResponse.prototype['status'] = undefined;
/**
 * true or false
 * @member {Boolean} success
 */

StudyJoinResponse.prototype['success'] = undefined;
/**
 * Response code such as 200
 * @member {Number} code
 */

StudyJoinResponse.prototype['code'] = undefined;
/**
 * A super neat url you might want to share with your users!
 * @member {String} link
 */

StudyJoinResponse.prototype['link'] = undefined;
/**
 * @member {module:model/Card} card
 */

StudyJoinResponse.prototype['card'] = undefined;
var _default = StudyJoinResponse;
exports["default"] = _default;