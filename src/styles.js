export const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Roboto, Arial, sans-serif',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (max-width: 768px)': {
      padding: '15px',
    },
    '@media (max-width: 480px)': {
      padding: '10px',
    },
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    color: '#007bff',
    marginBottom: '20px',
    fontSize: '48px',
    fontWeight: '500',
    fontFamily: 'times',
    '@media (max-width: 768px)': {
      fontSize: '36px',
      gap: '8px',
    },
    '@media (max-width: 480px)': {
      fontSize: '24px',
      gap: '5px',
      flexDirection: 'column',
      textAlign: 'center',
    },
  },
  titleIcon: {
    height: '1em',
    width: 'auto',
    verticalAlign: 'middle',
    '@media (max-width: 480px)': {
      display: 'none', // Hide the image on mobile devices
    },
  },
  title2: {
    color: '#007bff',
    marginTop: '10px',
    fontSize: '24px',
    fontFamily: 'times',
    '@media (max-width: 768px)': {
      fontSize: '18px',
    },
    '@media (max-width: 480px)': {
      fontSize: '14px',
      textAlign: 'center',
    },
  },
  form: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    width: '100%',
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    '@media (max-width: 480px)': {
      padding: '15px',
      gap: '10px',
    },
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: '500',
    color: '#333',
    fontSize: '14px',
    '@media (max-width: 480px)': {
      fontSize: '12px',
    },
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
    fontFamily: 'Roboto, Arial, sans-serif',
    transition: 'border-color 0.3s ease',
    '@media (max-width: 480px)': {
      padding: '8px',
      fontSize: '12px',
    },
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    fontFamily: 'Roboto, Arial, sans-serif',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    '@media (max-width: 480px)': {
      padding: '8px 16px',
      fontSize: '14px',
    },
    '&:hover': {
      backgroundColor: '#0056b3',
      transform: 'scale(1.05)',
    },
  },
  error: {
    backgroundColor: '#ffebee',
    color: '#c62828',
    padding: '10px 20px',
    borderRadius: '4px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    '@media (max-width: 480px)': {
      padding: '8px 15px',
      fontSize: '12px',
    },
  },
  errorIcon: {
    fontSize: '20px',
    '@media (max-width: 480px)': {
      fontSize: '16px',
    },
  },
  errorText: {
    color: '#c62828',
    fontSize: '12px',
    marginTop: '5px',
    '@media (max-width: 480px)': {
      fontSize: '10px',
    },
  },
  routeInfo: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
    '@media (max-width: 480px)': {
      padding: '15px',
    },
  },
  routeInfoTitle: {
    color: '#007bff',
    marginBottom: '10px',
    fontSize: '20px',
    fontWeight: '500',
    textAlign: 'center',
    '@media (max-width: 480px)': {
      fontSize: '16px',
    },
  },
  map: {
    height: '500px',
    width: '100%',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    '@media (max-width: 768px)': {
      height: '400px',
    },
    '@media (max-width: 480px)': {
      height: '300px',
    },
  },
  popup: {
    textAlign: 'center',
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  popupTitle: {
    fontWeight: '500',
    color: '#007bff',
    marginBottom: '5px',
    fontSize: '16px',
    '@media (max-width: 480px)': {
      fontSize: '14px',
    },
  },
};
