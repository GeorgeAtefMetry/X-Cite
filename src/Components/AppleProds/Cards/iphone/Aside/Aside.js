/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from "react";
import DeviceType from "./DeviceType/DeviceType";
import OperatingSystem from "./OperatingSystem/OperatingSystem";
import PhoneMemory from "./PhoneMemory/PhoneMemory";
import StorageCapacity from "./StorageCapacity/StorageCapacity";
import PhoneDisplaySize from "./PhoneDisplaySize/PhoneDisplaySize";
import PhoneRearCamera from "./PhoneRearCamera/PhoneRearCamera";
import Colour from "./Colour/Colour";
import "./Aside.css";
const Aside = () => {
  const [range, setRange] = useState("1000");
  const rangeSlide = (e) => {
    setRange(e.target.value);
    
  };
  return (
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

              // onMouseMove={()=>{rangeSlide()}}
            />
          </div>
        </div>
      </div>
      <hr />
      {/* device type */}
      <DeviceType></DeviceType>
      <hr />
      {/* OS */}
      <OperatingSystem></OperatingSystem>
      <hr />
      {/* rem */}
      <PhoneMemory></PhoneMemory>
      <hr />
      {/* storage */}
      <StorageCapacity></StorageCapacity>
      <hr />
      {/* screen */}
      <PhoneDisplaySize></PhoneDisplaySize>
      <hr />
      {/* cam */}
      <PhoneRearCamera></PhoneRearCamera>
      <hr />
      {/* color */}
      <Colour></Colour>
    </aside>
  );
};

export default Aside;
