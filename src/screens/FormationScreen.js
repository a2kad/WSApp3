import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";


export default function FormationScreen() {
    return (
        <View style={styles.container}>

            <ImageBackground style={styles.imgBackground} source={require('../../assets/image/formation-bg.jpg')}>

                <LinearGradient
                    colors={["#333", 'transparent']}
                    start={[1, 1]}
                    end={[0,0]}
                    style={styles.linearGradient}
                >
                    <Text style={styles.text} >Nos Ateliers Numériques</Text>
                </LinearGradient>
            </ImageBackground>

        </View>
    )
}
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: 'space-between',
        },
        imgBackground: {
            flex: 0.4,
            width: "100%",
            alignItems: "center",
        },

        linearGradient: {
            width: '100%',
            height: '100%',
            opacity: 0.7,
            justifyContent: 'center',
            alignItems: 'center'
        },
        text: {
            color: '#fff',
            fontSize: 40,
            backgroundColor:'#000',
            padding:5,
            opacity: 1,
            fontWeight: 'bold',
            textAlign: 'center'
        }
    }
)