import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../config/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { LastCounter } from '../../features/counter/LastCounter';

import Checkbox from 'expo-checkbox';
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../../features/counter/counterSlice'

export default function Question11Screen() {
    const navigation = useNavigation();
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    const [buttonDis, setButtonDis] = useState(false)
    const [isChecked1, setChecked1] = useState(false);
    const [isChecked2, setChecked2] = useState(false);
    const [isChecked3, setChecked3] = useState(false);
    const [isChecked4, setChecked4] = useState(false);
    const [isChecked5, setChecked5] = useState(false);
    const [isChecked6, setChecked6] = useState(false);

    const checkResult = () => {
        setButtonDis(true);
        if (isChecked1 && isChecked2 && isChecked4 && isChecked5){
            dispatch(increment());
            console.log('Checkbox +1')
        }
        if (count <= 5) {
            navigation.navigate('ResultatFormation');
            console.log('Go formation. Count : ', count)
        } else {
            navigation.navigate('ResultatProduits');
            console.log('Go produits. Count : ', count)
        }

    }

    const getData = async () => {
        try {
            const email = await AsyncStorage.getItem('userEmail');
            const password = await AsyncStorage.getItem('userPass');
            console.log('Login : ', email)
            console.log('Pass : ', password)
            await createUserWithEmailAndPassword(auth, email, password);

        } catch (e) {
            console.log('Read async data error : ', e.message)
        }
    };

    return (
        <SafeAreaView className='flex-1 justify-around'>
            <View className='flex justify-top items-center m-6'>
                <View className='py-6'>
                    <Text className='font-bold text-4xl leading-10 text-gray-700 text-center py-4'>Question 11/11</Text>
                </View>
                <View className='flex justify-center mx-2'>
                    <Text className='text-justify text-xl text-gray-500 mb-5'>Quelles sont les navigateurs web les plus connus? (4 réponses) </Text>

                    <View className='flex-row'>
                        <Checkbox
                            style={{ margin: 20 }}
                            value={isChecked1}
                            onValueChange={setChecked1}
                            color={isChecked1 ? '#374151' : undefined}
                        />
                        <Text className='text-justify text-xl text-gray-500 my-3.5'>Google Chrome</Text>
                    </View>

                    <View className='flex-row'>
                        <Checkbox
                            style={{ margin: 20 }}
                            value={isChecked2}
                            onValueChange={setChecked2}
                            color={isChecked2 ? '#374151' : undefined}
                        />
                        <Text className='text-justify text-xl text-gray-500 my-3.5'>Firefox</Text>
                    </View>

                    <View className='flex-row'>
                        <Checkbox
                            style={{ margin: 20 }}
                            value={isChecked3}
                            onValueChange={setChecked3}
                            color={isChecked3 ? '#374151' : undefined}
                        />
                        <Text className='text-justify text-xl text-gray-500 my-3.5'>Opera</Text>
                    </View>

                    <View className='flex-row'>
                        <Checkbox
                            style={{ margin: 20 }}
                            value={isChecked4}
                            onValueChange={setChecked4}
                            color={isChecked4 ? '#374151' : undefined}
                        />
                        <Text className='text-justify text-xl text-gray-500 my-3.5'>Safari</Text>
                    </View>

                    <View className='flex-row'>
                        <Checkbox
                            style={{ margin: 20 }}
                            value={isChecked5}
                            onValueChange={setChecked5}
                            color={isChecked5 ? '#374151' : undefined}
                        />
                        <Text className='text-justify text-xl text-gray-500 my-3.5'>Microsoft Edge</Text>
                    </View>

                    <View className='flex-row'>
                        <Checkbox
                            style={{ margin: 20 }}
                            value={isChecked6}
                            onValueChange={setChecked6}
                            color={isChecked6 ? '#374151' : undefined}
                        />
                        <Text className='text-justify text-xl text-gray-500 my-3.5'>SeaMonkey</Text>
                    </View>

                </View>
            </View>

            <View className='mb-10 items-center'>
                <TouchableOpacity
                    onPress={checkResult}
                    className="py-3 bg-yellow-400 mx-7 rounded-xl w-60"
                    disabled={buttonDis}
                    >
                    <Text
                        className="text-xl font-bold text-center text-gray-700"
                    >
                        Vérifier
                    </Text>
                </TouchableOpacity>
            </View>

            {/* <LastCounter /> */}


        </SafeAreaView>
    )
}