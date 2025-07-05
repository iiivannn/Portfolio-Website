import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import arrow from "../../assets/up-arrow.png";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "../Style/Style.css";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const buttonUp = useRef(null);
  const contactRefs = useRef(null);

  useEffect(() => {
    const goTop = () => {
      window.scrollY >= 150
        ? buttonUp.current?.classList.add("show-btn")
        : buttonUp.current?.classList.remove("show-btn");
    };

    window.addEventListener("scroll", goTop);

    return () => {
      window.removeEventListener("scroll", goTop);
    };
  }, []);

  useEffect(() => {
    if (contactRefs.current) {
      const footer = contactRefs.current.querySelector(".contact-content");
      if (footer) {
        gsap.set(footer, { opacity: 0, y: 30 });
        gsap.to(footer, {
          duration: 0.6,
          y: 0,
          opacity: 1,
          ease: "power2.out",
          delay: 0.2,
        });
      }

      const contactContent = contactRefs.current.querySelector(".form");
      if (contactContent) {
        gsap.set(contactContent, { opacity: 0, y: 20 });
        gsap.to(contactContent, {
          duration: 0.6,
          y: 0,
          opacity: 1,
          ease: "power2.out",
          delay: 0.4,
        });
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="contact-page">
      <Navbar />
      <section className="contact" ref={contactRefs}>
        <Footer />
      </section>
      <button ref={buttonUp} onClick={scrollTop} className="btn-box">
        <img src={arrow} alt="Arrow Up" />
      </button>
    </div>
  );
}
