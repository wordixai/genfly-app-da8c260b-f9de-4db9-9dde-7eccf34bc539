import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Retro Boom Tee",
      price: 29,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      isNew: true
    },
    {
      id: 2,
      name: "Pop Art Hoodie",
      price: 59,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
      isSale: true
    },
    {
      id: 3,
      name: "Comic Strip Dress",
      price: 45,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop"
    },
    {
      id: 4,
      name: "Neon Sneakers",
      price: 89,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
      isNew: true
    }
  ];

  return (
    <section className="py-20 bg-yellow-100 comic-dots">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold comic-outline mb-4" style={{ fontFamily: 'Fredoka One, cursive' }}>
            FEATURED ITEMS
          </h2>
          <div className="speech-bubble inline-block">
            <p className="text-xl font-bold text-black">
              Check out these totally awesome pieces!
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bounce-btn bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold py-4 px-12 rounded-full border-4 border-black text-xl hover:from-orange-400 hover:to-pink-500">
            VIEW ALL PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;