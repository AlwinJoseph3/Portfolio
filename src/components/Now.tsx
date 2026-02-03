import { MapPin, Dumbbell, Bike, Code } from "lucide-react";

const Now = () => {
  return (
    <section className="py-20 px-6 bg-zinc-50 dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <h2 className="text-6xl font-black dark:text-white tracking-tighter uppercase">
            Now
          </h2>
          <div className="flex items-center gap-2 text-zinc-400 font-mono text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            LAST UPDATED: JAN 2026
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Location */}
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between aspect-square lg:aspect-auto h-64">
            <MapPin className="text-brand-primary" size={32} />
            <div>
              <h4 className="dark:text-white font-bold text-xl">
                Kochi, India
              </h4>
              <p className="text-zinc-500 text-sm">
                Based in the coastal tech hub of Kerala.
              </p>
            </div>
          </div>

          {/* Fitness */}
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between h-64">
            <Dumbbell className="text-brand-primary" size={32} />
            <div>
              <h4 className="dark:text-white font-bold text-xl">
                Hypertrophy Phase
              </h4>
              <p className="text-zinc-500 text-sm">
                Focusing on high-volume training and strict macro-tracking.
              </p>
            </div>
          </div>

          {/* Adventure */}
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between h-64">
            <Bike className="text-brand-primary" size={32} />
            <div>
              <h4 className="dark:text-white font-bold text-xl">
                Leh Ride '26
              </h4>
              <p className="text-zinc-500 text-sm">
                Mapping the route for a summer trip to the Nubra Valley.
              </p>
            </div>
          </div>

          {/* Current Code */}
          <div className="p-8 rounded-3xl bg-[#007AFF] flex flex-col justify-between h-64 text-white">
            <Code size={32} />
            <div>
              <h4 className="font-bold text-xl">Interactive 3D</h4>
              <p className="text-blue-100 text-sm">
                Perfecting Three.js shaders for minimalist portfolios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Now;
