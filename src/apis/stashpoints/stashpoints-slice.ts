import { IStashpointsData } from '@/types'
import { createSlice } from '@reduxjs/toolkit'

const initialState: IStashpointsData = {
  has_next: false,
  has_prev: false,
  items: [],
  page: 0,
  pages: 0,
  total: 0
}

const stashPointsSlice = createSlice({
  name: 'stashPoints',
  initialState,
  reducers: {
    setStashPoints(state, action) {
      return action.payload
    }
  },
})

export const {
  setStashPoints,
} = stashPointsSlice.actions

export default stashPointsSlice.reducer
