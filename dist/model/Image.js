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
 * The Image model module.
 * @module model/Image
 * @version 0.0.1
 */
var Image = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Image</code>.
   * @alias module:model/Image
   * @param height {String} Ex: 240
   * @param imageUrl {String} Ex: https://www.filepicker.io/api/file/TjmeNWS5Q2SFmtJlUGLf
   * @param width {String} Ex: 224
   */
  function Image(height, imageUrl, width) {
    _classCallCheck(this, Image);

    Image.initialize(this, height, imageUrl, width);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Image, null, [{
    key: "initialize",
    value: function initialize(obj, height, imageUrl, width) {
      obj['height'] = height;
      obj['imageUrl'] = imageUrl;
      obj['width'] = width;
    }
    /**
     * Constructs a <code>Image</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Image} obj Optional instance to populate.
     * @return {module:model/Image} The populated <code>Image</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Image();

        if (data.hasOwnProperty('height')) {
          obj['height'] = _ApiClient["default"].convertToType(data['height'], 'String');
        }

        if (data.hasOwnProperty('imageUrl')) {
          obj['imageUrl'] = _ApiClient["default"].convertToType(data['imageUrl'], 'String');
        }

        if (data.hasOwnProperty('width')) {
          obj['width'] = _ApiClient["default"].convertToType(data['width'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Image;
}();
/**
 * Ex: 240
 * @member {String} height
 */


Image.prototype['height'] = undefined;
/**
 * Ex: https://www.filepicker.io/api/file/TjmeNWS5Q2SFmtJlUGLf
 * @member {String} imageUrl
 */

Image.prototype['imageUrl'] = undefined;
/**
 * Ex: 224
 * @member {String} width
 */

Image.prototype['width'] = undefined;
var _default = Image;
exports["default"] = _default;