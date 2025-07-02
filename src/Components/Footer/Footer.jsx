import { useState } from "react";
import "../Style/Style.css";

import copyright from "../../assets/copyright-white.png";

export default function Footer() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    if (!name.trim() || !company.trim() || !email.trim() || !message.trim()) {
      setError("Please fill up the required fields.");
      e.preventDefault();
    } else {
      setError(null);
    }
  };
  return (
    <div>
      <div className="footer">
        <div className="footer-box">
          <div className="footer-title">
            <h2 className="contact-header">Contact</h2>
          </div>
          <div className="footer-content">
            <div className="text">
              <div className="footer-text-box contact-content">
                <p>Let&apos;s Work!</p>
                <p>
                  Bringing ideas and fun altogether, let’s make it towards both
                  of our success!
                </p>
                <p>
                  For any inquiries, collaborations, or messages, feel free to
                  fill out the contact form. I&apos;d love to hear from you!
                </p>
              </div>
            </div>
            <div className="form">
              <form method="POST" onSubmit={handleSubmit}>
                <div className="name-company-row">
                  <div className="input-field name">
                    <label htmlFor="name">
                      Name<span>*</span>
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      name="name"
                      id="name"
                      type="text"
                    />
                    <span>{error}</span>
                  </div>
                  <div className="input-field company">
                    <label htmlFor="company">
                      Company<span>*</span>
                    </label>
                    <input
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      name="company"
                      id="company"
                      type="text"
                    />
                    <span>{error}</span>
                  </div>
                </div>
                <div className="input-field email">
                  <label htmlFor="email">
                    Email<span>*</span>
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    id="email"
                    type="email"
                  />
                  <span>{error}</span>
                </div>
                <div className="input-field message">
                  <label htmlFor="message">
                    Message<span>*</span>
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name="message"
                    id="message"
                  ></textarea>
                  <span>{error}</span>
                </div>
                <input className="submit-btn" type="submit" value="Submit" />
              </form>
            </div>
          </div>

          <div className="footer-link">
            <div className="link-social">
              <h4>Links</h4>
              <div className="line-break"></div>
              <a href="">Github</a>
              <a href="">LinkedIN</a>
              <a href="">Jobstreet</a>
              <a href="">Indeed</a>
            </div>
            <div className="contact">
              <h4>Contact</h4>
              <div className="line-break"></div>
              <div className="contact-row">
                <div className="contact-info">
                  <p>(+63) 976-377-6674</p>
                  <p>ivanfallabillon@gmail.com</p>
                </div>
                <div className="country-info">
                  <p>Dasmariñas City, Cavite</p>
                  <p>Philippines</p>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-copyright">
            <div className="copyright">
              <img src={copyright} alt="Copyright symbol" />
              <p>Ivan Abillon. All Rights Reserved</p>
            </div>

            <div className="brand-name">
              <p>Fall</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
