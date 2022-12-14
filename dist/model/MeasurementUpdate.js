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
 * The MeasurementUpdate model module.
 * @module model/MeasurementUpdate
 * @version 0.0.1
 */
var MeasurementUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MeasurementUpdate</code>.
   * @alias module:model/MeasurementUpdate
   * @param id {Number} Variable id of the measurement to be updated
   */
  function MeasurementUpdate(id) {
    _classCallCheck(this, MeasurementUpdate);

    MeasurementUpdate.initialize(this, id);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MeasurementUpdate, null, [{
    key: "initialize",
    value: function initialize(obj, id) {
      obj['id'] = id;
    }
    /**
     * Constructs a <code>MeasurementUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MeasurementUpdate} obj Optional instance to populate.
     * @return {module:model/MeasurementUpdate} The populated <code>MeasurementUpdate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MeasurementUpdate();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('note')) {
          obj['note'] = _ApiClient["default"].convertToType(data['note'], 'String');
        }

        if (data.hasOwnProperty('startTime')) {
          obj['startTime'] = _ApiClient["default"].convertToType(data['startTime'], 'Number');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return MeasurementUpdate;
}();
/**
 * Variable id of the measurement to be updated
 * @member {Number} id
 */


MeasurementUpdate.prototype['id'] = undefined;
/**
 * The new note for the measurement (optional)
 * @member {String} note
 */

MeasurementUpdate.prototype['note'] = undefined;
/**
 * The new timestamp for the the event in epoch seconds (optional)
 * @member {Number} startTime
 */

MeasurementUpdate.prototype['startTime'] = undefined;
/**
 * The new value of for the measurement (optional)
 * @member {Number} value
 */

MeasurementUpdate.prototype['value'] = undefined;
var _default = MeasurementUpdate;
exports["default"] = _default;