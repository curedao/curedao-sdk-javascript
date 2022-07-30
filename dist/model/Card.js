"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Button = _interopRequireDefault(require("./Button"));

var _InputField = _interopRequireDefault(require("./InputField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Card model module.
 * @module model/Card
 * @version 0.0.1
 */
var Card = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Card</code>.
   * @alias module:model/Card
   * @param id {String} HTML element id
   */
  function Card(id) {
    _classCallCheck(this, Card);

    Card.initialize(this, id);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Card, null, [{
    key: "initialize",
    value: function initialize(obj, id) {
      obj['id'] = id;
    }
    /**
     * Constructs a <code>Card</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Card} obj Optional instance to populate.
     * @return {module:model/Card} The populated <code>Card</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Card();

        if (data.hasOwnProperty('actionSheetButtons')) {
          obj['actionSheetButtons'] = _ApiClient["default"].convertToType(data['actionSheetButtons'], [_Button["default"]]);
        }

        if (data.hasOwnProperty('avatar')) {
          obj['avatar'] = _ApiClient["default"].convertToType(data['avatar'], 'String');
        }

        if (data.hasOwnProperty('avatarCircular')) {
          obj['avatarCircular'] = _ApiClient["default"].convertToType(data['avatarCircular'], 'String');
        }

        if (data.hasOwnProperty('backgroundColor')) {
          obj['backgroundColor'] = _ApiClient["default"].convertToType(data['backgroundColor'], 'String');
        }

        if (data.hasOwnProperty('buttons')) {
          obj['buttons'] = _ApiClient["default"].convertToType(data['buttons'], [_Button["default"]]);
        }

        if (data.hasOwnProperty('buttonsSecondary')) {
          obj['buttonsSecondary'] = _ApiClient["default"].convertToType(data['buttonsSecondary'], [_Button["default"]]);
        }

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], 'String');
        }

        if (data.hasOwnProperty('headerTitle')) {
          obj['headerTitle'] = _ApiClient["default"].convertToType(data['headerTitle'], 'String');
        }

        if (data.hasOwnProperty('html')) {
          obj['html'] = _ApiClient["default"].convertToType(data['html'], 'String');
        }

        if (data.hasOwnProperty('htmlContent')) {
          obj['htmlContent'] = _ApiClient["default"].convertToType(data['htmlContent'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('image')) {
          obj['image'] = _ApiClient["default"].convertToType(data['image'], 'String');
        }

        if (data.hasOwnProperty('inputFields')) {
          obj['inputFields'] = _ApiClient["default"].convertToType(data['inputFields'], [_InputField["default"]]);
        }

        if (data.hasOwnProperty('ionIcon')) {
          obj['ionIcon'] = _ApiClient["default"].convertToType(data['ionIcon'], 'String');
        }

        if (data.hasOwnProperty('link')) {
          obj['link'] = _ApiClient["default"].convertToType(data['link'], 'String');
        }

        if (data.hasOwnProperty('parameters')) {
          obj['parameters'] = _ApiClient["default"].convertToType(data['parameters'], Object);
        }

        if (data.hasOwnProperty('relatedCards')) {
          obj['relatedCards'] = _ApiClient["default"].convertToType(data['relatedCards'], [Card]);
        }

        if (data.hasOwnProperty('selectedButton')) {
          obj['selectedButton'] = _Button["default"].constructFromObject(data['selectedButton']);
        }

        if (data.hasOwnProperty('sharingBody')) {
          obj['sharingBody'] = _ApiClient["default"].convertToType(data['sharingBody'], 'String');
        }

        if (data.hasOwnProperty('sharingButtons')) {
          obj['sharingButtons'] = _ApiClient["default"].convertToType(data['sharingButtons'], [_Button["default"]]);
        }

        if (data.hasOwnProperty('sharingTitle')) {
          obj['sharingTitle'] = _ApiClient["default"].convertToType(data['sharingTitle'], 'String');
        }

        if (data.hasOwnProperty('subHeader')) {
          obj['subHeader'] = _ApiClient["default"].convertToType(data['subHeader'], 'String');
        }

        if (data.hasOwnProperty('subTitle')) {
          obj['subTitle'] = _ApiClient["default"].convertToType(data['subTitle'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Card;
}();
/**
 * @member {Array.<module:model/Button>} actionSheetButtons
 */


Card.prototype['actionSheetButtons'] = undefined;
/**
 * Smaller square image
 * @member {String} avatar
 */

Card.prototype['avatar'] = undefined;
/**
 * Smaller circular image
 * @member {String} avatarCircular
 */

Card.prototype['avatarCircular'] = undefined;
/**
 * Ex: #f2f2f2
 * @member {String} backgroundColor
 */

Card.prototype['backgroundColor'] = undefined;
/**
 * @member {Array.<module:model/Button>} buttons
 */

Card.prototype['buttons'] = undefined;
/**
 * @member {Array.<module:model/Button>} buttonsSecondary
 */

Card.prototype['buttonsSecondary'] = undefined;
/**
 * Ex: Content
 * @member {String} content
 */

Card.prototype['content'] = undefined;
/**
 * Ex: Title
 * @member {String} headerTitle
 */

Card.prototype['headerTitle'] = undefined;
/**
 * HTML for the entire card.
 * @member {String} html
 */

Card.prototype['html'] = undefined;
/**
 * Ex: <div>Content</div>
 * @member {String} htmlContent
 */

Card.prototype['htmlContent'] = undefined;
/**
 * HTML element id
 * @member {String} id
 */

Card.prototype['id'] = undefined;
/**
 * Larger image of variable dimensions
 * @member {String} image
 */

Card.prototype['image'] = undefined;
/**
 * @member {Array.<module:model/InputField>} inputFields
 */

Card.prototype['inputFields'] = undefined;
/**
 * Ex: ion-refresh
 * @member {String} ionIcon
 */

Card.prototype['ionIcon'] = undefined;
/**
 * A link to a web page or something. Not much more to say about that.
 * @member {String} link
 */

Card.prototype['link'] = undefined;
/**
 * Key value pairs derived from user input fields, button clicks, or preset defaults
 * @member {Object} parameters
 */

Card.prototype['parameters'] = undefined;
/**
 * @member {Array.<module:model/Card>} relatedCards
 */

Card.prototype['relatedCards'] = undefined;
/**
 * @member {module:model/Button} selectedButton
 */

Card.prototype['selectedButton'] = undefined;
/**
 * Ex: sharingBody
 * @member {String} sharingBody
 */

Card.prototype['sharingBody'] = undefined;
/**
 * @member {Array.<module:model/Button>} sharingButtons
 */

Card.prototype['sharingButtons'] = undefined;
/**
 * Ex: sharingTitle
 * @member {String} sharingTitle
 */

Card.prototype['sharingTitle'] = undefined;
/**
 * Ex: subTitle
 * @member {String} subHeader
 */

Card.prototype['subHeader'] = undefined;
/**
 * Ex: subTitle
 * @member {String} subTitle
 */

Card.prototype['subTitle'] = undefined;
/**
 * Ex: Title
 * @member {String} title
 */

Card.prototype['title'] = undefined;
var _default = Card;
exports["default"] = _default;