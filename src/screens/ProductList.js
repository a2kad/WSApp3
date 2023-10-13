import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ProductList() {
    return (
        <View className='my-6'>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >

                <View className="space-y-1 mr-4 bg-gray-200 p-6 justify-between">
                    <TouchableOpacity className="items-center" onPress={() => { Linking.openURL('https://www.asso-websolidarite.org/boutique_solidaire.html'); }}>
                        <Image
                            source={require('../../assets/image/products/computer.png')}
                            style={{ width: 120, height: 120, alignItems: 'center' }}
                        />
                        <Text style={{ width: 150 }} className='text-center pt-6 text-lg'>Ordinateurs Reconditionnés</Text>
                    </TouchableOpacity>
                </View>

                <View className="space-y-1 mr-4 bg-gray-200 p-6 justify-between">
                    <TouchableOpacity className="items-center" onPress={() => { Linking.openURL('https://www.asso-websolidarite.org/boutique_solidaire.html'); }}>
                        <Image
                            source={require('../../assets/image/products/laptop.png')}
                            style={{ width: 120, height: 120, alignItems: 'center' }}
                        />
                        <Text style={{ width: 150 }} className='text-center pt-6 text-lg'>Ordinateurs Portables Reconditionnés</Text>
                    </TouchableOpacity>
                </View>

                <View className="space-y-1 mr-4 bg-gray-200 p-6 justify-between">
                <TouchableOpacity className="items-center" onPress={() => { Linking.openURL('https://www.asso-websolidarite.org/boutique_solidaire.html'); }}>
                    <Image
                        source={require('../../assets/image/products/smartphone.png')}
                        style={{ width: 120, height: 120, alignItems: 'center' }}
                    />
                    <Text style={{ width: 150 }} className='text-center pt-6 text-lg'>Smartphone Reconditionnés</Text>
                    </TouchableOpacity>
                </View>

                <View className="space-y-1 mr-4 bg-gray-200 p-6 justify-between">
                <TouchableOpacity className="items-center" onPress={() => { Linking.openURL('https://www.asso-websolidarite.org/boutique_solidaire.html'); }}>
                    <Image
                        source={require('../../assets/image/products/touch-screen.png')}
                        style={{ width: 120, height: 120, alignItems: 'center' }}
                    />
                    <Text style={{ width: 150 }} className='text-center pt-6 text-lg'>Écrans</Text>
                    </TouchableOpacity>
                </View>

                <View className="space-y-1 mr-4 bg-gray-200 p-6 justify-between">
                <TouchableOpacity className="items-center" onPress={() => { Linking.openURL('https://www.asso-websolidarite.org/boutique_solidaire.html'); }}>
                    <Image
                        source={require('../../assets/image/products/mouse.png')}
                        style={{ width: 120, height: 120, alignItems: 'center' }}
                    />
                    <Text style={{ width: 150 }} className='text-center pt-6 text-lg'>Equipement Informatique & Multimédia</Text>
                    </TouchableOpacity>
                </View>

                <View className="space-y-1 mr-4 bg-gray-200 p-6 justify-between">
                <TouchableOpacity className="items-center" onPress={() => { Linking.openURL('https://www.asso-websolidarite.org/boutique_solidaire.html'); }}>
                    <Image
                        source={require('../../assets/image/products/repaired.png')}
                        style={{ width: 120, height: 120, alignItems: 'center' }}
                    />
                    <Text style={{ width: 150 }} className='text-center pt-6 text-lg'>Réparation</Text>
                    </TouchableOpacity>
                </View>



            </ScrollView>
        </View>
    )
}