import React from 'react'

const DesktopProcessor = () => {
  return (
    <div className="device-type">
    <h5 className="px-2">Desktop Processor </h5>

    <div className="form-check mx-4 py-1">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
      />
      <label class="form-check-label" htmlFor="flexCheckDefault">
        M1
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
      Intel corei5
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
      Intel corei7
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
      Intel corei9
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
      Intel Xeon
      </label>
    </div>
  </div>
  )
}

export default DesktopProcessor