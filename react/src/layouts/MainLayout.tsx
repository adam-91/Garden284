import { useTranslation } from "react-i18next";
import "../i18n";

const MainLayout = () => {
   // eslint-disable-next-line
   const { t, i18n } = useTranslation();
   return (
      <div>
         <header className="header">
            <div className="centered">
               <h1 className="tittle">
                  <span className="tittle tittle--main">
                     {" "}
                     {t("Garden 284")}{" "}
                  </span>
                  <span className="tittle tittle--sub">
                     {t("Gardening motto")}
                  </span>
               </h1>
            </div>
         </header>

         <main>
            <div className="padding"> </div>

            <section id="mainArticle">
               <div className="fig-left">
                  <figure>
                     <img
                        src="../images/tree-2027899.svg"
                        alt="Tree grafic"
                     ></img>
                     <figcaption>This webside is about plants.</figcaption>
                  </figure>
                  <h1>
                     {" "}
                     This wabside is create to learnig HTML5, CSS, TS and React.
                  </h1>
                  <h3> </h3>
               </div>
            </section>
            <section>
               <figure></figure>
            </section>
            <section id="other">
               <figure></figure>
            </section>
         </main>

         <h1> {t("Hello world")}</h1>
      </div>
   );
};

export default MainLayout;
