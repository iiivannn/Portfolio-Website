import { useState } from "react";
import "../Style/Style.css";

import copyright from "../../assets/copyright-white.png";

export default function Footer() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [missingFields, setMissingFields] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const missing = {
      name: !name.trim(),
      company: !company.trim(),
      email: !email.trim(),
      message: !message.trim(),
    };
    setMissingFields(missing);

    if (Object.values(missing).some(Boolean)) {
      setError("Please fill up the required fields.");
      return;
    } else {
      setIsSubmitted(true);
      setError(null);

      try {
        const res = await fetch("/api/sendEmail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            company,
            email,
            message,
          }),
        });

        const result = await res.json();
        if (result.success) {
          setShowModal(true);
          setName("");
          setCompany("");
          setEmail("");
          setMessage("");
        } else {
          setError("Failed to send message. Please try again.");
        }
      } catch (error) {
        console.log("Sending Error: ", error);
        setError("Failed to send message. Please try again.");
      } finally {
        setIsSubmitted(false);
      }
    }
  };

  const closeModal = () => {
    setShowModal(false);
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
                  Bringing ideas and fun altogether, let&apos;s make it towards
                  both of our success!
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
                      Name
                      <span className={missingFields.name ? "require" : ""}>
                        *
                      </span>
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      name="name"
                      id="name"
                      type="text"
                    />
                  </div>
                  <div className="input-field company">
                    <label htmlFor="company">
                      Company
                      <span className={missingFields.company ? "require" : ""}>
                        *
                      </span>
                    </label>
                    <input
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      name="company"
                      id="company"
                      type="text"
                    />
                  </div>
                </div>
                <div className="input-field email">
                  <label htmlFor="email">
                    Email
                    <span className={missingFields.email ? "require" : ""}>
                      *
                    </span>
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    id="email"
                    type="email"
                  />
                </div>
                <div className="input-field message">
                  <label htmlFor="message">
                    Message
                    <span className={missingFields.message ? "require" : ""}>
                      *
                    </span>
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name="message"
                    id="message"
                  ></textarea>
                  <span className="require">{error}</span>
                </div>
                <input
                  disabled={isSubmitted}
                  className="submit-btn"
                  type="submit"
                  value={isSubmitted ? "Sending..." : "Submit"}
                />
              </form>
            </div>
          </div>
          {showModal && (
            <div className="modal">
              <div className="modal-box">
                <button onClick={closeModal} className="x-btn">
                  X
                </button>
                <h3>Message Successfully Sent!</h3>
                <p>
                  Thank you for reaching out! I've received your message and
                  will get back to you as soon as possible.
                </p>
                <button onClick={closeModal} className="close-btn">
                  Close
                </button>
              </div>
            </div>
          )}

          <div className="footer-link">
            <div className="link-social">
              <h4>Links</h4>
              <div className="line-break"></div>
              <a href="https://github.com/iiivannn" target="_blank">
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/ivan-abillon-287b54342/"
                target="_blank"
              >
                LinkedIN
              </a>
              <a href="https://ph.jobstreet.com/profile/me" target="_blank">
                Jobstreet
              </a>
              <a
                href="https://profile.indeed.com/?hl=en_PH&co=PH&from=gnav-homepage"
                target="_blank"
              >
                Indeed
              </a>
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
