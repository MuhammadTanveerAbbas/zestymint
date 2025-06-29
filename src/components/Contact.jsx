import { openingHours, socials } from "../../constants/index.js";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

// Contact/store info object
const storeInfo = {
  heading: "Where to Find Us",
  address: "123 Mint Lane, Suite 8B, Greenview City, ZZ 12345",
  contact: {
    phone: "(000) 123-4567",
    email: "contact@mintdrinks.io",
  },
};

const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", { type: "words" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });

    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to("#f-right-leaf", {
        y: "-50",
        duration: 1,
        ease: "power1.inOut",
      });
  });

  return (
    <footer id="contact" style={footerStyle}>
      <img
        src="/images/footer-right-leaf.webp"
        alt="leaf-right"
        id="f-right-leaf"
        style={leafRightStyle}
      />
      <img
        src="/images/footer-left-leaf.webp"
        alt="leaf-left"
        id="f-left-leaf"
        style={leafLeftStyle}
      />

      <div className="content" style={contentStyle}>
        <h2>{storeInfo.heading}</h2>

        <div>
          <h3>Visit Our Bar</h3>
          <p>{storeInfo.address}</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>{storeInfo.contact.phone}</p>
          <p>{storeInfo.contact.email}</p>
        </div>

        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day} : {time.time}
            </p>
          ))}
        </div>

        <div>
          <h3>Socials</h3>

          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;

// --- Inline Styles (replace with CSS classes in production) ---
const footerStyle = {
  position: "relative",
  margin: 0,
  padding: 0,
  overflow: "hidden",
};

const contentStyle = {
  paddingBottom: "2rem",
  marginBottom: 0,
};

const leafRightStyle = {
  position: "absolute",
  bottom: 0,
  right: 0,
  margin: 0,
  padding: 0,
  display: "block",
};

const leafLeftStyle = {
  position: "absolute",
  bottom: 0,
  left: 0,
  margin: 0,
  padding: 0,
  display: "block",
  transform: "translateY(0)", // Ensure no movement
};
