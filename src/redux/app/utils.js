import { toInteger, isArray, isEmpty, pickBy, identity } from 'lodash';
import EntityAdapter from '../../helpers/EntityAdapter';

const userFields = {
	userID             : 'id',
	firstName          : 'first_name',
	lastName           : 'last_name',
	username           : 'username',
	langID             : 'language_id',
	balance            : 'balance',
	currencyID         : 'currency_id',
	currencyCode       : 'currency_code',
	birth              : 'birth',
	email              : 'email',
	country            : 'country',
	emailContact       : 'email_contact',
	phoneContact       : 'phone_contact',
	receiveNewsletters : 'receive_newsletters',
	phoneVerified      : 'phone_verified',
	emailVerified      : 'email_verified',
	cardVerified       : 'card_verified',
	passportVerified   : 'passport_verified',
	ageVerified        : 'age_verified',
	verificationStatus : 'verification_status',
	avatar             : 'avatar',
};

const userAdapter          = createUserAdapter();
const blockedFieldsAdapter = createBlockedFieldsAdapter();

// Adapting ---------------------------------------------------------------------------------------

export function adaptUser(rawData = {}) {

	userAdapter.clearExcludes();
	const adaptedData = userAdapter.adapt(rawData);

	return adaptedData;
}

export function adaptApiData(rawData = []) {
	if (!isArray(rawData) || isEmpty(rawData)) {
		throw Error('Invalid API data');
	}

	const dataItem = rawData[0];

	return {
		api_project : toInteger(dataItem.api_project),
		api_key     : dataItem.api_key,
		api_version : toInteger(dataItem.api_version),
		api_host    : toInteger(dataItem.api_host),
	};
}

export function adaptBlockedFields(rawBlockedFields) {
  const blockedFieldsObj = rawBlockedFields.reduce((obj, item) => {
    obj[item] = item;
    return obj;
  }, {});

	blockedFieldsAdapter.clearExcludes();
  const adaptedObject = blockedFieldsAdapter.adapt(blockedFieldsObj);

  return Object.keys(pickBy(adaptedObject, identity));
}

// Preparing --------------------------------------------------------------------------------------

export function prepareUserProfile(rawData = {}, blockedFields) {

  blockedFieldsAdapter.clearExcludes();

  blockedFields.forEach(field => blockedFieldsAdapter.addExcludeField(field));

  return blockedFieldsAdapter.prepare(rawData);
}

// Adapters ---------------------------------------------------------------------------------------

function createUserAdapter() {

	const adapter = new EntityAdapter();
	const rules = adapter.RULES;

	adapter.addField(rules.id, 'userID', userFields.userID);
	adapter.addField(rules.id, 'langID', userFields.langID);
	adapter.addField(rules.id, 'currencyID', userFields.currencyID);
	adapter.addField(rules.id, 'verificationStatus', userFields.verificationStatus);

	adapter.addField(rules.string, 'firstName', userFields.firstName);
	adapter.addField(rules.string, 'lastName', userFields.lastName);
	adapter.addField(rules.string, 'country', userFields.country);
	adapter.addField(rules.string, 'username', userFields.username);
	adapter.addField(rules.string, 'email', userFields.email);
	adapter.addField(rules.string, 'currencyCode', userFields.currencyCode);

	adapter.addField(rules.date, 'birth', userFields.birth);
	adapter.addField(rules.number, 'balance', userFields.balance);

	adapter.addField(rules.bool, 'emailContact', userFields.emailContact);
	adapter.addField(rules.bool, 'phoneContact', userFields.phoneContact);
	adapter.addField(rules.bool, 'receiveNewsletters', userFields.receiveNewsletters);
	adapter.addField(rules.bool, 'phoneVerified', userFields.phoneVerified);
	adapter.addField(rules.bool, 'emailVerified', userFields.emailVerified);
	adapter.addField(rules.bool, 'cardVerified', userFields.cardVerified);
	adapter.addField(rules.bool, 'passportVerified', userFields.passportVerified);
	adapter.addField(rules.bool, 'ageVerified', userFields.ageVerified);

	adapter.addField(rules.string, 'avatar', userFields.avatar);

	return adapter;
}

function createBlockedFieldsAdapter() {

	const adapter = new EntityAdapter();
	const rules = adapter.RULES;

	adapter.addField(rules.string, 'firstName', userFields.firstName);
	adapter.addField(rules.string, 'lastName', userFields.lastName);
	adapter.addField(rules.string, 'country', userFields.country);
	adapter.addField(rules.string, 'username', userFields.username);

	adapter.addField(rules.date, 'birth', userFields.birth);

	return adapter;
}
