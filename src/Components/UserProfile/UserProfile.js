import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import db from "../../firebase";
import "./UserProfile.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { updatePassword } from "firebase/auth";
import { Tab, Tabs, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
// import SingUp from "../SingUp/SingUp";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import { Spinner } from "react-bootstrap";
import OrderDetailes from './orderDetailes';


function UserProfile() {
  // state to use
  const [open, setOpen] = useState(false);
  const [newOpen, setNewOpen] = useState(false);
  const [thirdOpen, setthirdOpen] = useState(false);
  const [fourOpen, setFourOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  const [password, setpassword] = useState("");
  const [value, setValue] = useState(0);
  const [curUser, setCurUser] = useState([]);
  const { user } = UserAuth();
  
  // connect with firebase and get the user info
  useEffect(() => {
    const proCollection = collection(db, "users");
    onSnapshot(proCollection, (snapshot) => {
      console.log(snapshot.docs);
      setCurUser(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  // on click handel open and close popup
  const closeModal = () => {
    setOpen(false);
    setNewOpen(false);
    setthirdOpen(false);
    setFourOpen(false);
  };

  // get current user

  //get id of the current user
  let userId = curUser
    ?.filter(({ email }) => email === user.email)
    .map((cur) => cur.id)
    .join("");
  // handel submit edit info user
  const handelSubmit = (e) => {
    e.preventDefault();
    const docRef = doc(db, "users", userId);
    if (e.target?.mobile?.value) {
      updateDoc(docRef, {
        mobile,
      }).then(() => {
        setOpen(false);
      });
      console.log(mobile);
    } else if (e.target?.fullName?.value) {
      updateDoc(docRef, {
        fullName,
      }).then(() => {
        setNewOpen(false);
      });
    } else if (e.target?.location?.value) {
      updateDoc(docRef, {
        location,
      }).then(() => {
        setNewOpen(false);
      });
    } else if (e.target?.password?.value) {
      updateDoc(docRef, {
        password,
        rePassword: password,
      }).then(() => {
        console.log("not me updata doc");
      });
      updatePassword(user, password)
        .then(() => {
          console.log("done");
          setFourOpen(false);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  // show info about user
  let userCard = curUser
    ?.filter(({ email }) =>{ 
      console.log(email);
      console.log(user.email)
      console.log(email == user.email);
      return email === user.email})
    .map((cur) => (
      <div key={cur.id} className="w-100 d-flex flex-column bg-white">
        {/* mange profile */}
        <div className="profile px-1 py-2">
          <h4>My Dashboard</h4>
          <p>
            Hello <span> {cur.fullName}</span>
          </p>
          <p>
            From your My Account Dashboard you have the ability to view a
            snapshot of your recent account activity and update your account
            information. Select a link below to view or edit information.
          </p>
          <p className="text-black py-2" style={{ backgroundColor: "#F1F1F1" }}>
            Your Account
            <span className="text-primary ps-2">Manage your Profiles</span>{" "}
          </p>
        </div>
        {/* change name */}
        <div>
          <h5 className="py-2 " style={{ backgroundColor: "#F1F1F1" }}>
            Account Information
          </h5>
        </div>
        <section className="text-black bg-light py-4 d-flex align-content-center justify-content-around">
          <h4 className="text-black px-5">
            Hello <span className="text-primary ps-2"> {cur.fullName}</span>
          </h4>
          <div className="edit-icon">
            <i
              class="fa-solid fa-pen"
              onClick={() => setNewOpen((o) => !o)}
            ></i>
          </div>
          <Popup
            open={newOpen}
            closeOnDocumentClick
            onClose={closeModal}
            position="right center"
          >
            <div className="py-5 position-relative">
              <div className="position-absolute top-0 start-100 translate-middle edit-icon">
                <i
                  class="fa-solid fa-x text-primary fs-4 bg-black p-2 rounded"
                  onClick={closeModal}
                ></i>
              </div>
              <form onSubmit={(e) => handelSubmit(e)}>
                <input
                  className="form-control py-2 my-2"
                  type="text"
                  value={fullName}
                  placeholder="enter your new name"
                  name="fullName"
                  onChange={(e) => setFullName(e.target.value)}
                />
                <button className="btn btn-primary">submit</button>
              </form>
            </div>
          </Popup>
        </section>
        {/* change phone number */}
        <div className="text-black  py-4 bg-dark d-flex justify-content-around">
          <h4 className="text-white px-5">
            Mobile <span className="text-primary ps-2"> {cur.mobile}</span>
          </h4>

          <div className="edit-icon">
            <i
              class="fa-solid fa-pen text-white"
              onClick={() => setOpen((o) => !o)}
            ></i>
          </div>
          <Popup
            open={open}
            closeOnDocumentClick
            onClose={closeModal}
            position="right center"
          >
            <div className="py-5 position-relative">
              <div className="position-absolute top-0 start-100 translate-middle edit-icon">
                <i
                  class="fa-solid fa-x text-primary fs-4 bg-black p-2 rounded"
                  onClick={closeModal}
                ></i>
              </div>
              <form onSubmit={(e) => handelSubmit(e)}>
                <input
                  className="form-control py-2 my-2"
                  type="text"
                  placeholder="enter your mobile number"
                  name="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />

                <button className="btn btn-primary">submit</button>
              </form>
            </div>
          </Popup>
        </div>
        {/* change location */}
        <section className="text-black bg-light py-4 d-flex justify-content-around">
          <h4 className="text-black px-5">
            Location <span className="text-primary ps-2"> {cur.location}</span>
          </h4>
          <div className="edit-icon">
            <i
              class="fa-solid fa-pen"
              onClick={() => setthirdOpen((o) => !o)}
            ></i>
          </div>
          <Popup
            open={thirdOpen}
            closeOnDocumentClick
            onClose={closeModal}
            position="right center"
          >
            <div className="py-5 position-relative">
              <div className="position-absolute top-0 start-100 translate-middle edit-icon">
                <i
                  class="fa-solid fa-x text-primary fs-4 bg-black p-2 rounded"
                  onClick={closeModal}
                ></i>
              </div>
              <form onSubmit={(e) => handelSubmit(e)}>
                <input
                  className="form-control py-2 my-2"
                  type="text"
                  placeholder="enter your new Location"
                  name="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <button className="btn btn-primary">submit</button>
              </form>
            </div>
          </Popup>
        </section>
        {/* change phone number */}
        <div className="text-black  py-4 bg-dark d-flex justify-content-around">
          <h4 className="text-white px-5">
            password{" "}
            <span className="text-primary ps-2">
              {" "}
              {cur.password.slice(0, 2)}*****
            </span>
          </h4>

          <div className="edit-icon">
            <i
              class="fa-solid fa-pen text-white"
              onClick={() => setFourOpen((o) => !o)}
            ></i>
          </div>
          <Popup
            open={fourOpen}
            closeOnDocumentClick
            onClose={closeModal}
            position="right center"
          >
            <div className="py-5 position-relative">
              <div className="position-absolute top-0 start-100 translate-middle edit-icon">
                <i
                  class="fa-solid fa-x text-primary fs-4 bg-black p-2 rounded"
                  onClick={closeModal}
                ></i>
              </div>
              <form onSubmit={(e) => handelSubmit(e)}>
                <input
                  className="form-control py-2 my-2"
                  type="text"
                  placeholder="enter new password"
                  name="password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />

                <button className="btn btn-primary">submit</button>
              </form>
            </div>
          </Popup>
        </div>
      </div>
    ));
    
  // make some tabs
  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // add google map
  // const { isLoaded } = useJsApiLoader({
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  // });
  // if (!isLoaded) {
  //   return <Spinner />;
  // }

  const center = { lat: 30.02881979973718, lng: 31.475265800000003 };

  // jsx return
  return (
    <div className="container">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Account Dashboard" {...a11yProps(0)} />
          <Tab label="Address Book" {...a11yProps(1)} />
          <Tab label="My Orders" {...a11yProps(2)} />
          <Tab label="Store Credit" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {userCard}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h3>Add New Address</h3>
        <div className="w-100 ">
          <LoadScript googleMapsApiKey="AIzaSyDUTP8gumYhGoyNfSr7kZ97kCzNWFSbc8A">
            <GoogleMap
              center={center}
              zoom={11}
              mapContainerStyle={{ width: "100%", height: "600px" }}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <OrderDetailes/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div>
          <h2> Store Credit </h2>
          <p>Your current balance is: 0.000 KD</p>
        </div>
      </TabPanel>
    </div>
  );
}

export default UserProfile;