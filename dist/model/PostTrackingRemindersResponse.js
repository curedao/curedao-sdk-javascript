"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Card = _interopRequireDefault(require("./Card"));

var _Error = _interopRequireDefault(require("./Error"));

var _PostTrackingRemindersDataResponse = _interopRequireDefault(require("./PostTrackingRemindersDataResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The PostTrackingRemindersResponse model module.
 * @module model/PostTrackingRemindersResponse
 * @version 0.0.1
 */
var PostTrackingRemindersResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PostTrackingRemindersResponse</code>.
   * @alias module:model/PostTrackingRemindersResponse
   * @param status {String} ex. OK or ERROR
   * @param success {Boolean} true or false
   */
  function PostTrackingRemindersResponse(status, success) {
    _classCallCheck(this, PostTrackingRemindersResponse);

    PostTrackingRemindersResponse.initialize(this, status, success);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PostTrackingRemindersResponse, null, [{
    key: "initialize",
    value: function initialize(obj, status, success) {
      obj['status'] = status;
      obj['success'] = success;
    }
    /**
     * Constructs a <code>PostTrackingRemindersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostTrackingRemindersResponse} obj Optional instance to populate.
     * @return {module:model/PostTrackingRemindersResponse} The populated <code>PostTrackingRemindersResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PostTrackingRemindersResponse();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _PostTrackingRemindersDataResponse["default"].constructFromObject(data['data']);
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
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

  return PostTrackingRemindersResponse;
}();
/**
 * @member {module:model/PostTrackingRemindersDataResponse} data
 */


PostTrackingRemindersResponse.prototype['data'] = undefined;
/**
 * Message
 * @member {String} message
 */

PostTrackingRemindersResponse.prototype['message'] = undefined;
/**
 * Can be used as body of help info popup
 * @member {String} description
 */

PostTrackingRemindersResponse.prototype['description'] = undefined;
/**
 * Can be used as title in help info popup
 * @member {String} summary
 */

PostTrackingRemindersResponse.prototype['summary'] = undefined;
/**
 * Array of error objects with message property
 * @member {Array.<module:model/Error>} errors
 */

PostTrackingRemindersResponse.prototype['errors'] = undefined;
/**
 * ex. OK or ERROR
 * @member {String} status
 */

PostTrackingRemindersResponse.prototype['status'] = undefined;
/**
 * true or false
 * @member {Boolean} success
 */

PostTrackingRemindersResponse.prototype['success'] = undefined;
/**
 * Response code such as 200
 * @member {Number} code
 */

PostTrackingRemindersResponse.prototype['code'] = undefined;
/**
 * A super neat url you might want to share with your users!
 * @member {String} link
 */

PostTrackingRemindersResponse.prototype['link'] = undefined;
/**
 * @member {module:model/Card} card
 */

PostTrackingRemindersResponse.prototype['card'] = undefined;
var _default = PostTrackingRemindersResponse;
exports["default"] = _default;