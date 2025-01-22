import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LocationSelector = ({ setLocations, fetchWeather }) => {
  const [location, setLocation] = useState('');

  const addLocation = async () => {
    const savedLocations = await AsyncStorage.getItem('locations');
    const locationsArray = savedLocations ? JSON.parse(savedLocations) : [];
    if (!locationsArray.includes(location)) {
      locationsArray.push(location);
      await AsyncStorage.setItem('locations', JSON.stringify(locationsArray));
      setLocations(locationsArray);
      fetchWeather(location); // Fetch weather for the newly added location
      setLocation('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add Location"
        value={location}
        onChangeText={setLocation}
      />
      <Button title="Add" onPress={addLocation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#4F46E5',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
});

export default LocationSelector;