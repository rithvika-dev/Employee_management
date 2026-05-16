import React, { useContext } from 'react'
import { counterContextobj } from '../context/ContextProvider'
import { useCounterStore } from '../Store/CounterStore'

function Home() {

  // Zustand State
  const newCounter = useCounterStore((state) => state.newCounter)
  const incrementCounter = useCounterStore((state) => state.incrementCounter)
  const decrementCounter = useCounterStore((state) => state.decrementCounter)

  const newCounter1 = useCounterStore((state) => state.newCounter1)
  const incrementCounter1 = useCounterStore((state) => state.incrementCounter1)
  const decrementCounter1 = useCounterStore((state) => state.decrementCounter1)

  // Context API State
  const { counter, changecounter, counter1, changecounter1 } =
    useContext(counterContextobj)

  return (

    <div className="min-h-screen bg-slate-100 px-4 py-10">

      <h1 className="text-3xl md:text-5xl font-bold text-center text-slate-800 mb-10">
        Counter Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">

        {/* Context Counter 1 */}
        <div className="bg-white rounded-3xl shadow-lg p-6 text-center">

          <h2 className="text-xl md:text-2xl font-semibold text-slate-700 mb-4">
            Context Counter 1
          </h2>

          <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {counter}
          </p>

          <button
            onClick={changecounter}
            className="bg-slate-800 hover:bg-slate-900 text-white px-6 py-3 rounded-xl transition duration-300"
          >
            Increment
          </button>

        </div>

        {/* Context Counter 2 */}
        <div className="bg-white rounded-3xl shadow-lg p-6 text-center">

          <h2 className="text-xl md:text-2xl font-semibold text-slate-700 mb-4">
            Context Counter 2
          </h2>

          <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {counter1}
          </p>

          <button
            onClick={changecounter1}
            className="bg-slate-800 hover:bg-slate-900 text-white px-6 py-3 rounded-xl transition duration-300"
          >
            Increment
          </button>

        </div>

        {/* Zustand Counter 1 */}
        <div className="bg-white rounded-3xl shadow-lg p-6 text-center">

          <h2 className="text-xl md:text-2xl font-semibold text-slate-700 mb-4">
            Zustand Counter 1
          </h2>

          <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {newCounter}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">

            <button
              onClick={incrementCounter}
              className="bg-slate-800 hover:bg-slate-900 text-white px-5 py-3 rounded-xl transition duration-300"
            >
              Increment
            </button>

            <button
              onClick={decrementCounter}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-xl transition duration-300"
            >
              Decrement
            </button>

          </div>

        </div>

        {/* Zustand Counter 2 */}
        <div className="bg-white rounded-3xl shadow-lg p-6 text-center">

          <h2 className="text-xl md:text-2xl font-semibold text-slate-700 mb-4">
            Zustand Counter 2
          </h2>

          <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {newCounter1}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">

            <button
              onClick={incrementCounter1}
              className="bg-slate-800 hover:bg-slate-900 text-white px-5 py-3 rounded-xl transition duration-300"
            >
              Increment
            </button>

            <button
              onClick={decrementCounter1}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-xl transition duration-300"
            >
              Decrement
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Home