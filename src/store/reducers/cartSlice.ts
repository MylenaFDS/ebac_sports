import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type EstadoDoCarrrinho = {
  itens: Produto[]
}

const initialState: EstadoDoCarrrinho = {
  itens: []
}

const cartSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((p) => p.id === produto.id)) {
        alert('Item já adicionado ao carrinho')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer
