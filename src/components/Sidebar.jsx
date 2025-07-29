import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard,
  Settings,
  Bell,
  ShoppingCart,
  Contact,
  ChevronsLeft,
  Menu
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
    <aside className={`h-screen bg-gray-100 border-r border-gray-200 text-gray-800 transition-all duration-300 ease-in-out ${expanded ? 'w-64' : 'w-20'} shadow-lg`}>
        <div className="p-4 flex items-center justify-between border-b border-gray-200 h-[69px]">
            {expanded && <Logo />}
            <button onClick={() => setExpanded(curr => !curr)} className="p-2 rounded-lg hover:bg-gray-300">
                {expanded ? <ChevronsLeft /> : <Menu />}
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
                    ? 'bg-blue-600 text-white shadow-lg font-semibold' 
                    : 'hover:bg-gray-200 text-gray-700'
                }`}
              >
                <span className={`flex-shrink-0 ${location.pathname === item.path ? 'text-white' : 'text-gray-600'}`}>
                  {item.icon}
                </span>
                {expanded && <span className="ml-3">{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;