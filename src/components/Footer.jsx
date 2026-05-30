import logo from '../assets/logo-footer.png'
import { useTranslation } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer>
      <div className="footer-inner">
        <a href="#">
          <img src={logo} alt="Marina Preshel" className="footer-logo-img" />
        </a>

        <div className="footer-copy">
          {t('footer.copy')}
        </div>
      </div>
    </footer>
  )
}
