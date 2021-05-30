import React from 'react';
import Landing from "../../components/Landing";
import Education from './Education';
import Footer from './Footer';
import Projects from './Projects';
import Skills from './Skills';

function Home() {
    return (
        <>
            <Landing />
            <Education />
            <Projects />
            <Skills />
            <Footer />
        </>
    )
}

export default Home
