import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { signOut, updateProfile } from 'firebase/auth'
import { auth } from '../config/firebase'
import useAuth from '../hooks/useAuth'

export default function HomeScreen({navigation}) {
    const handleLogout = async ()=>{
        await signOut(auth);
    }
    const {user}  = useAuth();
    return (
        <View className='flex-1 justify-center items-center'>
            <Text>Current user:</Text>
            <Text className='my-2'>{user?JSON.stringify(user.email):'none'}</Text>
            <TouchableOpacity onPress={handleLogout} className='py-3 px-7 bg-yellow-400 mx-7 rounded-xl'>
                <Text className='text-xl font-bold text-center text-gray-700'>Se déconnecter</Text>
            </TouchableOpacity>
            
        </View>
    )
}