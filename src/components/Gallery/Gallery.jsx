import React from "react";
import "./GalleryStyle.css";
import { Furniture01, Furniture02, Furniture03, Furniture04, Furniture05, Furniture06 } from "../../data";

const Gallery = () => {
  return (
    <div>
      <div className="big-shop xs:pt-[50px] sm:pt-[50px] md:pt-[60px] lg:pt-[40px] xl:pt-[50px]" id="shop">
        <div className="product-title">
          <h1 className="text-4xl font-semibold pb-3">
            We're proud to display our beautiful furniture!
          </h1>
          <h2 className="text-xl pb-3 font-semibold">Just have a look</h2>
          <hr />
        </div>
        <div className="shop-flex pt-10">
          {/* Shop 1 */}
          <div className="shop-one">
            <div className="image-one">
              <img src={Furniture01} alt="" />
              <div className="overlay">
                <div className="txt">
                  <h3>White Chair</h3>
                  <section>
                    <span>Furniture</span> / Design
                  </section>
                  <div className="link">
                    <a href="#">
                      Shop Now <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="image-one">
              <img src={Furniture02} alt="" />
              <div className="overlay">
                <div className="txt">
                  <h3>Blue Chair</h3>
                  <section>
                    <span>Furniture</span> / Design
                  </section>
                  <div className="link">
                    <a href="#">
                      Shop Now <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Shop 2 */}
          <div className="shop-one">
            <div className="image-one">
              <img src={Furniture03} alt="" />
              <div className="overlay">
                <div className="txt">
                  <h3>Black Chair</h3>
                  <section>
                    <span>Furniture</span> / Design
                  </section>
                  <div className="link">
                    <a href="#">
                      Shop Now <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="image-one">
              <img src={Furniture04} alt="" />
              <div className="overlay">
                <div className="txt">
                  <h3>White lamp</h3>
                  <section>
                    <span>Furniture</span> / Design
                  </section>
                  <div className="link">
                    <a href="#">
                      Shop Now <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Shop 3 */}
          <div className="shop-three">
            <div className="image-one mb-4 md:mb-0">
              <img src={Furniture05} alt="" className="w-full" />
              <div className="overlay">
                <div className="txt">
                  <h3>Furniture Set</h3>
                  <section>
                    <span>Furniture</span> / Design
                  </section>
                  <div className="link">
                    <a href="#">
                      Shop Now <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-one">
              <img src={Furniture06} alt="" className="w-full" />
              <div className="overlay">
                <div className="txt">
                  <h3>Gray Sofa</h3>
                  <section>
                    <span>Furniture</span> / Design
                  </section>
                  <div className="link">
                    <a href="#">
                      Shop Now <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
