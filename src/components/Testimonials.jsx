import React from 'react';

const testimonials = [
  {
    id: 1,
    text: "A vast number of clients decide to create dedicated software is the online store. It is nothing but a website with a catalog of products and the possibility.",
    author: "Somalia D Silva",
    position: "Business Manager",
    image: "https://via.placeholder.com/100x100",
  },
  {
    id: 2,
    text: "A vast number of clients decide to create dedicated software is the online store. It is nothing but a website with a catalog of products and the possibility.",
    author: "David Warner",
    position: "Web Developer",
    image: "https://via.placeholder.com/100x100",
  },
  {
    id: 3,
    text: "A vast number of clients decide to create dedicated software is the online store. It is nothing but a website with a catalog of products and the possibility.",
    author: "Jems Gilario",
    position: "Graphics Designer",
    image: "https://via.placeholder.com/100x100",
  },
  {
    id: 4,
    text: "A vast number of clients decide to create dedicated software is the online store. It is nothing but a website with a catalog of products and the possibility.",
    author: "David Warner",
    position: "Web Developer",
    image: "https://via.placeholder.com/100x100",
  },
  {
    id: 5,
    text: "A vast number of clients decide to create dedicated software is the online store. It is nothing but a website with a catalog of products and the possibility.",
    author: "Jems Gilario",
    position: "Graphics Designer",
    image: "https://via.placeholder.com/100x100",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials style2 section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h3 className="wow zoomIn" data-wow-delay=".2s">
                Retour des Clients
              </h3>
              <h2 className="wow fadeInUp" data-wow-delay=".4s">Les témoignages</h2>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                Découvrez ce que nos clients satisfaits disent à propos de leur
                expérience exceptionnelle avec nos services.
              </p>
            </div>
          </div>
        </div>
        <div className="row testimonial-slider">
          {testimonials.map((testimonial) => (
            <div className="col-lg-6 col-12" key={testimonial.id}>
              <div className="single-testimonial">
                <div className="inner-content">
                  <div className="quote-icon">
                    <i className="lni lni-quotation"></i>
                  </div>
                  <div className="text">
                    <p>{testimonial.text}</p>
                  </div>
                  <div className="author">
                    <img src={testimonial.image} alt="#" />
                    <h4 className="name">
                      {testimonial.author}
                      <span className="deg">{testimonial.position}</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
