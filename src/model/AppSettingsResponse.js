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
import AppSettings from './AppSettings';
import Card from './Card';
import Error from './Error';

/**
 * The AppSettingsResponse model module.
 * @module model/AppSettingsResponse
 * @version 0.0.1
 */
class AppSettingsResponse {
    /**
     * Constructs a new <code>AppSettingsResponse</code>.
     * @alias module:model/AppSettingsResponse
     * @param description {String} Can be used as body of help info popup
     * @param summary {String} Can be used as title in help info popup
     */
    constructor(description, summary) {

        AppSettingsResponse.initialize(this, description, summary);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, description, summary) {
        obj['description'] = description;
        obj['summary'] = summary;
    }

    /**
     * Constructs a <code>AppSettingsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AppSettingsResponse} obj Optional instance to populate.
     * @return {module:model/AppSettingsResponse} The populated <code>AppSettingsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppSettingsResponse();

            if (data.hasOwnProperty('appSettings')) {
                obj['appSettings'] = AppSettings.constructFromObject(data['appSettings']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'Number');
            }
            if (data.hasOwnProperty('link')) {
                obj['link'] = ApiClient.convertToType(data['link'], 'String');
            }
            if (data.hasOwnProperty('card')) {
                obj['card'] = Card.constructFromObject(data['card']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/AppSettings} appSettings
 */
AppSettingsResponse.prototype['appSettings'] = undefined;

/**
 * Can be used as body of help info popup
 * @member {String} description
 */
AppSettingsResponse.prototype['description'] = undefined;

/**
 * Can be used as title in help info popup
 * @member {String} summary
 */
AppSettingsResponse.prototype['summary'] = undefined;

/**
 * Array of error objects with message property
 * @member {Array.<module:model/Error>} errors
 */
AppSettingsResponse.prototype['errors'] = undefined;

/**
 * ex. OK or ERROR
 * @member {String} status
 */
AppSettingsResponse.prototype['status'] = undefined;

/**
 * true or false
 * @member {Boolean} success
 */
AppSettingsResponse.prototype['success'] = undefined;

/**
 * Response code such as 200
 * @member {Number} code
 */
AppSettingsResponse.prototype['code'] = undefined;

/**
 * A super neat url you might want to share with your users!
 * @member {String} link
 */
AppSettingsResponse.prototype['link'] = undefined;

/**
 * @member {module:model/Card} card
 */
AppSettingsResponse.prototype['card'] = undefined;






export default AppSettingsResponse;

