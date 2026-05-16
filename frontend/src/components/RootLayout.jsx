import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'

function RootLayout() {

  return (

    <div className="min-h-screen bg-slate-100">

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="px-4 sm:px-6 md:px-10 lg:px-16 py-6">

        <div className="bg-white rounded-3xl shadow-md min-h-[85vh] p-4 sm:p-6 md:p-10">

          <Outlet />

        </div>

      </main>

    </div>
  )
}

export default RootLayout