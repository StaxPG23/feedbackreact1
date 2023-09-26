// import { useState } from 'react'
import Feedback from './components/Feedback'

import './App.css'
import { PointProvider } from './context/PointContext'
import { useState } from 'react'
import Points from './components/Points'

function App() {
  // const [count, setCount] = useState(0)

  const [ data , setData ] = useState('Stalin')

  const updateData = (data) => {
    setData(data)
  }

  return (
    <PointProvider value = {{data,updateData}} >
      <h1 className='text-center text-xl'>Example Of Feedback Form</h1>
        <div className="h-[calc(100vh-28px)] bg-purpleLight flex items-center ">  
          <Feedback/>
          <Points/>
        </div>  
    </PointProvider>
  )
}

export default App
