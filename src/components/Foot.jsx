export default function Foot() {
    return (
      <footer
        className="text-gray-300 py-10"
        style={{
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          width: '100vw',
          backgroundColor: '#111111', // pastel black
        }}
      >
        <div className="w-full max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            {/* About Us */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4"></h3>
              <p className="leading-relaxed">
                We provide dedicated therapy and developmental support to help every child reach
                their fullest potential through professional care and guidance.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/treatment" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="/gallery" className="hover:text-white transition-colors">Gallery</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
  
            {/* Contact */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
              <p>📍 123 Wellness Street, Pune, India</p>
              <p>📞 +91 98765 43210</p>
              <p>✉️ info@therapycenter.com</p>
            </div>
          </div>
  
          <hr className="my-8 border-gray-700" />
  
          <div className="text-center text-gray-500 text-xs">
            © {new Date().getFullYear()} Therapy Center. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
  