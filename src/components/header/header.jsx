import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import "./header.css";
import Line from "../../assets/images/Line 1.png";
function Header() {
  const flags = [
    {
      code: "uz",
      name: "Uzbekistan",
      dial: "+998",
      flag: "https://flagcdn.com/w40/uz.png",
    },
    {
      code: "ru",
      name: "Russia",
      dial: "+7",
      flag: "https://flagcdn.com/w40/ru.png",
    },
    {
      code: "us",
      name: "United States",
      dial: "+1",
      flag: "https://flagcdn.com/w40/us.png",
    },
    {
      code: "tr",
      name: "Turkey",
      dial: "+90",
      flag: "https://flagcdn.com/w40/tr.png",
    },
  ];

  const [selected, setSelected] = useState(flags[0]);

  const handleSelect = (e) => {
    const country = flags.find((f) => f.code === e.target.value);
    setSelected(country);
  };

  return (
    <header>
      <nav className="header-nav">
        <div className="nav__top">
          <div>
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="flag-select-wrapper">
            <div className="flag-phone-display">
              <img
                src={selected.flag}
                alt={selected.name}
                className="flag-icon"
              />
              <span>{selected.dial} (90)-606-66-66</span>
            </div>

            <select
              onChange={handleSelect}
              value={selected.code}
              className="flag-dropdown"
            >
              {flags.map((f) => (
                <option key={f.code} value={f.code}>
                  {f.name}
                </option>
              ))}
            </select>

            <button className="submit-btn">ОСТАВИТЬ ЗАЯВКУ</button>
          </div>
        </div>
        <img src={Line} alt="" />
        <div className="nav__bottom">
          <Link className="pages-style" to={"/brand"}>о бренде</Link>
          <Link className="pages-style" to={"/goal"}>преимущества</Link>
          <Link className="pages-style" to={"/club"}>открыть клуб</Link>
          <Link className="pages-style" to={"/contact"}>контакты</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
