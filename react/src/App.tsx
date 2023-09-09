import { useState, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { useTranslation} from 'react-i18next';
import './i18n';


const App = () => {
      // eslint-disable-next-line 
    const [lang, setLang] = useState("en");
    // eslint-disable-next-line 
    const { t, i18n } = useTranslation();

    return (
        <div>
         <Suspense fallback='...loading'>
            <h1> {t('Hello world')}</h1>
        </Suspense>

        </div>
        
    )
}

const container = document.getElementById("root");

if (container) {
    const root = createRoot(container);
    root.render(<App />);
}
