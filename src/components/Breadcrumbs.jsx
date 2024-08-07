import React from 'react';

const Breadcrumbs = () => {
  return (
    <div className="breadcrumbs">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
            <div className="breadcrumbs-content">
              <h1 className="page-title">Contact</h1>
              <ul className="breadcrumb-nav">
                <li><a href="/">Accueil</a></li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
