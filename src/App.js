import "./App.scss";
import Header from "./components/Layout/Header/Header";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NotFound from "./components/Layout/Error/NotFound";
import Footer from "./components/Layout/Footer/Footer";
import Home from "./components/Home/Home";
import LoginForm from "./components/User/LoginForm";
import { Fragment } from "react";
import NewFeed from "./components/Home/NewFeed";
import Search from "./components/Search/Search";
import FormRegister from "./components/InformationRegister/FormRegister";

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<FormRegister />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
