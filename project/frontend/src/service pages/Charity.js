import React from "react";
import "./birthday.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

import { usePrice } from "./PriceProvider";
import { useRevenue } from "../pages/RevenueProvider";
const Charity = () => {
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
          <h1>Charity Events</h1>
          <div className="scroll-down">
            <span>▼</span>
          </div>
        </div>
      </header>
      <div className="party-decor-container">
        <main className="dpcontent-section">
          <h2>Best Practice</h2>
          <p>
            Planning a party event can be an exhilarating journey, but it
            requires meticulous planning and execution to ensure a successful
            event. The timing and preparation of party event decor play a
            crucial role in creating a lasting impression on your guests. We'll
            guide you through the essential steps of when and how to start
            planning your party event decor - setting the stage for a remarkable
            celebration.
          </p>

          <div className="dpsection">
            <h3>1. Our Mission</h3>
            <p>
              At PartyPerfect, our mission is to create and manage charity
              events that significantly impact the community. We are committed
              to organizing events that not only raise funds but also bring
              people together for a cause. Our dedicated team handles every
              detail, ensuring a seamless and impactful experience.
            </p>
            <p>
              From intimate fundraisers to grand galas, our goal is to design
              events that resonate with your mission and engage attendees. We
              work closely with you to tailor every aspect of the event to your
              specific needs and objectives.
            </p>
            <div className="image-gallery">
              <img
                src="https://prestigiousvenues.com/wp-content/uploads/2017/03/Corporate-Incentive-Venue-In-Brazil-JW-Mariott-Hotel-Rio-De-Janeiro-Prestigious-Venues.jpg"
                alt="Event Venue 1"
              />
              <div className="image-row">
                <img
                  src="https://prestigiousvenues.com/wp-content/uploads/2017/03/Luxury-5-Star-Venue-JW-Mariott-Hotel-Rio-De-Janeiro-Prestigious-Venues.jpg"
                  alt="Event Venue 2"
                />
                <img
                  src="https://prestigiousvenues.com/wp-content/uploads/2021/12/Best-Beach-Venue-Lujo-Hotel-Bodrum-Prestigious-Venues.jpg"
                  alt="Event Venue 3"
                />
              </div>
            </div>
          </div>

          <div className="dpsection">
            <h3>2. Our Approach</h3>
            <p>
              We begin with a thorough consultation to understand your charity's
              goals and vision. Based on this, we develop a comprehensive plan
              that covers every aspect of the event. Our services include venue
              selection, event design, and guest management.
            </p>
            <p>
              Our approach is hands-on and detail-oriented. We coordinate with
              vendors, manage timelines, and handle logistics to ensure a smooth
              execution of the event. Our team is dedicated to making sure that
              every detail aligns with your objectives.
            </p>
            <div className="image-gallery">
              <img
                src="https://prestigiousvenues.com/wp-content/uploads/2017/03/Wedding-Reception-Venue-Petroff-Palace-Prestigious-Venues.jpg"
                alt="Event Venue 4"
              />
              <div className="image-row">
                <img
                  src="https://prestigiousvenues.com/wp-content/uploads/2017/03/Business-Meeting-Venue-Petroff-Palace-Prestigious-Venues.jpg"
                  alt="Event Venue 5"
                />
                <img
                  src="https://prestigiousvenues.com/wp-content/uploads/2017/03/Gala-Dinner-Venue-In-Moscow-Petroff-Palace-Prestigious-Venues.jpg"
                  alt="Event Venue 6"
                />
              </div>
              <div className="image-row">
                <img
                  src="https://prestigiousvenues.com/wp-content/uploads/2017/03/Gala-Dinner-Venue-In-Moscow-Petroff-Palace-Prestigious-Venues.jpg"
                  alt="Event Venue 7"
                />
                <img
                  src="https://prestigiousvenues.com/wp-content/uploads/2021/12/Gala-Dinner-Ballroom-Lujo-Hotel-Bodrum-Prestigious-Venues.jpg"
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
                src="https://prestigiousvenues.com/wp-content/uploads/2021/12/Paradise-Venue-Lujo-Hotel-Bodrum-Prestigious-Venues.jpg"
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
                <li>✅ Basic decorations</li>
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
              <ul className="ulist">
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

export default Charity;
