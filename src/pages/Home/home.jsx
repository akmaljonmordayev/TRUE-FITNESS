import React from "react";
import { IoTriangle } from "react-icons/io5";
import "./home.css";
import Line2 from "../../assets/images/Line 2.png";
import Treadmill from "../../assets/images/treadmill.png";
function Home() {
  return (
    <>
      <main>
        <section className="a-section1">
          <div className="a-section1-div1">
            <button className="video-btn">
              <a
                target="blank"
                href="https://youtu.be/HztGXJqdBrk?si=l-w85MN4bBRTKJfM"
              >
                <IoTriangle />
              </a>
            </button>
            <h1 className="a-section1-div1-h1">
              TRUE FITNESS - ПРЕМИУМ ТРЕНАЖЕРЫ ИЗ США{" "}
            </h1>
          </div>
          <div className="a-section1-div2">
            <img src={Line2} alt="" />
            <h1 className="a-section1-div2-h1">
              TRUE - ведущий мировой производитель премиального фитнес
              оборудования
            </h1>
            <img src={Line2} alt="" />
          </div>
          <div className="banner">
            <div className="banner-text">
              <h1>
                <span className="bold">TRUE</span>{" "}
                <span className="blue">FITNESS</span>
              </h1>
              <div className="line"></div>
              <p>
                СОВРЕМЕННОЕ И<br />
                НАДЁЖНОЕ
                <br />
                ОБОРУДОВАНИЕ ДЛЯ
                <br />
                ФИТНЕС-КЛУБОВ
              </p>
              <a href="#" className="cardio-link">
                <span>КАРДИО</span> ТРЕНАЖЕРЫ →
              </a>
            </div>
             <div className="dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="banner-img">
              <img src={Treadmill} alt="Treadmill" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
