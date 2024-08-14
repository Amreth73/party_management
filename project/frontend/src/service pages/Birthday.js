import React from "react";
import "./birthday.css";
import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
import { usePrice } from "./PriceProvider";
import { useRevenue } from "../pages/RevenueProvider";
import Navbar from "./Navbar";

const Bday = () => {
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
    const currentMonth = monthNames[new Date().getMonth()];
    // const currentMonth = monthNames[0];

    const intAmount = parseInt(amt, 10); // Convert the amount to an integer
    addRevenue(intAmount, currentMonth); // Pass the amount and current month
    navigate("/payment");
  };

  return (
    <div class="dpbody">
      {/* <Navbar /> */}
      <Navbar />
      <header
        className="dpheader-section"
        style={{
          backgroundImage:
            "url(https://prestigiousvenues.com/wp-content/uploads/2017/04/Unique-Flower-Arrangements-Wildabout-Flowers-Prestigious-Venues.jpg)",
        }}
      >
        <div className="dpheader-content">
          <h1>Birthday Parties</h1>
          <div className="scroll-down">
            <span>▼</span>
          </div>
        </div>
      </header>
      <div className="party-decor-container">
        <main className="dpcontent-section">
          <h2>What We Do</h2>
          <p>
            At PartyPerfect, we specialize in creating memorable birthday
            parties that reflect the personality and preferences of the guest of
            honor. Our team handles everything from theme selection and venue
            decoration to entertainment and catering, ensuring a flawless event
            experience.
          </p>

          <div className="dpsection">
            <h3>1. Timing is Everything</h3>
            <p>
              We believe that every birthday is a special occasion and should be
              celebrated with joy and excitement. From intimate gatherings to
              grand celebrations, we cater to all sizes and styles of events.
              Our goal is to bring your vision to life and make your celebration
              truly unforgettable.
            </p>
            <p>
              Our experienced team is dedicated to providing exceptional service
              and attention to detail. We work closely with you to ensure that
              every aspect of the party is perfectly planned and executed,
              leaving you free to enjoy the event with your guests.
            </p>
            <div className="image-gallery">
              <img
                src="https://prestigiousvenues.com/wp-content/uploads/2017/03/Meeting-Venue-De-LEurope-Prestigious-Venues-1.jpg"
                alt="Event Venue 1"
              />
              <div className="image-row">
                <img
                  src="https://prestigiousvenues.com/wp-content/uploads/2017/03/Reception-Venue-De-LEurope-Prestigious-Venues.jpg"
                  alt="Event Venue 2"
                />
                <img
                  src="https://prestigiousvenues.com/wp-content/uploads/2020/02/Reception-Venue-De-LEurope-Prestigious-Venues.jpg"
                  alt="Event Venue 3"
                />
              </div>
            </div>
          </div>

          <div className="dpsection">
            <h3>2. How We Do It</h3>
            <p>
              At PartyPerfect, we specialize in creating memorable birthday
              parties that reflect the personality and preferences of the guest
              of honor. Our team handles everything from theme selection and
              venue decoration to entertainment and catering, ensuring a
              flawless event experience.
            </p>
            <p>
              We believe that every birthday is a special occasion and should be
              celebrated with joy and excitement. From intimate gatherings to
              grand celebrations, we cater to all sizes and styles of events.
              Our goal is to bring your vision to life and make your celebration
              truly unforgettable.
            </p>
            <div className="image-gallery">
              <img
                src="https://prestigiousvenues.com/wp-content/uploads/2017/03/London-Venue-For-Parties-Mahiki-London-Prestigious-Venues.jpg"
                alt="Event Venue 4"
              />
              <div className="image-row">
                <img
                  src="https://prestigiousvenues.com/wp-content/uploads/2017/03/Venue-For-Parties-Mahiki-London-Prestigious-Venues.jpg"
                  alt="Event Venue 5"
                />
                <img
                  src="https://prestigiousvenues.com/wp-content/uploads/2017/03/Beach-House-Mahiki-London-Prestigious-Venues.jpg"
                  alt="Event Venue 6"
                />
              </div>
              <div className="image-row">
                <img
                  src="https://prestigiousvenues.com/wp-content/uploads/2017/03/Wedding-Reception-Venue-Petroff-Palace-Prestigious-Venues.jpg"
                  alt="Event Venue 7"
                />
                <img
                  src="https://prestigiousvenues.com/wp-content/uploads/2017/03/Private-Venue-For-Celebrations-Lakesong-Kumarakom-Prestigious-Venues.jpg"
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
                src="https://prestigiousvenues.com/wp-content/uploads/2017/03/Beautiful-Venue-In-India-Lakesong-Kumarakom-Prestigious-Venues.jpg"
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

export default Bday;
