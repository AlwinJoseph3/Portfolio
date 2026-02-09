const Starfield = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-black">
      <div className="absolute inset-0 stars-static opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
    </div>
  );
};

export default Starfield;
