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
 * The TrackingReminderNotificationPost model module.
 * @module model/TrackingReminderNotificationPost
 * @version 0.0.1
 */
class TrackingReminderNotificationPost {
    /**
     * Constructs a new <code>TrackingReminderNotificationPost</code>.
     * @alias module:model/TrackingReminderNotificationPost
     * @param action {module:model/TrackingReminderNotificationPost.ActionEnum} track records a measurement for the notification.  snooze changes the notification to 1 hour from now. skip deletes the notification.
     * @param id {Number} Id of the TrackingReminderNotification
     */
    constructor(action, id) {

        TrackingReminderNotificationPost.initialize(this, action, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action, id) {
        obj['action'] = action;
        obj['id'] = id;
    }

    /**
     * Constructs a <code>TrackingReminderNotificationPost</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TrackingReminderNotificationPost} obj Optional instance to populate.
     * @return {module:model/TrackingReminderNotificationPost} The populated <code>TrackingReminderNotificationPost</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TrackingReminderNotificationPost();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('modifiedValue')) {
                obj['modifiedValue'] = ApiClient.convertToType(data['modifiedValue'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * track records a measurement for the notification.  snooze changes the notification to 1 hour from now. skip deletes the notification.
 * @member {module:model/TrackingReminderNotificationPost.ActionEnum} action
 */
TrackingReminderNotificationPost.prototype['action'] = undefined;

/**
 * Id of the TrackingReminderNotification
 * @member {Number} id
 */
TrackingReminderNotificationPost.prototype['id'] = undefined;

/**
 * Optional value to be recorded instead of the tracking reminder default value
 * @member {Number} modifiedValue
 */
TrackingReminderNotificationPost.prototype['modifiedValue'] = undefined;





/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
TrackingReminderNotificationPost['ActionEnum'] = {

    /**
     * value: "skip"
     * @const
     */
    "skip": "skip",

    /**
     * value: "snooze"
     * @const
     */
    "snooze": "snooze",

    /**
     * value: "track"
     * @const
     */
    "track": "track"
};



export default TrackingReminderNotificationPost;

