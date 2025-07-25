import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { IoMdSend } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <>
      <footer>
        <div className="footer-big-div">
          <div className="a-footer-div1">
            <h2 className="footer-heading-text">КАТАЛОГ ТОВАРОВ</h2>
            <ul className="footer-ul">
              <li>
                <a href="#">Кардио тренажеры</a>
              </li>
              <li>
                <a href="#">Composite Strength</a>
              </li>
              <li>
                <a href="#">True Stretch</a>
              </li>
              <li>
                <a href="#">Сайклинг</a>
              </li>
              <li>
                <a href="#">Групповые тренировки</a>
              </li>
              <li>
                <a href="#">Силовые тренажеры</a>
              </li>
              <li>
                <a href="#">Консоли</a>
              </li>
              <li>
                <h3>© TRUE FITNESS</h3>
              </li>
            </ul>
          </div>
          <div className="a-footer-div1">
            <h2 className="footer-heading-text">ИНФОРМАЦИЯ</h2>
            <ul className="footer-ul">
              <li>
                <Link className="pages-style-footer" to={"/brand"}>
                  о бренде
                </Link>
              </li>
              <li>
                <Link className="pages-style-footer" to={"/goal"}>
                  преимущества
                </Link>
              </li>
              <li>
                {" "}
                <Link className="pages-style-footer" to={"/club"}>
                  открыть клуб
                </Link>
              </li>
              <li>
                {" "}
                <Link clasName="pages-style-footer" to={"/contact"}>
                  контакты
                </Link>
              </li>
            </ul>
          </div>
          <div className="a-footer-div1">
            <h2 className="footer-heading-text">КОНТАКТЫ</h2>
            <ul className="footer-ul">
              <li>
                <a href="#">Политика конфиденциальности</a>
              </li>
              <li>
                {" "}
                <Link clasName="pages-style-footer" to={"/contact"}>
                  контакты
                </Link>
              </li>
            </ul>
          </div>
          <div className="a-footer-div2">
            <li>
              <a className="latest-text" href="#">
                ПОДПИСАТЬСЯ НА НОВОСТИ И АКЦИИ
              </a>
            </li>
            <form className="send-email-form">
              <input
                required
                className="footer-send-input"
                placeholder="E-mail"
                type="email"
              />
              <button className="send-email-btn" type="submit">
                <IoMdSend />
              </button>
            </form>
            <div className="icons-footer">
             <a target="blank" href="#"> <FaFacebookF className="footer-icons"/></a>
              <a  target="blank" href="#"><FaInstagram className="footer-icons" /></a>
              <a  target="blank" href="#"><FaYoutube className="footer-icons" /></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
