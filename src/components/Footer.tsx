import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-3xl font-bold comic-text mb-4" style={{ fontFamily: 'Fredoka One, cursive', color: '#ff6b35' }}>
              POP SHOP
            </h3>
            <p className="font-bold">
              Making fashion fun and groovy since forever!
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4 text-pink-400">SHOP</h4>
            <ul className="space-y-2 font-bold">
              <li><a href="#" className="hover:text-orange-400">New Arrivals</a></li>
              <li><a href="#" className="hover:text-orange-400">Clothing</a></li>
              <li><a href="#" className="hover:text-orange-400">Accessories</a></li>
              <li><a href="#" className="hover:text-orange-400">Sale</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4 text-pink-400">HELP</h4>
            <ul className="space-y-2 font-bold">
              <li><a href="#" className="hover:text-orange-400">Size Guide</a></li>
              <li><a href="#" className="hover:text-orange-400">Shipping</a></li>
              <li><a href="#" className="hover:text-orange-400">Returns</a></li>
              <li><a href="#" className="hover:text-orange-400">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4 text-pink-400">FOLLOW US</h4>
            <div className="flex space-x-4">
              <button className="bounce-btn bg-orange-500 p-3 rounded-full hover:bg-orange-400">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="bounce-btn bg-pink-500 p-3 rounded-full hover:bg-pink-400">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="bounce-btn bg-yellow-500 p-3 rounded-full hover:bg-yellow-400">
                <Twitter className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="font-bold">
            © 2024 Pop Shop. All rights reserved. Keep it groovy! ✨
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;