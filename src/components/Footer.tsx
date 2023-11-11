'use client';

import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';

export default function FooterComponent() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
           
          </div>
          </div>
           
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="Israel Matusse"
            href="#"
            year={2023}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://www.linkedin.com/in/israel-matusse-0828a3239/"
              icon={BsLinkedin}
            />
            <Footer.Icon
              href="https://github.com/IsraelMatusse"
              icon={BsGithub}
              
            />
            <Footer.Icon
              href="https://twitter.com/Israel_matusse"
              icon={BsTwitter}
            />
            
        
          </div>
          
        </div>
      </div>
    </Footer>
  )
}


