import React from "react";

const Colour = () => {
  const handleChange = (e)=> {
    const {name, checked } = e.target
       if (checked) {
        console.log(name);
       }
  }
  return (
    <div className="device-type">
      <h5 className="px-2">Colour</h5>

      <div className="form-check mx-4 py-1">
        <input
          className="form-check-input"
          type="checkbox"
          name="Blue"
          id="flexCheckDefault"
          onChange={handleChange}
        />
        <label class="form-check-label" htmlFor="flexCheckDefault">
          Blue
        </label>
      </div>
      <div className="form-check mx-4 py-1">
        <input
          className="form-check-input"
          type="checkbox"
          name="Black"
          id="flexCheckDefault"
          onChange={handleChange}
        />
        <label class="form-check-label" htmlFor="flexCheckDefault">
          Black
        </label>
      </div>
      <div className="form-check mx-4 py-1">
        <input
          className="form-check-input"
          type="checkbox"
          name="White"
          id="flexCheckDefault"
          onChange={handleChange}
        />
        <label class="form-check-label" htmlFor="flexCheckDefault">
          White
        </label>
      </div>
      <div className="form-check mx-4 py-1">
        <input
          className="form-check-input"
          type="checkbox"
          name="Silver"
          id="flexCheckDefault"
          onChange={handleChange}
        />
        <label class="form-check-label" htmlFor="flexCheckDefault">
          Silver
        </label>
      </div>
      <div className="form-check mx-4 py-1">
        <input
          className="form-check-input"
          type="checkbox"
          name="Gold"
          id="flexCheckDefault"
          onChange={handleChange}
        />
        <label class="form-check-label" htmlFor="flexCheckDefault">
          Gold
        </label>
      </div>
      
    </div>
  );
};

export default Colour;