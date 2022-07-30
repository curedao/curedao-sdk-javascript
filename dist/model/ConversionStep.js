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
 * The ConversionStep model module.
 * @module model/ConversionStep
 * @version 0.0.1
 */
var ConversionStep = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversionStep</code>.
   * @alias module:model/ConversionStep
   * @param operation {module:model/ConversionStep.OperationEnum} ADD or MULTIPLY
   * @param value {Number} This specifies the order of conversion steps starting with 0
   */
  function ConversionStep(operation, value) {
    _classCallCheck(this, ConversionStep);

    ConversionStep.initialize(this, operation, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConversionStep, null, [{
    key: "initialize",
    value: function initialize(obj, operation, value) {
      obj['operation'] = operation;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>ConversionStep</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConversionStep} obj Optional instance to populate.
     * @return {module:model/ConversionStep} The populated <code>ConversionStep</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversionStep();

        if (data.hasOwnProperty('operation')) {
          obj['operation'] = _ApiClient["default"].convertToType(data['operation'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ConversionStep;
}();
/**
 * ADD or MULTIPLY
 * @member {module:model/ConversionStep.OperationEnum} operation
 */


ConversionStep.prototype['operation'] = undefined;
/**
 * This specifies the order of conversion steps starting with 0
 * @member {Number} value
 */

ConversionStep.prototype['value'] = undefined;
/**
 * Allowed values for the <code>operation</code> property.
 * @enum {String}
 * @readonly
 */

ConversionStep['OperationEnum'] = {
  /**
   * value: "ADD"
   * @const
   */
  "ADD": "ADD",

  /**
   * value: "MULTIPLY"
   * @const
   */
  "MULTIPLY": "MULTIPLY"
};
var _default = ConversionStep;
exports["default"] = _default;