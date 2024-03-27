import React from "react";
import { useEffect } from "react";
import "./Garage.css";
import a from "../../Media/MetaMask Fox Icon in Flat Style.png";
import b from "../../Media/nft_kartenset.png";
import c from "../../Media/dreamcards.png"
import {
  connectionAction,
  disconnectAction,
} from "../../Redux/connection/actions";
import { AvatarNFTAbi,AvatarNFTAddress } from "../../Utils/AvatarNFT";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";


const Garage = () => {
  let acc = useSelector((state) => state.connect?.connection);
  const dispatch = useDispatch();
  const onConnectAccount = () => {
    console.log("connect wallet");
    dispatch(connectionAction());
  };

  return (
    <div className="garage">
      <div className="shop-header px-5 d-flex  justify-content-end align-items-center">
        <h3>Your Account</h3>
      </div>

      <div className="row">
        <div className="col-11 mx-auto px-4">
          <h1 className="mt-5">WELCOME TO YOUR PERSONAL GARAGE</h1>
          <div className="d-flex ">
            <img className="fox-icon" src={a} alt="a" />
            <h5 className="mt-4">
              Please connect to MetaMask to view the cards you own.
            </h5>
          </div>
          <div className="mx-2">
            <p>
              <span className="me-1">Note:</span>if you are accessing with a
              mobile device,
            </p>
            <p>
              you will need to access this page via the browser in the MetaMask
              app
            </p>
          </div>
          <div>
            <div className="header-button-div ms-5 mt-2 py-2 position-relative ">
              <div className="blue-g-bg-div"></div>
              <div className="pink-g-bg-div"></div>
              <div className="black-g-bg-div">
                <a onClick={onConnectAccount}
                  className="nav-link d-flex justify-content-center mt-2 "
                
                  alt=""
                >{acc === "No Wallet"
                ? "No Wallet"
                : acc === "Connect Wallet"
                ? "Connect Wallet"
                : acc === "Wrong Network"
                ? "Wrong Network"
                : acc.substring(0, 4) +
                  "..." +
                  acc.substring(acc.length - 4)}
                
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="garage-card-container mt-5">
        <div className="text-center pt-5">
          <h1>DON'T HAVE SUPERFAST.CARDS YET?</h1>
          <p>Then get our 5 UNIQUE NFT Starter Pack for only 9 MATIC</p>
          <p>
            or get your dream cars from our Silver Collection directly into your
            garage!
          </p>
        </div>

        <div className="row">
          <div className="col-lg-7 px-5 py-3">
            <div>
              <img className="img-fluid" src={b} alt="a" />
              <div className="d-flex justify-content-center ">
              <div className="uniq-nft text-center ">
                <h3>Get your 5 UNIQUE NFT Starter Pack <span>NOW!</span></h3>
              </div>
              
              </div>
              <div className="d-flex justify-content-center ">
              <div className="header-button-div ms-5 mt-2 py-2 position-relative ">
              <div className="blue-g-bg-div"></div>
              <div className="pink-g-bg-div"></div>
              <div className="black-g-bg-div">
                <NavLink
                  className="nav-link d-flex justify-content-center mt-2 "
                  to="/garageNFTCollections"
                  alt=""
                >
                  CHECK OUT
                </NavLink>
              </div>
            </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 py-3 px-5">
          <div>
             <div className="d-flex justify-content-center "> <img className="text-center img-fluid" src={c} alt="a" /></div>
              <div className="d-flex justify-content-center ">
              <div className="uniq-nft text-center ">
                <h3 className="mt-lg-5">Get your dream Silver
Collection Car(d) <span>NOW!</span></h3>
              </div>
              
              </div>
              <div className="d-flex justify-content-center mt-1 ">
              <div className="header-button-div  mt-2 py-2 position-relative ">
              <div className="blue-g-bg-div"></div>
              <div className="pink-g-bg-div"></div>
              <div className="black-g-bg-div">
                <NavLink
                  className="nav-link d-flex justify-content-center mt-2 "
                  to="/silvercollection"
                  alt=""
                >
                  CHECK OUT
                </NavLink>
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

export default Garage;
