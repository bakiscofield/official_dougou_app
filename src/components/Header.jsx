
const Header = () => {
  return (
    <header className="header navbar-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="nav-inner">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="/">
                  <img src="assets/images/fg3.png" alt="Logo" style={{ width: '200px', height: 'auto' }} />
                </a>
                <button
                  className="navbar-toggler mobile-menu-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                  <ul id="nav" className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <a href="/" className="active" aria-label="Toggle navigation">Accueil</a>
                    </li>
                    <li className="nav-item">
                      <a href="/about" aria-label="Toggle navigation">A Propos</a>
                    </li>
                    <li className="nav-item">
                      <a href="/pricing" aria-label="Toggle navigation">Nos Tarifs</a>
                    </li>
                    <li className="nav-item">
                      <a href="/contact" aria-label="Toggle navigation">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="button home-btn">
                  <a href="/signup" className="btn">Ouvrir un compte gratuit</a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
