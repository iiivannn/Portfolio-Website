import { useRef, useEffect } from "react";

import arrow from "../../assets/up-arrow.png";
import project1 from "../../assets/project1_close.png";
import project2 from "../../assets/project2_close.png";
import project3 from "../../assets/project3_close.png";
import project4 from "../../assets/project4_close.png";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "../Style/Style.css";

export default function Projects() {
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
    <div className="project-page">
      <Navbar />

      <div className="project-hero">
        <div className="project-page-box">
          <div className="img-box">
            <img className="project1" src={project1} alt="Project Item" />
          </div>

          <div className="img-box custom-2">
            <img className="project2" src={project2} alt="Project Item" />
          </div>
          <div className="img-box custom-3">
            <img className="project3" src={project3} alt="Project Item" />
          </div>
          <div className="img-box custom-4">
            <img className="project4" src={project4} alt="Project Item" />
          </div>
        </div>
        <div className="project-title">
          <h2>PROJECTS</h2>
        </div>
      </div>

      <div className="proj-info">
        <div className="info-item">
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
        <div className="info-item">
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
        <div className="info-item">
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
        <div className="info-item">
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
