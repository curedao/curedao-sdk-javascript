"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Chart = _interopRequireDefault(require("./Chart"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The VariableCharts model module.
 * @module model/VariableCharts
 * @version 0.0.1
 */
var VariableCharts = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VariableCharts</code>.
   * An object with various chart properties each property contain and svg and Highcharts configuration
   * @alias module:model/VariableCharts
   */
  function VariableCharts() {
    _classCallCheck(this, VariableCharts);

    VariableCharts.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VariableCharts, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VariableCharts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VariableCharts} obj Optional instance to populate.
     * @return {module:model/VariableCharts} The populated <code>VariableCharts</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VariableCharts();

        if (data.hasOwnProperty('hourlyColumnChart')) {
          obj['hourlyColumnChart'] = _Chart["default"].constructFromObject(data['hourlyColumnChart']);
        }

        if (data.hasOwnProperty('monthlyColumnChart')) {
          obj['monthlyColumnChart'] = _Chart["default"].constructFromObject(data['monthlyColumnChart']);
        }

        if (data.hasOwnProperty('distributionColumnChart')) {
          obj['distributionColumnChart'] = _Chart["default"].constructFromObject(data['distributionColumnChart']);
        }

        if (data.hasOwnProperty('weekdayColumnChart')) {
          obj['weekdayColumnChart'] = _Chart["default"].constructFromObject(data['weekdayColumnChart']);
        }

        if (data.hasOwnProperty('lineChartWithoutSmoothing')) {
          obj['lineChartWithoutSmoothing'] = _Chart["default"].constructFromObject(data['lineChartWithoutSmoothing']);
        }

        if (data.hasOwnProperty('lineChartWithSmoothing')) {
          obj['lineChartWithSmoothing'] = _Chart["default"].constructFromObject(data['lineChartWithSmoothing']);
        }
      }

      return obj;
    }
  }]);

  return VariableCharts;
}();
/**
 * @member {module:model/Chart} hourlyColumnChart
 */


VariableCharts.prototype['hourlyColumnChart'] = undefined;
/**
 * @member {module:model/Chart} monthlyColumnChart
 */

VariableCharts.prototype['monthlyColumnChart'] = undefined;
/**
 * @member {module:model/Chart} distributionColumnChart
 */

VariableCharts.prototype['distributionColumnChart'] = undefined;
/**
 * @member {module:model/Chart} weekdayColumnChart
 */

VariableCharts.prototype['weekdayColumnChart'] = undefined;
/**
 * @member {module:model/Chart} lineChartWithoutSmoothing
 */

VariableCharts.prototype['lineChartWithoutSmoothing'] = undefined;
/**
 * @member {module:model/Chart} lineChartWithSmoothing
 */

VariableCharts.prototype['lineChartWithSmoothing'] = undefined;
var _default = VariableCharts;
exports["default"] = _default;