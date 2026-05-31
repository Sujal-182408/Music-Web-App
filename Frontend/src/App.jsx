import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./assets/layout/Navbar";
import Hero from "./assets/components/Hero";
import About from "./assets/components/About";
import Service from "./assets/components/Service";
import Production from "./assets/components/Production";
import Gallery from "./assets/components/Gallery";
import Contact from "./assets/components/Contact";
import Footer from "./assets/layout/Footer";
import Signin from "./assets/layout/Signin";
import { useAuth } from "./AuthContext";

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Service />
    <Gallery />
    <Production />
    <Contact />
  </>
);

const AboutPage = () => <About />;
const ServicePage = () => <Service />;
const ProductionPage = () => <Production />;
const GalleryPage = () => <Gallery />;
const ContactPage = () => <Contact />;

const MainLayout = ({ children }) => (
  <div className="min-h-screen overflow-x-hidden">
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/signin" replace />;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signin" replace />} />
      <Route path="/signin" element={<Signin />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <MainLayout>
              <HomePage />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/about"
        element={
          <ProtectedRoute>
            <MainLayout>
              <AboutPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/service"
        element={
          <ProtectedRoute>
            <MainLayout>
              <ServicePage />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/productions"
        element={
          <ProtectedRoute>
            <MainLayout>
              <ProductionPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/gallery"
        element={
          <ProtectedRoute>
            <MainLayout>
              <GalleryPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/contact"
        element={
          <ProtectedRoute>
            <MainLayout>
              <ContactPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/signin" replace />} />
    </Routes>
  );
};

export default App;
