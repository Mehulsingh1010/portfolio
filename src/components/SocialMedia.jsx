import React from 'react';
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a 
        href='https://www.linkedin.com/in/mehul-singh-73154b251/' 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a 
        href='https://www.github.com/mehulsingh1010' 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
    </div>
    <div>
      <a 
        href='https://www.instagram.com/_me._.si_/' 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
