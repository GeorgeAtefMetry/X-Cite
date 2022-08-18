import React, { useEffect, useState } from "react";
import "./home.css";
import { Carousel } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import db from '../../firebase';
import { collection, doc, onSnapshot, query, where } from "firebase/firestore";           

import SwiperCard from '../../miniComponents/swiperMainCards/swiperCard';
import { useSelector, useDispatch } from 'react-redux';
import {setProducts, deleteProducts} from'../../Components/ReduxWishlist/actions/productsActions'

const Home = () =>{

     const { t , i18n} = useTranslation();
    const[digitalCards, setDigitalCards] = useState([]); {/*done */} 
    const[phonesAndPersonalAudio, setphonesAndPersonalAudio] = useState([]); {/*done */} 
    const[laptops, setLaptops] = useState([]); {/*done */} 
    const[tablets, setTablets] = useState([]); {/*done */} 
    const[televisions, setTelevisions] = useState([]); {/*done */} 
    const[categories, setCats] = useState([]);
    
    // const[product, setProduct] = useState([]);
    const[favorites, setFavorites] = useState([])
    const [isActive, setIsActive] = useState(false);
    const Products = useSelector((state) => state.products)
    const dispatch = useDispatch()


  useEffect(() => {
    // Categories =====================================================
    const catCollection = collection(db, "Categories");
    onSnapshot(catCollection, (snapshot) => {
      // console.log(snapshot.docs);
      setCats(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    // Products =======================================================
    const proCollection = collection(db, "Products");

    // digital Cards
    const q_digitalProds = query(
      proCollection,
      where("categoryName", "==", "digital cards")
    );
    onSnapshot(q_digitalProds, (snapshot) => {
      setDigitalCards(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
    // mobile phones
    const q_phonesProds = query(
      proCollection,
      where("categoryName", "==", "Mobile Phones")
    );
    onSnapshot(q_phonesProds, (snapshot) => {
      setphonesAndPersonalAudio(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
    // labtops
    const q_labtopsProds = query(
      proCollection,
      where("categoryName", "==", "labtops")
    );
    onSnapshot(q_labtopsProds, (snapshot) => {
      setLaptops(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    // tablets
    const q_tabletsProds = query(
      proCollection,
      where("categoryName", "==", "tablets")
    );
    onSnapshot(q_tabletsProds, (snapshot) => {
      setTablets(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    // Televisions
    const q_tvsProds = query(proCollection, where("categoryName", "==", "tvs"));
    onSnapshot(q_tvsProds, (snapshot) => {
      setTelevisions(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);

  /**************** 
  // scroll to top
  ****************/
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <div className="px-2 py-3">
        <div className="sliderHome">
          <Carousel fade className="col-lg-12" interval="1000">
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ borderRadius: "20px" }}
                src="https://m.xcite.com/media/wysiwyg/Barjas/372022-Super-Eid-Sale-Generic-DP-EN.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ borderRadius: "20px" }}
                src="https://m.xcite.com/media/wysiwyg/Barjas/16062022-Apple-MacBookPro-13inKW-DP-EN.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ borderRadius: "20px" }}
                src="https://m.xcite.com/media/wysiwyg/1nasima/572022-Spend20-EidAdha-DP-EN.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ borderRadius: "20px" }}
                src="https://m.xcite.com/media/wysiwyg/1Alaa/772022-SONY-10off-Generic-EID-DP-EN.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ borderRadius: "20px" }}
                src="https://m.xcite.com/media/wysiwyg/1nasima/572022-EidAdha-Purifier-Philips-DP-EN.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ borderRadius: "20px" }}
                src="https://m.xcite.com/media/wysiwyg/Barjas/672022-EidAdha-Samsung-S22-DP-EN.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ borderRadius: "20px" }}
                src="https://m.xcite.com/media/wysiwyg/1nasima/672022-EidAdha-Iron-Philips-DP-EN.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ borderRadius: "20px" }}
                src="https://m.xcite.com/media/wysiwyg/1nasima/04072022-EidAdhaKW-Remington-Haird-DP-EN.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ borderRadius: "20px" }}
                src="https://m.xcite.com/media/wysiwyg/1Alaa/572022-EidAdha-TVs-DP-EN.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ borderRadius: "20px" }}
                src="https://m.xcite.com/media/wysiwyg/Barjas/572022-EidAdha-Lenovo-TabP11-DP-EN.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ borderRadius: "20px" }}
                src="https://m.xcite.com/media/wysiwyg/1nasima/07072022-EidAdhaKW-Philips-lumea-DP-EN.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ borderRadius: "20px" }}
                src="https://m.xcite.com/media/wysiwyg/1nasima/572022-EidAdha-Oculus-DP-EN.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ borderRadius: "20px" }}
                src="https://m.xcite.com/media/wysiwyg/1Alaa/572022-EidAdha-ACs-DP-EN_1.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ borderRadius: "20px" }}
                src="https://m.xcite.com/media/wysiwyg/Barjas/572022-EidAdha-Acer-Aspire5-DP-EN.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ borderRadius: "20px" }}
                src="https://m.xcite.com/media/wysiwyg/1nasima/572022-Free-Gifts-Generic-DP-EN.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ borderRadius: "20px" }}
                src="https://m.xcite.com/media/wysiwyg/Barjas/672022-EID-SONY-DP-EN.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ borderRadius: "20px" }}
                src="https://m.xcite.com/media/wysiwyg/1Alaa/04072022-EidAdha-BekoWasher-DP-EN.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ borderRadius: "20px" }}
                src="https://m.xcite.com/media/wysiwyg/1Alaa/572022-EidAdha-Wansa-TMR-DP-EN.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ borderRadius: "20px" }}
                src="https://m.xcite.com/media/wysiwyg/Barjas/772022-HP-Laptop-DP-EN.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ borderRadius: "20px" }}
                src="https://m.xcite.com/media/wysiwyg/Barjas/3062022-Echelon-Generic-DP-EN.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ borderRadius: "20px" }}
                src="https://m.xcite.com/media/wysiwyg/Barjas/3062022-Echelon-Generic-DP-EN.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ borderRadius: "20px" }}
                src="https://m.xcite.com/media/wysiwyg/1nasima/372022-Hidratespark-DP-EN.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ borderRadius: "20px" }}
                src="https://m.xcite.com/media/wysiwyg/Barjas/2962022-HP-Classic-Pro-DP-EN.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ borderRadius: "20px" }}
                src="https://m.xcite.com/media/wysiwyg/1nasima/472022-BlueAir-Purifier-Generic-DP-EN.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ borderRadius: "20px" }}
                src="https://m.xcite.com/media/wysiwyg/1nasima/2862022-Acer-Gaming-Predator-DP-EN.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ borderRadius: "20px" }}
                src="https://m.xcite.com/media/wysiwyg/Barjas/16062022-Apple-MacBookAir-M2chipKW-DP-EN.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ borderRadius: "20px" }}
                src="https://m.xcite.com/media/wysiwyg/Barjas/16062022-Apple-MacBookPro-13inKW-DP-EN.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="main-categories p-0 m-0 container-fluid text-center">
          <div className="d-flex flex-wrap justify-content-center">
            {categories.map((cat) => (
              <div className="col-lg-3 col-md-6 col-10 p-2 m-0" key={cat.id}>
                <div
                  className="card p-0 m-0"
                  style={{ width: "100%", height: "17rem" }}
                >
                  <img
                    className="card-img-top h-75"
                    src={cat.img}
                    alt="Card  cap"
                  />
                  <div className="card-body py-2 px-3 w-100">
                    <span className="card-text first float-left col-lg-9 text-start">
                      {cat.id}
                    </span>
                    <span className="card-text second float-right col-lg-3 h-100">
                      Save Up to
                      <span className="float-right disc">{cat.discount}%</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================ Digital Cards ========================== */}
        <div className="customSwiperContainer mb-3 mt-3">
          <div
            className="px-3 py-2 border border-bottom border-1"
            style={{ height: "10%" }}
          >
            <div className="float-left customSwiperContainer-heading h-100">
              {t("Digital Cards")}
            </div>

            <div className="view-all float-right px-3 py-1 h-100">
              {t("View All")}
            </div>
          </div>
          <SwiperCard
            list={digitalCards}
            path={"ProductDetails"}
          ></SwiperCard>
        </div>

        {/* ============================ Phones & Personal Audio ========================== */}
        <div className="customSwiperContainer mb-3 mt-3">
          <div
            className="px-3 py-2 border border-bottom border-1"
            style={{ height: "10%" }}
          >
            <div className="float-left customSwiperContainer-heading h-100">
              {t("Phones & Personal Audio")}
            </div>
            <div className="view-all float-right px-3 py-1 h-100">
              {t("View All")}
            </div>
          </div>
          <SwiperCard
            list={phonesAndPersonalAudio}
            path={"ProductDetails"}
          ></SwiperCard>
        </div>

        {/* ============================ Laptops ========================== */}
        <div className="customSwiperContainer mb-3 mt-3">
          <div
            className="px-3 py-2 border border-bottom border-1"
            style={{ height: "10%" }}
          >
            <div className="float-left customSwiperContainer-heading h-100">
              {t("Laptops")}
            </div>
            <div className="view-all float-right px-3 py-1 h-100">
              {t("View All")}
            </div>
          </div>
          <SwiperCard list={laptops} path={"ProductDetails"}></SwiperCard>
        </div>

        <div className="laptop-assistant w-100">
          <div className="row">
            <div className="col-md-12">
              <div className="content">
                <h2>LAPTOP ASSISTANT</h2>
                <p>Let us help you find the perfect laptop for...</p>
                <div className="btns">
                  <button type="button" className="btn btn-primary px-3 py-2">
                    Personal Use
                  </button>
                  <button type="button" className="btn btn-primary px-3 py-2">
                    Education
                  </button>
                  <button type="button" className="btn btn-primary px-3 py-2">
                    Work
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================ Tablets ========================== */}
        <div className="customSwiperContainer mb-3 mt-3">
          <div
            className="px-3 py-2 border border-bottom border-1"
            style={{ height: "10%" }}
          >
            <div className="float-left customSwiperContainer-heading h-100">
              {t("Tablets")}
            </div>
            <div className="view-all float-right px-3 py-1 h-100">
              {t("View All")}
            </div>
          </div>
          <SwiperCard list={tablets} path={"ProductDetails"}></SwiperCard>
        </div>

        {/* ============================ Televisions ========================== */}
        <div className="customSwiperContainer mb-3 mt-3">
          <div
            className="px-3 py-2 border border-bottom border-1"
            style={{ height: "10%" }}
          >
            <div className="float-left customSwiperContainer-heading h-100">
              {t("Televisions")}
            </div>
            <div className="view-all float-right px-3 py-1 h-100">
              {t("View All")}
            </div>
          </div>
          <SwiperCard
            list={televisions}
            path={"ProductDetails"}
          ></SwiperCard>
        </div>
      </div>
      <div
        className="sticy "
        style={{
          display: visible ? "inline" : "none",
          right: i18n.language === "en" ? "20px" : undefined,
          left: i18n.language === "ar" ? "20px" : undefined,
        }}
        onClick={scrollToTop}
      >
        <i class="fa fa-angle-up"></i>
      </div>
    </>
  );
};
export default Home;