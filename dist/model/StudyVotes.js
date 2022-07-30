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
 * The StudyVotes model module.
 * @module model/StudyVotes
 * @version 0.0.1
 */
var StudyVotes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StudyVotes</code>.
   * @alias module:model/StudyVotes
   * @param averageVote {Number} Average of all user votes with 1 representing an up-vote and 0 representing a down-vote. Ex: 0.9855
   * @param userVote {Number} 1 if the current user has up-voted the study and 0 if they down-voted it. Null means no vote. Ex: 1 or 0 or null
   */
  function StudyVotes(averageVote, userVote) {
    _classCallCheck(this, StudyVotes);

    StudyVotes.initialize(this, averageVote, userVote);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StudyVotes, null, [{
    key: "initialize",
    value: function initialize(obj, averageVote, userVote) {
      obj['averageVote'] = averageVote;
      obj['userVote'] = userVote;
    }
    /**
     * Constructs a <code>StudyVotes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StudyVotes} obj Optional instance to populate.
     * @return {module:model/StudyVotes} The populated <code>StudyVotes</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StudyVotes();

        if (data.hasOwnProperty('averageVote')) {
          obj['averageVote'] = _ApiClient["default"].convertToType(data['averageVote'], 'Number');
        }

        if (data.hasOwnProperty('userVote')) {
          obj['userVote'] = _ApiClient["default"].convertToType(data['userVote'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return StudyVotes;
}();
/**
 * Average of all user votes with 1 representing an up-vote and 0 representing a down-vote. Ex: 0.9855
 * @member {Number} averageVote
 */


StudyVotes.prototype['averageVote'] = undefined;
/**
 * 1 if the current user has up-voted the study and 0 if they down-voted it. Null means no vote. Ex: 1 or 0 or null
 * @member {Number} userVote
 */

StudyVotes.prototype['userVote'] = undefined;
var _default = StudyVotes;
exports["default"] = _default;