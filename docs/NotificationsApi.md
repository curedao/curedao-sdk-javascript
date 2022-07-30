# CureDaoUnifiedHealthApi.NotificationsApi

All URIs are relative to *https://app.quantimo.do/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNotificationPreferences**](NotificationsApi.md#getNotificationPreferences) | **GET** /v3/notificationPreferences | Get NotificationPreferences
[**postDeviceToken**](NotificationsApi.md#postDeviceToken) | **POST** /v3/deviceTokens | Post DeviceTokens



## getNotificationPreferences

> getNotificationPreferences()

Get NotificationPreferences

Get NotificationPreferences

### Example

```javascript
import CureDaoUnifiedHealthApi from 'cure_dao_unified_health_api';

let apiInstance = new CureDaoUnifiedHealthApi.NotificationsApi();
apiInstance.getNotificationPreferences((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postDeviceToken

> postDeviceToken(body)

Post DeviceTokens

Post user token for Android, iOS, or web push notifications

### Example

```javascript
import CureDaoUnifiedHealthApi from 'cure_dao_unified_health_api';

let apiInstance = new CureDaoUnifiedHealthApi.NotificationsApi();
let body = new CureDaoUnifiedHealthApi.DeviceToken(); // DeviceToken | The platform and token
apiInstance.postDeviceToken(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DeviceToken**](DeviceToken.md)| The platform and token | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

