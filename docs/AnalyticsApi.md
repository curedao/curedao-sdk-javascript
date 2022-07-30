# CureDaoUnifiedHealthApi.AnalyticsApi

All URIs are relative to *https://app.quantimo.do/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCorrelationExplanations**](AnalyticsApi.md#getCorrelationExplanations) | **GET** /v3/correlations/explanations | Get correlation explanations
[**getCorrelations**](AnalyticsApi.md#getCorrelations) | **GET** /v3/correlations | Get correlations



## getCorrelationExplanations

> [Correlation] getCorrelationExplanations(opts)

Get correlation explanations

Get explanations of  correlations based on data from a single user.

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

let apiInstance = new CureDaoUnifiedHealthApi.AnalyticsApi();
let opts = {
  'causeVariableName': "causeVariableName_example", // String | Deprecated: Name of the hypothetical predictor variable.  Ex: Sleep Duration
  'effectVariableName': "effectVariableName_example", // String | Deprecated: Name of the outcome variable of interest.  Ex: Overall Mood
  'causeVariableId': 56, // Number | Variable id of the hypothetical predictor variable.  Ex: 1398
  'effectVariableId': 56, // Number | Variable id of the outcome variable of interest.  Ex: 1398
  'predictorVariableName': "predictorVariableName_example", // String | Name of the hypothetical predictor variable.  Ex: Sleep Duration
  'outcomeVariableName': "outcomeVariableName_example" // String | Name of the outcome variable of interest.  Ex: Overall Mood
};
apiInstance.getCorrelationExplanations(opts, (error, data, response) => {
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

### Return type

[**[Correlation]**](Correlation.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [curedao_oauth2](../README.md#curedao_oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCorrelations

> GetCorrelationsResponse getCorrelations(opts)

Get correlations

Get a list of correlations that can be used to display top predictors of a given outcome like mood, for instance.

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

let apiInstance = new CureDaoUnifiedHealthApi.AnalyticsApi();
let opts = {
  'causeVariableName': "causeVariableName_example", // String | Deprecated: Name of the hypothetical predictor variable.  Ex: Sleep Duration
  'effectVariableName': "effectVariableName_example", // String | Deprecated: Name of the outcome variable of interest.  Ex: Overall Mood
  'causeVariableId': 56, // Number | Variable id of the hypothetical predictor variable.  Ex: 1398
  'effectVariableId': 56, // Number | Variable id of the outcome variable of interest.  Ex: 1398
  'predictorVariableName': "predictorVariableName_example", // String | Name of the hypothetical predictor variable.  Ex: Sleep Duration
  'outcomeVariableName': "outcomeVariableName_example", // String | Name of the outcome variable of interest.  Ex: Overall Mood
  'sort': "sort_example", // String | Sort by one of the listed field names. If the field name is prefixed with `-`, it will sort in descending order.
  'limit': 100, // Number | The LIMIT is used to limit the number of results returned. So if youhave 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records.
  'offset': 56, // Number | OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause.If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
  'userId': 3.4, // Number | User's id
  'correlationCoefficient': "correlationCoefficient_example", // String | Pearson correlation coefficient between cause and effect after lagging by onset delay and grouping by duration of action
  'updatedAt': "updatedAt_example", // String | When the record was last updated. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local.
  'outcomesOfInterest': true, // Boolean | Only include correlations for which the effect is an outcome of interest for the user
  'clientId': "clientId_example", // String | Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org
  'commonOnly': true // Boolean | Return only public, anonymized and aggregated population data instead of user-specific variables
};
apiInstance.getCorrelations(opts, (error, data, response) => {
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
 **sort** | **String**| Sort by one of the listed field names. If the field name is prefixed with &#x60;-&#x60;, it will sort in descending order. | [optional] 
 **limit** | **Number**| The LIMIT is used to limit the number of results returned. So if youhave 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records. | [optional] [default to 100]
 **offset** | **Number**| OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause.If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned. | [optional] 
 **userId** | **Number**| User&#39;s id | [optional] 
 **correlationCoefficient** | **String**| Pearson correlation coefficient between cause and effect after lagging by onset delay and grouping by duration of action | [optional] 
 **updatedAt** | **String**| When the record was last updated. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local. | [optional] 
 **outcomesOfInterest** | **Boolean**| Only include correlations for which the effect is an outcome of interest for the user | [optional] 
 **clientId** | **String**| Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org | [optional] 
 **commonOnly** | **Boolean**| Return only public, anonymized and aggregated population data instead of user-specific variables | [optional] 

### Return type

[**GetCorrelationsResponse**](GetCorrelationsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [curedao_oauth2](../README.md#curedao_oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

