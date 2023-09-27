import { View, Text, ScrollView, TouchableHighlight, Image, Dimensions } from 'react-native'
import React from 'react'

var {width, height} = Dimensions.get('window')

export default function FormationList() {
    return (
        <View className='my-6'>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                
                    <View className="space-y-1 mr-4 bg-gray-200 p-6 items-center">
                        <Image 
                        source={require('../../assets/image/formation/windows.png')}
                        style={{width: 120, height: 120, alignItems:'center'}}
                        />
                        <Text  style={{width: 150}}  className='text-center pt-6 text-lg'>Environnement Windows</Text>
                    </View>
                    
                    <View className="space-y-1 mr-4 bg-gray-200 p-6 items-center">
                        <Image 
                        source={require('../../assets/image/formation/ubuntu.png')}
                        style={{width: 120, height: 120, alignItems:'center'}}
                        />
                        <Text style={{width: 150}} className='text-center pt-6 text-lg'>Environnement Ubuntu</Text>
                    </View>

                    <View className="space-y-1 mr-4 bg-gray-200 p-6 items-center">
                        <Image 
                        source={require('../../assets/image/formation/mail.png')}
                        style={{width: 120, height: 120, alignItems:'center'}}
                        />
                        <Text style={{width: 150}} className='text-center pt-6 text-lg'>Messagerier</Text>
                    </View>

                    <View className="space-y-1 mr-4 bg-gray-200 p-6 items-center">
                        <Image 
                        source={require('../../assets/image/formation/internet-security.png')}
                        style={{width: 120, height: 120, alignItems:'center'}}
                        />
                        <Text style={{width: 150}} className='text-center pt-6 text-lg'>Internet & Sécurité Informatique</Text>
                    </View>

                    <View className="space-y-1 mr-4 bg-gray-200 p-6 items-center">
                        <Image 
                        source={require('../../assets/image/formation/erp.png')}
                        style={{width: 120, height: 120, alignItems:'center'}}
                        />
                        <Text style={{width: 150}} className='text-center pt-6 text-lg'>Logiciels & Applications</Text>
                    </View>

                    <View className="space-y-1 mr-4 bg-gray-200 p-6 items-center">
                        <Image 
                        source={require('../../assets/image/formation/blogger.png')}
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