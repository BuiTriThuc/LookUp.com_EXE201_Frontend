import "./App.scss";
import Header from "./components/Layout/Header/Header";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/Layout/Error/NotFound";
import Footer from "./components/Layout/Footer/Footer";
import Home from "./components/Home/Home";
import LoginForm from "./components/User/LoginForm";
import { Fragment, useEffect } from "react";
import NewFeed from "./components/Home/NewFeed";
import Search from "./components/Search/Search";
import FormRegister from "./components/InformationRegister/FormRegister";
import Chatbox from "./components/Chatbox/Chatbox";
import Profile from "./components/User/Profile";
import { StyledEngineProvider } from "@mui/material/styles";
import NewPassword from "./components/InformationRegister/NewPassword";
import Help from "./components/Layout/help";
import Premium from "./components/Premium/Premium";
import PremiumYear from "./components/Premium/PremiumYear";
import MorePremium from "./components/Premium/MorePremium";
import { useDispatch, useSelector } from "react-redux";
import store from "./store";
import { loadUser } from "./components/actions/userActions";
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
            {/* <Route
              path="/"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Home />
                </ProtectedRoute>
              }
            /> */}
            <Route path="/chatbox" element={<Chatbox />} />
            <Route path="/register" element={<FormRegister />} />
            {/* <Route
              exact
              path="/newfeed"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <NewFeed />
                </ProtectedRoute>
              }
            /> */}
            <Route path="/login" element={<LoginForm />} />
            <Route path="/search" element={<Search />} />
            <Route path="/resetpassword" element={<NewPassword />} />
            <Route path="/resetpasswordsuccess" element={<Profile />} />
            <Route path="/help" element={<Help />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/premiumyear" element={<PremiumYear />} />
            <Route path="/morepremium" element={<MorePremium />} />
            <Route path="/*" element={<NotFound />} />

            <Route
              element={<ProtectedRoute isAuthenticated={isAuthenticated} />}
            >
              <Route path="/" element={<Home />} />
              <Route path="/newfeed" element={<NewFeed />} />
            </Route>
          </Routes>
          <Footer />
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
