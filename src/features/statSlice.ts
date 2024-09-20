import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChangeStatsPayload {
    statsType: 'followers' | 'following',
    sum: number
}
export const statSlice = createSlice({
    name: 'stats',
    initialState: {
        followers: 0,
        following: 0
    },
    reducers: {
        changeStats: (state, action: PayloadAction<ChangeStatsPayload>) => {
            const { statsType, sum } = action.payload;
            let res = state[statsType] + sum;  
            res = res < 0 ? 0 : res;          
            state[statsType] = res;            
        }
    }

})

export const { changeStats } = statSlice.actions;
export default statSlice.reducer;