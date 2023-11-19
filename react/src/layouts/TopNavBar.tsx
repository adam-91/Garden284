import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../i18n";

const TopNavBar = () => {
   // eslint-disable-next-line
   const { t, i18n } = useTranslation();

   return (
      <div className="topNavBar">
         <nav>
            <ul className="topNavBar">
               <li className="topNavBar__logo">
                  <NavLink to="/"> {t("G284")} </NavLink>
               </li>
               <li className="topNavBar__li order1">
                  <NavLink to="/calendar"> Calendar </NavLink>
               </li>
               <li className="topNavBar__li order1">
                  <NavLink to="/plants"> Plants </NavLink>
               </li>
               <li className="topNavBar__li order1">
                  <NavLink to="/articles"> Articles </NavLink>
               </li>
               <li className="topNavBar__li order3">
                  <NavLink to="/galery"> Galery </NavLink>
               </li>
               <li className="topNavBar__li order3">
                  <NavLink to="/about"> About </NavLink>
               </li>
               <li className="topNavBar__li order3">
                  <NavLink to="/contact"> Contact </NavLink>
               </li>
            </ul>
         </nav>
      </div>
   );
};

export default TopNavBar;
