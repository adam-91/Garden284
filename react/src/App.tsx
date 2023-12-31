import { useState, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MainLayout from "./layouts/MainLayout";
import TopNavBar from "./layouts/TopNavBar";
import Foot from "./layouts/Foot";
import Calendar from "./features/Calendar";
import Plants from "./pages/Plants";
import Articles from "./pages/Articles";
import Galery from "./pages/Galery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import "./i18n";

const App = () => {
   // eslint-disable-next-line
   const [lang, setLang] = useState("en");
   // eslint-disable-next-line
   const { t, i18n } = useTranslation();

   return (
      <div>
         <Suspense fallback="...loading">
            <BrowserRouter>
               <TopNavBar />

               <Routes>
                  <Route path="/" element={<MainLayout />}>
                     {" "}
                     {t("Garden 284")}{" "}
                  </Route>
                  <Route path="/calendar" element={<Calendar />}>
                     {" "}
                     {t("Calendar")}{" "}
                  </Route>
                  <Route path="/plants" element={<Plants />}>
                     {" "}
                     {t("Plants")}{" "}
                  </Route>
                  <Route path="/articles" element={<Articles />}>
                     {" "}
                     {t("Articles")}{" "}
                  </Route>
                  <Route path="/galery" element={<Galery />}>
                     {" "}
                     {t("Galery")}{" "}
                  </Route>
                  <Route path="/about" element={<About />}>
                     {" "}
                     {t("About")}{" "}
                  </Route>
                  <Route path="/contact" element={<Contact />}>
                     {" "}
                     {t("Contact")}{" "}
                  </Route>
                  <Route path="*" element={<PageNotFound />}>
                     {" "}
                     {t("Page not found")}{" "}
                  </Route>
               </Routes>

               <Foot />
            </BrowserRouter>
         </Suspense>
      </div>
   );
};

export default App;
