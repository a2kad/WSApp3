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
            <TouchableOpacity style={styles.mapLink}  onPress={() => { Linking.openURL('https://maps.app.goo.gl/zGXqjg9FGx5xA6U28'); }}>
                <Image style={styles.map} source={require('../../assets/image/map.png')} />
            </TouchableOpacity>
            <Text style={styles.contactHead}>Nos Contacts</Text>
            <Text style={styles.contactTextBold}>Association Web Solidarité</Text>
            <Text style={styles.contactTextBold}>Locaux (Atelier et RDV) :</Text>
            <Text style={styles.contactText}>48-50 Rue Albert Samain, 76620, Le Havre</Text>
            <Text style={styles.contactText} onPress={() => { Linking.openURL('https://www.asso-websolidarite.org'); }}>
                Site web : <Text style={styles.contactLink} >www.asso-websolidarite.org</Text>
            </Text>


            <TouchableOpacity onPress={handleEmail}><Text style={styles.contactText}>Email : <Text className='text-cyan-600'>contact@asso-websolidarite.org</Text></Text></TouchableOpacity>
            <Text style={styles.contactText} onPress={() => { Linking.openURL('tel:+33954149048'); }}>Commerces Samain-TEL : <Text style={styles.contactLink} >09 54 14 90 48</Text></Text>

        </View>
    );
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
        alignItems:'center'
    },
    mapLink: {
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
        paddingTop: 10
    },
    contactTextBold: {
        color: '#6b7280',
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        paddingTop: 10
    },
    contactLink: {
        color: '#0891b2',
        fontSize: 18,
        paddingHorizontal: 20,
        paddingTop: 10
    }
});