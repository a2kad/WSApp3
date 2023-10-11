import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react'


export default function CommandeScreen({ route, navigation }) {
    const { name, img } = route.params;
    
    return (
        <View style={styles.container}>
        <Text style={styles.head}>Vous êtes intéressé</Text>
            <Text style={styles.produitsList}> {name}</Text>
            
            <TextInput className='p-4 bg-gray-200 text-gray-700 rounded-2xl' placeholder='Prènom'></TextInput>
            
        </View>
    )
}
const styles = StyleSheet.create(
    {
        head:{
            fontSize: 24,
            fontWeight: 'bold',
            color: '#404040',
            margin:20
        },
        produitsList: {
            
            fontSize: 18,
            color: '#404040',
            lineHeight:30,
            marginHorizontal:20
        }
    })