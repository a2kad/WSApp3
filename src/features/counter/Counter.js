import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './counterSlice'
import { Text, TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native';

export const Counter = (props) => {
    const navigation = useNavigation();
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    
    
    const addPoint = ()=>{
        dispatch(increment());
        navigation.navigate(props.next);
        console.log('Count : ', count)
    }
    return(
    <TouchableOpacity 
        onPress={addPoint}
        style={{backgroundColor:'#facc15', paddingVertical:12, paddingHorizontal:28, marginHorizontal:28, borderRadius:12}} >
        <Text 
        style={{fontSize:20, fontWeight:'700', color:'#374151', textAlign:'center'}}
        >
        Oui
        </Text>
    </TouchableOpacity>
    );
}