import React from 'react'

const PhoneMemory = () => {
  return (
    <div className="device-type">
        <h5 className="px-2">Phone Memory </h5>

        <div className="form-check mx-4 py-1">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" htmlFor="flexCheckDefault">
            6 GB
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
           4 GB
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
          3 GB
          </label>
        </div>
      </div>
  )
}

export default PhoneMemory