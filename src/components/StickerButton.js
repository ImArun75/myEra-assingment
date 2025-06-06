import React from 'react';

const StickerButton = ({ imageSrc, onClick }) => {
  return (
    <button className="sticker-button" onClick={onClick}>
      <img src={imageSrc} alt="Sticker" width={40} height={40} />
    </button>
  );
};

export default StickerButton;