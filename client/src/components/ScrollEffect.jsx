import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const ScrollEffect = () => {

    const location = useLocation();
    const [isLargeScreen, setIsLargeScreen] = useState(window.matchMedia("(min-width: 992px)").matches);

    useEffect(() => {
        // if (location.pathname !== "/") return; // 🚀 Отключаем анимацию на других страницах
        if (!["/", "/destinations", "/about", "/partners"].includes(location.pathname)) return;

        const mediaQuery = window.matchMedia("(min-width: 992px)");

        const handleScreenSizeChange = (e) => {
        setIsLargeScreen(e.matches);

        if (e.matches) {
            let currentSection = 0;
            const sections = document.querySelectorAll("section, footer");
            const totalSections = sections.length;
            let isScrolling = false;

            function scrollToSection(index) {
            if (index < 0 || index >= totalSections) return;
            isScrolling = true;
            currentSection = index;
            sections[index].scrollIntoView({ behavior: "smooth" });
            setTimeout(() => (isScrolling = false), 600);
            }

            const handleScroll = (event) => {
            if (isScrolling) return;
            if (event.deltaY > 0) {
                scrollToSection(currentSection + 1);
            } else {
                scrollToSection(currentSection - 1);
            }
            };

            window.addEventListener("wheel", handleScroll);

            const contents = document.querySelectorAll(
              ".explore__wrapp-main, .way__wrapp-main, .featured__wrapp-main, .guides__wrapp-main, .testimonials__wrapp-main, .trending__wrapp-main, .footer__wrapp-main, .container"
            );

            const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
                });
            },
            { threshold: 0.1 }
            );

            contents.forEach((content) => observer.observe(content));

            scrollToSection(0);

            return () => {
            window.removeEventListener("wheel", handleScroll);
            observer.disconnect();
            };
        }
        };

        mediaQuery.addEventListener("change", handleScreenSizeChange);
        handleScreenSizeChange(mediaQuery);

        return () => {
        mediaQuery.removeEventListener("change", handleScreenSizeChange);
        };
    }, [location]);

    return null; // Компонент не рендерит ничего, только управляет эффектами
 };


export default ScrollEffect;
