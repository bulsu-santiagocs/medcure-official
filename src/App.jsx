import Sidebar from './components/Sidebar'
import Header from './components/Header'

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 p-6 overflow-auto bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Dashboard Overview</h1>
            <p className="text-gray-600">Your application content goes here.</p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App