import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));
import Starfield from "./components/StarBackground";
import CursorTrail from "./components/CursorTrail";
import SignalGlitch from "./components/SignalGlitch";
import { AnimatePresence } from "framer-motion";

const MotoBuddy = lazy(() => import("./pages/projects/MotoBuddy"));
const SHMS = lazy(() => import("./pages/projects/Shms"));
const HomeChef = lazy(() => import("./pages/projects/HomeChef"));
const Elis = lazy(() => import("./pages/projects/Elis"));
// const [isMounted, setIsMounted] = useState(false);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />

        {/* Individual Project Routes */}
        <Route path="/project/motobuddy" element={<MotoBuddy />} />
        <Route
          path="/project/smart health management system"
          element={<SHMS />}
        />
        <Route path="/project/homechef" element={<HomeChef />} />
        <Route path="/project/elis" element={<Elis />} />

        {/* Fallback for other projects */}
        <Route path="/project/:id" element={<ProjectDetail />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      {/* <Loader /> */}
      <Starfield />
      <CursorTrail />
      <SignalGlitch />
      {/* <Preloader /> */}

      <div className="relative z-10">
        <Navbar />
        <Suspense fallback={<div className="h-[100vh] w-[100vw] bg-black" />}>
          <AnimatedRoutes />
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
