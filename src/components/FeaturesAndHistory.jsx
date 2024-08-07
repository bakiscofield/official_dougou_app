

const FeaturesAndHistory = () => {
    return (
        <>


<div className="breadcrumbs">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
            <div className="breadcrumbs-content">
              <h1 className="page-title">A propos</h1>
              <ul className="breadcrumb-nav">
                <li><a href="/">Accueil</a></li>
                <li>A propos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
            {/* Start Features Area */}
            <section className="features section">
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
                                    <span>Caractéristiques principales</span>Innovation technologique<br />
                                    révolutionnaire
                                </h3>
                                {/* Start Single Feature */}
                                <div className="single-feature wow fadeInUp" data-wow-delay=".6s">
                                    <div className="f-icon">
                                        <i className="lni lni-dashboard"></i>
                                    </div>
                                    <h4>Hautes performances</h4>
                                    <p>Expérience utilisateur optimale grâce à des performances exceptionnelles.</p>
                                </div>
                                {/* End Single Feature */}
                                {/* Start Single Feature */}
                                <div className="single-feature wow fadeInUp" data-wow-delay=".7s">
                                    <div className="f-icon">
                                        <i className="lni lni-pencil-alt"></i>
                                    </div>
                                    <h4>Prototypage</h4>
                                    <p>Validation rapide des idées et amélioration continue grâce à des prototypes évolutifs.</p>
                                </div>
                                {/* End Single Feature */}
                                {/* Start Single Feature */}
                                <div className="single-feature wow fadeInUp" data-wow-delay="0.8s">
                                    <div className="f-icon">
                                        <i className="lni lni-user"></i>
                                    </div>
                                    <h4>Personnalisation et adaptation contextuelle</h4>
                                    <p>
                                        Offre une expérience utilisateur sur mesure en ajustant dynamiquement le contenu selon les besoins et le contexte de l'utilisateur.
                                    </p>
                                </div>
                                {/* End Single Feature */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Features Area */}

            {/* Start Services Area */}
            <div className="services section" style={{ padding: 5, margin: 5 }}>
                <div className="container" style={{ maxWidth: '85%', position: 'relative' }}>
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h3 className="wow zoomIn" data-wow-delay=".2s">Histoire</h3>
                                <h2 className="wow fadeInUp" data-wow-delay=".4s">Biographie du fondateur</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row wow fadeInUp" data-wow-delay=".2s">
                        <div className="single-service">
                            <h4 className="text-title"></h4>
                            <p>
                                <strong>
                                    Je m’appelle Hugues Bassim-swé BAMASSI , né d’une mère BARANDAO Lebem yem Epiphanie cuisinière de fonction et d’un père BAMASSI Lassindola chauffeur de taxi qui nous à quitté très tôt , 3 ans après ma naissance. J’ai été élevé par ma maman et ma tante. J’ai grandi en voyant ma maman entreprendre afin de me permettre d’avoir la meilleure éducation possible dans les meilleures écoles. Mais je fait mes premiers pas dans l’entrepreneuriat grâce à ma tante qui fut une guide de choix, car déjà à 11 ans grâce à des activités vacancières j’ai commencer à vendre de petits quites( patte d’entifrice, brosse à dents, montre …..) pour préparer ma rentrer. Inspiré par la détermination et la résilience de mes deux maman, après mon BAC en 2018, je décide de me lancer officiellement avec ma première société H-express coursier une entreprise spécialisé dans le transport de colis et la livraison à domicile. Ce fut une expérience très marquante, car j’ai a ce moment dû acquérir des compétences et me suis auto formé à la fois dans la gestion de projet, la planification, la comptabilité de base pour une entreprise; tout celà majoritairement en autodidacte ou par des forum. Celà étant, H-express fut un échec en raison de l'environnement qui n’était pas propice pour un tel business. J’ai beaucoup appris durant les 3 ans où j’ai tenu à travailler dur sur ce projet. En outre en terme de développement personnel et de leadership, il faut noter que grâce au système traditionnel scolaire africain basé sur la compétence afin de nommer les chef de classe, j’ai eus la chance depuis la première classe du primaire à la dernière classe du lycée de toujours être le premiers de ma classe donc directement le chef de classe. Ainsi mon parcours scolaire m’a grandement permis d’acquérir des compétences en leadership, mais à ça s’ajoute les différences formation en leadership auxquelles j’ai participé. L’application efficace de ce leadership s’est révélée d’un niveau important durant mon parcours universitaire où je me suis démarqué en tant que Délégué de ma faculté, mais aussi chef projet de l’association JCI international de l’université de Kara. Mes compétences en développement personnel ont été plus développées au travers de livre de personnes de références dans le domaine entrepreneurial mais aussi historique que ne cesse de consommer afin de mûrir mon esprit d’expérience réel et pratique de personnes ressources. Si ma conclusion de vrai me définir alors, je me définirai comme un gagnant car je gagne toujours, un résilient car j'abandonne jamais, un rageux car j’ai des compte à régler avec la vie ( en sens où je dois atteindre mes objectifs ) et un battant car aucun défis aussi dure et impossible celui-ci semble ne m'empêchera d’avancer. A ce jour les awards que j’ai remporté sont: le prix de meilleur projet entrepreneurial 2021 organisé par le FAIEJ en collaboration avec TILITU-Lab Kara, Togo Fellow ANzisha prize 2022 (programme sur une durée de 3 ans). J’aime à croire: "rien n’est impossible qu’est ce que tu veux ?"
                                </strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Services Area */}
        </>
    );
};

export default FeaturesAndHistory;
