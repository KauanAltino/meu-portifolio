import { lazy, Suspense } from 'react'
import AboutSection from '../components/AboutSection'
import BlogSection from '../components/BlogSection'
import ContactSection from '../components/ContactSection'
import CustomCursor from '../components/CustomCursor'
import ExperienceSection from '../components/ExperienceSection'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import LoadingScreen from '../components/LoadingScreen'
import Navbar from '../components/Navbar'
import ProjectsSection from '../components/ProjectsSection'
import ScrollProgress from '../components/ScrollProgress'
import StatsSection from '../components/StatsSection'

const CertificatesSection = lazy(() => import('../components/CertificatesSection'))

export default function HomePage() {
  return (
    <div className="app-shell">
      <LoadingScreen />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <StatsSection />
        <ExperienceSection />
        <Suspense fallback={<div className="section-shell">Carregando seções...</div>}>
          <CertificatesSection />
        </Suspense>
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
