import React, {useState, useEffect} from 'react'
import Checkbox from '../../../../../../Checkbox/Checkbox';
import { UserAuth } from '../../../../../../context/AuthContext';

const StorageCapacity = () => {

  const { setFilter } = UserAuth();

  const [check, setCheck] = useState({
    "128 GB": false,
    "256 GB": false,
    "512 GB": false,
    "64 GB": false,
    "1 TB": false,
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
        <h5 className="px-2">Storage Capacity </h5>

        <div className="form-check mx-4 py-1">
        <Checkbox
          id="128GB"
          name="128 GB"
          title="128 GB"
          checked={check["128 GB"]}
          handleChange={(e) => handleChange(e)}
        />
        
        </div>
        <div className="form-check mx-4 py-1">
        <Checkbox
          id="256GB"
          name="256 GB"
          title="256 GB"
          checked={check["256 GB"]}
          handleChange={(e) => handleChange(e)}
        />
        </div>
        <div className="form-check mx-4 py-1">
        <Checkbox
          id="512GB"
          name="512 GB"
          title="512 GB"
          checked={check["512 GB"]}
          handleChange={(e) => handleChange(e)}
        />
        </div>
        <div className="form-check mx-4 py-1">
        <Checkbox
          id="64GB"
          name="64 GB"
          title="64 GB"
          checked={check["64 GB"]}
          handleChange={(e) => handleChange(e)}
        />
        </div>
        <div className="form-check mx-4 py-1">
        <Checkbox
          id="1TB"
          name="1 TB"
          title="1 TB"
          checked={check["1 TB"]}
          handleChange={(e) => handleChange(e)}
        />
        </div>
      </div>
  )
}

export default StorageCapacity