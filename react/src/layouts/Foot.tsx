import { useTranslation} from 'react-i18next';
import '../i18n';



const Foot = () => {
    // eslint-disable-next-line
    const { t, i18n } = useTranslation();

    return (
        <footer>
            
            <div className="footer">
                <h4> {t('all rights reserved')} Adam Hadała <b> IT & Automation </b> 2023</h4>
            
            </div>
         </footer>

    );
};

export default Foot;