import "./contact.css";
import GymSwiper from "../../components/GymSwiper/GymSwiper";

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
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.374837736036!2d69.24062237678935!3d41.31133331558252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4f1f1b1b1b1%3A0x1b1b1b1b1b1b1b1b!2sFurqat%20st%202A%2C%20Tashkent!5e0!3m2!1sen!2s!4v1718900000000!5m2!1sen!2s"
              width="662px"
              height="662px"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ProWellness Showroom Location"
            ></iframe>
          </div>

          <div className="text">
            <h2 className="text-4">
              Официальный Дистрибьютер в Узбекистане - ProWellness
            </h2>
            <div className="contact-text">
              <p className="text-5">+998 (90) 606-66-66</p>
              <a href="mailto:info@prowellness.uz" className="text-6">
                info@prowellness.uz
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
