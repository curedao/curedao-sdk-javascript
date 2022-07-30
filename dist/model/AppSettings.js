"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _User = _interopRequireDefault(require("./User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The AppSettings model module.
 * @module model/AppSettings
 * @version 0.0.1
 */
var AppSettings = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AppSettings</code>.
   * @alias module:model/AppSettings
   */
  function AppSettings() {
    _classCallCheck(this, AppSettings);

    AppSettings.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AppSettings, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AppSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AppSettings} obj Optional instance to populate.
     * @return {module:model/AppSettings} The populated <code>AppSettings</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AppSettings();

        if (data.hasOwnProperty('additionalSettings')) {
          obj['additionalSettings'] = _ApiClient["default"].convertToType(data['additionalSettings'], Object);
        }

        if (data.hasOwnProperty('appDescription')) {
          obj['appDescription'] = _ApiClient["default"].convertToType(data['appDescription'], 'String');
        }

        if (data.hasOwnProperty('appDesign')) {
          obj['appDesign'] = _ApiClient["default"].convertToType(data['appDesign'], Object);
        }

        if (data.hasOwnProperty('appDisplayName')) {
          obj['appDisplayName'] = _ApiClient["default"].convertToType(data['appDisplayName'], 'String');
        }

        if (data.hasOwnProperty('appStatus')) {
          obj['appStatus'] = _ApiClient["default"].convertToType(data['appStatus'], Object);
        }

        if (data.hasOwnProperty('appType')) {
          obj['appType'] = _ApiClient["default"].convertToType(data['appType'], 'String');
        }

        if (data.hasOwnProperty('buildEnabled')) {
          obj['buildEnabled'] = _ApiClient["default"].convertToType(data['buildEnabled'], 'String');
        }

        if (data.hasOwnProperty('clientId')) {
          obj['clientId'] = _ApiClient["default"].convertToType(data['clientId'], 'String');
        }

        if (data.hasOwnProperty('clientSecret')) {
          obj['clientSecret'] = _ApiClient["default"].convertToType(data['clientSecret'], 'String');
        }

        if (data.hasOwnProperty('collaborators')) {
          obj['collaborators'] = _ApiClient["default"].convertToType(data['collaborators'], [_User["default"]]);
        }

        if (data.hasOwnProperty('createdAt')) {
          obj['createdAt'] = _ApiClient["default"].convertToType(data['createdAt'], 'String');
        }

        if (data.hasOwnProperty('userId')) {
          obj['userId'] = _ApiClient["default"].convertToType(data['userId'], 'Number');
        }

        if (data.hasOwnProperty('users')) {
          obj['users'] = _ApiClient["default"].convertToType(data['users'], [_User["default"]]);
        }

        if (data.hasOwnProperty('redirectUri')) {
          obj['redirectUri'] = _ApiClient["default"].convertToType(data['redirectUri'], 'String');
        }

        if (data.hasOwnProperty('companyName')) {
          obj['companyName'] = _ApiClient["default"].convertToType(data['companyName'], 'String');
        }

        if (data.hasOwnProperty('homepageUrl')) {
          obj['homepageUrl'] = _ApiClient["default"].convertToType(data['homepageUrl'], 'String');
        }

        if (data.hasOwnProperty('iconUrl')) {
          obj['iconUrl'] = _ApiClient["default"].convertToType(data['iconUrl'], 'String');
        }

        if (data.hasOwnProperty('longDescription')) {
          obj['longDescription'] = _ApiClient["default"].convertToType(data['longDescription'], 'String');
        }

        if (data.hasOwnProperty('splashScreen')) {
          obj['splashScreen'] = _ApiClient["default"].convertToType(data['splashScreen'], 'String');
        }

        if (data.hasOwnProperty('textLogo')) {
          obj['textLogo'] = _ApiClient["default"].convertToType(data['textLogo'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AppSettings;
}();
/**
 * @member {Object} additionalSettings
 */


AppSettings.prototype['additionalSettings'] = undefined;
/**
 * @member {String} appDescription
 */

AppSettings.prototype['appDescription'] = undefined;
/**
 * @member {Object} appDesign
 */

AppSettings.prototype['appDesign'] = undefined;
/**
 * @member {String} appDisplayName
 */

AppSettings.prototype['appDisplayName'] = undefined;
/**
 * @member {Object} appStatus
 */

AppSettings.prototype['appStatus'] = undefined;
/**
 * @member {String} appType
 */

AppSettings.prototype['appType'] = undefined;
/**
 * @member {String} buildEnabled
 */

AppSettings.prototype['buildEnabled'] = undefined;
/**
 * Get yours at https:://builder.curedao.org
 * @member {String} clientId
 */

AppSettings.prototype['clientId'] = undefined;
/**
 * Get yours at https:://builder.curedao.org
 * @member {String} clientSecret
 */

AppSettings.prototype['clientSecret'] = undefined;
/**
 * @member {Array.<module:model/User>} collaborators
 */

AppSettings.prototype['collaborators'] = undefined;
/**
 * @member {String} createdAt
 */

AppSettings.prototype['createdAt'] = undefined;
/**
 * User id of the owner of the application
 * @member {Number} userId
 */

AppSettings.prototype['userId'] = undefined;
/**
 * @member {Array.<module:model/User>} users
 */

AppSettings.prototype['users'] = undefined;
/**
 * @member {String} redirectUri
 */

AppSettings.prototype['redirectUri'] = undefined;
/**
 * @member {String} companyName
 */

AppSettings.prototype['companyName'] = undefined;
/**
 * @member {String} homepageUrl
 */

AppSettings.prototype['homepageUrl'] = undefined;
/**
 * @member {String} iconUrl
 */

AppSettings.prototype['iconUrl'] = undefined;
/**
 * @member {String} longDescription
 */

AppSettings.prototype['longDescription'] = undefined;
/**
 * @member {String} splashScreen
 */

AppSettings.prototype['splashScreen'] = undefined;
/**
 * @member {String} textLogo
 */

AppSettings.prototype['textLogo'] = undefined;
var _default = AppSettings;
exports["default"] = _default;
