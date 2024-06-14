// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigationType } from 'react-router-dom';
import HomePage from './components/HomePage';
import NavigationBar from './components/NavigationBar';
import AboutUs from './components/AboutUs';
import EventDetails from './components/EventDetails';
import Participation from './components/Participation';
import SponsorsPartners from './components/SponsorsPartners';
import BottomBar from './components/BottomBar';
import KeyFeatures from './components/KeyFeatures';
import BusinessLounge from './components/BusinessLounge';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import GalleryPage from './components/GalleryPage';
import Oct19 from './components/Oct19';
import { ChatProvider } from './ChatContext';
import ChatWindow from './components/ChatWindow';
import ChatToggleButton from './components/ChatToggleButton';
import MessageIconButton from './components/MessageIconButton';
import OurTeam from './components/OurTeam';
import FAQ from './components/FAQ';
import Loading from './components/Loading';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const navigationType = useNavigationType();

    useEffect(() => {
        if (navigationType !== 'POP') {
            setLoading(true);
            const timer = setTimeout(() => setLoading(false), 1500); // 1.5s Test for loading page
            return () => clearTimeout(timer);
        } else {
            setLoading(false);
        }
    }, [location, navigationType]);

    return (
        <ChatProvider>
            <div className="App">
                {loading && <Loading />}
                <NavigationBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/event-details" element={<EventDetails />} />
                    <Route path="/participation" element={<Participation />} />
                    <Route path="/sponsors-partners/:year" element={<SponsorsPartners />} />
                    <Route path="/key-features" element={<KeyFeatures />} />
                    <Route path="/business-lounge" element={<BusinessLounge />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/gallery/:year" element={<GalleryPage />} />
                    <Route path="/oct-19" element={<Oct19 />} />
                    <Route path="/our-team" element={<OurTeam />} />
                    <Route path="/faqs" element={<FAQ />} />
                </Routes>
                <BottomBar />
                <ChatWindow />
                <ChatToggleButton />
                <MessageIconButton />
            </div>
        </ChatProvider>
    );
}

export default App;


