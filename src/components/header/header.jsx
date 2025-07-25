import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <nav>
        <div className="nav__top">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="nav__bottom">
          <Link to={"/brand"}>о бренде</Link>
          <Link to={"/goal"}>преимущества</Link>
          <Link to={"/club"}>открыть клуб</Link>
          <Link to={"/contact"}>контакты</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
