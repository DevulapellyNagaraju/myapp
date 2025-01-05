import React from 'react';
import styles from './styles';

const RouteInfoComponent = ({ routeInfo }) => {
  return (
    <div style={styles.routeInfo}>
      <h3 style={styles.routeInfoTitle}>Route Information</h3>
      <p><strong>Distance:</strong> {routeInfo.distance}</p>
      <p><strong>Duration:</strong> {routeInfo.duration}</p>
    </div>
  );
};

export default RouteInfoComponent;