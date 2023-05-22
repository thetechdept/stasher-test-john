import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs'

const initialState = {
  selectedPlace: {
    address: '',
    latitude: 0,
    longitude: 0,
  },
  dropOffDate: null,
  dropOffTime: null,
  pickUpDate: null,
  pickUpTime: null,
  bagCount: 1,
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setPlace(state, action) {
      return {...state, selectedPlace: action.payload}
    },
    setDropOffDate(state, action) {
      return {...state, dropOffDate: action.payload}
    },
    setDropOffTime(state, action) {
      return {...state, dropOffTime: action.payload}
    },
    setPickUpDate(state, action) {
      return {...state, pickUpDate: action.payload}
    },
    setPickUpTime(state, action) {
      return {...state, pickUpTime: action.payload}
    },
    setBagCount(state, action) {
      return {...state, bagCount: action.payload}
    },
  },
})

export const {
  setPlace, setDropOffDate, setDropOffTime, setPickUpDate,
  setPickUpTime, setBagCount,
} = searchSlice.actions

export default searchSlice.reducer
