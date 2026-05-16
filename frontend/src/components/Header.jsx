import React from 'react'
import { NavLink } from 'react-router'

function Header() {

  const activeStyle =
    "text-white bg-slate-800 px-4 py-2 rounded-lg"

  const normalStyle =
    "text-slate-700 hover:bg-slate-200 px-4 py-2 rounded-lg transition"

  return (

    <nav className="bg-white shadow-md p-4">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-slate-800">
          EmployeeApp
        </h1>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-3 text-lg font-medium">

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeStyle : normalStyle
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/create-emp"
              className={({ isActive }) =>
                isActive ? activeStyle : normalStyle
              }
            >
              Create Employee
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/list-emp"
              className={({ isActive }) =>
                isActive ? activeStyle : normalStyle
              }
            >
              Employees
            </NavLink>
          </li>

        </ul>

      </div>

    </nav>
  )
}

export default Header