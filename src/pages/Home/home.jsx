import React from "react";
import { IoTriangle } from "react-icons/io5";
import "./home.css";
function Home() {
  return (
    <>
      <main>
        <section className="a-section1">
          <div className="a-section1-div1">
            <button className="video-btn">
              <a target="blank" href="https://youtu.be/HztGXJqdBrk?si=l-w85MN4bBRTKJfM"><IoTriangle /></a>
            </button>
            <h1 className="a-section1-div1-h1">TRUE FITNESS - ПРЕМИУМ ТРЕНАЖЕРЫ ИЗ США </h1>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
