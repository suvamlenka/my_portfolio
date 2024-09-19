import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import About from './pages/About/About';
import Techstack from './pages/Techstack/Techstack';
import Projects from './pages/Projects/Projects';
import Educations from './pages/Educations/Education';
import WorkExp from './pages/workExp/WorkExp';
import Contact from './pages/Contact/Contact';
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import Tada from "react-reveal/Tada";
import MobileNav from "./components/MobileNav/MobileNav";

function App() {
  const [theme] = useTheme();
  return (
    <>
    <div id={theme}>
      <MobileNav />
      <Layout />
      <div className="container">
      <About/>
      <Educations/>
      <Techstack />
      <Projects />
      <WorkExp />
      <Contact />
      </div>
      <div className="footer pb-3 ms-3">
    
      <Tada>
          <h4 className="text-center">Made With 😍 Suvam &copy; 2024</h4>
          </Tada>
        </div>
        </div>
        <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
