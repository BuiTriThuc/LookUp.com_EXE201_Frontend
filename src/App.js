import "./App.scss";
import Header from "./components/Layout/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/Layout/Error/NotFound";
import Footer from "./components/Layout/Footer/Footer";
import Home from "./components/Home/Home";
import LoginForm from "./components/User/LoginForm";
import { Fragment } from "react";
import NewFeed from "./components/Home/NewFeed";
import Search from "./components/Search/Search";
import FormRegister from "./components/InformationRegister/FormRegister";
import Chatbox from "./components/Chatbox/Chatbox";
import Profile from "./components/User/Profile";
import { StyledEngineProvider } from "@mui/material/styles";

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chatbox" element={<Chatbox />} />
            <Route path="/register" element={<FormRegister />} />
            <Route path="/newfeed" element={<NewFeed />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
