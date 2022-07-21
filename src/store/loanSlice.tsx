import { createSlice } from "@reduxjs/toolkit";

interface Loan {
    loanSize:number
}
const initialState: Loan = {
    loanSize:1000 
  }
const loanSlice = createSlice({
    name:'loan',
    initialState,    
    reducers:{
        changeLoanSize(state,action){
            state.loanSize = action.payload
        }          
    }
})

export default loanSlice.reducer
export const { changeLoanSize } = loanSlice.actions