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
 * The UserTag model module.
 * @module model/UserTag
 * @version 0.0.1
 */
var UserTag = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UserTag</code>.
   * @alias module:model/UserTag
   * @param conversionFactor {Number} Number by which we multiply the tagged variable value to obtain the tag variable (ingredient) value
   * @param taggedVariableId {Number} This is the id of the variable being tagged with an ingredient or something.
   * @param tagVariableId {Number} This is the id of the ingredient variable whose value is determined based on the value of the tagged variable.
   */
  function UserTag(conversionFactor, taggedVariableId, tagVariableId) {
    _classCallCheck(this, UserTag);

    UserTag.initialize(this, conversionFactor, taggedVariableId, tagVariableId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserTag, null, [{
    key: "initialize",
    value: function initialize(obj, conversionFactor, taggedVariableId, tagVariableId) {
      obj['conversionFactor'] = conversionFactor;
      obj['taggedVariableId'] = taggedVariableId;
      obj['tagVariableId'] = tagVariableId;
    }
    /**
     * Constructs a <code>UserTag</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserTag} obj Optional instance to populate.
     * @return {module:model/UserTag} The populated <code>UserTag</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserTag();

        if (data.hasOwnProperty('conversionFactor')) {
          obj['conversionFactor'] = _ApiClient["default"].convertToType(data['conversionFactor'], 'Number');
        }

        if (data.hasOwnProperty('taggedVariableId')) {
          obj['taggedVariableId'] = _ApiClient["default"].convertToType(data['taggedVariableId'], 'Number');
        }

        if (data.hasOwnProperty('tagVariableId')) {
          obj['tagVariableId'] = _ApiClient["default"].convertToType(data['tagVariableId'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return UserTag;
}();
/**
 * Number by which we multiply the tagged variable value to obtain the tag variable (ingredient) value
 * @member {Number} conversionFactor
 */


UserTag.prototype['conversionFactor'] = undefined;
/**
 * This is the id of the variable being tagged with an ingredient or something.
 * @member {Number} taggedVariableId
 */

UserTag.prototype['taggedVariableId'] = undefined;
/**
 * This is the id of the ingredient variable whose value is determined based on the value of the tagged variable.
 * @member {Number} tagVariableId
 */

UserTag.prototype['tagVariableId'] = undefined;
var _default = UserTag;
exports["default"] = _default;