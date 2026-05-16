import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'

function ListOfEmployee() {

  const [emps, setEmps] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const navigate = useNavigate()

  // View Employee
  const gotoEmployee = (empobj) => {
    navigate("/employee", { state: empobj })
  }

  // Edit Employee
  const gotoEditemp = (empobj) => {
    navigate("/edit-emp", { state: empobj })
  }

  // Delete Employee
  const deleteEmp = async (id) => {

    try {

      let res = await axios.delete(
        `http://localhost:5000/emp-api/employee/${id}`
      )

      if (res.status === 200) {
        getEmps()
      }

    } catch (err) {
      setError("Failed to delete employee")
    }
  }

  // Get Employees
  async function getEmps() {

    try {

      setLoading(true)

      let res = await axios(
        "http://localhost:5000/emp-api/employee"
      )

      if (res.status === 200) {

        let resobj = await res.data
        setEmps(resobj.payload)

      }

    } catch (err) {

      setError("Failed to fetch employees")

    } finally {

      setLoading(false)

    }
  }

  useEffect(() => {
    getEmps()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-slate-100">
        <p className="text-2xl font-semibold text-slate-700">
          Loading Employees...
        </p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-slate-100">
        <p className="text-red-500 text-2xl font-semibold">
          {error}
        </p>
      </div>
    )
  }

  return (

    <div className="min-h-screen bg-slate-100 px-4 py-10">

      <h1 className="text-3xl md:text-5xl font-bold text-center text-slate-800 mb-10">
        List Of Employees
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

        {
          emps.map((empobj) => (

            <div
              key={empobj._id}
              className="bg-white shadow-lg rounded-3xl p-6 text-center"
            >

              <h2 className="text-2xl font-bold text-slate-800 mb-2">
                {empobj.name}
              </h2>

              <p className="text-slate-600 mb-6 break-words">
                {empobj.email}
              </p>

              <div className="flex flex-wrap justify-center gap-3">

                <button
                  onClick={() => gotoEmployee(empobj)}
                  className="bg-slate-700 hover:bg-slate-800 text-white px-4 py-2 rounded-xl transition"
                >
                  View
                </button>

                <button
                  onClick={() => gotoEditemp(empobj)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl transition"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteEmp(empobj._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition"
                >
                  Delete
                </button>

              </div>

            </div>

          ))
        }

      </div>

    </div>
  )
}

export default ListOfEmployee