import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function EditEmployee() {

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const { state } = useLocation()

  useEffect(() => {
    setValue("name", state.name)
    setValue("email", state.email)
    setValue("mobile", state.mobile)
    setValue("designation", state.designation)
    setValue("companyname", state.companyname)
  }, [])

  const saveModified = async (modifiedemp) => {

    try {

      setLoading(true)

      const res = await axios.put(
        `https://employee-management-1-188f.onrender.com/emp-api/employee/${state._id}`,
        modifiedemp
      )

      if (res.status === 200) {
        navigate("/list-emp")
      } else {
        throw new Error("Failed to update employee")
      }

    } catch (err) {

      console.log("err is", err)
      setError(err.message)

    } finally {

      setLoading(false)

    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-slate-100">
        <p className="text-2xl font-semibold text-slate-700">
          Updating Employee...
        </p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-slate-100 px-4">
        <p className="text-center text-red-500 text-xl md:text-3xl font-semibold">
          {error}
        </p>
      </div>
    )
  }

  return (

    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-6 md:p-10">

        <h1 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-8">
          Edit Employee Details
        </h1>

        <form onSubmit={handleSubmit(saveModified)}>

          <input
            type="text"
            placeholder="Enter name"
            {...register("name")}
            className="mb-4 w-full border border-slate-300 rounded-xl p-3 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-500"
          />

          <input
            type="email"
            placeholder="Enter email"
            {...register("email")}
            className="mb-4 w-full border border-slate-300 rounded-xl p-3 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-500"
          />

          <input
            type="text"
            placeholder="Enter mobile"
            {...register("mobile")}
            className="mb-4 w-full border border-slate-300 rounded-xl p-3 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-500"
          />

          <input
            type="text"
            placeholder="Enter designation"
            {...register("designation")}
            className="mb-4 w-full border border-slate-300 rounded-xl p-3 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-500"
          />

          <input
            type="text"
            placeholder="Enter company name"
            {...register("companyname")}
            className="mb-6 w-full border border-slate-300 rounded-xl p-3 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-500"
          />

          <button
            type="submit"
            className="w-full bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 rounded-xl transition duration-300"
          >
            Save Changes
          </button>

        </form>

      </div>

    </div>
  )
}

export default EditEmployee