import React from 'react'
import BG from './components/BG'
import Slider from './components/Slider'

const App = () => {
  return (
    <div className=' centerChild min-h-screen relative'>

      <BG></BG>

      <Slider></Slider>

      <p className=' absolute bottom-4 right-4 text-gray-400'>
        Created By Jitendriya Meher
      </p>

    </div>
  )
}

export default App