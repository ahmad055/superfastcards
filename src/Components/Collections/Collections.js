import React from "react";
import a from "../../Media/stern_schwarz_collection.svg";
import "./Collections.css";
import b from "../../Media/Porsche_914.png";
import c from "../../Media/Plymouth_Barracuda_S_273_copy.png";
import d from "../../Media/Rose-Gold-Collection-NFT-Demo.png";
import e from "../../Media/Carbon-Leather-Collection-NFT-Demo.png";
import f from "../../Media/Gold-Collection-NFT-Demo_.png";
import back from "../../Media/background.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

const Collections = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="row collections mt-5 ">
      <div className="d-flex justify-content-center mt-2 ">
        <h1 className="mt-5"> THE COLLECTIONS</h1>
        <img className="img-fluid collections-logo" src={a} alt="" />
      </div>
      <div className="row">
        <div className="col-10 mx-auto text-center mt-2">
          <p>
            SUPERFAST.CARDS is the first NFT collectible card game with chrome,
            speed and horsepower!
          </p>
          <p>
            The first collection consists of 500 unique vehicles and automotive
            legends from today and the last century – and the community already
            owns 130,000 individual NFTs of them.
          </p>
          <p>
            But of course, that was just the beginning. We’ve already added
            several additional (and limited) collections with the Silver
            Collection, the very rare Rose Gold Collection and the exclusive
            Carbon & Leather Collection. The even more exclusive and very
            limited Gold Collection will follow very soon – and there will be
            some more to come! In total, the first collection series will
            include 1,300 beautiful, rare and exquisite automobiles.
          </p>
          <p>
            Want to add them to your own collection? Well, then follow the links
            below.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-10 overflow-hidden  mx-auto">
          <Slider {...settings}>
            <div className="card-div  text-center">
              <img className="img-fluid" src={b} alt="b" />

              <h5 className="mt-3">THE COLLECTION</h5>
              <p className="mt-1">UNLIMITED</p>
              <div className="d-flex justify-content-center ">
                <div className="header-button-div   position-relative ">
                  <div className="blue-m-bg-div"></div>
                  <div className="pink-m-bg-div"></div>
                  <div className="black-m-bg-div">
                    <NavLink
                      className="nav-link d-flex justify-content-center mt-2 "
                      to="/thecollection"
                      alt=""
                    >
                      MINT
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-div  text-center">
              <img className="img-fluid" src={c} alt="b" />

              <h5 className="mt-3">SILVER COLLECTION</h5>
              <p className="mt-1">LIMITED</p>
              <div className="d-flex justify-content-center ">
                <div className="header-button-div   position-relative ">
                  <div className="blue-m-bg-div"></div>
                  <div className="pink-m-bg-div"></div>
                  <div className="black-m-bg-div">
                    <NavLink
                      className="nav-link d-flex justify-content-center mt-2 "
                      to="/silvercollection"
                      alt=""
                    >
                      MINT
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-div  text-center">
              <img className="img-fluid" src={d} alt="b" />

              <h5 className="mt-3">ROSE GOLD COLLECTION</h5>
              <p className="mt-1">VERY RARE</p>
              <div className="d-flex justify-content-center ">
                <div className="header-button-div   position-relative ">
                  <div className="blue-m-bg-div"></div>
                  <div className="pink-m-bg-div"></div>
                  <div className="black-m-bg-div">
                    <NavLink
                      className="nav-link d-flex justify-content-center mt-2 "
                      to="/rosegoldcollection"
                      alt=""
                    >
                      MINT
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-div  text-center">
              <img className="img-fluid" src={e} alt="b" />

              <h5 className="mt-3">CARBON & LEATHER COLLECTION</h5>
              <p className="mt-1">RARE & LIMITED</p>
              <div className="d-flex justify-content-center ">
                <div className="header-button-div   position-relative ">
                  <div className="blue-m-bg-div"></div>
                  <div className="pink-m-bg-div"></div>
                  <div className="black-m-bg-div">
                    <NavLink
                      className="nav-link d-flex justify-content-center mt-2 "
                      to="/carbonleathercollection"
                      alt=""
                    >
                      MINT
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-div  text-center">
              <img className="img-fluid" src={f} alt="b" />

              <h5 className="mt-3">GOLD COLLECTION</h5>
              <p className="mt-1">EXCLUSIVE & LIMITED</p>
              <div className="d-flex justify-content-center ">
                <div className="header-button-div   position-relative ">
                  Coming Soon
                </div>
              </div>
            </div>
            <div className="card-div  text-center">
              <img className="img-fluid" src={back} alt="b" />

              <h5 className="mt-3">MORE TO COME SOON</h5>
              {/* <p className="mt-1">UNLIMITED</p> */}
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Collections;
