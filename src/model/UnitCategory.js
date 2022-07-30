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
 * The UnitCategory model module.
 * @module model/UnitCategory
 * @version 0.0.1
 */
class UnitCategory {
    /**
     * Constructs a new <code>UnitCategory</code>.
     * @alias module:model/UnitCategory
     * @param name {String} Category name
     */
    constructor(name) {

        UnitCategory.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) {
        obj['name'] = name;
    }

    /**
     * Constructs a <code>UnitCategory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UnitCategory} obj Optional instance to populate.
     * @return {module:model/UnitCategory} The populated <code>UnitCategory</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UnitCategory();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('standardUnitAbbreviatedName')) {
                obj['standardUnitAbbreviatedName'] = ApiClient.convertToType(data['standardUnitAbbreviatedName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * id
 * @member {Number} id
 */
UnitCategory.prototype['id'] = undefined;

/**
 * Category name
 * @member {String} name
 */
UnitCategory.prototype['name'] = undefined;

/**
 * Base unit for in which measurements are to be converted to and stored
 * @member {String} standardUnitAbbreviatedName
 */
UnitCategory.prototype['standardUnitAbbreviatedName'] = undefined;






export default UnitCategory;

