import { View, Text, ScrollView, Image, Dimensions, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

var { width, height } = Dimensions.get('window')

export default function FormationList() {
    const navigation = useNavigation();
    return (
        <View className='my-6'>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >

                <View className="space-y-1 mr-4 bg-gray-200 p-6 justify-between">
                    <TouchableOpacity  className="items-center" onPress={() => { Linking.openURL('https://www.asso-websolidarite.org/qui_sommes_nous.html'); }}>
                        <Image
                            source={require('../../assets/image/formation/windows.png')}
                            style={{ width: 120, height: 120, alignItems: 'center' }}
                        />
                        <Text style={{ width: 150 }} className='text-center pt-6 text-lg'>Environnement Windows</Text>
                    </TouchableOpacity>
                </View>

                <View className="space-y-1 mr-4 bg-gray-200 p-6 justify-between">
                    <TouchableOpacity className="items-center" onPress={() => { Linking.openURL('https://www.asso-websolidarite.org/qui_sommes_nous.html'); }}>
                        <Image
                            source={require('../../assets/image/formation/linux.png')}
                            style={{ width: 120, height: 120, alignItems: 'center' }}
                        />
                        <Text style={{ width: 150 }} className='text-center pt-6 text-lg'>Environnement Ubuntu</Text>
                    </TouchableOpacity>
                </View>

                <View className="space-y-1 mr-4 bg-gray-200 p-6 justify-between">
                    <TouchableOpacity className="items-center" onPress={() => { Linking.openURL('https://www.asso-websolidarite.org/qui_sommes_nous.html'); }}>
                        <Image
                            source={require('../../assets/image/formation/paper-plane.png')}
                            style={{ width: 120, height: 120, alignItems: 'center' }}
                        />
                        <Text style={{ width: 150 }} className='text-center pt-6 text-lg'>Messagerie</Text>
                    </TouchableOpacity>
                </View>

                <View className="space-y-1 mr-4 bg-gray-200 p-6 justify-between">
                    <TouchableOpacity className="items-center" onPress={() => { Linking.openURL('https://www.asso-websolidarite.org/qui_sommes_nous.html'); }}>
                        <Image
                            source={require('../../assets/image/formation/padlock.png')}
                            style={{ width: 120, height: 120, alignItems: 'center' }}
                        />
                        <Text style={{ width: 150 }} className='text-center pt-6 text-lg'>Internet & Sécurité Informatique</Text>
                    </TouchableOpacity>
                </View>

                <View className="space-y-1 mr-4 bg-gray-200 p-6 justify-between">
                    <TouchableOpacity className="items-center" onPress={() => { Linking.openURL('https://www.asso-websolidarite.org/qui_sommes_nous.html'); }}>
                        <Image
                            source={require('../../assets/image/formation/programming.png')}
                            style={{ width: 120, height: 120, alignItems: 'center' }}
                        />
                        <Text style={{ width: 150 }} className='text-center pt-6 text-lg'>Logiciels & Applications</Text>
                    </TouchableOpacity>
                </View>

                <View className="space-y-1 mr-4 bg-gray-200 p-6 justify-between">
                    <TouchableOpacity className="items-center" onPress={() => { Linking.openURL('https://www.asso-websolidarite.org/qui_sommes_nous.html'); }}>
                        <Image
                            source={require('../../assets/image/formation/settings.png')}
                            style={{ width: 120, height: 120, alignItems: 'center' }}
                        />
                        <Text style={{ width: 150 }} className='text-center pt-6 text-lg'>E-Administration</Text>
                    </TouchableOpacity>
                </View>

                <View className="space-y-1 mr-4 bg-gray-200 p-6 justify-between">
                    <TouchableOpacity className="items-center" onPress={() => { Linking.openURL('https://www.asso-websolidarite.org/qui_sommes_nous.html'); }}>
                        <Image
                            source={require('../../assets/image/formation/medical-team.png')}
                            style={{ width: 120, height: 120, alignItems: 'center' }}
                        />
                        <Text style={{ width: 150 }} className='text-center pt-6 text-lg'>E-Sante</Text>
                    </TouchableOpacity>
                </View>


            </ScrollView>
        </View>
    )
}