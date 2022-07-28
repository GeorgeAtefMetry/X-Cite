import React ,{useEffect , useState} from 'react'
import Checkbox from '../../../../../Checkbox/Checkbox';
import { UserAuth } from '../../../../../context/AuthContext';

const DesktopProcessor = () => {

  const {setFilter} = UserAuth()
  const [check, setCheck] = useState({
    M1: false,
    "Intel corei5": false,
    "Intel core i7": false,
    "Intel corei9": false,
    "Intel Xeon": false,
    
  });
  
  useEffect(() => {
    setFilter(
      Object.entries(check)
        .filter((prod) => prod[1])
        .map((cat) => cat[0])
    );
  }, [check, setFilter]);

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
    <h5 className="px-2">Desktop Processor </h5>

    <div className="form-check mx-4 py-1">
    <Checkbox
          id="M1"
          name="M1"
          title="M1"
          checked={check["M1"]}
          handleChange={(e) => handleChange(e)}
        />
      
    </div>
    <div className="form-check mx-4 py-1">
    <Checkbox
          id="Intel corei5"
          name="Intel corei5"
          title="Intel corei5"
          checked={check["Intel corei5"]}
          handleChange={(e) => handleChange(e)}
        />
      
    </div>
    <div className="form-check mx-4 py-1">
    <Checkbox
          id="Intel core i7"
          name="Intel core i7"
          title="Intel core i7"
          checked={check["Intel core i7"]}
          handleChange={(e) => handleChange(e)}
        />
      
    </div>
    <div className="form-check mx-4 py-1">
    <Checkbox
          id="Intel corei9"
          name="Intel corei9"
          title="Intel corei9"
          checked={check["Intel corei9"]}
          handleChange={(e) => handleChange(e)}
        />
    </div>
    <div className="form-check mx-4 py-1">
    <Checkbox
          id="Intel Xeon"
          name="Intel Xeon"
          title="Intel Xeon"
          checked={check["Intel Xeon"]}
          handleChange={(e) => handleChange(e)}
        />
      
    </div>
  </div>
  )
}

export default DesktopProcessor