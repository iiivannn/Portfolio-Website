import { useRef, useEffect } from "react";

import arrow from "../../assets/up-arrow.png";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "../Style/Style.css";

export default function Contact() {
  const buttonUp = useRef(null);

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

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="contact-page">
      <Navbar />

      <section className="contact">
        <Footer />
      </section>

      <button ref={buttonUp} onClick={scrollTop} className="btn-box">
        <img src={arrow} alt="Arrow Up" />
      </button>
    </div>
  );
}
