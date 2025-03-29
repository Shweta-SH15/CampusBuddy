
import React from 'react';

const CampusMap = () => {
  // In a real app, this would be implemented with a mapping library like Mapbox, Google Maps, or Leaflet
  return (
    <div className="h-full w-full bg-blue-50 relative flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('https://i.pravatar.cc/1000?img=20')] bg-cover bg-center opacity-50"></div>
      <div className="relative z-10 text-center">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-campus-blue mb-2">Map Placeholder</h3>
          <p className="text-campus-gray">
            In a real app, this would be an interactive campus map using<br />
            Mapbox, Google Maps, or Leaflet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampusMap;
