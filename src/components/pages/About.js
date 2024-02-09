import React from "react";
import { faces, features } from "../data/Item";
import Heading from "../common/Heading";
import CommonHeading from "../common/CommonHeading";
import { Carousel } from 'react-bootstrap';
export default function About() {
  return (
    <>
    <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/img/1655989990_18-mykaleidoscope-ru-p-tsveti-na-stole-krasivo-foto-18 1.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className="one">Красивые цветы для яркого настроения</h1>
            <p className="one">Погрузитесь в мир красок и ароматов.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/img/image 22.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1 className="one">Свежие композиции для особого случая</h1>
            <p className="one">Найдите идеальный букет для любого повода.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/img/Баннер биг (1).png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1 className="one">Уютные растения для вашего дома</h1>
            <p className="one">Превратите свое окружение в зеленый оазис.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* <Heading title="About" subtitle="Home" heading="About Us" /> */}
      <div className="container-fluid py-6">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 wow bounceInUp" data-wow-delay="0.1s">
              <img
                src="assets/img/istockphoto-1413597108-170667a.jpg"
                className="img-fluid rounded"
                alt=""
              />
            </div>
            <div className="col-lg-7 wow bounceInUp" data-wow-delay="0.3s">
              <CommonHeading
                title="О нас"
                description="Нам доверяют более 200 довольных клиентов"
              />
              <p className="mb-4">
              Добро пожаловать в магазин цветов <span className="fl">"Мир Цветов!</span> Мы - команда профессионалов, предлагающая широкий выбор свежих и красивых цветов, букетов и растений.<br></br> <span className="bl">Наша цель</span> - сделать ваше окружение ярче и уютнее с помощью наших невероятных цветочных композиций.
Мы гордимся своей отличной репутацией и стремимся к высочайшему качеству обслуживания клиентов. Будь то особый случай или спонтанный подарок, мы готовы помочь вам подобрать идеальный букет или растение для любого повода.
Посетите наш магазин и дайте нам возможность превзойти ваши ожидания!
              </p>
              <div className="row g-4 text-dark mb-5">
                {features.map((val, index) => (
                  <div key={index} className="col-sm-6">
                    {val.icon} {val.text}
                  </div>
                ))}
              </div>
              <a href="" className="btn btn-primary py-3 px-5 rounded-pill">
                О нас<i className="fas fa-arrow-right ps-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid faqt py-6">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-7">
              <div className="row g-4">
                {faces.map((val, index) => (
                  <div
                    className="col-sm-4 wow bounceInUp"
                    data-wow-delay="0.3s"
                    key={index}
                  >
                    <div className="faqt-item bg-primary rounded p-4 text-center">
                      {val.icon}
                      <h1
                        className="display-4 fw-bold"
                        data-toggle="counter-up"
                      >
                        {val.counter}
                      </h1>
                      <p className="text-dark text-uppercase fw-bold mb-0">
                        {val.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-5 wow bounceInUp" data-wow-delay="0.1s">
              <div className="video"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
