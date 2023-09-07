import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import English from './lang/en.json';
import Polish from './lang/pl.json';
import {FormattedMessage} from 'react-intl';

let lang;
let locale = navigator.language;
console.log(locale)
console.log(locale.slice(0,2).toString())
if (locale.slice(0,2).toString() == 'en') {
    lang = English;
} else {
    lang = Polish;
}

const App = () => {
    return (
        <div>
            <IntlProvider locale ={locale} messages={lang}>
                <FormattedMessage
                    id='Hello world' 
                    defaultMessage="Hello world!"
                />
            </IntlProvider>

        </div>
        
    )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);