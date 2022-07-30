"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Card = _interopRequireDefault(require("./Card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Measurement model module.
 * @module model/Measurement
 * @version 0.0.1
 */
var Measurement = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Measurement</code>.
   * @alias module:model/Measurement
   * @param sourceName {String} Application or device used to record the measurement values
   * @param startTimeString {String} Start Time for the measurement event in UTC ISO 8601 YYYY-MM-DDThh:mm:ss
   * @param unitAbbreviatedName {String} Abbreviated name for the unit of measurement
   * @param value {Number} Converted measurement value in requested unit
   * @param variableName {String} Name of the variable for which we are creating the measurement records
   */
  function Measurement(sourceName, startTimeString, unitAbbreviatedName, value, variableName) {
    _classCallCheck(this, Measurement);

    Measurement.initialize(this, sourceName, startTimeString, unitAbbreviatedName, value, variableName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Measurement, null, [{
    key: "initialize",
    value: function initialize(obj, sourceName, startTimeString, unitAbbreviatedName, value, variableName) {
      obj['sourceName'] = sourceName;
      obj['startTimeString'] = startTimeString;
      obj['unitAbbreviatedName'] = unitAbbreviatedName;
      obj['value'] = value;
      obj['variableName'] = variableName;
    }
    /**
     * Constructs a <code>Measurement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Measurement} obj Optional instance to populate.
     * @return {module:model/Measurement} The populated <code>Measurement</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Measurement();

        if (data.hasOwnProperty('card')) {
          obj['card'] = _Card["default"].constructFromObject(data['card']);
        }

        if (data.hasOwnProperty('clientId')) {
          obj['clientId'] = _ApiClient["default"].convertToType(data['clientId'], 'String');
        }

        if (data.hasOwnProperty('connectorId')) {
          obj['connectorId'] = _ApiClient["default"].convertToType(data['connectorId'], 'Number');
        }

        if (data.hasOwnProperty('createdAt')) {
          obj['createdAt'] = _ApiClient["default"].convertToType(data['createdAt'], 'String');
        }

        if (data.hasOwnProperty('displayValueAndUnitString')) {
          obj['displayValueAndUnitString'] = _ApiClient["default"].convertToType(data['displayValueAndUnitString'], 'String');
        }

        if (data.hasOwnProperty('iconIcon')) {
          obj['iconIcon'] = _ApiClient["default"].convertToType(data['iconIcon'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('inputType')) {
          obj['inputType'] = _ApiClient["default"].convertToType(data['inputType'], 'String');
        }

        if (data.hasOwnProperty('ionIcon')) {
          obj['ionIcon'] = _ApiClient["default"].convertToType(data['ionIcon'], 'String');
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

        if (data.hasOwnProperty('note')) {
          obj['note'] = _ApiClient["default"].convertToType(data['note'], 'String');
        }

        if (data.hasOwnProperty('noteObject')) {
          obj['noteObject'] = _ApiClient["default"].convertToType(data['noteObject'], Object);
        }

        if (data.hasOwnProperty('noteHtml')) {
          obj['noteHtml'] = _ApiClient["default"].convertToType(data['noteHtml'], Object);
        }

        if (data.hasOwnProperty('originalUnitId')) {
          obj['originalUnitId'] = _ApiClient["default"].convertToType(data['originalUnitId'], 'Number');
        }

        if (data.hasOwnProperty('originalValue')) {
          obj['originalValue'] = _ApiClient["default"].convertToType(data['originalValue'], 'Number');
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

        if (data.hasOwnProperty('sourceName')) {
          obj['sourceName'] = _ApiClient["default"].convertToType(data['sourceName'], 'String');
        }

        if (data.hasOwnProperty('startDate')) {
          obj['startDate'] = _ApiClient["default"].convertToType(data['startDate'], 'String');
        }

        if (data.hasOwnProperty('startTimeEpoch')) {
          obj['startTimeEpoch'] = _ApiClient["default"].convertToType(data['startTimeEpoch'], 'Number');
        }

        if (data.hasOwnProperty('startTimeString')) {
          obj['startTimeString'] = _ApiClient["default"].convertToType(data['startTimeString'], 'String');
        }

        if (data.hasOwnProperty('svgUrl')) {
          obj['svgUrl'] = _ApiClient["default"].convertToType(data['svgUrl'], 'String');
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

        if (data.hasOwnProperty('updatedAt')) {
          obj['updatedAt'] = _ApiClient["default"].convertToType(data['updatedAt'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
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

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'Number');
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

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Measurement;
}();
/**
 * @member {module:model/Card} card
 */


Measurement.prototype['card'] = undefined;
/**
 * Ex: curedao
 * @member {String} clientId
 */

Measurement.prototype['clientId'] = undefined;
/**
 * Ex: 13
 * @member {Number} connectorId
 */

Measurement.prototype['connectorId'] = undefined;
/**
 * Ex: 2017-07-30 21:08:36
 * @member {String} createdAt
 */

Measurement.prototype['createdAt'] = undefined;
/**
 * Examples: 3/5, $10, or 1 count
 * @member {String} displayValueAndUnitString
 */

Measurement.prototype['displayValueAndUnitString'] = undefined;
/**
 * Ex: ion-sad-outline
 * @member {String} iconIcon
 */

Measurement.prototype['iconIcon'] = undefined;
/**
 * Ex: 1051466127
 * @member {Number} id
 */

Measurement.prototype['id'] = undefined;
/**
 * Ex: value
 * @member {String} inputType
 */

Measurement.prototype['inputType'] = undefined;
/**
 * Ex: ion-ios-medkit-outline
 * @member {String} ionIcon
 */

Measurement.prototype['ionIcon'] = undefined;
/**
 * Ex: 1
 * @member {Boolean} manualTracking
 */

Measurement.prototype['manualTracking'] = undefined;
/**
 * Ex: 5. Unit: User-specified or common.
 * @member {Number} maximumAllowedValue
 */

Measurement.prototype['maximumAllowedValue'] = undefined;
/**
 * Ex: 1. Unit: User-specified or common.
 * @member {Number} minimumAllowedValue
 */

Measurement.prototype['minimumAllowedValue'] = undefined;
/**
 * Note of measurement
 * @member {String} note
 */

Measurement.prototype['note'] = undefined;
/**
 * Additional meta data for the measurement
 * @member {Object} noteObject
 */

Measurement.prototype['noteObject'] = undefined;
/**
 * Embeddable HTML with message hyperlinked with associated url
 * @member {Object} noteHtml
 */

Measurement.prototype['noteHtml'] = undefined;
/**
 * Ex: 23
 * @member {Number} originalUnitId
 */

Measurement.prototype['originalUnitId'] = undefined;
/**
 * Original value submitted. Unit: Originally submitted.
 * @member {Number} originalValue
 */

Measurement.prototype['originalValue'] = undefined;
/**
 * Ex: img/variable_categories/treatments.png
 * @member {String} pngPath
 */

Measurement.prototype['pngPath'] = undefined;
/**
 * Ex: https://app.curedao.org/img/variable_categories/treatments.png
 * @member {String} pngUrl
 */

Measurement.prototype['pngUrl'] = undefined;
/**
 * Link to associated product for purchase
 * @member {String} productUrl
 */

Measurement.prototype['productUrl'] = undefined;
/**
 * Application or device used to record the measurement values
 * @member {String} sourceName
 */

Measurement.prototype['sourceName'] = undefined;
/**
 * Ex: 2014-08-27
 * @member {String} startDate
 */

Measurement.prototype['startDate'] = undefined;
/**
 * Seconds between the start of the event measured and 1970 (Unix timestamp)
 * @member {Number} startTimeEpoch
 */

Measurement.prototype['startTimeEpoch'] = undefined;
/**
 * Start Time for the measurement event in UTC ISO 8601 YYYY-MM-DDThh:mm:ss
 * @member {String} startTimeString
 */

Measurement.prototype['startTimeString'] = undefined;
/**
 * Ex: https://app.curedao.org/img/variable_categories/treatments.svg
 * @member {String} svgUrl
 */

Measurement.prototype['svgUrl'] = undefined;
/**
 * Abbreviated name for the unit of measurement
 * @member {String} unitAbbreviatedName
 */

Measurement.prototype['unitAbbreviatedName'] = undefined;
/**
 * Ex: 6
 * @member {Number} unitCategoryId
 */

Measurement.prototype['unitCategoryId'] = undefined;
/**
 * Ex: Miscellany
 * @member {String} unitCategoryName
 */

Measurement.prototype['unitCategoryName'] = undefined;
/**
 * Ex: 23
 * @member {Number} unitId
 */

Measurement.prototype['unitId'] = undefined;
/**
 * Ex: Count
 * @member {String} unitName
 */

Measurement.prototype['unitName'] = undefined;
/**
 * Ex: 2017-07-30 21:08:36
 * @member {String} updatedAt
 */

Measurement.prototype['updatedAt'] = undefined;
/**
 * Link to associated Facebook like or Github commit, for instance
 * @member {String} url
 */

Measurement.prototype['url'] = undefined;
/**
 * Ex: count
 * @member {String} userVariableUnitAbbreviatedName
 */

Measurement.prototype['userVariableUnitAbbreviatedName'] = undefined;
/**
 * Ex: 6
 * @member {Number} userVariableUnitCategoryId
 */

Measurement.prototype['userVariableUnitCategoryId'] = undefined;
/**
 * Ex: Miscellany
 * @member {String} userVariableUnitCategoryName
 */

Measurement.prototype['userVariableUnitCategoryName'] = undefined;
/**
 * Ex: 23
 * @member {Number} userVariableUnitId
 */

Measurement.prototype['userVariableUnitId'] = undefined;
/**
 * Ex: Count
 * @member {String} userVariableUnitName
 */

Measurement.prototype['userVariableUnitName'] = undefined;
/**
 * Ex: 13
 * @member {Number} userVariableVariableCategoryId
 */

Measurement.prototype['userVariableVariableCategoryId'] = undefined;
/**
 * Ex: Treatments
 * @member {String} userVariableVariableCategoryName
 */

Measurement.prototype['userVariableVariableCategoryName'] = undefined;
/**
 * Valence indicates what type of buttons should be used when recording measurements for this variable. positive - Face buttons with the happiest face equating to a 5/5 rating where higher is better like Overall Mood. negative - Face buttons with happiest face equating to a 1/5 rating where lower is better like Headache Severity. numeric - Just 1 to 5 numeric buttons for neutral variables. 
 * @member {String} valence
 */

Measurement.prototype['valence'] = undefined;
/**
 * Converted measurement value in requested unit
 * @member {Number} value
 */

Measurement.prototype['value'] = undefined;
/**
 * Ex: 13
 * @member {Number} variableCategoryId
 */

Measurement.prototype['variableCategoryId'] = undefined;
/**
 * Ex: https://static.quantimo.do/img/variable_categories/pill-96.png
 * @member {String} variableCategoryImageUrl
 */

Measurement.prototype['variableCategoryImageUrl'] = undefined;
/**
 * Ex: Emotions, Treatments, Symptoms...
 * @member {module:model/Measurement.VariableCategoryNameEnum} variableCategoryName
 */

Measurement.prototype['variableCategoryName'] = undefined;
/**
 * Valence indicates what type of buttons should be used when recording measurements for this variable. positive - Face buttons with the happiest face equating to a 5/5 rating where higher is better like Overall Mood. negative - Face buttons with happiest face equating to a 1/5 rating where lower is better like Headache Severity. numeric - Just 1 to 5 numeric buttons for neutral variables. 
 * @member {String} variableDescription
 */

Measurement.prototype['variableDescription'] = undefined;
/**
 * Ex: 5956846
 * @member {Number} variableId
 */

Measurement.prototype['variableId'] = undefined;
/**
 * Name of the variable for which we are creating the measurement records
 * @member {String} variableName
 */

Measurement.prototype['variableName'] = undefined;
/**
 * Ex: Trader Joe's Bedtime Tea
 * @member {String} displayName
 */

Measurement.prototype['displayName'] = undefined;
/**
 * Allowed values for the <code>variableCategoryName</code> property.
 * @enum {String}
 * @readonly
 */

Measurement['VariableCategoryNameEnum'] = {
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
var _default = Measurement;
exports["default"] = _default;
