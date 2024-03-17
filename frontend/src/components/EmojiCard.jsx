import React, { useState, useEffect } from 'react';

const emojis = ['😫', '😃', '😴', '🤔', '😊'];

const EmojiCard = () => {
  const [currentEmojiIndex, setCurrentEmojiIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {

      const interval = setInterval(() => {
        setCurrentEmojiIndex((prevIndex) => (prevIndex + 1) % emojis.length);
      }, 5000); 

      return () => clearInterval(interval);
    }, 10000); 

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="w-full flex flex-col items-center justify-center p-8 my-4 rounded-lg hover:scale-105 duration-300">
      <span className="text-9xl">{emojis[currentEmojiIndex]}</span>
    </div>
  );
};

export default EmojiCard;
