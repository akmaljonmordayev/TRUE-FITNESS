import "./contact.css";
import GymSwiper from "../../components/GymSwiper/GymSwiper";
import image from "../../assets/blue.svg";
function Contact() {
  return (
    <div>
      <div className="blue-bg">
        <p className="text-1">КОНТАКТЫ</p>
        <h2 className="text-2">ШОУ РУМ TRUE В ТАШКЕНТЕ</h2>
        <h2 className="text-3">
          ПОСЕТИТЕ НАШ ВЫСТАВОЧНЫЙ ЗАЛ В ТАШКЕНТ СИТИ, BOULEVARD
        </h2>
      </div>

      <GymSwiper />
      <div className="contact-wrapper">
        <div className="contact-container">
          <div>
            <img src={image} alt="map" />
          </div>
          <div className="text">
            <h2 className="text-4">
              Официальный Дистрибьютер в Узбекистане - ProWellness{" "}
            </h2>
            <div className="contact-text">
              <p className="text-5">+998 (90)-606-66-66</p>
              <a href="/" className="text-6">
                INFO@PROWELLNESS.UZ
              </a>
              <p className="text-7">
                Адрес: Ташкент Сити, Булевард, ул. Фурката 2А
              </p>
            </div>
            <h2 className="text-8">ПН-СБ с 9:00-19:00 ВС НЕ РАБОЧИЙ</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
