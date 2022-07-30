"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ExplanationStartTracking = _interopRequireDefault(require("./ExplanationStartTracking"));

var _Image = _interopRequireDefault(require("./Image"));

var _Study = _interopRequireDefault(require("./Study"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GetStudiesResponse model module.
 * @module model/GetStudiesResponse
 * @version 0.0.1
 */
var GetStudiesResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetStudiesResponse</code>.
   * @alias module:model/GetStudiesResponse
   * @param description {String} Ex: These factors are most predictive of Overall Mood based on your own data.
   * @param summary {String} Can be used as title in help info popup
   */
  function GetStudiesResponse(description, summary) {
    _classCallCheck(this, GetStudiesResponse);

    GetStudiesResponse.initialize(this, description, summary);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetStudiesResponse, null, [{
    key: "initialize",
    value: function initialize(obj, description, summary) {
      obj['description'] = description;
      obj['summary'] = summary;
    }
    /**
     * Constructs a <code>GetStudiesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetStudiesResponse} obj Optional instance to populate.
     * @return {module:model/GetStudiesResponse} The populated <code>GetStudiesResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetStudiesResponse();

        if (data.hasOwnProperty('studies')) {
          obj['studies'] = _ApiClient["default"].convertToType(data['studies'], [_Study["default"]]);
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('summary')) {
          obj['summary'] = _ApiClient["default"].convertToType(data['summary'], 'String');
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

        if (data.hasOwnProperty('startTracking')) {
          obj['startTracking'] = _ExplanationStartTracking["default"].constructFromObject(data['startTracking']);
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('html')) {
          obj['html'] = _ApiClient["default"].convertToType(data['html'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GetStudiesResponse;
}();
/**
 * @member {Array.<module:model/Study>} studies
 */


GetStudiesResponse.prototype['studies'] = undefined;
/**
 * Ex: These factors are most predictive of Overall Mood based on your own data.
 * @member {String} description
 */

GetStudiesResponse.prototype['description'] = undefined;
/**
 * Can be used as title in help info popup
 * @member {String} summary
 */

GetStudiesResponse.prototype['summary'] = undefined;
/**
 * @member {module:model/Image} image
 */

GetStudiesResponse.prototype['image'] = undefined;
/**
 * Square icon png url
 * @member {String} avatar
 */

GetStudiesResponse.prototype['avatar'] = undefined;
/**
 * Ex: ion-ios-person
 * @member {String} ionIcon
 */

GetStudiesResponse.prototype['ionIcon'] = undefined;
/**
 * @member {module:model/ExplanationStartTracking} startTracking
 */

GetStudiesResponse.prototype['startTracking'] = undefined;
/**
 * Ex: Top Predictors of Overall Mood
 * @member {String} title
 */

GetStudiesResponse.prototype['title'] = undefined;
/**
 * Embeddable list of study summaries with explanation at the top
 * @member {String} html
 */

GetStudiesResponse.prototype['html'] = undefined;
var _default = GetStudiesResponse;
exports["default"] = _default;