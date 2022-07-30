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
 * The StudyCreationBody model module.
 * @module model/StudyCreationBody
 * @version 0.0.1
 */
var StudyCreationBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StudyCreationBody</code>.
   * @alias module:model/StudyCreationBody
   * @param causeVariableName {String} Name of predictor variable
   * @param effectVariableName {String} Name of the outcome variable
   * @param type {module:model/StudyCreationBody.TypeEnum} Individual studies are based on data of a single user. Group studies are based on data from a specific group of individuals who have joined.  Global studies are based on aggregated and anonymously shared data from all users.
   */
  function StudyCreationBody(causeVariableName, effectVariableName, type) {
    _classCallCheck(this, StudyCreationBody);

    StudyCreationBody.initialize(this, causeVariableName, effectVariableName, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StudyCreationBody, null, [{
    key: "initialize",
    value: function initialize(obj, causeVariableName, effectVariableName, type) {
      obj['causeVariableName'] = causeVariableName;
      obj['effectVariableName'] = effectVariableName;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>StudyCreationBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StudyCreationBody} obj Optional instance to populate.
     * @return {module:model/StudyCreationBody} The populated <code>StudyCreationBody</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StudyCreationBody();

        if (data.hasOwnProperty('causeVariableName')) {
          obj['causeVariableName'] = _ApiClient["default"].convertToType(data['causeVariableName'], 'String');
        }

        if (data.hasOwnProperty('effectVariableName')) {
          obj['effectVariableName'] = _ApiClient["default"].convertToType(data['effectVariableName'], 'String');
        }

        if (data.hasOwnProperty('studyTitle')) {
          obj['studyTitle'] = _ApiClient["default"].convertToType(data['studyTitle'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return StudyCreationBody;
}();
/**
 * Name of predictor variable
 * @member {String} causeVariableName
 */


StudyCreationBody.prototype['causeVariableName'] = undefined;
/**
 * Name of the outcome variable
 * @member {String} effectVariableName
 */

StudyCreationBody.prototype['effectVariableName'] = undefined;
/**
 * Title of your study (optional)
 * @member {String} studyTitle
 */

StudyCreationBody.prototype['studyTitle'] = undefined;
/**
 * Individual studies are based on data of a single user. Group studies are based on data from a specific group of individuals who have joined.  Global studies are based on aggregated and anonymously shared data from all users.
 * @member {module:model/StudyCreationBody.TypeEnum} type
 */

StudyCreationBody.prototype['type'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

StudyCreationBody['TypeEnum'] = {
  /**
   * value: "individual"
   * @const
   */
  "individual": "individual",

  /**
   * value: "group"
   * @const
   */
  "group": "group",

  /**
   * value: "global"
   * @const
   */
  "global": "global"
};
var _default = StudyCreationBody;
exports["default"] = _default;