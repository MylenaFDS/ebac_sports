import { configureStore } from '@reduxjs/toolkit'
import cartSliceReducer from './reducers/cartSlice'

import api from '../services/api'

export const store = configureStore({
  reducer: {
    carrinho: cartSliceReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
