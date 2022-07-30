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
 * The InputField model module.
 * @module model/InputField
 * @version 0.0.1
 */
var InputField = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InputField</code>.
   * @alias module:model/InputField
   * @param displayName {String} 
   * @param type {module:model/InputField.TypeEnum} Ex: Title
   */
  function InputField(displayName, type) {
    _classCallCheck(this, InputField);

    InputField.initialize(this, displayName, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InputField, null, [{
    key: "initialize",
    value: function initialize(obj, displayName, type) {
      obj['displayName'] = displayName;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>InputField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InputField} obj Optional instance to populate.
     * @return {module:model/InputField} The populated <code>InputField</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InputField();

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }

        if (data.hasOwnProperty('helpText')) {
          obj['helpText'] = _ApiClient["default"].convertToType(data['helpText'], 'String');
        }

        if (data.hasOwnProperty('hint')) {
          obj['hint'] = _ApiClient["default"].convertToType(data['hint'], 'String');
        }

        if (data.hasOwnProperty('icon')) {
          obj['icon'] = _ApiClient["default"].convertToType(data['icon'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('image')) {
          obj['image'] = _ApiClient["default"].convertToType(data['image'], 'String');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('labelLeft')) {
          obj['labelLeft'] = _ApiClient["default"].convertToType(data['labelLeft'], 'String');
        }

        if (data.hasOwnProperty('labelRight')) {
          obj['labelRight'] = _ApiClient["default"].convertToType(data['labelRight'], 'String');
        }

        if (data.hasOwnProperty('link')) {
          obj['link'] = _ApiClient["default"].convertToType(data['link'], 'String');
        }

        if (data.hasOwnProperty('maxLength')) {
          obj['maxLength'] = _ApiClient["default"].convertToType(data['maxLength'], 'Number');
        }

        if (data.hasOwnProperty('maxValue')) {
          obj['maxValue'] = _ApiClient["default"].convertToType(data['maxValue'], 'Number');
        }

        if (data.hasOwnProperty('minLength')) {
          obj['minLength'] = _ApiClient["default"].convertToType(data['minLength'], 'Number');
        }

        if (data.hasOwnProperty('minValue')) {
          obj['minValue'] = _ApiClient["default"].convertToType(data['minValue'], 'Number');
        }

        if (data.hasOwnProperty('options')) {
          obj['options'] = _ApiClient["default"].convertToType(data['options'], ['String']);
        }

        if (data.hasOwnProperty('placeholder')) {
          obj['placeholder'] = _ApiClient["default"].convertToType(data['placeholder'], 'String');
        }

        if (data.hasOwnProperty('postUrl')) {
          obj['postUrl'] = _ApiClient["default"].convertToType(data['postUrl'], 'String');
        }

        if (data.hasOwnProperty('required')) {
          obj['required'] = _ApiClient["default"].convertToType(data['required'], 'Boolean');
        }

        if (data.hasOwnProperty('show')) {
          obj['show'] = _ApiClient["default"].convertToType(data['show'], 'Boolean');
        }

        if (data.hasOwnProperty('submitButton')) {
          obj['submitButton'] = _Button["default"].constructFromObject(data['submitButton']);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('validationPattern')) {
          obj['validationPattern'] = _ApiClient["default"].convertToType(data['validationPattern'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InputField;
}();
/**
 * @member {String} displayName
 */


InputField.prototype['displayName'] = undefined;
/**
 * @member {String} helpText
 */

InputField.prototype['helpText'] = undefined;
/**
 * @member {String} hint
 */

InputField.prototype['hint'] = undefined;
/**
 * @member {String} icon
 */

InputField.prototype['icon'] = undefined;
/**
 * HTML element id
 * @member {String} id
 */

InputField.prototype['id'] = undefined;
/**
 * @member {String} image
 */

InputField.prototype['image'] = undefined;
/**
 * @member {String} key
 */

InputField.prototype['key'] = undefined;
/**
 * @member {String} labelLeft
 */

InputField.prototype['labelLeft'] = undefined;
/**
 * @member {String} labelRight
 */

InputField.prototype['labelRight'] = undefined;
/**
 * @member {String} link
 */

InputField.prototype['link'] = undefined;
/**
 * @member {Number} maxLength
 */

InputField.prototype['maxLength'] = undefined;
/**
 * @member {Number} maxValue
 */

InputField.prototype['maxValue'] = undefined;
/**
 * @member {Number} minLength
 */

InputField.prototype['minLength'] = undefined;
/**
 * @member {Number} minValue
 */

InputField.prototype['minValue'] = undefined;
/**
 * Selector list options
 * @member {Array.<String>} options
 */

InputField.prototype['options'] = undefined;
/**
 * Ex: Title
 * @member {String} placeholder
 */

InputField.prototype['placeholder'] = undefined;
/**
 * @member {String} postUrl
 */

InputField.prototype['postUrl'] = undefined;
/**
 * @member {Boolean} required
 */

InputField.prototype['required'] = undefined;
/**
 * Ex: Title
 * @member {Boolean} show
 */

InputField.prototype['show'] = undefined;
/**
 * @member {module:model/Button} submitButton
 */

InputField.prototype['submitButton'] = undefined;
/**
 * Ex: Title
 * @member {module:model/InputField.TypeEnum} type
 */

InputField.prototype['type'] = undefined;
/**
 * See https://html5pattern.com/ for examples
 * @member {String} validationPattern
 */

InputField.prototype['validationPattern'] = undefined;
/**
 * @member {String} value
 */

InputField.prototype['value'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

InputField['TypeEnum'] = {
  /**
   * value: "check_box"
   * @const
   */
  "check_box": "check_box",

  /**
   * value: "date"
   * @const
   */
  "date": "date",

  /**
   * value: "email"
   * @const
   */
  "email": "email",

  /**
   * value: "number"
   * @const
   */
  "number": "number",

  /**
   * value: "postal_code"
   * @const
   */
  "postal_code": "postal_code",

  /**
   * value: "select_option"
   * @const
   */
  "select_option": "select_option",

  /**
   * value: "string"
   * @const
   */
  "string": "string",

  /**
   * value: "switch"
   * @const
   */
  "switch": "switch",

  /**
   * value: "text_area"
   * @const
   */
  "text_area": "text_area",

  /**
   * value: "unit"
   * @const
   */
  "unit": "unit",

  /**
   * value: "variable_category"
   * @const
   */
  "variable_category": "variable_category"
};
var _default = InputField;
exports["default"] = _default;