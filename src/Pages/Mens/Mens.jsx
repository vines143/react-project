import React from 'react'
import './Mens.css'
import MensData from '../../Data/MensData/MensData'

const Mens = () => {
    // console.log(MensData)

  return (
    <div>
      <div className="men-container">
        <h2>Mens clothing.</h2>
        <div className="cards">

            {
                MensData.map(({id,name,category,description,price,image})=>{
                    return(
                        <div className="card">
                        <h4>{id}</h4>
                        <h1>{name}</h1>
                        <img src={image} alt="image longing..." />
                        <p>{description}</p>
                        <h3>categor:{category}</h3>
                        <h3>price: {price}/-</h3>
            </div>

                    )
                })
            }
            
        </div>
      </div>
    </div>
  )
}

export default Mens
