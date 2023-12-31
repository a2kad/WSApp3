import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Counter } from '../../features/counter/Counter';

export default function Question1Screen() {
    const navigation = useNavigation();
    return (
        <SafeAreaView className='flex-1'>
            <View className='flex-1 justify-top items-center m-6'>
                <View className='py-6'>
                    <Text className='font-bold text-4xl leading-10 text-gray-700 text-center py-4'>Question 1/12</Text>
                </View>
                <View className='flex justify-center mx-1'>
                    <Text className='text-xl text-gray-500'>Avez-vous de l'expérience dans la création et l'organisation de dossiers ainsi que de sous-dossiers sur un ordinateur ? </Text>
                </View>
            </View>
            <View className='flex-row justify-around mb-11'>

                <Counter next='Question2' />

                <TouchableOpacity
                    onPress={() => navigation.navigate('Question2')}
                    className="py-3 px-7 bg-yellow-400 mx-7 rounded-xl">
                    <Text className="text-xl font-bold text-center text-gray-700">Non</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}