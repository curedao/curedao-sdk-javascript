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
 * The Vote model module.
 * @module model/Vote
 * @version 0.0.1
 */
var Vote = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Vote</code>.
   * @alias module:model/Vote
   * @param causeVariableId {Number} Cause variable id
   * @param clientId {String} Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org
   * @param effectVariableId {Number} Effect variable id
   * @param userId {Number} ID of User
   * @param value {module:model/Vote.ValueEnum} Vote down for implausible/not-useful or up for plausible/useful. Vote none to delete a previous vote.
   */
  function Vote(causeVariableId, clientId, effectVariableId, userId, value) {
    _classCallCheck(this, Vote);

    Vote.initialize(this, causeVariableId, clientId, effectVariableId, userId, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Vote, null, [{
    key: "initialize",
    value: function initialize(obj, causeVariableId, clientId, effectVariableId, userId, value) {
      obj['causeVariableId'] = causeVariableId;
      obj['clientId'] = clientId;
      obj['effectVariableId'] = effectVariableId;
      obj['userId'] = userId;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>Vote</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Vote} obj Optional instance to populate.
     * @return {module:model/Vote} The populated <code>Vote</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Vote();

        if (data.hasOwnProperty('causeVariableId')) {
          obj['causeVariableId'] = _ApiClient["default"].convertToType(data['causeVariableId'], 'Number');
        }

        if (data.hasOwnProperty('clientId')) {
          obj['clientId'] = _ApiClient["default"].convertToType(data['clientId'], 'String');
        }

        if (data.hasOwnProperty('createdAt')) {
          obj['createdAt'] = _ApiClient["default"].convertToType(data['createdAt'], 'String');
        }

        if (data.hasOwnProperty('effectVariableId')) {
          obj['effectVariableId'] = _ApiClient["default"].convertToType(data['effectVariableId'], 'Number');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('updatedAt')) {
          obj['updatedAt'] = _ApiClient["default"].convertToType(data['updatedAt'], 'String');
        }

        if (data.hasOwnProperty('userId')) {
          obj['userId'] = _ApiClient["default"].convertToType(data['userId'], 'Number');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Vote;
}();
/**
 * Cause variable id
 * @member {Number} causeVariableId
 */


Vote.prototype['causeVariableId'] = undefined;
/**
 * Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org
 * @member {String} clientId
 */

Vote.prototype['clientId'] = undefined;
/**
 * When the record was first created. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format
 * @member {String} createdAt
 */

Vote.prototype['createdAt'] = undefined;
/**
 * Effect variable id
 * @member {Number} effectVariableId
 */

Vote.prototype['effectVariableId'] = undefined;
/**
 * id
 * @member {Number} id
 */

Vote.prototype['id'] = undefined;
/**
 * When the record in the database was last updated. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format
 * @member {String} updatedAt
 */

Vote.prototype['updatedAt'] = undefined;
/**
 * ID of User
 * @member {Number} userId
 */

Vote.prototype['userId'] = undefined;
/**
 * Vote down for implausible/not-useful or up for plausible/useful. Vote none to delete a previous vote.
 * @member {module:model/Vote.ValueEnum} value
 */

Vote.prototype['value'] = undefined;
/**
 * Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org
 * @member {module:model/Vote.TypeEnum} type
 */

Vote.prototype['type'] = undefined;
/**
 * Allowed values for the <code>value</code> property.
 * @enum {String}
 * @readonly
 */

Vote['ValueEnum'] = {
  /**
   * value: "up"
   * @const
   */
  "up": "up",

  /**
   * value: "down"
   * @const
   */
  "down": "down",

  /**
   * value: "none"
   * @const
   */
  "none": "none"
};
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

Vote['TypeEnum'] = {
  /**
   * value: "causality"
   * @const
   */
  "causality": "causality",

  /**
   * value: "usefulness"
   * @const
   */
  "usefulness": "usefulness"
};
var _default = Vote;
exports["default"] = _default;
