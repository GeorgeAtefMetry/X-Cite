import React from 'react'

 const Accesssories = (props) => {
    const access = props.access.map((el, index) => (
        <div
          key={index}
          className="col-md-3  py-3  gap-2 "
        >
          <div className="bg-white py-3 d-flex flex-column justify-content-between align-items-center card">
            <h2 className="text-center"> {el.name} </h2>
            <div>
              <img src={el.imgUrl} alt={el.name} className="img-fluid" />
            </div>
            <button className="btn text-center shop-btn">SHOP NOW</button>
          </div>
        </div>
      ));
  return (
    <>
    <div className="container-fluid">
      <div className="row d-flex justify-content-between align-items-center">
        {access}
      </div>
    </div>
  </>
  )
}
export default Accesssories
