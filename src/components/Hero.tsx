const Hero = () => {
  return (
    <section className="relative min-h-screen gradient-orange-pink comic-dots flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="speech-bubble mb-8">
            <h1 className="text-6xl md:text-8xl font-bold comic-outline mb-6" style={{ fontFamily: 'Fredoka One, cursive' }}>
              POP ART
              <br />
              FASHION!
            </h1>
            <p className="text-xl md:text-2xl text-black font-bold mb-8">
              Groovy styles that make you go WOW! 
              <br />
              Express yourself with our totally rad collection!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bounce-btn bg-yellow-400 text-black font-bold py-4 px-8 rounded-full border-4 border-black text-xl hover:bg-yellow-300 transform hover:scale-105">
              SHOP NOW!
            </button>
            <button className="bounce-btn bg-white text-black font-bold py-4 px-8 rounded-full border-4 border-black text-xl hover:bg-gray-100 transform hover:scale-105">
              VIEW GALLERY
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce bg-white p-4 rounded-full border-3 border-black">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;