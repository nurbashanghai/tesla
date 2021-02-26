import React from 'react';
import './CarMainPageTest.css';
import ReactDOM from "react-dom";
import Swiper from "swiper";
import homePageDesktop from './img/modals-homepage-desktop.jpeg';
import modelY from './img/Desktop-ModelY.jpeg';
import m3HomePage from './img/m3-homepage-desktop.jpeg';
import mxHomePage from './img/mx-homepage-desktop.jpeg';
import solarPanels from './img/Desktop-SolarPanels.jpeg';
import solarRoof from './img/Desktop-SolarRoof.jpeg';
import deskAcces from './img/Desktop-Accessories.jpeg';

const CarMainPageTest = () => {

    const node = ReactDOM.findDOMNode(this);

    // Get child nodes
    let wrapper = node.querySelector('.wrapper');


    let pageSlider = new Swiper('.page', {
        // Свои классы
        wrapperClass: "page__wrapper",
        slideClass: "page__screen",

        // Вертикальный слайдер
        direction: 'vertical',

        // Количество слайдов для показа
        slidesPerView: 'auto',

        grabCursor: true,
        // Включаем параллакс
        parallax: true,


        // Управление клавиатурой
        keyboard: {
            // Включить\выключить
            enabled: true,
            // Включить\выключить
            // только когда слайдер
            // в пределах вьюпорта
            onlyInViewport: true,
            // Включить\выключить
            // управление клавишами
            // pageUp, pageDown
            pageUpDown: true,
        },

        // Управление колесом мыши
        mousewheel: {
            // Чувствительность колеса мыши
            sensitivity: 1,
            // Класс объекта на котором
            // будет срабатывать прокрутка мышью.
            //eventsTarget: ".image-slider"
        },

        // Отключение функционала
        // если слайдов меньше чем нужно
        watchOverflow: true,

        // Скорость
        speed: 2000,

        // Обновить свайпер
        // при изменении элементов слайдера
        observer: true,

        // Обновить свайпер
        // при изменении родительских
        // элементов слайдера
        observeParents: true,

        // Обновить свайпер
        // при изменении дочерних
        // элементов слайда
        observeSlideChildren: true,

        // Навигация
        // Буллеты, текущее положение, прогрессбар
        // pagination: {
        //   el: '.page__pagination',
        //   type: 'bullets',
        //   clickable: true,
        //   bulletClass: "page__bullet",
        //   bulletActiveClass: "page__bullet_active",
        // },
        // Скролл
        scrollbar: {
            el: '.page__scroll',
            dragClass: "page__drag-scroll",
            // Возможность перетаскивать скролл
            draggable: true
        },

        // Отключаем автоинициализацию
        init: false,

        // События
        on: {
            // Событие инициализации
            init: function () {
                menuSlider();
                setScrollType();
                wrapper.classList.add('_loaded');
            },
            // Событие смены слайда
            slideChange: function () {
                menuSliderRemove();
                menuLinks[pageSlider.realIndex].classList.add('_active');
            },
            resize: function () {
                setScrollType();
            }
        },
    });

    let menuLinks = node.querySelector('.menu__link');

    function menuSlider() {
        if (menuLinks.length > 0) {
            menuLinks[pageSlider.realIndex].classList.add('_active');
            for (let index = 0; index < menuLinks.length; index++) {
                const menuLink = menuLinks[index];
                menuLink.addEventListener("click", function (e) {
                    menuSliderRemove();
                    pageSlider.slideTo(index, 800);
                    menuLink.classList.add('_active');
                    e.preventDefault();
                });
            }
        }
    }

    function menuSliderRemove() {
        let menuLinkActive = node.querySelector('.menu__link._active');

        if (menuLinkActive) {
            menuLinkActive.classList.remove('_active');
        }
    }

    function setScrollType() {
        if (wrapper.classList.contains('_free')) {
            wrapper.classList.remove('_free');
            pageSlider.params.freeMode = false;
        }
        for (let index = 0; index < pageSlider.slides.length; index++) {
            const pageSlide = pageSlider.slides[index];
            const pageSlideContent = pageSlide.querySelector('.screen__content');
            if (pageSlideContent) {
                const pageSlideContentHeight = pageSlideContent.offsetHeight;
                if (pageSlideContentHeight > window.innerHeight) {
                    wrapper.classList.add('_free');
                    pageSlider.params.freeMode = true;
                    break;
                }
            }
        }
    }

    pageSlider.init();
    // header to div
    return (
        <div>
            <div className="wrapper">
                <div className="header">
                    <nav className="header__menu menu">
                        <a href="" className="menu__link1">TESLA</a>
                        <nav className="header__menu menu">
                            <a href="" className="menu__link">MODEL S</a>
                            <a href="" className="menu__link">MODEL Y</a>
                            <a href="" className="menu__link">MODEL 3</a>
                            <a href="" className="menu__link">MODEL X</a>
                            <a href="" className="menu__link">SOLAR ROOF</a>
                            <a href="" className="menu__link">SOLAR PANELS</a>
                            <a href="" className="menu__link">ACCESSORIES</a>
                        </nav>
                        <nav className="header__menu menu">
                            <a href="" className="menu__link2">SHOP</a>
                            <a href="" className="menu__link2">TESLA ACCOUNT</a>
                        </nav>
                    </nav>
                </div>
                <main className="page">
                    <div className="page__wrapper">

                        <div className="page__screen screen">
                            <div className="screen__content">
                                <h1 className="screen__title screen__title_bg" data-swiper-parallax="50%"
                                    data-swiper-parallax-opacity="0">Model S</h1>
                            </div>
                            <div className="screen__body">
                                <div className="screen__image" data-swiper-parallax="50%">
                                    <img src={homePageDesktop} alt=""/>
                                </div>
                            </div>
                            <button className="btn__img" data-swiper-parallax="50%"
                                    data-swiper-parallax-opacity="0">CUSTOM ORDER
                            </button>
                            <button className="btn__img2" data-swiper-parallax="50%"
                                    data-swiper-parallax-opacity="0">EXISTING INVENTORY
                            </button>
                        </div>
                        <div className="page__screen screen">
                            <div className="screen__content">
                                <h1 className="screen__title screen__title_bg" data-swiper-parallax="50%"
                                    data-swiper-parallax-opacity="0">Model Y</h1>
                            </div>
                            <div className="screen__body">
                                <div className="screen__image" data-swiper-parallax="33%"
                                     data-swiper-parallax-scale="1.1">
                                    <img src={modelY} alt=""/>
                                </div>
                            </div>
                            <button className="btn__img" data-swiper-parallax="50%"
                                    data-swiper-parallax-opacity="0">CUSTOM ORDER
                            </button>
                            <button className="btn__img2" data-swiper-parallax="50%"
                                    data-swiper-parallax-opacity="0">EXISTING INVENTORY
                            </button>
                        </div>
                        <div className="page__screen screen">
                            <div className="screen__content">
                                <h1 className="screen__title screen__title_bg" data-swiper-parallax="50%"
                                    data-swiper-parallax-opacity="0">Model 3</h1>
                            </div>
                            <div className="screen__body">
                                <div className="screen__image" data-swiper-parallax="50%">
                                    <img src={m3HomePage} alt=""/>
                                </div>
                            </div>
                            <button className="btn__img" data-swiper-parallax="50%"
                                    data-swiper-parallax-opacity="0">CUSTOM ORDER
                            </button>
                            <button className="btn__img2" data-swiper-parallax="50%"
                                    data-swiper-parallax-opacity="0">EXISTING INVENTORY
                            </button>
                        </div>
                        <div className="page__screen screen">
                            <div className="screen__content">
                                <h1 className="screen__title screen__title_bg" data-swiper-parallax="50%"
                                    data-swiper-parallax-opacity="0">Model X</h1>
                            </div>
                            <div className="screen__body">
                                <div className="screen__image" data-swiper-parallax="50%">
                                    <img src={mxHomePage} alt=""/>
                                </div>
                            </div>
                            <button className="btn__img" data-swiper-parallax="50%"
                                    data-swiper-parallax-opacity="0">ORDER NOW
                            </button>
                            <button className="btn__img2" data-swiper-parallax="50%"
                                    data-swiper-parallax-opacity="0">LEARN MORE
                            </button>
                        </div>
                        <div className="page__screen screen">
                            <div className="screen__content">
                                <h1 className="screen__title screen__title_bg" data-swiper-parallax="50%"
                                    data-swiper-parallax-opacity="0">Lowest Cost Solar Panels in America</h1>
                                <br/>
                                    <p className="screen__titl screen__title_bg" data-swiper-parallax="50%"
                                       data-swiper-parallax-opacity="0">Solar for New Roofs</p>
                            </div>
                            <div className="screen__body">
                                <div className="screen__image" data-swiper-parallax="50%">
                                    <img src={solarPanels} alt=""/>
                                </div>
                            </div>
                            <button className="btn__img" data-swiper-parallax="50%"
                                    data-swiper-parallax-opacity="0">ORDER NOW
                            </button>
                            <button className="btn__img2" data-swiper-parallax="50%"
                                    data-swiper-parallax-opacity="0">LEARN MORE
                            </button>
                        </div>
                        <div className="page__screen screen">
                            <div className="screen__content">
                                <h1 className="screen__title screen__title_bg" data-swiper-parallax="50%"
                                    data-swiper-parallax-opacity="0">Solar for New Roofs</h1>
                            </div>
                            <div className="screen__body">
                                <div className="screen__image" data-swiper-parallax="50%">
                                    <img src={solarRoof} alt=""/>
                                </div>
                            </div>
                            <button className="btn__img" data-swiper-parallax="50%"
                                    data-swiper-parallax-opacity="0">CUSTOM ORDER
                            </button>
                            <button className="btn__img2" data-swiper-parallax="50%"
                                    data-swiper-parallax-opacity="0">EXISTING INVENTORY
                            </button>
                        </div>
                        <div className="page__screen screen">
                            <div className="screen__content">
                                <h1 className="screen__title screen__title_bg" data-swiper-parallax="50%"
                                    data-swiper-parallax-opacity="0">Accesories</h1>
                            </div>
                            <div className="screen__body">
                                <div className="screen__image" data-swiper-parallax="50%">
                                    <img src={deskAcces} alt=""/>
                                </div>
                            </div>
                            <button className="btn__img" data-swiper-parallax="50%"
                                    data-swiper-parallax-opacity="0">SHOP NOW
                            </button>
                        </div>

                    </div>
                    {/*<div className="page__pagination"></div>*/}
                    <div className="page__scroll"></div>
                </main>
            </div>

        </div>
    );
};

export default CarMainPageTest;
