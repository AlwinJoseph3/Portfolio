import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";
import Starfield from "./components/StarBackground";
import { AnimatePresence } from "framer-motion";

import MotoBuddy from "./pages/projects/MotoBuddy";
import SHMS from "./pages/projects/Shms";
import HomeChef from "./pages/projects/HomeChef";
import Elis from "./pages/projects/Elis";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        
        {/* Individual Project Routes */}
        <Route path="/project/motobuddy" element={<MotoBuddy />} />
        <Route path="/project/smart health management system" element={<SHMS />} />
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
      {/* <Preloader /> */}

      <div className="relative z-10">
        <Navbar />
        <AnimatedRoutes />
      </div>
    </Router>
  );
};

export default App;
