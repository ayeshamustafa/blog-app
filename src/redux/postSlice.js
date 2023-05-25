import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'post',
  initialState: [],
  reducers: {
    
  },
});

export const { actions } = postSlice;
export default postSlice.reducer;