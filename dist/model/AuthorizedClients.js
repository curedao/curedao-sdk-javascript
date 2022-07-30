"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AppSettings = _interopRequireDefault(require("./AppSettings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The AuthorizedClients model module.
 * @module model/AuthorizedClients
 * @version 0.0.1
 */
var AuthorizedClients = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AuthorizedClients</code>.
   * @alias module:model/AuthorizedClients
   * @param apps {Array.<module:model/AppSettings>} Applications with access to user measurements for all variables
   * @param individuals {Array.<module:model/AppSettings>} Individuals such as physicians or family members with access to user measurements for all variables
   * @param studies {Array.<module:model/AppSettings>} Studies with access to generally anonymous user measurements for a specific predictor and outcome variable
   */
  function AuthorizedClients(apps, individuals, studies) {
    _classCallCheck(this, AuthorizedClients);

    AuthorizedClients.initialize(this, apps, individuals, studies);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AuthorizedClients, null, [{
    key: "initialize",
    value: function initialize(obj, apps, individuals, studies) {
      obj['apps'] = apps;
      obj['individuals'] = individuals;
      obj['studies'] = studies;
    }
    /**
     * Constructs a <code>AuthorizedClients</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthorizedClients} obj Optional instance to populate.
     * @return {module:model/AuthorizedClients} The populated <code>AuthorizedClients</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuthorizedClients();

        if (data.hasOwnProperty('apps')) {
          obj['apps'] = _ApiClient["default"].convertToType(data['apps'], [_AppSettings["default"]]);
        }

        if (data.hasOwnProperty('individuals')) {
          obj['individuals'] = _ApiClient["default"].convertToType(data['individuals'], [_AppSettings["default"]]);
        }

        if (data.hasOwnProperty('studies')) {
          obj['studies'] = _ApiClient["default"].convertToType(data['studies'], [_AppSettings["default"]]);
        }
      }

      return obj;
    }
  }]);

  return AuthorizedClients;
}();
/**
 * Applications with access to user measurements for all variables
 * @member {Array.<module:model/AppSettings>} apps
 */


AuthorizedClients.prototype['apps'] = undefined;
/**
 * Individuals such as physicians or family members with access to user measurements for all variables
 * @member {Array.<module:model/AppSettings>} individuals
 */

AuthorizedClients.prototype['individuals'] = undefined;
/**
 * Studies with access to generally anonymous user measurements for a specific predictor and outcome variable
 * @member {Array.<module:model/AppSettings>} studies
 */

AuthorizedClients.prototype['studies'] = undefined;
var _default = AuthorizedClients;
exports["default"] = _default;