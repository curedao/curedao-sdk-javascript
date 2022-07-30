"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ExplanationStartTracking model module.
 * @module model/ExplanationStartTracking
 * @version 0.0.1
 */
var ExplanationStartTracking = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ExplanationStartTracking</code>.
   * @alias module:model/ExplanationStartTracking
   * @param button {module:model/Button} 
   * @param description {String} Ex: The more data I have the more accurate your results will be so track regularly!
   * @param title {String} Ex: Improve Accuracy
   */
  function ExplanationStartTracking(button, description, title) {
    _classCallCheck(this, ExplanationStartTracking);

    ExplanationStartTracking.initialize(this, button, description, title);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ExplanationStartTracking, null, [{
    key: "initialize",
    value: function initialize(obj, button, description, title) {
      obj['button'] = button;
      obj['description'] = description;
      obj['title'] = title;
    }
    /**
     * Constructs a <code>ExplanationStartTracking</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExplanationStartTracking} obj Optional instance to populate.
     * @return {module:model/ExplanationStartTracking} The populated <code>ExplanationStartTracking</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExplanationStartTracking();

        if (data.hasOwnProperty('button')) {
          obj['button'] = _Button["default"].constructFromObject(data['button']);
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ExplanationStartTracking;
}();
/**
 * @member {module:model/Button} button
 */


ExplanationStartTracking.prototype['button'] = undefined;
/**
 * Ex: The more data I have the more accurate your results will be so track regularly!
 * @member {String} description
 */

ExplanationStartTracking.prototype['description'] = undefined;
/**
 * Ex: Improve Accuracy
 * @member {String} title
 */

ExplanationStartTracking.prototype['title'] = undefined;
var _default = ExplanationStartTracking;
exports["default"] = _default;