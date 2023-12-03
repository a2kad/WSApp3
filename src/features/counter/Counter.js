import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './counterSlice'
import { Text, TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native';

export const Counter = (props) => {
    const navigation = useNavigation();
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    const [buttonDis, setButtonDis ] = useState(false)


    const addPoint = () => {
        setButtonDis(true);
        dispatch(increment());
        navigation.navigate(props.next);
        console.log('Count : ', count)
    }
    return (
        <TouchableOpacity
            onPress={addPoint}
            activeOpacity={0.5}
            disabled={buttonDis}
            style={{ backgroundColor: '#facc15', paddingVertical: 12, 
            paddingHorizontal: 28, marginHorizontal: 28, borderRadius: 12 }} >
            <Text
                style={{ fontSize: 20, fontWeight: '700', color: '#374151',
                textAlign: 'center' }} 
                >
                Oui
            </Text>
        </TouchableOpacity>
    );
}