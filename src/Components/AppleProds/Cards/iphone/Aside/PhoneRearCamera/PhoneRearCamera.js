import React ,{useState, useEffect} from "react";
import Checkbox from "../../../../../../Checkbox/Checkbox";
import { UserAuth } from "../../../../../../context/AuthContext";

const PhoneRearCamera = () => {

  const { setFilter } = UserAuth();

  const [check, setCheck] = useState({
    "12MP + 12MP": false,
    "12 MP + 12 MP + 12MP": false,
    "12 Megapixels": false,
    "13+2 Megapixels": false,
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
      <h5 className="px-2">Phone Rear Camera</h5>

      <div className="form-check mx-4 py-1">
        <Checkbox  
           id="12 MP + 12 MP"
           name="12MP + 12MP"
           title="12 MP + 12 MP"
           checked={check["12MP + 12MP"]}
           handleChange={(e) => handleChange(e)}
           />
        
      </div>
      <div className="form-check mx-4 py-1">
      <Checkbox  
           id="12 MP + 12 MP + 12MP"
           name="12MP + 12MP + 12MP"
           title="12 MP + 12 MP + 12MP"
           checked={check["12MP + 12MP + 12MP"]}
           handleChange={(e) => handleChange(e)}
           />
      </div>
      <div className="form-check mx-4 py-1">
      <Checkbox  
           id="12 Megapixels"
           name="12 Megapixels"
           title="12 Megapixels"
           checked={check["12 Megapixels"]}
           handleChange={(e) => handleChange(e)}
           />
        
      </div>
      <div className="form-check mx-4 py-1">
      <Checkbox  
           id="13+2 Megapixels"
           name="13+2 Megapixels"
           title="13+2 Megapixels"
           checked={check["13+2 Megapixels"]}
           handleChange={(e) => handleChange(e)}
           />
        
      </div>
    </div>
  );
};

export default PhoneRearCamera;
