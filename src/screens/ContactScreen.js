import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';



export default function ContactScreen() {
    return (
        <View className='flex-1 justify-top items-start'>
            
            <MapView style={styles.map}
                initialRegion={{
                    latitude: 49.517414080278854,
                    longitude: 0.08941804407015513,
                    latitudeDelta: 0.0307,
                    longitudeDelta: 0.0140,
                }}
            >
                <Marker 
                coordinate={{latitude: 49.517414080278854, longitude: 0.08941804407015513}}
                title='Association Web Solidarité'
                description='48-50 Rue Albert Samain, 76620, Le Havre'
                
                ></Marker>
                
            </MapView>
            <Text style={styles.contactHead}>Notre Adresse</Text>
            <Text  style={styles.contactText}>48-50 Rue Albert Samain, 76620, Le Havre</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    map: {
        
        width: '100%',
        height: '50%',
    },
    contactHead:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#404040',
        padding:20,
    },
    contactText:{
        color:'#6b7280',
        fontSize: 18,
        paddingHorizontal:20,
    }
});