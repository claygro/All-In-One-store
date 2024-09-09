import { useState } from "react";
import "../Components/Slider.css";
import "./Slider.css";
import Bag from "../assets/bag.png";
import Jacket from "../assets/jacket.jpeg";
import Gripper from "../assets/gripper.webp";
import Cricket from "../assets/cricket.jpeg";
import Football from "../assets/football.jpeg";
import Tshirt from "../assets/tshirt.webp";
import Ring from "../assets/ring.webp";
import shoes from "../MensShoes/shoes.jpeg";
import { Link } from "react-router-dom";
const Home = () => {
  // Define an array of image URLs or paths
  const images = [
    "https://img.lazcdn.com/us/domino/0b3e4ece-833e-4ca4-9392-077ff3cbe6a6_NP-1976-688.jpg_2200x2200q80.jpg_.webp",
    "https://img.lazcdn.com/us/domino/450f3c21-24f6-4864-8929-762846fb1bfb_NP-1976-688.jpg_2200x2200q80.jpg_.webp",
    "https://img.lazcdn.com/us/domino/321a5f97-1c15-45f9-aa69-c52d849bba25_NP-1976-688.jpg_2200x2200q80.jpg_.webp",
    "https://img.lazcdn.com/us/domino/10b9f2cf-853f-4360-8ee2-4a99cabed888_NP-1976-688.jpg_2200x2200q80.jpg_.webp",
  ];

  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to slide to the next image (slide left)
  const slideLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <main>
        <div className="container">
          <div className="slider-container">
            <div
              className="slider-wrapper"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {images.map((image, index) => (
                <div className="slide" key={index}>
                  <img src={image} />
                </div>
              ))}
            </div>
            <button className="slider-button" onClick={slideLeft}>
              More ➡️
            </button>
          </div>
        </div>
      </main>
      <section className="categories">
        <h1 className="categories-name">Categories</h1>
        <main className="allImg">
          {/* first image */}
          <section className="categoriesImg">
            <div className="div-img">
              <main className="categories-effect">
                <img src={Bag} alt="" className="categories-img" />
              </main>
              <p className="categories-name">Gucci bag with lather.</p>
              <section className="categories-color">
                <div className="categories-red"></div>
                <div className="categories-blue"></div>
                <div className="categories-green"></div>
              </section>
              <p className="categories-ruppes">Rs 5000</p>
              <p className="categories-ruppes line-through">Rs 6000</p>
            </div>
          </section>
          {/* second image */}
          <section className="categoriesImg">
            <div className="div-img">
              <main className="categories-effect">
                <img src={Jacket} alt="" className="categories-img" />
              </main>
              <p className="categories-name">
                Farari jacket with good materials.
              </p>
              <section className="categories-color">
                <div className="categories-red"></div>
                <div className="categories-blue"></div>
                <div className="categories-green"></div>
              </section>
              <p className="categories-ruppes">Rs 4000</p>
              <p className="categories-ruppes line-through">Rs 5000</p>
            </div>
          </section>
          {/* third image */}
          <section className="categoriesImg">
            <div className="div-img">
              <main className="categories-effect">
                <img src={Gripper} alt="" className="categories-img" />
              </main>
              <p className="categories-name">Gripper with 5 to 60 kg.</p>
              <section className="categories-color">
                <div className="categories-red"></div>
                <div className="categories-blue"></div>
                <div className="categories-green"></div>
              </section>
              <p className="categories-ruppes">Rs 200</p>
              <p className="categories-ruppes line-through">Rs 500</p>
            </div>
          </section>
          {/* fourth image */}
          <section className="categoriesImg">
            <div className="div-img">
              <main className="categories-effect">
                <img src={shoes} alt="" className="categories-img" />
              </main>
              <p className="categories-name">Jordan shoes.</p>
              <section className="categories-color">
                <div className="categories-red"></div>
                <div className="categories-blue"></div>
                <div className="categories-green"></div>
              </section>
              <p className="categories-ruppes">Rs 4000</p>
              <p className="categories-ruppes line-through">Rs 5000</p>
            </div>
          </section>
          {/* fifth image */}
          <section className="categoriesImg">
            <div className="div-img">
              <main className="categories-effect">
                <img src={Cricket} alt="" className="categories-img" />
              </main>
              <p className="categories-name">
                Best selling cricket kit in Nepal.
              </p>

              <p className="categories-ruppes">Rs 11000</p>
              <p className="categories-ruppes line-through">Rs 15000</p>
            </div>
          </section>
          <section className="categoriesImg">
            <div className="div-img">
              <main className="categories-effect">
                <img src={Football} alt="" className="categories-img" />
              </main>
              <p className="categories-name">Fifa worldcup 2022 Football.</p>

              <p className="categories-ruppes">Rs 3000</p>
              <p className="categories-ruppes line-through">Rs 5000</p>
            </div>
          </section>
          <section className="categoriesImg">
            <div className="div-img">
              <main className="categories-effect">
                <img src={Tshirt} alt="" className="categories-img" />
              </main>
              <p className="categories-name">Tshirt for men.</p>

              <p className="categories-ruppes">Rs 2000</p>
              <p className="categories-ruppes line-through">Rs 3000</p>
            </div>
          </section>
          <section className="categoriesImg">
            <div className="div-img">
              <main className="categories-effect">
                <img src={Ring} alt="" className="categories-img" />
              </main>
              <p className="categories-name">Ring for man and female</p>

              <p className="categories-ruppes">Rs 200</p>
              <p className="categories-ruppes line-through">Rs 500</p>
            </div>
          </section>
        </main>
      </section>
      <footer className="footer">
        <section className="footer-info">
          <h1 className="footer-h1">About us</h1>
          <p className="footerPara">
            We are here to sell product <br /> We start our company
            <br /> in 2024 AD.
          </p>
        </section>
        <section className="footer-info">
          <h1 className="footer-h1">Categories</h1>
          <p className="footerPara">
            We have different product <br /> you can go and <br /> see in
            categories seciton
          </p>
        </section>
        <section className="footer-info">
          <h1 className="footer-h1">collaboration</h1>
          <p className="footerPara">
            We collabe with daraz, amazon
            <br /> College tiffin. <br /> But our best collaboration partner is
            college tiffin.
          </p>
        </section>
      </footer>
      <footer className="footer-socialMedai">
        <section className="text-footer">A to Z Store</section>
        <section className="socialMedia">
          <i
            className="fa-brands fa-facebook"
            style={{
              color: "blue",
              fontSize: "24px",
            }}
          ></i>
          <Link to="https://instagram.com/">
            <i
              className="fa-brands fa-instagram"
              style={{
                color: "red ",
                fontSize: "24px",
              }}
            ></i>
          </Link>

          <Link to="https://twitter.com/">
            <i
              className="fa-brands fa-twitter"
              style={{
                color: "blue ",
                fontSize: "24px",
              }}
            ></i>
          </Link>
        </section>
      </footer>
    </>
  );
};

export default Home;
