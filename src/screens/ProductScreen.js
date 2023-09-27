import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'

import ProductList from './ProductList';

export default function ProductScreen() {
    return (

        <View style={styles.container}>

            <Image style={styles.imgTop} source={require('../../assets/image/produits-bg.jpg')} />
            <View style={styles.produitsBox}>
                <Text style={styles.produitsBoxText} >Notre Boutique</Text>
                <Text style={styles.produitsList}>Récuperation, Reconditionnement & Vent Ordinateurs à Prix Solidaires</Text>
                <ProductList />
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
        produitsBox: {
            flex: 0.6,
            justifyContent: 'flex-start',
            margin: 20,
        },
        produitsBoxText: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#404040',
        },
        produitsList: {
            marginTop: 20,
            fontSize: 18,
            color: '#404040',
            lineHeight:30
        }
    }
)