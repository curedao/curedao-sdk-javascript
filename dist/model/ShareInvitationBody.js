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
 * The ShareInvitationBody model module.
 * @module model/ShareInvitationBody
 * @version 0.0.1
 */
var ShareInvitationBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ShareInvitationBody</code>.
   * @alias module:model/ShareInvitationBody
   * @param emailAddress {String} Enter the email address of the friend, family member, or health-care provider that you would like to give access to your measurements
   */
  function ShareInvitationBody(emailAddress) {
    _classCallCheck(this, ShareInvitationBody);

    ShareInvitationBody.initialize(this, emailAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ShareInvitationBody, null, [{
    key: "initialize",
    value: function initialize(obj, emailAddress) {
      obj['emailAddress'] = emailAddress;
    }
    /**
     * Constructs a <code>ShareInvitationBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShareInvitationBody} obj Optional instance to populate.
     * @return {module:model/ShareInvitationBody} The populated <code>ShareInvitationBody</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ShareInvitationBody();

        if (data.hasOwnProperty('emailAddress')) {
          obj['emailAddress'] = _ApiClient["default"].convertToType(data['emailAddress'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('emailSubject')) {
          obj['emailSubject'] = _ApiClient["default"].convertToType(data['emailSubject'], 'String');
        }

        if (data.hasOwnProperty('emailBody')) {
          obj['emailBody'] = _ApiClient["default"].convertToType(data['emailBody'], 'String');
        }

        if (data.hasOwnProperty('scopes')) {
          obj['scopes'] = _ApiClient["default"].convertToType(data['scopes'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ShareInvitationBody;
}();
/**
 * Enter the email address of the friend, family member, or health-care provider that you would like to give access to your measurements
 * @member {String} emailAddress
 */


ShareInvitationBody.prototype['emailAddress'] = undefined;
/**
 * Name of the individual that the user wishes to have access to their measurements
 * @member {String} name
 */

ShareInvitationBody.prototype['name'] = undefined;
/**
 * Ex: I would like to share my measurements with you!
 * @member {String} emailSubject
 */

ShareInvitationBody.prototype['emailSubject'] = undefined;
/**
 * Ex: I would like to share my data with you so you can help me identify find discover hidden causes of and new treatments for my illness.
 * @member {String} emailBody
 */

ShareInvitationBody.prototype['emailBody'] = undefined;
/**
 * Space separated list of scopes to grant to the recipient (i.e. readmeasurements, writemeasurements, measurements:read
 * @member {String} scopes
 */

ShareInvitationBody.prototype['scopes'] = undefined;
var _default = ShareInvitationBody;
exports["default"] = _default;