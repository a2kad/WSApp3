import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'

export default function HomeScreen() {
    const handleLogout = async ()=>{
        await signOut(auth);
    }
    return (
        <View className='flex-1 justify-center items-center'>
            <Text>HomeScreen</Text>
            <TouchableOpacity onPress={handleLogout} className='p-2 bg-cyan-900 rounded-lg'>
                <Text className='text-white text-lg font-bold'>Se déconnecter</Text>
            </TouchableOpacity>
        </View>
    )
}