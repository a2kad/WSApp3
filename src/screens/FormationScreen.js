import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import FormationList from './FormationList';


export default function FormationScreen() {
    return (
        <View style={styles.container}>

            <Image style={styles.imgTop} source={require('../../assets/image/formation-bg.jpg')} />
            <View style={styles.formationBox}>
                <Text style={styles.formationBoxText} >Nos Ateliers Numériques</Text>
                
                    <FormationList />
                
                
            </View>

        </View>
    )
}
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: "#fff",

            justifyContent: 'space-between',
        },
        imgTop: {
            flex: 0.4,
            width: "100%",
            justifyContent: 'center',
            alignItems: "center",
        },
        formationBox: {
            flex: 0.6,
            justifyContent: 'space-around',
            margin: 20,
        },
        formationBoxText: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#404040',
        },
        formationList: {
            marginTop: 20,
            fontSize: 18,
            color: '#404040',
        }
    }
)