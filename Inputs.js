import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importing FontAwesome icons

const Inputs = ({ setQuery, setUnits }) => {
    const [city, setCity] = useState("");

    const handleSearchClick = () => {
        if (city !== "") setQuery({ q: city });
    };

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                setQuery({ lat: latitude, lon: longitude });
            });
        }
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                value={city}
                onChangeText={setCity}
                placeholder="Search by city..."
            />
            <Button title="Search" onPress={handleSearchClick} />
            <TouchableOpacity onPress={handleLocationClick}>
                <Icon name="map-marker" size={30} />
            </TouchableOpacity>
            <View style={styles.unitButtons}>
                <Button title="°C" onPress={() => setUnits("metric")} />
                <Button title="°F" onPress={() => setUnits("imperial")} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
    },
    unitButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '30%',
    },
});

export default Inputs;