import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import email from 'react-native-email'



export default function ContactScreen() {
    handleEmail = () => {
        const to = ['contact@asso-websolidarite.org'] // string or array of email addresses
        email(to, {
            subject: 'App Web Solidarité',
            
        }).catch(console.error)
    }
    
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
                    coordinate={{ latitude: 49.517414080278854, longitude: 0.08941804407015513 }}
                    title='Association Web Solidarité'
                    description='48-50 Rue Albert Samain, 76620, Le Havre'

                ></Marker>

            </MapView>
            <Text style={styles.contactHead}>Nos Contacts</Text>
            <Text style={styles.contactText}>48-50 Rue Albert Samain, 76620, Le Havre</Text>
            <TouchableOpacity onPress={handleEmail}><Text style={styles.contactText}>Email : <Text className='text-cyan-600'>contact@asso-websolidarite.org</Text></Text></TouchableOpacity>
            <Text style={styles.contactText} onPress={()=>{Linking.openURL('tel:0102030405');}}>Tél. : 01.02.03.04.05</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    map: {

        width: '100%',
        height: '50%',
    },
    contactHead: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#404040',
        padding: 20,
    },
    contactText: {
        color: '#6b7280',
        fontSize: 18,
        paddingHorizontal: 20,
        paddingTop:10
    }
});