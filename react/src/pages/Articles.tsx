import { useTranslation } from "react-i18next";
import ArticleBox from "../layouts/ArticlleBox";
import "../i18n";

const Articles = () => {
   // eslint-disable-next-line
   const { t, i18n } = useTranslation();

   return (
      <div>
         <header className="articles">
            <div className="tittle">
               <h1> {t("articles")} </h1>
            </div>
         </header>
         <div className="padding"> </div>
         <section className="articleList">
            <ArticleBox
               id={1}
               class="one"
               tittle="Article 1"
               subTittle="Lorem upsum dolor sit amet."
               image="../images/pexels-purple_flowers_S.jpg"
               imageDescription="flowers"
            />

            <ArticleBox
               id={2}
               class="two"
               tittle="Article 2"
               subTittle="Lorem upsum dolor sit amet."
               image="../images/pexels-purple_flowers_S.jpg"
               imageDescription=""
            />
            <ArticleBox
               id={3}
               class="three"
               tittle="Article 3"
               subTittle="Lorem upsum dolor sit amet."
               image="../images/pexels-purple_flowers_S.jpg"
               imageDescription=""
            />
            <ArticleBox
               id={4}
               class="four"
               tittle="Article 4"
               subTittle="Lorem upsum dolor sit amet."
               image="../images/pexels-purple_flowers_S.jpg"
               imageDescription=""
            />
            <ArticleBox
               id={5}
               class="five"
               tittle="Article 5"
               subTittle="Lorem upsum dolor sit amet."
               image="../images/pexels-purple_flowers_S.jpg"
               imageDescription=""
            />
            <ArticleBox
               id={6}
               class="six"
               tittle="Article 6"
               subTittle="Lorem upsum dolor sit amet."
               image="../images/pexels-purple_flowers_S.jpg"
               imageDescription=""
            />
            <ArticleBox
               id={1}
               class="one"
               tittle="Article 7"
               subTittle="Lorem upsum dolor sit amet."
               image="../images/pexels-purple_flowers_S.jpg"
               imageDescription=""
            />

            <ArticleBox
               id={2}
               class="two"
               tittle="Article 8"
               subTittle="Lorem upsum dolor sit amet."
               image="../images/pexels-purple_flowers_S.jpg"
               imageDescription=""
            />
            <ArticleBox
               id={3}
               class="three"
               tittle="Article 9"
               subTittle="Lorem upsum dolor sit amet."
               image="../images/pexels-purple_flowers_S.jpg"
               imageDescription=""
            />
            <ArticleBox
               id={4}
               class="four"
               tittle="Article 10"
               subTittle="Lorem upsum dolor sit amet."
               image="../images/pexels-purple_flowers_S.jpg"
               imageDescription=""
            />
            <ArticleBox
               id={5}
               class="five"
               tittle="Article 11"
               subTittle="Lorem upsum dolor sit amet."
               image="../images/pexels-purple_flowers_S.jpg"
               imageDescription=""
            />
            <ArticleBox
               id={6}
               class="six"
               tittle="Article 12"
               subTittle="Lorem upsum dolor sit amet."
               image="../images/pexels-purple_flowers_S.jpg"
               imageDescription=""
            />
         </section>
      </div>
   );
};

export default Articles;
