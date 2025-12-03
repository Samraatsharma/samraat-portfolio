import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { config } from "../config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

// 🔥 Explicit type to fix TS2339 errors
type ContactInfo = {
  email: string;
  github: string;
  linkedin: string;
  instagram: string;
  twitter: string;
};

const Contact = () => {
  // Force TypeScript to use our corrected type
  const contact = config.contact as unknown as ContactInfo;

  useEffect(() => {
    const contactTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 80%",
        end: "bottom center",
        toggleActions: "play none none none",
      },
    });

    contactTimeline.fromTo(
      ".contact-section h3",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    contactTimeline.fromTo(
      ".contact-box",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
      },
      "-=0.4"
    );

    // ✔ FIX: Return only a cleanup function (React requirement)
    return () => {
      contactTimeline.kill();
    };
  }, []);

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>{config.developer.fullName}</h3>

        <div className="contact-flex">

          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href={`mailto:${contact.email}`} data-cursor="disable">
                {contact.email}
              </a>
            </p>

            <h4>Location</h4>
            <p>
              <span>{config.social.location}</span>
            </p>
          </div>

          <div className="contact-box">
            <h4>Social</h4>

            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>

            <a
              href={contact.twitter}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>

            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>

          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by{" "}
              <span>{config.developer.fullName}</span>
            </h2>

            <h5>
              <MdCopyright /> {new Date().getFullYear()}
            </h5>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
