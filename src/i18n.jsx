import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from"i18next-browser-languagedetector";
import {initReacti18next} from "react-i18next";

const Languages = ["en","mon"]

i18n.use(Backend).use(LanguageDetector).use(initReacti18next).init({
    fallbackLng: "mon",
    debug: true,
    whitelist: Languages,
    detection: {
        order: ["queryString", "cookie"],
        cache: ["cookie"]
    },
    interpolation:{
        escapeValue:false
    }
})
export default i18n;