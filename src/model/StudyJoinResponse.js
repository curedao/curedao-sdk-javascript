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
import Study from './Study';
import TrackingReminder from './TrackingReminder';
import TrackingReminderNotification from './TrackingReminderNotification';

/**
 * The StudyJoinResponse model module.
 * @module model/StudyJoinResponse
 * @version 0.0.1
 */
class StudyJoinResponse {
    /**
     * Constructs a new <code>StudyJoinResponse</code>.
     * @alias module:model/StudyJoinResponse
     */
    constructor() {

        StudyJoinResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>StudyJoinResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StudyJoinResponse} obj Optional instance to populate.
     * @return {module:model/StudyJoinResponse} The populated <code>StudyJoinResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StudyJoinResponse();

            if (data.hasOwnProperty('study')) {
                obj['study'] = Study.constructFromObject(data['study']);
            }
            if (data.hasOwnProperty('trackingReminders')) {
                obj['trackingReminders'] = ApiClient.convertToType(data['trackingReminders'], [TrackingReminder]);
            }
            if (data.hasOwnProperty('trackingReminderNotifications')) {
                obj['trackingReminderNotifications'] = ApiClient.convertToType(data['trackingReminderNotifications'], [TrackingReminderNotification]);
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
 * @member {module:model/Study} study
 */
StudyJoinResponse.prototype['study'] = undefined;

/**
 * @member {Array.<module:model/TrackingReminder>} trackingReminders
 */
StudyJoinResponse.prototype['trackingReminders'] = undefined;

/**
 * @member {Array.<module:model/TrackingReminderNotification>} trackingReminderNotifications
 */
StudyJoinResponse.prototype['trackingReminderNotifications'] = undefined;

/**
 * Can be used as body of help info popup
 * @member {String} description
 */
StudyJoinResponse.prototype['description'] = undefined;

/**
 * Can be used as title in help info popup
 * @member {String} summary
 */
StudyJoinResponse.prototype['summary'] = undefined;

/**
 * Array of error objects with message property
 * @member {Array.<module:model/Error>} errors
 */
StudyJoinResponse.prototype['errors'] = undefined;

/**
 * ex. OK or ERROR
 * @member {String} status
 */
StudyJoinResponse.prototype['status'] = undefined;

/**
 * true or false
 * @member {Boolean} success
 */
StudyJoinResponse.prototype['success'] = undefined;

/**
 * Response code such as 200
 * @member {Number} code
 */
StudyJoinResponse.prototype['code'] = undefined;

/**
 * A super neat url you might want to share with your users!
 * @member {String} link
 */
StudyJoinResponse.prototype['link'] = undefined;

/**
 * @member {module:model/Card} card
 */
StudyJoinResponse.prototype['card'] = undefined;






export default StudyJoinResponse;

