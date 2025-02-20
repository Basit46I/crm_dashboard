import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./Pages/Home"
import Recording from "./Pages/Recording"
import { Sidebar } from "./components/Sidebar"
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { TbLayoutDashboardFilled } from 'react-icons/tb'
import { IoRecording } from "react-icons/io5";

const sidebarLinks = [
  { id: 1, path: "/", name: "Dashboard", icon: TbLayoutDashboardFilled },
];

const dropdownLinks = [
  { id: 2, path: "/recordings", name: "Recordings", icon: IoRecording }
];

function App() {

  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(window.innerWidth >= 1000);

  const activeLink = sidebarLinks.find(link => link.path === location.pathname) || dropdownLinks.find(link => link.path === location.pathname);
  const activePageName = activeLink ? activeLink.name : "Unknown";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) {
        setIsExpanded(false);
      } else {
        setIsExpanded(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex">
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} sidebarLinks={sidebarLinks} dropdownLinks={dropdownLinks} />
      <div className={`transition-all w-full ${isExpanded ? "ml-60" : "ml-16"}`}>
        <Header activePageName={activePageName} />
        <div className="p-5">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/recordings" element={<Recording />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
