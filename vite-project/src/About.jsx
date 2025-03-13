import React from 'react';
import Header from '../About/header';
import AboutMainSection from '../About/AboutMainSection';
import CoreValues from '../About/CoreValues';
import WhyChooseUs from '../About/WhyChooseUs';
import Testinmonials from '../components/Testinmonials' ;
import Footer from '../components/Footer' ;


export default function About() {
    return (
        <>
            <Header />
            <AboutMainSection />
            <CoreValues />
            <WhyChooseUs />
            <Testinmonials />
            <Footer />
        </>
    )
}
