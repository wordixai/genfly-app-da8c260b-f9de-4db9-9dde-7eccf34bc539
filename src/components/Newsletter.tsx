const Newsletter = () => {
  return (
    <section className="py-20 gradient-pink-orange comic-dots">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl font-bold comic-text mb-6" style={{ fontFamily: 'Fredoka One, cursive' }}>
            JOIN THE POP SQUAD!
          </h2>
          
          <div className="speech-bubble mb-8">
            <p className="text-xl font-bold text-black">
              Get the latest groovy updates and exclusive deals!
              <br />
              Be the first to know about new collections!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email here!"
              className="flex-1 px-6 py-4 rounded-full border-4 border-black text-lg font-bold hand-drawn"
            />
            <button className="bounce-btn bg-yellow-400 text-black font-bold py-4 px-8 rounded-full border-4 border-black hover:bg-yellow-300">
              SUBSCRIBE!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;