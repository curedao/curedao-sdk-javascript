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
 * The ParticipantInstruction model module.
 * @module model/ParticipantInstruction
 * @version 0.0.1
 */
var ParticipantInstruction = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ParticipantInstruction</code>.
   * @alias module:model/ParticipantInstruction
   */
  function ParticipantInstruction() {
    _classCallCheck(this, ParticipantInstruction);

    ParticipantInstruction.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ParticipantInstruction, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ParticipantInstruction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ParticipantInstruction} obj Optional instance to populate.
     * @return {module:model/ParticipantInstruction} The populated <code>ParticipantInstruction</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ParticipantInstruction();

        if (data.hasOwnProperty('instructionsForCauseVariable')) {
          obj['instructionsForCauseVariable'] = _ApiClient["default"].convertToType(data['instructionsForCauseVariable'], 'String');
        }

        if (data.hasOwnProperty('instructionsForEffectVariable')) {
          obj['instructionsForEffectVariable'] = _ApiClient["default"].convertToType(data['instructionsForEffectVariable'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ParticipantInstruction;
}();
/**
 * Ex: <a href=\"https://www.amazon.com/Fitbit-Charge-Heart-Fitness-Wristband/dp/B01K9S260E/ref=as_li_ss_tl?ie=UTF8&qid=1493518902&sr=8-3&keywords=fitbit&th=1&linkCode=ll1&tag=quant08-20&linkId=b357b0833de73b0c4e935fd7c13a079e\">Obtain Fitbit</a> and use it to record your Sleep Duration. Once you have a <a href=\"https://www.amazon.com/Fitbit-Charge-Heart-Fitness-Wristband/dp/B01K9S260E/ref=as_li_ss_tl?ie=UTF8&qid=1493518902&sr=8-3&keywords=fitbit&th=1&linkCode=ll1&tag=quant08-20&linkId=b357b0833de73b0c4e935fd7c13a079e\">Fitbit</a> account, <a href=\"https://app.curedao.org/#/app/import\">connect your  Fitbit account at CureDAO</a> to automatically import and analyze your data.
 * @member {String} instructionsForCauseVariable
 */


ParticipantInstruction.prototype['instructionsForCauseVariable'] = undefined;
/**
 * Ex: <a href=\"https://curedao.org\">Obtain CureDAO</a> and use it to record your Overall Mood. Once you have a <a href=\"https://curedao.org\">CureDAO</a> account, <a href=\"https://app.curedao.org/#/app/import\">connect your  CureDAO account at CureDAO</a> to automatically import and analyze your data.
 * @member {String} instructionsForEffectVariable
 */

ParticipantInstruction.prototype['instructionsForEffectVariable'] = undefined;
var _default = ParticipantInstruction;
exports["default"] = _default;
