import React from "react";
import "./publicevent.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { usePrice } from "./PriceProvider";
import { useRevenue } from "../pages/RevenueProvider";
const PublicEvents = () => {
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
          <h1>Public Events</h1>
          <div className="scroll-down">
            <span>▼</span>
          </div>
        </div>
      </header>
      <div className="party-decor-container">
        <main className="dpcontent-section">
          <h2>What We Do</h2>
          <p>
            At PartyPerfect, we specialize in organizing exceptional public
            events that leave a lasting impression. From large-scale community
            festivals to corporate gatherings, our team ensures every detail is
            handled with precision. We take care of event planning, logistics,
            and execution, providing a seamless experience for all attendees.
          </p>

          <div className="dpsection">
            <h3>1. How We Do It</h3>
            <p>
              Our approach begins with a thorough understanding of your event
              objectives. We develop a customized strategy that includes venue
              selection, logistics, and coordination. Our team manages every
              aspect of the event, ensuring a smooth and successful execution.
            </p>
            <p>
              We start by discussing your vision and requirements during an
              initial consultation. This helps us design a comprehensive plan
              that aligns with your goals. From planning to execution, we handle
              all the details to deliver a successful event.
            </p>
            <div className="image-gallery">
              <img
                src="https://prestigiousvenues.com/wp-content/uploads/2017/03/Gala-Dinner-Venue-In-Rio-de-Janeiro-Lajedo-Prestigious-Venues.jpg"
                alt="Event Venue 1"
              />
              <div className="image-row">
                <img
                  src="https://prestigiousvenues.com/wp-content/uploads/2017/05/Venue-For-Weddings-Nobu-Eden-Roc-Prestigious-Venues.jpg"
                  alt="Event Venue 2"
                />
                <img
                  src="https://prestigiousvenues.com/wp-content/uploads/2017/05/Wedding-Venue-In-Miami-Nobu-Eden-Roc-Prestigious-Venues.jpg"
                  alt="Event Venue 3"
                />
              </div>
            </div>
          </div>

          <div className="dpsection">
            <h3>2. Additional Features</h3>
            <p>
              We offer a range of additional features to enhance your public
              event, including custom stage designs, live entertainment, and
              interactive activities. Our goal is to create a unique and
              engaging experience for attendees.
            </p>
            <p>
              Our additional features can include immersive experiences,
              professional photography, and customized event materials. We
              strive to make your event stand out and provide a memorable
              experience for all guests.
            </p>
            <div className="image-gallery">
              <img
                src="https://prestigiousvenues.com/wp-content/uploads/2017/03/Corporate-Incentive-Venue-In-Turkey-Cornelia-Diamond-Golf-Resort-Spa-Prestigious-Venues.jpg"
                alt="Event Venue 4"
              />
              <div className="image-row">
                <img
                  src="https://prestigiousvenues.com/wp-content/uploads/2021/04/Banqueting-Venue-Natural-History-Museum-London-Prestigious-Venues.jpg"
                  alt="Event Venue 5"
                />
                <img
                  src="https://prestigiousvenues.com/wp-content/uploads/2020/11/Natural-History-Museum-Prestigious-Venues.jpg"
                  alt="Event Venue 6"
                />
              </div>
              <div className="image-row">
                <img
                  src="https://prestigiousvenues.com/wp-content/uploads/2021/04/Corporate-Reception-Venue-Natural-History-Museum-London-Prestigious-Venues.jpg"
                  alt="Event Venue 7"
                />
                <img
                  src="https://prestigiousvenues.com/wp-content/uploads/2018/05/Gala-Dinner-Venue-Palazzo-Versace-Dubai-Prestigious-Venues.jpg"
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
                src="https://prestigiousvenues.com/wp-content/uploads/2021/04/Museum-Venue-London-Natural-History-Museum-London-Prestigious-Venues.jpg"
                alt="Event Venue 9"
              />
            </div>
          </div>
          <div className="pricing-cards">
            <div className="pricing-card1">
              <h3 className="card-title">Basic Package</h3>
              <p className="card-description">
                Includes venue setup, basic event coordination, and standard
                amenities.
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

export default PublicEvents;
