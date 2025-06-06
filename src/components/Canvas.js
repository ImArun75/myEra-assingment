import React, { useRef } from 'react';
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';

const Canvas = ({ stickers, updateStickerPosition, deleteSticker }) => {
  const stageRef = useRef(null);

  const handleDownload = () => {
    const uri = stageRef.current.toDataURL({ pixelRatio: 2 });
    const link = document.createElement('a');
    link.download = 'canvas.png';
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <Stage
        width={600}
        height={400}
        ref={stageRef}
        style={{ border: '2px #ccc', background: '#f9f9f9', borderRadius: '8px' }}
      >
        <Layer>
          {stickers.map((sticker) => (
            <Sticker
              key={sticker.id}
              sticker={sticker}
              updatePosition={updateStickerPosition}
              deleteSticker={deleteSticker}
            />
          ))}
        </Layer>
      </Stage>
      <button className="download-button" onClick={handleDownload}>
        Click here to Download
      </button>
    </div>
  );
};

const Sticker = ({ sticker, updatePosition, deleteSticker }) => {
  const [image] = useImage(sticker.src, 'anonymous'); // Ensures cross-origin loads

  return (
    <Image
      image={image}
      x={sticker.x}
      y={sticker.y}
      width={50}
      height={50}
      draggable
      onDragEnd={(e) =>
        updatePosition(sticker.id, e.target.x(), e.target.y())
      }
      onDblClick={() => deleteSticker(sticker.id)}
    />
  );
};

export default Canvas;
