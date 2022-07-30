"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Authentication service.
* @module api/AuthenticationApi
* @version 0.0.1
*/
var AuthenticationApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AuthenticationApi. 
  * @alias module:api/AuthenticationApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AuthenticationApi(apiClient) {
    _classCallCheck(this, AuthenticationApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the getAccessToken operation.
   * @callback module:api/AuthenticationApi~getAccessTokenCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get a user access token
   * Client provides authorization token obtained from /api/v3/oauth2/authorize to this endpoint and receives an access token. Access token can then be used to query API endpoints. ### Request Access Token After user approves your access to the given scope form the https:/api.curedao.org/v1/oauth2/authorize endpoint, you'll receive an authorization code to request an access token. This time make a `POST` request to `/api/v1/oauth/access_token` with parameters including: * `grant_type` Can be `authorization_code` or `refresh_token` since we are getting the `access_token` for the first time we don't have a `refresh_token` so this must be `authorization_code`. * `code` Authorization code you received with the previous request. * `redirect_uri` Your application's redirect url. ### Refreshing Access Token Access tokens expire at some point, to continue using our api you need to refresh them with `refresh_token` you received along with the `access_token`. To do this make a `POST` request to `/api/v1/oauth/access_token` with correct parameters, which are: * `grant_type` This time grant type must be `refresh_token` since we have it. * `clientId` Your application's client id. * `client_secret` Your application's client secret. * `refresh_token` The refresh token you received with the `access_token`. Every request you make to this endpoint will give you a new refresh token and make the old one expired. So you can keep getting new access tokens with new refresh tokens. ### Using Access Token Currently we support 2 ways for this, you can't use both at the same time. * Adding access token to the request header as `Authorization: Bearer {access_token}` * Adding to the url as a query parameter `?access_token={access_token}` You can read more about OAuth2 from [here](http://oauth.net/2/)
   * @param {String} grantType Grant Type can be 'authorization_code' or 'refresh_token'
   * @param {String} code Authorization code you received with the previous request.
   * @param {String} responseType If the value is code, launches a Basic flow, requiring a POST to the token endpoint to obtain the tokens. If the value is token id_token or id_token token, launches an Implicit flow, requiring the use of Javascript at the redirect URI to retrieve tokens from the URI #fragment.
   * @param {String} scope Scopes include basic, readmeasurements, and writemeasurements. The `basic` scope allows you to read user info (displayName, email, etc). The `readmeasurements` scope allows one to read a user's data. The `writemeasurements` scope allows you to write user data. Separate multiple scopes by a space.
   * @param {Object} opts Optional parameters
   * @param {String} opts.clientId Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org
   * @param {String} opts.clientSecret This is the secret for your obtained clientId. We use this to ensure that only your application uses the clientId.  Obtain this by creating a free application at [https://builder.curedao.org](https://builder.curedao.org).
   * @param {String} opts.redirectUri The redirect URI is the URL within your client application that will receive the OAuth2 credentials.
   * @param {String} opts.state An opaque string that is round-tripped in the protocol; that is to say, it is returned as a URI parameter in the Basic flow, and in the URI
   * @param {module:api/AuthenticationApi~getAccessTokenCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(AuthenticationApi, [{
    key: "getAccessToken",
    value: function getAccessToken(grantType, code, responseType, scope, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'grantType' is set

      if (grantType === undefined || grantType === null) {
        throw new Error("Missing the required parameter 'grantType' when calling getAccessToken");
      } // verify the required parameter 'code' is set


      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling getAccessToken");
      } // verify the required parameter 'responseType' is set


      if (responseType === undefined || responseType === null) {
        throw new Error("Missing the required parameter 'responseType' when calling getAccessToken");
      } // verify the required parameter 'scope' is set


      if (scope === undefined || scope === null) {
        throw new Error("Missing the required parameter 'scope' when calling getAccessToken");
      }

      var pathParams = {};
      var queryParams = {
        'clientId': opts['clientId'],
        'client_secret': opts['clientSecret'],
        'grant_type': grantType,
        'code': code,
        'response_type': responseType,
        'scope': scope,
        'redirect_uri': opts['redirectUri'],
        'state': opts['state']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/oauth2/token', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getOauthAuthorizationCode operation.
     * @callback module:api/AuthenticationApi~getOauthAuthorizationCodeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Request Authorization Code
     * You can implement OAuth2 authentication to your application using our **OAuth2** endpoints.  You need to redirect users to `/api/v3/oauth2/authorize` endpoint to get an authorization code and include the parameters below.   This page will ask the user if they want to allow a client's application to submit or obtain data from their QM account. It will redirect the user to the url provided by the client application with the code as a query parameter or error in case of an error. See the /api/v1/oauth/access_token endpoint for the next steps.
     * @param {String} responseType If the value is code, launches a Basic flow, requiring a POST to the token endpoint to obtain the tokens. If the value is token id_token or id_token token, launches an Implicit flow, requiring the use of Javascript at the redirect URI to retrieve tokens from the URI #fragment.
     * @param {String} scope Scopes include basic, readmeasurements, and writemeasurements. The `basic` scope allows you to read user info (displayName, email, etc). The `readmeasurements` scope allows one to read a user's data. The `writemeasurements` scope allows you to write user data. Separate multiple scopes by a space.
     * @param {Object} opts Optional parameters
     * @param {String} opts.clientId Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org
     * @param {String} opts.clientSecret This is the secret for your obtained clientId. We use this to ensure that only your application uses the clientId.  Obtain this by creating a free application at [https://builder.curedao.org](https://builder.curedao.org).
     * @param {String} opts.redirectUri The redirect URI is the URL within your client application that will receive the OAuth2 credentials.
     * @param {String} opts.state An opaque string that is round-tripped in the protocol; that is to say, it is returned as a URI parameter in the Basic flow, and in the URI
     * @param {module:api/AuthenticationApi~getOauthAuthorizationCodeCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "getOauthAuthorizationCode",
    value: function getOauthAuthorizationCode(responseType, scope, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'responseType' is set

      if (responseType === undefined || responseType === null) {
        throw new Error("Missing the required parameter 'responseType' when calling getOauthAuthorizationCode");
      } // verify the required parameter 'scope' is set


      if (scope === undefined || scope === null) {
        throw new Error("Missing the required parameter 'scope' when calling getOauthAuthorizationCode");
      }

      var pathParams = {};
      var queryParams = {
        'clientId': opts['clientId'],
        'client_secret': opts['clientSecret'],
        'response_type': responseType,
        'scope': scope,
        'redirect_uri': opts['redirectUri'],
        'state': opts['state']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/oauth2/authorize', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return AuthenticationApi;
}();

exports["default"] = AuthenticationApi;
