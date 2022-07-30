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
 * The StudyLinks model module.
 * @module model/StudyLinks
 * @version 0.0.1
 */
var StudyLinks = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StudyLinks</code>.
   * @alias module:model/StudyLinks
   * @param studyLinkEmail {String} Ex: mailto:?subject=N1%20Study%3A%20Sleep%20Quality%20Predicts%20Higher%20Overall%20Mood&body=Check%20out%20my%20study%20at%20https%3A%2F%2Flocal.curedao.org%2Fapi%2Fv2%2Fstudy%3FcauseVariableName%3DSleep%2520Quality%26effectVariableName%3DOverall%2520Mood%26userId%3D230%0A%0AHave%20a%20great%20day!
   * @param studyLinkFacebook {String} Ex: https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flocal.curedao.org%2Fapi%2Fv2%2Fstudy%3FcauseVariableName%3DSleep%2520Quality%26effectVariableName%3DOverall%2520Mood%26userId%3D230
   * @param studyLinkGoogle {String} Ex: https://plus.google.com/share?url=https%3A%2F%2Flocal.curedao.org%2Fapi%2Fv2%2Fstudy%3FcauseVariableName%3DSleep%2520Quality%26effectVariableName%3DOverall%2520Mood%26userId%3D230
   * @param studyLinkStatic {String} Ex: https://local.curedao.org/api/v2/study?causeVariableName=Sleep%20Quality&effectVariableName=Overall%20Mood&userId=230
   * @param studyLinkDynamic {String} Ex: https://local.curedao.org/ionic/Modo/www/index.html#/app/study?causeVariableName=Sleep%20Quality&effectVariableName=Overall%20Mood&userId=230
   * @param studyLinkTwitter {String} Ex: https://twitter.com/home?status=Sleep%20Quality%20Predicts%20Higher%20Overall%20Mood%20https%3A%2F%2Flocal.curedao.org%2Fapi%2Fv2%2Fstudy%3FcauseVariableName%3DSleep%2520Quality%26effectVariableName%3DOverall%2520Mood%26userId%3D230%20%40curedao
   */
  function StudyLinks(studyLinkEmail, studyLinkFacebook, studyLinkGoogle, studyLinkStatic, studyLinkDynamic, studyLinkTwitter) {
    _classCallCheck(this, StudyLinks);

    StudyLinks.initialize(this, studyLinkEmail, studyLinkFacebook, studyLinkGoogle, studyLinkStatic, studyLinkDynamic, studyLinkTwitter);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StudyLinks, null, [{
    key: "initialize",
    value: function initialize(obj, studyLinkEmail, studyLinkFacebook, studyLinkGoogle, studyLinkStatic, studyLinkDynamic, studyLinkTwitter) {
      obj['studyLinkEmail'] = studyLinkEmail;
      obj['studyLinkFacebook'] = studyLinkFacebook;
      obj['studyLinkGoogle'] = studyLinkGoogle;
      obj['studyLinkStatic'] = studyLinkStatic;
      obj['studyLinkDynamic'] = studyLinkDynamic;
      obj['studyLinkTwitter'] = studyLinkTwitter;
    }
    /**
     * Constructs a <code>StudyLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StudyLinks} obj Optional instance to populate.
     * @return {module:model/StudyLinks} The populated <code>StudyLinks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StudyLinks();

        if (data.hasOwnProperty('studyJoinLink')) {
          obj['studyJoinLink'] = _ApiClient["default"].convertToType(data['studyJoinLink'], 'String');
        }

        if (data.hasOwnProperty('studyLinkEmail')) {
          obj['studyLinkEmail'] = _ApiClient["default"].convertToType(data['studyLinkEmail'], 'String');
        }

        if (data.hasOwnProperty('studyLinkFacebook')) {
          obj['studyLinkFacebook'] = _ApiClient["default"].convertToType(data['studyLinkFacebook'], 'String');
        }

        if (data.hasOwnProperty('studyLinkGoogle')) {
          obj['studyLinkGoogle'] = _ApiClient["default"].convertToType(data['studyLinkGoogle'], 'String');
        }

        if (data.hasOwnProperty('studyLinkStatic')) {
          obj['studyLinkStatic'] = _ApiClient["default"].convertToType(data['studyLinkStatic'], 'String');
        }

        if (data.hasOwnProperty('studyLinkDynamic')) {
          obj['studyLinkDynamic'] = _ApiClient["default"].convertToType(data['studyLinkDynamic'], 'String');
        }

        if (data.hasOwnProperty('studyLinkTwitter')) {
          obj['studyLinkTwitter'] = _ApiClient["default"].convertToType(data['studyLinkTwitter'], 'String');
        }
      }

      return obj;
    }
  }]);

  return StudyLinks;
}();
/**
 * Share this link with potential study participants
 * @member {String} studyJoinLink
 */


StudyLinks.prototype['studyJoinLink'] = undefined;
/**
 * Ex: mailto:?subject=N1%20Study%3A%20Sleep%20Quality%20Predicts%20Higher%20Overall%20Mood&body=Check%20out%20my%20study%20at%20https%3A%2F%2Flocal.curedao.org%2Fapi%2Fv2%2Fstudy%3FcauseVariableName%3DSleep%2520Quality%26effectVariableName%3DOverall%2520Mood%26userId%3D230%0A%0AHave%20a%20great%20day!
 * @member {String} studyLinkEmail
 */

StudyLinks.prototype['studyLinkEmail'] = undefined;
/**
 * Ex: https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flocal.curedao.org%2Fapi%2Fv2%2Fstudy%3FcauseVariableName%3DSleep%2520Quality%26effectVariableName%3DOverall%2520Mood%26userId%3D230
 * @member {String} studyLinkFacebook
 */

StudyLinks.prototype['studyLinkFacebook'] = undefined;
/**
 * Ex: https://plus.google.com/share?url=https%3A%2F%2Flocal.curedao.org%2Fapi%2Fv2%2Fstudy%3FcauseVariableName%3DSleep%2520Quality%26effectVariableName%3DOverall%2520Mood%26userId%3D230
 * @member {String} studyLinkGoogle
 */

StudyLinks.prototype['studyLinkGoogle'] = undefined;
/**
 * Ex: https://local.curedao.org/api/v2/study?causeVariableName=Sleep%20Quality&effectVariableName=Overall%20Mood&userId=230
 * @member {String} studyLinkStatic
 */

StudyLinks.prototype['studyLinkStatic'] = undefined;
/**
 * Ex: https://local.curedao.org/ionic/Modo/www/index.html#/app/study?causeVariableName=Sleep%20Quality&effectVariableName=Overall%20Mood&userId=230
 * @member {String} studyLinkDynamic
 */

StudyLinks.prototype['studyLinkDynamic'] = undefined;
/**
 * Ex: https://twitter.com/home?status=Sleep%20Quality%20Predicts%20Higher%20Overall%20Mood%20https%3A%2F%2Flocal.curedao.org%2Fapi%2Fv2%2Fstudy%3FcauseVariableName%3DSleep%2520Quality%26effectVariableName%3DOverall%2520Mood%26userId%3D230%20%40curedao
 * @member {String} studyLinkTwitter
 */

StudyLinks.prototype['studyLinkTwitter'] = undefined;
var _default = StudyLinks;
exports["default"] = _default;
