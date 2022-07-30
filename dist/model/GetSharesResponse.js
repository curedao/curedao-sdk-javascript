"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AuthorizedClients = _interopRequireDefault(require("./AuthorizedClients"));

var _Card = _interopRequireDefault(require("./Card"));

var _Error = _interopRequireDefault(require("./Error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GetSharesResponse model module.
 * @module model/GetSharesResponse
 * @version 0.0.1
 */
var GetSharesResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetSharesResponse</code>.
   * @alias module:model/GetSharesResponse
   * @param description {String} Can be used as body of help info popup
   * @param summary {String} Can be used as title in help info popup
   */
  function GetSharesResponse(description, summary) {
    _classCallCheck(this, GetSharesResponse);

    GetSharesResponse.initialize(this, description, summary);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetSharesResponse, null, [{
    key: "initialize",
    value: function initialize(obj, description, summary) {
      obj['description'] = description;
      obj['summary'] = summary;
    }
    /**
     * Constructs a <code>GetSharesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSharesResponse} obj Optional instance to populate.
     * @return {module:model/GetSharesResponse} The populated <code>GetSharesResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetSharesResponse();

        if (data.hasOwnProperty('authorizedClients')) {
          obj['authorizedClients'] = _AuthorizedClients["default"].constructFromObject(data['authorizedClients']);
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

  return GetSharesResponse;
}();
/**
 * @member {module:model/AuthorizedClients} authorizedClients
 */


GetSharesResponse.prototype['authorizedClients'] = undefined;
/**
 * Can be used as body of help info popup
 * @member {String} description
 */

GetSharesResponse.prototype['description'] = undefined;
/**
 * Can be used as title in help info popup
 * @member {String} summary
 */

GetSharesResponse.prototype['summary'] = undefined;
/**
 * Array of error objects with message property
 * @member {Array.<module:model/Error>} errors
 */

GetSharesResponse.prototype['errors'] = undefined;
/**
 * ex. OK or ERROR
 * @member {String} status
 */

GetSharesResponse.prototype['status'] = undefined;
/**
 * true or false
 * @member {Boolean} success
 */

GetSharesResponse.prototype['success'] = undefined;
/**
 * Response code such as 200
 * @member {Number} code
 */

GetSharesResponse.prototype['code'] = undefined;
/**
 * A super neat url you might want to share with your users!
 * @member {String} link
 */

GetSharesResponse.prototype['link'] = undefined;
/**
 * @member {module:model/Card} card
 */

GetSharesResponse.prototype['card'] = undefined;
var _default = GetSharesResponse;
exports["default"] = _default;