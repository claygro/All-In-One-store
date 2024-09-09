import "./MenCollection.css";
// for shoes
import firstshoes from "../MensShoes/shoes.jpeg";
import seocndshoes from "../MensShoes/fifthshoes.webp";
import thirdshoes from "../MensShoes/fourthshoes.webp";
import fourthshoes from "../MensShoes/secondshoes.webp";
import fifthshoes from "../MensShoes/sixthshoes.webp";
import sixthshoes from "../MensShoes/thirdshoes.webp";
import seventshoes from "../MensShoes/firstshoes.webp";
import eightshoes from "../MensShoes/lastshoes.webp";
// shoes end here
// for tshirts
import firsttshirt from "./Tshirt/tshirt1.webp";
import secondshirt from "./Tshirt/tshirt2.webp";
import thirdshirt from "./Tshirt/thshirt3.webp";
import fourthshirt from "./Tshirt/tshirt4.webp";
import fifthshirt from "./Tshirt/tshirt5.webp";
import sixthshirt from "./Tshirt/tshirt6.webp";
import seventhshirt from "./Tshirt/thshirt7.webp";
import eihthshirt from "./Tshirt/tshirt8.webp";

function MenCollection() {
  return (
    <>
      <div className="container">
        <section className="mens-collection">
          <h1 style={{ padding: "20px" }}>Shoes</h1>
          <br />
          <main className="contentAndImage">
            <div className="menCollectionAll">
              <img src={firstshoes} alt="" className="shoes" />
              <div className="padding-collection">
                <p className="collection-para">Mens jordan shoes</p>
              </div>
              <div className="price">
                <p className="padding-collection actualPrice">Rs 2000</p>
                <p className="linethrough">Rs 3000</p>
              </div>
              <div className="collectioncolors">
                <div className="collection-red"></div>
                <div className="collection-green"></div>
                <div className="collection-gray"></div>
              </div>
              <p
                className="padding-collection"
                style={{
                  color: "grey",
                  fontSize: "13px",
                }}
              >
                1.1k sold
              </p>

              <div
                className="stars padding-collection"
                style={{ marginTop: "9px" }}
              >
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
              </div>
            </div>
            {/*  for second content */}
            <div className="menCollectionAll">
              <img src={seocndshoes} alt="" className="shoes" />
              <div className="padding-collection">
                <p className="collection-para">
                  Air Force 1 High Top Grey shoes
                </p>
              </div>
              <div className="price">
                <p className="padding-collection actualPrice">Rs 5000</p>
                <p className="linethrough">Rs 6000</p>
              </div>
              <div className="collectioncolors">
                <div className="collection-red"></div>
                <div className="collection-green"></div>
                <div className="collection-gray"></div>
              </div>
              <p
                className="padding-collection"
                style={{
                  color: "grey",
                  fontSize: "13px",
                }}
              >
                1.1k sold
              </p>

              <div
                className="stars padding-collection"
                style={{ marginTop: "9px" }}
              >
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
              </div>
            </div>
            {/* third content */}
            <div className="menCollectionAll">
              <img src={thirdshoes} alt="" className="shoes" />
              <div className="padding-collection">
                <p className="collection-para">Air AF1 Sneaker For Men </p>
              </div>
              <div className="price">
                <p className="padding-collection actualPrice">Rs 1500</p>
                <p className="linethrough">Rs 2000</p>
              </div>
              <div className="collectioncolors">
                <div className="collection-red"></div>
                <div className="collection-green"></div>
                <div className="collection-gray"></div>
              </div>
              <p
                className="padding-collection"
                style={{
                  color: "grey",
                  fontSize: "13px",
                }}
              >
                1.1k sold
              </p>

              <div
                className="stars padding-collection"
                style={{ marginTop: "9px" }}
              >
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
              </div>
            </div>
            {/* fourth content */}
            <div className="menCollectionAll">
              <img src={fourthshoes} alt="" className="shoes" />
              <div className="padding-collection">
                <p className="collection-para">
                  Black Bandana Lightweight Shoes
                </p>
              </div>
              <div className="price">
                <p className="padding-collection actualPrice">Rs 1500</p>
                <p className="linethrough">Rs 2000</p>
              </div>
              <div className="collectioncolors">
                <div className="collection-red"></div>
                <div className="collection-green"></div>
                <div className="collection-gray"></div>
              </div>
              <p
                className="padding-collection"
                style={{
                  color: "grey",
                  fontSize: "13px",
                }}
              >
                1.1k sold
              </p>

              <div
                className="stars padding-collection"
                style={{ marginTop: "9px" }}
              >
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
              </div>
            </div>
            {/* fifth content */}
            <div className="menCollectionAll">
              <img src={fifthshoes} alt="" className="shoes" />
              <div className="padding-collection">
                <p className="collection-para">2024 Spring Mens Shoes</p>
              </div>
              <div className="price">
                <p className="padding-collection actualPrice">Rs 4000</p>
                <p className="linethrough">Rs 6000</p>
              </div>
              <div className="collectioncolors">
                <div className="collection-red"></div>
                <div className="collection-green"></div>
                <div className="collection-gray"></div>
              </div>
              <p
                className="padding-collection"
                style={{
                  color: "grey",
                  fontSize: "13px",
                }}
              >
                1.1k sold
              </p>

              <div
                className="stars padding-collection"
                style={{ marginTop: "9px" }}
              >
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
              </div>
            </div>
            {/* sixth content */}
            <div className="menCollectionAll">
              <img src={sixthshoes} alt="" className="shoes" />
              <div className="padding-collection">
                <p className="collection-para">Men sports casual mesh shoes</p>
              </div>
              <div className="price">
                <p className="padding-collection actualPrice">Rs 5000</p>
                <p className="linethrough">Rs 6000</p>
              </div>
              <div className="collectioncolors">
                <div className="collection-red"></div>
                <div className="collection-green"></div>
                <div className="collection-gray"></div>
              </div>
              <p
                className="padding-collection"
                style={{
                  color: "grey",
                  fontSize: "13px",
                }}
              >
                1.1k sold
              </p>

              <div
                className="stars padding-collection"
                style={{ marginTop: "9px" }}
              >
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
              </div>
            </div>
            {/* seventh content */}
            <div className="menCollectionAll">
              <img src={seventshoes} alt="" className="shoes" />
              <div className="padding-collection">
                <p className="collection-para">Light weight mens shoes.</p>
              </div>
              <div className="price">
                <p className="padding-collection actualPrice">Rs 5000</p>
                <p className="linethrough">Rs 6000</p>
              </div>
              <div className="collectioncolors">
                <div className="collection-red"></div>
                <div className="collection-green"></div>
                <div className="collection-gray"></div>
              </div>
              <p
                className="padding-collection"
                style={{
                  color: "grey",
                  fontSize: "13px",
                }}
              >
                1.1k sold
              </p>

              <div
                className="stars padding-collection"
                style={{ marginTop: "9px" }}
              >
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
              </div>
            </div>
            {/* eightcontent */}
            <div className="menCollectionAll">
              <img src={eightshoes} alt="" className="shoes" />
              <div className="padding-collection">
                <p className="collection-para">Mens spring brown shoes.</p>
              </div>
              <div className="price">
                <p className="padding-collection actualPrice">Rs 5000</p>
                <p className="linethrough">Rs 6000</p>
              </div>
              <div className="collectioncolors">
                <div className="collection-red"></div>
                <div className="collection-green"></div>
                <div className="collection-gray"></div>
              </div>
              <p
                className="padding-collection"
                style={{
                  color: "grey",
                  fontSize: "13px",
                }}
              >
                1.1k sold
              </p>

              <div
                className="stars padding-collection"
                style={{ marginTop: "9px" }}
              >
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: "gold",
                  }}
                ></i>
              </div>
            </div>
          </main>
        </section>
      </div>
      {/* for clothes section */}
      <section className="mens-collection">
        <h1 style={{ padding: "20px" }}>Tshirt</h1>
        <br />
        <main className="contentAndImage">
          <div className="menCollectionAll">
            <img src={firsttshirt} alt="" className="shoes" />
            <div className="padding-collection">
              <p className="collection-para">Mens tshirt for summer</p>
            </div>
            <div className="price">
              <p className="padding-collection actualPrice">Rs 1000</p>
              <p className="linethrough">Rs 2000</p>
            </div>
            <div className="collectioncolors">
              <div className="collection-red"></div>
              <div className="collection-green"></div>
              <div className="collection-gray"></div>
            </div>
            <p
              className="padding-collection"
              style={{
                color: "grey",
                fontSize: "13px",
              }}
            >
              1.1k sold
            </p>

            <div
              className="stars padding-collection"
              style={{ marginTop: "9px" }}
            >
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
            </div>
          </div>
          {/*  for second content */}
          <div className="menCollectionAll">
            <img src={secondshirt} alt="" className="shoes" />
            <div className="padding-collection">
              <p className="collection-para">Baggi tshirt for mens</p>
            </div>
            <div className="price">
              <p className="padding-collection actualPrice">Rs 4000</p>
              <p className="linethrough">Rs 5000</p>
            </div>
            <div className="collectioncolors">
              <div className="collection-red"></div>
              <div className="collection-green"></div>
              <div className="collection-gray"></div>
            </div>
            <p
              className="padding-collection"
              style={{
                color: "grey",
                fontSize: "13px",
              }}
            >
              1.1k sold
            </p>

            <div
              className="stars padding-collection"
              style={{ marginTop: "9px" }}
            >
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
            </div>
          </div>
          {/* third content */}
          <div className="menCollectionAll">
            <img src={thirdshirt} alt="" className="shoes" />
            <div className="padding-collection">
              <p className="collection-para">Cotton baggi tshirt </p>
            </div>
            <div className="price">
              <p className="padding-collection actualPrice">Rs 1500</p>
              <p className="linethrough">Rs 2000</p>
            </div>
            <div className="collectioncolors">
              <div className="collection-red"></div>
              <div className="collection-green"></div>
              <div className="collection-gray"></div>
            </div>
            <p
              className="padding-collection"
              style={{
                color: "grey",
                fontSize: "13px",
              }}
            >
              1.1k sold
            </p>

            <div
              className="stars padding-collection"
              style={{ marginTop: "9px" }}
            >
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
            </div>
          </div>
          {/* fourth content */}
          <div className="menCollectionAll">
            <img src={fourthshirt} alt="" className="shoes" />
            <div className="padding-collection">
              <p className="collection-para">Black Bandana tshirt</p>
            </div>
            <div className="price">
              <p className="padding-collection actualPrice">Rs 1500</p>
              <p className="linethrough">Rs 2000</p>
            </div>
            <div className="collectioncolors">
              <div className="collection-red"></div>
              <div className="collection-green"></div>
              <div className="collection-gray"></div>
            </div>
            <p
              className="padding-collection"
              style={{
                color: "grey",
                fontSize: "13px",
              }}
            >
              1.1k sold
            </p>

            <div
              className="stars padding-collection"
              style={{ marginTop: "9px" }}
            >
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
            </div>
          </div>
          {/* fifth content */}
          <div className="menCollectionAll">
            <img src={fifthshirt} alt="" className="shoes" />
            <div className="padding-collection">
              <p className="collection-para">2024 new cotton tshirt</p>
            </div>
            <div className="price">
              <p className="padding-collection actualPrice">Rs 4000</p>
              <p className="linethrough">Rs 6000</p>
            </div>
            <div className="collectioncolors">
              <div className="collection-red"></div>
              <div className="collection-green"></div>
              <div className="collection-gray"></div>
            </div>
            <p
              className="padding-collection"
              style={{
                color: "grey",
                fontSize: "13px",
              }}
            >
              1.1k sold
            </p>

            <div
              className="stars padding-collection"
              style={{ marginTop: "9px" }}
            >
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
            </div>
          </div>
          {/* sixth content */}
          <div className="menCollectionAll">
            <img src={sixthshirt} alt="" className="shoes" />
            <div className="padding-collection">
              <p className="collection-para">Baggi tshirt pure cotton</p>
            </div>
            <div className="price">
              <p className="padding-collection actualPrice">Rs 5000</p>
              <p className="linethrough">Rs 6000</p>
            </div>
            <div className="collectioncolors">
              <div className="collection-red"></div>
              <div className="collection-green"></div>
              <div className="collection-gray"></div>
            </div>
            <p
              className="padding-collection"
              style={{
                color: "grey",
                fontSize: "13px",
              }}
            >
              1.1k sold
            </p>

            <div
              className="stars padding-collection"
              style={{ marginTop: "9px" }}
            >
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
            </div>
          </div>
          {/* seventh content */}
          <div className="menCollectionAll">
            <img src={seventhshirt} alt="" className="shoes" />
            <div className="padding-collection">
              <p className="collection-para">
                Baggi tshirt with printed on front.
              </p>
            </div>
            <div className="price">
              <p className="padding-collection actualPrice">Rs 5000</p>
              <p className="linethrough">Rs 6000</p>
            </div>
            <div className="collectioncolors">
              <div className="collection-red"></div>
              <div className="collection-green"></div>
              <div className="collection-gray"></div>
            </div>
            <p
              className="padding-collection"
              style={{
                color: "grey",
                fontSize: "13px",
              }}
            >
              1.1k sold
            </p>

            <div
              className="stars padding-collection"
              style={{ marginTop: "9px" }}
            >
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
            </div>
          </div>
          {/* eightcontent */}
          <div className="menCollectionAll">
            <img src={eihthshirt} alt="" className="shoes" />
            <div className="padding-collection">
              <p className="collection-para">Pure cotton black tshirt.</p>
            </div>
            <div className="price">
              <p className="padding-collection actualPrice">Rs 5000</p>
              <p className="linethrough">Rs 6000</p>
            </div>
            <div className="collectioncolors">
              <div className="collection-red"></div>
              <div className="collection-green"></div>
              <div className="collection-gray"></div>
            </div>
            <p
              className="padding-collection"
              style={{
                color: "grey",
                fontSize: "13px",
              }}
            >
              1.1k sold
            </p>

            <div
              className="stars padding-collection"
              style={{ marginTop: "9px" }}
            >
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{
                  color: "gold",
                }}
              ></i>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default MenCollection;
