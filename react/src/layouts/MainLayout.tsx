import { useTranslation} from 'react-i18next';
import '../i18n';

    
const MainLayout = () => {
    // eslint-disable-next-line
    const { t, i18n } = useTranslation();
    return (
        <div>
            <header>
                <div className='tittle'>
                    <h1>  {t('Garden 284')} </h1>
                    <h2>  {t('Gardening motto')} </h2>
                </div>
            </header>

        <h2> test </h2>

        <h1> {t('Hello world')}</h1>
        </div>
    );
};

export default MainLayout;