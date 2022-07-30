"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AuthorizedClients = _interopRequireDefault(require("./AuthorizedClients"));

var _Card = _interopRequireDefault(require("./Card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The User model module.
 * @module model/User
 * @version 0.0.1
 */
var User = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>User</code>.
   * @alias module:model/User
   * @param accessToken {String} User access token
   * @param administrator {Boolean} Is user administrator
   * @param displayName {String} User display name
   * @param email {String} User email
   * @param id {Number} User id
   * @param loginName {String} User login name
   */
  function User(accessToken, administrator, displayName, email, id, loginName) {
    _classCallCheck(this, User);

    User.initialize(this, accessToken, administrator, displayName, email, id, loginName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(User, null, [{
    key: "initialize",
    value: function initialize(obj, accessToken, administrator, displayName, email, id, loginName) {
      obj['accessToken'] = accessToken;
      obj['administrator'] = administrator;
      obj['displayName'] = displayName;
      obj['email'] = email;
      obj['id'] = id;
      obj['loginName'] = loginName;
    }
    /**
     * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/User} obj Optional instance to populate.
     * @return {module:model/User} The populated <code>User</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new User();

        if (data.hasOwnProperty('accessToken')) {
          obj['accessToken'] = _ApiClient["default"].convertToType(data['accessToken'], 'String');
        }

        if (data.hasOwnProperty('accessTokenExpires')) {
          obj['accessTokenExpires'] = _ApiClient["default"].convertToType(data['accessTokenExpires'], 'String');
        }

        if (data.hasOwnProperty('accessTokenExpiresAtMilliseconds')) {
          obj['accessTokenExpiresAtMilliseconds'] = _ApiClient["default"].convertToType(data['accessTokenExpiresAtMilliseconds'], 'Number');
        }

        if (data.hasOwnProperty('administrator')) {
          obj['administrator'] = _ApiClient["default"].convertToType(data['administrator'], 'Boolean');
        }

        if (data.hasOwnProperty('authorizedClients')) {
          obj['authorizedClients'] = _AuthorizedClients["default"].constructFromObject(data['authorizedClients']);
        }

        if (data.hasOwnProperty('avatar')) {
          obj['avatar'] = _ApiClient["default"].convertToType(data['avatar'], 'String');
        }

        if (data.hasOwnProperty('avatarImage')) {
          obj['avatarImage'] = _ApiClient["default"].convertToType(data['avatarImage'], 'String');
        }

        if (data.hasOwnProperty('capabilities')) {
          obj['capabilities'] = _ApiClient["default"].convertToType(data['capabilities'], 'String');
        }

        if (data.hasOwnProperty('card')) {
          obj['card'] = _Card["default"].constructFromObject(data['card']);
        }

        if (data.hasOwnProperty('clientId')) {
          obj['clientId'] = _ApiClient["default"].convertToType(data['clientId'], 'String');
        }

        if (data.hasOwnProperty('clientUserId')) {
          obj['clientUserId'] = _ApiClient["default"].convertToType(data['clientUserId'], 'String');
        }

        if (data.hasOwnProperty('combineNotifications')) {
          obj['combineNotifications'] = _ApiClient["default"].convertToType(data['combineNotifications'], 'Boolean');
        }

        if (data.hasOwnProperty('createdAt')) {
          obj['createdAt'] = _ApiClient["default"].convertToType(data['createdAt'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }

        if (data.hasOwnProperty('earliestReminderTime')) {
          obj['earliestReminderTime'] = _ApiClient["default"].convertToType(data['earliestReminderTime'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('firstName')) {
          obj['firstName'] = _ApiClient["default"].convertToType(data['firstName'], 'String');
        }

        if (data.hasOwnProperty('getPreviewBuilds')) {
          obj['getPreviewBuilds'] = _ApiClient["default"].convertToType(data['getPreviewBuilds'], 'Boolean');
        }

        if (data.hasOwnProperty('hasAndroidApp')) {
          obj['hasAndroidApp'] = _ApiClient["default"].convertToType(data['hasAndroidApp'], 'Boolean');
        }

        if (data.hasOwnProperty('hasChromeExtension')) {
          obj['hasChromeExtension'] = _ApiClient["default"].convertToType(data['hasChromeExtension'], 'Boolean');
        }

        if (data.hasOwnProperty('hasIosApp')) {
          obj['hasIosApp'] = _ApiClient["default"].convertToType(data['hasIosApp'], 'Boolean');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('lastActive')) {
          obj['lastActive'] = _ApiClient["default"].convertToType(data['lastActive'], 'String');
        }

        if (data.hasOwnProperty('lastFour')) {
          obj['lastFour'] = _ApiClient["default"].convertToType(data['lastFour'], 'String');
        }

        if (data.hasOwnProperty('lastName')) {
          obj['lastName'] = _ApiClient["default"].convertToType(data['lastName'], 'String');
        }

        if (data.hasOwnProperty('lastSmsTrackingReminderNotificationId')) {
          obj['lastSmsTrackingReminderNotificationId'] = _ApiClient["default"].convertToType(data['lastSmsTrackingReminderNotificationId'], 'String');
        }

        if (data.hasOwnProperty('latestReminderTime')) {
          obj['latestReminderTime'] = _ApiClient["default"].convertToType(data['latestReminderTime'], 'String');
        }

        if (data.hasOwnProperty('loginName')) {
          obj['loginName'] = _ApiClient["default"].convertToType(data['loginName'], 'String');
        }

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }

        if (data.hasOwnProperty('phoneNumber')) {
          obj['phoneNumber'] = _ApiClient["default"].convertToType(data['phoneNumber'], 'String');
        }

        if (data.hasOwnProperty('phoneVerificationCode')) {
          obj['phoneVerificationCode'] = _ApiClient["default"].convertToType(data['phoneVerificationCode'], 'String');
        }

        if (data.hasOwnProperty('primaryOutcomeVariableId')) {
          obj['primaryOutcomeVariableId'] = _ApiClient["default"].convertToType(data['primaryOutcomeVariableId'], 'Number');
        }

        if (data.hasOwnProperty('primaryOutcomeVariableName')) {
          obj['primaryOutcomeVariableName'] = _ApiClient["default"].convertToType(data['primaryOutcomeVariableName'], 'String');
        }

        if (data.hasOwnProperty('pushNotificationsEnabled')) {
          obj['pushNotificationsEnabled'] = _ApiClient["default"].convertToType(data['pushNotificationsEnabled'], 'Boolean');
        }

        if (data.hasOwnProperty('refreshToken')) {
          obj['refreshToken'] = _ApiClient["default"].convertToType(data['refreshToken'], 'String');
        }

        if (data.hasOwnProperty('roles')) {
          obj['roles'] = _ApiClient["default"].convertToType(data['roles'], 'String');
        }

        if (data.hasOwnProperty('sendPredictorEmails')) {
          obj['sendPredictorEmails'] = _ApiClient["default"].convertToType(data['sendPredictorEmails'], 'Boolean');
        }

        if (data.hasOwnProperty('sendReminderNotificationEmails')) {
          obj['sendReminderNotificationEmails'] = _ApiClient["default"].convertToType(data['sendReminderNotificationEmails'], 'Boolean');
        }

        if (data.hasOwnProperty('shareAllData')) {
          obj['shareAllData'] = _ApiClient["default"].convertToType(data['shareAllData'], 'Boolean');
        }

        if (data.hasOwnProperty('smsNotificationsEnabled')) {
          obj['smsNotificationsEnabled'] = _ApiClient["default"].convertToType(data['smsNotificationsEnabled'], 'Boolean');
        }

        if (data.hasOwnProperty('stripeActive')) {
          obj['stripeActive'] = _ApiClient["default"].convertToType(data['stripeActive'], 'Boolean');
        }

        if (data.hasOwnProperty('stripeId')) {
          obj['stripeId'] = _ApiClient["default"].convertToType(data['stripeId'], 'String');
        }

        if (data.hasOwnProperty('stripePlan')) {
          obj['stripePlan'] = _ApiClient["default"].convertToType(data['stripePlan'], 'String');
        }

        if (data.hasOwnProperty('stripeSubscription')) {
          obj['stripeSubscription'] = _ApiClient["default"].convertToType(data['stripeSubscription'], 'String');
        }

        if (data.hasOwnProperty('subscriptionEndsAt')) {
          obj['subscriptionEndsAt'] = _ApiClient["default"].convertToType(data['subscriptionEndsAt'], 'String');
        }

        if (data.hasOwnProperty('subscriptionProvider')) {
          obj['subscriptionProvider'] = _ApiClient["default"].convertToType(data['subscriptionProvider'], 'String');
        }

        if (data.hasOwnProperty('timeZoneOffset')) {
          obj['timeZoneOffset'] = _ApiClient["default"].convertToType(data['timeZoneOffset'], 'Number');
        }

        if (data.hasOwnProperty('trackLocation')) {
          obj['trackLocation'] = _ApiClient["default"].convertToType(data['trackLocation'], 'Boolean');
        }

        if (data.hasOwnProperty('updatedAt')) {
          obj['updatedAt'] = _ApiClient["default"].convertToType(data['updatedAt'], 'String');
        }

        if (data.hasOwnProperty('userRegistered')) {
          obj['userRegistered'] = _ApiClient["default"].convertToType(data['userRegistered'], 'String');
        }

        if (data.hasOwnProperty('userUrl')) {
          obj['userUrl'] = _ApiClient["default"].convertToType(data['userUrl'], 'String');
        }
      }

      return obj;
    }
  }]);

  return User;
}();
/**
 * User access token
 * @member {String} accessToken
 */


User.prototype['accessToken'] = undefined;
/**
 * Ex: 2018-08-08 02:41:19
 * @member {String} accessTokenExpires
 */

User.prototype['accessTokenExpires'] = undefined;
/**
 * Ex: 1533696079000
 * @member {Number} accessTokenExpiresAtMilliseconds
 */

User.prototype['accessTokenExpiresAtMilliseconds'] = undefined;
/**
 * Is user administrator
 * @member {Boolean} administrator
 */

User.prototype['administrator'] = undefined;
/**
 * @member {module:model/AuthorizedClients} authorizedClients
 */

User.prototype['authorizedClients'] = undefined;
/**
 * Ex: https://lh6.googleusercontent.com/-BHr4hyUWqZU/AAAAAAAAAAI/AAAAAAAIG28/2Lv0en738II/photo.jpg?sz=50
 * @member {String} avatar
 */

User.prototype['avatar'] = undefined;
/**
 * Ex: https://lh6.googleusercontent.com/-BHr4hyUWqZU/AAAAAAAAAAI/AAAAAAAIG28/2Lv0en738II/photo.jpg?sz=50
 * @member {String} avatarImage
 */

User.prototype['avatarImage'] = undefined;
/**
 * Ex: a:1:{s:13:\"administrator\";b:1;}
 * @member {String} capabilities
 */

User.prototype['capabilities'] = undefined;
/**
 * @member {module:model/Card} card
 */

User.prototype['card'] = undefined;
/**
 * Ex: curedao
 * @member {String} clientId
 */

User.prototype['clientId'] = undefined;
/**
 * Ex: 118444693184829555362
 * @member {String} clientUserId
 */

User.prototype['clientUserId'] = undefined;
/**
 * Ex: 1
 * @member {Boolean} combineNotifications
 */

User.prototype['combineNotifications'] = undefined;
/**
 * When the record was first created. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format
 * @member {String} createdAt
 */

User.prototype['createdAt'] = undefined;
/**
 * Your bio will be displayed on your published studies
 * @member {String} description
 */

User.prototype['description'] = undefined;
/**
 * User display name
 * @member {String} displayName
 */

User.prototype['displayName'] = undefined;
/**
 * Earliest time user should get notifications. Ex: 05:00:00
 * @member {String} earliestReminderTime
 */

User.prototype['earliestReminderTime'] = undefined;
/**
 * User email
 * @member {String} email
 */

User.prototype['email'] = undefined;
/**
 * Ex: Mike
 * @member {String} firstName
 */

User.prototype['firstName'] = undefined;
/**
 * Ex: false
 * @member {Boolean} getPreviewBuilds
 */

User.prototype['getPreviewBuilds'] = undefined;
/**
 * Ex: false
 * @member {Boolean} hasAndroidApp
 */

User.prototype['hasAndroidApp'] = undefined;
/**
 * Ex: false
 * @member {Boolean} hasChromeExtension
 */

User.prototype['hasChromeExtension'] = undefined;
/**
 * Ex: false
 * @member {Boolean} hasIosApp
 */

User.prototype['hasIosApp'] = undefined;
/**
 * User id
 * @member {Number} id
 */

User.prototype['id'] = undefined;
/**
 * Ex: Date the user last logged in
 * @member {String} lastActive
 */

User.prototype['lastActive'] = undefined;
/**
 * Ex: 2009
 * @member {String} lastFour
 */

User.prototype['lastFour'] = undefined;
/**
 * Ex: Sinn
 * @member {String} lastName
 */

User.prototype['lastName'] = undefined;
/**
 * Ex: 1
 * @member {String} lastSmsTrackingReminderNotificationId
 */

User.prototype['lastSmsTrackingReminderNotificationId'] = undefined;
/**
 * Latest time user should get notifications. Ex: 23:00:00
 * @member {String} latestReminderTime
 */

User.prototype['latestReminderTime'] = undefined;
/**
 * User login name
 * @member {String} loginName
 */

User.prototype['loginName'] = undefined;
/**
 * Ex: PASSWORD
 * @member {String} password
 */

User.prototype['password'] = undefined;
/**
 * Ex: 618-391-0002
 * @member {String} phoneNumber
 */

User.prototype['phoneNumber'] = undefined;
/**
 * Ex: 1234
 * @member {String} phoneVerificationCode
 */

User.prototype['phoneVerificationCode'] = undefined;
/**
 * A good primary outcome variable is something that you want to improve and that changes inexplicably. For instance, if you have anxiety, back pain or arthritis which is worse on some days than others, these would be good candidates for primary outcome variables.  Recording their severity and potential factors will help you identify hidden factors exacerbating or improving them. 
 * @member {Number} primaryOutcomeVariableId
 */

User.prototype['primaryOutcomeVariableId'] = undefined;
/**
 * A good primary outcome variable is something that you want to improve and that changes inexplicably. For instance, if you have anxiety, back pain or arthritis which is worse on some days than others, these would be good candidates for primary outcome variables.  Recording their severity and potential factors will help you identify hidden factors exacerbating or improving them. 
 * @member {String} primaryOutcomeVariableName
 */

User.prototype['primaryOutcomeVariableName'] = undefined;
/**
 * Ex: 1
 * @member {Boolean} pushNotificationsEnabled
 */

User.prototype['pushNotificationsEnabled'] = undefined;
/**
 * See https://oauth.net/2/grant-types/refresh-token/
 * @member {String} refreshToken
 */

User.prototype['refreshToken'] = undefined;
/**
 * Ex: [\"admin\"]
 * @member {String} roles
 */

User.prototype['roles'] = undefined;
/**
 * Ex: 1
 * @member {Boolean} sendPredictorEmails
 */

User.prototype['sendPredictorEmails'] = undefined;
/**
 * Ex: 1
 * @member {Boolean} sendReminderNotificationEmails
 */

User.prototype['sendReminderNotificationEmails'] = undefined;
/**
 * Share all studies, charts, and measurement data with all other users
 * @member {Boolean} shareAllData
 */

User.prototype['shareAllData'] = undefined;
/**
 * Ex: false
 * @member {Boolean} smsNotificationsEnabled
 */

User.prototype['smsNotificationsEnabled'] = undefined;
/**
 * Ex: 1
 * @member {Boolean} stripeActive
 */

User.prototype['stripeActive'] = undefined;
/**
 * Ex: cus_A8CEmcvl8jwLhV
 * @member {String} stripeId
 */

User.prototype['stripeId'] = undefined;
/**
 * Ex: monthly7
 * @member {String} stripePlan
 */

User.prototype['stripePlan'] = undefined;
/**
 * Ex: sub_ANTx3nOE7nzjQf
 * @member {String} stripeSubscription
 */

User.prototype['stripeSubscription'] = undefined;
/**
 * UTC ISO 8601 YYYY-MM-DDThh:mm:ss
 * @member {String} subscriptionEndsAt
 */

User.prototype['subscriptionEndsAt'] = undefined;
/**
 * Ex: google
 * @member {String} subscriptionProvider
 */

User.prototype['subscriptionProvider'] = undefined;
/**
 * Ex: 300
 * @member {Number} timeZoneOffset
 */

User.prototype['timeZoneOffset'] = undefined;
/**
 * Ex: 1
 * @member {Boolean} trackLocation
 */

User.prototype['trackLocation'] = undefined;
/**
 * When the record in the database was last updated. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format
 * @member {String} updatedAt
 */

User.prototype['updatedAt'] = undefined;
/**
 * Ex: 2013-12-03 15:25:13 UTC ISO 8601 YYYY-MM-DDThh:mm:ss
 * @member {String} userRegistered
 */

User.prototype['userRegistered'] = undefined;
/**
 * Ex: https://plus.google.com/+MikeSinn
 * @member {String} userUrl
 */

User.prototype['userUrl'] = undefined;
var _default = User;
exports["default"] = _default;