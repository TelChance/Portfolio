import React from "react";

function Footer() {
    return (
      <section className="footer-section">
          <div className="footer">
            <div className="f-resources">
              <div className="f-sources">
                <div className="f-1">
                  <i className="fa-regular fa-envelope"></i>
                </div>
                <div className="f-2">
                  <a href="mailto: chancetelford0018@gmail.com">
                    chancetelford0018@gmail.com
                  </a>
                </div>
              </div>
  
              <div className="f-sources">
                <div className="f-1">
                  <i className="fa-brands fa-github"></i>
                </div>
                <div className="f-2">
                  <a
                    href="https://github.com/TelChance"
                    target="_blank"
                    rel="noreferrer"
                  >
                    TelChance
                  </a>
                </div>
              </div>
  
              <div className="f-sources">
                <div className="f-1">
                  <i className="fa-brands fa-linkedin"></i>
                </div>
                <div className="f-2">
                  <a
                    href="https://www.linkedin.com/in/chance-telford-601221223/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chance Telford
                  </a>
                </div>
              </div>
            </div>
          </div>
          </section>
)
};

export default Footer