import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import FeatureProducts from '../components/FeatureProducts'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Banner />
            <FeatureProducts />
            <Footer />
        </div>
    )
}
