import React, { useEffect, useState } from "react";
import Checkbox from "../../../../../../Checkbox/Checkbox";
import { UserAuth } from "../../../../../../context/AuthContext";

import "./DeviceType.css";
const DeviceType = () => {
  const { setFilter } = UserAuth();
  const [check, setCheck] = useState({
    iphone13promax: false,
    iphone13pro: false,
    iphone13: false,
    iphone13mini: false,
    iphone12: false,
    iphone11: false,
    iphoneSe: false,
    iphone12pro: false,
    iphone12promax: false,
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
    // console.log(name);
    setCheck((prevState) => {
      return {
        ...prevState,
        [name]: !prevState[name],
      };
    });
  };

  return (
    <div className="device-type">
      <h5 className="px-2">Device Type</h5>

      <div className="form-check mx-4 py-1">
        <Checkbox
          id="iphone 13 pro max"
          name="iphone 13 pro max"
          title="iphone 13 pro max"
          checked={check["iphone 13 pro max"]}
          handleChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-check mx-4 py-1">
        <Checkbox
          id="iphone 13 pro"
          name="iphone 13 pro"
          title="iphone 13 pro"
          checked={check["iphone 13 pro"]}
          handleChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-check mx-4 py-1">
        <Checkbox
          id="iphone 13"
          name="iphone 13"
          title="iphone 13"
          checked={check["iphone 13"]}
          handleChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-check mx-4 py-1">
        <Checkbox
          id="iphone13mini"
          name="iphone13mini"
          title="iphone 13 mini"
          checked={check["iphone 13 mini"]}
          handleChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-check mx-4 py-1">
        <Checkbox
          id="iphone 12"
          name="iphone 12"
          title="iphone 12"
          checked={check["iphone 12"]}
          handleChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-check mx-4 py-1">
        <Checkbox
          id="iphone11"
          name="iphone11"
          title="iphone 11"
          checked={check["iphone 11"]}
          handleChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-check mx-4 py-1">
        <Checkbox
          id="IphoneSe"
          name="IphoneSe"
          title="Iphone Se "
          checked={check.IphoneSe}
          handleChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-check mx-4 py-1">
        <Checkbox
          id="Iphone12pro"
          name="Iphone12pro"
          title="Iphone 12 pro "
          checked={check.Iphone12pro}
          handleChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-check mx-4 py-1">
        <Checkbox
          id="Iphone12promax"
          name="Iphone12promax"
          title="Iphone 12 pro max"
          checked={check.Iphone12promax}
          handleChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  );
};

export default DeviceType;
