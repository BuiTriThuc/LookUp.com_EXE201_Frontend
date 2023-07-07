import "./App.scss";
import Header from "./components/Layout/Header/Header";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/Layout/Error/NotFound";
import Footer from "./components/Layout/Footer/Footer";
import Home from "./components/Home/Home";
import LoginForm from "./components/User/LoginForm";
import { Fragment, useEffect } from "react";
import Search from "./components/Search/Search";
import FormRegister from "./components/InformationRegister/FormRegister";
import Profile from "./components/User/Profile";
import NewPassword from "./components/InformationRegister/NewPassword";
import Help from "./components/Layout/help";
import Premium from "./components/Premium/Premium";
import PremiumYear from "./components/Premium/PremiumYear";
import MorePremium from "./components/Premium/MorePremium";
import store from "./store";
import { useSelector } from "react-redux";
import { loadUser } from "./components/actions/userActions";
import PremiumMonth from "./components/Premium/PremiumMonth";
import ViewImages from "./components/Home/ViewImages/ViewImages";
import ForgotPassword from "./components/InformationRegister/ForgotPassword";
import OTP from "./components/InformationRegister/OTP";
import EditProfile from "./components/User/EditProfile/EditProfile";
import Payment from "./components/Payment/Payment";
import Chatbox from "./components/chatbot/Chatbox";
import PaymentYear from "./components/Payment/PaymentYear";
import SearchDemo from "./components/Search/SearchDemo";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <div className="App">
      <Router>
        <Fragment>
          <Header />
          <Routes>
            <Route path="/register" element={<FormRegister />} />
            <Route path="/chatbox" element={<Chatbox />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/search" element={<Search />} />
            <Route path="/searchdemo" element={<SearchDemo />} />
            <Route path="/resetpassword" element={<NewPassword />} />
            <Route path="/resetpasswordsuccess" element={<Profile />} />
            <Route path="/help" element={<Help />} />
            <Route path="/help2" element={<Help />} />

            <Route path="/premium" element={<Premium />} />
            <Route path="/premiumyear" element={<PremiumYear />} />
            <Route path="/morepremium" element={<MorePremium />} />
            <Route path="/premiummonth" element={<PremiumMonth />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/paymentYear" element={<PaymentYear />} />

            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/otp" element={<OTP />} />
            <Route path="/*" element={<NotFound />} />

            <Route
              element={<ProtectedRoute isAuthenticated={isAuthenticated} />}
            >
              <Route exact path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/editprofile" element={<EditProfile />} />
              <Route path="/viewImage/:id" element={<ViewImages />} />
            </Route>
          </Routes>
          <Footer />
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
