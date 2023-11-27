import { createSlice } from '@reduxjs/toolkit';


const userSlice = createSlice({
    name: 'user',
    initialState: { formData: [] },
    reducers: {
        addUser: (state, action) => {
            state.formData = [...state.formData, action.payload];
        },
        deleteUser: (state, action) => {
            state.formData = state.formData.filter(user => user.id !== action.payload);
        },
        editUser: (state, action) => {
            const { id, updatedUser } = action.payload;
            state.formData = state.formData.map(user =>
                user.id === id ? { ...user, ...updatedUser } : user
            );
        },

    }
})

export const { addUser, deleteUser, editUser } = userSlice.actions;

export default userSlice.reducer;
