import React, { useState , useEffect} from "react";
import { useTranslation } from "react-i18next";
import Checkbox from "../../../../../../Checkbox/Checkbox";
import { UserAuth } from "../../../../../../context/AuthContext";

const OperatingSystem = () => {
  const {t}= useTranslation()
  const { setFilter } = UserAuth();

  const [check, setCheck] = useState({
    "ios 15": false,
    "ios 14": false,
    "ios 13": false
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
      <h5 className="px-2">{t("Operating System")}</h5>

      <div className="form-check mx-4 py-1">
        <Checkbox
          id="ios 15"
          name="ios 15"
          title={t("ios 15")}
          checked={check["ios 15"]}
          handleChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-check mx-4 py-1">
        <Checkbox
          id="ios 14"
          name="ios 14"
          title={t("ios 14")}
          checked={check["ios 14"]}
          handleChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-check mx-4 py-1">
        <Checkbox
          id="ios 13"
          name="ios 13"
          title={t("ios 13")}
          checked={check["ios 13"]}
          handleChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  );
};

export default OperatingSystem;
