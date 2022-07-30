"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DataSource = _interopRequireDefault(require("./DataSource"));

var _StudyHtml = _interopRequireDefault(require("./StudyHtml"));

var _StudyImages = _interopRequireDefault(require("./StudyImages"));

var _StudyLinks = _interopRequireDefault(require("./StudyLinks"));

var _StudyText = _interopRequireDefault(require("./StudyText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Correlation model module.
 * @module model/Correlation
 * @version 0.0.1
 */
var Correlation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Correlation</code>.
   * @alias module:model/Correlation
   * @param causeVariableName {String} Ex: Sleep Quality
   * @param effectVariableName {String} Ex: Overall Mood
   */
  function Correlation(causeVariableName, effectVariableName) {
    _classCallCheck(this, Correlation);

    Correlation.initialize(this, causeVariableName, effectVariableName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Correlation, null, [{
    key: "initialize",
    value: function initialize(obj, causeVariableName, effectVariableName) {
      obj['causeVariableName'] = causeVariableName;
      obj['effectVariableName'] = effectVariableName;
    }
    /**
     * Constructs a <code>Correlation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Correlation} obj Optional instance to populate.
     * @return {module:model/Correlation} The populated <code>Correlation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Correlation();

        if (data.hasOwnProperty('averageDailyHighCause')) {
          obj['averageDailyHighCause'] = _ApiClient["default"].convertToType(data['averageDailyHighCause'], 'Number');
        }

        if (data.hasOwnProperty('averageDailyLowCause')) {
          obj['averageDailyLowCause'] = _ApiClient["default"].convertToType(data['averageDailyLowCause'], 'Number');
        }

        if (data.hasOwnProperty('averageEffect')) {
          obj['averageEffect'] = _ApiClient["default"].convertToType(data['averageEffect'], 'Number');
        }

        if (data.hasOwnProperty('averageEffectFollowingHighCause')) {
          obj['averageEffectFollowingHighCause'] = _ApiClient["default"].convertToType(data['averageEffectFollowingHighCause'], 'Number');
        }

        if (data.hasOwnProperty('averageEffectFollowingLowCause')) {
          obj['averageEffectFollowingLowCause'] = _ApiClient["default"].convertToType(data['averageEffectFollowingLowCause'], 'Number');
        }

        if (data.hasOwnProperty('averageForwardPearsonCorrelationOverOnsetDelays')) {
          obj['averageForwardPearsonCorrelationOverOnsetDelays'] = _ApiClient["default"].convertToType(data['averageForwardPearsonCorrelationOverOnsetDelays'], 'Number');
        }

        if (data.hasOwnProperty('averageReversePearsonCorrelationOverOnsetDelays')) {
          obj['averageReversePearsonCorrelationOverOnsetDelays'] = _ApiClient["default"].convertToType(data['averageReversePearsonCorrelationOverOnsetDelays'], 'Number');
        }

        if (data.hasOwnProperty('averageVote')) {
          obj['averageVote'] = _ApiClient["default"].convertToType(data['averageVote'], 'Number');
        }

        if (data.hasOwnProperty('causeChanges')) {
          obj['causeChanges'] = _ApiClient["default"].convertToType(data['causeChanges'], 'Number');
        }

        if (data.hasOwnProperty('causeDataSource')) {
          obj['causeDataSource'] = _DataSource["default"].constructFromObject(data['causeDataSource']);
        }

        if (data.hasOwnProperty('causeUserVariableShareUserMeasurements')) {
          obj['causeUserVariableShareUserMeasurements'] = _ApiClient["default"].convertToType(data['causeUserVariableShareUserMeasurements'], 'Number');
        }

        if (data.hasOwnProperty('causeVariableCategoryId')) {
          obj['causeVariableCategoryId'] = _ApiClient["default"].convertToType(data['causeVariableCategoryId'], 'Number');
        }

        if (data.hasOwnProperty('causeVariableCategoryName')) {
          obj['causeVariableCategoryName'] = _ApiClient["default"].convertToType(data['causeVariableCategoryName'], 'String');
        }

        if (data.hasOwnProperty('causeVariableCombinationOperation')) {
          obj['causeVariableCombinationOperation'] = _ApiClient["default"].convertToType(data['causeVariableCombinationOperation'], 'String');
        }

        if (data.hasOwnProperty('causeVariableUnitAbbreviatedName')) {
          obj['causeVariableUnitAbbreviatedName'] = _ApiClient["default"].convertToType(data['causeVariableUnitAbbreviatedName'], 'String');
        }

        if (data.hasOwnProperty('causeVariableId')) {
          obj['causeVariableId'] = _ApiClient["default"].convertToType(data['causeVariableId'], 'Number');
        }

        if (data.hasOwnProperty('causeVariableMostCommonConnectorId')) {
          obj['causeVariableMostCommonConnectorId'] = _ApiClient["default"].convertToType(data['causeVariableMostCommonConnectorId'], 'Number');
        }

        if (data.hasOwnProperty('causeVariableName')) {
          obj['causeVariableName'] = _ApiClient["default"].convertToType(data['causeVariableName'], 'String');
        }

        if (data.hasOwnProperty('confidenceInterval')) {
          obj['confidenceInterval'] = _ApiClient["default"].convertToType(data['confidenceInterval'], 'Number');
        }

        if (data.hasOwnProperty('confidenceLevel')) {
          obj['confidenceLevel'] = _ApiClient["default"].convertToType(data['confidenceLevel'], 'String');
        }

        if (data.hasOwnProperty('correlationCoefficient')) {
          obj['correlationCoefficient'] = _ApiClient["default"].convertToType(data['correlationCoefficient'], 'Number');
        }

        if (data.hasOwnProperty('correlationIsContradictoryToOptimalValues')) {
          obj['correlationIsContradictoryToOptimalValues'] = _ApiClient["default"].convertToType(data['correlationIsContradictoryToOptimalValues'], 'Boolean');
        }

        if (data.hasOwnProperty('createdAt')) {
          obj['createdAt'] = _ApiClient["default"].convertToType(data['createdAt'], 'String');
        }

        if (data.hasOwnProperty('criticalTValue')) {
          obj['criticalTValue'] = _ApiClient["default"].convertToType(data['criticalTValue'], 'Number');
        }

        if (data.hasOwnProperty('direction')) {
          obj['direction'] = _ApiClient["default"].convertToType(data['direction'], 'String');
        }

        if (data.hasOwnProperty('durationOfAction')) {
          obj['durationOfAction'] = _ApiClient["default"].convertToType(data['durationOfAction'], 'Number');
        }

        if (data.hasOwnProperty('durationOfActionInHours')) {
          obj['durationOfActionInHours'] = _ApiClient["default"].convertToType(data['durationOfActionInHours'], 'Number');
        }

        if (data.hasOwnProperty('degreesOfFreedom')) {
          obj['degreesOfFreedom'] = _ApiClient["default"].convertToType(data['degreesOfFreedom'], 'Number');
        }

        if (data.hasOwnProperty('effectNumberOfProcessedDailyMeasurements')) {
          obj['effectNumberOfProcessedDailyMeasurements'] = _ApiClient["default"].convertToType(data['effectNumberOfProcessedDailyMeasurements'], 'Number');
        }

        if (data.hasOwnProperty('error')) {
          obj['error'] = _ApiClient["default"].convertToType(data['error'], 'String');
        }

        if (data.hasOwnProperty('effectChanges')) {
          obj['effectChanges'] = _ApiClient["default"].convertToType(data['effectChanges'], 'Number');
        }

        if (data.hasOwnProperty('effectDataSource')) {
          obj['effectDataSource'] = _DataSource["default"].constructFromObject(data['effectDataSource']);
        }

        if (data.hasOwnProperty('effectSize')) {
          obj['effectSize'] = _ApiClient["default"].convertToType(data['effectSize'], 'String');
        }

        if (data.hasOwnProperty('effectUnit')) {
          obj['effectUnit'] = _ApiClient["default"].convertToType(data['effectUnit'], 'String');
        }

        if (data.hasOwnProperty('effectUserVariableShareUserMeasurements')) {
          obj['effectUserVariableShareUserMeasurements'] = _ApiClient["default"].convertToType(data['effectUserVariableShareUserMeasurements'], 'Number');
        }

        if (data.hasOwnProperty('effectVariableCategoryId')) {
          obj['effectVariableCategoryId'] = _ApiClient["default"].convertToType(data['effectVariableCategoryId'], 'Number');
        }

        if (data.hasOwnProperty('effectVariableCategoryName')) {
          obj['effectVariableCategoryName'] = _ApiClient["default"].convertToType(data['effectVariableCategoryName'], 'String');
        }

        if (data.hasOwnProperty('effectVariableCombinationOperation')) {
          obj['effectVariableCombinationOperation'] = _ApiClient["default"].convertToType(data['effectVariableCombinationOperation'], 'String');
        }

        if (data.hasOwnProperty('effectVariableCommonAlias')) {
          obj['effectVariableCommonAlias'] = _ApiClient["default"].convertToType(data['effectVariableCommonAlias'], 'String');
        }

        if (data.hasOwnProperty('effectVariableUnitAbbreviatedName')) {
          obj['effectVariableUnitAbbreviatedName'] = _ApiClient["default"].convertToType(data['effectVariableUnitAbbreviatedName'], 'String');
        }

        if (data.hasOwnProperty('effectVariableUnitId')) {
          obj['effectVariableUnitId'] = _ApiClient["default"].convertToType(data['effectVariableUnitId'], 'Number');
        }

        if (data.hasOwnProperty('effectVariableUnitName')) {
          obj['effectVariableUnitName'] = _ApiClient["default"].convertToType(data['effectVariableUnitName'], 'String');
        }

        if (data.hasOwnProperty('effectVariableId')) {
          obj['effectVariableId'] = _ApiClient["default"].convertToType(data['effectVariableId'], 'Number');
        }

        if (data.hasOwnProperty('effectVariableMostCommonConnectorId')) {
          obj['effectVariableMostCommonConnectorId'] = _ApiClient["default"].convertToType(data['effectVariableMostCommonConnectorId'], 'Number');
        }

        if (data.hasOwnProperty('effectVariableName')) {
          obj['effectVariableName'] = _ApiClient["default"].convertToType(data['effectVariableName'], 'String');
        }

        if (data.hasOwnProperty('experimentEndTime')) {
          obj['experimentEndTime'] = _ApiClient["default"].convertToType(data['experimentEndTime'], 'String');
        }

        if (data.hasOwnProperty('experimentStartTime')) {
          obj['experimentStartTime'] = _ApiClient["default"].convertToType(data['experimentStartTime'], 'String');
        }

        if (data.hasOwnProperty('forwardSpearmanCorrelationCoefficient')) {
          obj['forwardSpearmanCorrelationCoefficient'] = _ApiClient["default"].convertToType(data['forwardSpearmanCorrelationCoefficient'], 'Number');
        }

        if (data.hasOwnProperty('numberOfPairs')) {
          obj['numberOfPairs'] = _ApiClient["default"].convertToType(data['numberOfPairs'], 'Number');
        }

        if (data.hasOwnProperty('onsetDelay')) {
          obj['onsetDelay'] = _ApiClient["default"].convertToType(data['onsetDelay'], 'Number');
        }

        if (data.hasOwnProperty('onsetDelayInHours')) {
          obj['onsetDelayInHours'] = _ApiClient["default"].convertToType(data['onsetDelayInHours'], 'Number');
        }

        if (data.hasOwnProperty('onsetDelayWithStrongestPearsonCorrelation')) {
          obj['onsetDelayWithStrongestPearsonCorrelation'] = _ApiClient["default"].convertToType(data['onsetDelayWithStrongestPearsonCorrelation'], 'Number');
        }

        if (data.hasOwnProperty('onsetDelayWithStrongestPearsonCorrelationInHours')) {
          obj['onsetDelayWithStrongestPearsonCorrelationInHours'] = _ApiClient["default"].convertToType(data['onsetDelayWithStrongestPearsonCorrelationInHours'], 'Number');
        }

        if (data.hasOwnProperty('optimalPearsonProduct')) {
          obj['optimalPearsonProduct'] = _ApiClient["default"].convertToType(data['optimalPearsonProduct'], 'Number');
        }

        if (data.hasOwnProperty('outcomeFillingValue')) {
          obj['outcomeFillingValue'] = _ApiClient["default"].convertToType(data['outcomeFillingValue'], 'Number');
        }

        if (data.hasOwnProperty('outcomeMaximumAllowedValue')) {
          obj['outcomeMaximumAllowedValue'] = _ApiClient["default"].convertToType(data['outcomeMaximumAllowedValue'], 'Number');
        }

        if (data.hasOwnProperty('outcomeMinimumAllowedValue')) {
          obj['outcomeMinimumAllowedValue'] = _ApiClient["default"].convertToType(data['outcomeMinimumAllowedValue'], 'Number');
        }

        if (data.hasOwnProperty('pearsonCorrelationWithNoOnsetDelay')) {
          obj['pearsonCorrelationWithNoOnsetDelay'] = _ApiClient["default"].convertToType(data['pearsonCorrelationWithNoOnsetDelay'], 'Number');
        }

        if (data.hasOwnProperty('predictivePearsonCorrelation')) {
          obj['predictivePearsonCorrelation'] = _ApiClient["default"].convertToType(data['predictivePearsonCorrelation'], 'Number');
        }

        if (data.hasOwnProperty('predictivePearsonCorrelationCoefficient')) {
          obj['predictivePearsonCorrelationCoefficient'] = _ApiClient["default"].convertToType(data['predictivePearsonCorrelationCoefficient'], 'Number');
        }

        if (data.hasOwnProperty('predictorDataSources')) {
          obj['predictorDataSources'] = _ApiClient["default"].convertToType(data['predictorDataSources'], 'String');
        }

        if (data.hasOwnProperty('predictorFillingValue')) {
          obj['predictorFillingValue'] = _ApiClient["default"].convertToType(data['predictorFillingValue'], 'Number');
        }

        if (data.hasOwnProperty('predictorMaximumAllowedValue')) {
          obj['predictorMaximumAllowedValue'] = _ApiClient["default"].convertToType(data['predictorMaximumAllowedValue'], 'Number');
        }

        if (data.hasOwnProperty('predictorMinimumAllowedValue')) {
          obj['predictorMinimumAllowedValue'] = _ApiClient["default"].convertToType(data['predictorMinimumAllowedValue'], 'Number');
        }

        if (data.hasOwnProperty('predictsHighEffectChange')) {
          obj['predictsHighEffectChange'] = _ApiClient["default"].convertToType(data['predictsHighEffectChange'], 'Number');
        }

        if (data.hasOwnProperty('predictsLowEffectChange')) {
          obj['predictsLowEffectChange'] = _ApiClient["default"].convertToType(data['predictsLowEffectChange'], 'Number');
        }

        if (data.hasOwnProperty('pValue')) {
          obj['pValue'] = _ApiClient["default"].convertToType(data['pValue'], 'Number');
        }

        if (data.hasOwnProperty('qmScore')) {
          obj['qmScore'] = _ApiClient["default"].convertToType(data['qmScore'], 'Number');
        }

        if (data.hasOwnProperty('reversePearsonCorrelationCoefficient')) {
          obj['reversePearsonCorrelationCoefficient'] = _ApiClient["default"].convertToType(data['reversePearsonCorrelationCoefficient'], 'Number');
        }

        if (data.hasOwnProperty('shareUserMeasurements')) {
          obj['shareUserMeasurements'] = _ApiClient["default"].convertToType(data['shareUserMeasurements'], 'Boolean');
        }

        if (data.hasOwnProperty('sharingDescription')) {
          obj['sharingDescription'] = _ApiClient["default"].convertToType(data['sharingDescription'], 'String');
        }

        if (data.hasOwnProperty('sharingTitle')) {
          obj['sharingTitle'] = _ApiClient["default"].convertToType(data['sharingTitle'], 'String');
        }

        if (data.hasOwnProperty('significantDifference')) {
          obj['significantDifference'] = _ApiClient["default"].convertToType(data['significantDifference'], 'Boolean');
        }

        if (data.hasOwnProperty('statisticalSignificance')) {
          obj['statisticalSignificance'] = _ApiClient["default"].convertToType(data['statisticalSignificance'], 'Number');
        }

        if (data.hasOwnProperty('strengthLevel')) {
          obj['strengthLevel'] = _ApiClient["default"].convertToType(data['strengthLevel'], 'String');
        }

        if (data.hasOwnProperty('strongestPearsonCorrelationCoefficient')) {
          obj['strongestPearsonCorrelationCoefficient'] = _ApiClient["default"].convertToType(data['strongestPearsonCorrelationCoefficient'], 'Number');
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

        if (data.hasOwnProperty('studyText')) {
          obj['studyText'] = _StudyText["default"].constructFromObject(data['studyText']);
        }

        if (data.hasOwnProperty('tValue')) {
          obj['tValue'] = _ApiClient["default"].convertToType(data['tValue'], 'Number');
        }

        if (data.hasOwnProperty('updatedAt')) {
          obj['updatedAt'] = _ApiClient["default"].convertToType(data['updatedAt'], 'String');
        }

        if (data.hasOwnProperty('userId')) {
          obj['userId'] = _ApiClient["default"].convertToType(data['userId'], 'Number');
        }

        if (data.hasOwnProperty('userVote')) {
          obj['userVote'] = _ApiClient["default"].convertToType(data['userVote'], 'Number');
        }

        if (data.hasOwnProperty('valuePredictingHighOutcome')) {
          obj['valuePredictingHighOutcome'] = _ApiClient["default"].convertToType(data['valuePredictingHighOutcome'], 'Number');
        }

        if (data.hasOwnProperty('valuePredictingLowOutcome')) {
          obj['valuePredictingLowOutcome'] = _ApiClient["default"].convertToType(data['valuePredictingLowOutcome'], 'Number');
        }

        if (data.hasOwnProperty('outcomeDataSources')) {
          obj['outcomeDataSources'] = _ApiClient["default"].convertToType(data['outcomeDataSources'], 'String');
        }

        if (data.hasOwnProperty('principalInvestigator')) {
          obj['principalInvestigator'] = _ApiClient["default"].convertToType(data['principalInvestigator'], 'String');
        }

        if (data.hasOwnProperty('reverseCorrelation')) {
          obj['reverseCorrelation'] = _ApiClient["default"].convertToType(data['reverseCorrelation'], 'Number');
        }

        if (data.hasOwnProperty('averagePearsonCorrelationCoefficientOverOnsetDelays')) {
          obj['averagePearsonCorrelationCoefficientOverOnsetDelays'] = _ApiClient["default"].convertToType(data['averagePearsonCorrelationCoefficientOverOnsetDelays'], 'Number');
        }

        if (data.hasOwnProperty('causeNumberOfRawMeasurements')) {
          obj['causeNumberOfRawMeasurements'] = _ApiClient["default"].convertToType(data['causeNumberOfRawMeasurements'], 'Number');
        }

        if (data.hasOwnProperty('correlationsOverDurationsOfAction')) {
          obj['correlationsOverDurationsOfAction'] = _ApiClient["default"].convertToType(data['correlationsOverDurationsOfAction'], [Correlation]);
        }

        if (data.hasOwnProperty('correlationsOverOnsetDelays')) {
          obj['correlationsOverOnsetDelays'] = _ApiClient["default"].convertToType(data['correlationsOverOnsetDelays'], [Correlation]);
        }

        if (data.hasOwnProperty('correlationsOverDurationsOfActionChartConfig')) {
          obj['correlationsOverDurationsOfActionChartConfig'] = _ApiClient["default"].convertToType(data['correlationsOverDurationsOfActionChartConfig'], Object);
        }

        if (data.hasOwnProperty('correlationsOverOnsetDelaysChartConfig')) {
          obj['correlationsOverOnsetDelaysChartConfig'] = _ApiClient["default"].convertToType(data['correlationsOverOnsetDelaysChartConfig'], Object);
        }

        if (data.hasOwnProperty('numberOfUsers')) {
          obj['numberOfUsers'] = _ApiClient["default"].convertToType(data['numberOfUsers'], 'Number');
        }

        if (data.hasOwnProperty('rawCauseMeasurementSignificance')) {
          obj['rawCauseMeasurementSignificance'] = _ApiClient["default"].convertToType(data['rawCauseMeasurementSignificance'], 'Number');
        }

        if (data.hasOwnProperty('rawEffectMeasurementSignificance')) {
          obj['rawEffectMeasurementSignificance'] = _ApiClient["default"].convertToType(data['rawEffectMeasurementSignificance'], 'Number');
        }

        if (data.hasOwnProperty('reversePairsCount')) {
          obj['reversePairsCount'] = _ApiClient["default"].convertToType(data['reversePairsCount'], 'String');
        }

        if (data.hasOwnProperty('voteStatisticalSignificance')) {
          obj['voteStatisticalSignificance'] = _ApiClient["default"].convertToType(data['voteStatisticalSignificance'], 'Number');
        }

        if (data.hasOwnProperty('aggregateQMScore')) {
          obj['aggregateQMScore'] = _ApiClient["default"].convertToType(data['aggregateQMScore'], 'Number');
        }

        if (data.hasOwnProperty('forwardPearsonCorrelationCoefficient')) {
          obj['forwardPearsonCorrelationCoefficient'] = _ApiClient["default"].convertToType(data['forwardPearsonCorrelationCoefficient'], 'Number');
        }

        if (data.hasOwnProperty('numberOfCorrelations')) {
          obj['numberOfCorrelations'] = _ApiClient["default"].convertToType(data['numberOfCorrelations'], 'Number');
        }

        if (data.hasOwnProperty('vote')) {
          obj['vote'] = _ApiClient["default"].convertToType(data['vote'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Correlation;
}();
/**
 * Ex: 4.19
 * @member {Number} averageDailyHighCause
 */


Correlation.prototype['averageDailyHighCause'] = undefined;
/**
 * Ex: 1.97
 * @member {Number} averageDailyLowCause
 */

Correlation.prototype['averageDailyLowCause'] = undefined;
/**
 * Ex: 3.0791054117396
 * @member {Number} averageEffect
 */

Correlation.prototype['averageEffect'] = undefined;
/**
 * Ex: 3.55
 * @member {Number} averageEffectFollowingHighCause
 */

Correlation.prototype['averageEffectFollowingHighCause'] = undefined;
/**
 * Ex: 2.65
 * @member {Number} averageEffectFollowingLowCause
 */

Correlation.prototype['averageEffectFollowingLowCause'] = undefined;
/**
 * Ex: 0.396
 * @member {Number} averageForwardPearsonCorrelationOverOnsetDelays
 */

Correlation.prototype['averageForwardPearsonCorrelationOverOnsetDelays'] = undefined;
/**
 * Ex: 0.453667
 * @member {Number} averageReversePearsonCorrelationOverOnsetDelays
 */

Correlation.prototype['averageReversePearsonCorrelationOverOnsetDelays'] = undefined;
/**
 * Ex: 0.9855
 * @member {Number} averageVote
 */

Correlation.prototype['averageVote'] = undefined;
/**
 * Ex: 164
 * @member {Number} causeChanges
 */

Correlation.prototype['causeChanges'] = undefined;
/**
 * @member {module:model/DataSource} causeDataSource
 */

Correlation.prototype['causeDataSource'] = undefined;
/**
 * Ex: 1
 * @member {Number} causeUserVariableShareUserMeasurements
 */

Correlation.prototype['causeUserVariableShareUserMeasurements'] = undefined;
/**
 * Ex: 6
 * @member {Number} causeVariableCategoryId
 */

Correlation.prototype['causeVariableCategoryId'] = undefined;
/**
 * Ex: Sleep
 * @member {String} causeVariableCategoryName
 */

Correlation.prototype['causeVariableCategoryName'] = undefined;
/**
 * Ex: MEAN
 * @member {String} causeVariableCombinationOperation
 */

Correlation.prototype['causeVariableCombinationOperation'] = undefined;
/**
 * Ex: /5
 * @member {String} causeVariableUnitAbbreviatedName
 */

Correlation.prototype['causeVariableUnitAbbreviatedName'] = undefined;
/**
 * Ex: 1448
 * @member {Number} causeVariableId
 */

Correlation.prototype['causeVariableId'] = undefined;
/**
 * Ex: 6
 * @member {Number} causeVariableMostCommonConnectorId
 */

Correlation.prototype['causeVariableMostCommonConnectorId'] = undefined;
/**
 * Ex: Sleep Quality
 * @member {String} causeVariableName
 */

Correlation.prototype['causeVariableName'] = undefined;
/**
 * Ex: 0.14344467795996
 * @member {Number} confidenceInterval
 */

Correlation.prototype['confidenceInterval'] = undefined;
/**
 * Ex: high
 * @member {String} confidenceLevel
 */

Correlation.prototype['confidenceLevel'] = undefined;
/**
 * Ex: 0.538
 * @member {Number} correlationCoefficient
 */

Correlation.prototype['correlationCoefficient'] = undefined;
/**
 * Ex: false
 * @member {Boolean} correlationIsContradictoryToOptimalValues
 */

Correlation.prototype['correlationIsContradictoryToOptimalValues'] = undefined;
/**
 * Ex: 2016-12-28 20:47:30 UTC ISO 8601 YYYY-MM-DDThh:mm:ss
 * @member {String} createdAt
 */

Correlation.prototype['createdAt'] = undefined;
/**
 * Calculated Statistic: Ex: 1.646
 * @member {Number} criticalTValue
 */

Correlation.prototype['criticalTValue'] = undefined;
/**
 * Ex: higher
 * @member {String} direction
 */

Correlation.prototype['direction'] = undefined;
/**
 * User-Defined Variable Setting: The amount of time over which a predictor/stimulus event can exert an observable influence on an outcome variable value. For instance, aspirin (stimulus/predictor) typically decreases headache severity for approximately four hours (duration of action) following the onset delay.  Unit: Seconds
 * @member {Number} durationOfAction
 */

Correlation.prototype['durationOfAction'] = undefined;
/**
 * User-Defined Variable Setting: The amount of time over which a predictor/stimulus event can exert an observable influence on an outcome variable value. For instance, aspirin (stimulus/predictor) typically decreases headache severity for approximately four hours (duration of action) following the onset delay.  Unit: Hours
 * @member {Number} durationOfActionInHours
 */

Correlation.prototype['durationOfActionInHours'] = undefined;
/**
 * Ex: 200
 * @member {Number} degreesOfFreedom
 */

Correlation.prototype['degreesOfFreedom'] = undefined;
/**
 * Ex: 145
 * @member {Number} effectNumberOfProcessedDailyMeasurements
 */

Correlation.prototype['effectNumberOfProcessedDailyMeasurements'] = undefined;
/**
 * Ex: optimalPearsonProduct is not defined
 * @member {String} error
 */

Correlation.prototype['error'] = undefined;
/**
 * Ex: 193
 * @member {Number} effectChanges
 */

Correlation.prototype['effectChanges'] = undefined;
/**
 * @member {module:model/DataSource} effectDataSource
 */

Correlation.prototype['effectDataSource'] = undefined;
/**
 * Ex: moderately positive
 * @member {String} effectSize
 */

Correlation.prototype['effectSize'] = undefined;
/**
 * Ex: /5
 * @member {String} effectUnit
 */

Correlation.prototype['effectUnit'] = undefined;
/**
 * Ex: 1
 * @member {Number} effectUserVariableShareUserMeasurements
 */

Correlation.prototype['effectUserVariableShareUserMeasurements'] = undefined;
/**
 * Ex: 1
 * @member {Number} effectVariableCategoryId
 */

Correlation.prototype['effectVariableCategoryId'] = undefined;
/**
 * Ex: Emotions
 * @member {String} effectVariableCategoryName
 */

Correlation.prototype['effectVariableCategoryName'] = undefined;
/**
 * Ex: MEAN
 * @member {String} effectVariableCombinationOperation
 */

Correlation.prototype['effectVariableCombinationOperation'] = undefined;
/**
 * Ex: Mood_(psychology)
 * @member {String} effectVariableCommonAlias
 */

Correlation.prototype['effectVariableCommonAlias'] = undefined;
/**
 * Ex: /5
 * @member {String} effectVariableUnitAbbreviatedName
 */

Correlation.prototype['effectVariableUnitAbbreviatedName'] = undefined;
/**
 * Ex: 10
 * @member {Number} effectVariableUnitId
 */

Correlation.prototype['effectVariableUnitId'] = undefined;
/**
 * Ex: 1 to 5 Rating
 * @member {String} effectVariableUnitName
 */

Correlation.prototype['effectVariableUnitName'] = undefined;
/**
 * Ex: 1398
 * @member {Number} effectVariableId
 */

Correlation.prototype['effectVariableId'] = undefined;
/**
 * Ex: 10
 * @member {Number} effectVariableMostCommonConnectorId
 */

Correlation.prototype['effectVariableMostCommonConnectorId'] = undefined;
/**
 * Ex: Overall Mood
 * @member {String} effectVariableName
 */

Correlation.prototype['effectVariableName'] = undefined;
/**
 * Ex: 2014-07-30 12:50:00 UTC ISO 8601 YYYY-MM-DDThh:mm:ss
 * @member {String} experimentEndTime
 */

Correlation.prototype['experimentEndTime'] = undefined;
/**
 * Ex: 2012-05-06 21:15:00 UTC ISO 8601 YYYY-MM-DDThh:mm:ss
 * @member {String} experimentStartTime
 */

Correlation.prototype['experimentStartTime'] = undefined;
/**
 * Ex: 0.528359
 * @member {Number} forwardSpearmanCorrelationCoefficient
 */

Correlation.prototype['forwardSpearmanCorrelationCoefficient'] = undefined;
/**
 * Ex: 298
 * @member {Number} numberOfPairs
 */

Correlation.prototype['numberOfPairs'] = undefined;
/**
 * Ex: 0
 * @member {Number} onsetDelay
 */

Correlation.prototype['onsetDelay'] = undefined;
/**
 * Ex: 0
 * @member {Number} onsetDelayInHours
 */

Correlation.prototype['onsetDelayInHours'] = undefined;
/**
 * Ex: -86400
 * @member {Number} onsetDelayWithStrongestPearsonCorrelation
 */

Correlation.prototype['onsetDelayWithStrongestPearsonCorrelation'] = undefined;
/**
 * Ex: -24
 * @member {Number} onsetDelayWithStrongestPearsonCorrelationInHours
 */

Correlation.prototype['onsetDelayWithStrongestPearsonCorrelationInHours'] = undefined;
/**
 * Ex: 0.68582816186982
 * @member {Number} optimalPearsonProduct
 */

Correlation.prototype['optimalPearsonProduct'] = undefined;
/**
 * User-Defined Variable Setting: Ex: -1. Unit: User-specified or common.
 * @member {Number} outcomeFillingValue
 */

Correlation.prototype['outcomeFillingValue'] = undefined;
/**
 * User-Defined Variable Setting: Ex: 23. Unit: User-specified or common.
 * @member {Number} outcomeMaximumAllowedValue
 */

Correlation.prototype['outcomeMaximumAllowedValue'] = undefined;
/**
 * User-Defined Variable Setting: Ex: 0.1. Unit: User-specified or common.
 * @member {Number} outcomeMinimumAllowedValue
 */

Correlation.prototype['outcomeMinimumAllowedValue'] = undefined;
/**
 * Ex: 0.477
 * @member {Number} pearsonCorrelationWithNoOnsetDelay
 */

Correlation.prototype['pearsonCorrelationWithNoOnsetDelay'] = undefined;
/**
 * Ex: 0.538
 * @member {Number} predictivePearsonCorrelation
 */

Correlation.prototype['predictivePearsonCorrelation'] = undefined;
/**
 * Ex: 0.538
 * @member {Number} predictivePearsonCorrelationCoefficient
 */

Correlation.prototype['predictivePearsonCorrelationCoefficient'] = undefined;
/**
 * Ex: RescueTime
 * @member {String} predictorDataSources
 */

Correlation.prototype['predictorDataSources'] = undefined;
/**
 * Ex: -1. Unit: User-specified or common.
 * @member {Number} predictorFillingValue
 */

Correlation.prototype['predictorFillingValue'] = undefined;
/**
 * Ex: 200. Unit: User-specified or common.
 * @member {Number} predictorMaximumAllowedValue
 */

Correlation.prototype['predictorMaximumAllowedValue'] = undefined;
/**
 * Ex: 30. Unit: User-specified or common.
 * @member {Number} predictorMinimumAllowedValue
 */

Correlation.prototype['predictorMinimumAllowedValue'] = undefined;
/**
 * Ex: 17. Unit: User-specified or common.
 * @member {Number} predictsHighEffectChange
 */

Correlation.prototype['predictsHighEffectChange'] = undefined;
/**
 * Ex: -11. Unit: User-specified or common.
 * @member {Number} predictsLowEffectChange
 */

Correlation.prototype['predictsLowEffectChange'] = undefined;
/**
 * Ex: 0.39628900511586
 * @member {Number} pValue
 */

Correlation.prototype['pValue'] = undefined;
/**
 * Ex: 0.528
 * @member {Number} qmScore
 */

Correlation.prototype['qmScore'] = undefined;
/**
 * Ex: 0.01377184270977
 * @member {Number} reversePearsonCorrelationCoefficient
 */

Correlation.prototype['reversePearsonCorrelationCoefficient'] = undefined;
/**
 * Would you like to make this study publicly visible?
 * @member {Boolean} shareUserMeasurements
 */

Correlation.prototype['shareUserMeasurements'] = undefined;
/**
 * Ex: N1 Study: Sleep Quality Predicts Higher Overall Mood
 * @member {String} sharingDescription
 */

Correlation.prototype['sharingDescription'] = undefined;
/**
 * Ex: N1 Study: Sleep Quality Predicts Higher Overall Mood
 * @member {String} sharingTitle
 */

Correlation.prototype['sharingTitle'] = undefined;
/**
 * Ex: 1
 * @member {Boolean} significantDifference
 */

Correlation.prototype['significantDifference'] = undefined;
/**
 * Ex: 0.9813
 * @member {Number} statisticalSignificance
 */

Correlation.prototype['statisticalSignificance'] = undefined;
/**
 * Ex: moderate
 * @member {String} strengthLevel
 */

Correlation.prototype['strengthLevel'] = undefined;
/**
 * Ex: 0.613
 * @member {Number} strongestPearsonCorrelationCoefficient
 */

Correlation.prototype['strongestPearsonCorrelationCoefficient'] = undefined;
/**
 * @member {module:model/StudyHtml} studyHtml
 */

Correlation.prototype['studyHtml'] = undefined;
/**
 * @member {module:model/StudyImages} studyImages
 */

Correlation.prototype['studyImages'] = undefined;
/**
 * @member {module:model/StudyLinks} studyLinks
 */

Correlation.prototype['studyLinks'] = undefined;
/**
 * @member {module:model/StudyText} studyText
 */

Correlation.prototype['studyText'] = undefined;
/**
 * Ex: 9.6986079652717
 * @member {Number} tValue
 */

Correlation.prototype['tValue'] = undefined;
/**
 * Ex: 2017-05-06 15:40:38 UTC ISO 8601 YYYY-MM-DDThh:mm:ss
 * @member {String} updatedAt
 */

Correlation.prototype['updatedAt'] = undefined;
/**
 * Ex: 230
 * @member {Number} userId
 */

Correlation.prototype['userId'] = undefined;
/**
 * Ex: 1
 * @member {Number} userVote
 */

Correlation.prototype['userVote'] = undefined;
/**
 * Ex: 4.14
 * @member {Number} valuePredictingHighOutcome
 */

Correlation.prototype['valuePredictingHighOutcome'] = undefined;
/**
 * Ex: 3.03
 * @member {Number} valuePredictingLowOutcome
 */

Correlation.prototype['valuePredictingLowOutcome'] = undefined;
/**
 * Sources used to collect data for the outcome variable
 * @member {String} outcomeDataSources
 */

Correlation.prototype['outcomeDataSources'] = undefined;
/**
 * Mike Sinn
 * @member {String} principalInvestigator
 */

Correlation.prototype['principalInvestigator'] = undefined;
/**
 * Correlation when cause and effect are reversed. For any causal relationship, the forward correlation should exceed the reverse correlation.
 * @member {Number} reverseCorrelation
 */

Correlation.prototype['reverseCorrelation'] = undefined;
/**
 * Ex: 
 * @member {Number} averagePearsonCorrelationCoefficientOverOnsetDelays
 */

Correlation.prototype['averagePearsonCorrelationCoefficientOverOnsetDelays'] = undefined;
/**
 * Ex: 14764
 * @member {Number} causeNumberOfRawMeasurements
 */

Correlation.prototype['causeNumberOfRawMeasurements'] = undefined;
/**
 * Correlations calculated with various duration of action hyper-parameters
 * @member {Array.<module:model/Correlation>} correlationsOverDurationsOfAction
 */

Correlation.prototype['correlationsOverDurationsOfAction'] = undefined;
/**
 * Correlations calculated with various onset delay hyper-parameters
 * @member {Array.<module:model/Correlation>} correlationsOverOnsetDelays
 */

Correlation.prototype['correlationsOverOnsetDelays'] = undefined;
/**
 * Highchart config illustrating correlations calculated with various duration of action hyper-parameters
 * @member {Object} correlationsOverDurationsOfActionChartConfig
 */

Correlation.prototype['correlationsOverDurationsOfActionChartConfig'] = undefined;
/**
 * Highchart config illustrating correlations calculated with various onset delay hyper-parameters
 * @member {Object} correlationsOverOnsetDelaysChartConfig
 */

Correlation.prototype['correlationsOverOnsetDelaysChartConfig'] = undefined;
/**
 * Ex: 1
 * @member {Number} numberOfUsers
 */

Correlation.prototype['numberOfUsers'] = undefined;
/**
 * Ex: 1
 * @member {Number} rawCauseMeasurementSignificance
 */

Correlation.prototype['rawCauseMeasurementSignificance'] = undefined;
/**
 * Ex: 1
 * @member {Number} rawEffectMeasurementSignificance
 */

Correlation.prototype['rawEffectMeasurementSignificance'] = undefined;
/**
 * Ex: 1
 * @member {String} reversePairsCount
 */

Correlation.prototype['reversePairsCount'] = undefined;
/**
 * Ex: 1
 * @member {Number} voteStatisticalSignificance
 */

Correlation.prototype['voteStatisticalSignificance'] = undefined;
/**
 * Ex: 0.011598441286655
 * @member {Number} aggregateQMScore
 */

Correlation.prototype['aggregateQMScore'] = undefined;
/**
 * Ex: 0.0333
 * @member {Number} forwardPearsonCorrelationCoefficient
 */

Correlation.prototype['forwardPearsonCorrelationCoefficient'] = undefined;
/**
 * Ex: 6
 * @member {Number} numberOfCorrelations
 */

Correlation.prototype['numberOfCorrelations'] = undefined;
/**
 * Ex: 1 or 0
 * @member {Number} vote
 */

Correlation.prototype['vote'] = undefined;
var _default = Correlation;
exports["default"] = _default;