import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './counterSlice'
import { View, Text, TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native';

export const LastCounter = () => {
    const navigation = useNavigation();
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()


    const addPoint = () => {
        dispatch(increment());
        if (count <= 5) {
            navigation.navigate('ResultatFormation');
            console.log('Go formation. Count : ', count)
        } else {
            navigation.navigate('ResultatProduits');
            console.log('Go produits. Count : ', count)
        }

    }

    const zeroPoint = () => {
        //dispatch(increment());
        if (count <= 5) {
            navigation.navigate('ResultatFormation');
            console.log('Go formation. Count : ', count)
        } else {
            navigation.navigate('ResultatProduits');
            console.log('Go produits. Count : ', count)
        }
    }

    return (
        <View 
        style={{flexDirection:'row', justifyContent:'space-around', marginBottom:44}}
        className='flex-row justify-around mb-11'>
    <TouchableOpacity 
        onPress={addPoint}
        style={{backgroundColor:'#facc15', paddingVertical:12, paddingHorizontal:28, marginHorizontal:28, borderRadius:12}} >
        <Text 
        style={{fontSize:20, fontWeight:'700', color:'#374151', textAlign:'center'}}
        >
        Oui
        </Text>
    </TouchableOpacity>

    <TouchableOpacity 
        onPress={zeroPoint}
        style={{backgroundColor:'#facc15', paddingVertical:12, paddingHorizontal:28, marginHorizontal:28, borderRadius:12}} >
        <Text 
        style={{fontSize:20, fontWeight:'700', color:'#374151', textAlign:'center'}}
        >
        Non
        </Text>
    </TouchableOpacity>
    </View>
    );
}