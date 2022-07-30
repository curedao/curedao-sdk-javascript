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
 * The StudyHtml model module.
 * @module model/StudyHtml
 * @version 0.0.1
 */
var StudyHtml = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StudyHtml</code>.
   * @alias module:model/StudyHtml
   * @param chartHtml {String} Embeddable chart html
   * @param fullStudyHtml {String} Embeddable study text html including charts.  Modifiable css classes are study-title, study-section-header, study-section-body
   */
  function StudyHtml(chartHtml, fullStudyHtml) {
    _classCallCheck(this, StudyHtml);

    StudyHtml.initialize(this, chartHtml, fullStudyHtml);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StudyHtml, null, [{
    key: "initialize",
    value: function initialize(obj, chartHtml, fullStudyHtml) {
      obj['chartHtml'] = chartHtml;
      obj['fullStudyHtml'] = fullStudyHtml;
    }
    /**
     * Constructs a <code>StudyHtml</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StudyHtml} obj Optional instance to populate.
     * @return {module:model/StudyHtml} The populated <code>StudyHtml</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StudyHtml();

        if (data.hasOwnProperty('chartHtml')) {
          obj['chartHtml'] = _ApiClient["default"].convertToType(data['chartHtml'], 'String');
        }

        if (data.hasOwnProperty('downloadButtonsHtml')) {
          obj['downloadButtonsHtml'] = _ApiClient["default"].convertToType(data['downloadButtonsHtml'], 'String');
        }

        if (data.hasOwnProperty('fullPageWithHead')) {
          obj['fullPageWithHead'] = _ApiClient["default"].convertToType(data['fullPageWithHead'], 'String');
        }

        if (data.hasOwnProperty('fullStudyHtml')) {
          obj['fullStudyHtml'] = _ApiClient["default"].convertToType(data['fullStudyHtml'], 'String');
        }

        if (data.hasOwnProperty('fullStudyHtmlWithCssStyles')) {
          obj['fullStudyHtmlWithCssStyles'] = _ApiClient["default"].convertToType(data['fullStudyHtmlWithCssStyles'], 'String');
        }

        if (data.hasOwnProperty('participantInstructionsHtml')) {
          obj['participantInstructionsHtml'] = _ApiClient["default"].convertToType(data['participantInstructionsHtml'], 'String');
        }

        if (data.hasOwnProperty('statisticsTableHtml')) {
          obj['statisticsTableHtml'] = _ApiClient["default"].convertToType(data['statisticsTableHtml'], 'String');
        }

        if (data.hasOwnProperty('studyAbstractHtml')) {
          obj['studyAbstractHtml'] = _ApiClient["default"].convertToType(data['studyAbstractHtml'], 'String');
        }

        if (data.hasOwnProperty('studyHeaderHtml')) {
          obj['studyHeaderHtml'] = _ApiClient["default"].convertToType(data['studyHeaderHtml'], 'String');
        }

        if (data.hasOwnProperty('studyImageHtml')) {
          obj['studyImageHtml'] = _ApiClient["default"].convertToType(data['studyImageHtml'], 'String');
        }

        if (data.hasOwnProperty('studyMetaHtml')) {
          obj['studyMetaHtml'] = _ApiClient["default"].convertToType(data['studyMetaHtml'], 'String');
        }

        if (data.hasOwnProperty('studyTextHtml')) {
          obj['studyTextHtml'] = _ApiClient["default"].convertToType(data['studyTextHtml'], 'String');
        }

        if (data.hasOwnProperty('socialSharingButtonHtml')) {
          obj['socialSharingButtonHtml'] = _ApiClient["default"].convertToType(data['socialSharingButtonHtml'], 'String');
        }

        if (data.hasOwnProperty('studySummaryBoxHtml')) {
          obj['studySummaryBoxHtml'] = _ApiClient["default"].convertToType(data['studySummaryBoxHtml'], 'String');
        }
      }

      return obj;
    }
  }]);

  return StudyHtml;
}();
/**
 * Embeddable chart html
 * @member {String} chartHtml
 */


StudyHtml.prototype['chartHtml'] = undefined;
/**
 * Play Store, App Store, Chrome Web Store
 * @member {String} downloadButtonsHtml
 */

StudyHtml.prototype['downloadButtonsHtml'] = undefined;
/**
 * Embeddable study including HTML head section charts.  Modifiable css classes are study-title, study-section-header, study-section-body
 * @member {String} fullPageWithHead
 */

StudyHtml.prototype['fullPageWithHead'] = undefined;
/**
 * Embeddable study text html including charts.  Modifiable css classes are study-title, study-section-header, study-section-body
 * @member {String} fullStudyHtml
 */

StudyHtml.prototype['fullStudyHtml'] = undefined;
/**
 * Embeddable study html including charts and css styling
 * @member {String} fullStudyHtmlWithCssStyles
 */

StudyHtml.prototype['fullStudyHtmlWithCssStyles'] = undefined;
/**
 * Instructions for study participation
 * @member {String} participantInstructionsHtml
 */

StudyHtml.prototype['participantInstructionsHtml'] = undefined;
/**
 * Embeddable table with statistics
 * @member {String} statisticsTableHtml
 */

StudyHtml.prototype['statisticsTableHtml'] = undefined;
/**
 * Text summary
 * @member {String} studyAbstractHtml
 */

StudyHtml.prototype['studyAbstractHtml'] = undefined;
/**
 * Title, study image, abstract with CSS styling
 * @member {String} studyHeaderHtml
 */

StudyHtml.prototype['studyHeaderHtml'] = undefined;
/**
 * PNG image
 * @member {String} studyImageHtml
 */

StudyHtml.prototype['studyImageHtml'] = undefined;
/**
 * Facebook, Twitter, Google+
 * @member {String} studyMetaHtml
 */

StudyHtml.prototype['studyMetaHtml'] = undefined;
/**
 * Formatted study text sections
 * @member {String} studyTextHtml
 */

StudyHtml.prototype['studyTextHtml'] = undefined;
/**
 * @member {String} socialSharingButtonHtml
 */

StudyHtml.prototype['socialSharingButtonHtml'] = undefined;
/**
 * @member {String} studySummaryBoxHtml
 */

StudyHtml.prototype['studySummaryBoxHtml'] = undefined;
var _default = StudyHtml;
exports["default"] = _default;