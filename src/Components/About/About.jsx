import { useRef, useEffect } from "react";

import arrow from "../../assets/up-arrow.png";
import about from "../../assets/about_pic.jpg";

import html from "../../assets/html_icon.png";
import css from "../../assets/css_icon.png";
import js from "../../assets/js_icon.png";
import react from "../../assets/react_icon.png";
import python from "../../assets/python_icon.png";
import sql from "../../assets/sql_icon.png";
import github from "../../assets/github_icon.png";
import figma from "../../assets/figma_icon.png";
import vercel from "../../assets/vercel_icon.png";
import supabase from "../../assets/supabase_icon.png";
import pbi from "../../assets/pbi_icon.png";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "../Style/Style.css";

export default function About() {
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
    <div className="about-page">
      <div className="about-nav">
        <Navbar />
      </div>

      <div className="about">
        <div className="img-box">
          <img src={about} alt="About Image" />
        </div>
        <div className="about-text">
          <p>Code That Works. </p>
          <p>Design That Speaks.</p>
        </div>
      </div>

      <div className="stack">
        <div className="tech">
          <h2>Tech Stack</h2>
          <div className="icons">
            <img src={html} alt="tech stack icon" />
            <img src={css} alt="tech stack icon" />
            <img src={js} alt="tech stack icon" />
            <img src={react} alt="tech stack icon" />
            <img src={python} alt="tech stack icon" />
            <img src={sql} alt="tech stack icon" />
          </div>
        </div>
        <div className="platforms">
          <h2>Platforms</h2>
          <div className="icons">
            <img src={github} alt="platform icon" />
            <img src={figma} alt="platform icon" />
            <img src={vercel} alt="platform icon" />
            <img src={supabase} alt="platform icon" />
            <img src={pbi} alt="platform icon" />
          </div>
        </div>
      </div>

      <div className="about-content">
        <div className="title">
          <h2>[About Me]</h2>
        </div>
        <div className="desc">
          <p>
            I&apos;m a web developer based in the Dasmariñas City, Cavite,
            Philippines. I create full websites with thoughtful design in
            response to the goal and function.
          </p>
          <p>
            I am a fresh graduate at De La Salle University - Dasmarinas in the
            program of Bachelor of Science in Computer Engineering.
          </p>
          <p>
            I&apos;m a firm believer that there&apos;s always something to learn
            that&apos;s why I am very willing to learn and try new concepts.
            With coffee, of course:{">"}
          </p>
        </div>
      </div>

      <Footer />

      <button ref={buttonUp} onClick={scrollTop} className="btn-box">
        <img src={arrow} alt="Arrow Up" />
      </button>
    </div>
  );
}
