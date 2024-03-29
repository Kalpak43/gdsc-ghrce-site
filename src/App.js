import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";
import TeamPage from "./Pages/TeamPage";
import EventsPage from "./Pages/EventsPage";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import FigmaEvent from "./Pages/figma-lifestyle/FIgmaEvent";
import MainLayout from "./Layouts/MainLayout";

import { FaSun, FaMoon } from "react-icons/fa6";
import { Helmet } from "react-helmet";
import EventCertificate from "./Pages/figma-lifestyle/EventCertificate";
import CloudStudyJam from "./Pages/EventCertificates/CloudStudyJam";
import CloudStudyJamVolunteer from "./Pages/EventCertificates/CloudStudyJamVolunteer";
import HacktoberfestVolunteer from "./Pages/EventCertificates/HacktoberfestVolunteer";
import CoreConfluenceVolunteer from "./Pages/EventCertificates/CoreConfluenceVolunteer";
import SolutionChallenge from "./Pages/solution-challenge/SolutionChallenge";
import ScrollToTop from "./Components/ScrollToTop";
import CapxAttendees from "./Pages/EventCertificates/CapxAttendees";
import LimcaRecord from "./Pages/EventCertificates/LimcaRecord";

function App() {

  const storedDarkMode = localStorage.getItem("DARK_MODE");
  const [darkMode, setDarkMode] = useState(storedDarkMode === "true");

  useEffect(() => {
    localStorage.setItem("DARK_MODE", darkMode);
  }, [darkMode]);

  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  return (
    <div className={`App relative Background z-0 ${darkMode ? "dark-theme" : "light-theme"}`}>
      <Helmet>
        <title>GDSC GHRCE</title>
        <meta
          name="description"
          content="GDSC GHRCE is a community of students passionate about technology and development. It is a student-led initiative supported by Google Developers, aimed at providing a platform for students to learn, collaborate, and build projects using various Google technologies."
          data-react-helmet={true}
        />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage theme={darkMode} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/events/figma-lifestyle/certificate/:refID" element={<EventCertificate />} />
            <Route path="/events/cloud-study-jams/certificate/:refID" element={<CloudStudyJam />} />
            <Route path="/events/cloud-study-jams/volunteer-certificate/:refID" element={<CloudStudyJamVolunteer />} />
            <Route path="/events/hacktoberfest/volunteer-certificate/:refID" element={<HacktoberfestVolunteer />} />
            <Route path="/events/core-confluence/volunteer-certificate/:refID" element={<CoreConfluenceVolunteer />} />
            <Route path="/events/capx/attendee-certificate/:refID" element={<CapxAttendees />} />
            <Route path="/events/limca-record/certificate/:refID" element={<LimcaRecord />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>

          <Route path="/events/figma-lifestyle" element={<FigmaEvent />} />
          <Route path="/events/solution-challenge" element={<SolutionChallenge />} />
        </Routes>
      </Router>
      <button
        className="switch btn hover:bg-gray-200 border-2 bg-[--bg-color] shadow-lg rounded-lg h-12 aspect-square fixed bottom-0 right-0 flex justify-center items-center m-4 mx-4"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? (
          <FaSun className="text-2xl" />
        ) : (
          <FaMoon className="text-2xl" />
        )}
      </button>
    </div>
  );
}

export default App;
