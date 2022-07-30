# CureDaoUnifiedHealthApi.MeasurementsApi

All URIs are relative to *https://app.quantimo.do/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteMeasurement**](MeasurementsApi.md#deleteMeasurement) | **DELETE** /v3/measurements/delete | Delete a measurement
[**getMeasurements**](MeasurementsApi.md#getMeasurements) | **GET** /v3/measurements | Get measurements for this user
[**getPairs**](MeasurementsApi.md#getPairs) | **GET** /v3/pairs | Get pairs of measurements for correlational analysis
[**measurementExportRequest**](MeasurementsApi.md#measurementExportRequest) | **POST** /v2/measurements/exportRequest | Post Request for Measurements CSV
[**postMeasurements**](MeasurementsApi.md#postMeasurements) | **POST** /v3/measurements/post | Post a new set or update existing measurements to the database
[**updateMeasurement**](MeasurementsApi.md#updateMeasurement) | **POST** /v3/measurements/update | Update a measurement



## deleteMeasurement

> CommonResponse deleteMeasurement()

Delete a measurement

Delete a previously submitted measurement

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

let apiInstance = new CureDaoUnifiedHealthApi.MeasurementsApi();
apiInstance.deleteMeasurement((error, data, response) => {
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

[**CommonResponse**](CommonResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [curedao_oauth2](../README.md#curedao_oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMeasurements

> [Measurement] getMeasurements(opts)

Get measurements for this user

Measurements are any value that can be recorded like daily steps, a mood rating, or apples eaten.

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

let apiInstance = new CureDaoUnifiedHealthApi.MeasurementsApi();
let opts = {
  'variableName': "variableName_example", // String | Name of the variable you want measurements for
  'sort': "sort_example", // String | Sort by one of the listed field names. If the field name is prefixed with `-`, it will sort in descending order.
  'limit': 100, // Number | The LIMIT is used to limit the number of results returned. So if youhave 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records.
  'offset': 56, // Number | OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause.If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
  'variableCategoryName': "variableCategoryName_example", // String | Ex: Emotions, Treatments, Symptoms...
  'updatedAt': "updatedAt_example", // String | When the record was last updated. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local.
  'userId': 3.4, // Number | User's id
  'sourceName': "sourceName_example", // String | ID of the source you want measurements for (supports exact name match only)
  'connectorName': "connectorName_example", // String | Ex: facebook
  'value': "value_example", // String | Value of measurement
  'unitName': "unitName_example", // String | Ex: Milligrams
  'earliestMeasurementTime': "earliestMeasurementTime_example", // String | Excluded records with measurement times earlier than this value. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss  datetime format. Time zone should be UTC and not local.
  'latestMeasurementTime': "latestMeasurementTime_example", // String | Excluded records with measurement times later than this value. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss  datetime format. Time zone should be UTC and not local.
  'createdAt': "createdAt_example", // String | When the record was first created. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local.
  'id': 56, // Number | Measurement id
  'groupingWidth': 56, // Number | The time (in seconds) over which measurements are grouped together
  'groupingTimezone': "groupingTimezone_example", // String | The time (in seconds) over which measurements are grouped together
  'doNotProcess': true, // Boolean | Ex: true
  'clientId': "clientId_example", // String | Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org
  'doNotConvert': true, // Boolean | Ex: 1
  'minMaxFilter': true // Boolean | Ex: 1
};
apiInstance.getMeasurements(opts, (error, data, response) => {
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
 **variableName** | **String**| Name of the variable you want measurements for | [optional] 
 **sort** | **String**| Sort by one of the listed field names. If the field name is prefixed with &#x60;-&#x60;, it will sort in descending order. | [optional] 
 **limit** | **Number**| The LIMIT is used to limit the number of results returned. So if youhave 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records. | [optional] [default to 100]
 **offset** | **Number**| OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause.If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned. | [optional] 
 **variableCategoryName** | **String**| Ex: Emotions, Treatments, Symptoms... | [optional] 
 **updatedAt** | **String**| When the record was last updated. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local. | [optional] 
 **userId** | **Number**| User&#39;s id | [optional] 
 **sourceName** | **String**| ID of the source you want measurements for (supports exact name match only) | [optional] 
 **connectorName** | **String**| Ex: facebook | [optional] 
 **value** | **String**| Value of measurement | [optional] 
 **unitName** | **String**| Ex: Milligrams | [optional] 
 **earliestMeasurementTime** | **String**| Excluded records with measurement times earlier than this value. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss  datetime format. Time zone should be UTC and not local. | [optional] 
 **latestMeasurementTime** | **String**| Excluded records with measurement times later than this value. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss  datetime format. Time zone should be UTC and not local. | [optional] 
 **createdAt** | **String**| When the record was first created. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local. | [optional] 
 **id** | **Number**| Measurement id | [optional] 
 **groupingWidth** | **Number**| The time (in seconds) over which measurements are grouped together | [optional] 
 **groupingTimezone** | **String**| The time (in seconds) over which measurements are grouped together | [optional] 
 **doNotProcess** | **Boolean**| Ex: true | [optional] 
 **clientId** | **String**| Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org | [optional] 
 **doNotConvert** | **Boolean**| Ex: 1 | [optional] 
 **minMaxFilter** | **Boolean**| Ex: 1 | [optional] 

### Return type

[**[Measurement]**](Measurement.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [curedao_oauth2](../README.md#curedao_oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPairs

> [Pair] getPairs(opts)

Get pairs of measurements for correlational analysis

Pairs cause measurements with effect measurements grouped over the duration of action after the onset delay.

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

let apiInstance = new CureDaoUnifiedHealthApi.MeasurementsApi();
let opts = {
  'causeVariableName': "causeVariableName_example", // String | Deprecated: Name of the hypothetical predictor variable.  Ex: Sleep Duration
  'effectVariableName': "effectVariableName_example", // String | Deprecated: Name of the outcome variable of interest.  Ex: Overall Mood
  'causeVariableId': 56, // Number | Variable id of the hypothetical predictor variable.  Ex: 1398
  'effectVariableId': 56, // Number | Variable id of the outcome variable of interest.  Ex: 1398
  'predictorVariableName': "predictorVariableName_example", // String | Name of the hypothetical predictor variable.  Ex: Sleep Duration
  'outcomeVariableName': "outcomeVariableName_example", // String | Name of the outcome variable of interest.  Ex: Overall Mood
  'effectUnitName': "effectUnitName_example", // String | Name for the unit effect measurements to be returned in
  'userId': 3.4, // Number | User's id
  'causeUnitName': "causeUnitName_example", // String | Name for the unit cause measurements to be returned in
  'onsetDelay': "onsetDelay_example", // String | The amount of time in seconds that elapses after the predictor/stimulus event before the outcome as perceived by a self-tracker is known as the onset delay. For example, the onset delay between the time a person takes an aspirin (predictor/stimulus event) and the time a person perceives a change in their headache severity (outcome) is approximately 30 minutes.
  'durationOfAction': "durationOfAction_example", // String | The amount of time over which a predictor/stimulus event can exert an observable influence on an outcome variable value. For instance, aspirin (stimulus/predictor) typically decreases headache severity for approximately four hours (duration of action) following the onset delay. Unit: Seconds
  'earliestMeasurementTime': "earliestMeasurementTime_example", // String | Excluded records with measurement times earlier than this value. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss  datetime format. Time zone should be UTC and not local.
  'latestMeasurementTime': "latestMeasurementTime_example", // String | Excluded records with measurement times later than this value. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss  datetime format. Time zone should be UTC and not local.
  'limit': 100, // Number | The LIMIT is used to limit the number of results returned. So if youhave 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records.
  'offset': 56, // Number | OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause.If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
  'sort': "sort_example" // String | Sort by one of the listed field names. If the field name is prefixed with `-`, it will sort in descending order.
};
apiInstance.getPairs(opts, (error, data, response) => {
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
 **causeVariableName** | **String**| Deprecated: Name of the hypothetical predictor variable.  Ex: Sleep Duration | [optional] 
 **effectVariableName** | **String**| Deprecated: Name of the outcome variable of interest.  Ex: Overall Mood | [optional] 
 **causeVariableId** | **Number**| Variable id of the hypothetical predictor variable.  Ex: 1398 | [optional] 
 **effectVariableId** | **Number**| Variable id of the outcome variable of interest.  Ex: 1398 | [optional] 
 **predictorVariableName** | **String**| Name of the hypothetical predictor variable.  Ex: Sleep Duration | [optional] 
 **outcomeVariableName** | **String**| Name of the outcome variable of interest.  Ex: Overall Mood | [optional] 
 **effectUnitName** | **String**| Name for the unit effect measurements to be returned in | [optional] 
 **userId** | **Number**| User&#39;s id | [optional] 
 **causeUnitName** | **String**| Name for the unit cause measurements to be returned in | [optional] 
 **onsetDelay** | **String**| The amount of time in seconds that elapses after the predictor/stimulus event before the outcome as perceived by a self-tracker is known as the onset delay. For example, the onset delay between the time a person takes an aspirin (predictor/stimulus event) and the time a person perceives a change in their headache severity (outcome) is approximately 30 minutes. | [optional] 
 **durationOfAction** | **String**| The amount of time over which a predictor/stimulus event can exert an observable influence on an outcome variable value. For instance, aspirin (stimulus/predictor) typically decreases headache severity for approximately four hours (duration of action) following the onset delay. Unit: Seconds | [optional] 
 **earliestMeasurementTime** | **String**| Excluded records with measurement times earlier than this value. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss  datetime format. Time zone should be UTC and not local. | [optional] 
 **latestMeasurementTime** | **String**| Excluded records with measurement times later than this value. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss  datetime format. Time zone should be UTC and not local. | [optional] 
 **limit** | **Number**| The LIMIT is used to limit the number of results returned. So if youhave 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records. | [optional] [default to 100]
 **offset** | **Number**| OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause.If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned. | [optional] 
 **sort** | **String**| Sort by one of the listed field names. If the field name is prefixed with &#x60;-&#x60;, it will sort in descending order. | [optional] 

### Return type

[**[Pair]**](Pair.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [curedao_oauth2](../README.md#curedao_oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## measurementExportRequest

> Number measurementExportRequest(opts)

Post Request for Measurements CSV

Use this endpoint to schedule a CSV export containing all user measurements to be emailed to the user within 24 hours.

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

let apiInstance = new CureDaoUnifiedHealthApi.MeasurementsApi();
let opts = {
  'userId': 3.4 // Number | User's id
};
apiInstance.measurementExportRequest(opts, (error, data, response) => {
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

**Number**

### Authorization

[bearerAuth](../README.md#bearerAuth), [curedao_oauth2](../README.md#curedao_oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postMeasurements

> PostMeasurementsResponse postMeasurements(body, opts)

Post a new set or update existing measurements to the database

You can submit or update multiple measurements in a \&quot;measurements\&quot; sub-array.  If the variable these measurements correspond to does not already exist in the database, it will be automatically added.

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

let apiInstance = new CureDaoUnifiedHealthApi.MeasurementsApi();
let body = [new CureDaoUnifiedHealthApi.MeasurementSet()]; // [MeasurementSet] | An array of measurement sets containing measurement items you want to insert.
let opts = {
  'userId': 3.4 // Number | User's id
};
apiInstance.postMeasurements(body, opts, (error, data, response) => {
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
 **body** | [**[MeasurementSet]**](MeasurementSet.md)| An array of measurement sets containing measurement items you want to insert. | 
 **userId** | **Number**| User&#39;s id | [optional] 

### Return type

[**PostMeasurementsResponse**](PostMeasurementsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [curedao_oauth2](../README.md#curedao_oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateMeasurement

> CommonResponse updateMeasurement(body)

Update a measurement

Update a previously submitted measurement

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

let apiInstance = new CureDaoUnifiedHealthApi.MeasurementsApi();
let body = new CureDaoUnifiedHealthApi.MeasurementUpdate(); // MeasurementUpdate | The id as well as the new startTime, note, and/or value of the measurement to be updated
apiInstance.updateMeasurement(body, (error, data, response) => {
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
 **body** | [**MeasurementUpdate**](MeasurementUpdate.md)| The id as well as the new startTime, note, and/or value of the measurement to be updated | 

### Return type

[**CommonResponse**](CommonResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [curedao_oauth2](../README.md#curedao_oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

