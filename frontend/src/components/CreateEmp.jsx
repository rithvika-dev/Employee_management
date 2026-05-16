import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateEmp() {

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const onformsubmit = async (empobj) => {
    try {
      setLoading(true)

      let res = await fetch("https://employee-management-1-188f.onrender.com/emp-api/employee", {
        method: "POST",
        body: JSON.stringify(empobj),
        headers: { "Content-type": "application/json" }
      })

      if (res.status === 201) {
        navigate("/list-emp")
      } else {
        let errorRes = await res.json()
        throw new Error(errorRes.message)
      }

    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-slate-100">
        <p className="text-2xl font-semibold text-slate-700">
          Loading...
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

      <div className="w-full max-w-lg bg-white shadow-xl rounded-3xl p-6 md:p-10">

        <h1 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-8">
          Employee Registration
        </h1>

        <form onSubmit={handleSubmit(onformsubmit)}>

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
            Add Employee
          </button>

        </form>

      </div>

    </div>
  )
}

export default CreateEmp