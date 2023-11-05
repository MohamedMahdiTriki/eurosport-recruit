import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit"
import { Player } from "../interfaces/player"


interface InitialState {
    players: Player[]
}

const initialState: InitialState = {
    players: []
}

//fetchAll(
//     state,
//     action: PayloadAction<Cake[], string, { currentPage: number }>,
//   ) {
//     state.all = action.payload;
//     state.meta = action.meta;
//   },

// fetchAll: {
//     reducer(
//       state,
//       action: PayloadAction<Cake[], string, { currentPage: number }>
//     ) {
//       state.all = action.payload
//       state.meta = action.meta
//     },
//     prepare(payload: Cake[], currentPage: number) {
//       return { payload, meta: { currentPage } }
//     }
//   }

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: { 
        getPlayers(state, action: PayloadAction<Player[]>) { 
            state.players = action.payload 
        }
        // getPlayers: {
        //     reducer(state, action: PayloadAction<Player[]>) {
        //               state.players = action.payload
        //             },
        //     prepare(payload: Player[]) {
        //                return { payload }
        //              }
        // }
    } 
})

const store = configureStore({
    reducer : playerSlice.reducer
})

export const playerAction = playerSlice.actions
export default store