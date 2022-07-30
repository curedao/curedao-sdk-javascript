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
 * The ConnectInstructions model module.
 * @module model/ConnectInstructions
 * @version 0.0.1
 */
class ConnectInstructions {
    /**
     * Constructs a new <code>ConnectInstructions</code>.
     * @alias module:model/ConnectInstructions
     * @param url {String} URL to open to connect
     */
    constructor(url) {

        ConnectInstructions.initialize(this, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, url) {
        obj['url'] = url;
    }

    /**
     * Constructs a <code>ConnectInstructions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConnectInstructions} obj Optional instance to populate.
     * @return {module:model/ConnectInstructions} The populated <code>ConnectInstructions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConnectInstructions();

            if (data.hasOwnProperty('parameters')) {
                obj['parameters'] = ApiClient.convertToType(data['parameters'], [Object]);
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('usePopup')) {
                obj['usePopup'] = ApiClient.convertToType(data['usePopup'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Create a form with these fields and post the key and user submitted value to the provided connect url
 * @member {Array.<Object>} parameters
 */
ConnectInstructions.prototype['parameters'] = undefined;

/**
 * URL to open to connect
 * @member {String} url
 */
ConnectInstructions.prototype['url'] = undefined;

/**
 * True if should open auth window in popup
 * @member {Boolean} usePopup
 */
ConnectInstructions.prototype['usePopup'] = undefined;






export default ConnectInstructions;

