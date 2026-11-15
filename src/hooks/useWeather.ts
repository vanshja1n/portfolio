import { useState, useEffect } from 'react';

interface WeatherData {
  temperature: number;
  condition: string;
  city: string;
  loading: boolean;
  error: boolean;
}

const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes in milliseconds
const IP_CACHE_DURATION = 60 * 60 * 1000; // 1 hour for IP location

// Fallback to Delhi if IP detection fails
const FALLBACK_LOCATION = {
  city: 'DELHI',
  lat: 28.6139,
  lon: 77.2090
};

const mapWeatherCodeToCondition = (code: number): string => {
  // Open-Meteo weather codes: https://open-meteo.com/en/docs
  if (code === 0) return 'CLEAR';
  if (code >= 1 && code <= 3) return 'CLOUDY';
  if (code >= 45 && code <= 48) return 'FOG';
  if (code >= 51 && code <= 67) return 'RAIN';
  if (code >= 71 && code <= 77) return 'SNOW';
  if (code >= 80 && code <= 82) return 'RAIN SHOWERS';
  if (code >= 85 && code <= 86) return 'SNOW SHOWERS';
  if (code >= 95 && code <= 99) return 'THUNDERSTORM';
  return 'CLEAR';
};

export const useWeather = () => {
  const [weather, setWeather] = useState<WeatherData>({
    temperature: 0,
    condition: 'LOADING',
    city: '',
    loading: true,
    error: false,
  });

  useEffect(() => {
    let isMounted = true;
    let timeoutId: NodeJS.Timeout;

    const fetchWeather = async (lat: number, lon: number, city: string) => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
        );
        
        if (!response.ok) {
          throw new Error('Weather API request failed');
        }

        const data = await response.json();
        
        if (isMounted) {
          const temperature = Math.round(data.current_weather.temperature);
          const condition = mapWeatherCodeToCondition(data.current_weather.weathercode);
          
          setWeather({
            temperature,
            condition,
            city,
            loading: false,
            error: false,
          });

          // Cache the result
          localStorage.setItem('weatherCache', JSON.stringify({
            data: { temperature, condition, city },
            timestamp: Date.now(),
          }));
        }
      } catch (error) {
        console.error('Weather fetch error:', error);
        if (isMounted) {
          // Try to show cached weather if available
          const cachedWeather = localStorage.getItem('weatherCache');
          if (cachedWeather) {
            const { data } = JSON.parse(cachedWeather);
            setWeather({
              temperature: data.temperature,
              condition: data.condition,
              city: data.city || FALLBACK_LOCATION.city,
              loading: false,
              error: true,
            });
          } else {
            setWeather({
              temperature: 0,
              condition: '--',
              city: FALLBACK_LOCATION.city,
              loading: false,
              error: true,
            });
          }
        }
      }
    };

    const getLocationFromIP = async (): Promise<{ city: string; lat: number; lon: number }> => {
      try {
        // Check IP cache first
        const cachedIP = localStorage.getItem('ipLocationCache');
        if (cachedIP) {
          const { data, timestamp } = JSON.parse(cachedIP);
          if (Date.now() - timestamp < IP_CACHE_DURATION) {
            return data;
          }
        }

        // Use ipwho.is for IP geolocation (free, no API key required)
        const response = await fetch('https://ipwho.is/');
        
        if (!response.ok) {
          throw new Error('IP geolocation API request failed');
        }

        const data = await response.json();
        
        if (data.success && data.city) {
          const locationData = {
            city: data.city.toUpperCase(),
            lat: data.latitude,
            lon: data.longitude
          };
          
          // Cache the IP location
          localStorage.setItem('ipLocationCache', JSON.stringify({
            data: locationData,
            timestamp: Date.now(),
          }));
          
          return locationData;
        } else {
          throw new Error('Invalid IP geolocation response');
        }
      } catch (error) {
        console.error('IP geolocation error:', error);
        // Return fallback location on any error
        return FALLBACK_LOCATION;
      }
    };

    const getLocationAndFetchWeather = async () => {
      // Check weather cache first
      const cachedWeather = localStorage.getItem('weatherCache');
      if (cachedWeather) {
        const { data, timestamp } = JSON.parse(cachedWeather);
        if (Date.now() - timestamp < CACHE_DURATION) {
          if (isMounted) {
            setWeather({
              temperature: data.temperature,
              condition: data.condition,
              city: data.city || FALLBACK_LOCATION.city,
              loading: false,
              error: false,
            });
          }
          return;
        }
      }

      // Get location from IP
      const location = await getLocationFromIP();
      fetchWeather(location.lat, location.lon, location.city);
    };

    // Small delay to not block initial render
    timeoutId = setTimeout(() => {
      getLocationAndFetchWeather();
    }, 100);

    return () => {
      isMounted = false;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return weather;
};
