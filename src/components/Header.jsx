import { Search, Bell, User, ChevronDown } from 'lucide-react'

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-lg">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="w-5 h-5 text-gray-500" />
          </div>
          <input
            type="text"
            className="w-full py-2.5 pl-12 pr-4 text-gray-800 bg-gray-100 border-transparent rounded-full focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
            placeholder="Search anything..."
          />
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center space-x-6">
          {/* Notifications */}
          <button className="p-2 text-gray-600 hover:text-blue-600 relative rounded-full hover:bg-gray-200 transition-colors">
            <Bell className="w-6 h-6" />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center">
              <User className="w-6 h-6 text-blue-800" />
            </div>
            <div className="text-sm">
                <div className="font-semibold text-gray-800">Administrator</div>
                <div className="text-gray-500">medcure.ph</div>
            </div>
            <ChevronDown className="w-5 h-5 text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header