import React from 'react'

const StorageCapacity = () => {
  return (
    <div className="device-type">
        <h5 className="px-2">Storage Capacity </h5>

        <div className="form-check mx-4 py-1">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" htmlFor="flexCheckDefault">
            128 GB
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
          256 GB
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
          512 GB
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
          64 GB
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
          1 TB
          </label>
        </div>
      </div>
  )
}

export default StorageCapacity