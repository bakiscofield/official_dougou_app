import React from 'react';

const teamMembers = [
  {
    id: 1,
    name: "BAMASSI Hugues",
    position: "CEO DouGou",
    image: "https://via.placeholder.com/400x400",
    social: [
      { platform: "facebook", icon: "lni lni-facebook-filled" },
      { platform: "instagram", icon: "lni lni-instagram" },
      { platform: "twitter", icon: "lni lni-twitter-original" },
      { platform: "linkedin", icon: "lni lni-linkedin-original" }
    ]
  },
  {
    id: 2,
    name: "KELE Bernardin",
    position: "Dev Mobile",
    image: "https://via.placeholder.com/400x400",
    social: [
      { platform: "facebook", icon: "lni lni-facebook-filled" },
      { platform: "instagram", icon: "lni lni-instagram" },
      { platform: "twitter", icon: "lni lni-twitter-original" },
      { platform: "linkedin", icon: "lni lni-linkedin-original" }
    ]
  },
  {
    id: 3,
    name: "LAMATETOU Esaie",
    position: "Graphic Designer",
    image: "https://via.placeholder.com/400x400",
    social: [
      { platform: "facebook", icon: "lni lni-facebook-filled" },
      { platform: "instagram", icon: "lni lni-instagram" },
      { platform: "twitter", icon: "lni lni-twitter-original" },
      { platform: "linkedin", icon: "lni lni-linkedin-original" }
    ]
  },
  {
    id: 4,
    name: "ALAWE Nicolas",
    position: "UI Designer",
    image: "https://via.placeholder.com/400x400",
    social: [
      { platform: "facebook", icon: "lni lni-facebook-filled" },
      { platform: "instagram", icon: "lni lni-instagram" },
      { platform: "twitter", icon: "lni lni-twitter-original" },
      { platform: "linkedin", icon: "lni lni-linkedin-original" }
    ]
  },
  {
    id: 5,
    name: "AKAOLO Samtou",
    position: "Juriste d'entreprise",
    image: "https://via.placeholder.com/400x400",
    social: [
      { platform: "facebook", icon: "lni lni-facebook-filled" },
      { platform: "instagram", icon: "lni lni-instagram" },
      { platform: "twitter", icon: "lni lni-twitter-original" },
      { platform: "linkedin", icon: "lni lni-linkedin-original" }
    ]
  },
  {
    id: 6,
    name: "ANDJAO Julie",
    position: "Responsable de projet",
    image: "https://via.placeholder.com/400x400",
    social: [
      { platform: "facebook", icon: "lni lni-facebook-filled" },
      { platform: "instagram", icon: "lni lni-instagram" },
      { platform: "twitter", icon: "lni lni-twitter-original" },
      { platform: "linkedin", icon: "lni lni-linkedin-original" }
    ]
  },
  {
    id: 7,
    name: "HONYIGLO Wilfried",
    position: "Dev Mobile",
    image: "https://via.placeholder.com/400x400",
    social: [
      { platform: "facebook", icon: "lni lni-facebook-filled" },
      { platform: "instagram", icon: "lni lni-instagram" },
      { platform: "twitter", icon: "lni lni-twitter-original" },
      { platform: "linkedin", icon: "lni lni-linkedin-original" }
    ]
  },
  {
    id: 8,
    name: "WOGLO Koffi",
    position: "Dev Backend",
    image: "https://via.placeholder.com/400x400",
    social: [
      { platform: "facebook", icon: "lni lni-facebook-filled" },
      { platform: "instagram", icon: "lni lni-instagram" },
      { platform: "twitter", icon: "lni lni-twitter-original" },
      { platform: "linkedin", icon: "lni lni-linkedin-original" }
    ]
  },
  {
    id: 9,
    name: "AYAH Yawavi",
    position: "Analyste",
    image: "https://via.placeholder.com/400x400",
    social: [
      { platform: "facebook", icon: "lni lni-facebook-filled" },
      { platform: "instagram", icon: "lni lni-instagram" },
      { platform: "twitter", icon: "lni lni-twitter-original" },
      { platform: "linkedin", icon: "lni lni-linkedin-original" }
    ]
  },
  {
    id: 10,
    name: "ANDELE Koffi",
    position: "Dev FullStack",
    image: "https://via.placeholder.com/400x400",
    social: [
      { platform: "facebook", icon: "lni lni-facebook-filled" },
      { platform: "instagram", icon: "lni lni-instagram" },
      { platform: "twitter", icon: "lni lni-twitter-original" },
      { platform: "linkedin", icon: "lni lni-linkedin-original" }
    ]
  },
  {
    id: 11,
    name: "PAKOU Agnilonda",
    position: "Dev Backend / UI Designer",
    image: "https://via.placeholder.com/400x400",
    social: [
      { platform: "facebook", icon: "lni lni-facebook-filled" },
      { platform: "instagram", icon: "lni lni-instagram" },
      { platform: "twitter", icon: "lni lni-twitter-original" },
      { platform: "linkedin", icon: "lni lni-linkedin-original" }
    ]
  }
];

const Team = () => {
  return (
    <section className="team section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h3 className="wow zoomIn" data-wow-delay=".2s">Equipe DouGou</h3>
              <h2 className="wow fadeInUp" data-wow-delay=".4s">
                Rencontrez notre équipe
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                Notre équipe dévouée combine créativité, expertise et passion
                pour concrétiser votre projet avec excellence.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {teamMembers.map(member => (
            <div className="col-lg-3 col-md-6 col-12 wow fadeInUp" data-wow-delay=".3s" key={member.id}>
              <div className="single-team">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="content">
                  <h4>
                    {member.name}
                    <span>{member.position}</span>
                  </h4>
                  <ul className="social">
                    {member.social.map((social, index) => (
                      <li key={index}>
                        <a href="javascript:void(0)">
                          <i className={social.icon}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
