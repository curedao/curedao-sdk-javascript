# CureDaoUnifiedHealthApi.UnitsApi

All URIs are relative to *https://app.quantimo.do/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUnitCategories**](UnitsApi.md#getUnitCategories) | **GET** /v3/unitCategories | Get unit categories
[**getUnits**](UnitsApi.md#getUnits) | **GET** /v3/units | Get units



## getUnitCategories

> [UnitCategory] getUnitCategories()

Get unit categories

Get a list of the categories of measurement units such as &#39;Distance&#39;, &#39;Duration&#39;, &#39;Energy&#39;, &#39;Frequency&#39;, &#39;Miscellany&#39;, &#39;Pressure&#39;, &#39;Proportion&#39;, &#39;Rating&#39;, &#39;Temperature&#39;, &#39;Volume&#39;, and &#39;Weight&#39;.

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

let apiInstance = new CureDaoUnifiedHealthApi.UnitsApi();
apiInstance.getUnitCategories((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[UnitCategory]**](UnitCategory.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [curedao_oauth2](../README.md#curedao_oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUnits

> [Unit] getUnits()

Get units

Get a list of the available measurement units

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

let apiInstance = new CureDaoUnifiedHealthApi.UnitsApi();
apiInstance.getUnits((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Unit]**](Unit.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [curedao_oauth2](../README.md#curedao_oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

