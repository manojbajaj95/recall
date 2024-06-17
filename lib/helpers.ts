export const getCountryCode = async () => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    return data.country;
  } catch (error) {
    console.error('Unable to get country code:', error);
    return "US"
  }
}