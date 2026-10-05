import React from 'react'
import Mens from './Pages/Mens/Mens'
import Womens from './Pages/Womens/Womens'
import Kids from './Pages/Kids/Kids'
import MensData from './Data/MensData/MensData'
import WomensData from './Data/WomensData/WomensData'
import KidsData from './Data/KidsData/KidsData'

const App = () => {
  // console.log(MensData)
  // console.log(WomensData)
  console.log(KidsData)
  return (
    <div>
    
      <Mens />
      <Womens />
      <Kids />
    </div>
  )
}

export default App
