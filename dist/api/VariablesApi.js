"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CommonResponse = _interopRequireDefault(require("../model/CommonResponse"));

var _UserTag = _interopRequireDefault(require("../model/UserTag"));

var _UserVariableDelete = _interopRequireDefault(require("../model/UserVariableDelete"));

var _Variable = _interopRequireDefault(require("../model/Variable"));

var _VariableCategory = _interopRequireDefault(require("../model/VariableCategory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Variables service.
* @module api/VariablesApi
* @version 0.0.1
*/
var VariablesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new VariablesApi. 
  * @alias module:api/VariablesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function VariablesApi(apiClient) {
    _classCallCheck(this, VariablesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the deleteUserTag operation.
   * @callback module:api/VariablesApi~deleteUserTagCallback
   * @param {String} error Error message, if any.
   * @param {module:model/CommonResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete user tag or ingredient
   * Delete previously created user tags or ingredients.
   * @param {Object} opts Optional parameters
   * @param {Number} opts.taggedVariableId Id of the tagged variable (i.e. Lollipop) you would like to get variables it can be tagged with (i.e. Sugar).  Converted measurements of the tagged variable are included in analysis of the tag variable (i.e. ingredient).
   * @param {Number} opts.tagVariableId Id of the tag variable (i.e. Sugar) you would like to get variables it can be tagged to (i.e. Lollipop).  Converted measurements of the tagged variable are included in analysis of the tag variable (i.e. ingredient).
   * @param {module:api/VariablesApi~deleteUserTagCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/CommonResponse}
   */


  _createClass(VariablesApi, [{
    key: "deleteUserTag",
    value: function deleteUserTag(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'taggedVariableId': opts['taggedVariableId'],
        'tagVariableId': opts['tagVariableId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CommonResponse["default"];
      return this.apiClient.callApi('/v3/userTags/delete', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteUserVariable operation.
     * @callback module:api/VariablesApi~deleteUserVariableCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete All Measurements For Variable
     * Users can delete all of their measurements for a variable
     * @param {module:api/VariablesApi~deleteUserVariableCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteUserVariable",
    value: function deleteUserVariable(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/userVariables/delete', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getVariableCategories operation.
     * @callback module:api/VariablesApi~getVariableCategoriesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/VariableCategory>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Variable categories
     * The variable categories include Activity, Causes of Illness, Cognitive Performance, Conditions, Environment, Foods, Location, Miscellaneous, Mood, Nutrition, Physical Activity, Physique, Sleep, Social Interactions, Symptoms, Treatments, Vital Signs, and Goals.
     * @param {module:api/VariablesApi~getVariableCategoriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/VariableCategory>}
     */

  }, {
    key: "getVariableCategories",
    value: function getVariableCategories(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_VariableCategory["default"]];
      return this.apiClient.callApi('/v3/variableCategories', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getVariables operation.
     * @callback module:api/VariablesApi~getVariablesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Variable>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get variables along with related user-specific analysis settings and statistics
     * Get variables. If the user has specified variable settings, these are provided instead of the common variable defaults.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeCharts Highcharts configs that can be used if you have highcharts.js included on the page.  This only works if the id or name query parameter is also provided.
     * @param {String} opts.numberOfRawMeasurements Filter variables by the total number of measurements that they have. This could be used of you want to filter or sort by popularity.
     * @param {Number} opts.userId User's id
     * @param {module:model/String} opts.variableCategoryName Ex: Emotions, Treatments, Symptoms...
     * @param {String} opts.name Name of the variable. To get results matching a substring, add % as a wildcard as the first and/or last character of a query string parameter. In order to get variables that contain `Mood`, the following query should be used: ?variableName=%Mood%
     * @param {String} opts.variableName Name of the variable you want measurements for
     * @param {String} opts.updatedAt When the record was last updated. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local.
     * @param {String} opts.sourceName ID of the source you want measurements for (supports exact name match only)
     * @param {String} opts.earliestMeasurementTime Excluded records with measurement times earlier than this value. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss  datetime format. Time zone should be UTC and not local.
     * @param {String} opts.latestMeasurementTime Excluded records with measurement times later than this value. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss  datetime format. Time zone should be UTC and not local.
     * @param {Number} opts.id Common variable id
     * @param {String} opts.lastSourceName Limit variables to those which measurements were last submitted by a specific source. So if you have a client application and you only want variables that were last updated by your app, you can include the name of your app here
     * @param {Number} opts.limit The LIMIT is used to limit the number of results returned. So if youhave 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records. (default to 100)
     * @param {Number} opts.offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause.If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
     * @param {String} opts.sort Sort by one of the listed field names. If the field name is prefixed with `-`, it will sort in descending order.
     * @param {Boolean} opts.includePublic Include variables the user has no measurements for
     * @param {Boolean} opts.manualTracking Only include variables tracked manually by the user
     * @param {String} opts.clientId Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org
     * @param {String} opts.upc UPC or other barcode scan result
     * @param {String} opts.effectOrCause Provided variable is the effect or cause
     * @param {String} opts.publicEffectOrCause Ex: 
     * @param {Boolean} opts.exactMatch Require exact match
     * @param {Number} opts.variableCategoryId Ex: 13
     * @param {Boolean} opts.includePrivate Include user-specific variables in results
     * @param {String} opts.searchPhrase Ex: %Body Fat%
     * @param {String} opts.synonyms Ex: McDonalds hotcake
     * @param {Number} opts.taggedVariableId Id of the tagged variable (i.e. Lollipop) you would like to get variables it can be tagged with (i.e. Sugar).  Converted measurements of the tagged variable are included in analysis of the tag variable (i.e. ingredient).
     * @param {Number} opts.tagVariableId Id of the tag variable (i.e. Sugar) you would like to get variables it can be tagged to (i.e. Lollipop).  Converted measurements of the tagged variable are included in analysis of the tag variable (i.e. ingredient).
     * @param {Number} opts.joinVariableId Id of the variable you would like to get variables that can be joined to.  This is used to merge duplicate variables.   If joinVariableId is specified, this returns only variables eligible to be joined to the variable specified by the joinVariableId.
     * @param {Number} opts.parentUserTagVariableId Id of the parent category variable (i.e. Fruit) you would like to get eligible child sub-type variables (i.e. Apple) for.  Child variable measurements will be included in analysis of the parent variable.  For instance, a child sub-type of the parent category Fruit could be Apple.  When Apple is tagged with the parent category Fruit, Apple measurements will be included when Fruit is analyzed.
     * @param {Number} opts.childUserTagVariableId Id of the child sub-type variable (i.e. Apple) you would like to get eligible parent variables (i.e. Fruit) for.  Child variable measurements will be included in analysis of the parent variable.  For instance, a child sub-type of the parent category Fruit could be Apple. When Apple is tagged with the parent category Fruit, Apple measurements will be included when Fruit is analyzed.
     * @param {Number} opts.ingredientUserTagVariableId Id of the ingredient variable (i.e. Fructose)  you would like to get eligible ingredientOf variables (i.e. Apple) for.  IngredientOf variable measurements will be included in analysis of the ingredient variable.  For instance, a ingredientOf of variable Fruit could be Apple.
     * @param {Number} opts.ingredientOfUserTagVariableId Id of the ingredientOf variable (i.e. Apple) you would like to get eligible ingredient variables (i.e. Fructose) for.  IngredientOf variable measurements will be included in analysis of the ingredient variable.  For instance, a ingredientOf of variable Fruit could be Apple.
     * @param {Boolean} opts.commonOnly Return only public and aggregated common variable data instead of user-specific variables
     * @param {Boolean} opts.userOnly Return only user-specific variables and data, excluding common aggregated variable data
     * @param {Boolean} opts.includeTags Return parent, child, duplicate, and ingredient variables
     * @param {Boolean} opts.recalculate Recalculate instead of using cached analysis
     * @param {Number} opts.variableId Ex: 13
     * @param {Boolean} opts.concise Only return field required for variable auto-complete searches.  The smaller size allows for storing more variable results locally reducing API requests.
     * @param {Boolean} opts.refresh Regenerate charts instead of getting from the cache
     * @param {module:api/VariablesApi~getVariablesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Variable>}
     */

  }, {
    key: "getVariables",
    value: function getVariables(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'includeCharts': opts['includeCharts'],
        'numberOfRawMeasurements': opts['numberOfRawMeasurements'],
        'userId': opts['userId'],
        'variableCategoryName': opts['variableCategoryName'],
        'name': opts['name'],
        'variableName': opts['variableName'],
        'updatedAt': opts['updatedAt'],
        'sourceName': opts['sourceName'],
        'earliestMeasurementTime': opts['earliestMeasurementTime'],
        'latestMeasurementTime': opts['latestMeasurementTime'],
        'id': opts['id'],
        'lastSourceName': opts['lastSourceName'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'sort': opts['sort'],
        'includePublic': opts['includePublic'],
        'manualTracking': opts['manualTracking'],
        'clientId': opts['clientId'],
        'upc': opts['upc'],
        'effectOrCause': opts['effectOrCause'],
        'publicEffectOrCause': opts['publicEffectOrCause'],
        'exactMatch': opts['exactMatch'],
        'variableCategoryId': opts['variableCategoryId'],
        'includePrivate': opts['includePrivate'],
        'searchPhrase': opts['searchPhrase'],
        'synonyms': opts['synonyms'],
        'taggedVariableId': opts['taggedVariableId'],
        'tagVariableId': opts['tagVariableId'],
        'joinVariableId': opts['joinVariableId'],
        'parentUserTagVariableId': opts['parentUserTagVariableId'],
        'childUserTagVariableId': opts['childUserTagVariableId'],
        'ingredientUserTagVariableId': opts['ingredientUserTagVariableId'],
        'ingredientOfUserTagVariableId': opts['ingredientOfUserTagVariableId'],
        'commonOnly': opts['commonOnly'],
        'userOnly': opts['userOnly'],
        'includeTags': opts['includeTags'],
        'recalculate': opts['recalculate'],
        'variableId': opts['variableId'],
        'concise': opts['concise'],
        'refresh': opts['refresh']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Variable["default"]];
      return this.apiClient.callApi('/v3/variables', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postUserTags operation.
     * @callback module:api/VariablesApi~postUserTagsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommonResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post or update user tags or ingredients
     * This endpoint allows users to tag foods with their ingredients.  This information will then be used to infer the user intake of the different ingredients by just entering the foods. The inferred intake levels will then be used to determine the effects of different nutrients on the user during analysis.
     * @param {module:model/UserTag} body Contains the new user tag data
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId User's id
     * @param {module:api/VariablesApi~postUserTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CommonResponse}
     */

  }, {
    key: "postUserTags",
    value: function postUserTags(body, opts, callback) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postUserTags");
      }

      var pathParams = {};
      var queryParams = {
        'userId': opts['userId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CommonResponse["default"];
      return this.apiClient.callApi('/v3/userTags', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postUserVariables operation.
     * @callback module:api/VariablesApi~postUserVariablesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommonResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update User Settings for a Variable
     * Users can change the parameters used in analysis of that variable such as the expected duration of action for a variable to have an effect, the estimated delay before the onset of action. In order to filter out erroneous data, they are able to set the maximum and minimum reasonable daily values for a variable.
     * @param {Array.<module:model/Variable>} variable Variable user settings data
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includePrivate Include user-specific variables in results
     * @param {String} opts.clientId Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org
     * @param {Boolean} opts.includePublic Include variables the user has no measurements for
     * @param {String} opts.searchPhrase Ex: %Body Fat%
     * @param {Boolean} opts.exactMatch Require exact match
     * @param {Boolean} opts.manualTracking Only include variables tracked manually by the user
     * @param {module:model/String} opts.variableCategoryName Ex: Emotions, Treatments, Symptoms...
     * @param {Number} opts.variableCategoryId Ex: 13
     * @param {String} opts.synonyms Ex: McDonalds hotcake
     * @param {module:api/VariablesApi~postUserVariablesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CommonResponse}
     */

  }, {
    key: "postUserVariables",
    value: function postUserVariables(variable, opts, callback) {
      opts = opts || {};
      var postBody = variable; // verify the required parameter 'variable' is set

      if (variable === undefined || variable === null) {
        throw new Error("Missing the required parameter 'variable' when calling postUserVariables");
      }

      var pathParams = {};
      var queryParams = {
        'includePrivate': opts['includePrivate'],
        'clientId': opts['clientId'],
        'includePublic': opts['includePublic'],
        'searchPhrase': opts['searchPhrase'],
        'exactMatch': opts['exactMatch'],
        'manualTracking': opts['manualTracking'],
        'variableCategoryName': opts['variableCategoryName'],
        'variableCategoryId': opts['variableCategoryId'],
        'synonyms': opts['synonyms']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CommonResponse["default"];
      return this.apiClient.callApi('/v3/variables', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the resetUserVariableSettings operation.
     * @callback module:api/VariablesApi~resetUserVariableSettingsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reset user settings for a variable to defaults
     * Reset user settings for a variable to defaults
     * @param {module:model/UserVariableDelete} userVariableDelete Id of the variable whose measurements should be deleted
     * @param {module:api/VariablesApi~resetUserVariableSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "resetUserVariableSettings",
    value: function resetUserVariableSettings(userVariableDelete, callback) {
      var postBody = userVariableDelete; // verify the required parameter 'userVariableDelete' is set

      if (userVariableDelete === undefined || userVariableDelete === null) {
        throw new Error("Missing the required parameter 'userVariableDelete' when calling resetUserVariableSettings");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth', 'curedao_oauth2'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/userVariables/reset', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return VariablesApi;
}();

exports["default"] = VariablesApi;
