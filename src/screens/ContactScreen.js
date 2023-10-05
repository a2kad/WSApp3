import { View, Text, StyleSheet, TouchableOpacity, Linking, Image } from 'react-native'
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

            <Image style={styles.map} source={require('../../assets/image/map.png')}
            />
            
            <Text style={styles.contactHead}>Nos Contacts</Text>
            <Text style={styles.contactText}>Association Web Solidarité</Text>
            <Text style={styles.contactText}>48-50 Rue Albert Samain, 76620, Le Havre</Text>
            <Text style={styles.contactText}>Site web : <Text style={styles.contactLink} onPress={()=>{Linking.openURL('https://www.asso-websolidarite.org');}}>www.asso-websolidarite.org</Text></Text>
            <TouchableOpacity onPress={handleEmail}><Text style={styles.contactText}>Email : <Text className='text-cyan-600'>contact@asso-websolidarite.org</Text></Text></TouchableOpacity>
            <Text style={styles.contactText} onPress={()=>{Linking.openURL('tel:0954149048');}}>Tél. : 09 54 14 90 48</Text>
            
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
    },
    contactLink: {
        color: '#0891b2',
        fontSize: 18,
        paddingHorizontal: 20,
        paddingTop:10
    }
});