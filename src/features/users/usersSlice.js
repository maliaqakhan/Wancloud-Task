import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: []
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push({ ...action.payload, id: Date.now() });
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex(user => user.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    }
  }
});

export const { addUser, deleteUser, updateUser } = usersSlice.actions;
export default usersSlice.reducer;