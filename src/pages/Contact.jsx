import Base from "../components/Base";
import Breadcrumbs from "../components/Breadcrumbs";

const Contact = () => {
    return (
        <>

            <Base>
                <Breadcrumbs />
                {/* Start Contact Area */}
                <div className="contact-us section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="contact-widget-wrapper">
                                    <div className="main-title">
                                        <h2>Contactez Nous</h2>
                                        <p>
                                            Besoin d'assistance ou de renseignements supplémentaires ?
                                            Contactez-nous dès maintenant.
                                        </p>
                                    </div>
                                    <div className="contact-widget-block">
                                        <h3 className="title">Appelez nous</h3>
                                        <p>+228 91828224</p>
                                    </div>
                                    <div className="contact-widget-block">
                                        <h3 className="title">Ecrivez nous</h3>
                                        <p>dougoucontact@gmail.com</p>
                                        <p>..........@mail.com</p>
                                    </div>
                                    <div className="contact-widget-block">
                                        <h3 className="title">Notre adresse</h3>
                                        <p>(Localisation)</p>
                                        <p>...............</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="contact-form">
                                    <h3 className="form-title">Laissez nous un message ici</h3>
                                    <form className="form" method="post" action="assets/mail/mail.php">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <div className="form-group">
                                                    <input
                                                        name="name"
                                                        type="text"
                                                        placeholder="Nom*"
                                                        required="required"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <div className="form-group">
                                                    <input
                                                        name="email"
                                                        type="email"
                                                        placeholder="Email*"
                                                        required="required"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <div className="form-group">
                                                    <input
                                                        name="subject"
                                                        type="text"
                                                        placeholder="Sujet*"
                                                        required="required"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <div className="form-group">
                                                    <input
                                                        name="phone"
                                                        type="text"
                                                        placeholder="Numero*"
                                                        required="required"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <textarea
                                                        placeholder="Message*"
                                                        name="message"
                                                        id="message-area"
                                                        className="form-control"
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="button">
                                                    <button type="submit" className="btn">Envoyer</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Contact Area */}

                {/* Start Google-map Area */}
                <div className="map-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="mapouter">
                                    <div className="gmap_canvas">
                                        <iframe
                                            width="100%"
                                            height="500"
                                            id="gmap_canvas"
                                            src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                            frameBorder="0"
                                            scrolling="no"
                                            marginHeight="0"
                                            marginWidth="0"
                                            title="Google Map"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Google-map Area */}
            </Base >
        </>

    );
};

export default Contact;
