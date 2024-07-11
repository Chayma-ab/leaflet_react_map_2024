import React from 'react';
import { useMap } from 'react-leaflet';
import leafletImage from 'leaflet-image';

const ExportButton = () => {
  const map = useMap();

  const exportMap = () => {
    leafletImage(map, function(err, canvas) {
      if (err) {
        console.error('Error exporting map', err);
        return;
      }
      const link = document.createElement('a');
      link.href = canvas.toDataURL();
      link.download = 'map.png';
      link.click();
    });
  };

  return (
    <button onClick={exportMap} style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 1000 }}>
      Export Map
    </button>
  );
};

export default ExportButton;
