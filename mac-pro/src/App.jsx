import NavBar from "./components/navbar";
import Hero from "./components/hero";
import ProductViewer from "./components/productviewer";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import Showcase from "./components/showcase";
import Performance from "./components/performance";
import Features from "./components/features";
import Highlights from "./components/highlights";
import Footer from "./components/footer";

gsap.registerPlugin(ScrollTrigger)

const App = () => {
    return (
        <main>
            <NavBar />
            <Hero />
            <ProductViewer />
            <Showcase />
            <Performance />
            <Features />
            <Highlights />
            <Footer />
        </main>
    )
}

export default App
