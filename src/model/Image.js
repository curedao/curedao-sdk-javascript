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

/**
 * The Image model module.
 * @module model/Image
 * @version 0.0.1
 */
class Image {
    /**
     * Constructs a new <code>Image</code>.
     * @alias module:model/Image
     * @param height {String} Ex: 240
     * @param imageUrl {String} Ex: https://www.filepicker.io/api/file/TjmeNWS5Q2SFmtJlUGLf
     * @param width {String} Ex: 224
     */
    constructor(height, imageUrl, width) { 
        
        Image.initialize(this, height, imageUrl, width);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, height, imageUrl, width) { 
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
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Image();

            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'String');
            }
            if (data.hasOwnProperty('imageUrl')) {
                obj['imageUrl'] = ApiClient.convertToType(data['imageUrl'], 'String');
            }
            if (data.hasOwnProperty('width')) {
                obj['width'] = ApiClient.convertToType(data['width'], 'String');
            }
        }
        return obj;
    }


}

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






export default Image;

