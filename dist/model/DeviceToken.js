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
 * The DeviceToken model module.
 * @module model/DeviceToken
 * @version 0.0.1
 */
var DeviceToken = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeviceToken</code>.
   * @alias module:model/DeviceToken
   * @param platform {String} ios, android, or web
   * @param deviceToken {String} The device token
   */
  function DeviceToken(platform, deviceToken) {
    _classCallCheck(this, DeviceToken);

    DeviceToken.initialize(this, platform, deviceToken);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeviceToken, null, [{
    key: "initialize",
    value: function initialize(obj, platform, deviceToken) {
      obj['platform'] = platform;
      obj['deviceToken'] = deviceToken;
    }
    /**
     * Constructs a <code>DeviceToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeviceToken} obj Optional instance to populate.
     * @return {module:model/DeviceToken} The populated <code>DeviceToken</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeviceToken();

        if (data.hasOwnProperty('clientId')) {
          obj['clientId'] = _ApiClient["default"].convertToType(data['clientId'], 'String');
        }

        if (data.hasOwnProperty('platform')) {
          obj['platform'] = _ApiClient["default"].convertToType(data['platform'], 'String');
        }

        if (data.hasOwnProperty('deviceToken')) {
          obj['deviceToken'] = _ApiClient["default"].convertToType(data['deviceToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DeviceToken;
}();
/**
 * Client id
 * @member {String} clientId
 */


DeviceToken.prototype['clientId'] = undefined;
/**
 * ios, android, or web
 * @member {String} platform
 */

DeviceToken.prototype['platform'] = undefined;
/**
 * The device token
 * @member {String} deviceToken
 */

DeviceToken.prototype['deviceToken'] = undefined;
var _default = DeviceToken;
exports["default"] = _default;