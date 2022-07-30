"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Card = _interopRequireDefault(require("./Card"));

var _Correlation = _interopRequireDefault(require("./Correlation"));

var _ParticipantInstruction = _interopRequireDefault(require("./ParticipantInstruction"));

var _StudyCharts = _interopRequireDefault(require("./StudyCharts"));

var _StudyHtml = _interopRequireDefault(require("./StudyHtml"));

var _StudyImages = _interopRequireDefault(require("./StudyImages"));

var _StudyLinks = _interopRequireDefault(require("./StudyLinks"));

var _StudySharing = _interopRequireDefault(require("./StudySharing"));

var _StudyText = _interopRequireDefault(require("./StudyText"));

var _StudyVotes = _interopRequireDefault(require("./StudyVotes"));

var _Variable = _interopRequireDefault(require("./Variable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Study model module.
 * @module model/Study
 * @version 0.0.1
 */
var Study = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Study</code>.
   * A study analyzes the relationship between a predictor variable like gluten-intake and an outcome of interest such as overall mood.
   * @alias module:model/Study
   * @param type {String} Ex: population, cohort, or individual
   */
  function Study(type) {
    _classCallCheck(this, Study);

    Study.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Study, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>Study</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Study} obj Optional instance to populate.
     * @return {module:model/Study} The populated <code>Study</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Study();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('userId')) {
          obj['userId'] = _ApiClient["default"].convertToType(data['userId'], 'Number');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('causeVariable')) {
          obj['causeVariable'] = _Variable["default"].constructFromObject(data['causeVariable']);
        }

        if (data.hasOwnProperty('causeVariableName')) {
          obj['causeVariableName'] = _ApiClient["default"].convertToType(data['causeVariableName'], 'String');
        }

        if (data.hasOwnProperty('studyCharts')) {
          obj['studyCharts'] = _StudyCharts["default"].constructFromObject(data['studyCharts']);
        }

        if (data.hasOwnProperty('effectVariable')) {
          obj['effectVariable'] = _Variable["default"].constructFromObject(data['effectVariable']);
        }

        if (data.hasOwnProperty('effectVariableName')) {
          obj['effectVariableName'] = _ApiClient["default"].convertToType(data['effectVariableName'], 'String');
        }

        if (data.hasOwnProperty('participantInstructions')) {
          obj['participantInstructions'] = _ParticipantInstruction["default"].constructFromObject(data['participantInstructions']);
        }

        if (data.hasOwnProperty('statistics')) {
          obj['statistics'] = _Correlation["default"].constructFromObject(data['statistics']);
        }

        if (data.hasOwnProperty('studyCard')) {
          obj['studyCard'] = _Card["default"].constructFromObject(data['studyCard']);
        }

        if (data.hasOwnProperty('studyHtml')) {
          obj['studyHtml'] = _StudyHtml["default"].constructFromObject(data['studyHtml']);
        }

        if (data.hasOwnProperty('studyImages')) {
          obj['studyImages'] = _StudyImages["default"].constructFromObject(data['studyImages']);
        }

        if (data.hasOwnProperty('studyLinks')) {
          obj['studyLinks'] = _StudyLinks["default"].constructFromObject(data['studyLinks']);
        }

        if (data.hasOwnProperty('studySharing')) {
          obj['studySharing'] = _StudySharing["default"].constructFromObject(data['studySharing']);
        }

        if (data.hasOwnProperty('studyText')) {
          obj['studyText'] = _StudyText["default"].constructFromObject(data['studyText']);
        }

        if (data.hasOwnProperty('studyVotes')) {
          obj['studyVotes'] = _StudyVotes["default"].constructFromObject(data['studyVotes']);
        }

        if (data.hasOwnProperty('joined')) {
          obj['joined'] = _ApiClient["default"].convertToType(data['joined'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return Study;
}();
/**
 * Ex: population, cohort, or individual
 * @member {String} type
 */


Study.prototype['type'] = undefined;
/**
 * The user id of the principal investigator or subject if an individual studies
 * @member {Number} userId
 */

Study.prototype['userId'] = undefined;
/**
 * ID of the cohort study which is necessary to allow participants to join
 * @member {String} id
 */

Study.prototype['id'] = undefined;
/**
 * @member {module:model/Variable} causeVariable
 */

Study.prototype['causeVariable'] = undefined;
/**
 * Ex: Sleep Quality
 * @member {String} causeVariableName
 */

Study.prototype['causeVariableName'] = undefined;
/**
 * @member {module:model/StudyCharts} studyCharts
 */

Study.prototype['studyCharts'] = undefined;
/**
 * @member {module:model/Variable} effectVariable
 */

Study.prototype['effectVariable'] = undefined;
/**
 * Ex: Overall Mood
 * @member {String} effectVariableName
 */

Study.prototype['effectVariableName'] = undefined;
/**
 * @member {module:model/ParticipantInstruction} participantInstructions
 */

Study.prototype['participantInstructions'] = undefined;
/**
 * @member {module:model/Correlation} statistics
 */

Study.prototype['statistics'] = undefined;
/**
 * @member {module:model/Card} studyCard
 */

Study.prototype['studyCard'] = undefined;
/**
 * @member {module:model/StudyHtml} studyHtml
 */

Study.prototype['studyHtml'] = undefined;
/**
 * @member {module:model/StudyImages} studyImages
 */

Study.prototype['studyImages'] = undefined;
/**
 * @member {module:model/StudyLinks} studyLinks
 */

Study.prototype['studyLinks'] = undefined;
/**
 * @member {module:model/StudySharing} studySharing
 */

Study.prototype['studySharing'] = undefined;
/**
 * @member {module:model/StudyText} studyText
 */

Study.prototype['studyText'] = undefined;
/**
 * @member {module:model/StudyVotes} studyVotes
 */

Study.prototype['studyVotes'] = undefined;
/**
 * True if you are sharing your data with this study
 * @member {Boolean} joined
 */

Study.prototype['joined'] = undefined;
var _default = Study;
exports["default"] = _default;