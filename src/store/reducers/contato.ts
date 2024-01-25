import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Contato } from '../../App'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: []
}

const contatoSlice = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.email.toLocaleLowerCase() ===
            action.payload.email.toLocaleLowerCase() ||
          contato.telefone.toLocaleLowerCase() ===
            action.payload.telefone.toLocaleLowerCase()
      )

      if (contatoJaExiste) {
        alert('Já existe um contato com esse email/telefone!')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }

        state.itens.push(contatoNovo)
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexContato = state.itens.findIndex(
        (contato) => contato.id === action.payload.id
      )

      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    }
  }
})

export const { cadastrar, remover, editar } = contatoSlice.actions
export default contatoSlice.reducer
