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
 * The StudyCharts model module.
 * @module model/StudyCharts
 * @version 0.0.1
 */
var StudyCharts = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StudyCharts</code>.
   * An object with various chart properties each property contain and svg and Highcharts configuration
   * @alias module:model/StudyCharts
   */
  function StudyCharts() {
    _classCallCheck(this, StudyCharts);

    StudyCharts.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StudyCharts, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>StudyCharts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StudyCharts} obj Optional instance to populate.
     * @return {module:model/StudyCharts} The populated <code>StudyCharts</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StudyCharts();

        if (data.hasOwnProperty('populationTraitScatterPlot')) {
          obj['populationTraitScatterPlot'] = _Chart["default"].constructFromObject(data['populationTraitScatterPlot']);
        }

        if (data.hasOwnProperty('outcomeDistributionColumnChart')) {
          obj['outcomeDistributionColumnChart'] = _Chart["default"].constructFromObject(data['outcomeDistributionColumnChart']);
        }

        if (data.hasOwnProperty('predictorDistributionColumnChart')) {
          obj['predictorDistributionColumnChart'] = _Chart["default"].constructFromObject(data['predictorDistributionColumnChart']);
        }

        if (data.hasOwnProperty('correlationScatterPlot')) {
          obj['correlationScatterPlot'] = _Chart["default"].constructFromObject(data['correlationScatterPlot']);
        }

        if (data.hasOwnProperty('pairsOverTimeLineChart')) {
          obj['pairsOverTimeLineChart'] = _Chart["default"].constructFromObject(data['pairsOverTimeLineChart']);
        }
      }

      return obj;
    }
  }]);

  return StudyCharts;
}();
/**
 * @member {module:model/Chart} populationTraitScatterPlot
 */


StudyCharts.prototype['populationTraitScatterPlot'] = undefined;
/**
 * @member {module:model/Chart} outcomeDistributionColumnChart
 */

StudyCharts.prototype['outcomeDistributionColumnChart'] = undefined;
/**
 * @member {module:model/Chart} predictorDistributionColumnChart
 */

StudyCharts.prototype['predictorDistributionColumnChart'] = undefined;
/**
 * @member {module:model/Chart} correlationScatterPlot
 */

StudyCharts.prototype['correlationScatterPlot'] = undefined;
/**
 * @member {module:model/Chart} pairsOverTimeLineChart
 */

StudyCharts.prototype['pairsOverTimeLineChart'] = undefined;
var _default = StudyCharts;
exports["default"] = _default;