import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import SingleProject from "./pages/SingleProject";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop"
import mainStyle from "./styles/main.module.css";

function App() {
    return (
        <div className={mainStyle.app}>
            <Router>
                <Navbar />
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/singleproject/:id" element={<SingleProject />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
