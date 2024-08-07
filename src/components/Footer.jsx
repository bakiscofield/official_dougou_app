import React from 'react';

const Footer = () => {
  return (
    <footer className="footer section">
      {/* Start Footer Top */}
      <div className="footer-top">
        <div className="container">
          <div className="inner-content">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                {/* Single Widget */}
                <div className="single-footer f-about">
                  <div className="logo">
                    <a href="/">
                      <img src="assets/images/fg.png" alt="#" style={{ width: '200px', height: 'auto' }} />
                    </a>
                  </div>
                  <p>Découvrez nos réseaux sociaux pour rester connecté.</p>
                  <h4 className="social-title">Suivez nous sur:</h4>
                  <ul className="social">
                    <li>
                      <a href="javascript:void(0)"><i className="lni lni-facebook-filled"></i></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><i className="lni lni-instagram"></i></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><i className="lni lni-twitter-original"></i></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><i className="lni lni-linkedin-original"></i></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><i className="lni lni-pinterest"></i></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><i className="lni lni-youtube"></i></a>
                    </li>
                  </ul>
                </div>
                {/* End Single Widget */}
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                {/* Single Widget */}
                <div className="single-footer f-link">
                  <h3>Support</h3>
                  <ul>
                    <li><a href="javascript:void(0)">Tarification</a></li>
                    <li><a href="javascript:void(0)">A Propos</a></li>
                    <li><a href="javascript:void(0)">Guides</a></li>
                  </ul>
                </div>
                {/* End Single Widget */}
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                {/* Single Widget */}
                <div className="single-footer f-link">
                  <h3>Pays</h3>
                  <ul>
                    <li>
                      <a href="javascript:void(0)">
                        <img src="assets/images/togo-svgrepo-com.svg" alt="#" />
                        Togo
                      </a>
                    </li>
                  </ul>
                </div>
                {/* End Single Widget */}
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                {/* Single Widget */}
                <div className="single-footer newsletter">
                  <h3>S'abonner</h3>
                  <p>S'abonner à notre newsletter pour avoir les dernières informations.</p>
                  <form action="#" method="get" target="_blank" className="newsletter-form">
                    <input
                      name="EMAIL"
                      placeholder="Email"
                      required="required"
                      type="email"
                    />
                    <div className="button">
                      <button className="sub-btn">
                        <i className="lni lni-envelope"></i>
                      </button>
                    </div>
                  </form>
                </div>
                {/* End Single Widget */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/ End Footer Top */}
      <div className="copyright-area">
        <div className="container">
          <div className="inner-content">
            <div className="row"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
