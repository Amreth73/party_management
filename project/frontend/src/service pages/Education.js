import React from "react";
import "./education.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

import { usePrice } from "./PriceProvider";
import { useRevenue } from "../pages/RevenueProvider";
const Education = () => {
  const { setPrice } = usePrice();
  const { addRevenue } = useRevenue();
  const navigate = useNavigate();
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
          <h1>Education Events</h1>
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
            <h3>1. What We Do</h3>
            <p>
              At PartyPerfect, we specialize in organizing educational events
              that are engaging and informative. Our team handles everything
              from venue setup and interactive activities to expert speakers and
              catering, ensuring a successful and enriching experience for all
              attendees.
            </p>
            <p>
              We understand the importance of creating a conducive learning
              environment. Whether it's a workshop, seminar, or conference, we
              cater to all types of educational gatherings, providing the
              necessary resources and support to make your event impactful.
            </p>
            <div className="image-gallery">
              <img
                src="https://prestigiousvenues.com/wp-content/uploads/2017/03/Venue-For-Product-Launches-20-Cavendish-Square-Prestigious-Venues.jpg"
                alt="Event Venue 1"
              />
              <div className="image-row">
                <img
                  src="https://prestigiousvenues.com/wp-content/uploads/2021/05/Product-Launch-Venue-The-Westin-Palace-Madrid-Prestigious-Venues.jpg"
                  alt="Event Venue 2"
                />
                <img
                  src="https://prestigiousvenues.com/wp-content/uploads/2019/07/Product-Launch-Venue-Fairmont-St-Andrews-Prestigious-Venues.jpg"
                  alt="Event Venue 3"
                />
              </div>
            </div>
          </div>

          <div className="dpsection">
            <h3>2. How We Do It</h3>
            <p>
              We start by understanding your educational goals and objectives.
              Based on this, we create a tailored plan that includes all the
              necessary components to make your event a success. Our experienced
              coordinators manage every aspect, ensuring a smooth and efficient
              execution.
            </p>
            <p>
              Our process begins with an initial consultation to discuss your
              needs and expectations. We then handle all logistics, including
              venue coordination, schedule management, and setup to create an
              optimal learning environment.
            </p>
            <div className="image-gallery">
              <img
                src="https://prestigiousvenues.com/wp-content/uploads/2017/03/Product-Launch-Venue-Banqueting-House-Prestigious-Venues.jpg"
                alt="Event Venue 4"
              />
              <div className="image-row">
                <img
                  src="https://prestigiousvenues.com/wp-content/uploads/2022/02/Reception-in-the-Great-Hall-Queens-House-Prestigious-Venues-450x225.jpg"
                  alt="Event Venue 5"
                />
                <img
                  src="https://prestigiousvenues.com/wp-content/uploads/2022/02/The-Great-Hall-Queens-House-Prestigious-Venues-450x225.jpg"
                  alt="Event Venue 6"
                />
              </div>
              <div className="image-row">
                <img
                  src="https://prestigiousvenues.com/wp-content/uploads/2021/05/Meeting-Venue-Intercontinental-Bordeaux-Le-Grand-Prestigious-Venues-450x225.jpg"
                  alt="Event Venue 7"
                />
                <img
                  src="https://prestigiousvenues.com/wp-content/uploads/2021/05/Meeting-Room-Intercontinental-Bordeaux-Le-Grand-Prestigious-Venues-450x225.jpg"
                  alt="Event Venue 8"
                />
              </div>
            </div>
          </div>

          <div className="dpsection">
            <h3>3. Additional Features</h3>
            <p>
              We offer a range of additional features to enhance your
              educational event, including interactive workshops, expert guest
              speakers, and multimedia presentations. Our goal is to provide a
              comprehensive experience that maximizes learning and engagement.
              Additional features include custom presentations, networking
              opportunities, and live streaming options. We aim to add value and
              make your event memorable for all participants.
            </p>

            <div className="image-gallery">
              <img
                src="https://prestigiousvenues.com/wp-content/uploads/2019/03/Product-Launch-Event-Production-Eclipse-AV-Prestigious-Venues.jpg"
                alt="Event Venue 9"
              />
            </div>
          </div>
          <div className="pricing-cards">
            <div className="pricing-card1">
              <h3 className="card-title">Basic Package</h3>
              <p className="card-description">
                Includes venue setup, basic audiovisual equipment, and catering.
              </p>
              <ul className="ulist">
                <li>✅ Venue Setup</li>
                <li>✅ Basic Audiovisual Equipment</li>
                <li>✅ Standard Catering</li>
                <li>✅ 2 Hours of Support</li>
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
                equipment and a guest speaker.
              </p>
              <ul className="ulist">
                <li>✅ Venue Setup</li>
                <li>✅ Advanced Audiovisual Equipment</li>
                <li>✅ Premium Catering</li>
                <li>✅ 4 Hours of Support</li>
                <li>✅ Guest Speaker</li>
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
                Includes all features of the Standard Package plus a full-day
                workshop and advanced multimedia options.
              </p>
              <ul className="ulist1">
                <li>✅ Venue Setup</li>
                <li>✅ Full Multimedia Setup</li>
                <li>✅ Gourmet Catering</li>
                <li>✅ 6 Hours of Support</li>
                <li>✅ Multiple Guest Speakers</li>
                <li>✅ Customized Workshop</li>
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

export default Education;
