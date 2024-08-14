import React from "react";
import "./cultural.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { usePrice } from "./PriceProvider";
import { useRevenue } from "../pages/RevenueProvider";
const Cultural = () => {
  const { addRevenue } = useRevenue();
  const navigate = useNavigate();

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
          <h1>Cultural Events</h1>
          <div className="scroll-down">
            <span>▼</span>
          </div>
        </div>
      </header>
      <div className="party-decor-container">
        <main className="dpcontent-section">
          <h2>What We Do</h2>
          <p>
            At PartyPerfect, we specialize in organizing exceptional corporate
            events that cater to your business needs. Our team manages
            everything from venue selection and branding to entertainment and
            catering, ensuring a seamless event experience.
          </p>

          <div className="dpsection">
            <h3>1. How We Do It</h3>
            <p>
              Our approach begins with a thorough understanding of your
              corporate goals and preferences. We then create a customized plan
              that includes all the essential elements to bring your event to
              fruition. Our experienced coordinators handle every detail for a
              hassle-free experience.
            </p>
            <p>
              We initiate the process with a detailed consultation to grasp your
              expectations and tailor our services accordingly. From there, we
              manage all aspects, including vendor coordination, timeline
              management, and on-site logistics.
            </p>
            <div className="image-gallery">
              <img
                src="https://prestigiousvenues.com/wp-content/uploads/2024/01/Luxury-Ski-Resort-W-Verbier-Prestigious-Venues.jpg"
                alt="Event Venue 1"
              />
              <div className="image-row">
                <img
                  src="https://prestigiousvenues.com/wp-content/uploads/2021/05/Golf-Day-Venue-Hôtel-Barrière-LHôtel-du-Golf-Prestigious-Venues.jpg"
                  alt="Event Venue 2"
                />
                <img
                  src="https://prestigiousvenues.com/wp-content/uploads/2017/03/Tropical-Island-Venue-Hamilton-Island-Yacht-Club-Prestigious-Venues.jpg"
                  alt="Event Venue 3"
                />
              </div>
            </div>
          </div>

          <div className="dpsection">
            <h3>2. Additional Features</h3>
            <p>
              We offer a variety of additional features to enhance your
              corporate event, including branded decorations, interactive
              sessions, and audiovisual equipment. Our aim is to ensure that
              every detail aligns with your business objectives.
            </p>
            <p>
              Additional features include keynote speakers, live streaming
              options, and custom promotional materials. We strive to
              incorporate unique elements that will elevate your event and
              engage your audience effectively.
            </p>
            <div className="image-gallery">
              <img
                src="https://prestigiousvenues.com/wp-content/uploads/2017/03/Event-Venue-Hamilton-Island-Yacht-Club-Prestigious-Venues.jpg"
                alt="Event Venue 4"
              />
              <div className="image-row">
                <img
                  src="https://prestigiousvenues.com/wp-content/uploads/2017/03/Business-Meeting-Venue-In-Antalya-Cornelia-Diamond-Prestigious-Venues.jpg"
                  alt="Event Venue 5"
                />
                <img
                  src="https://prestigiousvenues.com/wp-content/uploads/2017/03/Golf-Club-In-Turkey-Cornelia-Diamond-Prestigious-Venues.jpg"
                  alt="Event Venue 6"
                />
              </div>
              <div className="image-row">
                <img
                  src="https://prestigiousvenues.com/wp-content/uploads/2021/05/Meeting-Venue-Intercontinental-Bordeaux-Le-Grand-Prestigious-Venues-450x225.jpg"
                  alt="Event Venue 7"
                />
                <img
                  src="https://prestigiousvenues.com/wp-content/uploads/2017/03/Country-Garden-Venue-Dormy-House-Prestigious-Venues.jpg"
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
                src="https://prestigiousvenues.com/wp-content/uploads/2017/03/Luxury-Resort-In-Turkey-Cornelia-Diamond-Prestigious-Venues.jpg"
                alt="Event Venue 9"
              />
            </div>
          </div>
          <div className="pricing-cards">
            <div className="pricing-card1">
              <h3 className="card-title">Basic Package</h3>
              <p className="card-description">
                Includes venue setup, basic branding, and standard catering.
              </p>
              <ul className="ulist">
                <li>✅ Venue Setup</li>
                <li>✅ Basic Branding</li>
                <li>✅ Standard Catering</li>
                <li>✅ 2 Hours of Audiovisual Support</li>
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
                branding and a live streaming option.
              </p>
              <ul className="ulist">
                <li>✅ Venue Setup</li>
                <li>✅ Enhanced Branding</li>
                <li>✅ Premium Catering</li>
                <li>✅ 4 Hours of Audiovisual Support</li>
                <li>✅ Live Streaming</li>
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
                Includes all features of the Standard Package plus a keynote
                speaker and advanced technology support.
              </p>
              <ul className="ulist">
                <li>✅ Venue Setup</li>
                <li>✅ Premium Branding</li>
                <li>✅ Gourmet Catering</li>
                <li>✅ 6 Hours of Audiovisual Support</li>
                <li>✅ Keynote Speaker</li>
                <li>✅ Advanced Technology Support</li>
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

export default Cultural;
