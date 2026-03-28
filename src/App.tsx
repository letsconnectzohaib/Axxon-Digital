/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AnimatedRoutes from './components/AnimatedRoutes';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import PageLoader from './components/PageLoader';

import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <PageLoader />
        <Router>
          <ScrollToTop />
          <CustomCursor />
          <ScrollProgress />
          <div className="min-h-screen bg-[#050510] light:bg-[#F8F9FA] blue:bg-[#050510] dark:bg-[#0A0A0A] transition-colors duration-300 flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <AnimatedRoutes />
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}
