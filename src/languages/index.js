import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { LangConstant, KeyConstant } from "const";
import { getCookies } from "utils";
import enLang from "./resources/en";
import viLang from "./resources/vi";

const codeLang = getCookies(KeyConstant.KEY_LANG_CODE);

i18next.use(initReactI18next).init(
  {
    interpolation: {
      escapeValue: false,
    },
    lng: codeLang ? codeLang : LangConstant.DEFAULT_LANG,
    resources: {
      en: enLang,
      vi: viLang,
    },
    defaultNS: LangConstant.NS_COMMON,
  },
  (err, t) => {
    if (err) {
      return console.error(err);
    }
  },
);

export default i18next;
