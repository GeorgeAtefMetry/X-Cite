import React, { useEffect, useState } from "react";
import { Tab, Tabs, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { UserAuth } from "../../../../../../context/AuthContext";
import { Rating } from "react-simple-star-rating";
import { addDoc, collection, getDocs } from "firebase/firestore";
import db from "../../../../../../firebase";

const InfoTabs = (props) => {
  console.log(props);
  const { user } = UserAuth();
  let [reviews, setReview] = useState([]);
  let usersRef = collection(db, `/reviews/iphone/auto`);
  useEffect(() => {
    const reviews = async () => {
      const rev = await getDocs(usersRef);
      setReview(rev.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    reviews();
  }, []);
  console.log(reviews);
  var utc = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
  const divReview = reviews?.map((review) => {
    return (
      <div className="py-3 w-50 d-flex justify-content-start">
        <div className="w-25">
          <img src="https://icon-library.com/images/user_no-frame.png" className="img-fluid w-25" alt="user"/>
        </div>
        <div className="d-flex justify-content-between mx-3">
          <p className="px-3">user review : {review.user.slice(0, 12)} <i class="fa-solid fa-check"></i></p>
          <p>{review.time}</p>
        </div>
        <div className="d-flex justify-content-between">
        <p>review :{review.review}</p>
        <h6>{review.rating}/100</h6>
        </div>
        <hr/>
      </div>
    );
  });

  let imgDesc = props.imge?.imgsDescription?.map((img) => {
    return (
      <div>
        <img src={img} alt="description iphone" className="img-fluid" />
      </div>
    );
  });
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
  const tooltipArray = [
    "Terrible",
    "Terrible+",
    "Bad",
    "Bad+",
    "Average",
    "Average+",
    "Great",
    "Great+",
    "Awesome",
    "Awesome+",
  ];
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  };
  const oneMob = collection(db, `/reviews/iphone/auto`);
  const handelSubmit = async (e) => {
    e.preventDefault();
    if (e.target[0].value.trim() !== "") {
      try {
        await addDoc(oneMob, {
          review: e.target[0].value,
          rating,
          user: user.email,
          time: utc,
        });
        console.log("up data");
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Product Description" {...a11yProps(0)} />
          <Tab label="Product Specification" {...a11yProps(1)} />
          <Tab label="Reviews" {...a11yProps(2)} />
          <Tab label="Our Services" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {imgDesc}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h3>General</h3>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">First</th>
              <th scope="col">Last</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Brand</th>
              <td>Apple</td>
            </tr>
            <tr>
              <th>Device Type</th>
              <td>{props.imge.name}</td>
            </tr>
            <tr>
              <th>Processor</th>
              <td>A 15 Bionic</td>
            </tr>
            <tr>
              <th>Operating System</th>
              <td>{props.imge.OS}</td>
            </tr>
            <tr>
              <th>Sensors </th>
              <td>
                Accelerometer, Ambient Light, Barometer, Face ID, Gyro,
                Proximity
              </td>
            </tr>
            <tr>
              <th>Phone Memory (RAM) </th>
              <td>{props.imge.Ram}</td>
            </tr>
            <tr>
              <th>Storage Capacity </th>
              <td>{props.imge.storage}</td>
            </tr>
            <tr>
              <th>Expandable Memory </th>
              <td>no</td>
            </tr>
            <tr>
              <th>Phone Display Size </th>
              <td>{props.imge.displaySize}</td>
            </tr>
            <tr>
              <th>Rear Camera </th>
              <td>Yes</td>
            </tr>
            <tr>
              <th>Phone Rear Camera </th>
              <td>{props.imge.Camera}</td>
            </tr>
            <tr>
              <th>Front Camera </th>
              <td>Yes</td>
            </tr>
            <tr>
              <th>Front Camera Resolution </th>
              <td>12 Megapixels</td>
            </tr>
            <tr>
              <th>Video Recording </th>
              <td>
                Cinematic mode for recording videos with shallow depth of field
                (1080p at 30 fps)
              </td>
            </tr>
            <tr>
              <th>Cellular Connectivity </th>
              <td>5G</td>
            </tr>
            <tr>
              <th>Wi-Fi </th>
              <td>Yes</td>
            </tr>
            <tr>
              <th>Number of SIM Cards </th>
              <td>-</td>
            </tr>
            <tr>
              <th>Total Number of Slots </th>
              <td>-</td>
            </tr>
            <tr>
              <th>Slot Details</th>
              <td>-</td>
            </tr>
            <tr>
              <th>GBS</th>
              <td>YES</td>
            </tr>
          </tbody>
        </table>
      </TabPanel>
      <TabPanel value={value} index={2}>
        {user ? (
          <div>
            <form
              onSubmit={(e) => {
                handelSubmit(e);
              }}
            >
              <div>
                <label htmlFor="w3review">Add Review :</label>
              </div>

              <textarea
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
                className="form-control w-50"
              ></textarea>
              <div>
                <Rating
                  onClick={handleRating}
                  allowHalfIcon
                  ratingValue={rating}
                  tooltipArray={tooltipArray}
                  showTooltip
                />
              </div>
              <button className="text-center btn btn-warning my-5">
                Add Review
              </button>
            </form>
          </div>
        ) : (
          <div></div>
        )}
        <hr />
        <div>{divReview}</div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className="container">
          <div className="row py-2">
            <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
              <div className="service py-3">
                <div className="text-center">
                  <img
                    className="img-fluid w-25"
                    src="https://m.xcite.com/media/wysiwyg/our-services-pdp-tab/latest-min.png"
                    alt="info"
                  />
                </div>
                <div className="text-center">
                  <h4 className="py-2">The Latest & Greatest</h4>
                  <p>
                    Here at X-cite, we keep our product catalog up to date with
                    the newest product releases so you can have the latest and
                    greatest technologies at your fingertips.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service py-3">
                <div className="text-center">
                  <img
                    className="img-fluid w-25"
                    src="https://m.xcite.com/media/wysiwyg/our-services-pdp-tab/flash-min.png"
                    alt="info"
                  />
                </div>
                <div className="text-center">
                  <h4 className="py-2">Outstanding Deals</h4>
                  <p>
                    From Flash Deals, Daily Deals, Weekly Deals to Monthly
                    Deals. We have them all! Simply subscribe to our Newsletter
                    and be the first to know about our amazing offers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service py-3">
                <div className="text-center">
                  <img
                    className="img-fluid w-25"
                    src="https://m.xcite.com/media/wysiwyg/pages-img/shopwithus/pod_icon-2.png"
                    alt="info"
                  />
                </div>
                <div
                  style={{ boxshadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
                  className="text-center"
                >
                  <h4 className="py-2">Pay On Delivery</h4>
                  <p>
                    You can choose to pay for your products at the time of
                    delivery using Cash or Credit Card, which ever is convenient
                    for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row py-2">
            <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
              <div className="service py-3">
                <div className="text-center">
                  <img
                    className="img-fluid w-25"
                    src="https://m.xcite.com/media/wysiwyg/our-services-pdp-tab/install-min.png"
                    alt="info"
                  />
                </div>
                <div className="text-center">
                  <h4 className="py-2">Free Installation</h4>
                  <p>
                    Products that require installation, such as TVs larger than
                    32-inch or air conditioning units, will be installed by our
                    team of experts for free. We do not install Water Heaters
                    (aka. Boilers).
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service py-3">
                <div className="text-center">
                  <img
                    className="img-fluid w-25"
                    src="https://m.xcite.com/media/wysiwyg/our-services-pdp-tab/payment-min.png"
                    alt="info"
                  />
                </div>
                <div className="text-center">
                  <h4 className="py-2">Secure Payments</h4>
                  <p>
                    As a leading retailer, X-cite ensures your peace of mind
                    with our employment of advanced security technologies. We
                    use the most secure payment gateways and make sure your
                    purchases are safe.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service py-3">
                <div className="text-center">
                  <img
                    className="img-fluid w-25"
                    src="https://m.xcite.com/media/wysiwyg/our-services-pdp-tab/delivery-min.png"
                    alt="info"
                  />
                </div>
                <div
                  style={{ boxshadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
                  className="text-center"
                >
                  <h4 className="py-2">Free* & Fast Delivery Available</h4>
                  <p>
                    We strive to deliver your products as fast as possible.
                    Products that require installation may take longer to
                    deliver. Visit our *Terms & Conditions for more information.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row py-2">
            <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
              <div className="service py-3">
                <div className="text-center">
                  <img
                    className="img-fluid w-25"
                    src="https://m.xcite.com/media/wysiwyg/our-services-pdp-tab/return-min.png"
                    alt="info"
                  />
                </div>
                <div className="text-center">
                  <h4 className="py-2">Easy Returns</h4>
                  <p>
                    You can return or exchange your product within 14 days of
                    purchase by calling customer care at 1803535 or to schedule
                    a pick up from your home or send an email to
                    Xsupport@xcite.com and one of our agents will get back to
                    you as soon as possible. For more details, visit our Buyer
                    Protection page and "Returns Are Easy" section in our Terms
                    & Conditions page.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service py-3">
                <div className="text-center">
                  <img
                    className="img-fluid w-25"
                    src="https://m.xcite.com/media/wysiwyg/our-services-pdp-tab/warranty-min.png"
                    alt="info"
                  />
                </div>
                <div className="text-center">
                  <h4 className="py-2">Extended Warranty</h4>
                  <p>
                    Think you might need an extended warranty on the product you
                    are about to purchase? Well, you're in luck! X-cite offers
                    up to 5 Years of extended warranty on top of the 1 Year
                    warranty it already offers! Check out our Terms & Conditions
                    to learn more.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service py-3">
                <div className="text-center">
                  <img
                    className="img-fluid w-25"
                    src="https://m.xcite.com/media/wysiwyg/pages-img/shopwithus/easy_credit_icon-2.png"
                    alt="info"
                  />
                </div>
                <div
                  style={{ boxshadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
                  className="text-center"
                >
                  <h4 className="py-2">Easy Credit</h4>
                  <p>
                    Buying electronics from X-cite just got easier! Buy on Easy
                    Credit and pay for your purchases through easy and flexible
                    monthly installments starting at an affordable KD 5 per
                    month.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
    </div>
  );
};

export default InfoTabs;
