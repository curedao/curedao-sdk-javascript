"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ExplanationStartTracking = _interopRequireDefault(require("./ExplanationStartTracking"));

var _Image = _interopRequireDefault(require("./Image"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Explanation model module.
 * @module model/Explanation
 * @version 0.0.1
 */
var Explanation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Explanation</code>.
   * @alias module:model/Explanation
   * @param description {String} Ex: These factors are most predictive of Overall Mood based on your own data.
   * @param image {module:model/Image} 
   * @param ionIcon {String} Ex: ion-ios-person
   * @param startTracking {module:model/ExplanationStartTracking} 
   * @param title {String} Ex: Top Predictors of Overall Mood
   */
  function Explanation(description, image, ionIcon, startTracking, title) {
    _classCallCheck(this, Explanation);

    Explanation.initialize(this, description, image, ionIcon, startTracking, title);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Explanation, null, [{
    key: "initialize",
    value: function initialize(obj, description, image, ionIcon, startTracking, title) {
      obj['description'] = description;
      obj['image'] = image;
      obj['ionIcon'] = ionIcon;
      obj['startTracking'] = startTracking;
      obj['title'] = title;
    }
    /**
     * Constructs a <code>Explanation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Explanation} obj Optional instance to populate.
     * @return {module:model/Explanation} The populated <code>Explanation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Explanation();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('image')) {
          obj['image'] = _Image["default"].constructFromObject(data['image']);
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

  return Explanation;
}();
/**
 * Ex: These factors are most predictive of Overall Mood based on your own data.
 * @member {String} description
 */


Explanation.prototype['description'] = undefined;
/**
 * @member {module:model/Image} image
 */

Explanation.prototype['image'] = undefined;
/**
 * Ex: ion-ios-person
 * @member {String} ionIcon
 */

Explanation.prototype['ionIcon'] = undefined;
/**
 * @member {module:model/ExplanationStartTracking} startTracking
 */

Explanation.prototype['startTracking'] = undefined;
/**
 * Ex: Top Predictors of Overall Mood
 * @member {String} title
 */

Explanation.prototype['title'] = undefined;
/**
 * Embeddable list of study summaries with explanation at the top
 * @member {String} html
 */

Explanation.prototype['html'] = undefined;
var _default = Explanation;
exports["default"] = _default;