import React from 'react';
import './brand.css';
import brandImg from '../../assets/images/brand.png';     
import brand2Img from '../../assets/images/brand2.png';   
import brand3Img from '../../assets/images/brand3.png';   
import brand4Img from '../../assets/images/brand4.png';   
import brand5Img from '../../assets/images/brand5.png';   
import brand6Img from '../../assets/images/brand6.png';   
import headerImg from '../../assets/images/header-image.png'; 

const Brand = () => {
  const innovations = [
    { id: 1, title: 'ТРЕНАЖЕР ЛЕСТНИЦА TRUE PALISADE', image: brandImg },     
    { id: 2, title: 'ФУНКЦИОНАЛЬНЫЙ ТРЕНИНГ С COMPOSITE STRENGTH', image: brand2Img },
    { id: 3, title: 'РАМЫ ДЛЯ СТРЕЙТЧИНГА TRUE STRETCH', image: brand3Img }, 
    { id: 4, title: 'ЛАТЕРАЛЬНЫЙ ТРЕНАЖЕР TRUE TRAVERSE', image: brand4Img }, 
    { id: 5, title: 'БЕГОВАЯ ДОРОЖКА TRUE ALPINE RUNNER', image: brand5Img }, 
    { id: 6, title: 'ЭЛЛИПТИЧЕСКИЙ ТРЕНАЖЕР TRUE SPECTRUM', image: brand6Img }, 
  ];

  const topRow = innovations.slice(0, 3);
  const bottomRow = innovations.slice(3, 6);

  return (
    <div className="brand-page">
      <header className="header-section" >
        <div className="header-content">
          <p className="header-subtitle">О НАШЕМ БРЕНДЕ</p>
          <h1 className="header-title">
            TRUE - СОВЕРШЕННОЕ <br />
            ФИТНЕС-ОБОРУДОВАНИЕ
          </h1>
        </div>
      </header>

      <section className='sect'  style={{ backgroundImage: `url(${headerImg})` }}>
        <div className="main-content">
        <div className="content-container">
          <p className="description">
            Это совершенство обеспечивается высококачественными, долговечными материалами и технологиями, которые мы используем для производства наших машин. но оно также создается и благодаря нашей преданности клиентам и их потребностям.
          </p>
          <p className="description">
            Наша опытная команда предлагает комплексное обслуживание, начиная от планирования объекта до технического обслуживания и оснащения ваших залов новейшими технологиями. являясь вашим надежным партнером, мы делаем все возможное, чтобы ваше предприятие продолжало эффективно работать годы и годы.
          </p>
          <p className="description">
            Вы можете рассчитывать на нас в предоставлении одних из лучших услуг в отрасли. мы ориентированы на оптимизацию срока службы вашего фитнес-оборудования. мы всегда ищем способы расширить сферу взаимодействия с нашими клиентами, будь то предоставление учебных материалов для ваших сотрудников и инструкторов, или разработка технологических решений, отвечающих потребностям современных пользователей.
          </p>
          <p className="cta-text">
            Свяжитесь с нами, чтобы узнать, как партнерство с true может помочь вашей компании добиться успеха.
          </p>
        </div>
        </div>
      </section>

      <section className="innovations-section">
        <h2 className="section-title">НАШИ ИННОВАЦИИ</h2>

        <div className="innovation-row">
          {topRow.map((innovation) => (
            <div className="innovation-card" key={innovation.id}>
              <img src={innovation.image} alt={innovation.title} />
              <div className="card-title">
                <h3>{innovation.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="innovation-row">
          {bottomRow.map((innovation) => (
            <div className="innovation-card" key={innovation.id}>
              <img src={innovation.image} alt={innovation.title} />
              <div className="card-title">
                <h3>{innovation.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="exclusive-offer-section">
        <div className="offer-background">
          <div className="offer-content">
            <h2 className="offer-title">ПОЛУЧИТЕ</h2>
            <h1 className="offer-main-title">ЭКСКЛЮЗИВНОЕ ПРЕДЛОЖЕНИЕ НА ТРЕНАЖЕРЫ TRUE FITNESS</h1>
            <p className="offer-subtitle">Мы будем рады проконсультировать вас и помочь с подбором оборудования</p>
            <form className="contact-form">
              <input type="text" placeholder="Имя" required />
              <input type="tel" placeholder="+998 (999)-999-9999" required />
              <input type="email" placeholder="E-MAIL" required />
              <button type="submit">ОТПРАВИТЬ</button>
            </form>
            <p className="privacy-policy">
              «Нажимая на кнопку, вы даёте согласие на обработку персональных данных и соглашаетесь с политикой конфиденциальности»
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brand;