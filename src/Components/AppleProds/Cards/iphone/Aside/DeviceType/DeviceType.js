import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Checkbox from "../../../../../../Checkbox/Checkbox";
import { UserAuth } from "../../../../../../context/AuthContext";

import "./DeviceType.css";
const DeviceType = () => {
const {t} =  useTranslation()

  const { setFilter } = UserAuth();
  const [check, setCheck] = useState({
    iphone13promax: false,
    iphone13pro: false,
    iphone13: false,
    iphone13mini: false,
    iphone12: false,
    iphone11: false,
    iphoneSe: false,
    "iphone 12 pro": false,
    "iphone 12 pro max": false,
  });

  useEffect(() => {
    setFilter(
        Object.entries(check)
          .filter((prod) => prod[1])
          .map((cat) => cat[0]),
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
      <h5 className="px-2">{t("Device Type")}</h5>

      <div className="form-check mx-4 py-1">
        <Checkbox
          id="iphone 13 pro max"
          name="iphone 13 pro max"
          title={t("iphone 13 pro max")}
          checked={check["iphone 13 pro max"]}
          handleChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-check mx-4 py-1">
        <Checkbox
          id="iphone 13 pro"
          name="iphone 13 pro"
          title={t("iphone 13 pro")}
          checked={check["iphone 13 pro"]}
          handleChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-check mx-4 py-1">
        <Checkbox
          id="iphone 13"
          name="iphone 13"
          title={t("iphone 13")}
          checked={check["iphone 13"]}
          handleChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-check mx-4 py-1">
        <Checkbox
          id="iphone13mini"
          name="iphone13mini"
          title={t("iphone 13 mini")}
          checked={check["iphone 13 mini"]}
          handleChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-check mx-4 py-1">
        <Checkbox
          id="iphone 12"
          name="iphone 12"
          title={t("iphone 12")}
          checked={check["iphone 12"]}
          handleChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-check mx-4 py-1">
        <Checkbox
          id="iphone11"
          name="iphone11"
          title={t("iphone 11")}
          checked={check["iphone 11"]}
          handleChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-check mx-4 py-1">
        <Checkbox
          id="iphoneSe"
          name="iphoneSe"
          title={t("iphone Se")}
          checked={check.IphoneSe}
          handleChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-check mx-4 py-1">
        <Checkbox
          id="iphone 12 pro"
          name="iphone 12 pro"
          title={t("iphone 12 pro")}
          checked={check["iphone 12 pro"]}
          handleChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-check mx-4 py-1">
        <Checkbox
          id="iphone12promax"
          name="iphone 12 pro max"
          title={t("iphone 12 pro max")}
          checked={check["iphone 12 pro max"]}
          handleChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  );
};

export default DeviceType;
