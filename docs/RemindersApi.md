# CureDaoUnifiedHealthApi.RemindersApi

All URIs are relative to *https://app.quantimo.do/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteTrackingReminder**](RemindersApi.md#deleteTrackingReminder) | **DELETE** /v3/trackingReminders/delete | Delete Tracking Reminder
[**getTrackingReminderNotifications**](RemindersApi.md#getTrackingReminderNotifications) | **GET** /v3/trackingReminderNotifications | Get specific tracking reminder notifications
[**getTrackingReminders**](RemindersApi.md#getTrackingReminders) | **GET** /v3/trackingReminders | Get repeating tracking reminder settings
[**postTrackingReminderNotifications**](RemindersApi.md#postTrackingReminderNotifications) | **POST** /v3/trackingReminderNotifications | Snooze, skip, or track a tracking reminder notification
[**postTrackingReminders**](RemindersApi.md#postTrackingReminders) | **POST** /v3/trackingReminders | Store a Tracking Reminder



## deleteTrackingReminder

> CommonResponse deleteTrackingReminder(opts)

Delete Tracking Reminder

Stop getting notifications to record data for a variable.  Previously recorded measurements will be preserved.

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

let apiInstance = new CureDaoUnifiedHealthApi.RemindersApi();
let opts = {
  'userId': 3.4 // Number | User's id
};
apiInstance.deleteTrackingReminder(opts, (error, data, response) => {
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

### Return type

[**CommonResponse**](CommonResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [curedao_oauth2](../README.md#curedao_oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTrackingReminderNotifications

> GetTrackingReminderNotificationsResponse getTrackingReminderNotifications(opts)

Get specific tracking reminder notifications

Specific tracking reminder notification instances that still need to be tracked.

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

let apiInstance = new CureDaoUnifiedHealthApi.RemindersApi();
let opts = {
  'sort': "sort_example", // String | Sort by one of the listed field names. If the field name is prefixed with `-`, it will sort in descending order.
  'userId': 3.4, // Number | User's id
  'createdAt': "createdAt_example", // String | When the record was first created. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local.
  'updatedAt': "updatedAt_example", // String | When the record was last updated. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local.
  'limit': 100, // Number | The LIMIT is used to limit the number of results returned. So if youhave 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records.
  'offset': 56, // Number | OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause.If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
  'variableCategoryName': "variableCategoryName_example", // String | Ex: Emotions, Treatments, Symptoms...
  'reminderTime': "reminderTime_example", // String | Ex: (lt)2017-07-31 21:43:26
  'clientId': "clientId_example", // String | Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org
  'onlyPast': true, // Boolean | Ex: 1
  'includeDeleted': true // Boolean | Include deleted variables
};
apiInstance.getTrackingReminderNotifications(opts, (error, data, response) => {
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
 **sort** | **String**| Sort by one of the listed field names. If the field name is prefixed with &#x60;-&#x60;, it will sort in descending order. | [optional] 
 **userId** | **Number**| User&#39;s id | [optional] 
 **createdAt** | **String**| When the record was first created. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local. | [optional] 
 **updatedAt** | **String**| When the record was last updated. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local. | [optional] 
 **limit** | **Number**| The LIMIT is used to limit the number of results returned. So if youhave 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records. | [optional] [default to 100]
 **offset** | **Number**| OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause.If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned. | [optional] 
 **variableCategoryName** | **String**| Ex: Emotions, Treatments, Symptoms... | [optional] 
 **reminderTime** | **String**| Ex: (lt)2017-07-31 21:43:26 | [optional] 
 **clientId** | **String**| Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org | [optional] 
 **onlyPast** | **Boolean**| Ex: 1 | [optional] 
 **includeDeleted** | **Boolean**| Include deleted variables | [optional] 

### Return type

[**GetTrackingReminderNotificationsResponse**](GetTrackingReminderNotificationsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [curedao_oauth2](../README.md#curedao_oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTrackingReminders

> [TrackingReminder] getTrackingReminders(opts)

Get repeating tracking reminder settings

Users can be reminded to track certain variables at a specified frequency with a default value.

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

let apiInstance = new CureDaoUnifiedHealthApi.RemindersApi();
let opts = {
  'userId': 3.4, // Number | User's id
  'variableCategoryName': "variableCategoryName_example", // String | Ex: Emotions, Treatments, Symptoms...
  'createdAt': "createdAt_example", // String | When the record was first created. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local.
  'updatedAt': "updatedAt_example", // String | When the record was last updated. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local.
  'limit': 100, // Number | The LIMIT is used to limit the number of results returned. So if youhave 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records.
  'offset': 56, // Number | OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause.If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
  'sort': "sort_example", // String | Sort by one of the listed field names. If the field name is prefixed with `-`, it will sort in descending order.
  'clientId': "clientId_example", // String | Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org
  'appVersion': "appVersion_example" // String | Ex: 2.1.1.0
};
apiInstance.getTrackingReminders(opts, (error, data, response) => {
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
 **variableCategoryName** | **String**| Ex: Emotions, Treatments, Symptoms... | [optional] 
 **createdAt** | **String**| When the record was first created. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local. | [optional] 
 **updatedAt** | **String**| When the record was last updated. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local. | [optional] 
 **limit** | **Number**| The LIMIT is used to limit the number of results returned. So if youhave 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records. | [optional] [default to 100]
 **offset** | **Number**| OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause.If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned. | [optional] 
 **sort** | **String**| Sort by one of the listed field names. If the field name is prefixed with &#x60;-&#x60;, it will sort in descending order. | [optional] 
 **clientId** | **String**| Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org | [optional] 
 **appVersion** | **String**| Ex: 2.1.1.0 | [optional] 

### Return type

[**[TrackingReminder]**](TrackingReminder.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [curedao_oauth2](../README.md#curedao_oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postTrackingReminderNotifications

> CommonResponse postTrackingReminderNotifications(body, opts)

Snooze, skip, or track a tracking reminder notification

Snooze, skip, or track a tracking reminder notification

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

let apiInstance = new CureDaoUnifiedHealthApi.RemindersApi();
let body = [new CureDaoUnifiedHealthApi.TrackingReminderNotificationPost()]; // [TrackingReminderNotificationPost] | Id of the tracking reminder notification to be snoozed
let opts = {
  'userId': 3.4, // Number | User's id
  'clientId': "clientId_example" // String | Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org
};
apiInstance.postTrackingReminderNotifications(body, opts, (error, data, response) => {
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
 **body** | [**[TrackingReminderNotificationPost]**](TrackingReminderNotificationPost.md)| Id of the tracking reminder notification to be snoozed | 
 **userId** | **Number**| User&#39;s id | [optional] 
 **clientId** | **String**| Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org | [optional] 

### Return type

[**CommonResponse**](CommonResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [curedao_oauth2](../README.md#curedao_oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postTrackingReminders

> PostTrackingRemindersResponse postTrackingReminders(body)

Store a Tracking Reminder

This is to enable users to create reminders to track a variable with a default value at a specified frequency

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

let apiInstance = new CureDaoUnifiedHealthApi.RemindersApi();
let body = [new CureDaoUnifiedHealthApi.TrackingReminder()]; // [TrackingReminder] | TrackingReminder that should be stored
apiInstance.postTrackingReminders(body, (error, data, response) => {
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
 **body** | [**[TrackingReminder]**](TrackingReminder.md)| TrackingReminder that should be stored | 

### Return type

[**PostTrackingRemindersResponse**](PostTrackingRemindersResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [curedao_oauth2](../README.md#curedao_oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

