import { View, Text, Image,TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const WellcomeScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView className='flex-1'>
            <View className='flex-1 flex justify-around m-6' >
                <Text className='font-bold text-4xl leading-10 text-gray-700 text-center'>Bienvenue sur{"\n"}Web Solidarité App</Text>
            <View className='flex-row justify-center'>
                <Image className=''
                source={require('../../assets/helping.png')}
                style={{width: 250, height: 250}} 
                    />
            </View>
            <View className="space-y-4">
                <TouchableOpacity
                    onPress={()=> navigation.navigate('SignUp')}
                    className="py-3 bg-yellow-400 mx-7 rounded-xl">
                        <Text 
                            className="text-xl font-bold text-center text-gray-700"
                        >
                            S'inscrire
                        </Text>
                </TouchableOpacity>
                <View className="flex-row justify-center">
                    <Text className="font-semibold text-gray-900 my-4">Vous avez déjà un compte ? </Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                        <Text className="font-semibold text-yellow-500 my-4"> Se connecter</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
        </SafeAreaView>
    )
}

export default WellcomeScreen