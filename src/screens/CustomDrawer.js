import { View, Text, TouchableOpacity, Alert, ImageBackground } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';
import { ArrowRightOnRectangleIcon } from "react-native-heroicons/mini";

const CustomDrawer = (props) => {
    const navigation = useNavigation();

    const handleLogout = async ()=>{
        await signOut(auth);
    }

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} >
            <View style={{padding:20, marginTop:-10, alignItems:'flex-end'}} >
                <Text style={{fontWeight:'700', fontSize:24}}>
                <Text style={{ color:'#FFDE59'}}>W</Text>
                <Text style={{ color:'#5CE1E6'}}>e</Text>
                <Text style={{ color:'#FF5757'}}>b</Text>
                <Text style={{ color:'#FF914D'}}> S</Text>
                <Text style={{ color:'#7ED957'}}>o</Text>
                <Text style={{ color:'#5CE1E6'}}>l</Text>
                <Text style={{ color:'#FF5757'}}>i</Text>
                <Text style={{ color:'#FFDE59'}}>d</Text>
                <Text style={{ color:'#FF914D'}}>a</Text>
                <Text style={{ color:'#7ED957'}}>r</Text>
                <Text style={{ color:'#5CE1E6'}}>i</Text>
                <Text style={{ color:'#FF5757'}}>t</Text>
                <Text style={{ color:'#FFDE59'}}>é</Text></Text>
            </View>
                <DrawerItemList {...props} />
                <DrawerItem labelStyle={{fontSize:15, color:'#737373'}} label={'Se déconnecter'} onPress={handleLogout} icon={()=>(<ArrowRightOnRectangleIcon marginRight={-24} color='#737373'  size={24} />)} />
            </DrawerContentScrollView>
            <View style={{ alignItems: 'flex-end', padding: 18 }}>
            <TouchableOpacity onPress={()=>{Alert.alert('Web Solidarité App','Version 1.3.0\nCreated by Reshetnikov Ruslan')}}>
                <Text style={{fontSize:12,color:'#d1d5db'}}>v.1.3.0</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomDrawer