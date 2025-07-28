import React from "react";
import map from "../../assets/images/map.png";
import "./club.css";
function Club() {
  return (
    <>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#01AEE7",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p
            style={{
              color: "#FFF500",
              fontWeight: "500",
              paddingTop: "20px",
              fontSize: "18px",
            }}
          >
            КЛУБ TRUE
          </p>

          <h2
            style={{
              color: "white",
              paddingTop: "15px",
              paddingBottom: "20px",
              fontSize: "40px",
            }}
          >
            Открыть клуб вместе с TRUE
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "70px",
            paddingBottom: "50px",
          }}
        >
          <img style={{ width: "90%" }} src={map} alt="" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#D9D9D9",
            width: "100%",
            paddingBottom: "40px",
          }}
        >
          <h3
            style={{
              paddingTop: "50px",
              fontSize: "30px",
              backgroundColor: "",
            }}
          >
            Отправить заявку
          </h3>
        </div>

        <form
          style={{
            backgroundColor: "#D9D9D9",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Форма успешно отправлена!");
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                flexDirection: "column",
                rowGap: "30px",
              }}
            >
              <label htmlFor="name" style={{ paddingBottom: "" }}>
                <span style={{ fontWeight: "700" }}> Ваше имя</span> <br />
                <input
                  required
                  id="name"
                  name="name"
                  style={{
                    outline: "none",
                    border: "none",
                    borderBottom: "2px solid black",
                    backgroundColor: "#D9D9D9",
                    width: "250px",
                    fontWeight: "700",
                  }}
                  type="text"
                  placeholder="имя"
                />{" "}
                <br />
                <br /> <br />
              </label>
            </div>
            <div>
              <label htmlFor="email">
                <span style={{ fontWeight: "700" }}>Е-mail:</span> <br />{" "}
                <input
                  required
                  id="email"
                  name="email"
                  style={{
                    outline: "none",
                    border: "none",
                    borderBottom: "2px solid black",
                    backgroundColor: "#D9D9D9",
                    width: "250px",
                    fontWeight: "700",
                  }}
                  type="email"
                  placeholder="Е-mail:"
                />
              </label>{" "}
              <br />
              <br /> <br />
            </div>
            <div>
              <label htmlFor="phone">
                <span style={{ fontWeight: "700" }}> Номер телефона</span>{" "}
                <br />
                <input
                  required
                  id="phone"
                  name="phone"
                  style={{
                    outline: "none",
                    border: "none",
                    borderBottom: "2px solid black",
                    backgroundColor: "#D9D9D9",
                    width: "250px",
                    fontWeight: "700",
                  }}
                  type="tel"
                  placeholder="+998 (99)-999-99-99"
                  pattern="\+998\s?\(\d{2}\)-\d{3}-\d{2}-\d{2}"
                  title="Формат: +998 (99)-999-99-99"
                />{" "}
                <br />
                <br /> <br />
              </label>
            </div>
            <div>
              <label htmlFor="city">
                <span style={{ fontWeight: "700" }}> Город</span> <br />
                <input
                  required
                  id="city"
                  name="city"
                  style={{
                    outline: "none",
                    border: "none",
                    borderBottom: "2px solid black",
                    backgroundColor: "#D9D9D9",
                    width: "250px",
                    fontWeight: "700",
                  }}
                  type="text"
                  placeholder="Город"
                />{" "}
                <br />
                <br /> <br />
              </label>
            </div>
            <div> </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "100vh",
            }}
          >
            <div style={{ marginBottom: "40px", width: "300px" }}>
              <h2 style={{ textAlign: "center", paddingBottom: "20px" }}>
                Хотите открыть:
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <label style={{ display: "flex", alignItems: "center" }}>
                  <input
                    required
                    type="radio"
                    name="openOption"
                    value="studio"
                    style={{ marginRight: "10px" }}
                  />
                  Фитнес студия
                </label>
                <label style={{ display: "flex", alignItems: "center" }}>
                  <input
                    required
                    type="radio"
                    name="openOption"
                    value="club"
                    style={{ marginRight: "10px" }}
                  />
                  Фитнес клуб
                </label>
                <label style={{ display: "flex", alignItems: "center" }}>
                  <input
                    required
                    type="radio"
                    name="openOption"
                    value="home"
                    style={{ marginRight: "10px" }}
                  />
                  Домашний спортзал
                </label>
                <label style={{ display: "flex", alignItems: "center" }}>
                  <input
                    required
                    type="radio"
                    name="openOption"
                    value="hotel"
                    style={{ marginRight: "10px" }}
                  />
                  Тренажерный зал в отеле, санатории
                </label>
                <label style={{ display: "flex", alignItems: "center" }}>
                  <input
                    required
                    type="radio"
                    name="openOption"
                    value="corporate"
                    style={{ marginRight: "10px" }}
                  />
                  Корпоративный спортзал
                </label>
              </div>
            </div>

            <div style={{ width: "300px" }}>
              <h2
                style={{
                  textAlign: "center",
                  width: "500px",
                  paddingTop: "44px",
                  paddingBottom: "30px",
                }}
              >
                Планируемый срок запуска проекта:
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <label style={{ display: "flex", alignItems: "center" }}>
                  <input
                    required
                    type="radio"
                    name="startTime"
                    value="1month"
                    style={{ marginRight: "10px" }}
                  />
                  В течение месяца
                </label>
                <label style={{ display: "flex", alignItems: "center" }}>
                  <input
                    required
                    type="radio"
                    name="startTime"
                    value="3month"
                    style={{ marginRight: "10px" }}
                  />
                  Через 3 месяца
                </label>
                <label style={{ display: "flex", alignItems: "center" }}>
                  <input
                    required
                    type="radio"
                    name="startTime"
                    value="6month"
                    style={{ marginRight: "10px" }}
                  />
                  Через полгода
                </label>
                <label style={{ display: "flex", alignItems: "center" }}>
                  <input
                    required
                    type="radio"
                    name="startTime"
                    value="1year"
                    style={{ marginRight: "10px" }}
                  />
                  В течение года
                </label>
                <label style={{ display: "flex", alignItems: "center" }}>
                  <input
                    required
                    type="radio"
                    name="startTime"
                    value="more"
                    style={{ marginRight: "10px" }}
                  />
                  Более года
                </label>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",

              padding: "20px",
            }}
          >
            <div style={{ width: "300px" }}>
              <h2 style={{ textAlign: "center", paddingBottom: "20px" }}>
                Выберите услуги:
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <label style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    name="hobby"
                    value="consult"
                    style={{ marginRight: "10px" }}
                  />
                  Консультация
                </label>
                <label style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    name="hobby"
                    value="equipment"
                    style={{ marginRight: "10px" }}
                  />
                  Подбор оборудования
                </label>
                <label style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    name="hobby"
                    value="layout"
                    style={{ marginRight: "10px" }}
                  />
                  Расстановка тренажеров на плане
                </label>
                <label style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    name="hobby"
                    value="leasing"
                    style={{ marginRight: "10px" }}
                  />
                  Лизинг
                </label>
              </div>
            </div>

            <div style={{ width: "300px", textAlign: "center" }}>
              <h2
                style={{
                  width: "400px",
                  paddingBlock: "20px",
                  paddingTop: "70px",
                }}
              >
                Загрузить план помещения
              </h2>
              <div style={{ display: "flex", paddingLeft: "10px" }}>
                <label
                  htmlFor="file-upload"
                  style={{
                    cursor: "pointer",
                    backgroundColor: "#01AEE7",
                    color: "white",
                    padding: "10px 15px",

                    display: "inline-block",
                  }}
                >
                  Add files
                </label>
                <input
                  required
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  style={{ display: "none" }}
                />
              </div>

              <textarea
                style={{
                  border: "none",
                  borderBottom: "2px solid black",
                  outline: "none",
                  resize: "none",
                  width: "100%",
                  fontSize: "16px",
                  padding: "10px",
                  boxSizing: "border-box",
                  backgroundColor: "#D9D9D9",
                }}
                rows={4}
                placeholder="Комментарий"
              ></textarea>
              <button
                type="submit"
                style={{
                  backgroundColor: "#01AEE7",
                  padding: "10px 35px",
                  border: "none",
                  color: "white",
                  fontWeight: "600",
                  fontSize: "20px",
                  marginTop: "30px",
                  marginBottom: "30px",
                }}
              >
                отпрвить
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default Club;
