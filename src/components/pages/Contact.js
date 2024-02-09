import React from "react";
import Heading from "../common/Heading";
import CommonHeading from "../common/CommonHeading";
import { contact } from "../data/Item";

export default function Contact() {
  return (
    <>
      <Heading subtitle="Главная" title="Контакты" heading="Контакты" />

      <div
        className="container-fluid contact py-6 wow bounceInUp"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="p-5 bg-light rounded contact-form">
            <div className="row g-4">
              <div className="col-12">
                <CommonHeading
                  title="Связаться с нами"
                  description="Обращайтесь К Нам по Любым вопросам!"
                />
              </div>
              <div className="col-md-6 col-lg-7">
                {/* <p className="mb-4">
                  
Контактная форма в данный момент неактивна. Получите функциональную и
работающую контактную форму с помощью Ajax и PHP за несколько минут. Просто
скопируйте и вставьте файлы, добавьте немного кода, и все готово.
                </p> */}
                <form className="forms_contact" method="post" action="some.php">
                  <input
                    type="text"
                    className="w-100 form-control p-3 mb-4 border-primary bg-light"
                    placeholder="Введите имя"
                    name="name"
                  />
                  <input
                    type="email"
                    className="w-100 form-control p-3 mb-4 border-primary bg-light"
                    placeholder="Введите адрес электронной почты"
                    name="email"
                  />
                  <textarea
                    className="w-100 form-control mb-4 p-3 border-primary bg-light"
                    rows="4"
                    cols="10"
                    placeholder="Введите сообщение"
                    name="title"
                  ></textarea>
                  <button
                    className="w-100 btn btn-primary form-control p-3 border-primary bg-primary rounded-pill"
                    type="submit"
                  >
                    Отправить
                  </button>
                </form>
              </div>
              <div className="col-md-6 col-lg-5">
                <div>
                  {contact.map((val, index) => (
                    <div className="d-inline-flex w-100 border border-primary p-4 rounded mb-4">
                      {val.icon}
                      <div className="">
                        <h4>{val.title}</h4>
                        <p>{val.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="map__title mb-4">
      <h1>Где мы находимся?</h1>
      </div>
      <div className="map__cart">
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22036.30441101109!2d47.97966249369921!3d46.33886480097823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41a90578c91d583d%3A0xfa7e2de7e97f8d6e!2z0JzQuNGAINCm0LLQtdGC0L7Qsg!5e0!3m2!1sru!2sru!4v1707401092825!5m2!1sru!2sru"
  width="100%"
  height="450"
  style={{ border: "0" }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
      </div>
    </>


  );
}


