import { Router } from "react-router-dom"
import Header from "./components/Header"

function App() {


  return (
    <main>
        <div className="preloader">
        <div className="preloader-inner">
          <div className="preloader-icon">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <Header/>
      
      <section className="hero-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 col-12">
              <div className="hero-content">
                <h1>
                  DOUGOU<br />
                  La plateforme qui gère vos biens immobiliers
                </h1>
                <p>
                  Découvrez DouGou, votre plateforme multi-services<br />pour
                  faciliter la gestion de vos biens immobiliers
                </p>
                <div className="button">
                  <a href="signup" className="btn">Ouvrir un compte gratuit</a>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-12">
              <div className="hero-image wow fadeInRight" data-wow-delay=".4s">
                <img
                  className="main-image"
                  src="assets/images/hero-image.png"
                  alt="#"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="freatures section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <div className="image wow fadeInLeft" data-wow-delay=".3s">
                <img src="assets/images/photo_2024-03-29_17-01-32.jpg" alt="#" />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="content">
                <h3 className="heading wow fadeInUp" data-wow-delay=".5s">
                  <span>Caractéristiques principales</span>Innovation technologique
                  révolutionnaire
                </h3>
                <div className="single-feature wow fadeInUp" data-wow-delay=".6s">
                  <div className="f-icon">
                    <i className="lni lni-dashboard"></i>
                  </div>
                  <h4>Hautes performances</h4>
                  <p>
                    Expérience utilisateur optimale grâce à des performances exceptionnelles.
                  </p>
                </div>
                <div className="single-feature wow fadeInUp" data-wow-delay=".7s">
                  <div className="f-icon">
                    <i className="lni lni-pencil-alt"></i>
                  </div>
                  <h4>Prototypage</h4>
                  <p>
                    Validation rapide des idées et amélioration continue grâce à des prototypes évolutifs.
                  </p>
                </div>
                <div className="single-feature wow fadeInUp" data-wow-delay="0.8s">
                  <div className="f-icon">
                    <i className="lni lni-user"></i>
                  </div>
                  <h4>Personnalisation et adaptation contextuelle</h4>
                  <p>
                    Offre une expérience utilisateur sur mesure en ajustant dynamiquement le contenu selon les besoins et le contexte de l{"'"}utilisateur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="services section" style={{ padding: 5, margin: 5 }}>
        <div className="container" style={{ maxWidth: "85%", position: "relative" }}>
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h3 className="wow zoomIn" data-wow-delay=".2s">Histoire</h3>
                <h2 className="wow fadeInUp" data-wow-delay=".4s">
                  Biographie du fondateur
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="wow fadeInUp" data-wow-delay=".2s">
              <div className="single-service">
                <h4 className="text-title"></h4>
                <p>
                  <strong>
                    Je m’appelle Hugues Bassim-swé BAMASSI, né d’une mère BARANDAO
                    Lebem yem Epiphanie cuisinière de fonction et d’un père BAMASSI
                    Lassindola chauffeur de taxi qui nous a quitté très tôt, 3 ans
                    après ma naissance. J’ai été élevé par ma maman et ma tante. J’ai
                    grandi en voyant ma maman entreprendre afin de me permettre
                    d’avoir la meilleure éducation possible dans les meilleures
                    écoles. Mais je fais mes premiers pas dans l’entrepreneuriat
                    grâce à ma tante qui fut une guide de choix, car déjà à 11 ans
                    grâce à des activités vacancières j’ai commencé à vendre de
                    petits kits (pâte dentifrice, brosse à dents, montre, etc.)
                    pour préparer ma rentrée. Inspiré par la détermination et la
                    résilience de mes deux mamans, après mon BAC en 2018, je décide
                    de me lancer officiellement avec ma première société H-express
                    coursier, une entreprise spécialisée dans le transport de colis et
                    la livraison à domicile. Ce fut une expérience très marquante, 
                    car j’ai dû acquérir des compétences et me suis auto-formé 
                    à la fois dans la gestion de projet, la planification, 
                    la comptabilité de base pour une entreprise; tout cela 
                    majoritairement en autodidacte ou par des forums. Cela étant,
                    H-express fut un échec en raison de l{"'"}environnement qui n’était
                    pas propice pour un tel business. J’ai beaucoup appris durant 
                    les 3 ans où j’ai travaillé dur sur ce projet. En outre, en termes
                    de développement personnel et de leadership, il faut noter que
                    grâce au système traditionnel scolaire africain basé sur la 
                    compétence afin de nommer les chefs de classe, j’ai eu la chance
                    depuis la première classe du primaire à la dernière classe du lycée
                    d{"'"}être toujours le premier de ma classe donc directement le chef
                    de classe. Ainsi, mon parcours scolaire m’a grandement permis 
                    d’acquérir des compétences en leadership, mais à cela s’ajoutent
                    les différentes formations en leadership auxquelles j’ai 
                    participé. L’application efficace de ce leadership s’est révélée
                    d’un niveau important durant mon parcours universitaire où je me
                    suis démarqué en tant que Délégué de ma faculté, mais aussi chef
                    de projet de l’association JCI international de l’université de Kara. 
                    Mes compétences en développement personnel ont été davantage 
                    développées à travers des livres de personnes de référence 
                    dans le domaine entrepreneurial mais aussi historique que 
                    je ne cesse de consommer afin de mûrir mon esprit d’expérience
                    réelle et pratique de personnes ressources. Si je devais me définir
                    alors, je me définirais comme un gagnant car je gagne toujours,
                    un résilient car je n{"'"}abandonne jamais, un rageux car j’ai des 
                    comptes à régler avec la vie (dans le sens où je dois atteindre 
                    mes objectifs), et un battant car aucun défi aussi dur et impossible
                    ne m{"'"}empêchera d’avancer. À ce jour, les awards que j’ai remportés sont :
                    le prix du meilleur projet entrepreneurial 2021 organisé par le FAIEJ
                    en collaboration avec TILITU-Lab Kara, Togo Fellow Anzisha prize 2022
                    (programme sur une durée de 3 ans). J’aime à croire : 
                    &quot rien n’est impossible, qu’est-ce que tu veux ?&quot
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h3 className="wow zoomIn" data-wow-delay=".2s">
                  Ce que nous avons à offrir
                </h3>
                <h2 className="wow fadeInUp" data-wow-delay=".4s">Nos Services</h2>
                <p className="wow fadeInUp" data-wow-delay=".6s">
                  Découvrez notre gamme de services pour une excellence
                  opérationnelle et une satisfaction totale
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".2s">
              <div className="single-service">
                <div className="main-icon">
                  <i className="lni lni-home"></i>
                </div>
                <h4 className="text-title">Vente de biens immobiliers</h4>
                <p>
                  Trouvez votre chez-vous idéal avec notre service de vente de propriétés,
                  où le rêve devient réalité.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".4s">
              <div className="single-service">
                <div className="main-icon">
                  <i className="lni lni-apartment"></i>
                </div>
                <h4 className="text-title">Location courte durée</h4>
                <p>
                  Découvrez notre service de location de biens immobiliers pour
                  des séjours courts.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".6s">
              <div className="single-service">
                <div className="main-icon">
                  <i className="lni lni-apartment"></i>
                </div>
                <h4 className="text-title">Location longue durée</h4>
                <p>
                  Explorez notre service de location de biens immobiliers pour des
                  périodes prolongées.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".6s">
              <div className="single-service">
                <div className="main-icon">
                  <i className="lni lni-credit-cards"></i>
                </div>
                <h4 className="text-title">Vente de terrains</h4>
                <p>
                  Trouvez l{"'"}emplacement parfait pour vos projets avec notre service
                  de vente de terrains, où chaque parcelle incarne votre vision.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".6s">
              <div className="single-service">
                <div className="main-icon">
                  <i className="lni lni-support"></i>
                </div>
                <h4 className="text-title">Services d{"'"}accompagnement</h4>
                <p>
                  Profitez de notre expertise avec notre service de conseils et
                  d{"'"}accompagnement personnalisé.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  
  )
}

export default App
