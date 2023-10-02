import { useState, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslation} from 'react-i18next';
import MainLayout from './layouts/MainLayout';
import TopNavBar from './layouts/TopNavBar';
import Foot from './layouts/Foot';
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
                    <TopNavBar/>
                    

                    <Routes>
                        <Route path='/' element={<MainLayout />}> {t('Garden 284')} </Route>
                        <Route path='/calendar' element={<Calendar />}> {t('Calendar')} </Route>
                        <Route path='/plants' element={<Plants />}> {t('Plants')} </Route>
                        <Route path='/articles' element={<Articles />}> {t('Articles')} </Route>
                        <Route path='/galery' element={<Galery />}> {t('Galery')} </Route>
                        <Route path='/about' element={<About />}> {t('About')} </Route>
                    </Routes>

                    <Foot />
                </BrowserRouter>
            </Suspense>

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
