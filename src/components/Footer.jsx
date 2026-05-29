import logo from '../assets/logo-footer.png'

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <a href="#">
          <img src={logo} alt="Marina Preshel" className="footer-logo-img" />
        </a>

        <div className="footer-copy">
          © 2025 Marina Preshel. Все права защищены.
        </div>
      </div>
    </footer>
  )
}
