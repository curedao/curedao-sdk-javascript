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
import AuthorizedClients from './AuthorizedClients';
import Card from './Card';
import Error from './Error';

/**
 * The GetSharesResponse model module.
 * @module model/GetSharesResponse
 * @version 0.0.1
 */
class GetSharesResponse {
    /**
     * Constructs a new <code>GetSharesResponse</code>.
     * @alias module:model/GetSharesResponse
     * @param description {String} Can be used as body of help info popup
     * @param summary {String} Can be used as title in help info popup
     */
    constructor(description, summary) {

        GetSharesResponse.initialize(this, description, summary);
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
     * Constructs a <code>GetSharesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSharesResponse} obj Optional instance to populate.
     * @return {module:model/GetSharesResponse} The populated <code>GetSharesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSharesResponse();

            if (data.hasOwnProperty('authorizedClients')) {
                obj['authorizedClients'] = AuthorizedClients.constructFromObject(data['authorizedClients']);
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
 * @member {module:model/AuthorizedClients} authorizedClients
 */
GetSharesResponse.prototype['authorizedClients'] = undefined;

/**
 * Can be used as body of help info popup
 * @member {String} description
 */
GetSharesResponse.prototype['description'] = undefined;

/**
 * Can be used as title in help info popup
 * @member {String} summary
 */
GetSharesResponse.prototype['summary'] = undefined;

/**
 * Array of error objects with message property
 * @member {Array.<module:model/Error>} errors
 */
GetSharesResponse.prototype['errors'] = undefined;

/**
 * ex. OK or ERROR
 * @member {String} status
 */
GetSharesResponse.prototype['status'] = undefined;

/**
 * true or false
 * @member {Boolean} success
 */
GetSharesResponse.prototype['success'] = undefined;

/**
 * Response code such as 200
 * @member {Number} code
 */
GetSharesResponse.prototype['code'] = undefined;

/**
 * A super neat url you might want to share with your users!
 * @member {String} link
 */
GetSharesResponse.prototype['link'] = undefined;

/**
 * @member {module:model/Card} card
 */
GetSharesResponse.prototype['card'] = undefined;






export default GetSharesResponse;

