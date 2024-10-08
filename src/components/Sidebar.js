// Sidebar.js
import React from 'react';
import { FaUserTie, FaBuilding, FaNewspaper, FaBirthdayCake, FaUser, FaSignOutAlt, FaBars, FaFileAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Sidebar({ isOpen, toggleSidebar, onSelectSection }) {
  const navigate = useNavigate(); // Initialize navigate

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      // Clear user authentication data
      localStorage.removeItem('authToken');
      navigate('/'); // Redirect to the login page
    }
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-blue-800 p-6 text-white transition-transform duration-300 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:relative lg:w-64 lg:block z-40 shadow-lg`}
    >
      {/* Toggle Button for Mobile */}
      <button
        className="lg:hidden text-white bg-blue-600 p-2 rounded mb-4"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        <FaBars size={24} />
      </button>

      {/* Dashboard Title */}
      <h3 className="text-2xl font-semibold mb-6 text-center">Dashboard</h3>

      {/* Sidebar Links */}
      <ul className="space-y-4">
        <SidebarLink label="Home" icon={<FaUser />} onClick={() => onSelectSection('home')} />
        <SidebarLink label="My Profile" icon={<FaUser />} onClick={() => onSelectSection('my-profile')} />
        <SidebarLink label="MCS Officers Profile" icon={<FaUserTie />} onClick={() => onSelectSection('officers-profile')} />
        <SidebarLink label="Govt Offices" icon={<FaBuilding />} onClick={() => onSelectSection('govt-offices')} />
        <SidebarLink label="Department Information" icon={<FaFileAlt />} onClick={() => onSelectSection('department-information')} />
        <SidebarLink label="News" icon={<FaNewspaper />} onClick={() => onSelectSection('news')} />
        <SidebarLink label="Today's Birthday" icon={<FaBirthdayCake />} onClick={() => onSelectSection('todays-birthday')} />
        <SidebarLink label="Today's Joining" icon={<FaBirthdayCake />} onClick={() => onSelectSection('todays-joining')} />
        <SidebarLink label="Feedback" icon={<FaFileAlt />} onClick={() => onSelectSection('feedback')} />
        <SidebarLink label="Sign Out" icon={<FaSignOutAlt />} onClick={handleLogout} />
      </ul>
    </aside>
  );
}

const SidebarLink = ({ label, icon, onClick }) => (
  <li>
    <button
      onClick={onClick}
      className="flex items-center py-3 px-4 rounded-lg w-full text-left transition duration-300 bg-blue-800 text-gray-300 hover:bg-blue-600 hover:text-white"
    >
      <span className="mr-3">{icon}</span>
      <span className="font-medium">{label}</span>
    </button>
  </li>
);

export default Sidebar;
