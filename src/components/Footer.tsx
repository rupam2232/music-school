"use client";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="dark:bg-black dark:text-gray-400 text-gray-600 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="dark:text-white text-black text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>
        <div>
          <h2 className="dark:text-white text-black text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="dark:hover:text-white hover:text-black transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="dark:hover:text-white hover:text-black transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="dark:hover:text-white hover:text-black transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="dark:hover:text-white hover:text-black transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="dark:text-white text-black text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="dark:hover:text-white hover:text-black transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="dark:hover:text-white hover:text-black transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="dark:hover:text-white hover:text-black transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="dark:text-white text-black text-lg font-semibold mb-4">Contact Us</h2>
          <p>Kalyani, West Bengal, India</p>
          <p>Kalyani 741235</p>
          <p>Email: info@musicschool.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        © {currentYear} Music School. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
