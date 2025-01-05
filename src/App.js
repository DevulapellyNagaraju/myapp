import React, { useState } from 'react';
import AddressForm from './AddressForm';
import MapComponent from './MapComponent';
import { styles } from './styles';

const App = () => {
  const [addresses, setAddresses] = useState([]);
  const [routeInfo, setRouteInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        <img 
          src='https://freepngimg.com/download/united_states/76079-google-computer-icons-states-maps-united-location.png' 
          style={styles.titleIcon} 
          alt="Map Icon" 
        />
        MyRouteFinder:
      </h1>
      <p style={styles.title2}>Explore.Discover.Arrive</p>

      <AddressForm 
        setAddresses={setAddresses} 
        setRouteInfo={setRouteInfo} 
        setLoading={setLoading} 
        setError={setError} 
        loading={loading}
      />

      {error && (
        <div style={styles.error}>
          <span style={styles.errorIcon}>⚠️</span>
          <span>{error}</span>
        </div>
      )}

      {routeInfo && (
        <div style={styles.routeInfo}>
          <h3 style={styles.routeInfoTitle}>Route Information</h3>
          <p><strong>Distance:</strong> {routeInfo.distance}</p>
          <p><strong>Duration:</strong> {routeInfo.duration}</p>
        </div>
      )}

      <MapComponent addresses={addresses} setRouteInfo={setRouteInfo} />
    </div>
  );
};

export default App;
