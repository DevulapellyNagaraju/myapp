import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';
import { customIcon } from './constants';
import { styles } from './styles';

const MapComponent = ({ addresses, setRouteInfo }) => {
  const mapRef = useRef();
  const routingControlRef = useRef();

  useEffect(() => {
    if (addresses.length === 2 && mapRef.current) {
      const map = mapRef.current;

      if (routingControlRef.current) {
        map.removeControl(routingControlRef.current);
      }

      routingControlRef.current = L.Routing.control({
        waypoints: [
          L.latLng(addresses[0].latitude, addresses[0].longitude),
          L.latLng(addresses[1].latitude, addresses[1].longitude),
        ],
        routeWhileDragging: true,
        lineOptions: {
          styles: [{ color: 'green', weight: 5 }],
        },
        show: true,
        addWaypoints: false,
        draggableWaypoints: true,
        fitSelectedRoutes: true,
        router: L.Routing.osrmv1({
          serviceUrl: 'https://router.project-osrm.org/route/v1',
        }),
      }).addTo(map);

      routingControlRef.current.on('routesfound', (e) => {
        const routes = e.routes;
        const route = routes[0];
        setRouteInfo({
          distance: (route.summary.totalDistance / 1000).toFixed(2) + ' km',
          duration: (route.summary.totalTime / 60).toFixed(2) + ' mins',
        });
      });

      const bounds = L.latLngBounds([
        [addresses[0].latitude, addresses[0].longitude],
        [addresses[1].latitude, addresses[1].longitude],
      ]);
      map.fitBounds(bounds);
    }
  }, [addresses, setRouteInfo]);

  return (
    <MapContainer
      center={[10, 40]}
      zoom={2}
      style={styles.map}
      ref={mapRef}
    >
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="OpenStreetMap">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Satellite (Google)">
          <TileLayer
            url="https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
            attribution='&copy; Google'
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Satellite with Labels (Google)">
          <TileLayer
            url="https://mt1.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}"
            attribution='&copy; Google'
          />
        </LayersControl.BaseLayer>
      </LayersControl>

      {addresses.map((address, index) => (
        <Marker
          key={index}
          position={[address.latitude, address.longitude]}
          icon={customIcon}
        >
          <Popup>
            <div style={styles.popup}>
              <div style={styles.popupTitle}>{address.name}</div>
              <div>Lat: {address.latitude.toFixed(4)}, Lng: {address.longitude.toFixed(4)}</div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;