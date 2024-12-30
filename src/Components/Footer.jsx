import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
  } from "react-icons/fa6";
  
  function Footer() {
    return (
      <>
        <hr className="border-black" />
        <footer className="py-20">
          <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
            <div className="flex flex-col items-center justify-center">
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/mrranjay.prajapati/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="https://x.com/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="https://www.instagram.com/ranjay.prajapati/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ranjay-pandit-prajapati/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={24} />
                </a>
              </div>
              <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
                <p className="text-sm">&copy; 2024. All rights reserved.</p>
                <p className="text-sm">Supportive Partner ❤️ Ranjay Prajapati</p>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
  
  export default Footer;
  