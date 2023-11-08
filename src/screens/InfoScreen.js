import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db, usersDb, usersDbDoc } from '../config/firebase';
import { deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useAuth from '../hooks/useAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function InfoSreen() {
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [count, setCount] = useState()
    const { user } = useAuth();
    const navigation = useNavigation();
    // console.log('1 user :', user.uid)
    // const userUid = usersDb.id
    // const docRef = doc(db, "users", userUid);

    useEffect(() => {
        getInfo()
    }, []);

    const getInfo = async () => {
        try {
            const docRefId = await AsyncStorage.getItem('docRefId');
            const infoUser = await getDoc(doc(db, "users", docRefId));
            if (infoUser.data()) {
                setEmail(infoUser.data().email)
                setPhone(infoUser.data().phone)
                setCount(infoUser.data().count)
                console.log('docRefId', docRefId)
                console.log("Document data:", infoUser.data());
            } else {
                setEmail('Supprimé')
                setPhone('Supprimé')
                setCount(0)
                console.log('infoUser n\'existe pas')
            }
        } catch (e) {
            console.log('getInfo error : ', e.message)
        }
    }
    const updateInfo = async () => {
        try {
            const docRefId = await AsyncStorage.getItem('docRefId');
            await setDoc(doc(db, "users", docRefId), {
                phone: phone,
                email: email,
                count: count
            })
            console.log('Yes!')
        } catch (e) {
            console.log('Update info error : ', e.message)
        }
    }
    const del = async () => {
        try {
            const docRefId = await AsyncStorage.getItem('docRefId');
            await deleteDoc(doc(db, "users", docRefId));
            setEmail('Supprimé')
            setPhone('Supprimé')
            setCount(0)
        } catch (e) {
            console.log('Del Info error : ', e.message)
        }
    }

    const deleteInfo = async () => {

        Alert.alert('Suppression d\'informations', 'Êtes-vous sûr?', [
            {
                text: 'Annuler',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {
                text: 'OK', onPress: del
            },
        ])

    }
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.textInput}>E-mail</Text>
                <TextInput style={styles.fontSize} className='p-5 bg-gray-200 text-gray-700 rounded-2xl ' value={email} onChangeText={value => { setEmail(value) }} />
                <Text style={styles.textInput}>Numéro de Téléphone</Text>
                <TextInput style={styles.fontSize} className='p-5 bg-gray-200 text-gray-700 rounded-2xl ' value={phone} onChangeText={value => { setPhone(value) }} />
                <Text style={styles.textInput}>Count (ne change pas)</Text>
                <TextInput style={styles.fontSize} className='p-5 bg-gray-200 text-gray-700 rounded-2xl ' value={String(count) + ' / 12'} editable={false} />
            </View>
            <View>
                <Pressable onPress={updateInfo} className="py-3 bg-yellow-400 mx-7 rounded-xl my-4">
                    <Text className="text-xl font-bold text-center text-gray-700">Sauvegarder</Text>
                </Pressable>
                <Pressable onPress={deleteInfo} className="py-3 bg-red-600 mx-7 rounded-xl my-4">
                    <Text className="text-xl font-bold text-center text-gray-200">Supprimer</Text>
                </Pressable>
                <Pressable onPress={() => navigation.goBack()} className="py-3 bg-blue-600 mx-7 rounded-xl my-4">
                    <Text className="text-xl font-bold text-center text-gray-200">Retour</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'left',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    textInput: {
        marginBottom: 10,
        marginTop: 20
    },
    fieldInput: {

    }
})