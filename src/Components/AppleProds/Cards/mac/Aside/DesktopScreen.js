import React from "react";

const DesktopScreen = (props) => {
  return (
    <div className="device-type">
      <h5 className="px-2">Desktop Display Size</h5>

      <div className="form-check mx-4 py-1">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" htmlFor="flexCheckDefault">
          24-inch
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
          27-inch
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
          21-inch
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
          13.3-inch
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
          14-inch
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
          16-inch
        </label>
      </div>
    </div>
  );
};

export default DesktopScreen;
