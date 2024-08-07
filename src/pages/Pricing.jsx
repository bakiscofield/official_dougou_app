
export default function Pricing(){

    return (
        <section id="pricing" className="pricing-table section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  <h3 className="wow zoomIn" data-wow-delay=".2s">Tarifs</h3>
                  <h2 className="wow fadeInUp" data-wow-delay=".4s">Prix et plans</h2>
                  <p className="wow fadeInUp" data-wow-delay=".6s">
                    L’accès à la plateforme DouGou Business pour les acteurs vendeur ou hôtes est subordonné par / mois.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".4s">
                <div className="single-table">
                  <div className="table-head">
                    <h4 className="title">Free</h4>
                    <div className="price">
                      <h2 className="amount">
                        <span className="currency">€</span>0<span className="duration">/mois</span>
                      </h2>
                    </div>
                  </div>
                  <div className="table-content">
                    <ul className="table-list">
                      <li>Commission de 10% sur toutes les activités de vente</li>
                      <li className="disable">Commission de 5.99% sur toutes les activités de vente</li>
                      <li className="disable">Commission de 3.77% sur toutes les activités de vente</li>
                      <li>Publications limitées à 4/mois</li>
                      <li className="disable">Publications limitées à 200/mois</li>
                      <li className="disable">Publications illimitées</li>
                      <li className="disable">Toucher un maximum de 10 000 visiteurs avec ses publications</li>
                      <li className="disable">Toucher un nombre de visiteurs illimités avec ses publications</li>
                      <li className="disable">Présence dans les 200 premières recherches</li>
                      <li className="disable">Présence dans les 100 premières recherches</li>
                    </ul>
                  </div>
                  <div className="button">
                    <a href="signup" className="btn">Essai gratuit <i className="lni lni-arrow-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".6s">
                <div className="single-table middle">
                  <div className="table-head">
                    <h4 className="title">Standard</h4>
                    <div className="price">
                      <h2 className="amount">
                        <span className="currency">€</span>12.97<span className="duration">/mois</span>
                      </h2>
                    </div>
                  </div>
                  <div className="table-content">
                    <ul className="table-list">
                      <li className="disable">Commission de 10% sur toutes les activités de vente</li>
                      <li>Commission de 5.99% sur toutes les activités de vente</li>
                      <li className="disable">Commission de 3.77% sur toutes les activités de vente</li>
                      <li>Publications limitées à 4/mois</li>
                      <li>Publications limitées à 200/mois</li>
                      <li className="disable">Publications illimitées</li>
                      <li>Toucher un maximum de 10 000 visiteurs avec ses publications</li>
                      <li className="disable">Toucher un nombre de visiteurs illimités avec ses publications</li>
                      <li>Présence dans les 200 premières recherches</li>
                      <li className="disable">Présence dans les 100 premières recherches</li>
                    </ul>
                  </div>
                  <div className="button">
                    <a href="signup" className="btn btn-alt">Essai gratuit <i className="lni lni-arrow-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".8s">
                <div className="single-table">
                  <div className="table-head">
                    <h4 className="title">Premium</h4>
                    <div className="price">
                      <h2 className="amount">
                        <span className="currency">€</span>25.97<span className="duration">/mois</span>
                      </h2>
                    </div>
                  </div>
                  <div className="table-content">
                    <ul className="table-list">
                      <li className="disable">Commission de 10% sur toutes les activités de vente</li>
                      <li className="disable">Commission de 5.99% sur toutes les activités de vente</li>
                      <li>Commission de 3.77% sur toutes les activités de vente</li>
                      <li>Publications limitées à 4/mois</li>
                      <li>Publications limitées à 200/mois</li>
                      <li>Publications illimitées</li>
                      <li>Toucher un maximum de 10 000 visiteurs avec ses publications</li>
                      <li>Toucher un nombre de visiteurs illimités avec ses publications</li>
                      <li>Présence dans les 200 premières recherches</li>
                      <li>Présence dans les 100 premières recherches</li>
                    </ul>
                  </div>
                  <div className="button">
                    <a href="signup" className="btn">Essai gratuit <i className="lni lni-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );

}