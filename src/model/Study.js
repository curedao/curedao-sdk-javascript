/**
 * CureDAO Unified Health API
 * A community-owned platform for crowdsourced clinical research
 *
 * The version of the OpenAPI document: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Card from './Card';
import Correlation from './Correlation';
import ParticipantInstruction from './ParticipantInstruction';
import StudyCharts from './StudyCharts';
import StudyHtml from './StudyHtml';
import StudyImages from './StudyImages';
import StudyLinks from './StudyLinks';
import StudySharing from './StudySharing';
import StudyText from './StudyText';
import StudyVotes from './StudyVotes';
import Variable from './Variable';

/**
 * The Study model module.
 * @module model/Study
 * @version 0.0.1
 */
class Study {
    /**
     * Constructs a new <code>Study</code>.
     * A study analyzes the relationship between a predictor variable like gluten-intake and an outcome of interest such as overall mood.
     * @alias module:model/Study
     * @param type {String} Ex: population, cohort, or individual
     */
    constructor(type) {

        Study.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) {
        obj['type'] = type;
    }

    /**
     * Constructs a <code>Study</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Study} obj Optional instance to populate.
     * @return {module:model/Study} The populated <code>Study</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Study();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('causeVariable')) {
                obj['causeVariable'] = Variable.constructFromObject(data['causeVariable']);
            }
            if (data.hasOwnProperty('causeVariableName')) {
                obj['causeVariableName'] = ApiClient.convertToType(data['causeVariableName'], 'String');
            }
            if (data.hasOwnProperty('studyCharts')) {
                obj['studyCharts'] = StudyCharts.constructFromObject(data['studyCharts']);
            }
            if (data.hasOwnProperty('effectVariable')) {
                obj['effectVariable'] = Variable.constructFromObject(data['effectVariable']);
            }
            if (data.hasOwnProperty('effectVariableName')) {
                obj['effectVariableName'] = ApiClient.convertToType(data['effectVariableName'], 'String');
            }
            if (data.hasOwnProperty('participantInstructions')) {
                obj['participantInstructions'] = ParticipantInstruction.constructFromObject(data['participantInstructions']);
            }
            if (data.hasOwnProperty('statistics')) {
                obj['statistics'] = Correlation.constructFromObject(data['statistics']);
            }
            if (data.hasOwnProperty('studyCard')) {
                obj['studyCard'] = Card.constructFromObject(data['studyCard']);
            }
            if (data.hasOwnProperty('studyHtml')) {
                obj['studyHtml'] = StudyHtml.constructFromObject(data['studyHtml']);
            }
            if (data.hasOwnProperty('studyImages')) {
                obj['studyImages'] = StudyImages.constructFromObject(data['studyImages']);
            }
            if (data.hasOwnProperty('studyLinks')) {
                obj['studyLinks'] = StudyLinks.constructFromObject(data['studyLinks']);
            }
            if (data.hasOwnProperty('studySharing')) {
                obj['studySharing'] = StudySharing.constructFromObject(data['studySharing']);
            }
            if (data.hasOwnProperty('studyText')) {
                obj['studyText'] = StudyText.constructFromObject(data['studyText']);
            }
            if (data.hasOwnProperty('studyVotes')) {
                obj['studyVotes'] = StudyVotes.constructFromObject(data['studyVotes']);
            }
            if (data.hasOwnProperty('joined')) {
                obj['joined'] = ApiClient.convertToType(data['joined'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Ex: population, cohort, or individual
 * @member {String} type
 */
Study.prototype['type'] = undefined;

/**
 * The user id of the principal investigator or subject if an individual studies
 * @member {Number} userId
 */
Study.prototype['userId'] = undefined;

/**
 * ID of the cohort study which is necessary to allow participants to join
 * @member {String} id
 */
Study.prototype['id'] = undefined;

/**
 * @member {module:model/Variable} causeVariable
 */
Study.prototype['causeVariable'] = undefined;

/**
 * Ex: Sleep Quality
 * @member {String} causeVariableName
 */
Study.prototype['causeVariableName'] = undefined;

/**
 * @member {module:model/StudyCharts} studyCharts
 */
Study.prototype['studyCharts'] = undefined;

/**
 * @member {module:model/Variable} effectVariable
 */
Study.prototype['effectVariable'] = undefined;

/**
 * Ex: Overall Mood
 * @member {String} effectVariableName
 */
Study.prototype['effectVariableName'] = undefined;

/**
 * @member {module:model/ParticipantInstruction} participantInstructions
 */
Study.prototype['participantInstructions'] = undefined;

/**
 * @member {module:model/Correlation} statistics
 */
Study.prototype['statistics'] = undefined;

/**
 * @member {module:model/Card} studyCard
 */
Study.prototype['studyCard'] = undefined;

/**
 * @member {module:model/StudyHtml} studyHtml
 */
Study.prototype['studyHtml'] = undefined;

/**
 * @member {module:model/StudyImages} studyImages
 */
Study.prototype['studyImages'] = undefined;

/**
 * @member {module:model/StudyLinks} studyLinks
 */
Study.prototype['studyLinks'] = undefined;

/**
 * @member {module:model/StudySharing} studySharing
 */
Study.prototype['studySharing'] = undefined;

/**
 * @member {module:model/StudyText} studyText
 */
Study.prototype['studyText'] = undefined;

/**
 * @member {module:model/StudyVotes} studyVotes
 */
Study.prototype['studyVotes'] = undefined;

/**
 * True if you are sharing your data with this study
 * @member {Boolean} joined
 */
Study.prototype['joined'] = undefined;






export default Study;

