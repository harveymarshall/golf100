import { useEffect } from 'react';
import L, { LatLngTuple } from 'leaflet';

interface MapProps {
    locations: { name: string, latlng: LatLngTuple }[];
}


const Map: React.FC<MapProps> = ({ locations }) => {
    useEffect(() => {
        const map = L.map('map').setView([55.3781, -3.4360], 6);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        locations.forEach(location => {
            L.marker(location.latlng).addTo(map).bindPopup(location.name);
        });
    }, [locations]);

    return <div id="map" style={{ height: '100vh' }} />;
};

export default Map;

