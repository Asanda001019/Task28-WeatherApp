import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FaThermometerEmpty } from 'react-icons/fa';
import { BiSolidDropletHalf } from 'react-icons/bi';
import { FiWind } from 'react-icons/fi';
import { GiSunrise, GiSunset } from 'react-icons/gi';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

const Temp = ({ weather: { details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like } }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.details}>{details}</Text>
            <Image source={{ uri: icon }} style={styles.icon} />
            <Text style={styles.temp}>{`${temp.toFixed()}°`}</Text>
            <View style={styles.detailsContainer}>
                <Detail icon={FaThermometerEmpty} title="Real Feel" value={`${feels_like.toFixed()}°`} />
                <Detail icon={BiSolidDropletHalf} title="Humidity" value={`${humidity.toFixed()}%`} />
                <Detail icon={FiWind} title="Wind" value={`${speed.toFixed()} km/h`} />
            </View>
            <View style={styles.horizontalDetails}>
                <Detail icon={GiSunrise} title="Sunrise" value={sunrise} />
                <Detail icon={GiSunset} title="Sunset" value={sunset} />
                <Detail icon={MdKeyboardArrowUp} title="High" value={`${temp_max.toFixed()}°`} />
                <Detail icon={MdKeyboardArrowDown} title="Low" value={`${temp_min.toFixed()}°`} />
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