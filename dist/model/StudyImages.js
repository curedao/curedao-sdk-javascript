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
 * The StudyImages model module.
 * @module model/StudyImages
 * @version 0.0.1
 */
var StudyImages = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StudyImages</code>.
   * @alias module:model/StudyImages
   * @param gaugeImage {String} Ex: https://s3.amazonaws.com/curedao-docs/images/gauge-moderately-positive-relationship.png
   * @param gaugeImageSquare {String} Ex: https://s3.amazonaws.com/curedao-docs/images/gauge-moderately-positive-relationship-200-200.png
   * @param imageUrl {String} Ex: https://s3-us-west-1.amazonaws.com/qmimages/variable_categories_gauges_logo_background/gauge-moderately-positive-relationship_sleep_emotions_logo_background.png
   */
  function StudyImages(gaugeImage, gaugeImageSquare, imageUrl) {
    _classCallCheck(this, StudyImages);

    StudyImages.initialize(this, gaugeImage, gaugeImageSquare, imageUrl);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StudyImages, null, [{
    key: "initialize",
    value: function initialize(obj, gaugeImage, gaugeImageSquare, imageUrl) {
      obj['gaugeImage'] = gaugeImage;
      obj['gaugeImageSquare'] = gaugeImageSquare;
      obj['imageUrl'] = imageUrl;
    }
    /**
     * Constructs a <code>StudyImages</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StudyImages} obj Optional instance to populate.
     * @return {module:model/StudyImages} The populated <code>StudyImages</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StudyImages();

        if (data.hasOwnProperty('causeVariableImageUrl')) {
          obj['causeVariableImageUrl'] = _ApiClient["default"].convertToType(data['causeVariableImageUrl'], 'String');
        }

        if (data.hasOwnProperty('causeVariableIonIcon')) {
          obj['causeVariableIonIcon'] = _ApiClient["default"].convertToType(data['causeVariableIonIcon'], 'String');
        }

        if (data.hasOwnProperty('effectVariableImageUrl')) {
          obj['effectVariableImageUrl'] = _ApiClient["default"].convertToType(data['effectVariableImageUrl'], 'String');
        }

        if (data.hasOwnProperty('effectVariableIonIcon')) {
          obj['effectVariableIonIcon'] = _ApiClient["default"].convertToType(data['effectVariableIonIcon'], 'String');
        }

        if (data.hasOwnProperty('gaugeImage')) {
          obj['gaugeImage'] = _ApiClient["default"].convertToType(data['gaugeImage'], 'String');
        }

        if (data.hasOwnProperty('gaugeImageSquare')) {
          obj['gaugeImageSquare'] = _ApiClient["default"].convertToType(data['gaugeImageSquare'], 'String');
        }

        if (data.hasOwnProperty('gaugeSharingImageUrl')) {
          obj['gaugeSharingImageUrl'] = _ApiClient["default"].convertToType(data['gaugeSharingImageUrl'], 'String');
        }

        if (data.hasOwnProperty('imageUrl')) {
          obj['imageUrl'] = _ApiClient["default"].convertToType(data['imageUrl'], 'String');
        }

        if (data.hasOwnProperty('robotSharingImageUrl')) {
          obj['robotSharingImageUrl'] = _ApiClient["default"].convertToType(data['robotSharingImageUrl'], 'String');
        }

        if (data.hasOwnProperty('avatar')) {
          obj['avatar'] = _ApiClient["default"].convertToType(data['avatar'], 'String');
        }
      }

      return obj;
    }
  }]);

  return StudyImages;
}();
/**
 * Ex: https://static.quantimo.do/img/variable_categories/sleeping_in_bed-96.png
 * @member {String} causeVariableImageUrl
 */


StudyImages.prototype['causeVariableImageUrl'] = undefined;
/**
 * Ex: ion-ios-cloudy-night-outline
 * @member {String} causeVariableIonIcon
 */

StudyImages.prototype['causeVariableIonIcon'] = undefined;
/**
 * Ex: https://static.quantimo.do/img/variable_categories/theatre_mask-96.png
 * @member {String} effectVariableImageUrl
 */

StudyImages.prototype['effectVariableImageUrl'] = undefined;
/**
 * Ex: ion-happy-outline
 * @member {String} effectVariableIonIcon
 */

StudyImages.prototype['effectVariableIonIcon'] = undefined;
/**
 * Ex: https://s3.amazonaws.com/curedao-docs/images/gauge-moderately-positive-relationship.png
 * @member {String} gaugeImage
 */

StudyImages.prototype['gaugeImage'] = undefined;
/**
 * Ex: https://s3.amazonaws.com/curedao-docs/images/gauge-moderately-positive-relationship-200-200.png
 * @member {String} gaugeImageSquare
 */

StudyImages.prototype['gaugeImageSquare'] = undefined;
/**
 * Image with gauge and category images
 * @member {String} gaugeSharingImageUrl
 */

StudyImages.prototype['gaugeSharingImageUrl'] = undefined;
/**
 * Ex: https://s3-us-west-1.amazonaws.com/qmimages/variable_categories_gauges_logo_background/gauge-moderately-positive-relationship_sleep_emotions_logo_background.png
 * @member {String} imageUrl
 */

StudyImages.prototype['imageUrl'] = undefined;
/**
 * Image with robot and category images
 * @member {String} robotSharingImageUrl
 */

StudyImages.prototype['robotSharingImageUrl'] = undefined;
/**
 * Avatar of the principal investigator
 * @member {String} avatar
 */

StudyImages.prototype['avatar'] = undefined;
var _default = StudyImages;
exports["default"] = _default;
