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
 * The Button model module.
 * @module model/Button
 * @version 0.0.1
 */
var Button = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Button</code>.
   * @alias module:model/Button
   * @param link {String} Ex: https://local.curedao.org
   * @param text {String} Ex: Connect
   */
  function Button(link, text) {
    _classCallCheck(this, Button);

    Button.initialize(this, link, text);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Button, null, [{
    key: "initialize",
    value: function initialize(obj, link, text) {
      obj['link'] = link;
      obj['text'] = text;
    }
    /**
     * Constructs a <code>Button</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Button} obj Optional instance to populate.
     * @return {module:model/Button} The populated <code>Button</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Button();

        if (data.hasOwnProperty('accessibilityText')) {
          obj['accessibilityText'] = _ApiClient["default"].convertToType(data['accessibilityText'], 'String');
        }

        if (data.hasOwnProperty('action')) {
          obj['action'] = _ApiClient["default"].convertToType(data['action'], Object);
        }

        if (data.hasOwnProperty('additionalInformation')) {
          obj['additionalInformation'] = _ApiClient["default"].convertToType(data['additionalInformation'], 'String');
        }

        if (data.hasOwnProperty('color')) {
          obj['color'] = _ApiClient["default"].convertToType(data['color'], 'String');
        }

        if (data.hasOwnProperty('confirmationText')) {
          obj['confirmationText'] = _ApiClient["default"].convertToType(data['confirmationText'], 'String');
        }

        if (data.hasOwnProperty('functionName')) {
          obj['functionName'] = _ApiClient["default"].convertToType(data['functionName'], 'String');
        }

        if (data.hasOwnProperty('parameters')) {
          obj['parameters'] = _ApiClient["default"].convertToType(data['parameters'], Object);
        }

        if (data.hasOwnProperty('html')) {
          obj['html'] = _ApiClient["default"].convertToType(data['html'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('image')) {
          obj['image'] = _ApiClient["default"].convertToType(data['image'], 'String');
        }

        if (data.hasOwnProperty('ionIcon')) {
          obj['ionIcon'] = _ApiClient["default"].convertToType(data['ionIcon'], 'String');
        }

        if (data.hasOwnProperty('link')) {
          obj['link'] = _ApiClient["default"].convertToType(data['link'], 'String');
        }

        if (data.hasOwnProperty('stateName')) {
          obj['stateName'] = _ApiClient["default"].convertToType(data['stateName'], 'String');
        }

        if (data.hasOwnProperty('stateParams')) {
          obj['stateParams'] = _ApiClient["default"].convertToType(data['stateParams'], Object);
        }

        if (data.hasOwnProperty('successToastText')) {
          obj['successToastText'] = _ApiClient["default"].convertToType(data['successToastText'], 'String');
        }

        if (data.hasOwnProperty('successAlertTitle')) {
          obj['successAlertTitle'] = _ApiClient["default"].convertToType(data['successAlertTitle'], 'String');
        }

        if (data.hasOwnProperty('successAlertBody')) {
          obj['successAlertBody'] = _ApiClient["default"].convertToType(data['successAlertBody'], 'String');
        }

        if (data.hasOwnProperty('text')) {
          obj['text'] = _ApiClient["default"].convertToType(data['text'], 'String');
        }

        if (data.hasOwnProperty('tooltip')) {
          obj['tooltip'] = _ApiClient["default"].convertToType(data['tooltip'], 'String');
        }

        if (data.hasOwnProperty('webhookUrl')) {
          obj['webhookUrl'] = _ApiClient["default"].convertToType(data['webhookUrl'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Button;
}();
/**
 * Ex: connect
 * @member {String} accessibilityText
 */


Button.prototype['accessibilityText'] = undefined;
/**
 * Action data
 * @member {Object} action
 */

Button.prototype['action'] = undefined;
/**
 * Ex: connect
 * @member {String} additionalInformation
 */

Button.prototype['additionalInformation'] = undefined;
/**
 * Ex: #f2f2f2
 * @member {String} color
 */

Button.prototype['color'] = undefined;
/**
 * Text to show user before executing functionName
 * @member {String} confirmationText
 */

Button.prototype['confirmationText'] = undefined;
/**
 * Name of function to call
 * @member {String} functionName
 */

Button.prototype['functionName'] = undefined;
/**
 * Data to provide to functionName or be copied to the card parameters when button is clicked and card is posted to the API
 * @member {Object} parameters
 */

Button.prototype['parameters'] = undefined;
/**
 * Ex: connect
 * @member {String} html
 */

Button.prototype['html'] = undefined;
/**
 * HTML element id
 * @member {String} id
 */

Button.prototype['id'] = undefined;
/**
 * Ex: https://image.jpg
 * @member {String} image
 */

Button.prototype['image'] = undefined;
/**
 * Ex: ion-refresh
 * @member {String} ionIcon
 */

Button.prototype['ionIcon'] = undefined;
/**
 * Ex: https://local.curedao.org
 * @member {String} link
 */

Button.prototype['link'] = undefined;
/**
 * State to go to
 * @member {String} stateName
 */

Button.prototype['stateName'] = undefined;
/**
 * Data to provide to the state
 * @member {Object} stateParams
 */

Button.prototype['stateParams'] = undefined;
/**
 * Text to show user after executing functionName
 * @member {String} successToastText
 */

Button.prototype['successToastText'] = undefined;
/**
 * Text to show user after executing functionName
 * @member {String} successAlertTitle
 */

Button.prototype['successAlertTitle'] = undefined;
/**
 * Text to show user after executing functionName
 * @member {String} successAlertBody
 */

Button.prototype['successAlertBody'] = undefined;
/**
 * Ex: Connect
 * @member {String} text
 */

Button.prototype['text'] = undefined;
/**
 * Ex: This is a tooltip
 * @member {String} tooltip
 */

Button.prototype['tooltip'] = undefined;
/**
 * Post here on button click
 * @member {String} webhookUrl
 */

Button.prototype['webhookUrl'] = undefined;
var _default = Button;
exports["default"] = _default;
