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
import GetSharesResponse from '../model/GetSharesResponse';
import ShareInvitationBody from '../model/ShareInvitationBody';
import User from '../model/User';

/**
* Shares service.
* @module api/SharesApi
* @version 0.0.1
*/
export default class SharesApi {

    /**
    * Constructs a new SharesApi.
    * @alias module:api/SharesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteShare operation.
     * @callback module:api/SharesApi~deleteShareCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete share
     * Remove access to user data for a given client_id associated with a given individual, app, or study
     * @param {String} clientIdToRevoke Client id of the individual, study, or app that the user wishes to no longer have access to their data
     * @param {Object} opts Optional parameters
     * @param {String} opts.reason Ex: I hate you!
     * @param {module:api/SharesApi~deleteShareCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    deleteShare(clientIdToRevoke, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'clientIdToRevoke' is set
      if (clientIdToRevoke === undefined || clientIdToRevoke === null) {
        throw new Error("Missing the required parameter 'clientIdToRevoke' when calling deleteShare");
      }

      let pathParams = {
      };
      let queryParams = {
        'clientIdToRevoke': clientIdToRevoke,
        'reason': opts['reason']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth', 'curedao_oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = User;
      return this.apiClient.callApi(
        '/v3/shares/delete', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getShares operation.
     * @callback module:api/SharesApi~getSharesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSharesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Authorized Apps, Studies, and Individuals
     * This is a list of individuals, apps, or studies with access to your measurements.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId User's id
     * @param {String} opts.createdAt When the record was first created. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local.
     * @param {String} opts.updatedAt When the record was last updated. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local.
     * @param {String} opts.clientId Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org
     * @param {String} opts.appVersion Ex: 2.1.1.0
     * @param {String} opts.log Username or email
     * @param {String} opts.pwd User password
     * @param {module:api/SharesApi~getSharesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSharesResponse}
     */
    getShares(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'userId': opts['userId'],
        'createdAt': opts['createdAt'],
        'updatedAt': opts['updatedAt'],
        'clientId': opts['clientId'],
        'appVersion': opts['appVersion'],
        'log': opts['log'],
        'pwd': opts['pwd']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth', 'curedao_oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetSharesResponse;
      return this.apiClient.callApi(
        '/v3/shares', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the inviteShare operation.
     * @callback module:api/SharesApi~inviteShareCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete share
     * Invite someone to view your measurements
     * @param {module:model/ShareInvitationBody} body Details about person to share with
     * @param {Object} opts Optional parameters
     * @param {String} opts.clientId Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org
     * @param {module:api/SharesApi~inviteShareCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    inviteShare(body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling inviteShare");
      }

      let pathParams = {
      };
      let queryParams = {
        'clientId': opts['clientId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth', 'curedao_oauth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = User;
      return this.apiClient.callApi(
        '/v3/shares/invite', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}