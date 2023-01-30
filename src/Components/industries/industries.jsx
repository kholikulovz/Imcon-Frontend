import React from "react";
import IndustriesSide from "./industriesSide";

function Industries() {
  return (
    <section className="industries">
      <div className="container">
        <div className="industries__wrapper">
          <div className="industries__textbox">
            <h2 className="industries__title">Industiries & Skills </h2>
            <p className="industries__text">
              We offer Digital and Design solutions for your business! Get your
              free consultation now!
            </p>
          </div>
          <IndustriesSide />
        </div>
      </div>
    </section>
  );
}

export default Industries;
