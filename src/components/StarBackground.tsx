const Starfield = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-black">
      {/* We use a single div with a repeating background pattern.
         It's the most performant way to render thousands of 'dots' 
         without using canvas or DOM elements.
      */}
      <div className="absolute inset-0 stars-static opacity-60" />

      {/* Optional: A subtle gradient at the bottom to blend with content */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
    </div>
  );
};

export default Starfield;
