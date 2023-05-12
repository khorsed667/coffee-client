
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CCoffeCard from './Components/CCoffeCard'
import { useState } from 'react'

function App() {

  const loadedCoffee = useLoaderData()

  const [coffees, setCoffees] = useState(loadedCoffee)

  return (
    <div>
      <h1 className='text-3xl text-center mt-5'>Here total coffees: {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-4 mt-5'>
      {
        coffees.map(coffee => <CCoffeCard
        key={coffee._id}
        coffee={coffee}
        coffees={coffees}
        setCoffees={setCoffees}
        ></CCoffeCard>)
      }
      </div>
    </div>
  )
}

export default App
