import React from 'react'

const DesktopMemory = () => {
  return (
    <div className="device-type">
    <h5 className="px-2">Desktop Memory (RAM) </h5>

    <div className="form-check mx-4 py-1">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
      />
      <label class="form-check-label" htmlFor="flexCheckDefault">
        8 GB
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
      32 GB
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
      16 GB
      </label>
    </div>
   
  </div>
  )
}

export default DesktopMemory