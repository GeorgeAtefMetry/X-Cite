import React, { useEffect, useState } from "react";
import Checkbox from "../../../../../Checkbox/Checkbox";
import { UserAuth } from "../../../../../context/AuthContext";

const DesktopScreen = (props) => {
  const { setFilter } = UserAuth();
  const [check, setCheck] = useState({
    "24 inch": false,
    "27 inch": false,
    "21 inch": false,
    "13.3-inch": false,
    "14 inch": false,
  });

  useEffect(() => {
    setFilter(
      Object.entries(check)
        .filter((prod) => prod[1])
        .map((cat) => cat[0])
    );
  }, [check, setFilter]);

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

  return (
    <div className="device-type">
      <h5 className="px-2">Desktop Display Size</h5>

      <div className="form-check mx-4 py-1">
        <Checkbox
          id="24 inch"
          name="24 inch"
          title="24 inch"
          checked={check["24 inch"]}
          handleChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-check mx-4 py-1">
        <Checkbox
          id="27 inch"
          name="27 inch"
          title="27 inch"
          checked={check["27 inch"]}
          handleChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-check mx-4 py-1">
        <Checkbox
          id="21 inch"
          name="21 inch"
          title="21 inch"
          checked={check["21 inch"]}
          handleChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-check mx-4 py-1">
        <Checkbox
          id="13.3-inch"
          name="13.3-inch"
          title="13.3-inch"
          checked={check["13.3-inch"]}
          handleChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-check mx-4 py-1">
        <Checkbox
          id="14 inch"
          name="14 inch"
          title="14 inch"
          checked={check["14 inch"]}
          handleChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-check mx-4 py-1">
        <Checkbox
          id="16 inch"
          name="16 inch"
          title="16 inch"
          checked={check["16 inch"]}
          handleChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  );
};

export default DesktopScreen;
