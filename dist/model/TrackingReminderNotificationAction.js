"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The TrackingReminderNotificationAction model module.
 * @module model/TrackingReminderNotificationAction
 * @version 0.0.1
 */
var TrackingReminderNotificationAction = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TrackingReminderNotificationAction</code>.
   * @alias module:model/TrackingReminderNotificationAction
   * @param action {String} Ex: track
   * @param callback {String} Ex: trackThreeRatingAction
   * @param modifiedValue {Number} Ex: 3
   * @param title {String} Ex: 3/5
   */
  function TrackingReminderNotificationAction(action, callback, modifiedValue, title) {
    _classCallCheck(this, TrackingReminderNotificationAction);

    TrackingReminderNotificationAction.initialize(this, action, callback, modifiedValue, title);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TrackingReminderNotificationAction, null, [{
    key: "initialize",
    value: function initialize(obj, action, callback, modifiedValue, title) {
      obj['action'] = action;
      obj['callback'] = callback;
      obj['modifiedValue'] = modifiedValue;
      obj['title'] = title;
    }
    /**
     * Constructs a <code>TrackingReminderNotificationAction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TrackingReminderNotificationAction} obj Optional instance to populate.
     * @return {module:model/TrackingReminderNotificationAction} The populated <code>TrackingReminderNotificationAction</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TrackingReminderNotificationAction();

        if (data.hasOwnProperty('action')) {
          obj['action'] = _ApiClient["default"].convertToType(data['action'], 'String');
        }

        if (data.hasOwnProperty('callback')) {
          obj['callback'] = _ApiClient["default"].convertToType(data['callback'], 'String');
        }

        if (data.hasOwnProperty('modifiedValue')) {
          obj['modifiedValue'] = _ApiClient["default"].convertToType(data['modifiedValue'], 'Number');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('longTitle')) {
          obj['longTitle'] = _ApiClient["default"].convertToType(data['longTitle'], 'String');
        }

        if (data.hasOwnProperty('shortTitle')) {
          obj['shortTitle'] = _ApiClient["default"].convertToType(data['shortTitle'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TrackingReminderNotificationAction;
}();
/**
 * Ex: track
 * @member {String} action
 */


TrackingReminderNotificationAction.prototype['action'] = undefined;
/**
 * Ex: trackThreeRatingAction
 * @member {String} callback
 */

TrackingReminderNotificationAction.prototype['callback'] = undefined;
/**
 * Ex: 3
 * @member {Number} modifiedValue
 */

TrackingReminderNotificationAction.prototype['modifiedValue'] = undefined;
/**
 * Ex: 3/5
 * @member {String} title
 */

TrackingReminderNotificationAction.prototype['title'] = undefined;
/**
 * Ex: Rate 3/5
 * @member {String} longTitle
 */

TrackingReminderNotificationAction.prototype['longTitle'] = undefined;
/**
 * Ex: 3
 * @member {String} shortTitle
 */

TrackingReminderNotificationAction.prototype['shortTitle'] = undefined;
var _default = TrackingReminderNotificationAction;
exports["default"] = _default;