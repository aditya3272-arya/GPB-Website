import React, { useState, useEffect } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TeamCarousel } from './components/TeamCarousel';
import { ServicesSection } from './components/ServicesSection';
import { TrustSection } from './components/TrustSection';
import { FinancialCalculator } from './components/FinancialCalculator';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { NetBankingModal } from './components/NetBankingModal';
import { AccountOpeningModal } from './components/AccountOpeningModal';
import { TeamMemberRole } from './types';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isNetBankingOpen, setIsNetBankingOpen] = useState(false);
  const [isAccountOpeningOpen, setIsAccountOpeningOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section for navigation highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'team', 'services', 'loans', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExploreServices = () => {
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCalculator = () => {
    const calcEl = document.getElementById('loans');
    if (calcEl) {
      calcEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactUs = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] font-sans antialiased">
      {/* 0. Institutional Bank Security Splash Screen */}
      {showSplash && (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      )}

      {/* 1. Header & Navigation */}
      <Header
        activeSection={activeSection}
        onOpenNetBanking={() => setIsNetBankingOpen(true)}
        onOpenAccountOpening={() => setIsAccountOpeningOpen(true)}
      />

      <main className="flex-grow">
        {/* 2. Hero / Landing Section */}
        <Hero
          onOpenAccountOpening={() => setIsAccountOpeningOpen(true)}
          onOpenNetBanking={() => setIsNetBankingOpen(true)}
          onExploreServices={handleExploreServices}
          onOpenCalculator={handleOpenCalculator}
        />

        {/* 3. Student Banking Team Carousel (Parts 8-11 - Left -> Right Continuous Linear Conveyor Belt) */}
        <TeamCarousel />

        {/* 4. Banking Services Section (Part 7) */}
        <ServicesSection
          onOpenAccountOpening={() => setIsAccountOpeningOpen(true)}
          onOpenNetBanking={() => setIsNetBankingOpen(true)}
        />

        {/* 5. Trust & Institutional Security Section (Part 12) */}
        <TrustSection />

        {/* 6. Interactive Financial Calculator */}
        <FinancialCalculator />

        {/* 7. About Institutional Background */}
        <AboutSection />

        {/* 8. Call to Action Section (Part 13) */}
        <CallToAction
          onOpenAccountOpening={() => setIsAccountOpeningOpen(true)}
          onExploreServices={handleExploreServices}
          onContactUs={handleContactUs}
        />

        {/* 9. Contact, Branch Desks & FAQs */}
        <ContactSection />
      </main>

      {/* 10. Multi-Column Footer (Part 14) */}
      <Footer
        onOpenAccountOpening={() => setIsAccountOpeningOpen(true)}
        onOpenNetBanking={() => setIsNetBankingOpen(true)}
        onReplaySplash={() => setShowSplash(true)}
      />

      {/* Interactive Modals */}
      <NetBankingModal
        isOpen={isNetBankingOpen}
        onClose={() => setIsNetBankingOpen(false)}
      />

      <AccountOpeningModal
        isOpen={isAccountOpeningOpen}
        onClose={() => setIsAccountOpeningOpen(false)}
      />
    </div>
  );
}
