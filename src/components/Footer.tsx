import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="bg-white rounded-lg p-4 inline-block mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">✓</span>
                </div>
                <div>
                  <div className="text-secondary font-bold text-lg leading-none">Certified</div>
                  <div className="text-primary font-bold text-lg leading-none">Rubbish</div>
                </div>
              </div>
            </div>
            <p className="text-white/90 text-sm leading-relaxed mb-6">
              The UK's trusted platform for finding Environment Agency approved waste carriers. 
              Ensuring safe, legal, and environmentally responsible waste management.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors text-sm">
                  • Home
                </Link>
              </li>
              <li>
                <Link to="/search-results" className="text-white/80 hover:text-white transition-colors text-sm">
                  • Find Waste Carriers
                </Link>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                  • Register Your Business
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                  • About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                  • Book Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                  • UK Waste Legislation
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                  • Recycling Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                  • Risks of Using Unlicensed Carriers
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                  • Generate a Waste Note
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <a href="mailto:info@CertifiedRubbish.co.uk" className="text-white/80 hover:text-white transition-colors text-sm flex items-center gap-2">
                <span>✉</span> info@CertifiedRubbish.co.uk
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors text-sm flex items-center gap-2">
                <span>🌐</span> Get in touch
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-white/70">
            © 2025 CertifiedRubbish. Created by <a href="#" className="text-secondary hover:underline">Tiny</a>.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
