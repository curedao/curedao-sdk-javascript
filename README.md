# CureDAO Unified Health API Javascript SDK

JavaScript client for the CureDAO community-owned platform for crowdsourced clinical research

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var CureDaoApi = require('cure_dao_unified_health_api');

var defaultClient = CureDaoApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"
// Configure OAuth2 access token for authorization: curedao_oauth2
var curedao_oauth2 = defaultClient.authentications['curedao_oauth2'];
curedao_oauth2.accessToken = "YOUR ACCESS TOKEN"

var api = new CureDaoApi.AnalyticsApi()
var opts = {
  'causeVariableName': "causeVariableName_example", // {String} Deprecated: Name of the hypothetical predictor variable.  Ex: Sleep Duration
  'effectVariableName': "effectVariableName_example", // {String} Deprecated: Name of the outcome variable of interest.  Ex: Overall Mood
  'causeVariableId': 56, // {Number} Variable id of the hypothetical predictor variable.  Ex: 1398
  'effectVariableId': 56, // {Number} Variable id of the outcome variable of interest.  Ex: 1398
  'predictorVariableName': "predictorVariableName_example", // {String} Name of the hypothetical predictor variable.  Ex: Sleep Duration
  'outcomeVariableName': "outcomeVariableName_example" // {String} Name of the outcome variable of interest.  Ex: Overall Mood
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getCorrelationExplanations(opts, callback);

```

## Documentation for API Endpoints

### client_id


- **Type**: API key
- **API key parameter name**: clientId
- **Location**: URL query string



### curedao_oauth2


- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: https://api.curedao.org/api/v1/oauth/authorize
- **Scopes**: 
  - basic: Allows you to read user info (display name, email, etc)
  - readmeasurements: Allows one to read a user&#39;s measurements
  - writemeasurements: Allows you to write user measurements

