import React, { useState } from "react";
import Colour from "../../Cards/iphone/Aside/Colour/Colour";

import StorageCapacity from "../../Cards/iphone/Aside/StorageCapacity/StorageCapacity";
import Aside from "./Aside/Aside";

// import Aside from '../Iphone/Aside/Aside'
import ShomMac from "./ShowMac/ShomMac";

const Mac = () => {
  const [range, setRange] = useState("1000");
  const rangeSlide = (e) => {
    setRange(e.target.value);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <aside className="col-md-2">
          <aside className="aside my-3">
            {/* shop by */}
            <div className="shop-by">
              <p>
                <span>Shop By</span>
              </p>
            </div>
            {/* price */}
            <div className="price">
              <div>
                <p>price</p>
              </div>
              <div>
                <div className="d-flex gap-5">
                  <div className="text-center">
                    <label htmlFor="minNumber">Min</label>
                    <input
                      className="form-control "
                      type="number"
                      min="0"
                      name="minNumber"
                      value="0"
                    />
                  </div>
                  <div className="text-center">
                    <label htmlFor="maxNumber">Max</label>
                    <input
                      className="form-control "
                      type="number"
                      max="999"
                      name="maxNumber"
                      placeholder="999"
                      onChange={(e) => {
                        setRange(e.target.value);
                      }}
                      value={range}
                    />
                  </div>
                </div>
                <div>
                  <input
                    class="range"
                    type="range"
                    value={range}
                    min="0"
                    max="1000"
                    onChange={(e) => {
                      rangeSlide(e);
                    }}
                  />
                </div>
              </div>
            </div>
            <Aside/>
            <hr/>
            <StorageCapacity/>
            <hr />
         
            {/* color */}
            <Colour/>

          </aside>
        </aside>
        <div className="col-md-10">
          <ShomMac/>
        </div>
      </div>
    </div>
  );
};

export default Mac;