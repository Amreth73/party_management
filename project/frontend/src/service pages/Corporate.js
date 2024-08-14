import React from "react";
import "./birthday.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { usePrice } from "./PriceProvider";
import { useRevenue } from "../pages/RevenueProvider";
const Corporate = () => {
  const navigate = useNavigate();

  const { addRevenue } = useRevenue();
  const { setPrice } = usePrice();
  const handlePay = (amt) => {
    setPrice(amt);

    // Get the current month as a string
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = new Date().getMonth();
    // const currentMonth = monthNames[new Date().getMonth()];
    const currentMonth = monthNames[month];

    const intAmount = parseInt(amt, 10); // Convert the amount to an integer
    addRevenue(intAmount, currentMonth); // Pass the amount and current month
    navigate("/payment");
  };

  return (
    <div class="dpbody">
      <Navbar />
      <header
        className="dpheader-section"
        style={{
          backgroundImage:
            "url(https://prestigiousvenues.com/wp-content/uploads/2017/04/Unique-Flower-Arrangements-Wildabout-Flowers-Prestigious-Venues.jpg)",
        }}
      >
        <div className="dpheader-content">
          <h1>Corporate Events</h1>
          <div className="scroll-down">
            <span>▼</span>
          </div>
        </div>
      </header>
      <div className="party-decor-container">
        <main className="dpcontent-section">
          <h2>What We Do</h2>
          <p>
            At PartyPerfect, we excel in organizing exceptional corporate events
            that align with your company's vision and goals. From planning and
            logistics to execution, our team ensures every detail is
            meticulously handled to deliver a successful and professional event.
          </p>

          <div className="dpsection">
            <h3>1. How We Do It</h3>
            <p>
              Our process begins with understanding your event objectives and
              requirements. We then develop a customized plan that includes all
              necessary elements for a successful event. Our experienced
              coordinators handle all logistics, ensuring a smooth and
              stress-free experience.
            </p>
            <p>
              We start with an initial consultation to discuss your goals and
              preferences. Based on this, we manage vendor coordination,
              timeline planning, and on-site setup to ensure everything runs
              smoothly.
            </p>
            <div className="image-gallery">
              <img
                src="https://prestigiousvenues.com/wp-content/uploads/2021/03/5-Star-Yacht-Hotel-Sunborn-Gibraltar-Prestigious-Venues.jpg"
                alt="Event Venue 1"
              />
              <div className="image-row">
                <img
                  src="https://prestigiousvenues.com/wp-content/uploads/2021/03/Borealis-Event-Space-Sunborn-Gibraltar-Prestigious-Venues.jpg"
                  alt="Event Venue 2"
                />
                <img
                  src="https://prestigiousvenues.com/wp-content/uploads/2021/03/Reception-Luxury-Venue-Sunborn-Gibraltar-Prestigious-Venues.jpg"
                  alt="Event Venue 3"
                />
              </div>
            </div>
          </div>

          <div className="dpsection">
            <h3>2. Additional Features</h3>
            <p>
              We offer a range of additional features to enhance your corporate
              event, including customized branding, interactive sessions, and
              professional entertainment. Our goal is to ensure every detail is
              perfect and your event is impactful.
            </p>
            <p>
              Additional features include keynote speakers, interactive
              workshops, and customized event materials. We aim to provide
              elements that make your event memorable and engaging for all
              participants.
            </p>
            <div className="image-gallery">
              <img
                src="https://prestigiousvenues.com/wp-content/uploads/2021/03/Exterior-Night-View-Sunborn-Gibraltar-Prestigious-Venues.jpg"
                alt="Event Venue 4"
              />
              <div className="image-row">
                <img
                  src="https://prestigiousvenues.com/wp-content/uploads/2017/03/Ballroom-For-Gala-Dinners-in-Dubai-Grand-Hyatt-Dubai-Prestigious-Venues.jpg"
                  alt="Event Venue 5"
                />
                <img
                  src="https://prestigiousvenues.com/wp-content/uploads/2017/03/Private-Dining-Event-Space-Grand-Hyatt-Dubai-Prestigious-Venues.jpg"
                  alt="Event Venue 6"
                />
              </div>
              <div className="image-row">
                <img
                  src="https://prestigiousvenues.com/wp-content/uploads/2017/03/Wedding-Reception-Venue-Grand-Hyatt-Dubai-Prestigious-Venues.jpg"
                  alt="Event Venue 7"
                />
                <img
                  src="https://prestigiousvenues.com/wp-content/uploads/2017/03/Large-Conference-Venue-in-Dubai-Grand-Hyatt-Dubai-Prestigious-Venues.jpg"
                  alt="Event Venue 8"
                />
              </div>
            </div>
          </div>

          <div className="dpsection">
            <h3>3. Choose the Perfect Venue</h3>
            <p>
              Selecting the right venue can significantly impact the overall
              atmosphere of your party. Start by outlining the specific
              requirements of your event decor. Consider a location that aligns
              with your party's theme and reflects the essence of your
              celebration. Whether it's an upscale hotel, a trendy rooftop, or a
              cozy gallery space, the venue should complement your decor theme
              and leave a lasting impression on attendees.
            </p>
            <p>
              Consider the nature of the event (e.g., formal, casual,
              interactive), the number of guests, and any equipment you may need
              (e.g., audio-visual, lighting, and furniture).
            </p>
            <div className="image-gallery">
              <img
                src="https://prestigiousvenues.com/wp-content/uploads/2017/03/London-Boat-For-events-Silver-Sturgeon-Prestigious-Venues.jpg"
                alt="Event Venue 9"
              />
            </div>
          </div>

          <div className="pricing-cards">
            <div className="pricing-card1">
              <h3 className="card-title">Basic Package</h3>
              <p className="card-description">
                Includes venue decoration, basic catering, and entertainment.
              </p>
              <ul className="ulist">
                <li>✅ Venue Setup</li>
                <li>✅ Basic Decorations</li>
                <li>✅ Standard Catering</li>
                <li>✅ 2 Hours of Entertainment</li>
              </ul>
              <p className="card-price">$500</p>
              <button className="pay-btn" onClick={() => handlePay(500)}>
                Pay Now
              </button>
            </div>
            <div className="pricing-card2">
              <h3 className="card-title" style={{ fontSize: "1.5rem" }}>
                Standard Package
              </h3>
              <p className="card-description">
                Includes all features of the Basic Package plus additional
                decorations and a photo booth.
              </p>
              <ul className="ulist">
                <li>✅ Venue Setup</li>
                <li>✅ Custom Decorations</li>
                <li>✅ Premium Catering</li>
                <li>✅ 4 Hours of Entertainment</li>
                <li>✅ Photography</li>
              </ul>
              <p className="card-price">$800</p>
              <button className="pay-btn" onClick={() => handlePay(800)}>
                Pay Now
              </button>
            </div>
            <div className="pricing-card3">
              <h3 className="card-title" style={{ fontSize: "1.5rem" }}>
                Premium Package
              </h3>
              <p className="card-description">
                Includes all features of the Standard Package plus a themed
                entertainment show and gourmet catering.
              </p>
              <ul className="ulist3">
                <li>✅ Venue Setup</li>
                <li>✅ Themed Decorations</li>
                <li>✅ Gourmet Catering</li>
                <li>✅ 6 Hours of Entertainment</li>
                <li>✅ Photography & Videography</li>
                <li>✅ Custom Party Favors</li>
              </ul>
              <p className="card-price" style={{ marginBottom: "20px" }}>
                $1200
              </p>
              <button className="pay-btn" onClick={() => handlePay(1200)}>
                Pay Now
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Corporate;
