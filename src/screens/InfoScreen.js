import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth, usersDb } from '../config/firebase';
import { getDoc, getDocs } from 'firebase/firestore';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function InfoSreen() {
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [count, setCount] = useState(0)

    useEffect(()=>{
        getInfo()
    },[]);

const getInfo = async () => {
        try {
            const infoUser = await getDocs(usersDb)
            console.log(infoUser)
            infoUser.forEach((doc) => {
                console.log(doc.data())
                setEmail(doc.data().email)
                setPhone(doc.data().phone)
                setCount(doc.data().count)
            })
        } catch (e) {
            console.log('getInfo error : ', e.message)
        }
    }
    return (
        <View style={styles.container}>
            <View>
            <Text style={styles.textInput}>E-mail</Text>
                <TextInput style={styles.fontSize} className='p-5 bg-gray-200 text-gray-700 rounded-2xl ' value={email} onChangeText={value => { setEmail(value) }} />
                <Text style={styles.textInput}>Numéro de Téléphone</Text>
                <TextInput style={styles.fontSize} className='p-5 bg-gray-200 text-gray-700 rounded-2xl ' value={phone} onChangeText={value => { setPhone(value) }} />
                <Text style={styles.textInput}>Count</Text>
                <TextInput style={styles.fontSize} className='p-5 bg-gray-200 text-gray-700 rounded-2xl ' value={count} onChangeText={value => { setCount(value) }} />
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
        marginTop:20
    },
    fieldInput:{

    }
})