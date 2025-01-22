import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherCard = ({ weatherData, unit }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{weatherData.name}</Text>
      <Text style={styles.temp}>{Math.round(weatherData.main.temp)}°{unit === 'metric' ? 'C' : 'F'}</Text>
      <Text>Humidity: {weatherData.main.humidity}%</Text>
      <Text>Wind Speed: {weatherData.wind.speed} m/s</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: '#E0F2FE',
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  temp: {
    fontSize: 32,
  },
});

export default WeatherCard;