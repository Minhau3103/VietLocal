import { AppProvider, useApp } from './contexts/AppContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AIPlanning from './components/AIPlanning'
import GuidesSection from './components/GuidesSection'
import { DestinationsSection, FoodSection, BlogSection, AboutSection } from './components/Sections'
import { LoginModal, RegisterModal } from './components/AuthModals'
import PaymentModal from './components/PaymentModal'
import Footer from './components/Footer'

function AppInner() {
  const { showLogin, showRegister, showPayment, toast } = useApp()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AIPlanning />
        <GuidesSection />
        <DestinationsSection />
        <FoodSection />
        <AboutSection />
        <BlogSection />
      </main>
      <Footer />

      {showLogin && <LoginModal />}
      {showRegister && <RegisterModal />}
      {showPayment && <PaymentModal />}

      {toast && <div className="toast">✓ {toast}</div>}
    </>
  )
}

export default function App() {
  return (
    <AppProvider>
      <AppInner />
    </AppProvider>
  )
}
