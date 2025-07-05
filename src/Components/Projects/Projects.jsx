import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import arrow from "../../assets/up-arrow.png";
import project1 from "../../assets/project1_close.png";
import project2 from "../../assets/project2_close.png";
import project3 from "../../assets/project3_close.png";
import project4 from "../../assets/project4_close.png";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "../Style/Style.css";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const buttonUp = useRef(null);
  const projectHeroRef = useRef(null);
  const projectTitleRef = useRef(null);
  const projectBoxRef = useRef(null);
  const infoItemsRef = useRef([]);

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
    infoItemsRef.current.forEach((item) => {
      if (item) {
        gsap.set(item, { opacity: 0, y: 60 });

        ScrollTrigger.create({
          trigger: item,
          start: "top 80%",
          onEnter: () => {
            gsap.to(item, {
              duration: 0.8,
              opacity: 1,
              y: 0,
              ease: "power2.out",
            });
          },
        });

        const img = item.querySelector("img");
        const infoText = item.querySelector(".info-text");

        if (img && infoText) {
          gsap.set([img, infoText], { opacity: 0, y: 30 });

          ScrollTrigger.create({
            trigger: item,
            start: "top 75%",
            onEnter: () => {
              gsap.to([img, infoText], {
                duration: 0.6,
                opacity: 1,
                y: 0,
                stagger: 0.1,
                ease: "power2.out",
                delay: 0.2,
              });
            },
          });
        }
      }
    });

    let currentIndex = 0;
    let animationInterval;
    let isHovering = false;

    const projectImages = document.querySelectorAll(".img-box");

    const animateCard = (index) => {
      projectImages.forEach((imgBox) => {
        gsap.to(imgBox, {
          duration: 0.3,
          y: 0,
          rotate: 0,
          zIndex: 1,
          ease: "power2.out",
        });
      });

      gsap.to(projectImages[index], {
        duration: 0.3,
        y: -10,
        rotate: -1,
        zIndex: 3,
        ease: "power2.out",
      });
    };

    const startInfiniteAnimation = () => {
      animationInterval = setInterval(() => {
        if (!isHovering) {
          animateCard(currentIndex);
          currentIndex = (currentIndex + 1) % projectImages.length;
        }
      }, 2000);
    };

    projectImages.forEach((imgBox, index) => {
      imgBox.addEventListener("mouseenter", () => {
        isHovering = true;
        clearInterval(animationInterval);
        animateCard(index);
      });

      imgBox.addEventListener("mouseleave", () => {
        isHovering = false;
        currentIndex = Math.floor(Math.random() * projectImages.length);
        startInfiniteAnimation();
      });
    });

    startInfiniteAnimation();

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

  const addToRefs = (el) => {
    if (el && !infoItemsRef.current.includes(el)) {
      infoItemsRef.current.push(el);
    }
  };

  return (
    <div className="project-page">
      <Navbar />

      <div className="project-hero" ref={projectHeroRef}>
        <div className="project-page-box" ref={projectBoxRef}>
          <a href="#proj1-link" className="img-box">
            <img className="project1" src={project1} alt="Project Item" />
          </a>

          <a href="#proj2-link" className="img-box custom-2">
            <img className="project2" src={project2} alt="Project Item" />
          </a>
          <a href="#proj3-link" className="img-box custom-3">
            <img className="project3" src={project3} alt="Project Item" />
          </a>
          <a href="#proj4-link" className="img-box custom-4">
            <img className="project4" src={project4} alt="Project Item" />
          </a>
        </div>
        <div className="project-title" ref={projectTitleRef}>
          <h2>PROJECTS</h2>
        </div>
      </div>

      <div className="proj-info">
        <div className="info-item" id="proj4-link" ref={addToRefs}>
          <img src={project4} alt="Project Image" />
          <div className="info-text">
            <div className="header">Fall Auto - Car Dealership Website</div>
            <div className="line-break"></div>
            <div className="info-desc">
              <h3 className="desc-title">Description</h3>
              <p className="desc-text">
                Fall is a car dealership website featuring different car brands.
                It serves as the home page of the mockup car dealership company
                where the newest car offers are displayed.
              </p>
            </div>
            <div className="line-break"></div>
            <div className="info-stack">
              <h3 className="stack-title">Tech Stack</h3>
              <p className="stack-text">HTML, CSS, JavaScript</p>
            </div>
          </div>
          <a
            className="website-btn"
            href="https://car-website-wheat.vercel.app/"
            target="_blank"
          >
            View Website
          </a>
        </div>
        <div className="info-item" id="proj2-link" ref={addToRefs}>
          <img src={project2} alt="Project Image" />
          <div className="info-text">
            <div className="header">Urban Grandeur - Architectural Website</div>
            <div className="line-break"></div>
            <div className="info-desc">
              <h3 className="desc-title">Description</h3>
              <p className="desc-text">
                A website made for a mockup architecture company. Its main
                purpose is to serve as the home page os the mockup company named
                Urban Grandeur.{" "}
              </p>
            </div>
            <div className="line-break"></div>
            <div className="info-stack">
              <h3 className="stack-title">Tech Stack</h3>
              <p className="stack-text">HTML, SASS, React </p>
            </div>
          </div>
          <a
            className="website-btn"
            href="https://architectural-website-two.vercel.app/"
            target="_blank"
          >
            View Website
          </a>
        </div>
        <div className="info-item" id="proj3-link" ref={addToRefs}>
          <img src={project3} alt="Project Image" />
          <div className="info-text">
            <div className="header">UrCoffee - Coffee Shop Website</div>
            <div className="line-break"></div>
            <div className="info-desc">
              <h3 className="desc-title">Description</h3>
              <p className="desc-text">
                UrCoffee is a website of a mockup coffee shop. This website
                showcases the shop&apos;s products, premium offer, their blog,
                and contact information.
              </p>
            </div>
            <div className="line-break"></div>
            <div className="info-stack">
              <h3 className="stack-title">Tech Stack</h3>
              <p className="stack-text">HTML, CSS, JavaScript</p>
            </div>
          </div>
          <a
            className="website-btn"
            href="https://coffee-website-seven-indol.vercel.app/"
            target="_blank"
          >
            View Website
          </a>
        </div>
        <div className="info-item" id="proj1-link" ref={addToRefs}>
          <img src={project1} alt="Project Image" />
          <div className="info-text">
            <div className="header">ParSafe - A Smart Parcel Receiver</div>
            <div className="line-break"></div>
            <div className="info-desc">
              <h3 className="desc-title">Description</h3>
              <p className="desc-text">
                ParSafe is a web app to manage incoming parcel deliveries. Users
                can create incoming parcel delivery, view parcel status, check
                updates, and delete parcel in their own account.
                <br />
                <br />
                The web app is partnered with an automatic parcel locker with
                the goal of assisting in parcel delivery even if the owner is
                not within the delivery location.
              </p>
            </div>
            <div className="line-break"></div>
            <div className="info-stack">
              <h3 className="stack-title">Tech Stack</h3>
              <p className="stack-text">
                HTML, CSS, React, Flask, Supabase, Vercel
              </p>
            </div>
            <div className="line-break"></div>
            <div className="info-features">
              <h3 className="stack-title">Features</h3>
              <p className="stack-text">
                Protected routing, password hashing, session handling,
                responsive design.{" "}
              </p>
            </div>
          </div>
          <a
            className="website-btn"
            href="https://supabase-users.vercel.app/"
            target="_blank"
          >
            View Website
          </a>
        </div>
      </div>

      <Footer></Footer>
      <button ref={buttonUp} onClick={scrollTop} className="btn-box">
        <img src={arrow} alt="Arrow Up" />
      </button>
    </div>
  );
}
