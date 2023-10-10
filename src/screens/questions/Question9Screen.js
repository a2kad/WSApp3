import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Counter } from '../../features/counter/Counter';
import { useSelector } from 'react-redux';

export default function Question9Screen() {
    const navigation = useNavigation();
    const count = useSelector(state => state.counter.value);
    return (
        <SafeAreaView className='flex-1'>
            <View className='flex-1 justify-top items-center m-6'>
                <View className='py-6'>
                    <Text className='font-bold text-4xl leading-10 text-gray-700 text-center py-4'>Question 9/11</Text>
                </View>
                <View className='flex justify-center mx-2'>
                    <Text className='text-justify text-xl text-gray-500'>Maitrisez-vous les fonctionalités sur l’application Ameli.fr? </Text>
                    
                </View>
            </View>
            <View className='flex-row justify-around mb-11'>

                <Counter next='Question10' />

                <TouchableOpacity
                    onPress={() => navigation.navigate('Question10')}
                    className="py-3 px-7 bg-yellow-400 mx-7 rounded-xl">
                    <Text className="text-xl font-bold text-center text-gray-700">Non</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}