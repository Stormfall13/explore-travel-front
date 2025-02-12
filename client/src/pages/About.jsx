import React, { useEffect } from "react";
import './about.css';
import Header from "../components/Header";

const teamMembers = [
  {
    id: 1,
    name: "Алексей Иванов",
    position: "CEO & Основатель",
    image: "/assets/team1.jpg",
  },
  {
    id: 2,
    name: "Мария Смирнова",
    position: "Дизайнер",
    image: "/assets/team2.jpg",
  },
  {
    id: 3,
    name: "Игорь Ковалев",
    position: "Разработчик",
    image: "/assets/team3.jpg",
  },
];

const About = () => {

  useEffect(() => {
    const handleScreenSizeChangeAdaptive = () => {
      const header = document.querySelector(".header");
      if (header) {
        const headerHeight = header.offsetHeight;
        const explore = document.querySelector(".about");
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
      <div className="about">
        <div className="container">
          {/* Заголовок и описание */}
          <h1 className="title">О нас</h1>
          <p className="description">
            Мы – команда энтузиастов, создающая уникальные цифровые решения для путешественников.
            Наш проект помогает находить лучшие направления и планировать поездки с комфортом.
          </p>

          {/* Наша миссия */}
          <div className="mission">
            <h2 className="section-title">Наша миссия</h2>
            <p>
              Мы стремимся сделать путешествия доступными, удобными и запоминающимися. 
              Наша цель — вдохновлять людей исследовать мир, открывая для себя новые места.
            </p>
          </div>

          {/* Почему выбирают нас */}
          <div className="why-us">
            <h2 className="section-title">Почему выбирают нас?</h2>
            <div className="benefits">
              <div className="benefit">
                <h3>🌍 Широкий выбор направлений</h3>
                <p>Мы предлагаем лучшие локации для отдыха, приключений и культурного погружения.</p>
              </div>
              <div className="benefit">
                <h3>💡 Персонализированные рекомендации</h3>
                <p>Мы анализируем ваши предпочтения и подбираем для вас идеальные места.</p>
              </div>
              <div className="benefit">
                <h3>📅 Удобное планирование</h3>
                <p>Наши инструменты помогут вам организовать поездку без лишних хлопот.</p>
              </div>
            </div>
          </div>

          {/* Команда */}
          <div className="team">
            <h2 className="section-title">Наша команда</h2>
            <div className="team-grid">
              {teamMembers.map((member) => (
                <div className="team-card" key={member.id}>
                  <img src={member.image} alt={member.name} className="team-image" />
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Контакты */}
          <div className="contact">
            <h2 className="section-title">Свяжитесь с нами</h2>
            <p>📧 Email: support@travel.com</p>
            <p>📍 Адрес: ул. Путешественников, 10, Москва</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
