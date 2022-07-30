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
 * The UserVariableDelete model module.
 * @module model/UserVariableDelete
 * @version 0.0.1
 */
class UserVariableDelete {
    /**
     * Constructs a new <code>UserVariableDelete</code>.
     * @alias module:model/UserVariableDelete
     * @param variableId {Number} Id of the variable whose measurements should be deleted
     */
    constructor(variableId) {

        UserVariableDelete.initialize(this, variableId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, variableId) {
        obj['variableId'] = variableId;
    }

    /**
     * Constructs a <code>UserVariableDelete</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserVariableDelete} obj Optional instance to populate.
     * @return {module:model/UserVariableDelete} The populated <code>UserVariableDelete</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserVariableDelete();

            if (data.hasOwnProperty('variableId')) {
                obj['variableId'] = ApiClient.convertToType(data['variableId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Id of the variable whose measurements should be deleted
 * @member {Number} variableId
 */
UserVariableDelete.prototype['variableId'] = undefined;






export default UserVariableDelete;
