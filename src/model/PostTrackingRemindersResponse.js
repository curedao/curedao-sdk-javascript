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
import Error from './Error';
import PostTrackingRemindersDataResponse from './PostTrackingRemindersDataResponse';

/**
 * The PostTrackingRemindersResponse model module.
 * @module model/PostTrackingRemindersResponse
 * @version 0.0.1
 */
class PostTrackingRemindersResponse {
    /**
     * Constructs a new <code>PostTrackingRemindersResponse</code>.
     * @alias module:model/PostTrackingRemindersResponse
     * @param status {String} ex. OK or ERROR
     * @param success {Boolean} true or false
     */
    constructor(status, success) {

        PostTrackingRemindersResponse.initialize(this, status, success);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, status, success) {
        obj['status'] = status;
        obj['success'] = success;
    }

    /**
     * Constructs a <code>PostTrackingRemindersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostTrackingRemindersResponse} obj Optional instance to populate.
     * @return {module:model/PostTrackingRemindersResponse} The populated <code>PostTrackingRemindersResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostTrackingRemindersResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = PostTrackingRemindersDataResponse.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
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
 * @member {module:model/PostTrackingRemindersDataResponse} data
 */
PostTrackingRemindersResponse.prototype['data'] = undefined;

/**
 * Message
 * @member {String} message
 */
PostTrackingRemindersResponse.prototype['message'] = undefined;

/**
 * Can be used as body of help info popup
 * @member {String} description
 */
PostTrackingRemindersResponse.prototype['description'] = undefined;

/**
 * Can be used as title in help info popup
 * @member {String} summary
 */
PostTrackingRemindersResponse.prototype['summary'] = undefined;

/**
 * Array of error objects with message property
 * @member {Array.<module:model/Error>} errors
 */
PostTrackingRemindersResponse.prototype['errors'] = undefined;

/**
 * ex. OK or ERROR
 * @member {String} status
 */
PostTrackingRemindersResponse.prototype['status'] = undefined;

/**
 * true or false
 * @member {Boolean} success
 */
PostTrackingRemindersResponse.prototype['success'] = undefined;

/**
 * Response code such as 200
 * @member {Number} code
 */
PostTrackingRemindersResponse.prototype['code'] = undefined;

/**
 * A super neat url you might want to share with your users!
 * @member {String} link
 */
PostTrackingRemindersResponse.prototype['link'] = undefined;

/**
 * @member {module:model/Card} card
 */
PostTrackingRemindersResponse.prototype['card'] = undefined;






export default PostTrackingRemindersResponse;

