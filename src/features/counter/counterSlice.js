import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            state.value += 1
        },
        setZero: state => {
            state.value = 0
        }
    }
})

export const { increment, setZero } = counterSlice.actions
export default counterSlice.reducer