import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVECHAT } from "./config";

const chatSlice = createSlice({
    name: 'chatSlice',
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.splice(OFFSET_LIVECHAT,1);
            state.messages.unshift(action.payload);
        }
    }
})

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;