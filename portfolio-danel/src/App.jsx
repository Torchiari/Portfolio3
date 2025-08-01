import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Contact from "./components/Contact";

const App = () => {

    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Skill />
            </main>
            <Contact />
        </>
    )
}

export default App;