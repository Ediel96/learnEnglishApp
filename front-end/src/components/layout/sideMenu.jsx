import React from 'react'


export const SideMenu = ({ content }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r">
        <div className="p-4">
          <h1 className="text-xl font-bold text-gray-800">Side Menu</h1>
        </div>
        <nav className="py-4">
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-700 hover:text-gray-900 px-4 py-2 block">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-700 hover:text-gray-900 px-4 py-2 block">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-700 hover:text-gray-900 px-4 py-2 block">
                Services
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-700 hover:text-gray-900 px-4 py-2 block">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-gray-800 text-white p-4">
          <h1 className="text-xl font-bold">Main Content Header</h1>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Page Content Goes Here</h2>
            {content}
          </div>            
        </main>
      </div>
    </div>
  )
}
