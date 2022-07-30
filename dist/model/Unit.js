"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ConversionStep = _interopRequireDefault(require("./ConversionStep"));

var _UnitCategory = _interopRequireDefault(require("./UnitCategory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Unit model module.
 * @module model/Unit
 * @version 0.0.1
 */
var Unit = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Unit</code>.
   * @alias module:model/Unit
   * @param abbreviatedName {String} Unit abbreviation
   * @param category {module:model/Unit.CategoryEnum} Unit category
   * @param conversionSteps {Array.<module:model/ConversionStep>} Conversion steps list
   * @param maximumValue {Number} Ex: 4
   * @param name {String} Unit name
   * @param unitCategory {module:model/UnitCategory} 
   */
  function Unit(abbreviatedName, category, conversionSteps, maximumValue, name, unitCategory) {
    _classCallCheck(this, Unit);

    Unit.initialize(this, abbreviatedName, category, conversionSteps, maximumValue, name, unitCategory);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Unit, null, [{
    key: "initialize",
    value: function initialize(obj, abbreviatedName, category, conversionSteps, maximumValue, name, unitCategory) {
      obj['abbreviatedName'] = abbreviatedName;
      obj['category'] = category;
      obj['conversionSteps'] = conversionSteps;
      obj['maximumValue'] = maximumValue;
      obj['name'] = name;
      obj['unitCategory'] = unitCategory;
    }
    /**
     * Constructs a <code>Unit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Unit} obj Optional instance to populate.
     * @return {module:model/Unit} The populated <code>Unit</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Unit();

        if (data.hasOwnProperty('abbreviatedName')) {
          obj['abbreviatedName'] = _ApiClient["default"].convertToType(data['abbreviatedName'], 'String');
        }

        if (data.hasOwnProperty('advanced')) {
          obj['advanced'] = _ApiClient["default"].convertToType(data['advanced'], 'Number');
        }

        if (data.hasOwnProperty('category')) {
          obj['category'] = _ApiClient["default"].convertToType(data['category'], 'String');
        }

        if (data.hasOwnProperty('categoryId')) {
          obj['categoryId'] = _ApiClient["default"].convertToType(data['categoryId'], 'Number');
        }

        if (data.hasOwnProperty('categoryName')) {
          obj['categoryName'] = _ApiClient["default"].convertToType(data['categoryName'], 'String');
        }

        if (data.hasOwnProperty('conversionSteps')) {
          obj['conversionSteps'] = _ApiClient["default"].convertToType(data['conversionSteps'], [_ConversionStep["default"]]);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('manualTracking')) {
          obj['manualTracking'] = _ApiClient["default"].convertToType(data['manualTracking'], 'Number');
        }

        if (data.hasOwnProperty('maximumAllowedValue')) {
          obj['maximumAllowedValue'] = _ApiClient["default"].convertToType(data['maximumAllowedValue'], 'Number');
        }

        if (data.hasOwnProperty('maximumValue')) {
          obj['maximumValue'] = _ApiClient["default"].convertToType(data['maximumValue'], 'Number');
        }

        if (data.hasOwnProperty('minimumAllowedValue')) {
          obj['minimumAllowedValue'] = _ApiClient["default"].convertToType(data['minimumAllowedValue'], 'Number');
        }

        if (data.hasOwnProperty('minimumValue')) {
          obj['minimumValue'] = _ApiClient["default"].convertToType(data['minimumValue'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('unitCategory')) {
          obj['unitCategory'] = _UnitCategory["default"].constructFromObject(data['unitCategory']);
        }
      }

      return obj;
    }
  }]);

  return Unit;
}();
/**
 * Unit abbreviation
 * @member {String} abbreviatedName
 */


Unit.prototype['abbreviatedName'] = undefined;
/**
 * Ex: 1
 * @member {Number} advanced
 */

Unit.prototype['advanced'] = undefined;
/**
 * Unit category
 * @member {module:model/Unit.CategoryEnum} category
 */

Unit.prototype['category'] = undefined;
/**
 * Ex: 6
 * @member {Number} categoryId
 */

Unit.prototype['categoryId'] = undefined;
/**
 * Ex: Miscellany
 * @member {String} categoryName
 */

Unit.prototype['categoryName'] = undefined;
/**
 * Conversion steps list
 * @member {Array.<module:model/ConversionStep>} conversionSteps
 */

Unit.prototype['conversionSteps'] = undefined;
/**
 * Ex: 29
 * @member {Number} id
 */

Unit.prototype['id'] = undefined;
/**
 * Ex: 0
 * @member {Number} manualTracking
 */

Unit.prototype['manualTracking'] = undefined;
/**
 * The maximum allowed value for measurements. While you can record a value above this maximum, it will be excluded from the correlation analysis.
 * @member {Number} maximumAllowedValue
 */

Unit.prototype['maximumAllowedValue'] = undefined;
/**
 * Ex: 4
 * @member {Number} maximumValue
 */

Unit.prototype['maximumValue'] = undefined;
/**
 * The minimum allowed value for measurements. While you can record a value below this minimum, it will be excluded from the correlation analysis.
 * @member {Number} minimumAllowedValue
 */

Unit.prototype['minimumAllowedValue'] = undefined;
/**
 * Ex: 0
 * @member {Number} minimumValue
 */

Unit.prototype['minimumValue'] = undefined;
/**
 * Unit name
 * @member {String} name
 */

Unit.prototype['name'] = undefined;
/**
 * @member {module:model/UnitCategory} unitCategory
 */

Unit.prototype['unitCategory'] = undefined;
/**
 * Allowed values for the <code>category</code> property.
 * @enum {String}
 * @readonly
 */

Unit['CategoryEnum'] = {
  /**
   * value: "Distance"
   * @const
   */
  "Distance": "Distance",

  /**
   * value: "Duration"
   * @const
   */
  "Duration": "Duration",

  /**
   * value: "Energy"
   * @const
   */
  "Energy": "Energy",

  /**
   * value: "Frequency"
   * @const
   */
  "Frequency": "Frequency",

  /**
   * value: "Miscellany"
   * @const
   */
  "Miscellany": "Miscellany",

  /**
   * value: "Pressure"
   * @const
   */
  "Pressure": "Pressure",

  /**
   * value: "Proportion"
   * @const
   */
  "Proportion": "Proportion",

  /**
   * value: "Rating"
   * @const
   */
  "Rating": "Rating",

  /**
   * value: "Temperature"
   * @const
   */
  "Temperature": "Temperature",

  /**
   * value: "Volume"
   * @const
   */
  "Volume": "Volume",

  /**
   * value: "Weight"
   * @const
   */
  "Weight": "Weight",

  /**
   * value: "Count"
   * @const
   */
  "Count": "Count"
};
var _default = Unit;
exports["default"] = _default;