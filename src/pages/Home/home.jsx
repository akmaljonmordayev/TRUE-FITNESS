import { IoTriangle } from "react-icons/io5";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "./home.css";
import Line2 from "../../assets/images/Line 2.png";
import Treadmill from "../../assets/images/treadmill.png";
import Section2component1 from "../../components/section-components1/sectioncomponent1";
import Comp1 from "../../assets/images/com.png";
import Section2component2 from "../../components/sectioncomponent2/sectioncomponent2";
import Comp2 from "../../assets/images/comtwo.png";
import Comp3 from "../../components/sectioncomponent3/sectioncomponent3";
import Mask1 from "../../assets/images/mask1.png";
import Run from "../../assets/images/run.png";
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
            <div className="banner-img">
              <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src={Treadmill} alt="Treadmill" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Treadmill} alt="Treadmill" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Treadmill} alt="Treadmill" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Treadmill} alt="Treadmill" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Treadmill} alt="Treadmill" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Treadmill} alt="Treadmill" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Treadmill} alt="Treadmill" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Treadmill} alt="Treadmill" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Treadmill} alt="Treadmill" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        <section className="a-section2">
          <div className="section2-lef-div">
            <Section2component1
              backgroundImage={Comp1}
              description={
                "Наши тренажеры имеют самые совершенные характеристики в классе, от более мощных технических показателей до расширенных функциональных возможностей"
              }
              title={"Лучшие характеристики"}
            />
            <Section2component2
              them={"ВЫСОКОЕ КАЧЕСТВО И НАДЕЖНОСТЬ"}
              information={
                "Высокое качество тренажеров - это визитная карточка TRUE. Кроме того TRUE предоставляет до 5 лет гарантии на кардиотренажеры."
              }
            />
          </div>
          <div className="section2-lef-div">
            <Section2component2
              them={"Низкая СТОИМОСТЬ ВЛАДЕНИЕ"}
              information={
                "Надежность оборудования обеспечивает низкие затраты на сервисное обслуживание, так по стоимости затрат на эксплуатацию TRUE выигрывает у конкурентов."
              }
            />
            <Section2component1
              backgroundImage={Comp2}
              description={
                "Оборудование должно работать бесперебойно, поэтому мы уделяем особое внимание наличию всех необходимых запчастей и высокой срочности технического реагирования."
              }
              title={"КАЧЕСТВЕННЫЕ И ОПЕРАТИВНЫЙ СЕРВИС"}
            />
          </div>
        </section>
        <section className="a-section3">
          <div className="a-section3-left">
            <h1 className="a-section3-left-h1">
              Мы предлагаем полный комплекс услуг
            </h1>
            <div className="masks">
              <Comp3
                imgname={Mask1}
                topic={"КОНСАЛТИНГ"}
                data={
                  "Помогаем в разработке концепции клуба, зонировании, оснащении и расчете финансовых показателей."
                }
              />
              <Comp3
                imgname={Mask1}
                topic={"МОНТАЖ И СЕРВИСНОЕ ОБСЛУЖИВАНИЕ"}
                data={
                  "Полный цикл пуско-наладочных работ, а также сервисного обслуживания тренажеров."
                }
              />
              <Comp3
                imgname={Mask1}
                topic={"ПОДБОР ОБОРУДОВАНИЯ И 3D ПРОЕКТ"}
                data={
                  "Помогаем подобрать оборудование, сделать расстановку на плане и показать 3D визуализацию вашего будущего проекта."
                }
              />
              <Comp3
                imgname={Mask1}
                topic={"ФИРМЕННЫЙ SHOW-ROOM "}
                data={
                  "Пройдите тест-драйв оборудования перед приобретением."
                }
              />
              <Comp3
                imgname={Mask1}
                topic={"ПОСТАВКА ЗАПЧАСТЕЙ"}
                data={
                  "Поставка как гарантийных, так и постгарантийных запчастей."
                }
              />
              <Comp3
                imgname={Mask1}
                topic={"Доставка по всему Узбекистану"}
                data={
                  "Мы доставляем оборудование по всему Узбекистану."
                }
              />
            </div>
          </div>
          <img className="run" src={Run} alt="" />
        </section>
        <section className="form-section">
          <div className="form-container">
            <h2>ПОЛУЧИТЕ ЭКСКЛЮЗИВНОЕ ПРЕДЛОЖЕНИЕ НА ТРЕНАЖЕРЫ TRUE FITNESS</h2>
            <p>
              Мы будем рады проконсультировать вас и помочь с подбором
              оборудования
            </p>
            <form className="contact-form">
            <input type="text" placeholder="Имя" required />
            <input type="tel" placeholder="+998 (999)-999-9999" required />
            <input type="email" placeholder="E-MAIL" required />
            <button type="submit">ОТПРАВИТЬ</button>
          </form>
            <small>
              Нажимая на кнопку, вы даете согласие на обработку персональных
              данных и соглашаетесь с политикой конфиденциальности
            </small>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
