import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { signOut, updateProfile } from 'firebase/auth'
import { auth } from '../config/firebase'
import useAuth from '../hooks/useAuth'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import FormationList from './FormationList'
import ProductList from './ProductList'

export default function HomeScreen({ navigation }) {
    const { user } = useAuth();
    return (
        <SafeAreaProvider style={styles.container}>
            <ScrollView>
                <View style={styles.formationsHead}>
                    <Text style={styles.formationsHeadText} >
                        Nos formations
                    </Text>
                    <FormationList />
                    <Text>
                    </Text>
                </View>
                <View style={styles.productsHead}>
                    <Text style={styles.productsHeadText} >
                        Nos produits
                    </Text>
                    <ProductList />
                </View>
            </ScrollView>
        </SafeAreaProvider>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
    },
    formationsHead: {
        flex: 0.5,
        flexDirection: 'column',
        margin: 10
    },
    formationsHeadText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#404040',
    },
    productsHead: {
        flex: 0.5,
        flexDirection: 'column',
        margin: 10
    },
    productsHeadText: {
        marginTop:-30,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#404040',
    }

});
