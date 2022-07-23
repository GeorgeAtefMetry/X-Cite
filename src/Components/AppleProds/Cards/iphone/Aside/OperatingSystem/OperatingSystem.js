import React from 'react'

const OperatingSystem = () => {
  return (
    <div className="device-type">
        <h5 className="px-2">Operating System </h5>

        <div className="form-check mx-4 py-1">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" htmlFor="flexCheckDefault">
            ios 15
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
            ios 14
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
            ios 13
          </label>
        </div>
      </div>
  )
}

export default OperatingSystem