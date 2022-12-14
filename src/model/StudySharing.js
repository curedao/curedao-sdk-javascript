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
 * The StudySharing model module.
 * @module model/StudySharing
 * @version 0.0.1
 */
class StudySharing {
    /**
     * Constructs a new <code>StudySharing</code>.
     * @alias module:model/StudySharing
     * @param shareUserMeasurements {Boolean} Would you like to make this study publicly visible?
     * @param sharingDescription {String} Ex: N1 Study: Sleep Quality Predicts Higher Overall Mood
     * @param sharingTitle {String} Ex: N1 Study: Sleep Quality Predicts Higher Overall Mood
     */
    constructor(shareUserMeasurements, sharingDescription, sharingTitle) { 
        
        StudySharing.initialize(this, shareUserMeasurements, sharingDescription, sharingTitle);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, shareUserMeasurements, sharingDescription, sharingTitle) { 
        obj['shareUserMeasurements'] = shareUserMeasurements;
        obj['sharingDescription'] = sharingDescription;
        obj['sharingTitle'] = sharingTitle;
    }

    /**
     * Constructs a <code>StudySharing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StudySharing} obj Optional instance to populate.
     * @return {module:model/StudySharing} The populated <code>StudySharing</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StudySharing();

            if (data.hasOwnProperty('shareUserMeasurements')) {
                obj['shareUserMeasurements'] = ApiClient.convertToType(data['shareUserMeasurements'], 'Boolean');
            }
            if (data.hasOwnProperty('sharingDescription')) {
                obj['sharingDescription'] = ApiClient.convertToType(data['sharingDescription'], 'String');
            }
            if (data.hasOwnProperty('sharingTitle')) {
                obj['sharingTitle'] = ApiClient.convertToType(data['sharingTitle'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Would you like to make this study publicly visible?
 * @member {Boolean} shareUserMeasurements
 */
StudySharing.prototype['shareUserMeasurements'] = undefined;

/**
 * Ex: N1 Study: Sleep Quality Predicts Higher Overall Mood
 * @member {String} sharingDescription
 */
StudySharing.prototype['sharingDescription'] = undefined;

/**
 * Ex: N1 Study: Sleep Quality Predicts Higher Overall Mood
 * @member {String} sharingTitle
 */
StudySharing.prototype['sharingTitle'] = undefined;






export default StudySharing;

