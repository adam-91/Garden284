import { useTranslation } from "react-i18next";

const PageNotFound = () => {
   // eslint-disable-next-line
   const { t, i18n } = useTranslation();

   return (
      <div>
         {" "}
         <div className="pageNotFound">
            <div className="padding"> </div>
            <h1> {t("Page not found")}</h1>
            <div className="padding"> </div>
            <h2> 404 {t("Page not found")}</h2>
            <div className="padding"> </div>
         </div>
      </div>
   );
};

export default PageNotFound;
