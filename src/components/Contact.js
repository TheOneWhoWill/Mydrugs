import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faDiscord, faTwitter, faReddit } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div className="Contact">
      <div className="contactSection">
        <h1 className="contactHeading">Main Developer</h1>
        <div className="mainContact">
          <div className="gitHub">
            <FontAwesomeIcon className="icon" icon={faGithub} />
            <Link className="link">TheOneWhoWill</Link>
          </div>
          <div className="twitter">
            <FontAwesomeIcon className="icon" icon={faTwitter} />
            <Link className="link">@RafikovMuhammad</Link>
          </div>
          <div className="discord">
            <FontAwesomeIcon className="icon" icon={faDiscord} />
            <Link className="link">Cybercrafter345#3900</Link>
          </div>
          <div className="reddit">
            <FontAwesomeIcon className="icon" icon={faReddit} />
            <Link className="link">u/TheOneWhoWil</Link>
          </div>
        </div>
        <div className="contributersSection">
          <div className="contributer">
            <div className="discord"></div>
            <div className="reddit"></div>
          </div>
          <div className="contributer">
            <div className="discord"></div>
            <div className="reddit"></div>
          </div>
          <div className="contributer">
            <div className="discord"></div>
            <div className="reddit"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;