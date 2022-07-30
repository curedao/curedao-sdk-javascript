"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Card = _interopRequireDefault(require("./Card"));

var _Error = _interopRequireDefault(require("./Error"));

var _Image = _interopRequireDefault(require("./Image"));

var _User = _interopRequireDefault(require("./User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The UsersResponse model module.
 * @module model/UsersResponse
 * @version 0.0.1
 */
var UsersResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UsersResponse</code>.
   * @alias module:model/UsersResponse
   * @param users {Array.<module:model/User>} 
   */
  function UsersResponse(users) {
    _classCallCheck(this, UsersResponse);

    UsersResponse.initialize(this, users);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UsersResponse, null, [{
    key: "initialize",
    value: function initialize(obj, users) {
      obj['users'] = users;
    }
    /**
     * Constructs a <code>UsersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UsersResponse} obj Optional instance to populate.
     * @return {module:model/UsersResponse} The populated <code>UsersResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UsersResponse();

        if (data.hasOwnProperty('users')) {
          obj['users'] = _ApiClient["default"].convertToType(data['users'], [_User["default"]]);
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

        if (data.hasOwnProperty('image')) {
          obj['image'] = _Image["default"].constructFromObject(data['image']);
        }

        if (data.hasOwnProperty('avatar')) {
          obj['avatar'] = _ApiClient["default"].convertToType(data['avatar'], 'String');
        }

        if (data.hasOwnProperty('ionIcon')) {
          obj['ionIcon'] = _ApiClient["default"].convertToType(data['ionIcon'], 'String');
        }

        if (data.hasOwnProperty('html')) {
          obj['html'] = _ApiClient["default"].convertToType(data['html'], 'String');
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

  return UsersResponse;
}();
/**
 * @member {Array.<module:model/User>} users
 */


UsersResponse.prototype['users'] = undefined;
/**
 * Users who granted access to their data
 * @member {String} description
 */

UsersResponse.prototype['description'] = undefined;
/**
 * Users who granted access to their data
 * @member {String} summary
 */

UsersResponse.prototype['summary'] = undefined;
/**
 * Array of error objects with message property
 * @member {Array.<module:model/Error>} errors
 */

UsersResponse.prototype['errors'] = undefined;
/**
 * ex. OK or ERROR
 * @member {String} status
 */

UsersResponse.prototype['status'] = undefined;
/**
 * true or false
 * @member {Boolean} success
 */

UsersResponse.prototype['success'] = undefined;
/**
 * Response code such as 200
 * @member {Number} code
 */

UsersResponse.prototype['code'] = undefined;
/**
 * @member {module:model/Image} image
 */

UsersResponse.prototype['image'] = undefined;
/**
 * Square icon png url
 * @member {String} avatar
 */

UsersResponse.prototype['avatar'] = undefined;
/**
 * Ex: ion-ios-person
 * @member {String} ionIcon
 */

UsersResponse.prototype['ionIcon'] = undefined;
/**
 * Users who granted access to their data
 * @member {String} html
 */

UsersResponse.prototype['html'] = undefined;
/**
 * A super neat url you might want to share with your users!
 * @member {String} link
 */

UsersResponse.prototype['link'] = undefined;
/**
 * @member {module:model/Card} card
 */

UsersResponse.prototype['card'] = undefined;
var _default = UsersResponse;
exports["default"] = _default;