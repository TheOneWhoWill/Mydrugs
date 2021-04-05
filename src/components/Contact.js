import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faDiscord, faTwitter, faReddit, faInstagram } from '@fortawesome/free-brands-svg-icons';

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
        <h1 className="contactHeading">Contributers</h1>
        <div className="contributersSection">
          <div className="contributer">
            <div className="discord">
              <FontAwesomeIcon className="icon" icon={faDiscord} />
              <Link className="link">yung lvl#1397</Link>
            </div>
            <div className="instagram">
              <FontAwesomeIcon className="icon" icon={faInstagram} />
              <Link className="link">@yunglvl</Link>
            </div>
          </div>
          <div className="contributer">
            <div className="gitHub">
              <FontAwesomeIcon className="icon" icon={faDiscord} />
              <Link className="link" to="https://github.com/lukepring">lukepring</Link>
            </div>
            <div className="discord">
              <FontAwesomeIcon className="icon" icon={faDiscord} />
              <Link className="link">lukesfridge#8226</Link>
            </div>
            <div className="instagram">
              <FontAwesomeIcon className="icon" icon={faInstagram} />
              <Link className="link" to="https://www.instagram.com/lukesfridge/">@lukesfridge</Link>
            </div>
            <div className="twitter">
              <FontAwesomeIcon className="icon" icon={faTwitter} />
              <Link className="link" to="https://twitter.com/lukesfridge_">@lukesfridge_</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;