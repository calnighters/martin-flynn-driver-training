import HomePage from "../pages/HomePage";
import TestsPage from "../pages/TestsPage";
import PricingPage from "../pages/PricingPage";
import ContactPage from "../pages/ContactPage";

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
    name: "Contact Details",
    path: "/contact-details",
    element: <ContactPage />,
  },
];

export default endpoints;