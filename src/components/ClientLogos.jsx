import React from 'react';

const clientLogos = [
  { id: 1, src: "https://via.placeholder.com/200x100", alt: "#" },
  { id: 2, src: "https://via.placeholder.com/200x100", alt: "#" },
  { id: 3, src: "https://via.placeholder.com/200x100", alt: "#" },
  { id: 4, src: "https://via.placeholder.com/200x100", alt: "#" }
];

const ClientLogos = () => {
  return (
    <div className="client-logo">
      <div className="container">
        <div className="row align-items-center">
          {clientLogos.map(logo => (
            <div className="col-lg-3 col-md-3 col-12 text-center" key={logo.id}>
              <div className="single-logo">
                <img src={logo.src} alt={logo.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;
