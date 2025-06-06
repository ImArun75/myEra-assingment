import React, { useState } from 'react';
import Canvas from './components/Canvas';
import StickerButton from './components/StickerButton';
import './App.css';

const App = () => {
  const [stickers, setStickers] = useState([]);

  // Add a new sticker with a default position, snapped to 40px grid
  const addSticker = (imageSrc) => {
    const newSticker = {
      id: Date.now(), // Unique ID
      src: imageSrc,
      x: Math.round(50 / 40) * 40, // Snap to 40px grid
      y: Math.round(50 / 40) * 40,
    };
    setStickers([...stickers, newSticker]);
  };

  // Update sticker position after dragging, snapping to 40px grid
  const updateStickerPosition = (id, x, y) => {
    setStickers(
      stickers.map((sticker) =>
        sticker.id === id
          ? {
              ...sticker,
              x: Math.round(x / 40) * 40,
              y: Math.round(y / 40) * 40,
            }
          : sticker
      )
    );
  };

  // Delete sticker on double-click
  const deleteSticker = (id) => {
    setStickers(stickers.filter((sticker) => sticker.id !== id));
  };

  return (
    <div className="app">
      <h1>Sticker Canvas</h1>
      <div className="container">
        <div className="buttons">
          <StickerButton
            imageSrc="/stickers/sticker1.png"
            onClick={() => addSticker('/stickers/sticker1.png')}
          />
          <StickerButton
            imageSrc="/stickers/sticker2.png"
            onClick={() => addSticker('/stickers/sticker2.png')}
          />
          <StickerButton
            imageSrc="/stickers/sticker3.png"
            onClick={() => addSticker('/stickers/sticker3.png')}
          />
          <StickerButton
            imageSrc="/stickers/sticker4.png"
            onClick={() => addSticker('/stickers/sticker4.png')}
          />
          
        </div>
        <Canvas
          stickers={stickers}
          updateStickerPosition={updateStickerPosition}
          deleteSticker={deleteSticker}
        />
      </div>
    </div>
  );
};

export default App;