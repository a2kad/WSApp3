import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView className='flex-1'>
            <View className='flex-1 flex justify-around m-4' >
                <Text className='font-bold text-4xl leading-10 text-gray-700 text-center my-2'>Bienvenue sur{"\n"}Web Solidarité App</Text>
                <View className='flex justify-center mx-4'>
                    <Text className='text-2xl text-gray-500'>Pour vous connecter à l'application, entrez votre email et votre mot de passe</Text>
                </View>
                <View className='mx-4 '>
                    <Text className='text-gray-700 my-2 p-2'>E-mail</Text>
                    <TextInput className='p-4 bg-gray-200 text-gray-700 rounded-2xl' ></TextInput>
                    <Text className='text-gray-700 my-2 p-2'>Mot de passe</Text>
                    <TextInput secureTextEntry className='p-4 bg-gray-200 text-gray-700 rounded-2xl' ></TextInput>

                </View>
                <View className="space-y-4">
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                        className="py-3 bg-yellow-400 mx-7 rounded-xl">
                        <Text
                            className="text-xl font-bold text-center text-gray-700"
                        >
                            Se connecter
                        </Text>
                    </TouchableOpacity>


                </View>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen