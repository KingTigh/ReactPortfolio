import React from 'react';
import {BsTwitter, BsInstagram, BsFacebook, BsLinkedin} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
import { AiFillEye, AiFillGithub} from 'react-icons/ai';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
        <a href='https://twitter.com/tigh_g'><BsTwitter/></a>
        </div>
        <div>
        <a href='https://www.facebook.com/tigh.gallagher'><BsFacebook/></a>
        </div>
        <div>
        <a href='https://www.instagram.com/tigh_gallagher'><BsInstagram/></a>
        </div>
        <div>
          <a href='https://www.linkedin.com/in/tigh-gallagher-b348b0234/details/featured/'><BsLinkedin/></a>
        </div>
        <div>
          <a href='https://github.com/KingTigh'><AiFillGithub/></a>
        </div>
    </div>
  )
}

export default SocialMedia