import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Counter } from '../../features/counter/Counter';

export default function Question8Screen() {
    const navigation = useNavigation();
    return (
        <SafeAreaView className='flex-1'>
            <View className='flex-1 justify-top items-center m-6'>
                <View className='py-6'>
                    <Text className='font-bold text-4xl leading-10 text-gray-700 text-center py-4'>Question 8/11</Text>
                </View>
                <View className='flex justify-center mx-2'>
                    <Text className='text-justify text-xl text-gray-500'>Avez-vous des connaissances concernant les logiciels et systèmes d'exploitation open source et autres ?  </Text>
                    <FlatList
                        data={[
                            { key: 'LibreOffice' },
                            { key: 'Ubuntu' },
                            { key: 'Framasoft' },
                            { key: 'Word' },
                            { key: 'Excel' },
                        ]}
                        renderItem={({ item }) => <Text className='text-justify text-xl text-gray-500 p-2'>{`\u2022 ${item.key}`}</Text>}
                    />
                </View>
            </View>
            <View className='flex-row justify-around mb-11'>

                <Counter next='Question9' />

                <TouchableOpacity
                    onPress={() => navigation.navigate('Question9')}
                    className="py-3 px-7 bg-yellow-400 mx-7 rounded-xl">
                    <Text className="text-xl font-bold text-center text-gray-700">Non</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}