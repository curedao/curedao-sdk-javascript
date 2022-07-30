"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AppSettings = _interopRequireDefault(require("./AppSettings"));

var _Card = _interopRequireDefault(require("./Card"));

var _Error = _interopRequireDefault(require("./Error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The AppSettingsResponse model module.
 * @module model/AppSettingsResponse
 * @version 0.0.1
 */
var AppSettingsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AppSettingsResponse</code>.
   * @alias module:model/AppSettingsResponse
   * @param description {String} Can be used as body of help info popup
   * @param summary {String} Can be used as title in help info popup
   */
  function AppSettingsResponse(description, summary) {
    _classCallCheck(this, AppSettingsResponse);

    AppSettingsResponse.initialize(this, description, summary);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AppSettingsResponse, null, [{
    key: "initialize",
    value: function initialize(obj, description, summary) {
      obj['description'] = description;
      obj['summary'] = summary;
    }
    /**
     * Constructs a <code>AppSettingsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AppSettingsResponse} obj Optional instance to populate.
     * @return {module:model/AppSettingsResponse} The populated <code>AppSettingsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AppSettingsResponse();

        if (data.hasOwnProperty('appSettings')) {
          obj['appSettings'] = _AppSettings["default"].constructFromObject(data['appSettings']);
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

  return AppSettingsResponse;
}();
/**
 * @member {module:model/AppSettings} appSettings
 */


AppSettingsResponse.prototype['appSettings'] = undefined;
/**
 * Can be used as body of help info popup
 * @member {String} description
 */

AppSettingsResponse.prototype['description'] = undefined;
/**
 * Can be used as title in help info popup
 * @member {String} summary
 */

AppSettingsResponse.prototype['summary'] = undefined;
/**
 * Array of error objects with message property
 * @member {Array.<module:model/Error>} errors
 */

AppSettingsResponse.prototype['errors'] = undefined;
/**
 * ex. OK or ERROR
 * @member {String} status
 */

AppSettingsResponse.prototype['status'] = undefined;
/**
 * true or false
 * @member {Boolean} success
 */

AppSettingsResponse.prototype['success'] = undefined;
/**
 * Response code such as 200
 * @member {Number} code
 */

AppSettingsResponse.prototype['code'] = undefined;
/**
 * A super neat url you might want to share with your users!
 * @member {String} link
 */

AppSettingsResponse.prototype['link'] = undefined;
/**
 * @member {module:model/Card} card
 */

AppSettingsResponse.prototype['card'] = undefined;
var _default = AppSettingsResponse;
exports["default"] = _default;