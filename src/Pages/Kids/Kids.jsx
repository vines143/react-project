import React from "react";
import "./Kids.css";
import KidsData from "../../Data/KidsData/KidsData";

const Kids = () => {
  // console.log(KidsData)
  return (
    <div>
      <div className="kids-container">
        <h2>Kids clothing.</h2>
        <div className="cards">
          {KidsData.map(({ id, name, category, description, price, image }) => {
            return (
              <div className="kids-card">
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

export default Kids;
