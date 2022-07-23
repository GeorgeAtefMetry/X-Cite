import React from "react";

const PhoneDisplaySize = () => {
  return (
    <div className="device-type">
      <h5 className="px-2">Phone Display Size</h5>

      <div className="form-check mx-4 py-1">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" htmlFor="flexCheckDefault">
          6.1-inch
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
          6.7-inch
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
          5.4-inch
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
          4.7-inch
        </label>
      </div>
    </div>
  );
};

export default PhoneDisplaySize;
