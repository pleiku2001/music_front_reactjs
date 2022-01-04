import React from 'react'
import Header from "../components/Header/Header"
import Navbar from '../components/Navbar/Navbar'
import Swipers from '../components/swiper/Swipers'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'
function Home() {
    return (
        <>
            <Header/>
            <Navbar/>
            <Swipers/>
            <Main/>
            <Footer/>
        </>
    )
}

export default Home
