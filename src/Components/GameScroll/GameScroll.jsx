import React from 'react';
import './GameScroll.css';

const games = [
  'FIFA 23', 'Call of Duty', 'Fortnite', 'Valorant', 'Minecraft', 'Rocket League', 'Apex Legends', 'Tekken 7', 'Mortal Kombat', 'PUBG', 'Overwatch', 'Counter-Strike', 'League of Legends', 'Dota 2', 'Among Us'
];

const GameScroll = () => {
  return (
    <div className="gamescroll-marquee-container">
      <div className="gamescroll-marquee">
        <div className="gamescroll-marquee-content">
          {games.concat(games).map((game, idx) => (
            <span className="game-name" key={idx}>{game}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameScroll;