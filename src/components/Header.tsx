import { ShoppingCart, Menu, Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative bg-gradient-to-r from-orange-400 via-pink-500 to-orange-400 p-4 comic-dots">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="lg:hidden">
            <Menu className="h-6 w-6 text-white" />
          </button>
          <h1 className="text-4xl font-bold comic-text" style={{ fontFamily: 'Fredoka One, cursive' }}>
            POP SHOP
          </h1>
        </div>

        <nav className="hidden lg:flex space-x-8">
          <a href="#" className="text-white font-bold text-lg hover:text-black transition-colors bounce-btn">
            NEW IN
          </a>
          <a href="#" className="text-white font-bold text-lg hover:text-black transition-colors bounce-btn">
            CLOTHING
          </a>
          <a href="#" className="text-white font-bold text-lg hover:text-black transition-colors bounce-btn">
            ART
          </a>
          <a href="#" className="text-white font-bold text-lg hover:text-black transition-colors bounce-btn">
            SALE
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="bounce-btn bg-yellow-300 p-2 rounded-full border-3 border-black hover:bg-yellow-400">
            <Search className="h-5 w-5 text-black" />
          </button>
          <button className="bounce-btn bg-pink-300 p-2 rounded-full border-3 border-black hover:bg-pink-400 relative">
            <ShoppingCart className="h-5 w-5 text-black" />
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
              3
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;