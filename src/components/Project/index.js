import React from 'react';

function Project() {
 const projList = [
    {
      pname: "Chit Chat",
      pimage: "chitchat.png",
      palt: "user accessibility website design",
      description: "Chit Chat is a mobile-responsive, social media platform on which where users are able to share their thoughts to one another or even photos to each other. The users even have an option to rate those thoughts out of 5 stars.",
      deploy: "https://chitchat2022.herokuapp.com/",
      repository: "https://github.com/mssjhu9/social-junk/",
    },
    {
      pname: "Run Buddy",
      pimage: "runbuddy-mobile.png",
      palt: "mobile responsive site design",
      description: "Run Buddy was a site a made to get the hang of using flex boxes and learning how to code in a map.",
      deploy: "https://telchance.github.io/run-buddy/",
      repository: "https://github.com/TelChance/run-buddy/",
    }
  ];
  
  

  return (
    <section className="projects-section">
    <div id="projects" className="projects-box">
      <div>
        <div className='header1'>projects</div>
      </div>
      <div className="projects-group">
    {projList.map((proj) => (
          <div className="projects" key={proj.pname}>
            <div className='pdesc'>
            <a href={proj.deploy} target="_blank" rel="noreferrer">
            </a>
            <div className='header2'>{proj.pname}</div>
            <p>
              {proj.description}
            </p>
            </div>
            <div className='plinks'>
            <div className="project-links">
              <a href={proj.deploy} target="_blank" rel="noreferrer">
                {" "}view deployed site
              </a>
            </div>
            <div className="project-links">
              <a href={proj.repository} target="_blank" rel="noreferrer">
                {" "}view code
              </a>
            </div>
            </div>
          </div>))}
          </div>
          </div>
          </section>
  )
}

export default Project;