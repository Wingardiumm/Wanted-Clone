import { configureStore, createSlice } from "@reduxjs/toolkit";

let signInEmail = createSlice({
    name: 'signInEmail',
    initialState: '',
    reducers: {
        setSignInEmail(state, action) {
            return state = action.payload;
        }
    }
})
let signUpPageOn = createSlice({
    name: 'signUpPageOn',
    initialState: false,
    reducers: {
        setSignUpPageOn(state, action) {
            return state = action.payload;
        }
    }
})
let signInPageOn = createSlice({
    name: 'signInPageOn',
    initialState: true,
    reducers: {
        setSignInPageOn(state, action) {
            return state = action.payload;
        }
    }
})
let inputPasswordPageOn = createSlice({
    name: 'inputPasswordPageOn',
    initialState: false,
    reducers: {
        setInputPasswordPageOn(state, action) {
            return state = action.payload;
        }
    }
})

export let { setSignInEmail } = signInEmail.actions
export let { setSignInPageOn } = signInPageOn.actions
export let { setSignUpPageOn } = signUpPageOn.actions
export let { setInputPasswordPageOn } = inputPasswordPageOn.actions
export default configureStore({
    reducer: {
        signInEmail: signInEmail.reducer,
        signInPageOn: signInPageOn.reducer,
        signUpPageOn: signUpPageOn.reducer,
        inputPasswordPageOn: inputPasswordPageOn.reducer,
        
    }
})