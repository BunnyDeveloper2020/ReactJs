import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import GTranslateIcon from "@material-ui/icons/GTranslate";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ cart, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  console.log(cart);
  return (
    <nav className="header">
      {/* menu */}
      <div className="header__menu">
        <Link to="/">
          <div className="header__menuArea">
            <MenuIcon className="header__menuIcon" />
          </div>
        </Link>
      </div>

      {/* Logo on the left -> img */}
      <Link to="/" className="header__logoArea">
        <img
          className="header__logo"
          src="https://westcoastpitmasters.com/wp-content/uploads/2018/09/Amazon-Logo-White.png"
          alt="amazon logo"
        />
      </Link>

      {/* Search box */}
      <div className="header__search">
        <Link to="/" className="header__link">
          <div className="header__searchCat">
            <span className="header__categories">All</span>
          </div>
        </Link>
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 5 Links */}
      <div className="header__nav">
        {/* 1st Link */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket header__lang">
            {/* Translater icon */}
            <GTranslateIcon />
          </div>
        </Link>
        {/* 2nd Link */}
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">Hello, {user?.email}</span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        {/* 3rd Link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        {/* 4th Link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        {/* 5th Link */}
        {/* Cart icon with number */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            {/* Shopping Cart icon */}
            <ShoppingCart />
            {/* Number of items in the basket */}
            <span className="header__optionLineTwo header__basketCount">
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
