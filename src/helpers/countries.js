import localCountries from 'i18n-iso-countries';
import russianLocale from 'i18n-iso-countries/langs/ru';
import englishLocale from 'i18n-iso-countries/langs/en';
import ukrainianLocale from 'i18n-iso-countries/langs/uk';
import { LANGUAGES } from '../constants/common';

localCountries.registerLocale(russianLocale);
localCountries.registerLocale(englishLocale);
localCountries.registerLocale(ukrainianLocale);

export const getCountryName = (id, langID) => {
  return localCountries.getName(id, LANGUAGES[langID]);
};