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


import ApiClient from "../ApiClient";
import Unit from '../model/Unit';
import UnitCategory from '../model/UnitCategory';

/**
* Units service.
* @module api/UnitsApi
* @version 0.0.1
*/
export default class UnitsApi {

    /**
    * Constructs a new UnitsApi. 
    * @alias module:api/UnitsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getUnitCategories operation.
     * @callback module:api/UnitsApi~getUnitCategoriesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/UnitCategory>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get unit categories
     * Get a list of the categories of measurement units such as 'Distance', 'Duration', 'Energy', 'Frequency', 'Miscellany', 'Pressure', 'Proportion', 'Rating', 'Temperature', 'Volume', and 'Weight'.
     * @param {module:api/UnitsApi~getUnitCategoriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/UnitCategory>}
     */
    getUnitCategories(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth', 'curedao_oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [UnitCategory];
      return this.apiClient.callApi(
        '/v3/unitCategories', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUnits operation.
     * @callback module:api/UnitsApi~getUnitsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Unit>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get units
     * Get a list of the available measurement units
     * @param {module:api/UnitsApi~getUnitsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Unit>}
     */
    getUnits(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth', 'curedao_oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Unit];
      return this.apiClient.callApi(
        '/v3/units', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
