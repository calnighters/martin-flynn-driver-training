import HomePage from "../pages/HomePage";
import TestsPage from "../pages/TestsPage";
import PricingPage from "../pages/PricingPage";
import ContactPage from "../pages/ContactPage";
import UsefulLinksPage from "../pages/UsefulLinksPage";
import TestimonialsPage from "../pages/TestimonialsPage";
import AdminPage from "../pages/AdminPage";
import AuthWrapper from "../containers/AuthWrapper";

const endpoints = [
  {
    navbar: true,
    name: "Home",
    path: "/",
    element: <HomePage />,
  },
  {
    navbar: true,
    name: "Theory & Practical Tests",
    path: "/theory-practical-tests",
    element: <TestsPage />,
  },
  {
    navbar: true,
    name: "Pricing",
    path: "/pricing",
    element: <PricingPage />,
  },
  {
    navbar: true,
    name: "Useful Links",
    path: "/useful-links",
    element: <UsefulLinksPage />,
  },
  {
    navbar: true,
    name: "Testimonials",
    path: "/testimonials",
    element: <TestimonialsPage />,
  },
  {
    navbar: true,
    name: "Contact Details",
    path: "/contact-details",
    element: <ContactPage />,
  },
  {
    navbar: true,
    name: "Admin",
    path: "/admin",
    element: (
      <AuthWrapper>
        <AdminPage />
      </AuthWrapper>
    ),
  },
];

export default endpoints;
