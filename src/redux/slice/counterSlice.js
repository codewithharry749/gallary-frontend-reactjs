import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: "Image_gallary",
    initialState: {
        val: 1
    },
    reducers: {
        Inc: (state, action) => {
            state.val += 1
            if (state.val > 3) {
                state.val = 1
            }

        },
        Dec: (state, action) => {
            state.val -= 1
            if (state.val < 1) {
                state.val = 1
            }
        },
    }
});

export const { Inc, Dec } = counterSlice.actions;

export default counterSlice.reducer;