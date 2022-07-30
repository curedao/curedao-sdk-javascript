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
 * The Pair model module.
 * @module model/Pair
 * @version 0.0.1
 */
var Pair = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Pair</code>.
   * @alias module:model/Pair
   * @param causeMeasurement {Number} Ex: 101341.66666667
   * @param causeMeasurementValue {Number} Ex: 101341.66666667
   * @param causeVariableUnitAbbreviatedName {String} Ex: mg
   * @param effectMeasurement {Number} Ex: 7.98
   * @param effectMeasurementValue {Number} Ex: 7.98
   * @param effectVariableUnitAbbreviatedName {String} Ex: %
   * @param timestamp {Number} Ex: 1464937200
   */
  function Pair(causeMeasurement, causeMeasurementValue, causeVariableUnitAbbreviatedName, effectMeasurement, effectMeasurementValue, effectVariableUnitAbbreviatedName, timestamp) {
    _classCallCheck(this, Pair);

    Pair.initialize(this, causeMeasurement, causeMeasurementValue, causeVariableUnitAbbreviatedName, effectMeasurement, effectMeasurementValue, effectVariableUnitAbbreviatedName, timestamp);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Pair, null, [{
    key: "initialize",
    value: function initialize(obj, causeMeasurement, causeMeasurementValue, causeVariableUnitAbbreviatedName, effectMeasurement, effectMeasurementValue, effectVariableUnitAbbreviatedName, timestamp) {
      obj['causeMeasurement'] = causeMeasurement;
      obj['causeMeasurementValue'] = causeMeasurementValue;
      obj['causeVariableUnitAbbreviatedName'] = causeVariableUnitAbbreviatedName;
      obj['effectMeasurement'] = effectMeasurement;
      obj['effectMeasurementValue'] = effectMeasurementValue;
      obj['effectVariableUnitAbbreviatedName'] = effectVariableUnitAbbreviatedName;
      obj['timestamp'] = timestamp;
    }
    /**
     * Constructs a <code>Pair</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Pair} obj Optional instance to populate.
     * @return {module:model/Pair} The populated <code>Pair</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Pair();

        if (data.hasOwnProperty('causeMeasurement')) {
          obj['causeMeasurement'] = _ApiClient["default"].convertToType(data['causeMeasurement'], 'Number');
        }

        if (data.hasOwnProperty('causeMeasurementValue')) {
          obj['causeMeasurementValue'] = _ApiClient["default"].convertToType(data['causeMeasurementValue'], 'Number');
        }

        if (data.hasOwnProperty('causeVariableUnitAbbreviatedName')) {
          obj['causeVariableUnitAbbreviatedName'] = _ApiClient["default"].convertToType(data['causeVariableUnitAbbreviatedName'], 'String');
        }

        if (data.hasOwnProperty('effectMeasurement')) {
          obj['effectMeasurement'] = _ApiClient["default"].convertToType(data['effectMeasurement'], 'Number');
        }

        if (data.hasOwnProperty('effectMeasurementValue')) {
          obj['effectMeasurementValue'] = _ApiClient["default"].convertToType(data['effectMeasurementValue'], 'Number');
        }

        if (data.hasOwnProperty('effectVariableUnitAbbreviatedName')) {
          obj['effectVariableUnitAbbreviatedName'] = _ApiClient["default"].convertToType(data['effectVariableUnitAbbreviatedName'], 'String');
        }

        if (data.hasOwnProperty('eventAt')) {
          obj['eventAt'] = _ApiClient["default"].convertToType(data['eventAt'], 'String');
        }

        if (data.hasOwnProperty('eventAtUnixTime')) {
          obj['eventAtUnixTime'] = _ApiClient["default"].convertToType(data['eventAtUnixTime'], 'Number');
        }

        if (data.hasOwnProperty('startTimeString')) {
          obj['startTimeString'] = _ApiClient["default"].convertToType(data['startTimeString'], 'String');
        }

        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Pair;
}();
/**
 * Ex: 101341.66666667
 * @member {Number} causeMeasurement
 */


Pair.prototype['causeMeasurement'] = undefined;
/**
 * Ex: 101341.66666667
 * @member {Number} causeMeasurementValue
 */

Pair.prototype['causeMeasurementValue'] = undefined;
/**
 * Ex: mg
 * @member {String} causeVariableUnitAbbreviatedName
 */

Pair.prototype['causeVariableUnitAbbreviatedName'] = undefined;
/**
 * Ex: 7.98
 * @member {Number} effectMeasurement
 */

Pair.prototype['effectMeasurement'] = undefined;
/**
 * Ex: 7.98
 * @member {Number} effectMeasurementValue
 */

Pair.prototype['effectMeasurementValue'] = undefined;
/**
 * Ex: %
 * @member {String} effectVariableUnitAbbreviatedName
 */

Pair.prototype['effectVariableUnitAbbreviatedName'] = undefined;
/**
 * Ex: 2015-08-06 15:49:02 UTC ISO 8601 YYYY-MM-DDThh:mm:ss
 * @member {String} eventAt
 */

Pair.prototype['eventAt'] = undefined;
/**
 * Ex: 1438876142
 * @member {Number} eventAtUnixTime
 */

Pair.prototype['eventAtUnixTime'] = undefined;
/**
 * Ex: 2015-08-06 15:49:02 UTC ISO 8601 YYYY-MM-DDThh:mm:ss
 * @member {String} startTimeString
 */

Pair.prototype['startTimeString'] = undefined;
/**
 * Ex: 1464937200
 * @member {Number} timestamp
 */

Pair.prototype['timestamp'] = undefined;
var _default = Pair;
exports["default"] = _default;