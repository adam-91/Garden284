import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../i18n";

export interface ArticleBoxInterface {
   id: number;
   class: string;
   tittle: string;
   subTittle: string;
   image: string;
   imageDescription: string;
}

const ArticleBox = (props: ArticleBoxInterface) => {
   // eslint-disable-next-line
   const { t, i18n } = useTranslation();
   let url = "/articles/";
   url = url + props.id.toString();

   return (
      <NavLink to={url}>
         <figure>
            <div className={props.class}>
               <img src={props.image} alt={props.imageDescription} />
               <figcaption>
                  <h2> {t(props.tittle)} </h2>
                  <p> {t(props.subTittle)} </p>
               </figcaption>
            </div>
         </figure>
      </NavLink>
   );
};

export default ArticleBox;
