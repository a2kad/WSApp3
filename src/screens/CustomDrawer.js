import { View, Text, TouchableOpacity, Alert, ImageBackground } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

import { useNavigation } from '@react-navigation/native';

const CustomDrawer = (props) => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
            <ImageBackground source={require('../../assets/image/bg-drawer.png')} style={{padding:20, marginTop:-10, alignItems:'flex-end'}} >
                <Text style={{fontWeight:'700', fontSize:24, color:'white'}}>Web Solidarité</Text>
            </ImageBackground>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View style={{ alignItems: 'flex-end', padding: 18 }}>
            <TouchableOpacity onPress={()=>{Alert.alert('Author info','Created by Reshetnikov Ruslan')}}>
                <Text style={{fontSize:12,color:'#d1d5db'}}>v.1.0.0</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomDrawer