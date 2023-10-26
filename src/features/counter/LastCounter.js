import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './counterSlice'
import { View, Text, TouchableOpacity } from 'react-native'
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';

export const LastCounter = () => {
    const navigation = useNavigation();
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    const [buttonDis, setButtonDis] = useState(false)
    const [isChecked1, setChecked1] = useState(false);
    const [isChecked2, setChecked2] = useState(false);
    const [isChecked3, setChecked3] = useState(false);
    const [isChecked4, setChecked4] = useState(false);
    const [isChecked5, setChecked5] = useState(false);
    const [isChecked6, setChecked6] = useState(false);

    const addPoint = () => {
        setButtonDis(true);
        dispatch(increment());
        if (count <= 6) {
            navigation.navigate('ResultatFormation');
            console.log('Go formation. Count : ', count)
        } else {
            navigation.navigate('ResultatProduits');
            console.log('Go produits. Count : ', count)
        }
    }

    const zeroPoint = () => {
        //dispatch(increment());
        if (count <= 6) {
            navigation.navigate('ResultatFormation');
            console.log('Go formation. Count : ', count)
        } else {
            navigation.navigate('ResultatProduits');
            console.log('Go produits. Count : ', count)
        }
    }

    return (
        <View
            style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 44 }}
            className='flex-row justify-around mb-11'>
            <TouchableOpacity
                onPress={addPoint}
                disabled={buttonDis}
                style={{ backgroundColor: '#facc15', paddingVertical: 12, paddingHorizontal: 28, marginHorizontal: 28, borderRadius: 12 }} >
                <Text
                    style={{ fontSize: 20, fontWeight: '700', color: '#374151', textAlign: 'center' }}
                >
                    Oui
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={zeroPoint}
                style={{ backgroundColor: '#facc15', paddingVertical: 12, paddingHorizontal: 28, marginHorizontal: 28, borderRadius: 12 }} >
                <Text
                    style={{ fontSize: 20, fontWeight: '700', color: '#374151', textAlign: 'center' }}
                >
                    Non
                </Text>
            </TouchableOpacity>
        </View>

    );
}