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
 * The UserVariableDelete model module.
 * @module model/UserVariableDelete
 * @version 0.0.1
 */
var UserVariableDelete = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UserVariableDelete</code>.
   * @alias module:model/UserVariableDelete
   * @param variableId {Number} Id of the variable whose measurements should be deleted
   */
  function UserVariableDelete(variableId) {
    _classCallCheck(this, UserVariableDelete);

    UserVariableDelete.initialize(this, variableId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserVariableDelete, null, [{
    key: "initialize",
    value: function initialize(obj, variableId) {
      obj['variableId'] = variableId;
    }
    /**
     * Constructs a <code>UserVariableDelete</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserVariableDelete} obj Optional instance to populate.
     * @return {module:model/UserVariableDelete} The populated <code>UserVariableDelete</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserVariableDelete();

        if (data.hasOwnProperty('variableId')) {
          obj['variableId'] = _ApiClient["default"].convertToType(data['variableId'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return UserVariableDelete;
}();
/**
 * Id of the variable whose measurements should be deleted
 * @member {Number} variableId
 */


UserVariableDelete.prototype['variableId'] = undefined;
var _default = UserVariableDelete;
exports["default"] = _default;