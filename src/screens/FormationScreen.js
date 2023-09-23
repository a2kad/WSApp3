import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";


export default function FormationScreen() {
    return (
        <View style={styles.container}>

            <Image style={styles.imgTop} source={require('../../assets/image/formation-bg.jpg')} />
            <View style={styles.formationBox}>
                <Text style={styles.formationBoxText} >Nos Ateliers Numériques</Text>
                <ScrollView>
                    <Text style={styles.formationList}>
                        Environnement Windows
                    </Text>
                    <Text style={styles.formationList}>
                        Environnement Ubuntu
                    </Text>
                    <Text style={styles.formationList}>
                        Messagerie
                    </Text>
                    <Text style={styles.formationList}>
                        Internet & Sécurité Informatique
                    </Text>
                    <Text style={styles.formationList}>
                        Logiciels & Applications
                    </Text>
                    <Text style={styles.formationList}>
                        E-Administration
                    </Text>
                    <Text style={styles.formationList}>
                        E-Sante
                    </Text>
                </ScrollView>
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
            justifyContent: 'flex-start',
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