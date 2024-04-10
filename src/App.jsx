import styles from "./App.module.scss";
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import About from "./component/About/About";

function App() {
    return (
        <div className={styles.app}>
            <Navbar />
            <Header />
            <About />
            {/* <Courses />
            <Amentities />
            <Testimonials />
            <Services />
            <Blog />
            <Contact />
            <Footer />  */}
            <div style={{ height: "2000px" }}></div>
        </div>
    );
}

export default App;
