import { LatLngTuple } from 'leaflet';
import Map from '../components/Map';

const Home = () => {
    const locations = [
    { name: 'London', latlng: [51.5074, -0.1278] as LatLngTuple },
    { name: 'Manchester', latlng: [53.4839, -2.2446] as LatLngTuple},
    // Add more locations as needed
];

    return (
        <div>
            <h1>UK Map</h1>
            <Map locations={locations} />
        </div>
    );
};

export default Home;
