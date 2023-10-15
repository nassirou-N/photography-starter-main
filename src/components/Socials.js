import React from 'react';
import {ImFacebook,ImTwitter,ImPinterest,ImYoutube} from 'react-icons/im'

const Socials = () => {
  return <div className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4'>
      <li className=''>
        <a href='http/www.youtube.com' target='_blank'>
          <ImYoutube />
        </a>
      </li>
      <li className=''>
        <a href='http/www.pinterest.com' target='_blank'>
          <ImPinterest />
        </a>
      </li><li className=''>
        <a href='http/www.twitter.com' target='_blank'>
          <ImTwitter />
        </a>
      </li>
      <li className=''>
        <a href='http/www.facebook.com' target='_blank'>
          <ImFacebook />
        </a>
      </li>
    </ul>
  </div>;
};

export default Socials;
