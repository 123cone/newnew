import React from "react";
import "../styling/home.css";

const FloatingLanterns = () => {
  return (
    <div className="body_one">
      <div className="container-fluid">
        <div className="baby-container container-fluid">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className={`ballon_container ballon_${index + 1}`}>
              <div className="ballon">
                <div className="ball_one"></div>
                <span className="plate"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloatingLanterns;
