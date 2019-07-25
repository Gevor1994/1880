import EnLang from './entries/en-US';
import RuLang from './entries/ru_RU';
import ArmLang from './entries/arm_ARM';
import { addLocaleData } from 'react-intl';

const AppLocale = {
    en: EnLang,
    ru: RuLang,
    arm: ArmLang,
};
addLocaleData(AppLocale.en.data);
addLocaleData(AppLocale.ru.data);
addLocaleData(AppLocale.arm.data);

export default AppLocale;
