import React from 'react';
import Nav from './components/Nav';
import About from './components/About'
import Skills from './components/Skills'
import MyCarousel from './components/Projects'
import Footer from './components/Footer'




export const Landing = () => {
    

    return (
        <>
        <Nav />
        <About />
        <Skills />
        <MyCarousel />
        <Footer />
        </>
    )
}