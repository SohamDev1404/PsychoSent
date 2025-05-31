import React from 'react';
import './PandaCard.css';
import logoname1 from '../assets/image-3.jpg'
import logoname2 from '../assets/image-4.png'
import logoname3 from '../assets/image-5.jpg'

const pandas = [
  {
    name: 'Panda',
    description: 'Your empathetic AI counselor, equipped to support your mental health journey with expert knowledge in CBT, psychology, and therapy.',
    image: logoname1
  },
  {
    name: 'Sage Panda',
    description: 'Your wise AI guide who leads through self-reflection and mindfulness, helping you discover deeper insights and find peace.',
    image: logoname2
  },
  {
    name: 'PFF Panda',
    description: 'Your caring AI friend, always there to chat, share a giggle, lend an ear, and offer support, making every conversation uplifting and heartfelt.',
    image: logoname3
  }
];

function PandaCard() {
  return (
    <div className="panda-section">
      <h2 className="panda-section-title">❤️ For You</h2>
      <p className="panda-section-subtitle">
        Explore different Pandas with unique personalities.
      </p>
      <div className="panda-grid">
        {pandas.map((panda, index) => (
          <div key={index} className="panda-card">
            <img 
              src={panda.image} 
              alt={panda.name} 
              className="panda-image"
            />
            <h3 className="panda-name">{panda.name}</h3>
            <p className="panda-description">{panda.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PandaCard;