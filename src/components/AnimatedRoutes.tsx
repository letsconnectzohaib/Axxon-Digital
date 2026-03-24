import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import React, { Suspense, lazy } from 'react';
import PageTransition from './PageTransition';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Services = lazy(() => import('../pages/Services'));
const Portfolio = lazy(() => import('../pages/Portfolio'));
const PortfolioDetail = lazy(() => import('../pages/PortfolioDetail'));
const Blog = lazy(() => import('../pages/Blog'));
const Contact = lazy(() => import('../pages/Contact'));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes location={location}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
            <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
            <Route path="/portfolio/:id" element={<PageTransition><PortfolioDetail /></PageTransition>} />
            <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
