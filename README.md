# CureDAO Unified Health API Javascript SDK

JavaScript client for the CureDAO community-owned platform for crowdsourced clinical research

## Getting Started

### Authentication

To use the CureDAO API, you first need to get an access token as described below.  Once you have the token, include it in any of the [API requests documented here](https://curedao.org/api-docs) using the `Authorization` header in the format `Bearer YOUR_TOKEN_HERE`.

#### Option 1: Use Demo Data 
If you don't have your own data yet, you can use the access token `demo` in the `Authorization` header in the format `Bearer demo`.

#### Option 2: Access Your Own Data
- Go to the [Settings](https://app.curedao.org/#/app/settings)
- Click copy your Personal Access Token
- Include it in your [API requests](https://curedao.org/api-docs) using the `Authorization` header in the format `Bearer YOUR_TOKEN_HERE`

#### Option 3: Use it in Your Own App
- Go to the [App Builder](https://builder.curedao.org/#/app/configuration)
- Click `New App` and fill out the form
- Follow the OAuth integration instructions in the `Integration Guide` link

### Common API Usage Examples
Instead of using this SDK, you can also use the requests in our [interactive API documenation](https://curedao.org/api-docs).  Just click the dots to the right of the "LANGUAGE" section and select `Node` or `Javascript`.  Then you can just copy the request for usage in your project.

Here are some common usages:
- [Get Units](https://curedao.readme.io/reference/getunits)
- [Get Variables](https://curedao.readme.io/reference/getvariables)
- [Get Variable Categories](https://curedao.readme.io/reference/getvariablecategories)
- [Get a Specific Variable](https://curedao.readme.io/reference/getvariables)
- [Save a Measurement](https://curedao.readme.io/reference/postmeasurements)
- [Get Measurements](https://curedao.readme.io/reference/getmeasurements)

### [Get Variables](https://curedao.readme.io/reference/getvariables)
![How to Get Variables](https://user-images.githubusercontent.com/2808553/187514806-a3261932-106a-49b9-b760-2b4b52b384c7.png)

### [Get a Specific Variable](https://curedao.readme.io/reference/getvariables)
![How to Get a Variable](https://user-images.githubusercontent.com/2808553/187515384-cb1a721b-4534-4e5c-9c94-544288b49780.png)

### [Save a Measurement](https://curedao.readme.io/reference/postmeasurements)
![Save a Measurement](https://user-images.githubusercontent.com/2808553/187521885-e9e1dee3-c07c-4073-a503-315ce345fc52.png)

### [Get Measurements](https://curedao.readme.io/reference/getmeasurements)
![Get Measurements](https://user-images.githubusercontent.com/2808553/187522064-9f176e08-53f4-47cb-8084-8feb8cdb3428.png)

## Using this SDK Library

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

### OAuth

- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: https://api.curedao.org/api/v1/oauth/authorize
- **Scopes**: 
  - basic: Allows you to read user info (display name, email, etc)
  - readmeasurements: Allows one to read a user's measurements
  - writemeasurements: Allows you to write user measurements

