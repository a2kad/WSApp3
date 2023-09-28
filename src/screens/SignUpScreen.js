import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PhoneInput from "react-native-phone-number-input";
import validator from 'validator';
import Toast from 'react-native-toast-message';

const SignUpScreen = () => {
    const navigation = useNavigation();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [value, setValue] = useState("");
    const [valid, setValid] = useState(false);
    const phoneInput = useRef(null);
    const storeData = async () => {
        const checkValid = phoneInput.current?.isValidNumber(value);
        console.log('value ', value);
        setValid(checkValid ? checkValid : false);
        console.log('Valid phone number: ', valid);
        //if (checkValid === true && validator.isEmail(email)) {
            try {
                await AsyncStorage.setItem('phoneNumber', phoneNumber);
                await AsyncStorage.setItem('userEmail', email);
                console.log('phone  : ', phoneNumber);
                console.log('email  : ', email);
                navigation.navigate('Question1')
            } catch (e) {
                console.log('Async error : ', e.message)
            }
        // }
        // else {
        //     console.log("Telephone or email isn't valid")
        //     Toast.show({
        //         type: 'error',
        //         text1: 'Error',
        //         text2: "Le téléphone ou l'e-mail n'est pas valide",
        //         position: 'bottom',
        // });
        
        // }
    };

    const handleSubmit = async () => {
        if (email && password) {
            try {
                //await createUserWithEmailAndPassword(auth, email, password)
                navigation.navigate('SignUpName')
            } catch (err) {
                console.log('Got error', err.message);
                
            }
        }
    }
    return (
        <SafeAreaView className='flex-1'>
            <View className='flex-1 flex justify-around m-4' >
                <Text className='font-bold text-4xl leading-10 text-gray-700 text-center my-2'>Bienvenue sur{"\n"}Web Solidarité App</Text>
                <View className='flex justify-center mx-4'>
                    <Text className='text-2xl text-gray-500'>Renseigner votre numéro de téléphone et e-mail pour continuer</Text>
                </View>
                <View className='mx-5 '>
                    {/* <Text className='text-gray-700 my-2 p-2'>Numéro de téléphone</Text>
                <TextInput className='p-4 bg-gray-200 text-gray-700 rounded-2xl' placeholder='Téléphone'></TextInput> */}
                    <Text className='text-gray-700 my-2 p-2'>Numéro de téléphone</Text>
                    <PhoneInput
                        ref={phoneInput}
                        defaultValue={phoneNumber}
                        defaultCode='FR'
                        onChangeText={(text) => { setValue(text) }}
                        onChangeFormattedText={(text) => { setPhoneNumber(text) }}
                        codeTextStyle={{ color: '#374151' }}
                        containerStyle={{ borderRadius: 14 }}
                        textContainerStyle={{ backgroundColor: '#e5e7eb', borderRadius: 14 }}
                        textInputStyle={{ fontSize: 14 }}
                        flagButtonStyle={{}}
                        placeholder='Numéro de téléphone' />

                    <Text className='text-gray-700 my-2 p-2'>E-mail</Text>
                    <TextInput className='p-4 bg-gray-200 text-gray-700 rounded-2xl' placeholder='E-mail' 
                        value={email} onChangeText={value => setEmail(value)}></TextInput>
                    {/* <Text className='text-gray-700 my-2 p-2'>Mot de passe</Text>
                    <TextInput className='p-4 bg-gray-200 text-gray-700 rounded-2xl' placeholder='Mot de passe' secureTextEntry
                        value={password} onChangeText={value => setPassword(value)}></TextInput> */}
                </View>
                <View className="space-y-4">
                    <TouchableOpacity
                        onPress={storeData

                        }
                        //onPress={()=>navigation.navigate('Question1')}
                        className="py-3 bg-yellow-400 mx-7 rounded-xl">
                        <Text
                            className="text-xl font-bold text-center text-gray-700"
                        >
                            Continuer
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SignUpScreen