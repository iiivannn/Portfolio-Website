import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "../Style/Style.css";

import arrow from "../../assets/up-arrow.png";
import hero_pic from "../../assets/hero_pic.png";

import content_dev from "../../assets/content_dev.jpg";
import content_front from "../../assets/content_frontend.jpg";
import content_back from "../../assets/content_backend.jpg";

import project1 from "../../assets/Project 1.png";
import project2 from "../../assets/Project 2.png";
import project3 from "../../assets/Project 3.png";
import project4 from "../../assets/Project 4.png";

import cs50 from "../../assets/cs50_logo.png";
import fcc from "../../assets/fcc_logo.png";

import tech from "../../assets/hard_skills.jpg";
import soft from "../../assets/soft_skills.jpg";

import check from "../../assets/check.png";

export default function Home() {
  const buttonUp = useRef(null);
  const heroText = useRef(null);
  const heroImg = useRef(null);
  const contentCard = useRef(null);

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

  useEffect(() => {
    if (heroText.current && heroImg.current) {
      gsap.fromTo(
        heroText.current.children,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 2,
          ease: "power2.out",
          stagger: 0.1,
        }
      );
      gsap.fromTo(
        heroImg.current.children,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
        }
      );
    }

    if (contentCard.current) {
      gsap.fromTo(
        contentCard.current.children,
        { opacity: 0, x: 200 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".content-card",
            start: "top 70%",
            toggleActions: "play pause resume reverse",
          },
        }
      );
    }
  }, []);
  return (
    <div className="home-page">
      <Navbar />
      <section className="hero">
        <div className="hero-container">
          <div ref={heroText} className="hero-text">
            <h1>Hi! I&apos;m Ivan, your Full Stack Web Developer</h1>
            <p>
              A passionate web developer specializing in full-stack web
              development. Transforming ideas into stunning designs and scalable
              backend system.
            </p>
            <a
              className="talk-btn"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <p className="btn-text">Let's Talk!</p>
              <img className="arrow-btn" src={arrow} alt="arrow" />
            </a>
          </div>
          <div ref={heroImg} className="hero-img">
            <div className="pic_box"></div>
            <img className="hero_pic" src={hero_pic} alt="Hero Image" />
          </div>
        </div>
      </section>
      <section className="home-content">
        <div className="content-box">
          <div className="content-text">
            <h1>Tech Proficiency</h1>
            <p>Bridging design and functionality.</p>
            <p>
              As a full-stack developer, I combine intuitive{" "}
              <span>UI/UX design</span> for frontend development and{" "}
              <span>programming capabilities</span> for backend.{" "}
            </p>
          </div>
          <div ref={contentCard} className="content-card">
            <div className="card-item">
              <img
                className="content-dev"
                src={content_dev}
                alt="Developer Offer"
              />
              <h3>Developer</h3>
              <p>
                2+ years of experience in programming and developing web
                applications.
              </p>
            </div>
            <div className="card-item">
              <img
                className="content-front"
                src={content_front}
                alt="Frontend Offer"
              />
              <h3>Frontend</h3>
              <p>
                Knowledge in various frontend design principles and layouting.
              </p>
            </div>
            <div className="card-item">
              <img
                className="content-back"
                src={content_back}
                alt="Backend Offer"
              />
              <h3>Backend</h3>
              <p>Programming system for a bug-free web experience.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-projects">
        <div className="project-text">
          <p className="sub-title">Projects</p>
          <div className="project-title">
            <h1>Explore My Work</h1>
          </div>
        </div>
        <div className="project-box">
          <div className="project-item">
            <div className="item-title">
              <h2>ParSafe</h2>
              <p>
                The user interface of an automated parcel receiver named
                ParSafe. Managing parcel information and status are done in the
                website.
              </p>
            </div>
            <a href="https://supabase-users.vercel.app/" target="_blank">
              <div className="proj-pic-wrapper">
                <img
                  className="proj-pic"
                  src={project1}
                  alt="Project 1 Sample Image"
                />
              </div>
            </a>
          </div>
          <div className="project-item item-2">
            <div className="item-title">
              <h2>Urban Grandeur</h2>
              <p>
                A landing page for a mockup architectural company. Showcasing
                the company&apos;s info using React.
              </p>
            </div>
            <a
              href="https://architectural-website-two.vercel.app/"
              target="_blank"
            >
              <div className="proj-pic-wrapper">
                <img
                  className="proj-pic"
                  src={project2}
                  alt="Project 2 Sample Image"
                />
              </div>
            </a>
          </div>
          <div className="project-item item-3">
            <div className="item-title">
              <h2>UrCoffee</h2>
              <p>
                An e-commerce website for a coffee shop. It features the
                products as well as the information about the shop.
              </p>
            </div>
            <a
              href="https://coffee-website-seven-indol.vercel.app/"
              target="_blank"
            >
              <div className="proj-pic-wrapper">
                <img
                  className="proj-pic"
                  src={project3}
                  alt="Project 3 Sample Image"
                />
              </div>
            </a>
          </div>
          <div className="project-item item-4">
            <div className="item-title">
              <h2>Fall Auto</h2>
              <p>
                A website for car dealership. It showcases various car brands as
                well as their prices, special offers, and model.
              </p>
            </div>
            <a href="https://car-website-wheat.vercel.app/" target="_blank">
              <div className="proj-pic-wrapper">
                <img
                  className="proj-pic"
                  src={project4}
                  alt="Project 4 Sample Image"
                />
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="certificates">
        <div className="cert-box">
          <h2>Certifications</h2>
          <div className="certs">
            <div className="cert-item ">
              <p>CS50</p>
              <img src={cs50} alt="cs50 logo" />
            </div>
            <div className="cert-item ">
              <p>freeCodeCamp</p>
              <img src={fcc} alt="fcc logo" />
            </div>
          </div>
        </div>
      </section>

      <section className="skills">
        <div className="skill-box">
          <div className="tech-skill-box">
            <div className="tech-skills">
              <div className="skill-list">
                <p className="sub-title">Skills</p>
                <h2>Technical Skills</h2>
                <div className="skill-items">
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>JavaScript</p>
                  <p>React</p>
                  <p>Python</p>
                  <p>Flask</p>
                  <p>Figma</p>
                  <p>Github</p>
                  <p>MSSQL</p>
                  <p>Power BI</p>
                  <p>PostgreSQL</p>
                </div>
              </div>
              <div className="skill-img">
                <img
                  className="skill-img-back"
                  src={tech}
                  alt="Technology Background"
                />
                <img
                  className="skill-img-front"
                  src={tech}
                  alt="Laptop with Code"
                />
              </div>
            </div>
          </div>

          <div className="soft-skills">
            <div className="soft-skill-box">
              <div className="skill-img">
                <img
                  className="skill-img-back"
                  src={soft}
                  alt="Team Meeting Background"
                />
                <img
                  className="skill-img-front"
                  src={soft}
                  alt="Team Collaboration"
                />
              </div>
              <div className="soft-skill-list">
                <h2>Soft Skills</h2>
                <div className="soft-skill-items">
                  <div className="check-item">
                    <img src={check} alt="Check Icon" />
                    <p>Willing To Learn</p>
                  </div>
                  <div className="check-item">
                    <img src={check} alt="Check Icon" />
                    <p>Adaptable</p>
                  </div>
                  <div className="check-item">
                    <img src={check} alt="Check Icon" />
                    <p>Effective Communicator</p>
                  </div>
                  <div className="check-item">
                    <img src={check} alt="Check Icon" />
                    <p>Problem-Solving Skills</p>
                  </div>
                  <div className="check-item">
                    <img src={check} alt="Check Icon" />
                    <p>Teamwork</p>
                  </div>
                  <div className="check-item">
                    <img src={check} alt="Check Icon" />
                    <p>Time Management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <Footer />
      </section>

      <button ref={buttonUp} onClick={scrollTop} className="btn-box">
        <img src={arrow} alt="Arrow Up" />
      </button>
    </div>
  );
}
