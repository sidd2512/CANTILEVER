import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import News from "./components/News";
import Home from "./components/Home";
import Review from "./components/Review";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-tr from-amber-300 via-amber-50 to-amber-300 dark:bg-gradient-to-tr dark:from-orange-100 dark:via-neutral-900 dark:to-orange-100 fixed -z-10 h-screen w-screen ">
        {" "}
      </div>
      <div className="w-full h-full relative">
        <div className="h-10">
          <NavBar />
        </div>
        <div className="absolute">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/latest-news" element={<News />} />
            <Route path="/review" element={<Review />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
