import { View, Text, ScrollView, Image, Dimensions } from 'react-native'
import React from 'react'

export default function ProductList() {
    return (
        <View className='my-6'>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                
                    <View className="space-y-1 mr-4 bg-gray-200 p-6 items-center">
                        <Image 
                        source={require('../../assets/image/products/gaming.png')}
                        style={{width: 120, height: 120, alignItems:'center'}}
                        />
                        <Text  style={{width: 150}}  className='text-center pt-6 text-lg'>Ordinateurs Reconditionné</Text>
                    </View>
                    
                    <View className="space-y-1 mr-4 bg-gray-200 p-6 items-center">
                        <Image 
                        source={require('../../assets/image/products/laptop-screen.png')}
                        style={{width: 120, height: 120, alignItems:'center'}}
                        />
                        <Text style={{width: 150}} className='text-center pt-6 text-lg'>Ordinateurs Portables Reconditionné</Text>
                    </View>

                    <View className="space-y-1 mr-4 bg-gray-200 p-6 items-center">
                        <Image 
                        source={require('../../assets/image/products/desktop.png')}
                        style={{width: 120, height: 120, alignItems:'center'}}
                        />
                        <Text style={{width: 150}} className='text-center pt-6 text-lg'>Écrans</Text>
                    </View>

                    <View className="space-y-1 mr-4 bg-gray-200 p-6 items-center">
                        <Image 
                        source={require('../../assets/image/products/mouse.png')}
                        style={{width: 120, height: 120, alignItems:'center'}}
                        />
                        <Text style={{width: 150}} className='text-center pt-6 text-lg'>Equipement Informatique</Text>
                    </View>

                    <View className="space-y-1 mr-4 bg-gray-200 p-6 items-center">
                        <Image 
                        source={require('../../assets/image/products/repaired.png')}
                        style={{width: 120, height: 120, alignItems:'center'}}
                        />
                        <Text style={{width: 150}} className='text-center pt-6 text-lg'>Réparation</Text>
                    </View>

                    
                
            </ScrollView>
        </View>
    )
}