import React from "react";
import { Tab, Tabs, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import styles from "./../IphoneDetiles.module.css";
const TabsComp = (props) => {
  
  function TabPanel(props) {
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
  }
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return <div>
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="None" {...a11yProps(0)} />
              <Tab label="Basic" {...a11yProps(1)} />
              <Tab label="Plus" {...a11yProps(2)} />
              <Tab label="Platinum" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}></TabPanel>
          <TabPanel value={value} index={1}>
            <h6>2. Select the plan's period:</h6>
            <div className="radio-cont">
              <div className="form-check py-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  XCARE BASIC AAA 1 YR (34.650 KD)
                </label>
              </div>
              <div className="form-check py-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  XCARE BASIC AAA 2 YR (47.650 KD)
                </label>
              </div>
              <div className="form-check py-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault3">
                  XCARE BASIC AAA 3 YR (47.650 KD)
                </label>
              </div>
              <div className="form-check py-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault4"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault4">
                  XCARE BASIC AAA 4 YR (47.650 KD)
                </label>
              </div>
              <div className="form-check py-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault5"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault5">
                  XCARE BASIC AAA 5 YR (47.650 KD)
                </label>
              </div>
            </div>
            <div className="py-2">
              <img
                src="https://m.xcite.com/media/wysiwyg/xcare-warranty/new-xcare-basic-en.png"
                style={{ width: "100px" }}
                alt="logo exp"
              />
            </div>
            <div className={`${styles.continfo} d-flex`}>
              <div className={`${styles.first}`}>
                <ul>
                  <li>
                    <i class="fa-solid fa-check pe-2"></i>Extend your
                    manufacturing warranty hassle-free for up to 5 years.
                  </li>
                  <li>
                    <i class="fa-solid fa-check pe-2"></i>Free repair charges
                    under extended warranty.
                  </li>
                  <li>
                    <i class="fa-solid fa-x pe-2"></i>Accidental warranty (1
                    year from purchase date).
                  </li>
                  <li>
                    <i class="fa-solid fa-x pe-2"></i>Spills protection.
                  </li>
                  <li>
                    <i class="fa-solid fa-x pe-2"></i>Free TECHFORCE service
                    coupon.
                  </li>
                </ul>
              </div>
              <div className={`${styles.second}`}>
                <ul>
                  <li>
                    <i class="fa-solid fa-x pe-2" /> International coverage For
                    extended warranty.
                  </li>
                  <li>
                    <i class="fa-solid fa-x pe-2" /> Fire protection covered
                    only in Kuwait & under extended warranty. Not covered under
                    manufacturing warranty.
                  </li>
                </ul>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <h6>2. Select the plan's period:</h6>
            <div className="radio-cont">
              <div className="form-check py-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  XCARE BASIC AAA 1 YR (63.650 KD)
                </label>
              </div>
              <div className="form-check py-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  XCARE BASIC AAA 2 YR (72.650 KD)
                </label>
              </div>
              <div className="form-check py-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault3">
                  XCARE BASIC AAA 3 YR (88.650 KD)
                </label>
              </div>
              <div className="form-check py-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault4"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault4">
                  XCARE BASIC AAA 4 YR (103.650 KD)
                </label>
              </div>
              <div className="form-check py-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault5"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault5">
                  XCARE BASIC AAA 5 YR (119.650 KD)
                </label>
              </div>
            </div>
            <div className="py-2">
              <img
                src="https://m.xcite.com/media/wysiwyg/xcare-warranty/new-xcare-basic-en.png"
                style={{ width: "100px" }}
                alt="logo exp"
              />
            </div>
            <div className={`${styles.continfo} d-flex`}>
              <div className={`${styles.first}`}>
                <ul>
                  <li>
                    <i class="fa-solid fa-check pe-2 text-success"></i>Extend
                    your manufacturing warranty hassle-free for up to 5 years.
                  </li>
                  <li>
                    <i class="fa-solid fa-check pe-2 text-success"></i>Free
                    repair charges under extended warranty.
                  </li>
                  <li>
                    <i class="fa-solid fa-check pe-2 text-success"></i>
                    Accidental warranty (1 year from purchase date).
                  </li>
                  <li>
                    <i class="fa-solid fa-check pe-2 text-success"></i>Spills
                    protection.
                  </li>
                  <li>
                    <i class="fa-solid fa-check pe-2 text-success"></i>Free
                    TECHFORCE service coupon.
                  </li>
                </ul>
              </div>
              <div className={`${styles.second}`}>
                <ul>
                  <li>
                    <i class="fa-solid fa-x pe-2" /> International coverage For
                    extended warranty.
                  </li>
                  <li>
                    <i class="fa-solid fa-x pe-2" /> Fire protection covered
                    only in Kuwait & under extended warranty. Not covered under
                    manufacturing warranty.
                  </li>
                </ul>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <h6>2. Select the plan's period:</h6>
            <div className="radio-cont">
              <div className="form-check py-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  XCARE BASIC AAA 1 YR (85.650 KD)
                </label>
              </div>
              <div className="form-check py-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  XCARE BASIC AAA 2 YR (94.650 KD)
                </label>
              </div>
              <div className="form-check py-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault3">
                  XCARE BASIC AAA 3 YR (107.650 KD)
                </label>
              </div>
              <div className="form-check py-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault4"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault4">
                  XCARE BASIC AAA 4 YR (122.650 KD)
                </label>
              </div>
              <div className="form-check py-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault5"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault5">
                  XCARE BASIC AAA 5 YR (138.650 KD)
                </label>
              </div>
            </div>
            <div className="py-2">
              <img
                src="https://m.xcite.com/media/wysiwyg/xcare-warranty/new-xcare-basic-en.png"
                style={{ width: "100px" }}
                alt="logo exp"
              />
            </div>
            <div className={`${styles.continfo} d-flex`}>
              <div className={`${styles.first}`}>
                <ul>
                  <li>
                    <i class="fa-solid fa-check pe-2 text-success"></i>Extend
                    your manufacturing warranty hassle-free for up to 5 years.
                  </li>
                  <li>
                    <i class="fa-solid fa-check pe-2 text-success"></i>Free
                    repair charges under extended warranty.
                  </li>
                  <li>
                    <i class="fa-solid fa-check pe-2 text-success"></i>
                    Accidental warranty (1 year from purchase date).
                  </li>
                  <li>
                    <i class="fa-solid fa-check pe-2 text-success"></i>Spills
                    protection.
                  </li>
                  <li>
                    <i class="fa-solid fa-check pe-2 text-success"></i>Free
                    TECHFORCE service coupon.
                  </li>
                </ul>
              </div>
              <div className={`${styles.second}`}>
                <ul>
                  <li>
                    <i class="fa-solid fa-check pe-2 text-success"></i>{" "}
                    International coverage For extended warranty.
                  </li>
                  <li>
                    <i class="fa-solid fa-check pe-2 text-success"></i> Fire
                    protection covered only in Kuwait & under extended warranty.
                    Not covered under manufacturing warranty.
                  </li>
                </ul>
              </div>
            </div>
          </TabPanel>
  </div>;
};

export default TabsComp;
