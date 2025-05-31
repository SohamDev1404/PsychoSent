import React from 'react';
import Navbar from '../components/Navbar';
import ChatButton from '../components/ChatButton';
import PandaCard from '../components/PandaCard';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <Navbar />
      <div className="home-content">
        <ChatButton />
        <PandaCard />
      </div>
    </div>
  );
}

export default HomePage;