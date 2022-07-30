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
 * The VariableCategory model module.
 * @module model/VariableCategory
 * @version 0.0.1
 */
var VariableCategory = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VariableCategory</code>.
   * @alias module:model/VariableCategory
   * @param name {String} Category name
   */
  function VariableCategory(name) {
    _classCallCheck(this, VariableCategory);

    VariableCategory.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VariableCategory, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>VariableCategory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VariableCategory} obj Optional instance to populate.
     * @return {module:model/VariableCategory} The populated <code>VariableCategory</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VariableCategory();

        if (data.hasOwnProperty('appType')) {
          obj['appType'] = _ApiClient["default"].convertToType(data['appType'], 'String');
        }

        if (data.hasOwnProperty('causeOnly')) {
          obj['causeOnly'] = _ApiClient["default"].convertToType(data['causeOnly'], 'Boolean');
        }

        if (data.hasOwnProperty('combinationOperation')) {
          obj['combinationOperation'] = _ApiClient["default"].convertToType(data['combinationOperation'], 'String');
        }

        if (data.hasOwnProperty('createdTime')) {
          obj['createdTime'] = _ApiClient["default"].convertToType(data['createdTime'], 'String');
        }

        if (data.hasOwnProperty('unitAbbreviatedName')) {
          obj['unitAbbreviatedName'] = _ApiClient["default"].convertToType(data['unitAbbreviatedName'], 'String');
        }

        if (data.hasOwnProperty('unitId')) {
          obj['unitId'] = _ApiClient["default"].convertToType(data['unitId'], 'Number');
        }

        if (data.hasOwnProperty('durationOfAction')) {
          obj['durationOfAction'] = _ApiClient["default"].convertToType(data['durationOfAction'], 'Number');
        }

        if (data.hasOwnProperty('fillingValue')) {
          obj['fillingValue'] = _ApiClient["default"].convertToType(data['fillingValue'], 'Number');
        }

        if (data.hasOwnProperty('helpText')) {
          obj['helpText'] = _ApiClient["default"].convertToType(data['helpText'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('imageUrl')) {
          obj['imageUrl'] = _ApiClient["default"].convertToType(data['imageUrl'], 'String');
        }

        if (data.hasOwnProperty('ionIcon')) {
          obj['ionIcon'] = _ApiClient["default"].convertToType(data['ionIcon'], 'String');
        }

        if (data.hasOwnProperty('manualTracking')) {
          obj['manualTracking'] = _ApiClient["default"].convertToType(data['manualTracking'], 'Boolean');
        }

        if (data.hasOwnProperty('maximumAllowedValue')) {
          obj['maximumAllowedValue'] = _ApiClient["default"].convertToType(data['maximumAllowedValue'], 'String');
        }

        if (data.hasOwnProperty('measurementSynonymSingularLowercase')) {
          obj['measurementSynonymSingularLowercase'] = _ApiClient["default"].convertToType(data['measurementSynonymSingularLowercase'], 'String');
        }

        if (data.hasOwnProperty('minimumAllowedValue')) {
          obj['minimumAllowedValue'] = _ApiClient["default"].convertToType(data['minimumAllowedValue'], 'String');
        }

        if (data.hasOwnProperty('moreInfo')) {
          obj['moreInfo'] = _ApiClient["default"].convertToType(data['moreInfo'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('onsetDelay')) {
          obj['onsetDelay'] = _ApiClient["default"].convertToType(data['onsetDelay'], 'Number');
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

        if (data.hasOwnProperty('public')) {
          obj['public'] = _ApiClient["default"].convertToType(data['public'], 'Boolean');
        }

        if (data.hasOwnProperty('svgPath')) {
          obj['svgPath'] = _ApiClient["default"].convertToType(data['svgPath'], 'String');
        }

        if (data.hasOwnProperty('svgUrl')) {
          obj['svgUrl'] = _ApiClient["default"].convertToType(data['svgUrl'], 'String');
        }

        if (data.hasOwnProperty('updated')) {
          obj['updated'] = _ApiClient["default"].convertToType(data['updated'], 'Number');
        }

        if (data.hasOwnProperty('updatedTime')) {
          obj['updatedTime'] = _ApiClient["default"].convertToType(data['updatedTime'], 'String');
        }

        if (data.hasOwnProperty('variableCategoryName')) {
          obj['variableCategoryName'] = _ApiClient["default"].convertToType(data['variableCategoryName'], 'String');
        }

        if (data.hasOwnProperty('variableCategoryNameSingular')) {
          obj['variableCategoryNameSingular'] = _ApiClient["default"].convertToType(data['variableCategoryNameSingular'], 'String');
        }
      }

      return obj;
    }
  }]);

  return VariableCategory;
}();
/**
 * Ex: mood
 * @member {String} appType
 */


