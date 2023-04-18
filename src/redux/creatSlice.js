import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: '',
    name: '',
    id: '',
    email: ''
  },
  reducers: {
    setUser(state, action) {
      state.token = action.payload.token;
      state.name = action.payload.name;
      state.id = action.payload.id;
      state.email = action.payload.email;
    },
    clearUser(state) {
      state.token = '';
      state.name = '';
      state.id = '';
      state.email = '';
    }
  }
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;