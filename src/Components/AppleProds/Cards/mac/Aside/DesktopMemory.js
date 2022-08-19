import React ,{useState , useEffect} from 'react'
import Checkbox from '../../../../../Checkbox/Checkbox'
import { UserAuth } from '../../../../../context/AuthContext';

const DesktopMemory = () => {
  const { setFilter} = UserAuth()
  const [check, setCheck] = useState({
    "8 GB": false,
    "16 GB": false,
    "32 Gb": false,
    "4 GB": false
    
  });
  
  useEffect(() => {
    setFilter(Object.entries(check).filter((prod) => prod[1]).map((cat) => cat[0]));
  }, [check,  setFilter]);

  const handleChange = (e)=> {
    const { name } = e.target;
    console.log(name);
    setCheck((prevState) => {
      return {
        ...prevState,
        [name]: !prevState[name],
      };
    });
  }

  return (
    <div className="device-type">
    <h5 className="px-2">Desktop Memory (RAM) </h5>

    <div className="form-check mx-4 py-1">
    <Checkbox
          id="8 GB"
          name="8 GB"
          title="8 GB"
          checked={check["8 GB"]}
          handleChange={(e) => handleChange(e)}
        />
      
    </div>
    <div className="form-check mx-4 py-1">
    <Checkbox
          id="32 GB"
          name="32 GB"
          title="32 GB"
          checked={check["32 GB"]}
          handleChange={(e) => handleChange(e)}
        />
      
    </div>
    <div className="form-check mx-4 py-1">
    <Checkbox
          id="4 GB"
          name="4 GB"
          title="4 GB"
          checked={check["4 GB"]}
          handleChange={(e) => handleChange(e)}
        />
      
    </div>
    <div className="form-check mx-4 py-1">
    <Checkbox
          id="16 GB"
          name="16 GB"
          title="16 GB"
          checked={check["16 GB"]}
          handleChange={(e) => handleChange(e)}
        />
      
    </div>
   
  </div>
  )
}

export default DesktopMemory