import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // For Real Feel
import IconDroplet from 'react-native-vector-icons/MaterialCommunityIcons'; // For Humidity
import IconWind from 'react-native-vector-icons/FontAwesome5'; // For Wind
import IconSunrise from 'react-native-vector-icons/FontAwesome'; // For Sunrise
import IconSunset from 'react-native-vector-icons/FontAwesome'; // For Sunset
import IconArrowUp from 'react-native-vector-icons/MaterialIcons'; // For High
import IconArrowDown from 'react-native-vector-icons/MaterialIcons'; // For Low

const Temp = ({ weather: { details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like } }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.details}>{details}</Text>
            <Image source={{ uri: icon }} style={styles.icon} />
            <Text style={styles.temp}>{`${temp.toFixed()}°`}</Text>
            <View style={styles.detailsContainer}>
                <Detail icon={Icon} title="Real Feel" value={`${feels_like.toFixed()}°`} />
                <Detail icon={IconDroplet} title="Humidity" value={`${humidity.toFixed()}%`} />
                <Detail icon={IconWind} title="Wind" value={`${speed.toFixed()} km/h`} />
            </View>
            <View style={styles.horizontalDetails}>
                <Detail icon={IconSunrise} title="Sunrise" value={sunrise} />
                <Detail icon={IconSunset} title="Sunset" value={sunset} />
                <Detail icon={IconArrowUp} title="High" value={`${temp_max.toFixed()}°`} />
                <Detail icon={IconArrowDown} title="Low" value={`${temp_min.toFixed()}°`} />
            </View>
        </View>
    );
};

const Detail = ({ icon: Icon, title, value }) => (
    <View style={styles.detail}>
        <Icon size={25} />
        <Text>{`${title}: ${value}`}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 20,
    },
    details: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    icon: {
        width: 100,
        height: 100,
    },
    temp: {
        fontSize: 48,
        fontWeight: 'bold',
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    horizontalDetails: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    detail: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default Temp;