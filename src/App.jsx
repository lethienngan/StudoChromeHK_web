import styles from "./App.module.scss";
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import About from "./component/About/About";
import Course from "./component/Course/Course";
import Promo from "./component/Promo/Promo";
import Services from "./component/Services/Services";
import Testimonials from "./component/Testimonials/Testimonials";
import Blog from "./component/Blog/Blog";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";

function App() {
    return (
        <div className={styles.app}>
            <Navbar />
            <Header />
            <About />
            <Course />
            <Promo />
            <Services />
            <Testimonials />
            <Blog />
            <Contact />
            <Footer />

            {/* <div style={{ height: "2000px" }}></div> */}
        </div>
    );
}

export default App;
