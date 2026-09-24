import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import ServicesSection from './components/home/ServicesSection';
import ParamedicalBanner from './components/home/ParamedicalBanner';
import AboutSection from './components/home/AboutSection';
import TransformationGallery from './components/home/TransformationGallery';
import LocationHoursSection from './components/home/LocationHoursSection';
import ReviewsSection from './components/home/ReviewsSection';
import Footer from './components/layout/Footer';
import QuoteWizardModal from './components/wizard/QuoteWizardModal';
import AdminLayout from './components/admin/AdminLayout';
import AdminLogin from './components/admin/AdminLogin';
import { authApi, getStoredToken } from './services/api';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'admin'
  const [wizardOpen, setWizardOpen] = useState(false);
  const [wizardCategory, setWizardCategory] = useState(null);
  const [wizardService, setWizardService] = useState(null);

  // Admin Authentication State
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [adminUser, setAdminUser] = useState(null);

  // Luxury Dark Mode state
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('makeover_theme');
      if (saved) return saved === 'dark';
      return true; // Default to dark luxury noir
    } catch {
      return true;
    }
  });

  useEffect(() => {
    const token = getStoredToken();
    if (token) {
      authApi.verify()
        .then(res => {
          if (res.authenticated) {
            setIsAdminAuthenticated(true);
            setAdminUser(res.user);
          }
        })
        .catch(() => {
          setIsAdminAuthenticated(false);
        });
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode || currentPage === 'admin') {
      root.classList.add('dark');
      document.body.classList.add('dark');
      if (currentPage !== 'admin') {
        localStorage.setItem('makeover_theme', 'dark');
      }
    } else {
      root.classList.remove('dark');
      document.body.classList.remove('dark');
      localStorage.setItem('makeover_theme', 'light');
    }
  }, [darkMode, currentPage]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/admin' || hash === '#admin') {
        setCurrentPage('admin');
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    if (page === 'admin') {
      window.location.hash = '#/admin';
    } else {
      if (window.location.hash.startsWith('#/admin')) {
        window.history.pushState(null, '', window.location.pathname);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (category = null, service = null) => {
    setWizardCategory(category);
    setWizardService(service);
    setWizardOpen(true);
  };

  const handleCloseBooking = () => {
    setWizardOpen(false);
    setWizardCategory(null);
    setWizardService(null);
  };

  if (currentPage === 'admin') {
    return isAdminAuthenticated ? (
      <AdminLayout
        user={adminUser}
        onLogout={() => {
          setIsAdminAuthenticated(false);
          setAdminUser(null);
        }}
        onBackToSite={() => handleNavigate('home')}
      />
    ) : (
      <AdminLogin
        onLoginSuccess={(user) => {
          setIsAdminAuthenticated(true);
          setAdminUser(user);
        }}
        onBackToSite={() => handleNavigate('home')}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] dark:bg-[#0b0a0d] text-stone-900 dark:text-stone-100 transition-colors duration-200">
      <Navbar
        onNavigate={handleNavigate}
        currentPage={currentPage}
        onOpenBooking={handleOpenBooking}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      <main className="flex-1">
        <Hero onOpenBooking={handleOpenBooking} />
        <ServicesSection onOpenBooking={handleOpenBooking} />
        <ParamedicalBanner onOpenBooking={handleOpenBooking} />
        <AboutSection onOpenBooking={handleOpenBooking} />
        <TransformationGallery onOpenBooking={handleOpenBooking} />
        <ReviewsSection />
        <LocationHoursSection onOpenBooking={handleOpenBooking} />
      </main>

      <Footer onNavigate={handleNavigate} />

      {/* Interactive Consultation Modal */}
      <QuoteWizardModal
        isOpen={wizardOpen}
        onClose={handleCloseBooking}
        initialCategory={wizardCategory}
        initialService={wizardService}
      />
    </div>
  );
}
