import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Forecast = ({ title, data }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.forecastContainer}>
                {data.map((d, index) => (
                    <View key={index} style={styles.forecastItem}>
                            <Text style={styles.forecastTitle}>{d.title}</Text>
                            <Image source={{ uri: d.icon }} style={styles.forecastIcon} />
                            <Text style={styles.forecastTemp}>{`${d.temp.toFixed()}°`}</Text>
                        </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    forecastContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    forecastItem: {
        alignItems: 'center',
    },
    forecastTitle: {
        fontSize: 16,
    },
    forecastIcon: {
        width: 50,
        height: 50,
    },
    forecastTemp: {
        fontSize: 16,
    },
});

export default Forecast;