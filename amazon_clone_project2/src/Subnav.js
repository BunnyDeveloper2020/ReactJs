import React from "react";
import { Link } from "react-router-dom";
import "./Subnav.css";
import PlaceIcon from "@material-ui/icons/Place";

function Subnav() {
  return (
    <nav className="subheader">
      {/* Address link */}
      <div className="subheader__address">
        <Link to="/" className="header__link">
          <div className="subheader__addressContent">
            <PlaceIcon className="subheader__addressIcon" />
            <div className="subheader__addresstxt">
              <span className="subheader__optionLineOne">Hello</span>
              <h4 className="subheader__optionLineTwo">Select your address</h4>
            </div>
          </div>
        </Link>
      </div>
      {/* 11 Links */}
      <div className="subheader__nav">
        {/* 1 Link */}
        <Link to="/" className="subheader__link">
          <div className="subheader__navLink">
            <p>Prime Day Deals</p>
          </div>
        </Link>

        {/* 2 Link */}
        <Link to="/" className="subheader__link">
          <div className="subheader__navLink">
            <p>
              <span>Abin's</span> Amazon.in
            </p>
          </div>
        </Link>

        {/* 1 Link */}
        <Link to="/" className="subheader__link">
          <div className="subheader__navLink">
            <p>Mobiles</p>
          </div>
        </Link>

        {/* 1 Link */}
        <Link to="/" className="subheader__link">
          <div className="subheader__navLink">
            <p>Amazon Pay</p>
          </div>
        </Link>

        {/* 1 Link */}
        <Link to="/" className="subheader__link">
          <div className="subheader__navLink">
            <p>Best Sellers</p>
          </div>
        </Link>

        {/* 1 Link */}
        <Link to="/" className="subheader__link">
          <div className="subheader__navLink">
            <p>Customer Service</p>
          </div>
        </Link>

        {/* 1 Link */}
        <Link to="/" className="subheader__link">
          <div className="subheader__navLink">
            <p>Pantry</p>
          </div>
        </Link>

        {/* 1 Link */}
        <Link to="/" className="subheader__link">
          <div className="subheader__navLink">
            <p>Computers</p>
          </div>
        </Link>

        {/* 1 Link */}
        <Link to="/" className="subheader__link">
          <div className="subheader__navLink">
            <p>Buy Again</p>
          </div>
        </Link>

        {/* 1 Link */}
        <Link to="/" className="subheader__link">
          <div className="subheader__navLink">
            <p>Sell</p>
          </div>
        </Link>

        {/* 1 Link */}
        <Link to="/" className="subheader__link">
          <div className="subheader__navLink">
            <p>New Releases</p>
          </div>
        </Link>

        {/* 1 Link */}
        <Link to="/" className="subheader__link">
          <div className="subheader__navLink">
            <p>Books</p>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Subnav;
