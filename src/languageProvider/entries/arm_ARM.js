import antdArm from 'antd/lib/locale-provider/ru_RU';
import appLocaleData from 'react-intl/locale-data/am';
import armMessages from '../locales/arm_ARM.json';

const ArmLang = {
  messages: {
    ...armMessages,
  },
  antd: antdArm,
  locale: 'am',
  data: appLocaleData,
};
export default ArmLang;
