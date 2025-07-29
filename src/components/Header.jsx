import { Search, Bell, User, ChevronDown } from 'lucide-react'

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-amber-500 focus:bg-white"
            placeholder="Search..."
          />
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center space-x-6">
          {/* Notifications */}
          <button className="p-1 text-gray-500 hover:text-gray-700 relative">
            <Bell className="w-6 h-6" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
              <User className="w-5 h-5 text-amber-700" />
            </div>
            <span className="text-sm font-medium text-gray-700">Admin</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header