import Cardgoal from "../../components/goalCard/cardgoal";
import "./goal.css";
import goal1 from "../../assets/images/goal1.png";
import goal2 from "../../assets/images/goal2.png";
import goal3 from "../../assets/images/goal3.png";
import goal4 from "../../assets/images/goal4.png";
import goal5 from "../../assets/images/goal5.png";
import goal6 from "../../assets/images/goal6.png";
import goal7 from "../../assets/images/goal7.png";
import goal8 from "../../assets/images/goal8.png";
function Goal() {
  return (
    <>
      <div className="topLine">
        <h5>НАШИ ПРЕИМУЩЕСТВА</h5>
        <h2>Преимущества TRUE FITNESS</h2>
        <h4>
          Благодаря которым мы являемся мировым лидером в производстве
          фитнес-оборудования
        </h4>
      </div>
      <div className="wrapGoal">
        <Cardgoal
          img={goal1}
          text1="Лучшие характеристики в классе"
          text2="Наши тренажеры имеют самые совершенные характеристики в классе, от более мощных технических показателей до расширенных функциональных возможностей"
        />
        <Cardgoal
          img={goal2}
          text1="Высокая надежность оборудования"
          text2="Высокое качество тренажеров - это визитная карточка TRUE. Кроме того, TRUE предоставляет до 5 лет полной гарантии на кардио тренажеры."
        />
        <Cardgoal
          img={goal3}
          text1="Низкая стоимость владения"
          text2="Тренажеры способны выдерживать серьезную эксплуатационную нагрузку, сохраняя минимальные затраты на сервис, что обеспечивает минимальную стоимость владения"
        />
        <Cardgoal
          img={goal4}
          text1="Качественный и оперативный сервис"
          text2="Оборудование должно работать бесперебойно, поэтому мы уделяем особое внимание наличию всех необходимых запчастей и высокой срочности технического реагирования"
        />
        <Cardgoal
          img={goal5}
          text1="Цены ниже, чем у аналогов"
          text2="Стоимость тренажеров вас приятно удивит. Несмотря на то, что мы полностью превосходим конкурентов, наши цены ниже"
        />
        <Cardgoal
          img={goal6}
          text1="Совершенная производительность"
          text2="Тренажеры TRUE обеспечивают непревзойденный уровень тренировок, для достижения самых высоких результатов."
        />
        <Cardgoal
          img={goal7}
          text1="Абсолютные лидеры по количеству инноваций"
          text2="Наши тренажеры имеют самые совершенные характеристики в классе, от более мощных технических показателей до расширенных функциональных возможностей"
        />
        <Cardgoal
          img={goal8}
          text1="Абсолютные лидеры по количеству инноваций"
          text2="Компания TRUE продумывает все технические нюансы и делает тренажеры максимально удобными и функциональными"
        />
      </div>
      <div className="middleGoal">
        <legend>
          <fieldset>
          <div className="topGoal">TOP 5</div>
            <p>
              Бренд TRUE Fitness входит в TOП 5 крупнейших производителей фитнес
              оборудования
            </p>
          </fieldset>
        </legend>
      </div>
      <section className="exclusive-offer-section">
        <div className="offer-background">
          <h2 className="offer-title">ПОЛУЧИТЕ</h2>
          <h1 className="offer-main-title">
            ЭКСКЛЮЗИВНОЕ ПРЕДЛОЖЕНИЕ НА ТРЕНАЖЕРЫ TRUE FITNESS
          </h1>
          <p className="offer-subtitle">
            Мы будем рады проконсультировать вас и помочь с подбором
            оборудования
          </p>

          <form className="contact-form">
            <input type="text" placeholder="Имя" required />
            <input type="tel" placeholder="+998 (999)-999-9999" required />
            <input type="email" placeholder="E-MAIL" required />
            <button type="submit">ОТПРАВИТЬ</button>
          </form>

          <p className="privacy-policy">
            «Нажимая на кнопку, вы даёте согласие на обработку персональных
            данных и соглашаетесь с политикой конфиденциальности»
          </p>
        </div>
      </section>
    </>
  );
}

export default Goal;
