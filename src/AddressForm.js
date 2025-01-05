import React from 'react';
import { useForm } from 'react-hook-form';
import { styles } from './styles';

const AddressForm = ({ setAddresses, setRouteInfo, setLoading, setError, loading }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const geocodeAddress = async (address) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
      );
      const data = await response.json();
      if (data.length > 0) {
        return {
          name: address,
          latitude: parseFloat(data[0].lat),
          longitude: parseFloat(data[0].lon),
        };
      }
      return null;
    } catch (error) {
      console.error('Error geocoding address:', error);
      return null;
    }
  };

  const onSubmit = async (data) => {
    const { address1, address2 } = data;

    if (!address1 || !address2) {
      setError('Invalid input. Please try again.');
      return;
    }

    setLoading(true);
    setError(null);

    const location1 = await geocodeAddress(address1);
    const location2 = await geocodeAddress(address2);

    if (location1 && location2) {
      setAddresses([location1, location2]);
    } else {
      setError('Invalid location. Please check the spelling and try again.');
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Starting Point</label>
        <input
          {...register('address1', { required: true })}
          placeholder="Enter Address 1"
          style={styles.input}
        />
        {errors.address1 && <span style={styles.errorText}>This field is required</span>}
      </div>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Destination</label>
        <input
          {...register('address2', { required: true })}
          placeholder="Enter Address 2"
          style={styles.input}
        />
        {errors.address2 && <span style={styles.errorText}>This field is required</span>}
      </div>
      <button type="submit" style={styles.button} disabled={loading}>
        {loading ? 'Loading...' : 'Show Route'}
      </button>
    </form>
  );
};

export default AddressForm;