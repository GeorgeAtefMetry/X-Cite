import React, { useState, useEffect } from "react";
import Checkbox from "../../../../../../Checkbox/Checkbox";
import { UserAuth } from "../../../../../../context/AuthContext";

const Colour = () => {
  const { setFilter } = UserAuth();
  const [check, setCheck] = useState({
    Blue: false,
    Black: false,
    White: false,
    Silver: false,
    Gold: false,
    Green: false,
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
      <h5 className="px-2">Colour</h5>

      <div className="form-check mx-4 py-1">
        <Checkbox
          id="Blue"
          name="Blue"
          title="Blue"
          checked={check["Blue"]}
          handleChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-check mx-4 py-1">
        <Checkbox
          id="Black"
          name="Black"
          title="Black"
          checked={check["Black"]}
          handleChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-check mx-4 py-1">
        <Checkbox
          id="White"
          name="White"
          title="White"
          checked={check["White"]}
          handleChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-check mx-4 py-1">
        <Checkbox
          id="Silver"
          name="Silver"
          title="Silver"
          checked={check["Silver"]}
          handleChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-check mx-4 py-1">
        <Checkbox
          id="Gold"
          name="Gold"
          title="Gold"
          checked={check["Gold"]}
          handleChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-check mx-4 py-1">
        <Checkbox
          id="Green"
          name="Green"
          title="Green"
          checked={check["Green"]}
          handleChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  );
};

export default Colour;
