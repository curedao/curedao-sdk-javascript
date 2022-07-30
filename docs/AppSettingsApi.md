# CureDaoUnifiedHealthApi.AppSettingsApi

All URIs are relative to *https://app.quantimo.do/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAppSettings**](AppSettingsApi.md#getAppSettings) | **GET** /v3/appSettings | Get client app settings



## getAppSettings

> AppSettingsResponse getAppSettings(opts)

Get client app settings

Get the settings for your application configurable at https://builder.curedao.org

### Example

```javascript
import CureDaoUnifiedHealthApi from 'cure_dao_unified_health_api';

let apiInstance = new CureDaoUnifiedHealthApi.AppSettingsApi();
let opts = {
  'clientId': "clientId_example", // String | Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org
  'clientSecret': "clientSecret_example" // String | This is the secret for your obtained clientId. We use this to ensure that only your application uses the clientId.  Obtain this by creating a free application at [https://builder.curedao.org](https://builder.curedao.org).
};
apiInstance.getAppSettings(opts, (error, data, response) => {
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
 **clientId** | **String**| Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org | [optional] 
 **clientSecret** | **String**| This is the secret for your obtained clientId. We use this to ensure that only your application uses the clientId.  Obtain this by creating a free application at [https://builder.curedao.org](https://builder.curedao.org). | [optional] 

### Return type

[**AppSettingsResponse**](AppSettingsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

