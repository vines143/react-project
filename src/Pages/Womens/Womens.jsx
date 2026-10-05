import React from "react";
import "./Womes.css";
import WomensData from "../../Data/WomensData/WomensData";

const Womens = () => {
  // console.log(WomensData)
  return (
    <div>
      <div className="women-container">
        <h2>Womens clothing.</h2>
        <div className="cards">
          {WomensData.map(
            ({ id, name, category, description, price, image }) => {
              return (
                <div className="womens-card">
                  <h4>{id}</h4>
                  <h1>{name}</h1>
                  <img src={image} alt="image longing..." />
                  <p>{description}</p>
                  <h3>categor:{category}</h3>
                  <h3>price: {price}/-</h3>
                </div>
              );
            },
          )}
        </div>
      </div>
    </div>
  );
};

export default Womens;
