"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Card = _interopRequireDefault(require("./Card"));

var _TrackingReminderNotificationAction = _interopRequireDefault(require("./TrackingReminderNotificationAction"));

var _Unit = _interopRequireDefault(require("./Unit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The TrackingReminder model module.
 * @module model/TrackingReminder
 * @version 0.0.1
 */
var TrackingReminder = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TrackingReminder</code>.
   * @alias module:model/TrackingReminder
   * @param unitAbbreviatedName {String} Ex: /5
   * @param reminderFrequency {Number} Number of seconds between one reminder and the next
   * @param variableCategoryName {module:model/TrackingReminder.VariableCategoryNameEnum} Ex: Emotions, Treatments, Symptoms...
   * @param variableName {String} Name of the variable to be used when sending measurements
   */
  function TrackingReminder(unitAbbreviatedName, reminderFrequency, variableCategoryName, variableName) {
    _classCallCheck(this, TrackingReminder);

    TrackingReminder.initialize(this, unitAbbreviatedName, reminderFrequency, variableCategoryName, variableName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TrackingReminder, null, [{
    key: "initialize",
    value: function initialize(obj, unitAbbreviatedName, reminderFrequency, variableCategoryName, variableName) {
      obj['unitAbbreviatedName'] = unitAbbreviatedName;
      obj['reminderFrequency'] = reminderFrequency;
      obj['variableCategoryName'] = variableCategoryName;
      obj['variableName'] = variableName;
    }
    /**
     * Constructs a <code>TrackingReminder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TrackingReminder} obj Optional instance to populate.
     * @return {module:model/TrackingReminder} The populated <code>TrackingReminder</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TrackingReminder();

        if (data.hasOwnProperty('actionArray')) {
          obj['actionArray'] = _ApiClient["default"].convertToType(data['actionArray'], [_TrackingReminderNotificationAction["default"]]);
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

        if (data.hasOwnProperty('clientId')) {
          obj['clientId'] = _ApiClient["default"].convertToType(data['clientId'], 'String');
        }

        if (data.hasOwnProperty('combinationOperation')) {
          obj['combinationOperation'] = _ApiClient["default"].convertToType(data['combinationOperation'], 'String');
        }

        if (data.hasOwnProperty('createdAt')) {
          obj['createdAt'] = _ApiClient["default"].convertToType(data['createdAt'], 'String');
        }

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
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

        if (data.hasOwnProperty('defaultValue')) {
          obj['defaultValue'] = _ApiClient["default"].convertToType(data['defaultValue'], 'Number');
        }

        if (data.hasOwnProperty('enabled')) {
          obj['enabled'] = _ApiClient["default"].convertToType(data['enabled'], 'Boolean');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'Boolean');
        }

        if (data.hasOwnProperty('errorMessage')) {
          obj['errorMessage'] = _ApiClient["default"].convertToType(data['errorMessage'], 'String');
        }

        if (data.hasOwnProperty('fillingValue')) {
          obj['fillingValue'] = _ApiClient["default"].convertToType(data['fillingValue'], 'Number');
        }

        if (data.hasOwnProperty('firstDailyReminderTime')) {
          obj['firstDailyReminderTime'] = _ApiClient["default"].convertToType(data['firstDailyReminderTime'], 'String');
        }

        if (data.hasOwnProperty('frequencyTextDescription')) {
          obj['frequencyTextDescription'] = _ApiClient["default"].convertToType(data['frequencyTextDescription'], 'String');
        }

        if (data.hasOwnProperty('frequencyTextDescriptionWithTime')) {
          obj['frequencyTextDescriptionWithTime'] = _ApiClient["default"].convertToType(data['frequencyTextDescriptionWithTime'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('inputType')) {
          obj['inputType'] = _ApiClient["default"].convertToType(data['inputType'], 'String');
        }

        if (data.hasOwnProperty('instructions')) {
          obj['instructions'] = _ApiClient["default"].convertToType(data['instructions'], 'String');
        }

        if (data.hasOwnProperty('ionIcon')) {
          obj['ionIcon'] = _ApiClient["default"].convertToType(data['ionIcon'], 'String');
        }

        if (data.hasOwnProperty('lastTracked')) {
          obj['lastTracked'] = _ApiClient["default"].convertToType(data['lastTracked'], 'String');
        }

        if (data.hasOwnProperty('lastValue')) {
          obj['lastValue'] = _ApiClient["default"].convertToType(data['lastValue'], 'Number');
        }

        if (data.hasOwnProperty('latestTrackingReminderNotificationReminderTime')) {
          obj['latestTrackingReminderNotificationReminderTime'] = _ApiClient["default"].convertToType(data['latestTrackingReminderNotificationReminderTime'], 'String');
        }

        if (data.hasOwnProperty('localDailyReminderNotificationTimes')) {
          obj['localDailyReminderNotificationTimes'] = _ApiClient["default"].convertToType(data['localDailyReminderNotificationTimes'], ['String']);
        }

        if (data.hasOwnProperty('localDailyReminderNotificationTimesForAllReminders')) {
          obj['localDailyReminderNotificationTimesForAllReminders'] = _ApiClient["default"].convertToType(data['localDailyReminderNotificationTimesForAllReminders'], ['String']);
        }

        if (data.hasOwnProperty('manualTracking')) {
          obj['manualTracking'] = _ApiClient["default"].convertToType(data['manualTracking'], 'Boolean');
        }

        if (data.hasOwnProperty('maximumAllowedValue')) {
          obj['maximumAllowedValue'] = _ApiClient["default"].convertToType(data['maximumAllowedValue'], 'Number');
        }

        if (data.hasOwnProperty('minimumAllowedValue')) {
          obj['minimumAllowedValue'] = _ApiClient["default"].convertToType(data['minimumAllowedValue'], 'Number');
        }

        if (data.hasOwnProperty('nextReminderTimeEpochSeconds')) {
          obj['nextReminderTimeEpochSeconds'] = _ApiClient["default"].convertToType(data['nextReminderTimeEpochSeconds'], 'Number');
        }

        if (data.hasOwnProperty('notificationBar')) {
          obj['notificationBar'] = _ApiClient["default"].convertToType(data['notificationBar'], 'Boolean');
        }

        if (data.hasOwnProperty('numberOfRawMeasurements')) {
          obj['numberOfRawMeasurements'] = _ApiClient["default"].convertToType(data['numberOfRawMeasurements'], 'Number');
        }

        if (data.hasOwnProperty('numberOfUniqueValues')) {
          obj['numberOfUniqueValues'] = _ApiClient["default"].convertToType(data['numberOfUniqueValues'], 'Number');
        }

        if (data.hasOwnProperty('outcome')) {
          obj['outcome'] = _ApiClient["default"].convertToType(data['outcome'], 'Boolean');
        }

        if (data.hasOwnProperty('pngPath')) {
          obj['pngPath'] = _ApiClient["default"].convertToType(data['pngPath'], 'String');
        }

        if (data.hasOwnProperty('pngUrl')) {
          obj['pngUrl'] = _ApiClient["default"].convertToType(data['pngUrl'], 'String');
        }

        if (data.hasOwnProperty('productUrl')) {
          obj['productUrl'] = _ApiClient["default"].convertToType(data['productUrl'], 'String');
        }

        if (data.hasOwnProperty('popUp')) {
          obj['popUp'] = _ApiClient["default"].convertToType(data['popUp'], 'Boolean');
        }

        if (data.hasOwnProperty('question')) {
          obj['question'] = _ApiClient["default"].convertToType(data['question'], 'String');
        }

        if (data.hasOwnProperty('longQuestion')) {
          obj['longQuestion'] = _ApiClient["default"].convertToType(data['longQuestion'], 'String');
        }

        if (data.hasOwnProperty('reminderEndTime')) {
          obj['reminderEndTime'] = _ApiClient["default"].convertToType(data['reminderEndTime'], 'String');
        }

        if (data.hasOwnProperty('reminderFrequency')) {
          obj['reminderFrequency'] = _ApiClient["default"].convertToType(data['reminderFrequency'], 'Number');
        }

        if (data.hasOwnProperty('reminderSound')) {
          obj['reminderSound'] = _ApiClient["default"].convertToType(data['reminderSound'], 'String');
        }

        if (data.hasOwnProperty('reminderStartEpochSeconds')) {
          obj['reminderStartEpochSeconds'] = _ApiClient["default"].convertToType(data['reminderStartEpochSeconds'], 'Number');
        }

        if (data.hasOwnProperty('reminderStartTime')) {
          obj['reminderStartTime'] = _ApiClient["default"].convertToType(data['reminderStartTime'], 'String');
        }

        if (data.hasOwnProperty('reminderStartTimeLocal')) {
          obj['reminderStartTimeLocal'] = _ApiClient["default"].convertToType(data['reminderStartTimeLocal'], 'String');
        }

        if (data.hasOwnProperty('reminderStartTimeLocalHumanFormatted')) {
          obj['reminderStartTimeLocalHumanFormatted'] = _ApiClient["default"].convertToType(data['reminderStartTimeLocalHumanFormatted'], 'String');
        }

        if (data.hasOwnProperty('repeating')) {
          obj['repeating'] = _ApiClient["default"].convertToType(data['repeating'], 'Boolean');
        }

        if (data.hasOwnProperty('secondDailyReminderTime')) {
          obj['secondDailyReminderTime'] = _ApiClient["default"].convertToType(data['secondDailyReminderTime'], 'String');
        }

        if (data.hasOwnProperty('secondToLastValue')) {
          obj['secondToLastValue'] = _ApiClient["default"].convertToType(data['secondToLastValue'], 'Number');
        }

        if (data.hasOwnProperty('sms')) {
          obj['sms'] = _ApiClient["default"].convertToType(data['sms'], 'Boolean');
        }

        if (data.hasOwnProperty('startTrackingDate')) {
          obj['startTrackingDate'] = _ApiClient["default"].convertToType(data['startTrackingDate'], 'String');
        }

        if (data.hasOwnProperty('stopTrackingDate')) {
          obj['stopTrackingDate'] = _ApiClient["default"].convertToType(data['stopTrackingDate'], 'String');
        }

        if (data.hasOwnProperty('svgUrl')) {
          obj['svgUrl'] = _ApiClient["default"].convertToType(data['svgUrl'], 'String');
        }

        if (data.hasOwnProperty('thirdDailyReminderTime')) {
          obj['thirdDailyReminderTime'] = _ApiClient["default"].convertToType(data['thirdDailyReminderTime'], 'String');
        }

        if (data.hasOwnProperty('thirdToLastValue')) {
          obj['thirdToLastValue'] = _ApiClient["default"].convertToType(data['thirdToLastValue'], 'Number');
        }

        if (data.hasOwnProperty('trackingReminderId')) {
          obj['trackingReminderId'] = _ApiClient["default"].convertToType(data['trackingReminderId'], 'Number');
        }

        if (data.hasOwnProperty('trackingReminderImageUrl')) {
          obj['trackingReminderImageUrl'] = _ApiClient["default"].convertToType(data['trackingReminderImageUrl'], 'String');
        }

        if (data.hasOwnProperty('upc')) {
          obj['upc'] = _ApiClient["default"].convertToType(data['upc'], 'String');
        }

        if (data.hasOwnProperty('updatedAt')) {
          obj['updatedAt'] = _ApiClient["default"].convertToType(data['updatedAt'], 'String');
        }

        if (data.hasOwnProperty('userId')) {
          obj['userId'] = _ApiClient["default"].convertToType(data['userId'], 'Number');
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

        if (data.hasOwnProperty('userVariableVariableCategoryId')) {
          obj['userVariableVariableCategoryId'] = _ApiClient["default"].convertToType(data['userVariableVariableCategoryId'], 'Number');
        }

        if (data.hasOwnProperty('userVariableVariableCategoryName')) {
          obj['userVariableVariableCategoryName'] = _ApiClient["default"].convertToType(data['userVariableVariableCategoryName'], 'String');
        }

        if (data.hasOwnProperty('valence')) {
          obj['valence'] = _ApiClient["default"].convertToType(data['valence'], 'String');
        }

        if (data.hasOwnProperty('valueAndFrequencyTextDescription')) {
          obj['valueAndFrequencyTextDescription'] = _ApiClient["default"].convertToType(data['valueAndFrequencyTextDescription'], 'String');
        }

        if (data.hasOwnProperty('valueAndFrequencyTextDescriptionWithTime')) {
          obj['valueAndFrequencyTextDescriptionWithTime'] = _ApiClient["default"].convertToType(data['valueAndFrequencyTextDescriptionWithTime'], 'String');
        }

        if (data.hasOwnProperty('variableCategoryId')) {
          obj['variableCategoryId'] = _ApiClient["default"].convertToType(data['variableCategoryId'], 'Number');
        }

        if (data.hasOwnProperty('variableCategoryImageUrl')) {
          obj['variableCategoryImageUrl'] = _ApiClient["default"].convertToType(data['variableCategoryImageUrl'], 'String');
        }

        if (data.hasOwnProperty('variableCategoryName')) {
          obj['variableCategoryName'] = _ApiClient["default"].convertToType(data['variableCategoryName'], 'String');
        }

        if (data.hasOwnProperty('variableDescription')) {
          obj['variableDescription'] = _ApiClient["default"].convertToType(data['variableDescription'], 'String');
        }

        if (data.hasOwnProperty('variableId')) {
          obj['variableId'] = _ApiClient["default"].convertToType(data['variableId'], 'Number');
        }

        if (data.hasOwnProperty('variableName')) {
          obj['variableName'] = _ApiClient["default"].convertToType(data['variableName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TrackingReminder;
}();
/**
 * @member {Array.<module:model/TrackingReminderNotificationAction>} actionArray
 */


TrackingReminder.prototype['actionArray'] = undefined;
/**
 * @member {Array.<module:model/Unit>} availableUnits
 */

TrackingReminder.prototype['availableUnits'] = undefined;
/**
 * Link to study comparing variable with strongest relationship for user or population
 * @member {String} bestStudyLink
 */

TrackingReminder.prototype['bestStudyLink'] = undefined;
/**
 * @member {module:model/Card} bestStudyCard
 */

TrackingReminder.prototype['bestStudyCard'] = undefined;
/**
 * Link to study comparing variable with strongest relationship for user
 * @member {String} bestUserStudyLink
 */

TrackingReminder.prototype['bestUserStudyLink'] = undefined;
/**
 * @member {module:model/Card} bestUserStudyCard
 */

TrackingReminder.prototype['bestUserStudyCard'] = undefined;
/**
 * Link to study comparing variable with strongest relationship for population
 * @member {String} bestPopulationStudyLink
 */

TrackingReminder.prototype['bestPopulationStudyLink'] = undefined;
/**
 * @member {module:model/Card} bestPopulationStudyCard
 */

TrackingReminder.prototype['bestPopulationStudyCard'] = undefined;
/**
 * Description of relationship with variable with strongest relationship for user or population
 * @member {String} optimalValueMessage
 */

TrackingReminder.prototype['optimalValueMessage'] = undefined;
/**
 * Description of relationship with variable with strongest relationship for population
 * @member {String} commonOptimalValueMessage
 */

TrackingReminder.prototype['commonOptimalValueMessage'] = undefined;
/**
 * Description of relationship with variable with strongest relationship for user
 * @member {String} userOptimalValueMessage
 */

TrackingReminder.prototype['userOptimalValueMessage'] = undefined;
/**
 * @member {module:model/Card} card
 */

TrackingReminder.prototype['card'] = undefined;
/**
 * Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org
 * @member {String} clientId
 */

TrackingReminder.prototype['clientId'] = undefined;
/**
 * The way multiple measurements are aggregated over time
 * @member {module:model/TrackingReminder.CombinationOperationEnum} combinationOperation
 */

TrackingReminder.prototype['combinationOperation'] = undefined;
/**
 * Ex: 2016-05-18 02:24:08 UTC ISO 8601 YYYY-MM-DDThh:mm:ss
 * @member {String} createdAt
 */

TrackingReminder.prototype['createdAt'] = undefined;
/**
 * Ex: Trader Joe's Bedtime Tea
 * @member {String} displayName
 */

TrackingReminder.prototype['displayName'] = undefined;
/**
 * Ex: /5
 * @member {String} unitAbbreviatedName
 */

TrackingReminder.prototype['unitAbbreviatedName'] = undefined;
/**
 * Ex: 5
 * @member {Number} unitCategoryId
 */

TrackingReminder.prototype['unitCategoryId'] = undefined;
/**
 * Ex: Rating
 * @member {String} unitCategoryName
 */

TrackingReminder.prototype['unitCategoryName'] = undefined;
/**
 * Ex: 10
 * @member {Number} unitId
 */

TrackingReminder.prototype['unitId'] = undefined;
/**
 * Ex: 1 to 5 Rating
 * @member {String} unitName
 */

TrackingReminder.prototype['unitName'] = undefined;
/**
 * Default value to use for the measurement when tracking. Unit: User-specified or common.
 * @member {Number} defaultValue
 */

TrackingReminder.prototype['defaultValue'] = undefined;
/**
 * If a tracking reminder is enabled, tracking reminder notifications will be generated for this variable.
 * @member {Boolean} enabled
 */

TrackingReminder.prototype['enabled'] = undefined;
/**
 * True if the reminders should be delivered via email
 * @member {Boolean} email
 */

TrackingReminder.prototype['email'] = undefined;
/**
 * Ex: reminderStartTimeLocal is less than $user->earliestReminderTime or greater than  $user->latestReminderTime
 * @member {String} errorMessage
 */

TrackingReminder.prototype['errorMessage'] = undefined;
/**
 * Ex: 0. Unit: User-specified or common.
 * @member {Number} fillingValue
 */

TrackingReminder.prototype['fillingValue'] = undefined;
/**
 * Ex: 02:45:20 in UTC timezone
 * @member {String} firstDailyReminderTime
 */

TrackingReminder.prototype['firstDailyReminderTime'] = undefined;
/**
 * Ex: Daily
 * @member {String} frequencyTextDescription
 */

TrackingReminder.prototype['frequencyTextDescription'] = undefined;
/**
 * Ex: Daily at 09:45 PM
 * @member {String} frequencyTextDescriptionWithTime
 */

TrackingReminder.prototype['frequencyTextDescriptionWithTime'] = undefined;
/**
 * id
 * @member {Number} id
 */

TrackingReminder.prototype['id'] = undefined;
/**
 * Ex: saddestFaceIsFive
 * @member {String} inputType
 */

TrackingReminder.prototype['inputType'] = undefined;
/**
 * Ex: I am an instruction!
 * @member {String} instructions
 */

TrackingReminder.prototype['instructions'] = undefined;
/**
 * Ex: ion-sad-outline
 * @member {String} ionIcon
 */

TrackingReminder.prototype['ionIcon'] = undefined;
/**
 * UTC ISO 8601 YYYY-MM-DDThh:mm:ss timestamp for the last time a measurement was received for this user and variable
 * @member {String} lastTracked
 */

TrackingReminder.prototype['lastTracked'] = undefined;
/**
 * Ex: 2
 * @member {Number} lastValue
 */

TrackingReminder.prototype['lastValue'] = undefined;
/**
 * UTC ISO 8601 YYYY-MM-DDThh:mm:ss  timestamp for the reminder time of the latest tracking reminder notification that has been pre-emptively generated in the database
 * @member {String} latestTrackingReminderNotificationReminderTime
 */

TrackingReminder.prototype['latestTrackingReminderNotificationReminderTime'] = undefined;
/**
 * @member {Array.<String>} localDailyReminderNotificationTimes
 */

TrackingReminder.prototype['localDailyReminderNotificationTimes'] = undefined;
/**
 * @member {Array.<String>} localDailyReminderNotificationTimesForAllReminders
 */

TrackingReminder.prototype['localDailyReminderNotificationTimesForAllReminders'] = undefined;
/**
 * Ex: 1
 * @member {Boolean} manualTracking
 */

TrackingReminder.prototype['manualTracking'] = undefined;
/**
 * Ex: 5. Unit: User-specified or common.
 * @member {Number} maximumAllowedValue
 */

TrackingReminder.prototype['maximumAllowedValue'] = undefined;
/**
 * Ex: 1. Unit: User-specified or common.
 * @member {Number} minimumAllowedValue
 */

TrackingReminder.prototype['minimumAllowedValue'] = undefined;
/**
 * Ex: 1501555520
 * @member {Number} nextReminderTimeEpochSeconds
 */

TrackingReminder.prototype['nextReminderTimeEpochSeconds'] = undefined;
/**
 * True if the reminders should appear in the notification bar
 * @member {Boolean} notificationBar
 */

TrackingReminder.prototype['notificationBar'] = undefined;
/**
 * Ex: 445
 * @member {Number} numberOfRawMeasurements
 */

TrackingReminder.prototype['numberOfRawMeasurements'] = undefined;
/**
 * Ex: 1
 * @member {Number} numberOfUniqueValues
 */

TrackingReminder.prototype['numberOfUniqueValues'] = undefined;
/**
 * Indicates whether or not the variable is usually an outcome of interest such as a symptom or emotion
 * @member {Boolean} outcome
 */

TrackingReminder.prototype['outcome'] = undefined;
/**
 * Ex: img/variable_categories/symptoms.png
 * @member {String} pngPath
 */

TrackingReminder.prototype['pngPath'] = undefined;
/**
 * Ex: https://app.curedao.org/img/variable_categories/symptoms.png
 * @member {String} pngUrl
 */

TrackingReminder.prototype['pngUrl'] = undefined;
/**
 * Link to associated product for purchase
 * @member {String} productUrl
 */

TrackingReminder.prototype['productUrl'] = undefined;
/**
 * True if the reminders should appear as a popup notification
 * @member {Boolean} popUp
 */

TrackingReminder.prototype['popUp'] = undefined;
/**
 * Ex: How is your overall mood?
 * @member {String} question
 */

TrackingReminder.prototype['question'] = undefined;
/**
 * Ex: How is your overall mood on a scale of 1 to 5??
 * @member {String} longQuestion
 */

TrackingReminder.prototype['longQuestion'] = undefined;
/**
 * Latest time of day at which reminders should appear in UTC HH:MM:SS format
 * @member {String} reminderEndTime
 */

TrackingReminder.prototype['reminderEndTime'] = undefined;
/**
 * Number of seconds between one reminder and the next
 * @member {Number} reminderFrequency
 */

TrackingReminder.prototype['reminderFrequency'] = undefined;
/**
 * String identifier for the sound to accompany the reminder
 * @member {String} reminderSound
 */

TrackingReminder.prototype['reminderSound'] = undefined;
/**
 * Ex: 1469760320
 * @member {Number} reminderStartEpochSeconds
 */

TrackingReminder.prototype['reminderStartEpochSeconds'] = undefined;
/**
 * Earliest time of day at which reminders should appear in UTC HH:MM:SS format
 * @member {String} reminderStartTime
 */

TrackingReminder.prototype['reminderStartTime'] = undefined;
/**
 * Ex: 21:45:20
 * @member {String} reminderStartTimeLocal
 */

TrackingReminder.prototype['reminderStartTimeLocal'] = undefined;
/**
 * Ex: 09:45 PM
 * @member {String} reminderStartTimeLocalHumanFormatted
 */

TrackingReminder.prototype['reminderStartTimeLocalHumanFormatted'] = undefined;
/**
 * Ex: true
 * @member {Boolean} repeating
 */

TrackingReminder.prototype['repeating'] = undefined;
/**
 * Ex: 01:00:00
 * @member {String} secondDailyReminderTime
 */

TrackingReminder.prototype['secondDailyReminderTime'] = undefined;
/**
 * Ex: 1. Unit: User-specified or common.
 * @member {Number} secondToLastValue
 */

TrackingReminder.prototype['secondToLastValue'] = undefined;
/**
 * True if the reminders should be delivered via SMS
 * @member {Boolean} sms
 */

TrackingReminder.prototype['sms'] = undefined;
/**
 * Earliest date on which the user should be reminded to track in YYYY-MM-DD format
 * @member {String} startTrackingDate
 */

TrackingReminder.prototype['startTrackingDate'] = undefined;
/**
 * Latest date on which the user should be reminded to track in YYYY-MM-DD format
 * @member {String} stopTrackingDate
 */

TrackingReminder.prototype['stopTrackingDate'] = undefined;
/**
 * Ex: https://app.curedao.org/img/variable_categories/symptoms.svg
 * @member {String} svgUrl
 */

TrackingReminder.prototype['svgUrl'] = undefined;
/**
 * Ex: 20:00:00
 * @member {String} thirdDailyReminderTime
 */

TrackingReminder.prototype['thirdDailyReminderTime'] = undefined;
/**
 * Ex: 3
 * @member {Number} thirdToLastValue
 */

TrackingReminder.prototype['thirdToLastValue'] = undefined;
/**
 * Ex: 11841
 * @member {Number} trackingReminderId
 */

TrackingReminder.prototype['trackingReminderId'] = undefined;
/**
 * Ex: Not Found
 * @member {String} trackingReminderImageUrl
 */

TrackingReminder.prototype['trackingReminderImageUrl'] = undefined;
/**
 * UPC or other barcode scan result
 * @member {String} upc
 */

TrackingReminder.prototype['upc'] = undefined;
/**
 * When the record in the database was last updated. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss  datetime format. Time zone should be UTC and not local.
 * @member {String} updatedAt
 */

TrackingReminder.prototype['updatedAt'] = undefined;
/**
 * ID of User
 * @member {Number} userId
 */

TrackingReminder.prototype['userId'] = undefined;
/**
 * Ex: /5
 * @member {String} userVariableUnitAbbreviatedName
 */

TrackingReminder.prototype['userVariableUnitAbbreviatedName'] = undefined;
/**
 * Ex: 5
 * @member {Number} userVariableUnitCategoryId
 */

TrackingReminder.prototype['userVariableUnitCategoryId'] = undefined;
/**
 * Ex: Rating
 * @member {String} userVariableUnitCategoryName
 */

TrackingReminder.prototype['userVariableUnitCategoryName'] = undefined;
/**
 * Ex: 10
 * @member {Number} userVariableUnitId
 */

TrackingReminder.prototype['userVariableUnitId'] = undefined;
/**
 * Ex: 1 to 5 Rating
 * @member {String} userVariableUnitName
 */

TrackingReminder.prototype['userVariableUnitName'] = undefined;
/**
 * Ex: 10
 * @member {Number} userVariableVariableCategoryId
 */

TrackingReminder.prototype['userVariableVariableCategoryId'] = undefined;
/**
 * Ex: Symptoms
 * @member {String} userVariableVariableCategoryName
 */

TrackingReminder.prototype['userVariableVariableCategoryName'] = undefined;
/**
 * Valence indicates what type of buttons should be used when recording measurements for this variable. positive - Face buttons with the happiest face equating to a 5/5 rating where higher is better like Overall Mood. negative - Face buttons with happiest face equating to a 1/5 rating where lower is better like Headache Severity. numeric - Just 1 to 5 numeric buttons for neutral variables. 
 * @member {String} valence
 */

TrackingReminder.prototype['valence'] = undefined;
/**
 * Ex: Rate daily
 * @member {String} valueAndFrequencyTextDescription
 */

TrackingReminder.prototype['valueAndFrequencyTextDescription'] = undefined;
/**
 * Ex: Rate daily at 09:45 PM
 * @member {String} valueAndFrequencyTextDescriptionWithTime
 */

TrackingReminder.prototype['valueAndFrequencyTextDescriptionWithTime'] = undefined;
/**
 * Ex: 10
 * @member {Number} variableCategoryId
 */

TrackingReminder.prototype['variableCategoryId'] = undefined;
/**
 * Ex: https://static.quantimo.do/img/variable_categories/sad-96.png
 * @member {String} variableCategoryImageUrl
 */

TrackingReminder.prototype['variableCategoryImageUrl'] = undefined;
/**
 * Ex: Emotions, Treatments, Symptoms...
 * @member {module:model/TrackingReminder.VariableCategoryNameEnum} variableCategoryName
 */

TrackingReminder.prototype['variableCategoryName'] = undefined;
/**
 * Valence indicates what type of buttons should be used when recording measurements for this variable. positive - Face buttons with the happiest face equating to a 5/5 rating where higher is better like Overall Mood. negative - Face buttons with happiest face equating to a 1/5 rating where lower is better like Headache Severity. numeric - Just 1 to 5 numeric buttons for neutral variables. 
 * @member {String} variableDescription
 */

TrackingReminder.prototype['variableDescription'] = undefined;
/**
 * Id for the variable to be tracked
 * @member {Number} variableId
 */

TrackingReminder.prototype['variableId'] = undefined;
/**
 * Name of the variable to be used when sending measurements
 * @member {String} variableName
 */

TrackingReminder.prototype['variableName'] = undefined;
/**
 * Allowed values for the <code>combinationOperation</code> property.
 * @enum {String}
 * @readonly
 */

TrackingReminder['CombinationOperationEnum'] = {
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
 * Allowed values for the <code>variableCategoryName</code> property.
 * @enum {String}
 * @readonly
 */

TrackingReminder['VariableCategoryNameEnum'] = {
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
var _default = TrackingReminder;
exports["default"] = _default;
