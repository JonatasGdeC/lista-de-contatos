import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { store } from './store'

import ListaContato from './containers/ListaContatos'
import FormCadastro from './containers/FormCadastro'
import EstiloGlobal, { Container } from './styles'

export type Contato = {
  nome: string
  email: string
  telefone: string
  id: number
}

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <ListaContato />
  },
  {
    path: '/cadastro',
    element: <FormCadastro />
  }
])

function App() {
  return (
    <Provider store={store}>
      <Container>
        <EstiloGlobal />
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
