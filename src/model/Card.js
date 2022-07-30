/**
 * CureDAO Unified Health API
 * A community-owned platform for crowdsourced clinical research
 *
 * The version of the OpenAPI document: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Button from './Button';
import InputField from './InputField';

/**
 * The Card model module.
 * @module model/Card
 * @version 0.0.1
 */
class Card {
    /**
     * Constructs a new <code>Card</code>.
     * @alias module:model/Card
     * @param id {String} HTML element id
     */
    constructor(id) {

        Card.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) {
        obj['id'] = id;
    }

    /**
     * Constructs a <code>Card</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Card} obj Optional instance to populate.
     * @return {module:model/Card} The populated <code>Card</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Card();

            if (data.hasOwnProperty('actionSheetButtons')) {
                obj['actionSheetButtons'] = ApiClient.convertToType(data['actionSheetButtons'], [Button]);
            }
            if (data.hasOwnProperty('avatar')) {
                obj['avatar'] = ApiClient.convertToType(data['avatar'], 'String');
            }
            if (data.hasOwnProperty('avatarCircular')) {
                obj['avatarCircular'] = ApiClient.convertToType(data['avatarCircular'], 'String');
            }
            if (data.hasOwnProperty('backgroundColor')) {
                obj['backgroundColor'] = ApiClient.convertToType(data['backgroundColor'], 'String');
            }
            if (data.hasOwnProperty('buttons')) {
                obj['buttons'] = ApiClient.convertToType(data['buttons'], [Button]);
            }
            if (data.hasOwnProperty('buttonsSecondary')) {
                obj['buttonsSecondary'] = ApiClient.convertToType(data['buttonsSecondary'], [Button]);
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('headerTitle')) {
                obj['headerTitle'] = ApiClient.convertToType(data['headerTitle'], 'String');
            }
            if (data.hasOwnProperty('html')) {
                obj['html'] = ApiClient.convertToType(data['html'], 'String');
            }
            if (data.hasOwnProperty('htmlContent')) {
                obj['htmlContent'] = ApiClient.convertToType(data['htmlContent'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('inputFields')) {
                obj['inputFields'] = ApiClient.convertToType(data['inputFields'], [InputField]);
            }
            if (data.hasOwnProperty('ionIcon')) {
                obj['ionIcon'] = ApiClient.convertToType(data['ionIcon'], 'String');
            }
            if (data.hasOwnProperty('link')) {
                obj['link'] = ApiClient.convertToType(data['link'], 'String');
            }
            if (data.hasOwnProperty('parameters')) {
                obj['parameters'] = ApiClient.convertToType(data['parameters'], Object);
            }
            if (data.hasOwnProperty('relatedCards')) {
                obj['relatedCards'] = ApiClient.convertToType(data['relatedCards'], [Card]);
            }
            if (data.hasOwnProperty('selectedButton')) {
                obj['selectedButton'] = Button.constructFromObject(data['selectedButton']);
            }
            if (data.hasOwnProperty('sharingBody')) {
                obj['sharingBody'] = ApiClient.convertToType(data['sharingBody'], 'String');
            }
            if (data.hasOwnProperty('sharingButtons')) {
                obj['sharingButtons'] = ApiClient.convertToType(data['sharingButtons'], [Button]);
            }
            if (data.hasOwnProperty('sharingTitle')) {
                obj['sharingTitle'] = ApiClient.convertToType(data['sharingTitle'], 'String');
            }
            if (data.hasOwnProperty('subHeader')) {
                obj['subHeader'] = ApiClient.convertToType(data['subHeader'], 'String');
            }
            if (data.hasOwnProperty('subTitle')) {
                obj['subTitle'] = ApiClient.convertToType(data['subTitle'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }


}

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






export default Card;

