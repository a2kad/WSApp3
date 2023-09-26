import { View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import { signOut, updateProfile } from 'firebase/auth'
import { auth } from '../config/firebase'
import useAuth from '../hooks/useAuth'
import { SafeAreaProvider} from 'react-native-safe-area-context'

export default function HomeScreen({ navigation }) {
const {user} = useAuth();
    return (
        <SafeAreaProvider style={styles.container}>
            <View style={styles.formationsHead}>
                <Text style={styles.formationsHeadText} >
                    Nos formations {JSON.stringify(user.uid)} 
                </Text>
                <ScrollView>
                    <Text style={styles.formationList}>
                        Environnement Windows{ JSON.stringify(user.stsTokenManager)}
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
                <Text>

                </Text>
            </View>
            <View style={styles.productsHead}>
                <Text style={styles.productsHeadText} >
                    Nos products
                </Text>
            </View>
        </SafeAreaProvider>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'flex-start',
        
    },
    formationsHead: {
        flex:0.4,
        flexDirection: 'column',
        margin: 20
    },
    formationsHeadText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#404040',
    },
    productsHead: {
        flex:0.6,
        flexDirection: 'row',
        margin: 20
    },
    productsHeadText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#404040',
    },
    formationList:{
        marginTop:5
    }

});
// const handleLogout = async ()=>{
//     await signOut(auth);
// }
// const {user}  = useAuth();
// <View className='flex-1 justify-center items-center'>
//     <Text>Current user:</Text>
//     <Text className='my-2'>{user?JSON.stringify(user.email):'none'}</Text>
//     <TouchableOpacity onPress={handleLogout} className='py-3 px-7 bg-yellow-400 mx-7 rounded-xl'>
//         <Text className='text-xl font-bold text-center text-gray-700'>Se déconnecter</Text>
//     </TouchableOpacity>
// </View>