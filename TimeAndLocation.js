import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TimeAndLocation = ({ weather: { formattedLocalTime, name, country } }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.localTime}>{formattedLocalTime}</Text>
            <Text style={styles.location}>{`${name}, ${country}`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 10,
    },
    localTime: {
        fontSize: 16,
        fontWeight: '300',
    },
    location: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default TimeAndLocation;