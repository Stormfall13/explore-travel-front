import React, { useEffect } from "react";
import './partners.css';
import Header from "../components/Header";
import Footer from '../components/Footer';

const partners = [
  {
    id: 1,
    name: "AirTravel",
    description: "Лучший сервис по бронированию авиабилетов.",
    logo: "/assets/partner1.png",
  },
  {
    id: 2,
    name: "HotelPlus",
    description: "Отели по всему миру с лучшими условиями.",
    logo: "/assets/partner2.png",
  },
  {
    id: 3,
    name: "TourGuide",
    description: "Опытные гиды в самых красивых уголках планеты.",
    logo: "/assets/partner3.png",
  },
];

const Partners = () => {

  useEffect(() => {
    const handleScreenSizeChangeAdaptive = () => {
      const header = document.querySelector(".header");
      if (header) {
        const headerHeight = header.offsetHeight;
        const explore = document.querySelector(".partners");
        if (explore) {
          explore.style.paddingTop = `${headerHeight}px`;
        }
      }
    };

    // Вызываем при монтировании
    handleScreenSizeChangeAdaptive();

    // Подписываемся на изменение размера окна
    window.addEventListener("resize", handleScreenSizeChangeAdaptive);

    return () => {
      // Отписываемся при размонтировании
      window.removeEventListener("resize", handleScreenSizeChangeAdaptive);
    };
  }, []);
  
  return (
    <> 
      <Header />
      <div className="partners">
        <div className="container">
          {/* Заголовок и описание */}
          <h1 className="title">Наши партнёры</h1>
          <p className="description">
            Мы сотрудничаем с ведущими компаниями в сфере туризма и путешествий, 
            чтобы предложить вам лучшие условия для незабываемых поездок.
          </p>

          {/* Список партнёров */}
          <div className="partners-list">
            {partners.map((partner) => (
              <div className="partner-card" key={partner.id}>
                <img src={partner.logo} alt={partner.name} className="partner-logo" />
                <h3 className="partner-name">{partner.name}</h3>
                <p className="partner-description">{partner.description}</p>
              </div>
            ))}
          </div>

          {/* Преимущества сотрудничества */}
          <div className="benefits">
            <h2 className="section-title">Почему стоит сотрудничать с нами?</h2>
            <ul className="benefits-list">
              <li>✅ Расширение аудитории и увеличение клиентов.</li>
              <li>✅ Совместные маркетинговые акции и рекламные кампании.</li>
              <li>✅ Доступ к эксклюзивным предложениям и скидкам.</li>
              <li>✅ Возможность интеграции ваших сервисов на нашу платформу.</li>
            </ul>
          </div>

          {/* Форма для заявки на партнёрство */}
          <div className="partner-form">
            <h2 className="section-title">Станьте нашим партнёром</h2>
            <form>
              <input type="text" placeholder="Название компании" required />
              <input type="email" placeholder="Ваш email" required />
              <textarea placeholder="Опишите, как мы можем сотрудничать" required></textarea>
              <button type="submit">Отправить заявку</button>
            </form>
          </div>

          {/* Контакты */}
          <div className="contact">
            <h2 className="section-title">Свяжитесь с нами</h2>
            <p>📧 Email: partners@travel.com</p>
            <p>📍 Адрес: ул. Бизнеса, 15, Москва</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Partners;
