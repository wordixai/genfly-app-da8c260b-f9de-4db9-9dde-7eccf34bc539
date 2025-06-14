import { Heart, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard = ({ id, name, price, image, isNew, isSale }: ProductCardProps) => {
  return (
    <div className="relative group">
      <div className="pop-frame bg-white p-6 rounded-lg">
        <div className="relative overflow-hidden rounded-lg mb-4">
          <img 
            src={image} 
            alt={name}
            className="w-full h-64 object-cover transition-transform group-hover:scale-110"
          />
          {isNew && (
            <div className="absolute top-2 left-2 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold comic-text transform rotate-12">
              NEW!
            </div>
          )}
          {isSale && (
            <div className="absolute top-2 right-2 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold comic-text transform -rotate-12">
              SALE!
            </div>
          )}
          <button className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white p-2 rounded-full shadow-lg">
            <Heart className="h-4 w-4" />
          </button>
        </div>
        
        <h3 className="font-bold text-lg mb-2 comic-outline" style={{ fontFamily: 'Fredoka One, cursive' }}>
          {name}
        </h3>
        <p className="text-2xl font-bold text-pink-600 mb-4">${price}</p>
        
        <button className="w-full bounce-btn bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold py-3 px-6 rounded-full border-3 border-black hover:from-pink-500 hover:to-orange-400 flex items-center justify-center space-x-2">
          <ShoppingCart className="h-5 w-5" />
          <span>ADD TO CART</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;