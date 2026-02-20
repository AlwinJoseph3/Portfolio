import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { lazy, Suspense, useState, useEffect } from "react";
import Navbar from "./components/Navbar";

const Home = lazy(() => import("./pages/Home"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

const Starfield = lazy(() => import("./components/StarBackground"));
const CursorTrail = lazy(() => import("./components/CursorTrail"));
const SignalGlitch = lazy(() => import("./components/SignalGlitch"));

import { AnimatePresence } from "framer-motion";

const MotoBuddy = lazy(() => import("./pages/projects/MotoBuddy"));
const SHMS = lazy(() => import("./pages/projects/Shms"));
const HomeChef = lazy(() => import("./pages/projects/HomeChef"));
const Elis = lazy(() => import("./pages/projects/Elis"));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />

        <Route path="/project/motobuddy" element={<MotoBuddy />} />
        <Route
          path="/project/smart health management system"
          element={<SHMS />}
        />
        <Route path="/project/homechef" element={<HomeChef />} />
        <Route path="/project/elis" element={<Elis />} />

        <Route path="/project/:id" element={<ProjectDetail />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [showEffects, setShowEffects] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEffects(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Suspense fallback={<div className="h-screen w-full bg-black" />}>
        <Starfield />

        {showEffects && (
          <>
            <CursorTrail />
            <SignalGlitch />
          </>
        )}

        <div className="relative z-10">
          <Navbar />
          <AnimatedRoutes />
        </div>
      </Suspense>
    </Router>
  );
};

export default App;
