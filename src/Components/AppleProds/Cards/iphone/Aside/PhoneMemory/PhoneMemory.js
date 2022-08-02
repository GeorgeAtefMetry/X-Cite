import React, { useState, useEffect  } from "react";
import Checkbox from "../../../../../../Checkbox/Checkbox";
import { UserAuth } from "../../../../../../context/AuthContext";

const PhoneMemory = () => {

  const { setFilter } = UserAuth();
  const [check, setCheck] = useState({
    "6GB": false,
    "4GB": false,
    "3GB": false,
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
      <h5 className="px-2">Phone Memory </h5>

      <div className="form-check mx-4 py-1">
        <Checkbox
          id="6GB"
          name="6 GB"
          title="6 GB"
          checked={check["6 GB"]}
          handleChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-check mx-4 py-1">
        <Checkbox
          id="4GB"
          name="4 GB"
          title="4 GB"
          checked={check["4 GB"]}
          handleChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-check mx-4 py-1">
        <Checkbox
          id="3GB"
          name="3 GB"
          title="3 GB"
          checked={check["3 GB"]}
          handleChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  );
};

export default PhoneMemory;
