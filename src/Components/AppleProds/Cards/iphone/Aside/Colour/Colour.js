import React,{useState, useEffect} from "react";
import Checkbox from "../../../../../../Checkbox/Checkbox";
import { UserAuth } from "../../../../../../context/AuthContext";

const Colour = () => {
  const { setFilter } = UserAuth();
  const [check, setCheck] = useState({
    "blue": false,
    "black": false,
    "white": false,
    "Silver": false,
    "Gold": false,
    "green": false
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
           id="blue"
           name="blue"
           title="blue"
           checked={check["blue"]}
           handleChange={(e) => handleChange(e)}
           />
        
      </div>
      <div className="form-check mx-4 py-1">
      <Checkbox  
           id="black"
           name="black"
           title="black"
           checked={check["black"]}
           handleChange={(e) => handleChange(e)}
           />
      </div>
      <div className="form-check mx-4 py-1">
      <Checkbox  
           id="white"
           name="white"
           title="white"
           checked={check["white"]}
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
           name="green"
           title="green"
           checked={check["green"]}
           handleChange={(e) => handleChange(e)}
           />
        
      </div>
      
    </div>
  );
};

export default Colour;