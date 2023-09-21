import { useState, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslation} from 'react-i18next';
import TopNavBar from './layouts/TopNavBar';
import Calendar from "./features/Calendar";
import Plants from "./pages/Plants";
import Articles from "./pages/Articles";
import Galery from "./pages/Galery";
import About from "./pages/About";
import './i18n';


const App = () => {
      // eslint-disable-next-line 
    const [lang, setLang] = useState("en");
    // eslint-disable-next-line 
    const { t, i18n } = useTranslation();

    return (
        <div>
           <Suspense fallback='...loading'> 
                <BrowserRouter>
                    <header>
                        <TopNavBar/>
                        
                    </header>
                    <h2> test </h2>
                
                    <h1> {t('Hello world')}</h1>

                    <Routes>
                        <Route path='/' element={'/'}> Garden 284 </Route>
                        <Route path='/calendar' element={<Calendar />}> Calendar </Route>
                        <Route path='/plants' element={<Plants />}> Plants </Route>
                        <Route path='/articles' element={<Articles />}> Articles </Route>
                        <Route path='/galery' element={<Galery />}> Galery </Route>
                        <Route path='/about' element={<About />}> About </Route>
                    </Routes>
                </BrowserRouter>
            </Suspense>

        <footer>
            <h4> Page not use cookie yet </h4>
        </footer>

        </div>
        
    )
}

const container = document.getElementById("root");

if (container) {
    const root = createRoot(container);
    root.render(<App />);
} else {
    console.log('test 1');
}
