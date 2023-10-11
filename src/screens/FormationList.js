import { View, Text, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

var {width, height} = Dimensions.get('window')

export default function FormationList() {
    const navigation = useNavigation();
    return (
        <View className='my-6'>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                <TouchableOpacity onPress={()=>navigation.navigate('Commande',{name: 'Environnement Windows', img:'windows.png'})}>
                    <View className="space-y-1 mr-4 bg-gray-200 p-6 items-center">
                        <Image 
                        source={require('../../assets/image/formation/windows.png')}
                        style={{width: 120, height: 120, alignItems:'center'}}
                        />
                        <Text  style={{width: 150}}  className='text-center pt-6 text-lg'>Environnement Windows</Text>
                    </View>
                </TouchableOpacity>

                    <View className="space-y-1 mr-4 bg-gray-200 p-6 items-center">
                        <Image 
                        source={require('../../assets/image/formation/linux.png')}
                        style={{width: 120, height: 120, alignItems:'center'}}
                        />
                        <Text style={{width: 150}} className='text-center pt-6 text-lg'>Environnement Ubuntu</Text>
                    </View>

                    <View className="space-y-1 mr-4 bg-gray-200 p-6 items-center">
                        <Image 
                        source={require('../../assets/image/formation/paper-plane.png')}
                        style={{width: 120, height: 120, alignItems:'center'}}
                        />
                        <Text style={{width: 150}} className='text-center pt-6 text-lg'>Messagerier</Text>
                    </View>

                    <View className="space-y-1 mr-4 bg-gray-200 p-6 items-center">
                        <Image 
                        source={require('../../assets/image/formation/padlock.png')}
                        style={{width: 120, height: 120, alignItems:'center'}}
                        />
                        <Text style={{width: 150}} className='text-center pt-6 text-lg'>Internet & Sécurité Informatique</Text>
                    </View>

                    <View className="space-y-1 mr-4 bg-gray-200 p-6 items-center">
                        <Image 
                        source={require('../../assets/image/formation/programming.png')}
                        style={{width: 120, height: 120, alignItems:'center'}}
                        />
                        <Text style={{width: 150}} className='text-center pt-6 text-lg'>Logiciels & Applications</Text>
                    </View>

                    <View className="space-y-1 mr-4 bg-gray-200 p-6 items-center">
                        <Image 
                        source={require('../../assets/image/formation/settings.png')}
                        style={{width: 120, height: 120, alignItems:'center'}}
                        />
                        <Text style={{width: 150}} className='text-center pt-6 text-lg'>E-Administration</Text>
                    </View>

                    <View className="space-y-1 mr-4 bg-gray-200 p-6 items-center">
                        <Image 
                        source={require('../../assets/image/formation/medical-team.png')}
                        style={{width: 120, height: 120, alignItems:'center'}}
                        />
                        <Text style={{width: 150}} className='text-center pt-6 text-lg'>E-Sante</Text>
                    </View>
                
            </ScrollView>
        </View>
    )
}