VariableCategory.prototype['appType'] = undefined;
/**
 * Ex: false
 * @member {Boolean} causeOnly
 */

VariableCategory.prototype['causeOnly'] = undefined;
/**
 * Ex: MEAN
 * @member {String} combinationOperation
 */

VariableCategory.prototype['combinationOperation'] = undefined;
/**
 * UTC ISO 8601 YYYY-MM-DDThh:mm:ss
 * @member {String} createdTime
 */

VariableCategory.prototype['createdTime'] = undefined;
/**
 * Ex: /5
 * @member {String} unitAbbreviatedName
 */

VariableCategory.prototype['unitAbbreviatedName'] = undefined;
/**
 * Ex: 10
 * @member {Number} unitId
 */

VariableCategory.prototype['unitId'] = undefined;
/**
 * User-Defined Variable Setting: The amount of time over which a predictor/stimulus event can exert an observable influence on an outcome variable value. For instance, aspirin (stimulus/predictor) typically decreases headache severity for approximately four hours (duration of action) following the onset delay.  Unit: Seconds
 * @member {Number} durationOfAction
 */

VariableCategory.prototype['durationOfAction'] = undefined;
/**
 * Ex: -1. Unit: Variable category default unit.
 * @member {Number} fillingValue
 */

VariableCategory.prototype['fillingValue'] = undefined;
/**
 * Ex: What emotion do you want to rate?
 * @member {String} helpText
 */

VariableCategory.prototype['helpText'] = undefined;
/**
 * Ex: 1
 * @member {Number} id
 */

VariableCategory.prototype['id'] = undefined;
/**
 * Ex: https://static.quantimo.do/img/variable_categories/theatre_mask-96.png
 * @member {String} imageUrl
 */

VariableCategory.prototype['imageUrl'] = undefined;
/**
 * Ex: ion-happy-outline
 * @member {String} ionIcon
 */

VariableCategory.prototype['ionIcon'] = undefined;
/**
 * Ex: true
 * @member {Boolean} manualTracking
 */

VariableCategory.prototype['manualTracking'] = undefined;
/**
 * Unit: Variable category default unit.
 * @member {String} maximumAllowedValue
 */

VariableCategory.prototype['maximumAllowedValue'] = undefined;
/**
 * Ex: rating
 * @member {String} measurementSynonymSingularLowercase
 */

VariableCategory.prototype['measurementSynonymSingularLowercase'] = undefined;
/**
 * Unit: Variable category default unit.
 * @member {String} minimumAllowedValue
 */

VariableCategory.prototype['minimumAllowedValue'] = undefined;
/**
 * Ex: Do you have any emotions that fluctuate regularly?  If so, add them so I can try to determine which factors are influencing them.
 * @member {String} moreInfo
 */

VariableCategory.prototype['moreInfo'] = undefined;
/**
 * Category name
 * @member {String} name
 */

VariableCategory.prototype['name'] = undefined;
/**
 * Ex: 0
 * @member {Number} onsetDelay
 */

VariableCategory.prototype['onsetDelay'] = undefined;
/**
 * Ex: true
 * @member {Boolean} outcome
 */

VariableCategory.prototype['outcome'] = undefined;
/**
 * Ex: img/variable_categories/emotions.png
 * @member {String} pngPath
 */

VariableCategory.prototype['pngPath'] = undefined;
/**
 * Ex: https://app.curedao.org/img/variable_categories/emotions.png
 * @member {String} pngUrl
 */

VariableCategory.prototype['pngUrl'] = undefined;
/**
 * Ex: true
 * @member {Boolean} public
 */

VariableCategory.prototype['public'] = undefined;
/**
 * Ex: img/variable_categories/emotions.svg
 * @member {String} svgPath
 */

VariableCategory.prototype['svgPath'] = undefined;
/**
 * Ex: https://app.curedao.org/img/variable_categories/emotions.svg
 * @member {String} svgUrl
 */

VariableCategory.prototype['svgUrl'] = undefined;
/**
 * Ex: 1
 * @member {Number} updated
 */

VariableCategory.prototype['updated'] = undefined;
/**
 * UTC ISO 8601 YYYY-MM-DDThh:mm:ss
 * @member {String} updatedTime
 */

VariableCategory.prototype['updatedTime'] = undefined;
/**
 * Ex: Emotions, Treatments, Symptoms...
 * @member {module:model/VariableCategory.VariableCategoryNameEnum} variableCategoryName
 */

VariableCategory.prototype['variableCategoryName'] = undefined;
/**
 * Ex: Emotion
 * @member {String} variableCategoryNameSingular
 */

VariableCategory.prototype['variableCategoryNameSingular'] = undefined;
/**
 * Allowed values for the <code>variableCategoryName</code> property.
 * @enum {String}
 * @readonly
 */

VariableCategory['VariableCategoryNameEnum'] = {
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
var _default = VariableCategory;
exports["default"] = _default;
