import { useTranslation } from "react-i18next";

const PageNotFound = () => {
   // eslint-disable-next-line
   const { t, i18n } = useTranslation();

   return (
      <div>
         {" "}
         <div className="pageNotFound"></div>
         <div className="padding"> </div>
         <h1> {t("Page not found")}</h1> <div className="padding"> </div>
      </div>
   );
};

export default PageNotFound;
