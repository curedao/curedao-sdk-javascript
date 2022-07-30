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
 * The Chart model module.
 * @module model/Chart
 * @version 0.0.1
 */
var Chart = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Chart</code>.
   * @alias module:model/Chart
   */
  function Chart() {
    _classCallCheck(this, Chart);

    Chart.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Chart, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Chart</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Chart} obj Optional instance to populate.
     * @return {module:model/Chart} The populated <code>Chart</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Chart();

        if (data.hasOwnProperty('highchartConfig')) {
          obj['highchartConfig'] = _ApiClient["default"].convertToType(data['highchartConfig'], Object);
        }

        if (data.hasOwnProperty('chartId')) {
          obj['chartId'] = _ApiClient["default"].convertToType(data['chartId'], 'String');
        }

        if (data.hasOwnProperty('chartTitle')) {
          obj['chartTitle'] = _ApiClient["default"].convertToType(data['chartTitle'], 'String');
        }

        if (data.hasOwnProperty('explanation')) {
          obj['explanation'] = _ApiClient["default"].convertToType(data['explanation'], 'String');
        }

        if (data.hasOwnProperty('svgUrl')) {
          obj['svgUrl'] = _ApiClient["default"].convertToType(data['svgUrl'], 'String');
        }

        if (data.hasOwnProperty('svg')) {
          obj['svg'] = _ApiClient["default"].convertToType(data['svg'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Chart;
}();
/**
 *  Highcharts config that can be used if you have highcharts.js included on the page
 * @member {Object} highchartConfig
 */


Chart.prototype['highchartConfig'] = undefined;
/**
 * Ex: correlationScatterPlot
 * @member {String} chartId
 */

Chart.prototype['chartId'] = undefined;
/**
 * Ex: Overall Mood following Sleep Duration (R = -0.173)
 * @member {String} chartTitle
 */

Chart.prototype['chartTitle'] = undefined;
/**
 * Ex: The chart above indicates that an increase in Sleep Duration is usually followed by an decrease in Overall Mood.
 * @member {String} explanation
 */

Chart.prototype['explanation'] = undefined;
/**
 * Url to a static svg of the chart
 * @member {String} svgUrl
 */

Chart.prototype['svgUrl'] = undefined;
/**
 * SVG string than can be embedded directly in HTML
 * @member {String} svg
 */

Chart.prototype['svg'] = undefined;
var _default = Chart;
exports["default"] = _default;