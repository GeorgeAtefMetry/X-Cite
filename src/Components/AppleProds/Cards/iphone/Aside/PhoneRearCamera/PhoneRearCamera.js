import React from "react";

const PhoneRearCamera = () => {
  return (
    <div className="device-type">
      <h5 className="px-2">Phone Rear Camera</h5>

      <div className="form-check mx-4 py-1">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" htmlFor="flexCheckDefault">
          12 MP + 12 MP
        </label>
      </div>
      <div className="form-check mx-4 py-1">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" htmlFor="flexCheckDefault">
          12MP + 12MP + 12MP
        </label>
      </div>
      <div className="form-check mx-4 py-1">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" htmlFor="flexCheckDefault">
          12 Megapixels
        </label>
      </div>
      <div className="form-check mx-4 py-1">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" htmlFor="flexCheckDefault">
          13+2 Megapixels
        </label>
      </div>
    </div>
  );
};

export default PhoneRearCamera;
