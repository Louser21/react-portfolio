import { useEffect } from 'react'
import { Routes, Route, Outlet, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useTheme } from './components/ThemeContext'
import ThemeProvider from './components/ThemeProvider'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

//helper
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function ResponsiveNavTracker() {
  useEffect(() => {
    const onResize = () => {
      document.documentElement.dataset.breakpoint =
        window.innerWidth <= 480 ? 'mobile' : window.innerWidth <= 768 ? 'tablet' : 'desktop'
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return null
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <ResponsiveNavTracker />
      <Navbar />
      <main id="content">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

function AppContent() {
  const { theme } = useTheme()
  return (
    <div className={`app-root ${theme}`}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Route>
      </Routes>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App