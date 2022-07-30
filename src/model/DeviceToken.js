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
 * The DeviceToken model module.
 * @module model/DeviceToken
 * @version 0.0.1
 */
class DeviceToken {
    /**
     * Constructs a new <code>DeviceToken</code>.
     * @alias module:model/DeviceToken
     * @param platform {String} ios, android, or web
     * @param deviceToken {String} The device token
     */
    constructor(platform, deviceToken) {

        DeviceToken.initialize(this, platform, deviceToken);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, platform, deviceToken) {
        obj['platform'] = platform;
        obj['deviceToken'] = deviceToken;
    }

    /**
     * Constructs a <code>DeviceToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeviceToken} obj Optional instance to populate.
     * @return {module:model/DeviceToken} The populated <code>DeviceToken</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeviceToken();

            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'String');
            }
            if (data.hasOwnProperty('platform')) {
                obj['platform'] = ApiClient.convertToType(data['platform'], 'String');
            }
            if (data.hasOwnProperty('deviceToken')) {
                obj['deviceToken'] = ApiClient.convertToType(data['deviceToken'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Client id
 * @member {String} clientId
 */
DeviceToken.prototype['clientId'] = undefined;

/**
 * ios, android, or web
 * @member {String} platform
 */
DeviceToken.prototype['platform'] = undefined;

/**
 * The device token
 * @member {String} deviceToken
 */
DeviceToken.prototype['deviceToken'] = undefined;






export default DeviceToken;

