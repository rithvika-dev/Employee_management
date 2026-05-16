import React from 'react'
import { useLocation } from 'react-router'

function Employee() {

  const { state } = useLocation()

  return (

    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-3xl p-6 md:p-10">

        <h1 className="text-3xl md:text-5xl font-bold text-center text-slate-800 mb-10">
          Employee Details
        </h1>

        <div className="space-y-5">

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
            <p className="text-sm text-slate-500 mb-1">Employee Name</p>
            <p className="text-lg md:text-2xl font-semibold text-slate-800">
              {state.name}
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
            <p className="text-sm text-slate-500 mb-1">Email Address</p>
            <p className="text-lg md:text-2xl font-semibold text-slate-800 break-words">
              {state.email}
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
            <p className="text-sm text-slate-500 mb-1">Mobile Number</p>
            <p className="text-lg md:text-2xl font-semibold text-slate-800">
              {state.mobile}
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
            <p className="text-sm text-slate-500 mb-1">Designation</p>
            <p className="text-lg md:text-2xl font-semibold text-slate-800">
              {state.designation}
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
            <p className="text-sm text-slate-500 mb-1">Company Name</p>
            <p className="text-lg md:text-2xl font-semibold text-slate-800">
              {state.companyname}
            </p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Employee