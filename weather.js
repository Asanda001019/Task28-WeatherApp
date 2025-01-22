import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import Inputs from './Inputs';
import TimeAndLocation from './TimeAndLocation';
import Temp from './Temp';
import Forecast from './Forecast';
import getFormattedWeatherData from './api';

const Weather = () => {
    const [query, setQuery] = useState({ q: 'pietermaritzburg' });
    const [units, setUnits] = useState('metric');
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);

    const getWeather = async () => {
        setLoading(true);
        const data = await getFormattedWeatherData({ ...query, units });
        setWeather(data);
        setLoading(false);
    };

    useEffect(() => {
        getWeather();
    }, [query, units]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Weather App</Text>
            <Inputs setQuery={setQuery} setUnits={setUnits} />
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <>
                    <TimeAndLocation weather={weather} />
                    <Temp weather={weather} />
                    <Forecast title="Daily Forecast" data={weather.daily} />
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
});

export default Weather;