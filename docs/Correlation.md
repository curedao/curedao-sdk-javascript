# CureDaoUnifiedHealthApi.Correlation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**averageDailyHighCause** | **Number** | Ex: 4.19 | [optional] 
**averageDailyLowCause** | **Number** | Ex: 1.97 | [optional] 
**averageEffect** | **Number** | Ex: 3.0791054117396 | [optional] 
**averageEffectFollowingHighCause** | **Number** | Ex: 3.55 | [optional] 
**averageEffectFollowingLowCause** | **Number** | Ex: 2.65 | [optional] 
**averageForwardPearsonCorrelationOverOnsetDelays** | **Number** | Ex: 0.396 | [optional] 
**averageReversePearsonCorrelationOverOnsetDelays** | **Number** | Ex: 0.453667 | [optional] 
**averageVote** | **Number** | Ex: 0.9855 | [optional] 
**causeChanges** | **Number** | Ex: 164 | [optional] 
**causeDataSource** | [**DataSource**](DataSource.md) |  | [optional] 
**causeUserVariableShareUserMeasurements** | **Number** | Ex: 1 | [optional] 
**causeVariableCategoryId** | **Number** | Ex: 6 | [optional] 
**causeVariableCategoryName** | **String** | Ex: Sleep | [optional] 
**causeVariableCombinationOperation** | **String** | Ex: MEAN | [optional] 
**causeVariableUnitAbbreviatedName** | **String** | Ex: /5 | [optional] 
**causeVariableId** | **Number** | Ex: 1448 | [optional] 
**causeVariableMostCommonConnectorId** | **Number** | Ex: 6 | [optional] 
**causeVariableName** | **String** | Ex: Sleep Quality | 
**confidenceInterval** | **Number** | Ex: 0.14344467795996 | [optional] 
**confidenceLevel** | **String** | Ex: high | [optional] 
**correlationCoefficient** | **Number** | Ex: 0.538 | [optional] 
**correlationIsContradictoryToOptimalValues** | **Boolean** | Ex: false | [optional] 
**createdAt** | **String** | Ex: 2016-12-28 20:47:30 UTC ISO 8601 YYYY-MM-DDThh:mm:ss | [optional] 
**criticalTValue** | **Number** | Calculated Statistic: Ex: 1.646 | [optional] 
**direction** | **String** | Ex: higher | [optional] 
**durationOfAction** | **Number** | User-Defined Variable Setting: The amount of time over which a predictor/stimulus event can exert an observable influence on an outcome variable value. For instance, aspirin (stimulus/predictor) typically decreases headache severity for approximately four hours (duration of action) following the onset delay.  Unit: Seconds | [optional] 
**durationOfActionInHours** | **Number** | User-Defined Variable Setting: The amount of time over which a predictor/stimulus event can exert an observable influence on an outcome variable value. For instance, aspirin (stimulus/predictor) typically decreases headache severity for approximately four hours (duration of action) following the onset delay.  Unit: Hours | [optional] 
**degreesOfFreedom** | **Number** | Ex: 200 | [optional] 
**effectNumberOfProcessedDailyMeasurements** | **Number** | Ex: 145 | [optional] 
**error** | **String** | Ex: optimalPearsonProduct is not defined | [optional] 
**effectChanges** | **Number** | Ex: 193 | [optional] 
**effectDataSource** | [**DataSource**](DataSource.md) |  | [optional] 
**effectSize** | **String** | Ex: moderately positive | [optional] 
**effectUnit** | **String** | Ex: /5 | [optional] 
**effectUserVariableShareUserMeasurements** | **Number** | Ex: 1 | [optional] 
**effectVariableCategoryId** | **Number** | Ex: 1 | [optional] 
**effectVariableCategoryName** | **String** | Ex: Emotions | [optional] 
**effectVariableCombinationOperation** | **String** | Ex: MEAN | [optional] 
**effectVariableCommonAlias** | **String** | Ex: Mood_(psychology) | [optional] 
**effectVariableUnitAbbreviatedName** | **String** | Ex: /5 | [optional] 
**effectVariableUnitId** | **Number** | Ex: 10 | [optional] 
**effectVariableUnitName** | **String** | Ex: 1 to 5 Rating | [optional] 
**effectVariableId** | **Number** | Ex: 1398 | [optional] 
**effectVariableMostCommonConnectorId** | **Number** | Ex: 10 | [optional] 
**effectVariableName** | **String** | Ex: Overall Mood | 
**experimentEndTime** | **String** | Ex: 2014-07-30 12:50:00 UTC ISO 8601 YYYY-MM-DDThh:mm:ss | [optional] 
**experimentStartTime** | **String** | Ex: 2012-05-06 21:15:00 UTC ISO 8601 YYYY-MM-DDThh:mm:ss | [optional] 
**forwardSpearmanCorrelationCoefficient** | **Number** | Ex: 0.528359 | [optional] 
**numberOfPairs** | **Number** | Ex: 298 | [optional] 
**onsetDelay** | **Number** | Ex: 0 | [optional] 
**onsetDelayInHours** | **Number** | Ex: 0 | [optional] 
**onsetDelayWithStrongestPearsonCorrelation** | **Number** | Ex: -86400 | [optional] 
**onsetDelayWithStrongestPearsonCorrelationInHours** | **Number** | Ex: -24 | [optional] 
**optimalPearsonProduct** | **Number** | Ex: 0.68582816186982 | [optional] 
**outcomeFillingValue** | **Number** | User-Defined Variable Setting: Ex: -1. Unit: User-specified or common. | [optional] 
**outcomeMaximumAllowedValue** | **Number** | User-Defined Variable Setting: Ex: 23. Unit: User-specified or common. | [optional] 
**outcomeMinimumAllowedValue** | **Number** | User-Defined Variable Setting: Ex: 0.1. Unit: User-specified or common. | [optional] 
**pearsonCorrelationWithNoOnsetDelay** | **Number** | Ex: 0.477 | [optional] 
**predictivePearsonCorrelation** | **Number** | Ex: 0.538 | [optional] 
**predictivePearsonCorrelationCoefficient** | **Number** | Ex: 0.538 | [optional] 
**predictorDataSources** | **String** | Ex: RescueTime | [optional] 
**predictorFillingValue** | **Number** | Ex: -1. Unit: User-specified or common. | [optional] 
**predictorMaximumAllowedValue** | **Number** | Ex: 200. Unit: User-specified or common. | [optional] 
**predictorMinimumAllowedValue** | **Number** | Ex: 30. Unit: User-specified or common. | [optional] 
**predictsHighEffectChange** | **Number** | Ex: 17. Unit: User-specified or common. | [optional] 
**predictsLowEffectChange** | **Number** | Ex: -11. Unit: User-specified or common. | [optional] 
**pValue** | **Number** | Ex: 0.39628900511586 | [optional] 
**qmScore** | **Number** | Ex: 0.528 | [optional] 
**reversePearsonCorrelationCoefficient** | **Number** | Ex: 0.01377184270977 | [optional] 
**shareUserMeasurements** | **Boolean** | Would you like to make this study publicly visible? | [optional] 
**sharingDescription** | **String** | Ex: N1 Study: Sleep Quality Predicts Higher Overall Mood | [optional] 
**sharingTitle** | **String** | Ex: N1 Study: Sleep Quality Predicts Higher Overall Mood | [optional] 
**significantDifference** | **Boolean** | Ex: 1 | [optional] 
**statisticalSignificance** | **Number** | Ex: 0.9813 | [optional] 
**strengthLevel** | **String** | Ex: moderate | [optional] 
**strongestPearsonCorrelationCoefficient** | **Number** | Ex: 0.613 | [optional] 
**studyHtml** | [**StudyHtml**](StudyHtml.md) |  | [optional] 
**studyImages** | [**StudyImages**](StudyImages.md) |  | [optional] 
**studyLinks** | [**StudyLinks**](StudyLinks.md) |  | [optional] 
**studyText** | [**StudyText**](StudyText.md) |  | [optional] 
**tValue** | **Number** | Ex: 9.6986079652717 | [optional] 
**updatedAt** | **String** | Ex: 2017-05-06 15:40:38 UTC ISO 8601 YYYY-MM-DDThh:mm:ss | [optional] 
**userId** | **Number** | Ex: 230 | [optional] 
**userVote** | **Number** | Ex: 1 | [optional] 
**valuePredictingHighOutcome** | **Number** | Ex: 4.14 | [optional] 
**valuePredictingLowOutcome** | **Number** | Ex: 3.03 | [optional] 
**outcomeDataSources** | **String** | Sources used to collect data for the outcome variable | [optional] 
**principalInvestigator** | **String** | Mike Sinn | [optional] 
**reverseCorrelation** | **Number** | Correlation when cause and effect are reversed. For any causal relationship, the forward correlation should exceed the reverse correlation. | [optional] 
**averagePearsonCorrelationCoefficientOverOnsetDelays** | **Number** | Ex:  | [optional] 
**causeNumberOfRawMeasurements** | **Number** | Ex: 14764 | [optional] 
**correlationsOverDurationsOfAction** | [**[Correlation]**](Correlation.md) | Correlations calculated with various duration of action hyper-parameters | [optional] 
**correlationsOverOnsetDelays** | [**[Correlation]**](Correlation.md) | Correlations calculated with various onset delay hyper-parameters | [optional] 
**correlationsOverDurationsOfActionChartConfig** | **Object** | Highchart config illustrating correlations calculated with various duration of action hyper-parameters | [optional] 
**correlationsOverOnsetDelaysChartConfig** | **Object** | Highchart config illustrating correlations calculated with various onset delay hyper-parameters | [optional] 
**numberOfUsers** | **Number** | Ex: 1 | [optional] 
**rawCauseMeasurementSignificance** | **Number** | Ex: 1 | [optional] 
**rawEffectMeasurementSignificance** | **Number** | Ex: 1 | [optional] 
**reversePairsCount** | **String** | Ex: 1 | [optional] 
**voteStatisticalSignificance** | **Number** | Ex: 1 | [optional] 
**aggregateQMScore** | **Number** | Ex: 0.011598441286655 | [optional] 
**forwardPearsonCorrelationCoefficient** | **Number** | Ex: 0.0333 | [optional] 
**numberOfCorrelations** | **Number** | Ex: 6 | [optional] 
**vote** | **Number** | Ex: 1 or 0 | [optional] 


