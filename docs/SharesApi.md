# CureDaoUnifiedHealthApi.SharesApi

All URIs are relative to *https://app.quantimo.do/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteShare**](SharesApi.md#deleteShare) | **POST** /v3/shares/delete | Delete share
[**getShares**](SharesApi.md#getShares) | **GET** /v3/shares | Get Authorized Apps, Studies, and Individuals
[**inviteShare**](SharesApi.md#inviteShare) | **POST** /v3/shares/invite | Delete share



## deleteShare

> User deleteShare(clientIdToRevoke, opts)

Delete share

Remove access to user data for a given client_id associated with a given individual, app, or study

### Example

```javascript
import CureDaoUnifiedHealthApi from 'cure_dao_unified_health_api';
let defaultClient = CureDaoUnifiedHealthApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"
// Configure OAuth2 access token for authorization: curedao_oauth2
let curedao_oauth2 = defaultClient.authentications['curedao_oauth2'];
curedao_oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CureDaoUnifiedHealthApi.SharesApi();
let clientIdToRevoke = "clientIdToRevoke_example"; // String | Client id of the individual, study, or app that the user wishes to no longer have access to their data
let opts = {
  'reason': "reason_example" // String | Ex: I hate you!
};
apiInstance.deleteShare(clientIdToRevoke, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientIdToRevoke** | **String**| Client id of the individual, study, or app that the user wishes to no longer have access to their data | 
 **reason** | **String**| Ex: I hate you! | [optional] 

### Return type

[**User**](User.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [curedao_oauth2](../README.md#curedao_oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getShares

> GetSharesResponse getShares(opts)

Get Authorized Apps, Studies, and Individuals

This is a list of individuals, apps, or studies with access to your measurements.

### Example

```javascript
import CureDaoUnifiedHealthApi from 'cure_dao_unified_health_api';
let defaultClient = CureDaoUnifiedHealthApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"
// Configure OAuth2 access token for authorization: curedao_oauth2
let curedao_oauth2 = defaultClient.authentications['curedao_oauth2'];
curedao_oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CureDaoUnifiedHealthApi.SharesApi();
let opts = {
  'userId': 3.4, // Number | User's id
  'createdAt': "createdAt_example", // String | When the record was first created. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local.
  'updatedAt': "updatedAt_example", // String | When the record was last updated. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local.
  'clientId': "clientId_example", // String | Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org
  'appVersion': "appVersion_example", // String | Ex: 2.1.1.0
  'log': "log_example", // String | Username or email
  'pwd': "pwd_example" // String | User password
};
apiInstance.getShares(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| User&#39;s id | [optional] 
 **createdAt** | **String**| When the record was first created. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local. | [optional] 
 **updatedAt** | **String**| When the record was last updated. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local. | [optional] 
 **clientId** | **String**| Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org | [optional] 
 **appVersion** | **String**| Ex: 2.1.1.0 | [optional] 
 **log** | **String**| Username or email | [optional] 
 **pwd** | **String**| User password | [optional] 

### Return type

[**GetSharesResponse**](GetSharesResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [curedao_oauth2](../README.md#curedao_oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inviteShare

> User inviteShare(body, opts)

Delete share

Invite someone to view your measurements

### Example

```javascript
import CureDaoUnifiedHealthApi from 'cure_dao_unified_health_api';
let defaultClient = CureDaoUnifiedHealthApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"
// Configure OAuth2 access token for authorization: curedao_oauth2
let curedao_oauth2 = defaultClient.authentications['curedao_oauth2'];
curedao_oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CureDaoUnifiedHealthApi.SharesApi();
let body = new CureDaoUnifiedHealthApi.ShareInvitationBody(); // ShareInvitationBody | Details about person to share with
let opts = {
  'clientId': "clientId_example" // String | Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org
};
apiInstance.inviteShare(body, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ShareInvitationBody**](ShareInvitationBody.md)| Details about person to share with | 
 **clientId** | **String**| Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org | [optional] 

### Return type

[**User**](User.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [curedao_oauth2](../README.md#curedao_oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

