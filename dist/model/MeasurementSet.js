"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MeasurementItem = _interopRequireDefault(require("./MeasurementItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The MeasurementSet model module.
 * @module model/MeasurementSet
 * @version 0.0.1
 */
var MeasurementSet = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MeasurementSet</code>.
   * @alias module:model/MeasurementSet
   * @param measurementItems {Array.<module:model/MeasurementItem>} Array of timestamps, values, and optional notes
   * @param sourceName {String} Name of the application or device used to record the measurement values
   * @param unitAbbreviatedName {String} Unit of measurement
   * @param variableName {String} ORIGINAL name of the variable for which we are creating the measurement records
   */
  function MeasurementSet(measurementItems, sourceName, unitAbbreviatedName, variableName) {
    _classCallCheck(this, MeasurementSet);

    MeasurementSet.initialize(this, measurementItems, sourceName, unitAbbreviatedName, variableName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MeasurementSet, null, [{
    key: "initialize",
    value: function initialize(obj, measurementItems, sourceName, unitAbbreviatedName, variableName) {
      obj['measurementItems'] = measurementItems;
      obj['sourceName'] = sourceName;
      obj['unitAbbreviatedName'] = unitAbbreviatedName;
      obj['variableName'] = variableName;
    }
    /**
     * Constructs a <code>MeasurementSet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MeasurementSet} obj Optional instance to populate.
     * @return {module:model/MeasurementSet} The populated <code>MeasurementSet</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MeasurementSet();

        if (data.hasOwnProperty('combinationOperation')) {
          obj['combinationOperation'] = _ApiClient["default"].convertToType(data['combinationOperation'], 'String');
        }

        if (data.hasOwnProperty('measurementItems')) {
          obj['measurementItems'] = _ApiClient["default"].convertToType(data['measurementItems'], [_MeasurementItem["default"]]);
        }

        if (data.hasOwnProperty('sourceName')) {
          obj['sourceName'] = _ApiClient["default"].convertToType(data['sourceName'], 'String');
        }

        if (data.hasOwnProperty('unitAbbreviatedName')) {
          obj['unitAbbreviatedName'] = _ApiClient["default"].convertToType(data['unitAbbreviatedName'], 'String');
        }

        if (data.hasOwnProperty('variableCategoryName')) {
          obj['variableCategoryName'] = _ApiClient["default"].convertToType(data['variableCategoryName'], 'String');
        }

        if (data.hasOwnProperty('variableName')) {
          obj['variableName'] = _ApiClient["default"].convertToType(data['variableName'], 'String');
        }

        if (data.hasOwnProperty('upc')) {
          obj['upc'] = _ApiClient["default"].convertToType(data['upc'], 'String');
        }
      }

      return obj;
    }
  }]);

  return MeasurementSet;
}();
/**
 * Way to aggregate measurements over time. SUM should be used for things like minutes of exercise.  If you use MEAN for exercise, then a person might exercise more minutes in one day but add separate measurements that were smaller.  So when we are doing correlational analysis, we would think that the person exercised less that day even though they exercised more.  Conversely, we must use MEAN for things such as ratings which cannot be SUMMED.
 * @member {module:model/MeasurementSet.CombinationOperationEnum} combinationOperation
 */


MeasurementSet.prototype['combinationOperation'] = undefined;
/**
 * Array of timestamps, values, and optional notes
 * @member {Array.<module:model/MeasurementItem>} measurementItems
 */

MeasurementSet.prototype['measurementItems'] = undefined;
/**
 * Name of the application or device used to record the measurement values
 * @member {String} sourceName
 */

MeasurementSet.prototype['sourceName'] = undefined;
/**
 * Unit of measurement
 * @member {String} unitAbbreviatedName
 */

MeasurementSet.prototype['unitAbbreviatedName'] = undefined;
/**
 * Ex: Emotions, Treatments, Symptoms...
 * @member {module:model/MeasurementSet.VariableCategoryNameEnum} variableCategoryName
 */

MeasurementSet.prototype['variableCategoryName'] = undefined;
/**
 * ORIGINAL name of the variable for which we are creating the measurement records
 * @member {String} variableName
 */

MeasurementSet.prototype['variableName'] = undefined;
/**
 * UPC or other barcode scan result
 * @member {String} upc
 */

MeasurementSet.prototype['upc'] = undefined;
/**
 * Allowed values for the <code>combinationOperation</code> property.
 * @enum {String}
 * @readonly
 */

MeasurementSet['CombinationOperationEnum'] = {
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

MeasurementSet['VariableCategoryNameEnum'] = {
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
var _default = MeasurementSet;
exports["default"] = _default;