import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Settings = ({ setUnit }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Button title="Switch to Celsius" onPress={() => setUnit('metric')} />
      <Button title="Switch to Fahrenheit" onPress={() => setUnit('imperial')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Settings;