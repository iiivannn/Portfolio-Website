import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import ScrollReveal from "scrollreveal";
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
  const projectsRef = useRef(null);
  const certificatesRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

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
    if (heroText.current) {
      ScrollReveal().reveal(heroText.current.children, {
        origin: "left",
        distance: "50px",
        opacity: 0,
        duration: 1000,
        ease: "power2.out",
        interval: 250,
        reset: true,
        delay: 500,
      });
    }
    if (heroImg.current) {
      ScrollReveal().reveal(heroImg.current, {
        origin: "right",
        distance: "50px",
        opacity: 0,
        duration: 1000,
        ease: "power2.out",
        delay: 500,
        reset: true,
      });
    }

    if (contentCard.current) {
      ScrollReveal().reveal(contentCard.current.children, {
        origin: "bottom",
        distance: "50px",
        opacity: 0,
        duration: 1000,
        ease: "power2.out",
        interval: 1000,
        reset: true,
        delay: 250,
      });
    }

    if (projectsRef.current) {
      gsap.fromTo(
        projectsRef.current.querySelector(".project-text").children,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: projectsRef.current.querySelector(".project-text"),
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play none none reset",
          },
        }
      );

      const projectItems =
        projectsRef.current.querySelectorAll(".project-item");
      projectItems.forEach((item, index) => {
        // Main container animation
        gsap.fromTo(
          item,
          {
            y: 80,
            opacity: 0,
            scale: 0.8,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse",
            },
            delay: index * 0.2,
          }
        );
      });

      const projectTitle = projectsRef.current.querySelectorAll(".item-title");
      projectTitle.forEach((title) => {
        gsap.fromTo(
          title.children,
          {
            opacity: 0,
            y: 50,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            stagger: 0.2,

            scrollTrigger: {
              trigger: title,
              start: "top 90%",
              end: "bottom 20%",
              toggleActions: "play none none reset",
            },
            delay: 0.2,
          }
        );
      });
    }

    if (certificatesRef.current) {
      ScrollReveal().reveal(certificatesRef.current.querySelector("h2"), {
        origin: "top",
        distance: "30px",
        opacity: 0,
        duration: 800,
        easing: "ease-out",
        reset: true,
      });

      ScrollReveal().reveal(
        certificatesRef.current.querySelectorAll(".cert-item"),
        {
          origin: "bottom",
          distance: "40px",
          opacity: 0,
          duration: 1000,
          easing: "ease-out",
          interval: 300,
          reset: true,
          delay: 200,
        }
      );
    }

    if (skillsRef.current) {
      const techSkillBox = skillsRef.current.querySelector(".tech-skill-box");
      if (techSkillBox) {
        gsap.fromTo(
          techSkillBox.querySelector(".skill-list"),
          {
            x: -100,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: techSkillBox,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.fromTo(
          techSkillBox.querySelector(".skill-img"),
          {
            x: 100,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: techSkillBox,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
            delay: 0.2,
          }
        );

        const skillItems = techSkillBox.querySelectorAll(".skill-items p");
        skillItems.forEach((item, index) => {
          gsap.fromTo(
            item,
            {
              y: 20,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              scrollTrigger: {
                trigger: item,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none reverse",
              },
              delay: index * 0.1,
            }
          );
        });
      }

      const softSkillBox = skillsRef.current.querySelector(".soft-skill-box");
      if (softSkillBox) {
        gsap.fromTo(
          softSkillBox.querySelector(".skill-img"),
          {
            x: -100,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: softSkillBox,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.fromTo(
          softSkillBox.querySelector(".soft-skill-list"),
          {
            x: 100,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: softSkillBox,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
            delay: 0.2,
          }
        );

        const softSkillItems = softSkillBox.querySelectorAll(".check-item");
        softSkillItems.forEach((item, index) => {
          gsap.fromTo(
            item,
            {
              y: 20,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              scrollTrigger: {
                trigger: item,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none reverse",
              },
              delay: index * 0.1,
            }
          );
        });
      }
    }
    if (contactRef.current) {
      ScrollReveal().reveal(contactRef.current, {
        origin: "bottom",
        opacity: 0.8,
        duration: 500,
        easing: "ease-in",
        reset: true,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill;
      });
    };
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
            <img
              className="hero_pic"
              loading="lazy"
              src={hero_pic}
              alt="Hero Image"
            />
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
                loading="lazy"
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
                loading="lazy"
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
                loading="lazy"
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

      <section className="home-projects" ref={projectsRef}>
        <div className="project-text">
          <p className="sub-title">Projects</p>
          <div className="project-title">
            <h1>Explore My Work</h1>
          </div>
        </div>
        <div className="project-box">
          <div className="project-item">
            <a href="https://supabase-users.vercel.app/" target="_blank">
              <div className="item-title">
                <h2>ParSafe</h2>
                <p>
                  The user interface of an automated parcel receiver named
                  ParSafe. Managing parcel information and status are done in
                  the website.
                </p>
              </div>
              <div className="proj-pic-wrapper tooltip-container">
                <img
                  loading="lazy"
                  className="proj-pic"
                  src={project1}
                  alt="Project 1 Sample Image"
                />
                <span className="tooltip">Visit Website</span>
              </div>
            </a>
          </div>

          <div className="project-item item-2">
            <a
              href="https://architectural-website-two.vercel.app/"
              target="_blank"
            >
              <div className="item-title">
                <h2>Urban Grandeur</h2>
                <p>
                  A landing page for a mockup architectural company. Showcasing
                  the company&apos;s info using React.
                </p>
              </div>
              <div className="proj-pic-wrapper tooltip-container">
                <img
                  loading="lazy"
                  className="proj-pic"
                  src={project2}
                  alt="Project 2 Sample Image"
                />
                <span className="tooltip">Visit Website</span>
              </div>
            </a>
          </div>
          <div className="project-item item-3">
            <a
              href="https://coffee-website-seven-indol.vercel.app/"
              target="_blank"
            >
              <div className="item-title">
                <h2>UrCoffee</h2>
                <p>
                  An e-commerce website for a coffee shop. It features the
                  products as well as the information about the shop.
                </p>
              </div>
              <div className="proj-pic-wrapper tooltip-container">
                <img
                  loading="lazy"
                  className="proj-pic"
                  src={project3}
                  alt="Project 3 Sample Image"
                />
                <span className="tooltip">Visit Website</span>
              </div>
            </a>
          </div>
          <div className="project-item item-4">
            <a href="https://car-website-wheat.vercel.app/" target="_blank">
              <div className="item-title">
                <h2>Fall Auto</h2>
                <p>
                  A website for car dealership. It showcases various car brands
                  as well as their prices, special offers, and model.
                </p>
              </div>
              <div className="proj-pic-wrapper tooltip-container">
                <img
                  loading="lazy"
                  className="proj-pic"
                  src={project4}
                  alt="Project 4 Sample Image"
                />
                <span className="tooltip">Visit Website</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section ref={certificatesRef} className="certificates">
        <div className="cert-box">
          <h2>Certifications</h2>
          <div className="certs">
            <div className="cert-item ">
              <p>CS50</p>
              <img loading="lazy" src={cs50} alt="cs50 logo" />
            </div>
            <div className="cert-item ">
              <p>freeCodeCamp</p>
              <img loading="lazy" src={fcc} alt="fcc logo" />
            </div>
          </div>
        </div>
      </section>

      <section ref={skillsRef} className="skills">
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
                  loading="lazy"
                  className="skill-img-back"
                  src={tech}
                  alt="Technology Background"
                />
                <img
                  loading="lazy"
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
                  loading="lazy"
                  className="skill-img-back"
                  src={soft}
                  alt="Team Meeting Background"
                />
                <img
                  loading="lazy"
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

      <section ref={contactRef} id="contact">
        <Footer />
      </section>

      <button ref={buttonUp} onClick={scrollTop} className="btn-box">
        <img src={arrow} alt="Arrow Up" />
      </button>
    </div>
  );
}
