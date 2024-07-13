const { hostname } = window.location;

const baseUrl = (hostname === 'localhost' || hostname === '127.0.0.1') 
    ? "http://localhost:8000" 
    : "";

export default baseUrl;