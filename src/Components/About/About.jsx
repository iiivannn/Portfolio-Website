import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "scrollreveal";
import Typewriter from "typewriter-effect";

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

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const buttonUp = useRef(null);
  const aboutRef = useRef(null);
  const [startTypewriter, setStartTypewriter] = useState(false);

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
    if (aboutRef.current) {
      ScrollReveal().reveal(aboutRef.current.children, {
        origin: "bottom",
        distance: "50px",
        opacity: 0,
        duration: 1000,
        ease: "power2.out",
        interval: 250,
        reset: true,
        delay: 500,
      });
    }

    ScrollTrigger.create({
      trigger: ".stack",
      start: "top 80%",
      onEnter: () => {
        gsap.fromTo(
          ".tech h2, .platforms h2",
          {
            y: 30,
            opacity: 0,
          },
          {
            duration: 0.6,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: "power2.out",
          }
        );

        gsap.fromTo(
          ".tech .icons img",
          {
            y: 20,
            opacity: 0,
          },
          {
            duration: 0.5,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: "power2.out",
            delay: 0.3,
          }
        );

        gsap.fromTo(
          ".platforms .icons img",
          {
            y: 20,
            opacity: 0,
          },
          {
            duration: 0.5,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: "power2.out",
            delay: 0.5,
          }
        );
      },
      once: true,
    });

    ScrollTrigger.create({
      trigger: ".about-content",
      start: "top 85%",
      onEnter: () => {
        setStartTypewriter(true);
      },
    });

    const techIcons = document.querySelectorAll(
      ".tech .icons img, .platforms .icons img"
    );
    techIcons.forEach((icon) => {
      icon.addEventListener("mouseenter", () => {
        gsap.to(icon, {
          duration: 0.3,
          scale: 1.2,
          y: -5,
          ease: "power2.out",
        });
      });

      icon.addEventListener("mouseleave", () => {
        gsap.to(icon, {
          duration: 0.3,
          scale: 1,
          y: 0,
          ease: "power2.out",
        });
      });
    });

    gsap.to(".img-box img", {
      duration: 3,
      y: -10,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
    });

    const aboutTextElements = document.querySelectorAll(".about-text p");
    aboutTextElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        gsap.to(element, {
          duration: 0.3,
          scale: 1.02,
          color: "#a66d3d",
          ease: "power2.out",
          cursor: "default",
        });
      });

      element.addEventListener("mouseleave", () => {
        gsap.to(element, {
          duration: 0.3,
          scale: 1,
          color: "initial",
          ease: "power2.out",
        });
      });
    });

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
    <div className="about-page">
      <div className="about-nav">
        <Navbar />
      </div>

      <div className="about" ref={aboutRef}>
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
          <h2>
            {startTypewriter && (
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("[About Me]")
                    .pauseFor(500)
                    .callFunction(() => {
                      document.querySelector(
                        ".title .typewriter-cursor"
                      ).style.display = "none";
                      document.querySelector(
                        ".desc .paragraph-1"
                      ).style.display = "block";
                    })
                    .start();
                }}
                options={{
                  delay: 50,
                  cursor: "|",
                  cursorClassName: "typewriter-cursor",
                }}
              />
            )}
          </h2>
        </div>
        <div className="desc">
          <div className="paragraph-1">
            {startTypewriter && (
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(1200)
                    .typeString(
                      "I'm a web developer based in the Dasmariñas City, Cavite, Philippines. I create full websites with thoughtful design in response to the goal and function."
                    )
                    .pauseFor(500)
                    .callFunction(() => {
                      const cursor = document.querySelector(
                        ".paragraph-1 .typewriter-cursor"
                      );
                      if (cursor) {
                        cursor.style.display = "none";
                      }
                      document.querySelector(
                        ".desc .paragraph-2"
                      ).style.display = "block";
                    })
                    .start();
                }}
                options={{
                  delay: 30,
                  cursor: "|",
                  cursorClassName: "typewriter-cursor",
                }}
              />
            )}
          </div>
          <div className="paragraph-2">
            {startTypewriter && (
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(7200)
                    .typeString(
                      "I am a fresh graduate at De La Salle University - Dasmarinas in the program of Bachelor of Science in Computer Engineering."
                    )
                    .pauseFor(500)
                    .callFunction(() => {
                      const cursor = document.querySelector(
                        ".paragraph-2 .typewriter-cursor"
                      );
                      if (cursor) {
                        cursor.style.display = "none";
                      }
                      document.querySelector(
                        ".desc .paragraph-3"
                      ).style.display = "block";
                    })
                    .start();
                }}
                options={{
                  delay: 30,
                  cursor: "|",
                  cursorClassName: "typewriter-cursor",
                }}
              />
            )}
          </div>
          <div className="paragraph-3">
            {startTypewriter && (
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(12000)
                    .typeString(
                      "I'm a firm believer that there's always something to learn as we are learners through and through. Thus, I try new concepts and is very willing to learn new things. But of course, with coffee :>"
                    )
                    .pauseFor(1000)
                    .callFunction(() => {
                      const cursor = document.querySelector(
                        ".paragraph-3 .typewriter-cursor"
                      );
                      if (cursor) {
                        cursor.style.display = "none";
                      }
                    })
                    .start();
                }}
                options={{
                  delay: 30,
                  cursor: "|",
                  cursorClassName: "typewriter-cursor",
                }}
              />
            )}
          </div>
        </div>
      </div>

      <Footer />

      <button ref={buttonUp} onClick={scrollTop} className="btn-box">
        <img src={arrow} alt="Arrow Up" />
      </button>
    </div>
  );
}
