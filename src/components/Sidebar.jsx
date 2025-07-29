import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard,
  Settings,
  Bell,
  ShoppingCart,
  Contact
} from 'lucide-react';
import Logo from './Logo.jsx';

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/' },
    { name: 'Management', icon: <Settings size={20} />, path: '/management' },
    { name: 'Notification', icon: <Bell size={20} />, path: '/notification' },
    { name: 'Point Of Sales', icon: <ShoppingCart size={20} />, path: '/point-of-sales' },
    { name: 'Contacts', icon: <Contact size={20} />, path: '/contacts' },
    { name: 'Settings', icon: <Settings size={20} />, path: '/settings' },
  ];

  return (
    <div className={`h-screen bg-indigo-800 text-white transition-all duration-300 ease-in-out ${expanded ? 'w-64' : 'w-20'} shadow-xl`}>
      <div className="p-4 flex justify-between items-center border-b border-indigo-700">
        <Logo expanded={expanded} />
        <button 
          onClick={() => setExpanded(!expanded)}
          className="p-2 rounded-lg hover:bg-indigo-700 text-white hover:text-indigo-100 transition-colors"
        >
          {expanded ? '«' : '»'}
        </button>
      </div>
      
      <nav className="p-4">
        <ul className="space-y-3">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`w-full flex items-center p-3 rounded-lg transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'bg-white text-indigo-800 shadow-md font-medium' 
                    : 'hover:bg-indigo-700 text-indigo-100'
                }`}
              >
                <span className={`flex-shrink-0 ${location.pathname === item.path ? 'text-indigo-600' : 'text-white'}`}>
                  {item.icon}
                </span>
                {expanded && <span className="ml-3">{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;