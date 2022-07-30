"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Card = _interopRequireDefault(require("./Card"));

var _TrackingReminderNotificationAction = _interopRequireDefault(require("./TrackingReminderNotificationAction"));

var _TrackingReminderNotificationTrackAllAction = _interopRequireDefault(require("./TrackingReminderNotificationTrackAllAction"));

var _Unit = _interopRequireDefault(require("./Unit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The TrackingReminderNotification model module.
 * @module model/TrackingReminderNotification
 * @version 0.0.1
 */
var TrackingReminderNotification = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TrackingReminderNotification</code>.
   * @alias module:model/TrackingReminderNotification
   * @param actionArray {Array.<module:model/TrackingReminderNotificationAction>} 
   * @param availableUnits {Array.<module:model/Unit>} 
   * @param fillingValue {Number} Ex: 0
   * @param id {Number} id for the specific PENDING tracking remidner
   * @param trackAllActions {Array.<module:model/TrackingReminderNotificationTrackAllAction>} 
   */
  function TrackingReminderNotification(actionArray, availableUnits, fillingValue, id, trackAllActions) {
    _classCallCheck(this, TrackingReminderNotification);

    TrackingReminderNotification.initialize(this, actionArray, availableUnits, fillingValue, id, trackAllActions);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TrackingReminderNotification, null, [{
    key: "initialize",
    value: function initialize(obj, actionArray, availableUnits, fillingValue, id, trackAllActions) {
      obj['actionArray'] = actionArray;
      obj['availableUnits'] = availableUnits;
      obj['fillingValue'] = fillingValue;
      obj['id'] = id;
      obj['trackAllActions'] = trackAllActions;
    }
    /**
     * Constructs a <code>TrackingReminderNotification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TrackingReminderNotification} obj Optional instance to populate.
     * @return {module:model/TrackingReminderNotification} The populated <code>TrackingReminderNotification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TrackingReminderNotification();

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

        if (data.hasOwnProperty('modifiedValue')) {
          obj['modifiedValue'] = _ApiClient["default"].convertToType(data['modifiedValue'], 'Number');
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

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'Boolean');
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

        if (data.hasOwnProperty('inputType')) {
          obj['inputType'] = _ApiClient["default"].convertToType(data['inputType'], 'String');
        }

        if (data.hasOwnProperty('ionIcon')) {
          obj['ionIcon'] = _ApiClient["default"].convertToType(data['ionIcon'], 'String');
        }

        if (data.hasOwnProperty('lastValue')) {
          obj['lastValue'] = _ApiClient["default"].convertToType(data['lastValue'], 'Number');
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

        if (data.hasOwnProperty('mostCommonValue')) {
          obj['mostCommonValue'] = _ApiClient["default"].convertToType(data['mostCommonValue'], 'Number');
        }

        if (data.hasOwnProperty('notificationBar')) {
          obj['notificationBar'] = _ApiClient["default"].convertToType(data['notificationBar'], 'Boolean');
        }

        if (data.hasOwnProperty('notifiedAt')) {
          obj['notifiedAt'] = _ApiClient["default"].convertToType(data['notifiedAt'], 'String');
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

        if (data.hasOwnProperty('popUp')) {
          obj['popUp'] = _ApiClient["default"].convertToType(data['popUp'], 'Boolean');
        }

        if (data.hasOwnProperty('productUrl')) {
          obj['productUrl'] = _ApiClient["default"].convertToType(data['productUrl'], 'String');
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

        if (data.hasOwnProperty('reminderStartTime')) {
          obj['reminderStartTime'] = _ApiClient["default"].convertToType(data['reminderStartTime'], 'String');
        }

        if (data.hasOwnProperty('reminderTime')) {
          obj['reminderTime'] = _ApiClient["default"].convertToType(data['reminderTime'], 'String');
        }

        if (data.hasOwnProperty('secondMostCommonValue')) {
          obj['secondMostCommonValue'] = _ApiClient["default"].convertToType(data['secondMostCommonValue'], 'Number');
        }

        if (data.hasOwnProperty('secondToLastValue')) {
          obj['secondToLastValue'] = _ApiClient["default"].convertToType(data['secondToLastValue'], 'Number');
        }

        if (data.hasOwnProperty('sms')) {
          obj['sms'] = _ApiClient["default"].convertToType(data['sms'], 'Boolean');
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

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }

        if (data.hasOwnProperty('trackAllActions')) {
          obj['trackAllActions'] = _ApiClient["default"].convertToType(data['trackAllActions'], [_TrackingReminderNotificationTrackAllAction["default"]]);
        }

        if (data.hasOwnProperty('trackingReminderId')) {
          obj['trackingReminderId'] = _ApiClient["default"].convertToType(data['trackingReminderId'], 'Number');
        }

        if (data.hasOwnProperty('trackingReminderImageUrl')) {
          obj['trackingReminderImageUrl'] = _ApiClient["default"].convertToType(data['trackingReminderImageUrl'], 'String');
        }

        if (data.hasOwnProperty('trackingReminderNotificationId')) {
          obj['trackingReminderNotificationId'] = _ApiClient["default"].convertToType(data['trackingReminderNotificationId'], 'Number');
        }

        if (data.hasOwnProperty('trackingReminderNotificationTime')) {
          obj['trackingReminderNotificationTime'] = _ApiClient["default"].convertToType(data['trackingReminderNotificationTime'], 'String');
        }

        if (data.hasOwnProperty('trackingReminderNotificationTimeEpoch')) {
          obj['trackingReminderNotificationTimeEpoch'] = _ApiClient["default"].convertToType(data['trackingReminderNotificationTimeEpoch'], 'Number');
        }

        if (data.hasOwnProperty('trackingReminderNotificationTimeLocal')) {
          obj['trackingReminderNotificationTimeLocal'] = _ApiClient["default"].convertToType(data['trackingReminderNotificationTimeLocal'], 'String');
        }

        if (data.hasOwnProperty('trackingReminderNotificationTimeLocalHumanString')) {
          obj['trackingReminderNotificationTimeLocalHumanString'] = _ApiClient["default"].convertToType(data['trackingReminderNotificationTimeLocalHumanString'], 'String');
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

        if (data.hasOwnProperty('variableCategoryId')) {
          obj['variableCategoryId'] = _ApiClient["default"].convertToType(data['variableCategoryId'], 'Number');
        }

        if (data.hasOwnProperty('variableCategoryImageUrl')) {
          obj['variableCategoryImageUrl'] = _ApiClient["default"].convertToType(data['variableCategoryImageUrl'], 'String');
        }

        if (data.hasOwnProperty('variableCategoryName')) {
          obj['variableCategoryName'] = _ApiClient["default"].convertToType(data['variableCategoryName'], 'String');
        }

        if (data.hasOwnProperty('variableId')) {
          obj['variableId'] = _ApiClient["default"].convertToType(data['variableId'], 'Number');
        }

        if (data.hasOwnProperty('variableImageUrl')) {
          obj['variableImageUrl'] = _ApiClient["default"].convertToType(data['variableImageUrl'], 'String');
        }

        if (data.hasOwnProperty('variableName')) {
          obj['variableName'] = _ApiClient["default"].convertToType(data['variableName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TrackingReminderNotification;
}();
/**
 * @member {Array.<module:model/TrackingReminderNotificationAction>} actionArray
 */


TrackingReminderNotification.prototype['actionArray'] = undefined;
/**
 * @member {Array.<module:model/Unit>} availableUnits
 */

TrackingReminderNotification.prototype['availableUnits'] = undefined;
/**
 * Link to study comparing variable with strongest relationship for user or population
 * @member {String} bestStudyLink
 */

TrackingReminderNotification.prototype['bestStudyLink'] = undefined;
/**
 * @member {module:model/Card} bestStudyCard
 */

TrackingReminderNotification.prototype['bestStudyCard'] = undefined;
/**
 * Link to study comparing variable with strongest relationship for user
 * @member {String} bestUserStudyLink
 */

TrackingReminderNotification.prototype['bestUserStudyLink'] = undefined;
/**
 * @member {module:model/Card} bestUserStudyCard
 */

TrackingReminderNotification.prototype['bestUserStudyCard'] = undefined;
/**
 * Link to study comparing variable with strongest relationship for population
 * @member {String} bestPopulationStudyLink
 */

TrackingReminderNotification.prototype['bestPopulationStudyLink'] = undefined;
/**
 * @member {module:model/Card} bestPopulationStudyCard
 */

TrackingReminderNotification.prototype['bestPopulationStudyCard'] = undefined;
/**
 * Description of relationship with variable with strongest relationship for user or population
 * @member {String} optimalValueMessage
 */

TrackingReminderNotification.prototype['optimalValueMessage'] = undefined;
/**
 * Description of relationship with variable with strongest relationship for population
 * @member {String} commonOptimalValueMessage
 */

TrackingReminderNotification.prototype['commonOptimalValueMessage'] = undefined;
/**
 * Description of relationship with variable with strongest relationship for user
 * @member {String} userOptimalValueMessage
 */

TrackingReminderNotification.prototype['userOptimalValueMessage'] = undefined;
/**
 * @member {module:model/Card} card
 */

TrackingReminderNotification.prototype['card'] = undefined;
/**
 * Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org
 * @member {String} clientId
 */

TrackingReminderNotification.prototype['clientId'] = undefined;
/**
 * The way multiple measurements are aggregated over time
 * @member {module:model/TrackingReminderNotification.CombinationOperationEnum} combinationOperation
 */

TrackingReminderNotification.prototype['combinationOperation'] = undefined;
/**
 * Ex: 2017-07-29 20:49:54 UTC ISO 8601 YYYY-MM-DDThh:mm:ss
 * @member {String} createdAt
 */

TrackingReminderNotification.prototype['createdAt'] = undefined;
/**
 * Ex: Trader Joe's Bedtime Tea
 * @member {String} displayName
 */

TrackingReminderNotification.prototype['displayName'] = undefined;
/**
 * Is the user specified default value or falls back to the last value in user unit. Good for initializing input fields. Unit: User-specified or common.
 * @member {Number} modifiedValue
 */

TrackingReminderNotification.prototype['modifiedValue'] = undefined;
/**
 * Ex: /5
 * @member {String} unitAbbreviatedName
 */

TrackingReminderNotification.prototype['unitAbbreviatedName'] = undefined;
/**
 * Ex: 5
 * @member {Number} unitCategoryId
 */

TrackingReminderNotification.prototype['unitCategoryId'] = undefined;
/**
 * Ex: Rating
 * @member {String} unitCategoryName
 */

TrackingReminderNotification.prototype['unitCategoryName'] = undefined;
/**
 * Ex: 10
 * @member {Number} unitId
 */

TrackingReminderNotification.prototype['unitId'] = undefined;
/**
 * Ex: 1 to 5 Rating
 * @member {String} unitName
 */

TrackingReminderNotification.prototype['unitName'] = undefined;
/**
 * Default value to use for the measurement when tracking
 * @member {Number} defaultValue
 */

TrackingReminderNotification.prototype['defaultValue'] = undefined;
/**
 * Valence indicates what type of buttons should be used when recording measurements for this variable. positive - Face buttons with the happiest face equating to a 5/5 rating where higher is better like Overall Mood. negative - Face buttons with happiest face equating to a 1/5 rating where lower is better like Headache Severity. numeric - Just 1 to 5 numeric buttons for neutral variables. 
 * @member {String} description
 */

TrackingReminderNotification.prototype['description'] = undefined;
/**
 * True if the reminders should be delivered via email
 * @member {Boolean} email
 */

TrackingReminderNotification.prototype['email'] = undefined;
/**
 * Ex: 0
 * @member {Number} fillingValue
 */

TrackingReminderNotification.prototype['fillingValue'] = undefined;
/**
 * Ex: ion-sad-outline
 * @member {String} iconIcon
 */

TrackingReminderNotification.prototype['iconIcon'] = undefined;
/**
 * id for the specific PENDING tracking remidner
 * @member {Number} id
 */

TrackingReminderNotification.prototype['id'] = undefined;
/**
 * Ex: https://rximage.nlm.nih.gov/image/images/gallery/original/55111-0129-60_RXNAVIMAGE10_B051D81E.jpg
 * @member {String} imageUrl
 */

TrackingReminderNotification.prototype['imageUrl'] = undefined;
/**
 * Ex: happiestFaceIsFive
 * @member {String} inputType
 */

TrackingReminderNotification.prototype['inputType'] = undefined;
/**
 * Ex: ion-happy-outline
 * @member {String} ionIcon
 */

TrackingReminderNotification.prototype['ionIcon'] = undefined;
/**
 * Ex: 3
 * @member {Number} lastValue
 */

TrackingReminderNotification.prototype['lastValue'] = undefined;
/**
 * True if this variable is normally tracked via manual user input rather than automatic imports
 * @member {Boolean} manualTracking
 */

TrackingReminderNotification.prototype['manualTracking'] = undefined;
/**
 * Ex: 5
 * @member {Number} maximumAllowedValue
 */

TrackingReminderNotification.prototype['maximumAllowedValue'] = undefined;
/**
 * Ex: 1
 * @member {Number} minimumAllowedValue
 */

TrackingReminderNotification.prototype['minimumAllowedValue'] = undefined;
/**
 * Ex: 3
 * @member {Number} mostCommonValue
 */

TrackingReminderNotification.prototype['mostCommonValue'] = undefined;
/**
 * True if the reminders should appear in the notification bar
 * @member {Boolean} notificationBar
 */

TrackingReminderNotification.prototype['notificationBar'] = undefined;
/**
 * Ex: UTC ISO 8601 YYYY-MM-DDThh:mm:ss
 * @member {String} notifiedAt
 */

TrackingReminderNotification.prototype['notifiedAt'] = undefined;
/**
 * Ex: 5
 * @member {Number} numberOfUniqueValues
 */

TrackingReminderNotification.prototype['numberOfUniqueValues'] = undefined;
/**
 * Indicates whether or not the variable is usually an outcome of interest such as a symptom or emotion
 * @member {Boolean} outcome
 */

TrackingReminderNotification.prototype['outcome'] = undefined;
/**
 * Ex: img/variable_categories/emotions.png
 * @member {String} pngPath
 */

TrackingReminderNotification.prototype['pngPath'] = undefined;
/**
 * Ex: https://app.curedao.org/img/variable_categories/emotions.png
 * @member {String} pngUrl
 */

TrackingReminderNotification.prototype['pngUrl'] = undefined;
/**
 * True if the reminders should appear as a popup notification
 * @member {Boolean} popUp
 */

TrackingReminderNotification.prototype['popUp'] = undefined;
/**
 * Link to associated product for purchase
 * @member {String} productUrl
 */

TrackingReminderNotification.prototype['productUrl'] = undefined;
/**
 * Ex: How is your overall mood?
 * @member {String} question
 */

TrackingReminderNotification.prototype['question'] = undefined;
/**
 * Ex: How is your overall mood on a scale of 1 to 5??
 * @member {String} longQuestion
 */

TrackingReminderNotification.prototype['longQuestion'] = undefined;
/**
 * Ex: 01-01-2018
 * @member {String} reminderEndTime
 */

TrackingReminderNotification.prototype['reminderEndTime'] = undefined;
/**
 * How often user should be reminded in seconds. Ex: 86400
 * @member {Number} reminderFrequency
 */

TrackingReminderNotification.prototype['reminderFrequency'] = undefined;
/**
 * String identifier for the sound to accompany the reminder
 * @member {String} reminderSound
 */

TrackingReminderNotification.prototype['reminderSound'] = undefined;
/**
 * Earliest time of day at which reminders should appear in UTC HH:MM:SS format
 * @member {String} reminderStartTime
 */

TrackingReminderNotification.prototype['reminderStartTime'] = undefined;
/**
 * UTC ISO 8601 YYYY-MM-DDThh:mm:ss timestamp for the specific time the variable should be tracked in UTC.  This will be used for the measurement startTime if the track endpoint is used.
 * @member {String} reminderTime
 */

TrackingReminderNotification.prototype['reminderTime'] = undefined;
/**
 * Ex: 4
 * @member {Number} secondMostCommonValue
 */

TrackingReminderNotification.prototype['secondMostCommonValue'] = undefined;
/**
 * Ex: 1
 * @member {Number} secondToLastValue
 */

TrackingReminderNotification.prototype['secondToLastValue'] = undefined;
/**
 * True if the reminders should be delivered via SMS
 * @member {Boolean} sms
 */

TrackingReminderNotification.prototype['sms'] = undefined;
/**
 * Ex: https://app.curedao.org/img/variable_categories/emotions.svg
 * @member {String} svgUrl
 */

TrackingReminderNotification.prototype['svgUrl'] = undefined;
/**
 * Ex: 2
 * @member {Number} thirdMostCommonValue
 */

TrackingReminderNotification.prototype['thirdMostCommonValue'] = undefined;
/**
 * Ex: 2
 * @member {Number} thirdToLastValue
 */

TrackingReminderNotification.prototype['thirdToLastValue'] = undefined;
/**
 * Ex: Rate Overall Mood
 * @member {String} title
 */

TrackingReminderNotification.prototype['title'] = undefined;
/**
 * Ex: 3
 * @member {Number} total
 */

TrackingReminderNotification.prototype['total'] = undefined;
/**
 * @member {Array.<module:model/TrackingReminderNotificationTrackAllAction>} trackAllActions
 */

TrackingReminderNotification.prototype['trackAllActions'] = undefined;
/**
 * id for the repeating tracking remidner
 * @member {Number} trackingReminderId
 */

TrackingReminderNotification.prototype['trackingReminderId'] = undefined;
/**
 * Ex: https://rximage.nlm.nih.gov/image/images/gallery/original/55111-0129-60_RXNAVIMAGE10_B051D81E.jpg
 * @member {String} trackingReminderImageUrl
 */

TrackingReminderNotification.prototype['trackingReminderImageUrl'] = undefined;
/**
 * Ex: 5072482
 * @member {Number} trackingReminderNotificationId
 */

TrackingReminderNotification.prototype['trackingReminderNotificationId'] = undefined;
/**
 * UTC ISO 8601 YYYY-MM-DDThh:mm:ss timestamp for the specific time the variable should be tracked in UTC.  This will be used for the measurement startTime if the track endpoint is used.
 * @member {String} trackingReminderNotificationTime
 */

TrackingReminderNotification.prototype['trackingReminderNotificationTime'] = undefined;
/**
 * Ex: 1501534124
 * @member {Number} trackingReminderNotificationTimeEpoch
 */

TrackingReminderNotification.prototype['trackingReminderNotificationTimeEpoch'] = undefined;
/**
 * Ex: 15:48:44
 * @member {String} trackingReminderNotificationTimeLocal
 */

TrackingReminderNotification.prototype['trackingReminderNotificationTimeLocal'] = undefined;
/**
 * Ex: 8PM Sun, May 1
 * @member {String} trackingReminderNotificationTimeLocalHumanString
 */

TrackingReminderNotification.prototype['trackingReminderNotificationTimeLocalHumanString'] = undefined;
/**
 * When the record in the database was last updated. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss  datetime format. Time zone should be UTC and not local.
 * @member {String} updatedAt
 */

TrackingReminderNotification.prototype['updatedAt'] = undefined;
/**
 * ID of User
 * @member {Number} userId
 */

TrackingReminderNotification.prototype['userId'] = undefined;
/**
 * Ex: /5
 * @member {String} userVariableUnitAbbreviatedName
 */

TrackingReminderNotification.prototype['userVariableUnitAbbreviatedName'] = undefined;
/**
 * Ex: 5
 * @member {Number} userVariableUnitCategoryId
 */

TrackingReminderNotification.prototype['userVariableUnitCategoryId'] = undefined;
/**
 * Ex: Rating
 * @member {String} userVariableUnitCategoryName
 */

TrackingReminderNotification.prototype['userVariableUnitCategoryName'] = undefined;
/**
 * Ex: 10
 * @member {Number} userVariableUnitId
 */

TrackingReminderNotification.prototype['userVariableUnitId'] = undefined;
/**
 * Ex: 1 to 5 Rating
 * @member {String} userVariableUnitName
 */

TrackingReminderNotification.prototype['userVariableUnitName'] = undefined;
/**
 * Ex: 1
 * @member {Number} userVariableVariableCategoryId
 */

TrackingReminderNotification.prototype['userVariableVariableCategoryId'] = undefined;
/**
 * Ex: Emotions
 * @member {String} userVariableVariableCategoryName
 */

TrackingReminderNotification.prototype['userVariableVariableCategoryName'] = undefined;
/**
 * Valence indicates what type of buttons should be used when recording measurements for this variable. positive - Face buttons with the happiest face equating to a 5/5 rating where higher is better like Overall Mood. negative - Face buttons with happiest face equating to a 1/5 rating where lower is better like Headache Severity. numeric - Just 1 to 5 numeric buttons for neutral variables. 
 * @member {String} valence
 */

TrackingReminderNotification.prototype['valence'] = undefined;
/**
 * Ex: 1
 * @member {Number} variableCategoryId
 */

TrackingReminderNotification.prototype['variableCategoryId'] = undefined;
/**
 * Ex: https://static.quantimo.do/img/variable_categories/theatre_mask-96.png
 * @member {String} variableCategoryImageUrl
 */

TrackingReminderNotification.prototype['variableCategoryImageUrl'] = undefined;
/**
 * Ex: Emotions, Treatments, Symptoms...
 * @member {module:model/TrackingReminderNotification.VariableCategoryNameEnum} variableCategoryName
 */

TrackingReminderNotification.prototype['variableCategoryName'] = undefined;
/**
 * Id for the variable to be tracked
 * @member {Number} variableId
 */

TrackingReminderNotification.prototype['variableId'] = undefined;
/**
 * Ex: https://image.png
 * @member {String} variableImageUrl
 */

TrackingReminderNotification.prototype['variableImageUrl'] = undefined;
/**
 * Name of the variable to be used when sending measurements
 * @member {String} variableName
 */

TrackingReminderNotification.prototype['variableName'] = undefined;
/**
 * Allowed values for the <code>combinationOperation</code> property.
 * @enum {String}
 * @readonly
 */

TrackingReminderNotification['CombinationOperationEnum'] = {
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

TrackingReminderNotification['VariableCategoryNameEnum'] = {
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
var _default = TrackingReminderNotification;
exports["default"] = _default;
