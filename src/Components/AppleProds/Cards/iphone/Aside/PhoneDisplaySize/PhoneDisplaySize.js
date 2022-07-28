import React, { useState, useEffect } from "react";
import Checkbox from "../../../../../../Checkbox/Checkbox";
import { UserAuth } from "../../../../../../context/AuthContext";

const PhoneDisplaySize = () => {

  const { setFilter } = UserAuth();

  const [check, setCheck] = useState({
    "6.1": false,
    "6.7": false,
    "5.4": false,
    "4.7": false,
  });
  const handleChange = (e) => {
    const { name } = e.target;
    console.log(name);
    setCheck((prevState) => {
      return {
        ...prevState,
        [name]: !prevState[name],
      };
    });
  };
  useEffect(() => {
    setFilter(
      Object.entries(check)
        .filter((prod) => prod[1])
        .map((cat) => cat[0])
    );
  }, [check, setFilter]);
  return (
    <div className="device-type">
      <h5 className="px-2">Phone Display Size</h5>

      <div className="form-check mx-4 py-1">
        <Checkbox
          id="6.1-inch"
          name="6.1"
          title="6.1-inch"
          checked={check["6.1-inch"]}
          handleChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-check mx-4 py-1">
        <Checkbox
          id="6.7-inch"
          name="6.7"
          title="6.7-inch"
          checked={check["6.7"]}
          handleChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-check mx-4 py-1">
        <Checkbox
          id="5.4-inch"
          name="5.4"
          title="5.4-inch"
          checked={check["5.4"]}
          handleChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-check mx-4 py-1">
        <Checkbox
          id="4.7-inch"
          name="4.7"
          title="4.7-inch"
          checked={check["4.7"]}
          handleChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  );
};

export default PhoneDisplaySize;
