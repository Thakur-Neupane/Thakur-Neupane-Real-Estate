import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-slate-200 shadow-md py-4">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        {/* Social Media Icons */}
        <div className="flex gap-4 mb-4 sm:mb-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-slate-900"
          >
            <FaFacebookF className="text-xl" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-slate-900"
          >
            <FaTwitter className="text-xl" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-slate-900"
          >
            <FaInstagram className="text-xl" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-slate-900"
          >
            <FaLinkedin className="text-xl" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-slate-600">
          &copy; {new Date().getFullYear()} Thakur Estate. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
