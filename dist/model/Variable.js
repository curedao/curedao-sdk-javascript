"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Card = _interopRequireDefault(require("./Card"));

var _DataSource = _interopRequireDefault(require("./DataSource"));

var _TrackingReminderNotificationAction = _interopRequireDefault(require("./TrackingReminderNotificationAction"));

var _Unit = _interopRequireDefault(require("./Unit"));

var _VariableCategory = _interopRequireDefault(require("./VariableCategory"));

var _VariableCharts = _interopRequireDefault(require("./VariableCharts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Variable model module.
 * @module model/Variable
 * @version 0.0.1
 */
var Variable = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Variable</code>.
   * @alias module:model/Variable
   * @param id {Number} Ex: 95614
   * @param name {String} Ex: Trader Joes Bedtime Tea / Sleepytime Tea (any Brand)
   * @param userId {Number} User ID
   * @param variableId {Number} Ex: 96380
   */
  function Variable(id, name, userId, variableId) {
    _classCallCheck(this, Variable);

    Variable.initialize(this, id, name, userId, variableId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Variable, null, [{
    key: "initialize",
    value: function initialize(obj, id, name, userId, variableId) {
      obj['id'] = id;
      obj['name'] = name;
      obj['userId'] = userId;
      obj['variableId'] = variableId;
    }
    /**
     * Constructs a <code>Variable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Variable} obj Optional instance to populate.
     * @return {module:model/Variable} The populated <code>Variable</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Variable();

        if (data.hasOwnProperty('actionArray')) {
          obj['actionArray'] = _ApiClient["default"].convertToType(data['actionArray'], [_TrackingReminderNotificationAction["default"]]);
        }

        if (data.hasOwnProperty('alias')) {
          obj['alias'] = _ApiClient["default"].convertToType(data['alias'], 'String');
        }

        if (data.hasOwnProperty('availableUnits')) {
          obj['availableUnits'] = _ApiClient["default"].convertToType(data['availableUnits'], [_Unit["default"]]);
        }

        if (data.hasOwnProperty('bestStudyLink')) {
          obj['bestStudyLink'] = _ApiClient["default"].convertToType(data['bestStudyLink'], 'String');
        }

        if (data.hasOwnProperty('bestStudyCard')) {
          obj['bestStudyCard'] = _Card["default"].constructFromObject(data['bestStudyCard']);
        }

        if (data.hasOwnProperty('bestUserStudyLink')) {
          obj['bestUserStudyLink'] = _ApiClient["default"].convertToType(data['bestUserStudyLink'], 'String');
        }

        if (data.hasOwnProperty('bestUserStudyCard')) {
          obj['bestUserStudyCard'] = _Card["default"].constructFromObject(data['bestUserStudyCard']);
        }

        if (data.hasOwnProperty('bestPopulationStudyLink')) {
          obj['bestPopulationStudyLink'] = _ApiClient["default"].convertToType(data['bestPopulationStudyLink'], 'String');
        }

        if (data.hasOwnProperty('bestPopulationStudyCard')) {
          obj['bestPopulationStudyCard'] = _Card["default"].constructFromObject(data['bestPopulationStudyCard']);
        }

        if (data.hasOwnProperty('optimalValueMessage')) {
          obj['optimalValueMessage'] = _ApiClient["default"].convertToType(data['optimalValueMessage'], 'String');
        }

        if (data.hasOwnProperty('commonOptimalValueMessage')) {
          obj['commonOptimalValueMessage'] = _ApiClient["default"].convertToType(data['commonOptimalValueMessage'], 'String');
        }

        if (data.hasOwnProperty('userOptimalValueMessage')) {
          obj['userOptimalValueMessage'] = _ApiClient["default"].convertToType(data['userOptimalValueMessage'], 'String');
        }

        if (data.hasOwnProperty('card')) {
          obj['card'] = _Card["default"].constructFromObject(data['card']);
        }

        if (data.hasOwnProperty('causeOnly')) {
          obj['causeOnly'] = _ApiClient["default"].convertToType(data['causeOnly'], 'Boolean');
        }

        if (data.hasOwnProperty('charts')) {
          obj['charts'] = _VariableCharts["default"].constructFromObject(data['charts']);
        }

        if (data.hasOwnProperty('chartsLinkDynamic')) {
          obj['chartsLinkDynamic'] = _ApiClient["default"].convertToType(data['chartsLinkDynamic'], 'String');
        }

        if (data.hasOwnProperty('chartsLinkEmail')) {
          obj['chartsLinkEmail'] = _ApiClient["default"].convertToType(data['chartsLinkEmail'], 'String');
        }

        if (data.hasOwnProperty('chartsLinkFacebook')) {
          obj['chartsLinkFacebook'] = _ApiClient["default"].convertToType(data['chartsLinkFacebook'], 'String');
        }

        if (data.hasOwnProperty('chartsLinkGoogle')) {
          obj['chartsLinkGoogle'] = _ApiClient["default"].convertToType(data['chartsLinkGoogle'], 'String');
        }

        if (data.hasOwnProperty('chartsLinkStatic')) {
          obj['chartsLinkStatic'] = _ApiClient["default"].convertToType(data['chartsLinkStatic'], 'String');
        }

        if (data.hasOwnProperty('chartsLinkTwitter')) {
          obj['chartsLinkTwitter'] = _ApiClient["default"].convertToType(data['chartsLinkTwitter'], 'String');
        }

        if (data.hasOwnProperty('childCommonTagVariables')) {
          obj['childCommonTagVariables'] = _ApiClient["default"].convertToType(data['childCommonTagVariables'], [Variable]);
        }

        if (data.hasOwnProperty('childUserTagVariables')) {
          obj['childUserTagVariables'] = _ApiClient["default"].convertToType(data['childUserTagVariables'], [Variable]);
        }

        if (data.hasOwnProperty('clientId')) {
          obj['clientId'] = _ApiClient["default"].convertToType(data['clientId'], 'String');
        }

        if (data.hasOwnProperty('combinationOperation')) {
          obj['combinationOperation'] = _ApiClient["default"].convertToType(data['combinationOperation'], 'String');
        }

        if (data.hasOwnProperty('commonAlias')) {
          obj['commonAlias'] = _ApiClient["default"].convertToType(data['commonAlias'], 'String');
        }

        if (data.hasOwnProperty('commonTaggedVariables')) {
          obj['commonTaggedVariables'] = _ApiClient["default"].convertToType(data['commonTaggedVariables'], [Variable]);
        }

        if (data.hasOwnProperty('commonTagVariables')) {
          obj['commonTagVariables'] = _ApiClient["default"].convertToType(data['commonTagVariables'], [Variable]);
        }

        if (data.hasOwnProperty('createdAt')) {
          obj['createdAt'] = _ApiClient["default"].convertToType(data['createdAt'], 'String');
        }

        if (data.hasOwnProperty('dataSourceNames')) {
          obj['dataSourceNames'] = _ApiClient["default"].convertToType(data['dataSourceNames'], 'String');
        }

        if (data.hasOwnProperty('dataSources')) {
          obj['dataSources'] = _ApiClient["default"].convertToType(data['dataSources'], [_DataSource["default"]]);
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }

        if (data.hasOwnProperty('durationOfAction')) {
          obj['durationOfAction'] = _ApiClient["default"].convertToType(data['durationOfAction'], 'Number');
        }

        if (data.hasOwnProperty('durationOfActionInHours')) {
          obj['durationOfActionInHours'] = _ApiClient["default"].convertToType(data['durationOfActionInHours'], 'Number');
        }

        if (data.hasOwnProperty('earliestFillingTime')) {
          obj['earliestFillingTime'] = _ApiClient["default"].convertToType(data['earliestFillingTime'], 'Number');
        }

        if (data.hasOwnProperty('earliestMeasurementTime')) {
          obj['earliestMeasurementTime'] = _ApiClient["default"].convertToType(data['earliestMeasurementTime'], 'Number');
        }

        if (data.hasOwnProperty('earliestSourceTime')) {
          obj['earliestSourceTime'] = _ApiClient["default"].convertToType(data['earliestSourceTime'], 'Number');
        }

        if (data.hasOwnProperty('errorMessage')) {
          obj['errorMessage'] = _ApiClient["default"].convertToType(data['errorMessage'], 'String');
        }

        if (data.hasOwnProperty('experimentEndTime')) {
          obj['experimentEndTime'] = _ApiClient["default"].convertToType(data['experimentEndTime'], 'String');
        }

        if (data.hasOwnProperty('experimentStartTime')) {
          obj['experimentStartTime'] = _ApiClient["default"].convertToType(data['experimentStartTime'], 'String');
        }

        if (data.hasOwnProperty('fillingType')) {
          obj['fillingType'] = _ApiClient["default"].convertToType(data['fillingType'], 'String');
        }

        if (data.hasOwnProperty('fillingValue')) {
          obj['fillingValue'] = _ApiClient["default"].convertToType(data['fillingValue'], 'Number');
        }

        if (data.hasOwnProperty('iconIcon')) {
          obj['iconIcon'] = _ApiClient["default"].convertToType(data['iconIcon'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('imageUrl')) {
          obj['imageUrl'] = _ApiClient["default"].convertToType(data['imageUrl'], 'String');
        }

        if (data.hasOwnProperty('informationalUrl')) {
          obj['informationalUrl'] = _ApiClient["default"].convertToType(data['informationalUrl'], 'String');
        }

        if (data.hasOwnProperty('ingredientOfCommonTagVariables')) {
          obj['ingredientOfCommonTagVariables'] = _ApiClient["default"].convertToType(data['ingredientOfCommonTagVariables'], [Variable]);
        }

        if (data.hasOwnProperty('ingredientCommonTagVariables')) {
          obj['ingredientCommonTagVariables'] = _ApiClient["default"].convertToType(data['ingredientCommonTagVariables'], [Variable]);
        }

        if (data.hasOwnProperty('ingredientOfUserTagVariables')) {
          obj['ingredientOfUserTagVariables'] = _ApiClient["default"].convertToType(data['ingredientOfUserTagVariables'], [Variable]);
        }

        if (data.hasOwnProperty('ingredientUserTagVariables')) {
          obj['ingredientUserTagVariables'] = _ApiClient["default"].convertToType(data['ingredientUserTagVariables'], [Variable]);
        }

        if (data.hasOwnProperty('inputType')) {
          obj['inputType'] = _ApiClient["default"].convertToType(data['inputType'], 'String');
        }

        if (data.hasOwnProperty('ionIcon')) {
          obj['ionIcon'] = _ApiClient["default"].convertToType(data['ionIcon'], 'String');
        }

        if (data.hasOwnProperty('joinedCommonTagVariables')) {
          obj['joinedCommonTagVariables'] = _ApiClient["default"].convertToType(data['joinedCommonTagVariables'], [Variable]);
        }

        if (data.hasOwnProperty('joinedUserTagVariables')) {
          obj['joinedUserTagVariables'] = _ApiClient["default"].convertToType(data['joinedUserTagVariables'], [Variable]);
        }

        if (data.hasOwnProperty('joinWith')) {
          obj['joinWith'] = _ApiClient["default"].convertToType(data['joinWith'], 'Number');
        }

        if (data.hasOwnProperty('kurtosis')) {
          obj['kurtosis'] = _ApiClient["default"].convertToType(data['kurtosis'], 'Number');
        }

        if (data.hasOwnProperty('lastProcessedDailyValue')) {
          obj['lastProcessedDailyValue'] = _ApiClient["default"].convertToType(data['lastProcessedDailyValue'], 'Number');
        }

        if (data.hasOwnProperty('lastSuccessfulUpdateTime')) {
          obj['lastSuccessfulUpdateTime'] = _ApiClient["default"].convertToType(data['lastSuccessfulUpdateTime'], 'String');
        }

        if (data.hasOwnProperty('lastValue')) {
          obj['lastValue'] = _ApiClient["default"].convertToType(data['lastValue'], 'Number');
        }

        if (data.hasOwnProperty('latestFillingTime')) {
          obj['latestFillingTime'] = _ApiClient["default"].convertToType(data['latestFillingTime'], 'Number');
        }

        if (data.hasOwnProperty('latestMeasurementTime')) {
          obj['latestMeasurementTime'] = _ApiClient["default"].convertToType(data['latestMeasurementTime'], 'Number');
        }

        if (data.hasOwnProperty('latestSourceTime')) {
          obj['latestSourceTime'] = _ApiClient["default"].convertToType(data['latestSourceTime'], 'Number');
        }

        if (data.hasOwnProperty('latestUserMeasurementTime')) {
          obj['latestUserMeasurementTime'] = _ApiClient["default"].convertToType(data['latestUserMeasurementTime'], 'Number');
        }

        if (data.hasOwnProperty('latitude')) {
          obj['latitude'] = _ApiClient["default"].convertToType(data['latitude'], 'Number');
        }

        if (data.hasOwnProperty('location')) {
          obj['location'] = _ApiClient["default"].convertToType(data['location'], 'String');
        }

        if (data.hasOwnProperty('longitude')) {
          obj['longitude'] = _ApiClient["default"].convertToType(data['longitude'], 'Number');
        }

        if (data.hasOwnProperty('manualTracking')) {
          obj['manualTracking'] = _ApiClient["default"].convertToType(data['manualTracking'], 'Boolean');
        }

        if (data.hasOwnProperty('maximumAllowedDailyValue')) {
          obj['maximumAllowedDailyValue'] = _ApiClient["default"].convertToType(data['maximumAllowedDailyValue'], 'Number');
        }

        if (data.hasOwnProperty('maximumAllowedValue')) {
          obj['maximumAllowedValue'] = _ApiClient["default"].convertToType(data['maximumAllowedValue'], 'Number');
        }

        if (data.hasOwnProperty('maximumRecordedDailyValue')) {
          obj['maximumRecordedDailyValue'] = _ApiClient["default"].convertToType(data['maximumRecordedDailyValue'], 'Number');
        }

        if (data.hasOwnProperty('maximumRecordedValue')) {
          obj['maximumRecordedValue'] = _ApiClient["default"].convertToType(data['maximumRecordedValue'], 'Number');
        }

        if (data.hasOwnProperty('mean')) {
          obj['mean'] = _ApiClient["default"].convertToType(data['mean'], 'Number');
        }

        if (data.hasOwnProperty('measurementsAtLastAnalysis')) {
          obj['measurementsAtLastAnalysis'] = _ApiClient["default"].convertToType(data['measurementsAtLastAnalysis'], 'Number');
        }

        if (data.hasOwnProperty('median')) {
          obj['median'] = _ApiClient["default"].convertToType(data['median'], 'Number');
        }

        if (data.hasOwnProperty('minimumAllowedValue')) {
          obj['minimumAllowedValue'] = _ApiClient["default"].convertToType(data['minimumAllowedValue'], 'Number');
        }

        if (data.hasOwnProperty('minimumAllowedDailyValue')) {
          obj['minimumAllowedDailyValue'] = _ApiClient["default"].convertToType(data['minimumAllowedDailyValue'], 'Number');
        }

        if (data.hasOwnProperty('minimumNonZeroValue')) {
          obj['minimumNonZeroValue'] = _ApiClient["default"].convertToType(data['minimumNonZeroValue'], 'Number');
        }

        if (data.hasOwnProperty('minimumRecordedValue')) {
          obj['minimumRecordedValue'] = _ApiClient["default"].convertToType(data['minimumRecordedValue'], 'Number');
        }

        if (data.hasOwnProperty('mostCommonConnectorId')) {
          obj['mostCommonConnectorId'] = _ApiClient["default"].convertToType(data['mostCommonConnectorId'], 'Number');
        }

        if (data.hasOwnProperty('mostCommonOriginalUnitId')) {
          obj['mostCommonOriginalUnitId'] = _ApiClient["default"].convertToType(data['mostCommonOriginalUnitId'], 'Number');
        }

        if (data.hasOwnProperty('mostCommonUnitId')) {
          obj['mostCommonUnitId'] = _ApiClient["default"].convertToType(data['mostCommonUnitId'], 'Number');
        }

        if (data.hasOwnProperty('mostCommonValue')) {
          obj['mostCommonValue'] = _ApiClient["default"].convertToType(data['mostCommonValue'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('numberOfAggregateCorrelationsAsCause')) {
          obj['numberOfAggregateCorrelationsAsCause'] = _ApiClient["default"].convertToType(data['numberOfAggregateCorrelationsAsCause'], 'Number');
        }

        if (data.hasOwnProperty('numberOfAggregateCorrelationsAsEffect')) {
          obj['numberOfAggregateCorrelationsAsEffect'] = _ApiClient["default"].convertToType(data['numberOfAggregateCorrelationsAsEffect'], 'Number');
        }

        if (data.hasOwnProperty('numberOfChanges')) {
          obj['numberOfChanges'] = _ApiClient["default"].convertToType(data['numberOfChanges'], 'Number');
        }

        if (data.hasOwnProperty('numberOfCorrelations')) {
          obj['numberOfCorrelations'] = _ApiClient["default"].convertToType(data['numberOfCorrelations'], 'Number');
        }

        if (data.hasOwnProperty('numberOfCorrelationsAsCause')) {
          obj['numberOfCorrelationsAsCause'] = _ApiClient["default"].convertToType(data['numberOfCorrelationsAsCause'], 'Number');
        }

        if (data.hasOwnProperty('numberOfCorrelationsAsEffect')) {
          obj['numberOfCorrelationsAsEffect'] = _ApiClient["default"].convertToType(data['numberOfCorrelationsAsEffect'], 'Number');
        }

        if (data.hasOwnProperty('numberOfProcessedDailyMeasurements')) {
          obj['numberOfProcessedDailyMeasurements'] = _ApiClient["default"].convertToType(data['numberOfProcessedDailyMeasurements'], 'Number');
        }

        if (data.hasOwnProperty('numberOfRawMeasurements')) {
          obj['numberOfRawMeasurements'] = _ApiClient["default"].convertToType(data['numberOfRawMeasurements'], 'Number');
        }

        if (data.hasOwnProperty('numberOfTrackingReminders')) {
          obj['numberOfTrackingReminders'] = _ApiClient["default"].convertToType(data['numberOfTrackingReminders'], 'Number');
        }

        if (data.hasOwnProperty('numberOfUniqueDailyValues')) {
          obj['numberOfUniqueDailyValues'] = _ApiClient["default"].convertToType(data['numberOfUniqueDailyValues'], 'Number');
        }

        if (data.hasOwnProperty('numberOfUniqueValues')) {
          obj['numberOfUniqueValues'] = _ApiClient["default"].convertToType(data['numberOfUniqueValues'], 'Number');
        }

        if (data.hasOwnProperty('numberOfUserCorrelationsAsCause')) {
          obj['numberOfUserCorrelationsAsCause'] = _ApiClient["default"].convertToType(data['numberOfUserCorrelationsAsCause'], 'Number');
        }

        if (data.hasOwnProperty('numberOfUserCorrelationsAsEffect')) {
          obj['numberOfUserCorrelationsAsEffect'] = _ApiClient["default"].convertToType(data['numberOfUserCorrelationsAsEffect'], 'Number');
        }

        if (data.hasOwnProperty('numberOfUserVariables')) {
          obj['numberOfUserVariables'] = _ApiClient["default"].convertToType(data['numberOfUserVariables'], 'Number');
        }

        if (data.hasOwnProperty('onsetDelay')) {
          obj['onsetDelay'] = _ApiClient["default"].convertToType(data['onsetDelay'], 'Number');
        }

        if (data.hasOwnProperty('onsetDelayInHours')) {
          obj['onsetDelayInHours'] = _ApiClient["default"].convertToType(data['onsetDelayInHours'], 'Number');
        }

        if (data.hasOwnProperty('outcome')) {
          obj['outcome'] = _ApiClient["default"].convertToType(data['outcome'], 'Boolean');
        }

        if (data.hasOwnProperty('outcomeOfInterest')) {
          obj['outcomeOfInterest'] = _ApiClient["default"].convertToType(data['outcomeOfInterest'], 'Boolean');
        }

        if (data.hasOwnProperty('parentCommonTagVariables')) {
          obj['parentCommonTagVariables'] = _ApiClient["default"].convertToType(data['parentCommonTagVariables'], [Variable]);
        }

        if (data.hasOwnProperty('parentUserTagVariables')) {
          obj['parentUserTagVariables'] = _ApiClient["default"].convertToType(data['parentUserTagVariables'], [Variable]);
        }

        if (data.hasOwnProperty('pngPath')) {
          obj['pngPath'] = _ApiClient["default"].convertToType(data['pngPath'], 'String');
        }

        if (data.hasOwnProperty('pngUrl')) {
          obj['pngUrl'] = _ApiClient["default"].convertToType(data['pngUrl'], 'String');
        }

        if (data.hasOwnProperty('predictorOfInterest')) {
          obj['predictorOfInterest'] = _ApiClient["default"].convertToType(data['predictorOfInterest'], 'Number');
        }

        if (data.hasOwnProperty('price')) {
          obj['price'] = _ApiClient["default"].convertToType(data['price'], 'Number');
        }

        if (data.hasOwnProperty('productUrl')) {
          obj['productUrl'] = _ApiClient["default"].convertToType(data['productUrl'], 'String');
        }

        if (data.hasOwnProperty('public')) {
          obj['public'] = _ApiClient["default"].convertToType(data['public'], 'Boolean');
        }

        if (data.hasOwnProperty('question')) {
          obj['question'] = _ApiClient["default"].convertToType(data['question'], 'String');
        }

        if (data.hasOwnProperty('longQuestion')) {
          obj['longQuestion'] = _ApiClient["default"].convertToType(data['longQuestion'], 'String');
        }

        if (data.hasOwnProperty('rawMeasurementsAtLastAnalysis')) {
          obj['rawMeasurementsAtLastAnalysis'] = _ApiClient["default"].convertToType(data['rawMeasurementsAtLastAnalysis'], 'Number');
        }

        if (data.hasOwnProperty('secondMostCommonValue')) {
          obj['secondMostCommonValue'] = _ApiClient["default"].convertToType(data['secondMostCommonValue'], 'Number');
        }

        if (data.hasOwnProperty('secondToLastValue')) {
          obj['secondToLastValue'] = _ApiClient["default"].convertToType(data['secondToLastValue'], 'Number');
        }

        if (data.hasOwnProperty('shareUserMeasurements')) {
          obj['shareUserMeasurements'] = _ApiClient["default"].convertToType(data['shareUserMeasurements'], 'Boolean');
        }

        if (data.hasOwnProperty('skewness')) {
          obj['skewness'] = _ApiClient["default"].convertToType(data['skewness'], 'Number');
        }

        if (data.hasOwnProperty('standardDeviation')) {
          obj['standardDeviation'] = _ApiClient["default"].convertToType(data['standardDeviation'], 'Number');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('subtitle')) {
          obj['subtitle'] = _ApiClient["default"].convertToType(data['subtitle'], 'String');
        }

        if (data.hasOwnProperty('svgUrl')) {
          obj['svgUrl'] = _ApiClient["default"].convertToType(data['svgUrl'], 'String');
        }

        if (data.hasOwnProperty('thirdMostCommonValue')) {
          obj['thirdMostCommonValue'] = _ApiClient["default"].convertToType(data['thirdMostCommonValue'], 'Number');
        }

        if (data.hasOwnProperty('thirdToLastValue')) {
          obj['thirdToLastValue'] = _ApiClient["default"].convertToType(data['thirdToLastValue'], 'Number');
        }

        if (data.hasOwnProperty('trackingInstructions')) {
          obj['trackingInstructions'] = _ApiClient["default"].convertToType(data['trackingInstructions'], 'String');
        }

        if (data.hasOwnProperty('trackingInstructionsCard')) {
          obj['trackingInstructionsCard'] = _Card["default"].constructFromObject(data['trackingInstructionsCard']);
        }

        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _Unit["default"].constructFromObject(data['unit']);
        }

        if (data.hasOwnProperty('unitAbbreviatedName')) {
          obj['unitAbbreviatedName'] = _ApiClient["default"].convertToType(data['unitAbbreviatedName'], 'String');
        }

        if (data.hasOwnProperty('unitCategoryId')) {
          obj['unitCategoryId'] = _ApiClient["default"].convertToType(data['unitCategoryId'], 'Number');
        }

        if (data.hasOwnProperty('unitCategoryName')) {
          obj['unitCategoryName'] = _ApiClient["default"].convertToType(data['unitCategoryName'], 'String');
        }

        if (data.hasOwnProperty('unitId')) {
          obj['unitId'] = _ApiClient["default"].convertToType(data['unitId'], 'Number');
        }

        if (data.hasOwnProperty('unitName')) {
          obj['unitName'] = _ApiClient["default"].convertToType(data['unitName'], 'String');
        }

        if (data.hasOwnProperty('upc')) {
          obj['upc'] = _ApiClient["default"].convertToType(data['upc'], 'String');
        }

        if (data.hasOwnProperty('updated')) {
          obj['updated'] = _ApiClient["default"].convertToType(data['updated'], 'Number');
        }

        if (data.hasOwnProperty('updatedAt')) {
          obj['updatedAt'] = _ApiClient["default"].convertToType(data['updatedAt'], 'String');
        }

        if (data.hasOwnProperty('updatedTime')) {
          obj['updatedTime'] = _ApiClient["default"].convertToType(data['updatedTime'], 'String');
        }

        if (data.hasOwnProperty('userId')) {
          obj['userId'] = _ApiClient["default"].convertToType(data['userId'], 'Number');
        }

        if (data.hasOwnProperty('userTaggedVariables')) {
          obj['userTaggedVariables'] = _ApiClient["default"].convertToType(data['userTaggedVariables'], [Variable]);
        }

        if (data.hasOwnProperty('userTagVariables')) {
          obj['userTagVariables'] = _ApiClient["default"].convertToType(data['userTagVariables'], [Variable]);
        }

        if (data.hasOwnProperty('userVariableUnitAbbreviatedName')) {
          obj['userVariableUnitAbbreviatedName'] = _ApiClient["default"].convertToType(data['userVariableUnitAbbreviatedName'], 'String');
        }

        if (data.hasOwnProperty('userVariableUnitCategoryId')) {
          obj['userVariableUnitCategoryId'] = _ApiClient["default"].convertToType(data['userVariableUnitCategoryId'], 'Number');
        }

        if (data.hasOwnProperty('userVariableUnitCategoryName')) {
          obj['userVariableUnitCategoryName'] = _ApiClient["default"].convertToType(data['userVariableUnitCategoryName'], 'String');
        }

        if (data.hasOwnProperty('userVariableUnitId')) {
          obj['userVariableUnitId'] = _ApiClient["default"].convertToType(data['userVariableUnitId'], 'Number');
        }

        if (data.hasOwnProperty('userVariableUnitName')) {
          obj['userVariableUnitName'] = _ApiClient["default"].convertToType(data['userVariableUnitName'], 'String');
        }

        if (data.hasOwnProperty('variableCategory')) {
          obj['variableCategory'] = _VariableCategory["default"].constructFromObject(data['variableCategory']);
        }

        if (data.hasOwnProperty('joinedVariables')) {
          obj['joinedVariables'] = _ApiClient["default"].convertToType(data['joinedVariables'], [Variable]);
        }

        if (data.hasOwnProperty('valence')) {
          obj['valence'] = _ApiClient["default"].convertToType(data['valence'], 'String');
        }

        if (data.hasOwnProperty('variableCategoryId')) {
          obj['variableCategoryId'] = _ApiClient["default"].convertToType(data['variableCategoryId'], 'Number');
        }

        if (data.hasOwnProperty('variableCategoryName')) {
          obj['variableCategoryName'] = _ApiClient["default"].convertToType(data['variableCategoryName'], 'String');
        }

        if (data.hasOwnProperty('variableId')) {
          obj['variableId'] = _ApiClient["default"].convertToType(data['variableId'], 'Number');
        }

        if (data.hasOwnProperty('variableName')) {
          obj['variableName'] = _ApiClient["default"].convertToType(data['variableName'], 'String');
        }

        if (data.hasOwnProperty('variance')) {
          obj['variance'] = _ApiClient["default"].convertToType(data['variance'], 'Number');
        }

        if (data.hasOwnProperty('wikipediaTitle')) {
          obj['wikipediaTitle'] = _ApiClient["default"].convertToType(data['wikipediaTitle'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Variable;
}();
/**
 * @member {Array.<module:model/TrackingReminderNotificationAction>} actionArray
 */


Variable.prototype['actionArray'] = undefined;
/**
 * User-Defined Variable Setting:  Alternative display name
 * @member {String} alias
 */

Variable.prototype['alias'] = undefined;
/**
 * @member {Array.<module:model/Unit>} availableUnits
 */

Variable.prototype['availableUnits'] = undefined;
/**
 * Link to study comparing variable with strongest relationship for user or population
 * @member {String} bestStudyLink
 */

Variable.prototype['bestStudyLink'] = undefined;
/**
 * @member {module:model/Card} bestStudyCard
 */

Variable.prototype['bestStudyCard'] = undefined;
/**
 * Link to study comparing variable with strongest relationship for user
 * @member {String} bestUserStudyLink
 */

Variable.prototype['bestUserStudyLink'] = undefined;
/**
 * @member {module:model/Card} bestUserStudyCard
 */

Variable.prototype['bestUserStudyCard'] = undefined;
/**
 * Link to study comparing variable with strongest relationship for population
 * @member {String} bestPopulationStudyLink
 */

Variable.prototype['bestPopulationStudyLink'] = undefined;
/**
 * @member {module:model/Card} bestPopulationStudyCard
 */

Variable.prototype['bestPopulationStudyCard'] = undefined;
/**
 * Description of relationship with variable with strongest relationship for user or population
 * @member {String} optimalValueMessage
 */

Variable.prototype['optimalValueMessage'] = undefined;
/**
 * Description of relationship with variable with strongest relationship for population
 * @member {String} commonOptimalValueMessage
 */

Variable.prototype['commonOptimalValueMessage'] = undefined;
/**
 * Description of relationship with variable with strongest relationship for user
 * @member {String} userOptimalValueMessage
 */

Variable.prototype['userOptimalValueMessage'] = undefined;
/**
 * @member {module:model/Card} card
 */

Variable.prototype['card'] = undefined;
/**
 * User-Defined Variable Setting: True indicates that this variable is generally a cause in a causal relationship.  An example of a causeOnly variable would be a variable such as Cloud Cover which would generally not be influenced by the behaviour of the user
 * @member {Boolean} causeOnly
 */

Variable.prototype['causeOnly'] = undefined;
/**
 * @member {module:model/VariableCharts} charts
 */

Variable.prototype['charts'] = undefined;
/**
 * Ex: https://local.curedao.org/ionic/Modo/www/#/app/charts/Trader%20Joes%20Bedtime%20Tea%20%2F%20Sleepytime%20Tea%20%28any%20Brand%29?variableName=Trader%20Joes%20Bedtime%20Tea%20%2F%20Sleepytime%20Tea%20%28any%20Brand%29&userId=230&pngUrl=https%3A%2F%2Fapi.curedao.org%2Fionic%2FModo%2Fwww%2Fimg%2Fvariable_categories%2Ftreatments.png
 * @member {String} chartsLinkDynamic
 */

Variable.prototype['chartsLinkDynamic'] = undefined;
/**
 * Ex: mailto:?subject=Check%20out%20my%20Trader%20Joes%20Bedtime%20Tea%20%2F%20Sleepytime%20Tea%20%28any%20Brand%29%20data%21&body=See%20my%20Trader%20Joes%20Bedtime%20Tea%20%2F%20Sleepytime%20Tea%20%28any%20Brand%29%20history%20at%20https%3A%2F%2Flocal.curedao.org%2Fapi%2Fv2%2Fcharts%3FvariableName%3DTrader%2520Joes%2520Bedtime%2520Tea%2520%252F%2520Sleepytime%2520Tea%2520%2528any%2520Brand%2529%26userId%3D230%26pngUrl%3Dhttps%253A%252F%252Fapi.curedao.org%252Fionic%252FModo%252Fwww%252Fimg%252Fvariable_categories%252Ftreatments.png%0A%0AHave%20a%20great%20day!
 * @member {String} chartsLinkEmail
 */

Variable.prototype['chartsLinkEmail'] = undefined;
/**
 * Ex: https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flocal.curedao.org%2Fapi%2Fv2%2Fcharts%3FvariableName%3DTrader%2520Joes%2520Bedtime%2520Tea%2520%252F%2520Sleepytime%2520Tea%2520%2528any%2520Brand%2529%26userId%3D230%26pngUrl%3Dhttps%253A%252F%252Fapi.curedao.org%252Fionic%252FModo%252Fwww%252Fimg%252Fvariable_categories%252Ftreatments.png
 * @member {String} chartsLinkFacebook
 */

Variable.prototype['chartsLinkFacebook'] = undefined;
/**
 * Ex: https://plus.google.com/share?url=https%3A%2F%2Flocal.curedao.org%2Fapi%2Fv2%2Fcharts%3FvariableName%3DTrader%2520Joes%2520Bedtime%2520Tea%2520%252F%2520Sleepytime%2520Tea%2520%2528any%2520Brand%2529%26userId%3D230%26pngUrl%3Dhttps%253A%252F%252Fapi.curedao.org%252Fionic%252FModo%252Fwww%252Fimg%252Fvariable_categories%252Ftreatments.png
 * @member {String} chartsLinkGoogle
 */

Variable.prototype['chartsLinkGoogle'] = undefined;
/**
 * Ex: https://local.curedao.org/api/v2/charts?variableName=Trader%20Joes%20Bedtime%20Tea%20%2F%20Sleepytime%20Tea%20%28any%20Brand%29&userId=230&pngUrl=https%3A%2F%2Fapi.curedao.org%2Fionic%2FModo%2Fwww%2Fimg%2Fvariable_categories%2Ftreatments.png
 * @member {String} chartsLinkStatic
 */

Variable.prototype['chartsLinkStatic'] = undefined;
/**
 * Ex: https://twitter.com/home?status=Check%20out%20my%20Trader%20Joes%20Bedtime%20Tea%20%2F%20Sleepytime%20Tea%20%28any%20Brand%29%20data%21%20https%3A%2F%2Flocal.curedao.org%2Fapi%2Fv2%2Fcharts%3FvariableName%3DTrader%2520Joes%2520Bedtime%2520Tea%2520%252F%2520Sleepytime%2520Tea%2520%2528any%2520Brand%2529%26userId%3D230%26pngUrl%3Dhttps%253A%252F%252Fapi.curedao.org%252Fionic%252FModo%252Fwww%252Fimg%252Fvariable_categories%252Ftreatments.png%20%40curedao
 * @member {String} chartsLinkTwitter
 */

Variable.prototype['chartsLinkTwitter'] = undefined;
/**
 * Commonly defined for all users. An example of a parent category variable would be Fruit when tagged with the child sub-type variables Apple.  Child variable (Apple) measurements will be included when the parent category (Fruit) is analyzed.  This allows us to see how Fruit consumption might be affecting without having to record both Fruit and Apple intake.
 * @member {Array.<module:model/Variable>} childCommonTagVariables
 */

Variable.prototype['childCommonTagVariables'] = undefined;
/**
 * User-Defined Variable Setting: An example of a parent category variable would be Fruit when tagged with the child sub-type variables Apple.  Child variable (Apple) measurements will be included when the parent category (Fruit) is analyzed.  This allows us to see how Fruit consumption might be affecting without having to record both Fruit and Apple intake.
 * @member {Array.<module:model/Variable>} childUserTagVariables
 */

Variable.prototype['childUserTagVariables'] = undefined;
/**
 * Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org
 * @member {String} clientId
 */

Variable.prototype['clientId'] = undefined;
/**
 * User-Defined Variable Setting: How to aggregate measurements over time. SUM should be used for things like minutes of exercise.  If you use MEAN for exercise, then a person might exercise more minutes in one day but add separate measurements that were smaller.  So when we are doing correlational analysis, we would think that the person exercised less that day even though they exercised more.  Conversely, we must use MEAN for things such as ratings which cannot be SUMMED.
 * @member {module:model/Variable.CombinationOperationEnum} combinationOperation
 */

Variable.prototype['combinationOperation'] = undefined;
/**
 * Ex: Anxiety / Nervousness
 * @member {String} commonAlias
 */

Variable.prototype['commonAlias'] = undefined;
/**
 * @member {Array.<module:model/Variable>} commonTaggedVariables
 */

Variable.prototype['commonTaggedVariables'] = undefined;
/**
 * @member {Array.<module:model/Variable>} commonTagVariables
 */

Variable.prototype['commonTagVariables'] = undefined;
/**
 * When the record was first created. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss  datetime format
 * @member {String} createdAt
 */

Variable.prototype['createdAt'] = undefined;
/**
 * Comma-separated list of source names to limit variables to those sources
 * @member {String} dataSourceNames
 */

Variable.prototype['dataSourceNames'] = undefined;
/**
 * These are sources of measurements for this variable
 * @member {Array.<module:model/DataSource>} dataSources
 */

Variable.prototype['dataSources'] = undefined;
/**
 * User-Defined Variable Setting: Ex: Summary to be used in studies.
 * @member {String} description
 */

Variable.prototype['description'] = undefined;
/**
 * Ex: Trader Joe's Bedtime Tea
 * @member {String} displayName
 */

Variable.prototype['displayName'] = undefined;
/**
 * The amount of time over which a predictor/stimulus event can exert an observable influence on an outcome variable value. For instance, aspirin (stimulus/predictor) typically decreases headache severity for approximately four hours (duration of action) following the onset delay. Unit: Seconds
 * @member {Number} durationOfAction
 */

Variable.prototype['durationOfAction'] = undefined;
/**
 * User-Defined Variable Setting: The amount of time over which a predictor/stimulus event can exert an observable influence on an outcome variable value. For instance, aspirin (stimulus/predictor) typically decreases headache severity for approximately four hours (duration of action) following the onset delay.  Unit: Hours
 * @member {Number} durationOfActionInHours
 */

Variable.prototype['durationOfActionInHours'] = undefined;
/**
 * Earliest filling time
 * @member {Number} earliestFillingTime
 */

Variable.prototype['earliestFillingTime'] = undefined;
/**
 * Earliest measurement time
 * @member {Number} earliestMeasurementTime
 */

Variable.prototype['earliestMeasurementTime'] = undefined;
/**
 * Earliest source time
 * @member {Number} earliestSourceTime
 */

Variable.prototype['earliestSourceTime'] = undefined;
/**
 * Error message from last analysis
 * @member {String} errorMessage
 */

Variable.prototype['errorMessage'] = undefined;
/**
 * User-Defined Variable Setting: Latest measurement time to be used in analysis. Format: UTC ISO 8601 YYYY-MM-DDThh:mm:ss.
 * @member {String} experimentEndTime
 */

Variable.prototype['experimentEndTime'] = undefined;
/**
 * User-Defined Variable Setting: Earliest measurement time to be used in analysis. Format: UTC ISO 8601 YYYY-MM-DDThh:mm:ss.
 * @member {String} experimentStartTime
 */

Variable.prototype['experimentStartTime'] = undefined;
/**
 * User-Defined Variable Setting: When it comes to analysis to determine the effects of this variable, knowing when it did not occur is as important as knowing when it did occur. For example, if you are tracking a medication, it is important to know when you did not take it, but you do not have to log zero values for all the days when you haven't taken it. Hence, you can specify a filling value (typically 0) to insert whenever data is missing.
 * @member {module:model/Variable.FillingTypeEnum} fillingType
 */

Variable.prototype['fillingType'] = undefined;
/**
 * User-Defined Variable Setting: When it comes to analysis to determine the effects of this variable, knowing when it did not occur is as important as knowing when it did occur. For example, if you are tracking a medication, it is important to know when you did not take it, but you do not have to log zero values for all the days when you haven't taken it. Hence, you can specify a filling value (typically 0) to insert whenever data is missing.  Unit: User-specified or common.
 * @member {Number} fillingValue
 */

Variable.prototype['fillingValue'] = undefined;
/**
 * Ex: ion-sad-outline
 * @member {String} iconIcon
 */

Variable.prototype['iconIcon'] = undefined;
/**
 * Ex: 95614
 * @member {Number} id
 */

Variable.prototype['id'] = undefined;
/**
 * @member {String} imageUrl
 */

Variable.prototype['imageUrl'] = undefined;
/**
 * Ex: https://google.com
 * @member {String} informationalUrl
 */

Variable.prototype['informationalUrl'] = undefined;
/**
 * Commonly defined for all users. IngredientOf variable measurements will be included in analysis of the ingredient variable.  For instance, a ingredient of the variable Lollipop could be Sugar.  This way you only have to record Lollipop consumption and we can use this data to see how sugar might be affecting you.
 * @member {Array.<module:model/Variable>} ingredientOfCommonTagVariables
 */

Variable.prototype['ingredientOfCommonTagVariables'] = undefined;
/**
 * Commonly defined for all users. IngredientOf variable measurements will be included in analysis of the ingredient variable.  For instance, a ingredient of the variable Lollipop could be Sugar.  This way you only have to record Lollipop consumption and we can use this data to see how sugar might be affecting you.
 * @member {Array.<module:model/Variable>} ingredientCommonTagVariables
 */

Variable.prototype['ingredientCommonTagVariables'] = undefined;
/**
 * User-Defined Variable Setting: IngredientOf variable measurements will be included in analysis of the ingredient variable.  For instance, a ingredient of the variable Lollipop could be Sugar.  This way you only have to record Lollipop consumption and we can use this data to see how sugar might be affecting you.
 * @member {Array.<module:model/Variable>} ingredientOfUserTagVariables
 */

Variable.prototype['ingredientOfUserTagVariables'] = undefined;
/**
 * User-Defined Variable Setting: IngredientOf variable measurements will be included in analysis of the ingredient variable.  For instance, a ingredient of the variable Lollipop could be Sugar.  This way you only have to record Lollipop consumption and we can use this data to see how sugar might be affecting you.
 * @member {Array.<module:model/Variable>} ingredientUserTagVariables
 */

Variable.prototype['ingredientUserTagVariables'] = undefined;
/**
 * Type of input field to show for recording measurements
 * @member {String} inputType
 */

Variable.prototype['inputType'] = undefined;
/**
 * @member {String} ionIcon
 */

Variable.prototype['ionIcon'] = undefined;
/**
 * Commonly defined for all users.  Joining can be used used to merge duplicate variables. For instance, if two variables called Apples (Red Delicious) and Red Delicious Apples are joined, when one of them is analyzed, the measurements for the other will be included as well.
 * @member {Array.<module:model/Variable>} joinedCommonTagVariables
 */

Variable.prototype['joinedCommonTagVariables'] = undefined;
/**
 * User-Defined Variable Setting: Joining can be used used to merge duplicate variables. For instance, if two variables called Apples (Red Delicious) and Red Delicious Apples are joined, when one of them is analyzed, the measurements for the other will be included as well.
 * @member {Array.<module:model/Variable>} joinedUserTagVariables
 */

Variable.prototype['joinedUserTagVariables'] = undefined;
/**
 * Duplicate variables. If the variable is joined with some other variable then it is not shown to user in the list of variables
 * @member {Number} joinWith
 */

Variable.prototype['joinWith'] = undefined;
/**
 * Kurtosis
 * @member {Number} kurtosis
 */

Variable.prototype['kurtosis'] = undefined;
/**
 * Calculated Statistic: Ex: 500. Unit: User-specified or common.
 * @member {Number} lastProcessedDailyValue
 */

Variable.prototype['lastProcessedDailyValue'] = undefined;
/**
 * When this variable or its settings were last updated UTC ISO 8601 YYYY-MM-DDThh:mm:ss
 * @member {String} lastSuccessfulUpdateTime
 */

Variable.prototype['lastSuccessfulUpdateTime'] = undefined;
/**
 * Calculated Statistic: Last measurement value in the common unit or user unit if different. Unit: User-specified or common.
 * @member {Number} lastValue
 */

Variable.prototype['lastValue'] = undefined;
/**
 * Latest filling time
 * @member {Number} latestFillingTime
 */

Variable.prototype['latestFillingTime'] = undefined;
/**
 * Latest measurement time. Format: Unix-time epoch seconds.
 * @member {Number} latestMeasurementTime
 */

Variable.prototype['latestMeasurementTime'] = undefined;
/**
 * Latest source time. Format: Unix-time epoch seconds.
 * @member {Number} latestSourceTime
 */

Variable.prototype['latestSourceTime'] = undefined;
/**
 * Ex: 1501383600. Format: Unix-time epoch seconds.
 * @member {Number} latestUserMeasurementTime
 */

Variable.prototype['latestUserMeasurementTime'] = undefined;
/**
 * Latitude. Unit: User-specified or common.
 * @member {Number} latitude
 */

Variable.prototype['latitude'] = undefined;
/**
 * Location
 * @member {String} location
 */

Variable.prototype['location'] = undefined;
/**
 * Longitude
 * @member {Number} longitude
 */

Variable.prototype['longitude'] = undefined;
/**
 * True if the variable is an emotion or symptom rating that is not typically automatically collected by a device or app.
 * @member {Boolean} manualTracking
 */

Variable.prototype['manualTracking'] = undefined;
/**
 * User-Defined Variable Setting: The maximum allowed value a daily aggregated measurement. Unit: User-specified or common.
 * @member {Number} maximumAllowedDailyValue
 */

Variable.prototype['maximumAllowedDailyValue'] = undefined;
/**
 * User-Defined Variable Setting: The maximum allowed value a single measurement. While you can record a value above this maximum, it will be excluded from the correlation analysis.  Unit: User-specified or common.
 * @member {Number} maximumAllowedValue
 */

Variable.prototype['maximumAllowedValue'] = undefined;
/**
 * Calculated Statistic: Maximum recorded daily value of this variable. Unit: User-specified or common.
 * @member {Number} maximumRecordedDailyValue
 */

Variable.prototype['maximumRecordedDailyValue'] = undefined;
/**
 * Calculated Statistic: Ex: 1. Unit: User-specified or common.
 * @member {Number} maximumRecordedValue
 */

Variable.prototype['maximumRecordedValue'] = undefined;
/**
 * Mean. Unit: User-specified or common.
 * @member {Number} mean
 */

Variable.prototype['mean'] = undefined;
/**
 * Number of measurements at last analysis
 * @member {Number} measurementsAtLastAnalysis
 */

Variable.prototype['measurementsAtLastAnalysis'] = undefined;
/**
 * Median
 * @member {Number} median
 */

Variable.prototype['median'] = undefined;
/**
 * User-Defined Variable Setting: The minimum allowed value a single measurement. While you can record a value below this minimum, it will be excluded from the correlation analysis. Unit: User-specified or common
 * @member {Number} minimumAllowedValue
 */

Variable.prototype['minimumAllowedValue'] = undefined;
/**
 * User-Defined Variable Setting: The minimum allowed value a daily aggregated measurement.  For instance, you might set to 100 for steps to keep erroneous 0 daily steps out of the analysis. Unit: User-specified or common.
 * @member {Number} minimumAllowedDailyValue
 */

Variable.prototype['minimumAllowedDailyValue'] = undefined;
/**
 * User-Defined Variable Setting: The minimum allowed non-zero value a single measurement.  For instance, you might set to 100 mL for steps to keep erroneous 0 daily steps out of the analysis. Unit: User-specified or common.
 * @member {Number} minimumNonZeroValue
 */

Variable.prototype['minimumNonZeroValue'] = undefined;
/**
 * Minimum recorded value of this variable. Unit: User-specified or common.
 * @member {Number} minimumRecordedValue
 */

Variable.prototype['minimumRecordedValue'] = undefined;
/**
 * Ex: 51
 * @member {Number} mostCommonConnectorId
 */

Variable.prototype['mostCommonConnectorId'] = undefined;
/**
 * Ex: 23
 * @member {Number} mostCommonOriginalUnitId
 */

Variable.prototype['mostCommonOriginalUnitId'] = undefined;
/**
 * Most common Unit ID
 * @member {Number} mostCommonUnitId
 */

Variable.prototype['mostCommonUnitId'] = undefined;
/**
 * Calculated Statistic: Most common value. Unit: User-specified or common.
 * @member {Number} mostCommonValue
 */

Variable.prototype['mostCommonValue'] = undefined;
/**
 * Ex: Trader Joes Bedtime Tea / Sleepytime Tea (any Brand)
 * @member {String} name
 */

Variable.prototype['name'] = undefined;
/**
 * Ex: 1
 * @member {Number} numberOfAggregateCorrelationsAsCause
 */

Variable.prototype['numberOfAggregateCorrelationsAsCause'] = undefined;
/**
 * Ex: 310
 * @member {Number} numberOfAggregateCorrelationsAsEffect
 */

Variable.prototype['numberOfAggregateCorrelationsAsEffect'] = undefined;
/**
 * Number of changes
 * @member {Number} numberOfChanges
 */

Variable.prototype['numberOfChanges'] = undefined;
/**
 * Number of correlations for this variable
 * @member {Number} numberOfCorrelations
 */

Variable.prototype['numberOfCorrelations'] = undefined;
/**
 * numberOfAggregateCorrelationsAsCause plus numberOfUserCorrelationsAsCause
 * @member {Number} numberOfCorrelationsAsCause
 */

Variable.prototype['numberOfCorrelationsAsCause'] = undefined;
/**
 * numberOfAggregateCorrelationsAsEffect plus numberOfUserCorrelationsAsEffect
 * @member {Number} numberOfCorrelationsAsEffect
 */

Variable.prototype['numberOfCorrelationsAsEffect'] = undefined;
/**
 * Number of processed measurements
 * @member {Number} numberOfProcessedDailyMeasurements
 */

Variable.prototype['numberOfProcessedDailyMeasurements'] = undefined;
/**
 * Ex: 295
 * @member {Number} numberOfRawMeasurements
 */

Variable.prototype['numberOfRawMeasurements'] = undefined;
/**
 * Ex: 1
 * @member {Number} numberOfTrackingReminders
 */

Variable.prototype['numberOfTrackingReminders'] = undefined;
/**
 * Number of unique daily values
 * @member {Number} numberOfUniqueDailyValues
 */

Variable.prototype['numberOfUniqueDailyValues'] = undefined;
/**
 * Ex: 2
 * @member {Number} numberOfUniqueValues
 */

Variable.prototype['numberOfUniqueValues'] = undefined;
/**
 * Ex: 115
 * @member {Number} numberOfUserCorrelationsAsCause
 */

Variable.prototype['numberOfUserCorrelationsAsCause'] = undefined;
/**
 * Ex: 29014
 * @member {Number} numberOfUserCorrelationsAsEffect
 */

Variable.prototype['numberOfUserCorrelationsAsEffect'] = undefined;
/**
 * Ex: 2
 * @member {Number} numberOfUserVariables
 */

Variable.prototype['numberOfUserVariables'] = undefined;
/**
 * The amount of time in seconds that elapses after the predictor/stimulus event before the outcome as perceived by a self-tracker is known as the onset delay. For example, the onset delay between the time a person takes an aspirin (predictor/stimulus event) and the time a person perceives a change in their headache severity (outcome) is approximately 30 minutes.
 * @member {Number} onsetDelay
 */

Variable.prototype['onsetDelay'] = undefined;
/**
 * User-Defined Variable Setting: The amount of time in seconds that elapses after the predictor/stimulus event before the outcome as perceived by a self-tracker is known as the onset delay. For example, the onset delay between the time a person takes an aspirin (predictor/stimulus event) and the time a person perceives a change in their headache severity (outcome) is approximately 30 minutes.
 * @member {Number} onsetDelayInHours
 */

Variable.prototype['onsetDelayInHours'] = undefined;
/**
 * User-Defined Variable Setting: True for variables for which a human would generally want to identify the influencing factors. These include symptoms of illness, physique, mood, cognitive performance, etc.  Generally correlation calculations are only performed on outcome variables
 * @member {Boolean} outcome
 */

Variable.prototype['outcome'] = undefined;
/**
 * Do you want to receive updates on newly discovered factors influencing this variable?
 * @member {Boolean} outcomeOfInterest
 */

Variable.prototype['outcomeOfInterest'] = undefined;
/**
 * Commonly defined for all users.  An example of a parent category variable would be Fruit when tagged with the child sub-type variables Apple.  Child variable (Apple) measurements will be included when the parent category (Fruit) is analyzed.  This allows us to see how Fruit consumption might be affecting without having to record both Fruit and Apple intake.
 * @member {Array.<module:model/Variable>} parentCommonTagVariables
 */

Variable.prototype['parentCommonTagVariables'] = undefined;
/**
 * User-defined. An example of a parent category variable would be Fruit when tagged with the child sub-type variables Apple.  Child variable (Apple) measurements will be included when the parent category (Fruit) is analyzed.  This allows us to see how Fruit consumption might be affecting without having to record both Fruit and Apple intake.
 * @member {Array.<module:model/Variable>} parentUserTagVariables
 */

Variable.prototype['parentUserTagVariables'] = undefined;
/**
 * Ex: img/variable_categories/treatments.png
 * @member {String} pngPath
 */

Variable.prototype['pngPath'] = undefined;
/**
 * Ex: https://app.curedao.org/img/variable_categories/treatments.png
 * @member {String} pngUrl
 */

Variable.prototype['pngUrl'] = undefined;
/**
 * Ex: 0
 * @member {Number} predictorOfInterest
 */

Variable.prototype['predictorOfInterest'] = undefined;
/**
 * Ex: 95.4
 * @member {Number} price
 */

Variable.prototype['price'] = undefined;
/**
 * Link to associated product for purchase
 * @member {String} productUrl
 */

Variable.prototype['productUrl'] = undefined;
/**
 * Should this variable show up in automcomplete searches for users who do not already have measurements for it?
 * @member {Boolean} public
 */

Variable.prototype['public'] = undefined;
/**
 * Ex: How is your overall mood?
 * @member {String} question
 */

Variable.prototype['question'] = undefined;
/**
 * Ex: How is your overall mood on a scale of 1 to 5??
 * @member {String} longQuestion
 */

Variable.prototype['longQuestion'] = undefined;
/**
 * Ex: 131
 * @member {Number} rawMeasurementsAtLastAnalysis
 */

Variable.prototype['rawMeasurementsAtLastAnalysis'] = undefined;
/**
 * Calculated Statistic: Ex: 1. Unit: User-specified or common.
 * @member {Number} secondMostCommonValue
 */

Variable.prototype['secondMostCommonValue'] = undefined;
/**
 * Calculated Statistic: Ex: 250. Unit: User-specified or common.
 * @member {Number} secondToLastValue
 */

Variable.prototype['secondToLastValue'] = undefined;
/**
 * Would you like to make your measurements publicly visible?
 * @member {Boolean} shareUserMeasurements
 */

Variable.prototype['shareUserMeasurements'] = undefined;
/**
 * Skewness
 * @member {Number} skewness
 */

Variable.prototype['skewness'] = undefined;
/**
 * Standard deviation Ex: 0.46483219855434
 * @member {Number} standardDeviation
 */

Variable.prototype['standardDeviation'] = undefined;
/**
 * status
 * @member {String} status
 */

Variable.prototype['status'] = undefined;
/**
 * Based on sort filter and can be shown beneath variable name on search list
 * @member {String} subtitle
 */

Variable.prototype['subtitle'] = undefined;
/**
 * Ex: https://app.curedao.org/img/variable_categories/treatments.svg
 * @member {String} svgUrl
 */

Variable.prototype['svgUrl'] = undefined;
/**
 * Calculated Statistic: Ex: 6. Unit: User-specified or common.
 * @member {Number} thirdMostCommonValue
 */

Variable.prototype['thirdMostCommonValue'] = undefined;
/**
 * Calculated Statistic: Ex: 250. Unit: User-specified or common.
 * @member {Number} thirdToLastValue
 */

Variable.prototype['thirdToLastValue'] = undefined;
/**
 * HTML instructions for tracking
 * @member {String} trackingInstructions
 */

Variable.prototype['trackingInstructions'] = undefined;
/**
 * @member {module:model/Card} trackingInstructionsCard
 */

Variable.prototype['trackingInstructionsCard'] = undefined;
/**
 * @member {module:model/Unit} unit
 */

Variable.prototype['unit'] = undefined;
/**
 * Ex: count
 * @member {String} unitAbbreviatedName
 */

Variable.prototype['unitAbbreviatedName'] = undefined;
/**
 * Ex: 6
 * @member {Number} unitCategoryId
 */

Variable.prototype['unitCategoryId'] = undefined;
/**
 * Ex: Miscellany
 * @member {String} unitCategoryName
 */

Variable.prototype['unitCategoryName'] = undefined;
/**
 * ID of unit to use for this variable
 * @member {Number} unitId
 */

Variable.prototype['unitId'] = undefined;
/**
 * User-Defined Variable Setting: Count
 * @member {String} unitName
 */

Variable.prototype['unitName'] = undefined;
/**
 * Universal product code or similar
 * @member {String} upc
 */

Variable.prototype['upc'] = undefined;
/**
 * updated
 * @member {Number} updated
 */

Variable.prototype['updated'] = undefined;
/**
 * When the record in the database was last updated. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format
 * @member {String} updatedAt
 */

Variable.prototype['updatedAt'] = undefined;
/**
 * Ex: 2017-07-30 14:58:26
 * @member {String} updatedTime
 */

Variable.prototype['updatedTime'] = undefined;
/**
 * User ID
 * @member {Number} userId
 */

Variable.prototype['userId'] = undefined;
/**
 * @member {Array.<module:model/Variable>} userTaggedVariables
 */

Variable.prototype['userTaggedVariables'] = undefined;
/**
 * @member {Array.<module:model/Variable>} userTagVariables
 */

Variable.prototype['userTagVariables'] = undefined;
/**
 * Ex: count
 * @member {String} userVariableUnitAbbreviatedName
 */

Variable.prototype['userVariableUnitAbbreviatedName'] = undefined;
/**
 * Ex: 6
 * @member {Number} userVariableUnitCategoryId
 */

Variable.prototype['userVariableUnitCategoryId'] = undefined;
/**
 * Ex: Miscellany
 * @member {String} userVariableUnitCategoryName
 */

Variable.prototype['userVariableUnitCategoryName'] = undefined;
/**
 * Ex: 23
 * @member {Number} userVariableUnitId
 */

Variable.prototype['userVariableUnitId'] = undefined;
/**
 * Ex: Count
 * @member {String} userVariableUnitName
 */

Variable.prototype['userVariableUnitName'] = undefined;
/**
 * @member {module:model/VariableCategory} variableCategory
 */

Variable.prototype['variableCategory'] = undefined;
/**
 * Array of Variables that are joined with this Variable
 * @member {Array.<module:model/Variable>} joinedVariables
 */

Variable.prototype['joinedVariables'] = undefined;
/**
 * Valence indicates what type of buttons should be used when recording measurements for this variable. positive - Face buttons with the happiest face equating to a 5/5 rating where higher is better like Overall Mood. negative - Face buttons with happiest face equating to a 1/5 rating where lower is better like Headache Severity. numeric - Just 1 to 5 numeric buttons for neutral variables. 
 * @member {String} valence
 */

Variable.prototype['valence'] = undefined;
/**
 * Ex: 6
 * @member {Number} variableCategoryId
 */

Variable.prototype['variableCategoryId'] = undefined;
/**
 * User-Defined Variable Setting: Variable category like Emotions, Sleep, Physical Activities, Treatments, Symptoms, etc.
 * @member {module:model/Variable.VariableCategoryNameEnum} variableCategoryName
 */

Variable.prototype['variableCategoryName'] = undefined;
/**
 * Ex: 96380
 * @member {Number} variableId
 */

Variable.prototype['variableId'] = undefined;
/**
 * Ex: Sleep Duration
 * @member {String} variableName
 */

Variable.prototype['variableName'] = undefined;
/**
 * Statistic: Ex: 115947037.40816
 * @member {Number} variance
 */

Variable.prototype['variance'] = undefined;
/**
 * User-Defined Variable Setting: You can help to improve the studies by pasting the title of the most appropriate Wikipedia article for this variable
 * @member {String} wikipediaTitle
 */

Variable.prototype['wikipediaTitle'] = undefined;
/**
 * Allowed values for the <code>combinationOperation</code> property.
 * @enum {String}
 * @readonly
 */

Variable['CombinationOperationEnum'] = {
  /**
   * value: "MEAN"
   * @const
   */
  "MEAN": "MEAN",

  /**
   * value: "SUM"
   * @const
   */
  "SUM": "SUM"
};
/**
 * Allowed values for the <code>fillingType</code> property.
 * @enum {String}
 * @readonly
 */

Variable['FillingTypeEnum'] = {
  /**
   * value: "none"
   * @const
   */
  "none": "none",

  /**
   * value: "zero-filling"
   * @const
   */
  "zero-filling": "zero-filling",

  /**
   * value: "value-filling"
   * @const
   */
  "value-filling": "value-filling"
};
/**
 * Allowed values for the <code>variableCategoryName</code> property.
 * @enum {String}
 * @readonly
 */

Variable['VariableCategoryNameEnum'] = {
  /**
   * value: "Activity"
   * @const
   */
  "Activity": "Activity",

  /**
   * value: "Books"
   * @const
   */
  "Books": "Books",

  /**
   * value: "Causes of Illness"
   * @const
   */
  "Causes of Illness": "Causes of Illness",

  /**
   * value: "Cognitive Performance"
   * @const
   */
  "Cognitive Performance": "Cognitive Performance",

  /**
   * value: "Conditions"
   * @const
   */
  "Conditions": "Conditions",

  /**
   * value: "Emotions"
   * @const
   */
  "Emotions": "Emotions",

  /**
   * value: "Environment"
   * @const
   */
  "Environment": "Environment",

  /**
   * value: "Foods"
   * @const
   */
  "Foods": "Foods",

  /**
   * value: "Goals"
   * @const
   */
  "Goals": "Goals",

  /**
   * value: "Locations"
   * @const
   */
  "Locations": "Locations",

  /**
   * value: "Miscellaneous"
   * @const
   */
  "Miscellaneous": "Miscellaneous",

  /**
   * value: "Movies and TV"
   * @const
   */
  "Movies and TV": "Movies and TV",

  /**
   * value: "Music"
   * @const
   */
  "Music": "Music",

  /**
   * value: "Nutrients"
   * @const
   */
  "Nutrients": "Nutrients",

  /**
   * value: "Payments"
   * @const
   */
  "Payments": "Payments",

  /**
   * value: "Physical Activities"
   * @const
   */
  "Physical Activities": "Physical Activities",

  /**
   * value: "Physique"
   * @const
   */
  "Physique": "Physique",

  /**
   * value: "Sleep"
   * @const
   */
  "Sleep": "Sleep",

  /**
   * value: "Social Interactions"
   * @const
   */
  "Social Interactions": "Social Interactions",

  /**
   * value: "Software"
   * @const
   */
  "Software": "Software",

  /**
   * value: "Symptoms"
   * @const
   */
  "Symptoms": "Symptoms",

  /**
   * value: "Treatments"
   * @const
   */
  "Treatments": "Treatments",

  /**
   * value: "Vital Signs"
   * @const
   */
  "Vital Signs": "Vital Signs"
};
var _default = Variable;
exports["default"] = _default;
