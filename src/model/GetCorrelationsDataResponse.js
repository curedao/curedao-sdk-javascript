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
import Card from './Card';
import Correlation from './Correlation';
import Error from './Error';
import Explanation from './Explanation';

/**
 * The GetCorrelationsDataResponse model module.
 * @module model/GetCorrelationsDataResponse
 * @version 0.0.1
 */
class GetCorrelationsDataResponse {
    /**
     * Constructs a new <code>GetCorrelationsDataResponse</code>.
     * @alias module:model/GetCorrelationsDataResponse
     * @param correlations {Array.<module:model/Correlation>}
     * @param explanation {module:model/Explanation}
     */
    constructor(correlations, explanation) {

        GetCorrelationsDataResponse.initialize(this, correlations, explanation);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, correlations, explanation) {
        obj['correlations'] = correlations;
        obj['explanation'] = explanation;
    }

    /**
     * Constructs a <code>GetCorrelationsDataResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCorrelationsDataResponse} obj Optional instance to populate.
     * @return {module:model/GetCorrelationsDataResponse} The populated <code>GetCorrelationsDataResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetCorrelationsDataResponse();

            if (data.hasOwnProperty('correlations')) {
                obj['correlations'] = ApiClient.convertToType(data['correlations'], [Correlation]);
            }
            if (data.hasOwnProperty('explanation')) {
                obj['explanation'] = Explanation.constructFromObject(data['explanation']);
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
 * @member {Array.<module:model/Correlation>} correlations
 */
GetCorrelationsDataResponse.prototype['correlations'] = undefined;

/**
 * @member {module:model/Explanation} explanation
 */
GetCorrelationsDataResponse.prototype['explanation'] = undefined;

/**
 * Can be used as body of help info popup
 * @member {String} description
 */
GetCorrelationsDataResponse.prototype['description'] = undefined;

/**
 * Can be used as title in help info popup
 * @member {String} summary
 */
GetCorrelationsDataResponse.prototype['summary'] = undefined;

/**
 * Array of error objects with message property
 * @member {Array.<module:model/Error>} errors
 */
GetCorrelationsDataResponse.prototype['errors'] = undefined;

/**
 * ex. OK or ERROR
 * @member {String} status
 */
GetCorrelationsDataResponse.prototype['status'] = undefined;

/**
 * true or false
 * @member {Boolean} success
 */
GetCorrelationsDataResponse.prototype['success'] = undefined;

/**
 * Response code such as 200
 * @member {Number} code
 */
GetCorrelationsDataResponse.prototype['code'] = undefined;

/**
 * A super neat url you might want to share with your users!
 * @member {String} link
 */
GetCorrelationsDataResponse.prototype['link'] = undefined;

/**
 * @member {module:model/Card} card
 */
GetCorrelationsDataResponse.prototype['card'] = undefined;






export default GetCorrelationsDataResponse;

