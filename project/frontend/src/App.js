import "./App.css";
import Dashboardcontent from "./Dashboardcontent";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Theme from "./components/Theme";
import Service from "./components/Service";
import AboutUs from "./components/About";
import Contact from "./components/Contact";
import AdminLoginForm from "./components/Adminlogin";
import Ordercontent from "./Ordercontent";
import Venuecontent from "./Venuecontent";
import Revenuecontent from "./RevenueContent";
import Eventcontent from "./Eventcontent";
import VenuFinder from "./venue conponents/VenuFinder";
import Receipt from "./payment/Receipt";
import Payment from "./payment/Payment";
import VenueDetail from "./venue conponents/VenueDetails";
import Decorplanning from "./service pages/Decorplanning";
import PartyPlanning from "./service pages/PartyPlanning";
import EventManagement from "./service pages/EventManagement";
import Entertainment from "./service pages/Entertainment";
import Catering from "./service pages/Catering";
import { UserProvider } from "./components/UserProvider";
import Birthday from "./service pages/Birthday";
import Charity from "./service pages/Charity";
import Corporate from "./service pages/Corporate";
import Cultural from "./service pages/Cultural";
import Education from "./service pages/Education";
import PublicEvents from "./service pages/PublicEvents";
import { PriceProvider } from "./service pages/PriceProvider";
import { RevenueProvider } from "./pages/RevenueProvider";
import Wedding from "./service pages/Wedding";
function App() {
  return (
    // <VenueRevenueContext>
    <RevenueProvider>
      <PriceProvider>
        <UserProvider>
          <>
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/themes" element={<Theme />} />
                <Route path="/services" element={<Service />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/venues" element={<VenuFinder />} />
                <Route
                  path="services/venue-selection"
                  element={<VenuFinder />}
                />
                <Route
                  path="/services/decor-design"
                  element={<Decorplanning />}
                />
                <Route
                  path="/services/party-planning"
                  element={<PartyPlanning />}
                />
                <Route
                  path="/services/event-management"
                  element={<EventManagement />}
                />
                <Route
                  path="/services/entertainment"
                  element={<Entertainment />}
                />
                <Route path="/services/catering" element={<Catering />} />

                <Route path="/venues/:name" element={<VenueDetail />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/admin-login" element={<AdminLoginForm />} />

                <Route path="/orders" element={<Ordercontent />} />
                <Route path="/dashboard" element={<Dashboardcontent />} />
                <Route path="/venuelist" element={<Venuecontent />} />
                <Route path="/revenue" element={<Revenuecontent />} />
                <Route path="/events" element={<Eventcontent />} />
                <Route path="/receipt" element={<Receipt />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/service/birthday" element={<Birthday />} />
                <Route path="/service/charity" element={<Charity />} />
                <Route path="/services/corporate" element={<Corporate />} />
                <Route path="/service/cultural" element={<Cultural />} />
                <Route path="/service/education" element={<Education />} />
                <Route path="/service/public" element={<PublicEvents />} />
                <Route path="/service/wedding" element={<Wedding />} />
              </Routes>
            </div>
          </>
        </UserProvider>
      </PriceProvider>
    </RevenueProvider>
    // </VenueRevenueContext>
  );
}

export default App;
